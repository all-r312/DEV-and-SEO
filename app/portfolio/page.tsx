import type { Metadata } from "next";
import { CtaBand, Eyebrow } from "@/app/components/ui";
import { demoProjects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore clearly labeled demonstration concepts showing the kind of web and digital work DEV and SEO is building toward.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <main>
      <section className="page-hero"><div className="container page-hero-inner"><Eyebrow>Selected concepts</Eyebrow><h1>Work with intention, <span>from the first sketch.</span></h1><p>We’re building our portfolio. These fictional demonstration concepts show possible directions—not client projects, endorsements, or results.</p></div></section>
      <section className="section"><div className="container project-grid portfolio-grid">{demoProjects.map((project, index) => <article className="project-card" key={project.title}><div className={`project-art ${project.tone}`}><div className="project-mockup"><div className="mockup-header"><span>{index === 0 ? "NORTHSTAR" : index === 1 ? "FIELD & FORM" : "HARBOR DENTAL"}</span><span>MENU　 +</span></div><div className="mockup-body"><span>{project.category.toUpperCase()}</span><b>{index === 0 ? <>Make good<br />things matter.</> : index === 1 ? <>Everyday,<br />considered.</> : <>Care that<br />feels closer.</>}</b><i>Discover the concept　↗</i></div><div className="mockup-shape" /></div><span className="demo-stamp">DEMONSTRATION CONCEPT</span></div><div className="project-info"><div><span>{project.category}</span><h2>{project.title}</h2></div><span aria-hidden="true">↗</span></div><p className="project-description">{project.description}</p><p className="project-services"><strong>Focus:</strong> {project.services}</p></article>)}</div></section>
      <div className="container"><CtaBand title="Have a real project to share?" description="We’d love to hear what you’re working on and explore how we could help." /></div>
    </main>
  );
}
