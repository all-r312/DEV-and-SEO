import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, Eyebrow, SectionHeading, ServiceCard } from "@/app/components/ui";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Web Development & SEO Services",
  description: "Explore practical website development, e-commerce, SEO, local SEO, and website support services from DEV and SEO.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero"><div className="container page-hero-inner"><Eyebrow>What we can help with</Eyebrow><h1>Digital support that starts with <span>your business.</span></h1><p>Choose a focused service or let’s figure out the right combination together. Every project begins with a clear conversation about what you need.</p><Link className="button" href="/contact">Talk through your project <span aria-hidden="true">↗</span></Link></div></section>
      <section className="section"><div className="container"><SectionHeading eyebrow="Our services" title="The right help, for the next step." description="These are the services we’re building around. Availability and scope are confirmed individually before any project begins." /><div className="service-grid service-grid-wide">{services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}</div></div></section>
      <section className="section section-process"><div className="container split-content"><div><Eyebrow>Clear from the start</Eyebrow><h2>Know what you’re getting—and why.</h2><p>We’ll talk through your audience, the work involved, and how to prioritize it. Before anything begins, you’ll have a clear scope, expected deliverables, and a realistic timeline.</p></div><div className="deliverable-list">{["A project scope you can understand", "Recommendations tied to your goals", "A clear point of contact", "A handover that makes next steps easier"].map((item) => <p key={item}><span>✓</span>{item}</p>)}</div></div></section>
      <div className="container"><CtaBand title="Not sure which service is right?" description="Tell us what you want to improve. We’ll help make the options clearer." /></div>
    </main>
  );
}
