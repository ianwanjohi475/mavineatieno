import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mavine Brenda Atieno | Customer Care Leadership & Professional Portfolio",
  description:
    "Professional portfolio of Mavine Brenda Atieno, Head of Customer Care Representative Agents at VTL Telecom Company, Nairobi, Kenya. Customer Experience · Telecommunications · Public Health Officer.",
  keywords: ["Mavine Atieno", "Customer Care", "Customer Experience", "SmartOLT", "FTTH", "Telecommunications", "Community Health", "Nairobi"],
  authors: [{ name: "Mavine Brenda Atieno" }],
  openGraph: {
    title: "Mavine Brenda Atieno | Professional Portfolio",
    description: "Head of Customer Care Representative Agents | Customer Experience | Telecommunications",
    images: ["/mavine.webp"],
    type: "profile",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#141a19" },
  ],
};

// Applies the saved theme before first paint so there is no flash.
const themeScript = `try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
