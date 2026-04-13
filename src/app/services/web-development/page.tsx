import type { Metadata } from "next";
import WebDevelopment from "@/components/services/WebDevelopment";

export const metadata: Metadata = {
  title: "Web Development — COADAL",
  description:
    "High-performance web applications with Next.js and React — engineered for speed, SEO, and conversions. From MVPs to enterprise platforms.",
};

export default function Page() {
  return <WebDevelopment />;
}
