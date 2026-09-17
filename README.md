# Joe David Portfolio

A premium personal portfolio for Joe David, designed for freelance clients, local businesses, and employers.

## Overview

This project is a Next.js portfolio website built with TypeScript and Tailwind CSS, focused on:

- business website development
- custom web systems
- responsive frontend and backend work
- professional inquiry conversion

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide icons
- Resend
- Zod

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Contact email and Vercel setup

The contact form posts to `/api/contact`, a Next.js Node.js route that sends through Resend. Inquiries go to **jushuaff@gmail.com** by default. Reply-To is the visitor's email, so replying in Gmail reaches the visitor. No Gmail password is needed.

1. Create/sign into [Resend](https://resend.com), verify a domain you own, and create an API key with sending access to that domain.
2. In Vercel, import this Next.js project and open **Settings > Environment Variables**. Add the values below for **Production** (and Preview if you want preview forms enabled).

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | Your private Resend API key |
| `CONTACT_TO_EMAIL` | `jushuaff@gmail.com` |
| `CONTACT_FROM_EMAIL` | A bare sender email on your verified domain, such as `contact@your-domain.com` |

Use an actual domain you control for the sender. Gmail is the receiving inbox; do not use a Gmail address as the Resend sender. Keep these variables server-only: no `NEXT_PUBLIC_` prefix. Enter the key directly in Vercel; do not commit it or paste it into chat.

3. Deploy using Vercel's **Next.js** preset and the default build/output settings. This contact route needs a server function, so do not use a static export.
4. After changing environment variables, **redeploy**: existing deployments do not pick up changed values.
5. Submit one inquiry on the deployed site with an email you control. Check Resend's email log for delivery status and check the inbox/spam folder at **jushuaff@gmail.com**. Reply to verify the visitor address is used.

For initial testing without a domain, use `CONTACT_FROM_EMAIL=onboarding@resend.dev` **only if the Resend account email is jushuaff@gmail.com**. Resend restricts this test sender to the account owner's email. Use a verified domain sender for production.

For local development, copy `.env.example` to `.env.local`, supply the same credentials, and restart the dev server. The example contains no secret; local environment files remain ignored by Git.

### Delivery checks and troubleshooting

- A success response means Resend accepted the email and returned an ID; it does not guarantee inbox delivery. Check provider delivery logs and Gmail to verify delivery.
- Missing/invalid server configuration returns 503 with a direct email fallback. Check Vercel function logs for the configuration error.
- Provider rejection returns 502. Check the API key, verified sender domain, Resend sending limits and test-sender recipient restrictions.
- Invalid form data or malformed JSON returns 400 and does not send an email.
- The route preserves HTML escaping, plain text content, validation and honeypot protection. Logs omit API keys and inquiry contents.

References: [Resend with Next.js](https://resend.com/docs/send-with-nextjs), [test sender restrictions](https://resend.com/docs/knowledge-base/403-error-resend-dev-domain), [Vercel environment variables](https://vercel.com/docs/environment-variables).

## Profile branding

The hero displays the supplied portrait from `public/images/me.png` using Next.js image optimization. The photo is rendered in a square frame to preserve the original composition on desktop and mobile. Replace that file to update the portrait; its reference, alt text and dimensions are centralized in `data/profile.ts`. Profile details, the hourly rate, social links and summary are in `data/profile.ts`. Joe David is the visible brand; Jushua F. Fata-ek appears in the profile, About section, footer and metadata.

## Project screenshots: exact files and replacement

The original preview issue was missing files: the cards referenced `/projects/*.webp`, but `public/projects` did not contain them. Paths in Next.js must start with `/projects/`, **not** `/public/projects/`.

Place or replace these files in this project's root:

| Project | File on disk | Browser URL |
| --- | --- | --- |
| Foam Coffee Baguio | `public/projects/foam.webp` | `/projects/foam.webp` |
| Valencia's Restaurant | `public/projects/valencias.webp` | `/projects/valencias.webp` |
| Highland Brew Cafe | `public/projects/highland-brew.webp` | `/projects/highland-brew.webp` |

Use actual website screenshots around **1600 × 1000 pixels (16:10)**. Save as WebP and aim for under 400 KB. Keep these exact lowercase filenames; paths are case-sensitive on deployment. Replace the image files without changing components, then rebuild/redeploy to refresh optimized images.

`components/project-preview.tsx` is shared by homepage cards and all three case studies. It defines a nonzero 16:10 container, uses `next/image` with responsive sizes and `object-fit: cover` aligned to the top, and renders a text-and-icon fallback if an image cannot load. No remote image configuration is needed for these local assets. If a screenshot cannot be obtained, a clearly labelled “screenshot needed” placeholder is used; never substitute an unrelated website image.

See `public/projects/README.md` for the provenance/status of the included screenshots.

## Career content

- `data/profile.ts`: branding, legal name, rate, location, links and About summary.
- `data/skills.ts`: five readable skill groups.
- `data/experience.ts`: work experience and expandable professional contributions.
- `data/education.ts`: degrees and MERN training; the master's is marked in progress.
- `data/certifications.ts`: supplied certifications and additional training.
- `components/why-work-with-me.tsx`: four concise working principles.

No dates have been invented for Japan Livline or Starfoot Spa. Experience and credentials reflect the supplied profile information; no client results or testimonials were added.

## How to add or edit project content

Project content lives in:

```text
data/projects.ts
```

You can update:

- titles
- project categories
- live URLs
- source URLs
- stack items
- description text

## How to edit services and pricing

Update the pricing and descriptions in:

```text
data/services.ts
```

## Vercel deployment

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the environment variables from `.env.example`.
4. Deploy the project.

## Custom domain setup

After deployment:

1. Open your Vercel project dashboard.
2. Go to Settings > Domains.
3. Add your custom domain.
4. Verify DNS records.
5. Redeploy if needed.

## Notes

- The contact form offers direct email if Resend is not configured.
- It avoids exposing the API key to the browser.
- It includes server-side validation, anti-spam honeypot protection, and graceful error fallback states.

## Light theme and quality checks

The existing Next.js app, Tailwind setup, services, process, project routes and Resend contact endpoint are retained. A white/soft-blue palette with navy text applies to the homepage, mobile navigation, forms, case studies, and 404 page. Theme values and shared layout styles live in `app/globals.css`.

Run `npm run lint` and `npm run build`. Validate at narrow mobile widths and check both normal project images and the failed-image fallback. Contact delivery requires the existing Resend environment variables; do not claim a successful delivery until Resend returns a receipt.
