"use client";

import { useState, type FormEvent } from "react";

type FormState = { kind: "idle" | "sending" | "success" | "error"; message: string };
type Currency = "PKR" | "USD" | "Other";

const budgetOptions: Record<Currency, string[]> = {
  PKR: ["Under PKR 100,000", "PKR 100,000–250,000", "PKR 250,000–500,000", "PKR 500,000–1,000,000", "Over PKR 1,000,000"],
  USD: ["Under USD 500", "USD 500–1,500", "USD 1,500–5,000", "Over USD 5,000"],
  Other: ["Custom budget"],
};

function isCurrency(value: string): value is Currency {
  return value === "PKR" || value === "USD" || value === "Other";
}

export function ContactForm() {
  const [state, setState] = useState<FormState>({ kind: "idle", message: "" });
  const [currency, setCurrency] = useState<Currency>("PKR");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState({ kind: "sending", message: "Sending your inquiry…" });
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result: { message?: string } = await response.json();
      if (!response.ok) {
        setState({ kind: "error", message: result.message ?? "We couldn’t send your inquiry. Please try again." });
        return;
      }
      form.reset();
      setCurrency("PKR");
      setState({ kind: "success", message: result.message ?? "Your inquiry has been sent." });
    } catch {
      setState({ kind: "error", message: "We couldn’t reach the server. Please check your connection and try again." });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Full name <span>*</span><input name="name" autoComplete="name" required minLength={2} maxLength={100} /></label>
        <label>Email address <span>*</span><input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      </div>
      <div className="form-row">
        <label>Business name <small>Optional</small><input name="company" autoComplete="organization" maxLength={120} /></label>
        <label>Phone or WhatsApp <small>Optional</small><input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
      </div>
      <div className="form-row">
        <label>Country <span>*</span><input name="country" autoComplete="country-name" required maxLength={80} placeholder="Where are you based?" /></label>
        <label>Service you’re interested in <span>*</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            <option>Website design & development</option><option>Business website</option><option>E-commerce</option><option>Landing page development</option><option>Website redesign & optimization</option><option>SEO</option><option>Technical SEO</option><option>On-page SEO</option><option>Local SEO</option><option>Keyword research & content strategy</option><option>Website maintenance</option><option>Not sure yet</option><option>Other</option>
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>Budget currency <span>*</span>
          <select name="currency" value={currency} required onChange={(event) => { if (isCurrency(event.target.value)) setCurrency(event.target.value); }}><option>PKR</option><option>USD</option><option>Other</option></select>
        </label>
        <label>Budget range <small>Optional</small>
          <select name="budget" defaultValue=""><option value="">Prefer not to say</option>{budgetOptions[currency].map((option) => <option key={option}>{option}</option>)}</select>
        </label>
      </div>
      {currency === "Other" && <label>Custom budget and currency <small>Optional</small><input name="customBudget" maxLength={80} placeholder="For example, CAD 1,000–2,000" /></label>}
      <label>Project details <span>*</span><textarea name="details" required minLength={20} maxLength={5000} rows={6} placeholder="What are you hoping to build or improve?" /></label>
      <label>Preferred way to contact you <span>*</span>
        <select name="contactMethod" defaultValue="Email" required><option>Email</option><option>Phone</option><option>WhatsApp</option></select>
      </label>
      <label className="honeypot" aria-hidden="true">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <label className="consent-label"><input name="consent" type="checkbox" value="yes" required /><span>I agree that DEV and SEO may use these details to respond to my inquiry. See the <a href="/privacy-policy">Privacy Policy</a>. <strong>*</strong></span></label>
      <button className="button form-submit" type="submit" disabled={state.kind === "sending"}>{state.kind === "sending" ? "Sending…" : "Send your inquiry"} <span aria-hidden="true">↗</span></button>
      <p className={`form-status ${state.kind}`} role="status" aria-live="polite">{state.message || "We’ll only use your details to respond to your inquiry."}</p>
    </form>
  );
}
