import type { Metadata } from "next";
import { Eyebrow } from "@/app/components/ui";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Read the draft terms for using the DEV and SEO website.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <section className="page-hero"><div className="container page-hero-inner"><Eyebrow>Website information</Eyebrow><h1>Terms and <span>conditions.</span></h1><p>Draft for review before launch · Last updated October 2026</p></div></section>
      <article className="container legal-content">
        <p>This draft is a starting point only. The owner should add verified business details and obtain appropriate legal review before publishing or relying on these terms.</p>
        <h2>Using this website</h2><p>You may use this site to learn about DEV and SEO and to send a genuine inquiry. Do not misuse the site, interfere with its operation, submit unlawful content, or attempt unauthorized access.</p>
        <h2>Website information</h2><p>Content is provided for general information. Service descriptions are not a binding offer or a guarantee of availability, project outcome, search position, traffic, or revenue. Project work begins only after scope, fees, timing, and terms are agreed separately in writing.</p>
        <h2>Demonstration work</h2><p>Portfolio items currently shown are explicitly labeled fictional demonstration concepts. They are not client engagements, endorsements, or evidence of achieved results.</p>
        <h2>Intellectual property</h2><p>Unless otherwise stated, site text, visual identity, and original design elements belong to DEV and SEO or their respective rights holders. Do not copy or reuse materials without permission. Third-party marks remain the property of their owners.</p>
        <h2>External services and links</h2><p>This website may link to external services or rely on third-party providers. Those providers operate under their own terms and privacy practices. DEV and SEO is not responsible for content or availability outside its control.</p>
        <h2>Limitation and applicable law</h2><p>To the extent permitted by applicable law, the website is provided without a guarantee of uninterrupted availability. These draft terms do not limit rights that cannot lawfully be excluded. Add the correct contracting entity, governing law, dispute process, and any required consumer protections after legal review.</p>
        <h2>Changes and contact</h2><p>Terms may be updated when the website or business changes. For questions, use the contact page and identify your message as a terms inquiry. Add verified business contact details before launch.</p>
        <h2>Owner review required</h2><p>Confirm the business entity, jurisdiction, customer locations, intellectual property ownership, and applicable consumer rules with a qualified legal professional. This draft is not legal advice and does not claim legal compliance.</p>
      </article>
    </main>
  );
}
