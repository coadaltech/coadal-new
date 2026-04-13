import type { Metadata } from "next";
import MobileApps from "@/components/services/MobileApps";

export const metadata: Metadata = {
  title: "Mobile App Development — COADAL",
  description:
    "Cross-platform iOS and Android apps built with React Native and Flutter. Polished UX, native performance, delivered in weeks — not months.",
};

export default function Page() {
  return <MobileApps />;
}
