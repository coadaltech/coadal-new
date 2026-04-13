import type { Metadata } from "next";
import Salesforce from "@/components/services/Salesforce";

export const metadata: Metadata = {
  title: "Salesforce Development & CRM — COADAL",
  description:
    "Salesforce implementation, custom Apex & LWC development, CRM migration, and ongoing support. We build Salesforce ecosystems that drive revenue.",
};

export default function Page() {
  return <Salesforce />;
}
