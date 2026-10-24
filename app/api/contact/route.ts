import { headers } from "next/headers";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  phone?: unknown;
  country?: unknown;
  service?: unknown;
  currency?: unknown;
  budget?: unknown;
  customBudget?: unknown;
  details?: unknown;
  contactMethod?: unknown;
  consent?: unknown;
  website?: unknown;
};

const attempts = new Map<string, number[]>();
const windowMs = 15 * 60 * 1000;
const maxAttempts = 5;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").slice(0, maxLength) : "";
}

function jsonError(message: string, status: number) {
  return Response.json({ message }, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const requestOrigin = new URL(request.url).origin;
  if (!origin || origin !== requestOrigin) return jsonError("This request could not be verified. Refresh the page and try again.", 403);

  const length = Number(request.headers.get("content-length") ?? "0");
  if (length > 12_000) return jsonError("Your inquiry is too large. Please shorten it and try again.", 413);
  if (!request.headers.get("content-type")?.includes("application/json")) return jsonError("Unsupported request format.", 415);

  let raw: ContactPayload;
  try {
    raw = await request.json() as ContactPayload;
  } catch {
    return jsonError("Please check the form and try again.", 400);
  }
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return jsonError("Please check the form and try again.", 400);
  if (clean(raw.website, 200)) return jsonError("We couldn’t send your inquiry. Please try again.", 400);

  const name = clean(raw.name, 100);
  const email = clean(raw.email, 254);
  const company = clean(raw.company, 120);
  const phone = clean(raw.phone, 40);
  const country = clean(raw.country, 80);
  const service = clean(raw.service, 100);
  const currency = clean(raw.currency, 10);
  const budget = clean(raw.budget, 80);
  const customBudget = clean(raw.customBudget, 80);
  const details = clean(raw.details, 5000);
  const contactMethod = clean(raw.contactMethod, 20);

  if (
    name.length < 2 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !country ||
    !service ||
    !["PKR", "USD", "Other"].includes(currency) ||
    details.length < 20 ||
    !["Email", "Phone", "WhatsApp"].includes(contactMethod) ||
    raw.consent !== "yes"
  ) return jsonError("Please complete the required fields with valid details.", 400);

  const requestHeaders = await headers();
  const forwardedFor = requestHeaders.get("x-forwarded-for");
  const clientKey = forwardedFor?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const recent = (attempts.get(clientKey) ?? []).filter((time) => now - time < windowMs);
  if (recent.length >= maxAttempts) return jsonError("Too many inquiries were sent from this connection. Please try again in 15 minutes.", 429);
  recent.push(now);
  attempts.set(clientKey, recent);
  if (attempts.size > 5000) {
    for (const [key, times] of attempts) {
      if (!times.some((time) => now - time < windowMs)) attempts.delete(key);
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("Contact form email is not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL.");
    return jsonError("The inquiry form is not configured yet. Please contact the site owner directly.", 503);
  }

  const text = [
    "New website inquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Business: ${company || "Not provided"}`,
    `Phone: ${phone || "Not provided"}`,
    `Country: ${country}`,
    `Service: ${service}`,
    `Budget: ${customBudget || budget || "Not provided"}`,
    `Preferred contact: ${contactMethod}`,
    "",
    "Project details:",
    details,
  ].join("\n");

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `New project inquiry from ${name}`, text }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
  } catch (error) {
    console.error("Contact form email delivery request failed.", error);
    return jsonError("We couldn’t deliver your inquiry right now. Please try again shortly.", 502);
  }

  if (!response.ok) {
    console.error("Contact form email provider rejected the request.", { status: response.status });
    return jsonError("We couldn’t deliver your inquiry right now. Please try again shortly.", 502);
  }

  return Response.json(
    { message: "Thanks for reaching out. Your inquiry has been sent successfully." },
    { headers: { "Cache-Control": "no-store" } },
  );
}
