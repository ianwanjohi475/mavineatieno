# Mavine Atieno — Portfolio

One-page personal portfolio for **Mavine Brenda Atieno**, Head of Customer Care Agents at VTL Telecom and Community Health graduate (Nairobi, Kenya).

Built with **Next.js (App Router)**, **Tailwind CSS v4**, **Framer Motion**, **Iconsax** icons and full-colour brand logos from Iconify (`lib/brand-icons.ts`). All copy comes from Mavine's CV and Professional Portfolio documents.

## Features

- Teal theme on soft-grey panels, with a dark-mode toggle (saved per visitor)
- Sticky top navigation, collapsible menu on phones and tablets
- Fast CSS preloader (under 1.2s)
- Floating WhatsApp chat button
- Résumé-style header with photo, rotating "Open to work" seal, contact details and key figures
- Clean card layout; on hover cards lift slightly, the border turns teal and the icon fills in
- Scroll-linked experience timeline, count-up stats, infinite marquees
- Grouped skills: Telecom & ISP systems (SmartOLT, MikroTik, oneISP, CRM), office tools, customer service operations, data & reporting
- Contact form that emails Mavine directly through FormSubmit (no backend needed); the first message sends her a one-time activation email to confirm
- CV download, fully responsive, respects reduced-motion

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

The site is exported as static HTML (`out/`), so it can be hosted on Vercel, Netlify, GitHub Pages or any static host.

## Editing content

All text lives in `lib/content.ts`. Photo: `public/mavine.webp`. CV: `public/Mavine-Atieno-CV.pdf`. Logo: `components/Logo.tsx` (vector) and `public/favicon.svg`. SmartOLT logo: `public/tools/smartolt.png`.
