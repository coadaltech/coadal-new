import type { Metadata } from "next";
import BrandIdentity from "@/components/services/BrandIdentity";

export const metadata: Metadata = {
  title: "Brand Identity — COADAL",
  description:
    "From logo to full design system — we craft brand identities that communicate instantly, scale consistently, and make your business impossible to ignore.",
};

export default function Page() {
  return <BrandIdentity />;
}
