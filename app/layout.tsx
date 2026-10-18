import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mavine Atieno — Customer Care Leader & Public Health Officer",
  description:
    "Portfolio of Mavine Brenda Atieno — Head of Customer Care Agents at VTL Telecom, entrepreneurship facilitator and Community Health graduate based in Nairobi, Kenya.",
  keywords: [
    "Mavine Atieno",
    "Customer Care",
    "Customer Experience",
    "Telecommunications",
    "Community Health",
    "Public Health Officer",
    "Nairobi",
  ],
  authors: [{ name: "Mavine Brenda Atieno" }],
  openGraph: {
    title: "Mavine Atieno — Customer Care Leader",
    description: "Leading customer care teams with empathy, accountability and results.",
    images: ["/mavine.webp"],
    type: "profile",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#07070c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}
