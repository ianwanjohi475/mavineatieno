# Mavine Atieno — Portfolio

One-page personal portfolio for **Mavine Brenda Atieno**, Head of Customer Care Agents at VTL Telecom and Community Health graduate (Nairobi, Kenya).

Built with **Next.js (App Router)**, **Tailwind CSS v4**, **Framer Motion**, **Lucide** icons and full-colour brand logos from Iconify (`lib/brand-icons.ts`).

## Features

- Light corporate theme with a dark-mode toggle (saved per visitor)
- Fast CSS preloader (under 1.2s), scroll progress bar, sticky navbar with active-section underline
- Floating WhatsApp chat button
- Animated hero: word-by-word reveal, rotating job titles, mouse-parallax portrait, floating stat cards, organisations marquee
- Cards that blur and rise into view one after another; on hover they lift, show an accent bar and a shine sweep, and the icon fills with the brand gradient
- Scroll-linked experience timeline, count-up stats, infinite marquees
- Tools section with a featured SmartOLT card (ONU / FTTH management) plus Word, Excel, PowerPoint, Outlook, Gmail, WhatsApp, CRM, telephony, records and reporting
- Contact form that opens the visitor's email app, CV download, fully responsive, respects reduced-motion

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

The site is exported as static HTML (`out/`), so it can be hosted on Vercel, Netlify, GitHub Pages or any static host.

## Editing content

All text lives in `lib/content.ts`. Photo: `public/mavine.webp`. CV: `public/Mavine-Atieno-CV.pdf`. Logo: `components/Logo.tsx` (vector) and `public/favicon.svg`. SmartOLT logo: `public/tools/smartolt.png`.
