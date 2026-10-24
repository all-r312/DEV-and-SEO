import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, Eyebrow } from "@/app/components/ui";

export const metadata: Metadata = {
  title: "Insights",
  description: "Practical guidance on websites, SEO, and digital growth from DEV and SEO.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main>
      <section className="page-hero"><div className="container page-hero-inner"><Eyebrow>Notes on the digital side</Eyebrow><h1>Useful ideas, <span>without the noise.</span></h1><p>We’re preparing practical articles on websites, search, and growing a business online. We’ll publish them when they’re ready to be genuinely useful.</p></div></section>
      <section className="section blog-empty-section"><div className="container blog-empty"><div className="blog-empty-icon">✳</div><span className="eyebrow">Editorial desk</span><h2>Thoughtful articles are on the way.</h2><p>No filler or rushed advice—just clear, considered guidance for business owners. In the meantime, we’re happy to talk through your questions directly.</p><Link className="button" href="/contact">Ask us a question <span aria-hidden="true">↗</span></Link></div></section>
      <div className="container"><CtaBand title="Need an answer sooner?" description="Tell us what you’re trying to solve, and we’ll point you in a useful direction." /></div>
    </main>
  );
}
