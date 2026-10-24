import type { Metadata } from "next";
import { ContactForm } from "@/app/components/contact-form";
import { Eyebrow } from "@/app/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell DEV and SEO about your website or SEO project and request a clear, no-pressure conversation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero contact-hero"><div className="container page-hero-inner"><Eyebrow>Start a conversation</Eyebrow><h1>Tell us what you’re <span>working towards.</span></h1><p>Share a few details and we’ll get back to you to understand your project and discuss a clear next step.</p></div></section>
      <section className="section contact-section"><div className="container contact-layout"><aside className="contact-aside"><Eyebrow>Good to know</Eyebrow><h2>A useful first conversation.</h2><p>There’s no pressure to have everything figured out. The more you can share about your goals, the more helpful our first response can be.</p><div className="contact-note"><span>01</span><p>Tell us the basics about your business and what you want to improve.</p></div><div className="contact-note"><span>02</span><p>We’ll review your inquiry and follow up using your preferred contact method.</p></div><div className="contact-note"><span>03</span><p>If it looks like a good fit, we’ll talk through scope and next steps.</p></div><div className="contact-location"><span className="status-dot" /> Based in Pakistan<br />International inquiries welcome</div></aside><div className="form-panel"><div className="form-heading"><span>PROJECT INQUIRY</span><span><i /> All fields marked * are required</span></div><ContactForm /></div></div></section>
    </main>
  );
}
