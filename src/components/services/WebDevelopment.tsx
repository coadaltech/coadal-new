"use client";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  Globe,
  LayoutDashboard,
  ShoppingCart,
  FileText,
  Plug,
  RefreshCw,
} from "lucide-react";

const props = {
  badge: "Web Development",
  heroTitle: "Websites That",
  heroTitleAccent: "Convert & Scale",
  heroDesc:
    "We build high-performance web applications with Next.js and React — engineered for speed, SEO, and conversions. From MVPs to enterprise platforms.",
  heroAccentColor: "#D8E63C",
  stats: [
    { n: "7d", l: "MVP Launch" },
    { n: "100", l: "PageSpeed Score" },
    { n: "40%", l: "Avg Conversion Lift" },
    { n: "50+", l: "Sites Shipped" },
  ],
  services: [
    {
      title: "Landing Pages & Marketing Sites",
      desc: "High-converting landing pages optimised for SEO and paid traffic. Fast load, mobile-first, A/B test ready.",
      icon: Globe,
    },
    {
      title: "Web Applications",
      desc: "Full-stack SaaS platforms, dashboards, portals, and internal tools built with Next.js, TypeScript, and modern APIs.",
      icon: LayoutDashboard,
    },
    {
      title: "E-Commerce Stores",
      desc: "Custom Shopify or Next.js commerce with AI recommendations, smart search, and streamlined checkout flows.",
      icon: ShoppingCart,
    },
    {
      title: "CMS-Powered Websites",
      desc: "Content-managed sites with Sanity, Contentful, or custom CMS — so your team can update without touching code.",
      icon: FileText,
    },
    {
      title: "API Development & Integration",
      desc: "RESTful and GraphQL APIs, third-party integrations (CRMs, payment gateways, ERPs), and microservices.",
      icon: Plug,
    },
    {
      title: "Website Revamps",
      desc: "Full redesign and performance overhaul of existing websites with measurable improvement in speed and conversions.",
      icon: RefreshCw,
    },
  ],
  process: [
    {
      step: "01",
      title: "Discovery & Architecture",
      desc: "We map your user journeys, tech requirements, and design system before writing a single line of code.",
    },
    {
      step: "02",
      title: "Design & Prototype",
      desc: "High-fidelity Figma designs reviewed and approved by you. No surprises in development.",
    },
    {
      step: "03",
      title: "Development & Testing",
      desc: "Agile sprints, code reviews, Lighthouse audits, and cross-browser QA before every release.",
    },
    {
      step: "04",
      title: "Launch & Optimise",
      desc: "Deployment, analytics setup, Core Web Vitals monitoring, and 30-day post-launch support.",
    },
  ],
  techStack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Vercel",
    "AWS",
    "Figma",
    "Sanity",
    "Stripe",
  ],
  results: [
    {
      metric: "40%",
      label: "Conversion Rate Increase",
      desc: "E-commerce platform redesign with AI recommendations and optimised checkout.",
      tag: "E-Commerce",
    },
    {
      metric: "100",
      label: "PageSpeed Score",
      desc: "Complete performance overhaul — from 42 to 100 Lighthouse score in 3 weeks.",
      tag: "Performance",
    },
    {
      metric: "7wk",
      label: "MVP to Launch",
      desc: "Full-stack SaaS platform with auth, billing, and AI features shipped in 7 weeks.",
      tag: "SaaS",
    },
  ],
  faqs: [
    {
      q: "How long does a website project take?",
      a: "Simple sites take 2–3 weeks. Complex web apps typically take 6–12 weeks depending on scope. We always provide a detailed timeline before starting.",
    },
    {
      q: "Do you build on WordPress?",
      a: "We specialise in Next.js and headless CMS architectures for performance and scalability. We can integrate with WordPress as a headless CMS if needed.",
    },
    {
      q: "Will my website be mobile responsive?",
      a: "Absolutely — every site we build is mobile-first. We test across all major devices and browsers.",
    },
    {
      q: "Do you provide hosting and maintenance?",
      a: "Yes. We recommend and set up hosting on Vercel or AWS. Ongoing maintenance retainers are available.",
    },
  ],
  pricing: [
    {
      name: "Starter",
      price: "₹80K–₹1.5L",
      desc: "Marketing site or landing page.",
      features: [
        "Up to 8 pages",
        "SEO setup",
        "Mobile responsive",
        "CMS integration",
        "1 revision round",
      ],
      highlighted: false,
    },
    {
      name: "Growth",
      price: "₹1.5L–₹4L",
      desc: "Full web application or e-commerce.",
      features: [
        "Custom design system",
        "Auth & payments",
        "CMS integration",
        "API integrations",
        "3 revision rounds",
        "30-day support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "₹4L+",
      desc: "Large-scale platform or SaaS.",
      features: [
        "Custom architecture",
        "Microservices",
        "Dedicated team",
        "SLA guarantee",
        "Unlimited revisions",
        "90-day support",
      ],
      highlighted: false,
    },
  ],
};

export default function WebDevelopment() {
  return <ServicePageTemplate {...props} />;
}
