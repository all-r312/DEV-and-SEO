import type { Metadata } from "next";
import { Eyebrow } from "@/app/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how DEV and SEO handles information submitted through this website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <section className="page-hero"><div className="container page-hero-inner"><Eyebrow>Website information</Eyebrow><h1>Privacy <span>policy.</span></h1><p>Draft for review before launch · Last updated October 2026</p></div></section>
      <article className="container legal-content">
        <p>This draft describes the intended handling of information submitted through the DEV and SEO website. The owner must review and update it to reflect the final business details, services, hosting, and applicable legal requirements before publication.</p>
        <h2>Who we are</h2><p>DEV and SEO is a digital agency currently based in Pakistan. For privacy questions, use the contact form on this website and identify your message as a privacy inquiry. Add a verified business email and legal entity details here before launch.</p>
        <h2>Information you provide</h2><p>If you submit the inquiry form, we receive the details you choose to provide, such as your name, email address, business, phone number, country, service interest, budget, preferred contact method, and project description. Please do not include sensitive personal information.</p>
        <h2>How information is used</h2><p>We use inquiry details to understand and respond to your request, discuss a possible project, and protect the form from misuse. We do not currently offer account registration, analytics-based advertising, or persistent lead storage through this website.</p>
        <h2>Email delivery and retention</h2><p>When configured, form submissions are sent to the agency using Resend, an email delivery provider. The provider processes that information to deliver the message and may retain it under its own policies. Messages may remain in the agency’s email account for as long as needed to handle the inquiry and related business records. Confirm the provider, retention approach, and any further processors before launch.</p>
        <h2>Sharing and international transfers</h2><p>Information is shared with service providers only as needed to operate the site and respond to inquiries. Email delivery may involve processing outside your country. Confirm the actual hosting and provider locations and safeguards before launch. We do not sell inquiry information.</p>
        <h2>Your choices</h2><p>Depending on where you live, you may have rights to access, correct, delete, or object to certain uses of your personal information. Contact the agency through the contact page to make a request. Applicable rights and response periods depend on local law.</p>
        <h2>Security and changes</h2><p>Reasonable technical and organizational measures should be used to protect inquiries. No internet transmission or storage method can be guaranteed completely secure. This policy should be updated if the site’s integrations or data practices change.</p>
        <h2>Owner review required</h2><p>Before launch, supply a verified contact address, confirm the email provider and hosting arrangements, set appropriate retention and deletion practices, and have this policy reviewed for the jurisdictions in which the business operates. This draft is not legal advice and does not claim legal compliance.</p>
      </article>
    </main>
  );
}
