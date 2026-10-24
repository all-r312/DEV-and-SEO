import Link from "next/link";
import { services } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand brand-light" href="/">
            <span className="brand-mark" aria-hidden="true">&lt;/&gt;</span>
            <span>DEV <span className="brand-and">and</span> SEO</span>
          </Link>
          <p>Thoughtful websites and practical SEO for businesses ready to grow online.</p>
          <span className="footer-location">Based in Pakistan · Working with care, wherever you are</span>
        </div>
        <div>
          <h2>Explore</h2>
          <ul>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/portfolio">Selected work</Link></li>
            <li><Link href="/blog">Insights</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2>Services</h2>
          <ul>
            {services.slice(0, 4).map((service) => (
              <li key={service.slug}><Link href={`/services/${service.slug}`}>{service.shortTitle}</Link></li>
            ))}
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Have a project in mind?</h2>
          <p>Tell us what you’re working towards. We’ll start with a clear conversation.</p>
          <Link className="footer-link" href="/contact">Let’s talk <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© DEV and SEO</span>
        <div><Link href="/privacy-policy">Privacy</Link><Link href="/terms-and-conditions">Terms</Link></div>
        <span>Built with care.</span>
      </div>
    </footer>
  );
}
