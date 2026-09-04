import type { Metadata } from "next";
import Script from "next/script";
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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '846802607866332');
          fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=846802607866332&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
