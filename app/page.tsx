import Link from "next/link";
import { CtaBand, Eyebrow, FaqList, SectionHeading, ServiceCard } from "@/app/components/ui";
import { demoProjects, faqs, services } from "@/lib/site";

const approach = [
  { number: "01", title: "Clarity before code", text: "We begin with your goals and your customers, then agree on a useful scope." },
  { number: "02", title: "Built for real people", text: "Responsive layouts, readable content, and clear next steps come first." },
  { number: "03", title: "Progress you can follow", text: "You’ll know what’s happening, what’s next, and what needs your input." },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>Digital, made more useful</Eyebrow>
            <h1>Websites that work harder. <span>SEO that helps you grow.</span></h1>
            <p className="hero-intro">We help businesses build a stronger online presence with thoughtful web development and practical search strategy.</p>
            <div className="hero-actions">
              <Link className="button" href="/contact">Get a free quote <span aria-hidden="true">↗</span></Link>
              <Link className="button button-outline" href="/services">Explore our services <span aria-hidden="true">→</span></Link>
            </div>
            <div className="hero-note"><span className="status-dot" /> Based in Pakistan · Open to the right project, wherever you are</div>
          </div>
          <div className="hero-art" aria-label="Illustration of a website and its connected search insights">
            <div className="art-glow" />
            <div className="art-window">
              <div className="art-window-top"><div className="art-dots"><i /><i /><i /></div><span>yourbusiness.com</span><span className="art-window-menu">···</span></div>
              <div className="art-page">
                <div className="art-nav"><span className="art-wordmark">brand<span>.</span></span><span>Services　 About　 Contact</span></div>
                <div className="art-page-content">
                  <span className="art-label">A better way to move forward</span>
                  <div className="art-headline">Good work.<br /><span>Clear message.</span></div>
                  <div className="art-line art-line-long" /><div className="art-line" />
                  <div className="art-small-button">Let’s talk <span>↗</span></div>
                  <div className="art-graphic"><div className="art-graphic-ring" /><div className="art-graphic-dot" /><span>grow</span></div>
                </div>
                <div className="art-bottom-bar"><span>DESIGNED AROUND YOUR BUSINESS</span><span>01 — 04</span></div>
              </div>
            </div>
            <div className="art-float art-float-search"><span className="float-icon">⌕</span><span><b>Search visibility</b><small>Built on useful foundations</small></span><span className="float-arrow">↗</span></div>
            <div className="art-float art-float-growth"><span className="growth-mark">↗</span><span><b>Room to grow</b><small>One considered step at a time</small></span></div>
            <span className="art-caption">A digital presence with purpose.</span>
          </div>
        </div>
        <div className="hero-bottom container"><span>WHAT WE BRING TO THE TABLE</span><div><span>Web development</span><i>·</i><span>SEO strategy</span><i>·</i><span>Digital support</span></div></div>
      </section>

      <section className="section section-services">
        <div className="container">
          <SectionHeading eyebrow="What we do" title="A better digital foundation starts here." description="From your first website to a smarter search strategy, get practical support shaped around your business." />
          <div className="service-grid">
            {services.slice(0, 4).map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}
          </div>
          <div className="section-link-row"><span>Need something more specific? We’ll scope the right fit together.</span><Link className="text-link" href="/services">All services <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container value-grid">
          <div className="value-intro">
            <Eyebrow>Good work, thoughtfully done</Eyebrow>
            <h2>Digital should feel less complicated.</h2>
            <p>You deserve a partner who listens, explains the options, and builds around the way your business really works.</p>
            <Link className="text-link text-link-light" href="/about">Meet DEV and SEO <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="approach-list">{approach.map((item) => <div className="approach-item" key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="approach-arrow" aria-hidden="true">↗</span></div>)}</div>
        </div>
      </section>

      <section className="section section-process">
        <div className="container">
          <SectionHeading eyebrow="A clear process" title="Steady progress. No guesswork." description="A simple, collaborative path from first conversation to launch and beyond." centered />
          <div className="process-grid">
            {[["01", "Discover", "Understand your goals, audience, and what success should look like."], ["02", "Plan", "Agree on the right scope, structure, content, and priorities."], ["03", "Build", "Design and develop with regular check-ins and thoughtful testing."], ["04", "Improve", "Launch with a clear handover and options for what comes next."]].map(([number, title, text]) => <div className="process-step" key={number}><span className="step-number">{number}</span><span className="step-connector" /><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-work">
        <div className="container">
          <div className="work-heading"><SectionHeading eyebrow="Selected concepts" title="Good ideas, made tangible." description="A look at the kind of thoughtful digital work we’re here to create." /><Link className="text-link work-all-link" href="/portfolio">Explore our work <span aria-hidden="true">↗</span></Link></div>
          <div className="project-grid">{demoProjects.slice(0, 2).map((project, index) => <article className="project-card" key={project.title}><div className={`project-art ${project.tone}`}><div className="project-mockup"><div className="mockup-header"><span>{index === 0 ? "NORTHSTAR" : "FIELD & FORM"}</span><span>MENU　 +</span></div><div className="mockup-body"><span>{index === 0 ? "INDEPENDENT CREATIVE STUDIO" : "OBJECTS FOR SLOWER LIVING"}</span><b>{index === 0 ? <>Make good<br />things matter.</> : <>Everyday,<br />considered.</>}</b><i>{index === 0 ? "Explore our work　↗" : "Discover the collection　↗"}</i></div><div className="mockup-shape" /></div><span className="demo-stamp">DEMONSTRATION CONCEPT</span></div><div className="project-info"><div><span>{project.category}</span><h3>{project.title}</h3></div><span aria-hidden="true">↗</span></div><p className="project-description">{project.description}</p></article>)}</div>
          <p className="demo-note">These are fictional demonstration concepts, not client engagements or claims of past results.</p>
        </div>
      </section>

      <section className="section section-faq">
        <div className="container faq-grid">
          <div><SectionHeading eyebrow="A few good questions" title="Before we get started." description="A little clarity on the things businesses usually ask us first." /><Link className="text-link" href="/contact">Have another question? Let’s talk <span aria-hidden="true">↗</span></Link></div>
          <FaqList items={faqs} />
        </div>
      </section>

      <div className="container"><CtaBand /></div>
    </main>
  );
}
