"use client";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Cloud, RefreshCw, BarChart2, Users, Zap, Settings } from "lucide-react";

export default function Salesforce() {
  return (
    <ServicePageTemplate
      badge="Salesforce"
      heroTitle="Salesforce That"
      heroTitleAccent="Actually Drives Revenue"
      heroDesc="From implementation to custom development — we build, configure, and optimise Salesforce ecosystems that your sales, marketing, and service teams actually use. No bloated setups, just ROI."
      heroAccentColor="#D8E63C"
      stats={[
        { n: "40%", l: "Faster Sales Cycles" },
        { n: "3×",  l: "Lead Conversion" },
        { n: "60%", l: "Less Manual Work" },
        { n: "20+", l: "CRM Projects Done" },
      ]}
      services={[
        { title: "Salesforce Implementation", desc: "End-to-end Salesforce setup — Sales Cloud, Service Cloud, Marketing Cloud. Configured to your exact process, not a generic template.", icon: Cloud },
        { title: "CRM Migration", desc: "Migrate from HubSpot, Zoho, Pipedrive, or spreadsheets to Salesforce without losing a single record. Clean data, verified mapping, zero downtime.", icon: RefreshCw },
        { title: "Custom Development (Apex & LWC)", desc: "Custom Apex triggers, classes, and Lightning Web Components when out-of-the-box Salesforce just isn't enough for your workflow.", icon: Settings },
        { title: "Sales & Marketing Automation", desc: "Lead scoring, automated follow-up sequences, Pipeline stage alerts, and Pardot/Marketing Cloud journeys that run 24/7 without human input.", icon: Zap },
        { title: "Reports, Dashboards & Analytics", desc: "Real-time dashboards for sales leaders, custom reports for every team, and Einstein Analytics for predictive insights on pipeline and revenue.", icon: BarChart2 },
        { title: "Training & Ongoing Support", desc: "Team onboarding sessions, admin training, user adoption programmes, and a dedicated support retainer so your Salesforce never falls behind.", icon: Users },
      ]}
      process={[
        { step: "01", title: "Discovery & Audit", desc: "We map your current sales and service processes, identify gaps, and define exactly what Salesforce needs to do — before a single click of configuration." },
        { step: "02", title: "Design & Configure", desc: "Org setup, object configuration, page layouts, automation rules, and user permissions — all built to match how your team actually works." },
        { step: "03", title: "Integrate & Migrate", desc: "Connect Salesforce to your website, email, ERP, and other tools. Migrate existing CRM data with full validation." },
        { step: "04", title: "Train, Launch & Support", desc: "Hands-on team training, phased rollout, and a 60-day hypercare period to ensure full adoption before handing over the keys." },
      ]}
      techStack={[
        "Salesforce Sales Cloud", "Salesforce Service Cloud", "Marketing Cloud", "Pardot",
        "Apex", "Lightning Web Components", "SOQL", "REST APIs", "MuleSoft",
        "Zapier", "HubSpot", "Stripe", "Slack Integration",
      ]}
      results={[
        { metric: "3×",   label: "Lead Conversion Rate",  desc: "D2C brand migrated from spreadsheets to Salesforce — automated follow-ups tripled qualified leads in 90 days.",        tag: "Sales Cloud" },
        { metric: "40%",  label: "Faster Deal Closure",   desc: "SaaS company — custom CPQ and approval workflows cut average deal cycle from 38 days to 23 days.",                       tag: "Custom Dev" },
        { metric: "60%",  label: "Support Tickets Resolved Auto", desc: "Service Cloud + AI case classification — 60% of tier-1 support tickets now auto-resolved without agent involvement.", tag: "Service Cloud" },
      ]}
      faqs={[
        { q: "Which Salesforce clouds do you work with?", a: "We work across Sales Cloud, Service Cloud, Marketing Cloud, Pardot, Experience Cloud, and CPQ. We recommend the right combination based on your team size, budget, and goals." },
        { q: "How long does a Salesforce implementation take?", a: "A standard Sales Cloud implementation for a team of 10–50 takes 4–8 weeks. Complex multi-cloud setups with custom development typically take 10–16 weeks. We always provide a detailed project plan before starting." },
        { q: "Can you fix or improve our existing Salesforce org?", a: "Absolutely — we regularly take over messy Salesforce orgs. We start with a full audit, prioritise quick wins, and then systematically clean up technical debt and add missing functionality." },
        { q: "Do you provide Salesforce training for our team?", a: "Yes. Every implementation includes role-based training sessions for end users, managers, and admins. We also offer ongoing training retainers as your team grows or processes change." },
      ]}
      pricing={[
        {
          name: "Starter",
          price: "₹1.5L – ₹3L",
          desc: "For small teams getting started with CRM",
          features: [
            "Sales Cloud setup (up to 20 users)",
            "Lead, Contact & Opportunity setup",
            "Basic automation (up to 10 flows)",
            "Standard reports & dashboards",
            "2-day team training",
            "30-day support",
          ],
          highlighted: false,
        },
        {
          name: "Growth",
          price: "₹3L – ₹8L",
          desc: "Full CRM + automation for scaling teams",
          features: [
            "Sales + Service Cloud",
            "CRM data migration",
            "Custom Apex / LWC development",
            "Advanced automation & scoring",
            "Third-party integrations (3+)",
            "Einstein Analytics dashboards",
            "Full team training programme",
            "60-day hypercare support",
          ],
          highlighted: true,
        },
        {
          name: "Enterprise",
          price: "₹8L+",
          desc: "Multi-cloud, complex orgs & ongoing optimisation",
          features: [
            "Multi-cloud implementation",
            "Marketing Cloud / Pardot",
            "MuleSoft or API integrations",
            "Custom CPQ or Communities",
            "Dedicated Salesforce architect",
            "Unlimited users",
            "Quarterly health checks",
            "Ongoing retainer support",
          ],
          highlighted: false,
        },
      ]}
    />
  );
}
