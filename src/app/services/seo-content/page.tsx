import type { Metadata } from "next";
import SEOContent from "@/components/services/SEOContent";

export const metadata: Metadata = {
  title: "SEO & Content — COADAL",
  description:
    "Methodical SEO and content strategy that builds compounding organic growth. From technical audits to topical authority — we make Google work for you 24/7.",
};

export default function Page() {
  return <SEOContent />;
}
