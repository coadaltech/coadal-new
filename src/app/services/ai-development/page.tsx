import type { Metadata } from "next";
import AIDevelopment from "@/components/services/AIDevelopment";

export const metadata: Metadata = {
  title: "AI Development — COADAL",
  description:
    "LLM-powered applications, intelligent agents, and AI automation that give your business an unfair advantage. From GPT integrations to custom-trained models.",
};

export default function Page() {
  return <AIDevelopment />;
}
