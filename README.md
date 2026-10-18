# Mavine Atieno — Portfolio

One-page personal portfolio for **Mavine Brenda Atieno**, Head of Customer Care Agents at VTL Telecom and Community Health graduate (Nairobi, Kenya).

Built with **Next.js (App Router)**, **Tailwind CSS v4**, **Framer Motion** and **react-icons** (Phosphor + Simple Icons).

## Features

- Preloader, scroll progress bar, sticky glass navbar with active-section pill
- Animated hero: word-by-word reveal, rotating job titles, mouse-parallax portrait, floating stat cards, spinning badge
- Spotlight cards with cursor-following glow, gradient border and 3D tilt
- Scroll-linked experience timeline, count-up stats, infinite marquees
- Tools section with brand icons (Word, Excel, PowerPoint, Outlook, Gmail, WhatsApp, CRM, telephony, records, reporting)
- Contact form that opens the visitor's email app, CV download, fully responsive, respects reduced-motion

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

The site is exported as static HTML (`out/`), so it can be hosted on Vercel, Netlify, GitHub Pages or any static host.

## Editing content

All text lives in `lib/content.ts`. Photo: `public/mavine.webp`. CV: `public/Mavine-Atieno-CV.pdf`.
