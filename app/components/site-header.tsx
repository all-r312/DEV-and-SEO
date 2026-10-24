"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Work" },
  { href: "/blog", label: "Insights" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="DEV and SEO home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">&lt;/&gt;</span>
          <span>DEV <span className="brand-and">and</span> SEO</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={`primary-nav${open ? " is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="button button-small nav-cta" href="/contact" onClick={() => setOpen(false)}>
            Get a free quote <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
