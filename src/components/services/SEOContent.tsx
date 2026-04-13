"use client";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  ScanSearch,
  FileSearch,
  PenLine,
  Link,
  MapPin,
  BarChart2,
} from "lucide-react";

const props = {
  badge: "SEO & Content",
  heroTitle: "Rank Higher.",
  heroTitleAccent: "Convert Better.",
  heroDesc:
    "Methodical SEO and content strategy that builds compounding organic growth. From technical audits to topical authority — we make Google work for you 24/7.",
  heroAccentColor: "#D8E63C",
  stats: [
    { n: "50K", l: "Monthly Visitors Driven" },
    { n: "#1", l: "Rankings Achieved" },
    { n: "6mo", l: "Avg to First-Page Results" },
    { n: "300+", l: "Backlinks Built" },
  ],
  services: [
    {
      title: "Technical SEO Audit",
      desc: "Deep crawl of your website covering Core Web Vitals, indexation, structured data, site architecture, and crawl budget optimisation.",
      icon: ScanSearch,
    },
    {
      title: "Keyword & Content Strategy",
      desc: "Topical authority mapping, search intent analysis, and a content calendar that targets high-value commercial and informational keywords.",
      icon: FileSearch,
    },
    {
      title: "Content Production",
      desc: "SEO-optimised blog posts, landing pages, case studies, and pillar pages written by specialists in your industry.",
      icon: PenLine,
    },
    {
      title: "Link Building",
      desc: "White-hat backlink acquisition through digital PR, guest posting, HARO, and strategic partnership outreach.",
      icon: Link,
    },
    {
      title: "Local SEO",
      desc: "Google Business Profile optimisation, local citation building, and location-specific content for businesses targeting regional markets.",
      icon: MapPin,
    },
    {
      title: "SEO Reporting & Analytics",
      desc: "Monthly rank tracking, traffic analysis, and actionable insights with custom dashboards built in Looker Studio.",
      icon: BarChart2,
    },
  ],
  process: [
    {
      step: "01",
      title: "Technical Audit",
      desc: "Comprehensive technical SEO audit identifying quick wins and structural issues affecting crawlability and rankings.",
    },
    {
      step: "02",
      title: "Strategy & Roadmap",
      desc: "Keyword research, competitor gap analysis, and a 6-month content and link-building roadmap.",
    },
    {
      step: "03",
      title: "Implementation",
      desc: "On-page optimisation, content publication, technical fixes, and link outreach executed consistently.",
    },
    {
      step: "04",
      title: "Track & Compound",
      desc: "Monthly reporting, ranking reviews, content refreshes, and strategy adjustments based on what's gaining traction.",
    },
  ],
  techStack: [
    "Ahrefs",
    "Semrush",
    "Screaming Frog",
    "Google Search Console",
    "Google Analytics 4",
    "Looker Studio",
    "Surfer SEO",
    "Clearscope",
    "HARO",
    "Notion",
    "WordPress",
    "Webflow",
  ],
  results: [
    {
      metric: "50K",
      label: "Monthly Organic Visitors",
      desc: "Real estate portal — from near-zero to 50K monthly visitors in 6 months through topical authority.",
      tag: "Real Estate",
    },
    {
      metric: "#1",
      label: "For 18 Target Keywords",
      desc: "B2B SaaS — dominated first page for 18 high-intent keywords within 5 months.",
      tag: "B2B SaaS",
    },
    {
      metric: "300+",
      label: "Quality Backlinks",
      desc: "E-commerce brand — 300+ DR40+ backlinks acquired in 12 months via digital PR and outreach.",
      tag: "E-Commerce",
    },
  ],
  faqs: [
    {
      q: "How long does SEO take to show results?",
      a: "Technical fixes can show impact in 4–8 weeks. Content and link building compounds over 4–8 months. SEO is a long-term investment — clients who stick with it for 6+ months consistently see transformational results.",
    },
    {
      q: "Do you guarantee first-page rankings?",
      a: "No ethical SEO agency guarantees rankings — Google's algorithm is outside anyone's control. We guarantee a rigorous, white-hat process and transparent reporting. Our track record speaks for itself.",
    },
    {
      q: "Can you work with our existing content team?",
      a: "Absolutely. We frequently work alongside in-house writers and marketing teams, providing strategy, outlines, and editing — while they handle production.",
    },
    {
      q: "What's included in the monthly retainer?",
      a: "Every retainer includes a keyword rank report, traffic analysis, 2–4 content pieces, on-page optimisations, and active link building. Higher tiers include more content and dedicated account management.",
    },
  ],
  pricing: [
    {
      name: "Foundation",
      price: "₹25K/mo",
      desc: "Build organic visibility from the ground up.",
      features: [
        "Technical audit",
        "Keyword strategy",
        "2 content pieces/month",
        "On-page optimisation",
        "Monthly reporting",
      ],
      highlighted: false,
    },
    {
      name: "Authority",
      price: "₹50K/mo",
      desc: "Everything in Foundation plus active link building.",
      features: [
        "4 content pieces/month",
        "8 backlinks/month",
        "Competitor tracking",
        "Bi-weekly calls",
      ],
      highlighted: true,
    },
    {
      name: "Domination",
      price: "₹1L/mo",
      desc: "Full-scale SEO domination.",
      features: [
        "8 content pieces/month",
        "20 backlinks/month",
        "Digital PR",
        "Dedicated SEO manager",
        "Weekly reporting",
      ],
      highlighted: false,
    },
  ],
};

export default function SEOContent() {
  return <ServicePageTemplate {...props} />;
}
