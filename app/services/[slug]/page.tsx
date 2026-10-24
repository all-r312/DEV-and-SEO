import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, Eyebrow, FaqList } from "@/app/components/ui";
import { getService, services } from "@/lib/site";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: `${service.title} | DEV and SEO`, description: service.description, type: "website" },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const faqItems = [
    { question: `What does ${service.shortTitle.toLowerCase()} include?`, answer: `${service.detail} The precise scope and deliverables are agreed with you before work begins.` },
    { question: "Is this service right for my business?", answer: service.fit },
    { question: "Can I combine this with another service?", answer: "Yes. We can discuss a combined scope based on your priorities, timing, and budget." },
  ];

  return (
    <main>
      <section className="page-hero service-hero"><div className="container page-hero-inner"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><span>{service.shortTitle}</span></div><Eyebrow>Services · {service.shortTitle}</Eyebrow><h1>{service.title}, <span>built around you.</span></h1><p>{service.description}</p><Link className="button" href="/contact">Discuss your project <span aria-hidden="true">↗</span></Link></div></section>
      <section className="section"><div className="container service-detail-grid"><div><Eyebrow>A useful place to start</Eyebrow><h2>Clear answers. The right next step.</h2><p>{service.detail}</p><p>We’ll first understand the outcome you’re looking for. Then we’ll recommend an appropriate scope, explain what’s included, and agree the next steps with you.</p></div><div className="service-includes"><h3>What we can work on</h3>{service.deliverables.map((item) => <p key={item}><span>✓</span>{item}</p>)}</div></div></section>
      <section className="section section-process"><div className="container split-content"><div><Eyebrow>Who it’s for</Eyebrow><h2>Made for the work you need to do.</h2><p>{service.fit}</p></div><div className="detail-aside"><span className="detail-aside-mark">↗</span><p>Not sure if you need this yet? That’s okay. We can look at your current situation and decide on a sensible starting point.</p><Link className="text-link" href="/contact">Ask us about it <span aria-hidden="true">↗</span></Link></div></div></section>
      <section className="section"><div className="container faq-grid"><div><Eyebrow>Good to know</Eyebrow><h2>A few useful answers.</h2></div><FaqList items={faqItems} /></div></section>
      <div className="container"><CtaBand title="Let’s talk about what you need." description="No pressure—just a clear conversation about your goals and options." /></div>
    </main>
  );
}
