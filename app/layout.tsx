import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { siteDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DEV and SEO | Websites & SEO for Growing Businesses",
    template: "%s | DEV and SEO",
  },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName,
    title: "DEV and SEO | Websites & SEO for Growing Businesses",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEV and SEO | Websites & SEO for Growing Businesses",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    description: siteDescription,
    url: siteUrl,
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }}
        />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <div id="main-content" className="site-main" tabIndex={-1}>{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
