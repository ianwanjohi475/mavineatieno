# Mavine Atieno — Portfolio

One-page personal portfolio for **Mavine Brenda Atieno**, Head of Customer Care Agents at VTL Telecom and Community Health graduate (Nairobi, Kenya).

Built with **Next.js (App Router)**, **Tailwind CSS v4**, **Framer Motion**, **Iconsax** icons and full-colour brand logos from Iconify (`lib/brand-icons.ts`). All copy comes from Mavine's CV and Professional Portfolio documents.

## Features

- Teal theme on soft-grey panels, with a dark-mode toggle (saved per visitor)
- Fixed icon side menu on large screens, slide-down menu on phones and tablets
- Fast CSS preloader (under 1.2s)
- Floating WhatsApp chat button
- Hero with a profile card, professional profile summary, count-up stats and an organisations marquee
- Tiles that blur and rise into view one after another; on hover they lift onto white with a teal glow, the icon badge fills teal and switches from line to filled, and an arrow bubble rolls in
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
