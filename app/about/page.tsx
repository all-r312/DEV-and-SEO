import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, Eyebrow } from "@/app/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: "Meet DEV and SEO: a Pakistan-based digital agency focused on thoughtful web development and practical SEO.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero"><div className="container page-hero-inner"><Eyebrow>A little about us</Eyebrow><h1>Good digital work begins with <span>understanding.</span></h1><p>DEV and SEO helps businesses make their online presence clearer, more useful, and easier to grow—one thoughtful project at a time.</p></div></section>
      <section className="section"><div className="container about-intro"><div><Eyebrow>Our point of view</Eyebrow><h2>Technology is a tool. Your business is the reason.</h2></div><div><p>We’re a digital agency based in Pakistan, focused on web development and search engine optimization. Our work starts by listening: what your customers need, what your business is trying to achieve, and what would make a meaningful difference.</p><p>DEV and SEO is in its early stage. We don’t make up a long company history, client list, or results. We’d rather be honest about where we are and do careful, useful work from here.</p></div></div></section>
      <section className="section section-dark"><div className="container value-grid"><div className="value-intro"><Eyebrow>Our mission</Eyebrow><h2>Make the digital side of business feel more manageable.</h2><p>Give business owners clear choices, considered execution, and a partner who takes the details seriously.</p></div><div className="approach-list"><div className="approach-item"><span>01</span><div><h3>Be clear</h3><p>Explain the work, the trade-offs, and what’s included in plain language.</p></div></div><div className="approach-item"><span>02</span><div><h3>Stay curious</h3><p>Understand the business before suggesting tools or tactics.</p></div></div><div className="approach-item"><span>03</span><div><h3>Do the useful work</h3><p>Focus on accessibility, performance, and the experience customers actually have.</p></div></div></div></div></section>
      <section className="section"><div className="container split-content"><div><Eyebrow>How we work</Eyebrow><h2>Thoughtful planning. Honest communication.</h2><p>We collaborate with you to define a realistic scope, build with care, and make sure you understand how to take the work forward. Search visibility takes time and depends on many factors; we focus on sound foundations, useful content, and steady improvements.</p></div><div className="detail-aside"><span className="detail-aside-mark">PK</span><p>Currently based in Pakistan, with a focus on building local experience and the flexibility to discuss projects with international clients.</p><Link className="text-link" href="/services">Explore what we do <span aria-hidden="true">↗</span></Link></div></div></section>
      <div className="container"><CtaBand title="Let’s start with a conversation." description="Tell us what your business needs. We’ll be open about what we can help with." /></div>
    </main>
  );
}
