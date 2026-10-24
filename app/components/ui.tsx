import Link from "next/link";
import type { ReactNode } from "react";
import type { services } from "@/lib/site";

type Service = (typeof services)[number];

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow"><span className="eyebrow-dot" />{children}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={`section-heading${centered ? " is-centered" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function ServiceCard({ service, index }: { service: Service; index?: number }) {
  return (
    <Link className="service-card" href={`/services/${service.slug}`}>
      <span className="service-number">{String((index ?? 0) + 1).padStart(2, "0")}</span>
      <span className={`service-icon icon-${service.icon}`} aria-hidden="true">
        {service.icon === "search" ? "⌕" : service.icon === "cart" ? "▱" : service.icon === "pin" ? "⌖" : service.icon === "briefcase" ? "▣" : service.icon === "window" ? "▤" : "↻"}
      </span>
      <h3>{service.shortTitle}</h3>
      <p>{service.description}</p>
      <span className="text-link">Explore service <span aria-hidden="true">↗</span></span>
    </Link>
  );
}

export function CtaBand({
  title = "Have a project in mind?",
  description = "Tell us where you want to go. We’ll help you find a clear next step.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="cta-band">
      <div className="cta-orbit cta-orbit-one" aria-hidden="true" />
      <div className="cta-orbit cta-orbit-two" aria-hidden="true" />
      <div className="cta-content">
        <Eyebrow>Let’s make it clearer</Eyebrow>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link className="button button-light" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}

export function FaqList({ items }: { items: readonly { question: string; answer: string }[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>{item.question}<span aria-hidden="true">+</span></summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
