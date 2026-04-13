import type { Metadata } from "next";
import { Syne, Inter, Cormorant_Garamond } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "COADAL — AI Development & Marketing Agency",
  description:
    "COADAL helps startups and enterprises grow through AI-powered products and data-driven marketing strategies. Web development, mobile apps, SEO, performance marketing.",
  keywords: "AI development, web development, digital marketing, mobile app, SEO, brand identity, COADAL, startup growth",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "COADAL — AI Development & Marketing Agency",
    description: "We help startups and enterprises grow through AI and smart marketing.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} ${cormorant.variable}`}>
      <body>
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
