import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mavine Atieno | Customer Care Leader & Public Health Officer",
  description:
    "Portfolio of Mavine Brenda Atieno: Head of Customer Care Agents at VTL Telecom, experienced with SmartOLT and FTTH customer support, entrepreneurship facilitator and Community Health graduate in Nairobi, Kenya.",
  keywords: ["Mavine Atieno", "Customer Care", "Customer Experience", "SmartOLT", "FTTH", "Telecommunications", "Community Health", "Nairobi"],
  authors: [{ name: "Mavine Brenda Atieno" }],
  openGraph: {
    title: "Mavine Atieno | Customer Care Leader",
    description: "I lead customer care teams with empathy and accountability, and deliver measurable results.",
    images: ["/mavine.webp"],
    type: "profile",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#070e1f" },
  ],
};

// Applies the saved theme before first paint so there is no flash.
const themeScript = `try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
