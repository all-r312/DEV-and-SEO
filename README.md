# DEV and SEO

A responsive Next.js website for a Pakistan-based digital agency. The site includes home, service overview and detail pages, about, portfolio, contact, blog index, and legal pages.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site can be explored without email credentials, but the inquiry form will return a clear configuration error until Resend is configured. It does not display a false success state or store submissions locally.

## Contact form email setup

The server-side `/api/contact` handler validates and sanitizes submissions, applies a basic in-memory rate limit, and sends inquiries to Resend. No email credentials are exposed to the browser.

1. Create a Resend account and verify a sending domain.
2. In `.env.local`, set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`. Use a sender address on the domain verified with Resend.
3. Set `NEXT_PUBLIC_SITE_URL` to the canonical site origin (for example, `https://www.example.com`) before production builds and deployment.
4. Restart the development server after editing environment variables and submit a test inquiry.

The rate limit is process-local and is not a distributed production abuse-control system. For a serverless or multi-instance deployment, add provider/platform-level rate limiting or a shared store such as Redis before launch. Add CAPTCHA only if spam requires it. Optional customer confirmation email and persistent lead storage are not configured.

## Content updates

- Edit the service catalogue and service detail deliverables in `lib/site.ts`. Service routes are generated from this catalogue.
- Update the fictional concept projects in `lib/site.ts` and the presentation in the portfolio and home page components. Do not present concepts as client work.
- Add published blog articles only when reviewed content and verified author/date information are available. The blog currently has a deliberate editorial-ready empty state; it does not publish placeholder articles.
- Replace the legal draft content in `app/privacy-policy/page.tsx` and `app/terms-and-conditions/page.tsx` after confirming the actual business, providers, data practices, and legal requirements. Obtain legal review before launch.
- Add verified business contact details and social profiles only when the owner supplies them.

## Quality checks

```powershell
npm run lint
npx tsc --noEmit
npm run build
```

## Production deployment

Deploy the Next.js application to a platform that supports the Next.js App Router (Vercel is one option). Configure the production environment variables from `.env.example`, set the custom domain and canonical site URL, and verify the Resend sender domain. Review the generated sitemap and robots file at `/sitemap.xml` and `/robots.txt` after deployment.

Before launch, test the contact email end to end; review the site at mobile, tablet, and desktop widths; add owner-approved business identity and contact details; and obtain legal review of the policy drafts. Search rankings and third-party email availability are not guaranteed.
