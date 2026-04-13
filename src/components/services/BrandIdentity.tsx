"use client";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  Sparkles,
  Target,
  Palette,
  BookOpen,
  Layout,
  Monitor,
} from "lucide-react";

const props = {
  badge: "Brand Identity",
  heroTitle: "Brands That",
  heroTitleAccent: "Command Attention",
  heroDesc:
    "From logo to full design system — we craft brand identities that communicate instantly, scale consistently, and make your business impossible to ignore.",
  heroAccentColor: "#D6B4FC",
  stats: [
    { n: "48h", l: "Signups on Launch" },
    { n: "100%", l: "Client Satisfaction" },
    { n: "3wk", l: "Brand Identity Turnaround" },
    { n: "60+", l: "Brands Created" },
  ],
  services: [
    {
      title: "Logo Design",
      desc: "Primary logo, alternate lockups, icon mark, and usage guidelines — designed for scalability from favicon to billboard.",
      icon: Sparkles,
    },
    {
      title: "Brand Strategy & Positioning",
      desc: "Brand personality, tone of voice, target audience definition, competitor positioning, and brand messaging framework.",
      icon: Target,
    },
    {
      title: "Visual Identity System",
      desc: "Full design system: colour palette, typography scale, iconography, illustration style, and photography direction.",
      icon: Palette,
    },
    {
      title: "Brand Guidelines",
      desc: "Comprehensive brand book documenting all rules, usage examples, and dos/don'ts for consistent application across all touchpoints.",
      icon: BookOpen,
    },
    {
      title: "Collateral Design",
      desc: "Business cards, letterheads, email signatures, presentation templates, social media templates, and packaging design.",
      icon: Layout,
    },
    {
      title: "Website & Digital Brand",
      desc: "Translating the brand identity into a pixel-perfect web design system with components, tokens, and Figma libraries.",
      icon: Monitor,
    },
  ],
  process: [
    {
      step: "01",
      title: "Discovery & Research",
      desc: "Brand audit (if applicable), competitor landscape analysis, audience research, and moodboard development.",
    },
    {
      step: "02",
      title: "Concept Development",
      desc: "2–3 distinct creative directions presented with rationale. You choose and refine.",
    },
    {
      step: "03",
      title: "Design & Refinement",
      desc: "Detailed development of the chosen direction across all brand elements with revision rounds.",
    },
    {
      step: "04",
      title: "Delivery & Handoff",
      desc: "Final files in all formats (SVG, PNG, PDF), Figma library, brand guidelines PDF, and team walkthrough.",
    },
  ],
  techStack: [
    "Figma",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe InDesign",
    "Framer",
    "Webflow",
    "Canva Pro",
    "Notion (Brand Docs)",
    "Loom (Walkthroughs)",
    "Zeplin",
    "Abstract",
    "Pitch",
  ],
  results: [
    {
      metric: "8K",
      label: "Signups in 48 Hours",
      desc: "SaaS brand identity + Product Hunt launch strategy — featured as #1 Product of the Day.",
      tag: "SaaS Launch",
    },
    {
      metric: "3×",
      label: "Premium Pricing Achieved",
      desc: "D2C brand repositioning — new identity allowed a 3× price increase with higher conversion.",
      tag: "D2C Brand",
    },
    {
      metric: "60%",
      label: "Brand Recall Increase",
      desc: "Enterprise rebrand — post-launch survey showed 60% increase in unaided brand recall among target audience.",
      tag: "Enterprise",
    },
  ],
  faqs: [
    {
      q: "How many logo concepts will I see?",
      a: "We present 2–3 distinct creative directions in the concept phase. Once you select a direction, we refine it through 2 revision rounds included in the package.",
    },
    {
      q: "What file formats will I receive?",
      a: "You'll receive your logo and brand assets in all major formats: SVG, AI, EPS, PNG (transparent), PDF, and JPG — suitable for print, web, and digital use.",
    },
    {
      q: "Do you design websites too?",
      a: "Yes — our Brand + Web package is popular. After establishing the identity, we translate it into a full website design in Figma and optionally build it in Next.js or Webflow.",
    },
    {
      q: "Can you refresh an existing brand without a full rebrand?",
      a: "Absolutely. We offer brand evolution projects that modernise and sharpen an existing identity while maintaining brand equity and recognition.",
    },
  ],
  pricing: [
    {
      name: "Essential",
      price: "₹60K–₹1L",
      desc: "Core brand identity package.",
      features: [
        "Logo design",
        "Colour palette",
        "Typography",
        "Basic brand guidelines",
        "2 file formats",
      ],
      highlighted: false,
    },
    {
      name: "Complete",
      price: "₹1L–₹2.5L",
      desc: "Full visual identity system.",
      features: [
        "Full visual identity",
        "Logo suite",
        "Brand guidelines",
        "Social templates",
        "Collateral design",
        "Figma library",
      ],
      highlighted: true,
    },
    {
      name: "Brand + Web",
      price: "₹2.5L+",
      desc: "Identity plus website design.",
      features: [
        "Everything in Complete",
        "Website design (Figma)",
        "Optional Next.js or Webflow build",
        "Launch strategy",
      ],
      highlighted: false,
    },
  ],
};

export default function BrandIdentity() {
  return <ServicePageTemplate {...props} />;
}
