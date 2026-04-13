import type { Metadata } from "next";
import PerformanceMarketing from "@/components/services/PerformanceMarketing";

export const metadata: Metadata = {
  title: "Performance Marketing — COADAL",
  description:
    "Data-driven paid campaigns across Google, Meta, and LinkedIn — engineered for measurable ROI. We scale what works and kill what doesn't.",
};

export default function Page() {
  return <PerformanceMarketing />;
}
