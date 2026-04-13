"use client";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  Search,
  Megaphone,
  Users,
  ImageIcon,
  TrendingUp,
  PieChart,
} from "lucide-react";

const props = {
  badge: "Performance Marketing",
  heroTitle: "Every Rupee",
  heroTitleAccent: "Accountable",
  heroDesc:
    "Data-driven paid campaigns across Google, Meta, and LinkedIn — engineered for measurable ROI. We scale what works and kill what doesn't. No vanity metrics.",
  heroAccentColor: "#D6B4FC",
  stats: [
    { n: "5×", l: "Avg ROAS" },
    { n: "45%", l: "Avg CAC Reduction" },
    { n: "₹8L/mo", l: "Max Ad Spend Managed" },
    { n: "30+", l: "Brands Scaled" },
  ],
  services: [
    {
      title: "Google Ads",
      desc: "Search, Shopping, Display, and YouTube campaigns with granular keyword strategy, bid automation, and conversion tracking.",
      icon: Search,
    },
    {
      title: "Meta Ads (Facebook & Instagram)",
      desc: "Full-funnel Meta campaigns: awareness, consideration, and retargeting — with AI-generated creatives that actually convert.",
      icon: Megaphone,
    },
    {
      title: "LinkedIn Ads",
      desc: "B2B lead generation with precise job title and company targeting. Sponsored content, InMail, and lead gen forms.",
      icon: Users,
    },
    {
      title: "Performance Creative",
      desc: "Data-driven ad creative production: static, video, and carousel ads optimised for click-through and conversion rates.",
      icon: ImageIcon,
    },
    {
      title: "Conversion Rate Optimisation",
      desc: "Landing page testing, heatmap analysis, and funnel optimisation to maximise return from existing traffic.",
      icon: TrendingUp,
    },
    {
      title: "Attribution & Analytics",
      desc: "Multi-touch attribution setup, GA4 configuration, custom dashboards, and weekly performance reporting.",
      icon: PieChart,
    },
  ],
  process: [
    {
      step: "01",
      title: "Audit & Strategy",
      desc: "Full audit of existing ad accounts (if any), competitor analysis, audience mapping, and campaign architecture planning.",
    },
    {
      step: "02",
      title: "Creative & Setup",
      desc: "Ad creative production, campaign structure setup, pixel/tag installation, and conversion event configuration.",
    },
    {
      step: "03",
      title: "Launch & Learn",
      desc: "Initial 2-week learning phase with daily monitoring, budget adjustments, and A/B testing of creatives.",
    },
    {
      step: "04",
      title: "Scale & Optimise",
      desc: "Once proven creatives and audiences are identified, we scale spend aggressively while maintaining target ROAS.",
    },
  ],
  techStack: [
    "Google Ads",
    "Meta Ads Manager",
    "LinkedIn Campaign Manager",
    "Google Analytics 4",
    "Google Tag Manager",
    "Hotjar",
    "Unbounce",
    "Canva Pro",
    "Adobe Creative Suite",
    "Looker Studio",
    "Triple Whale",
    "Northbeam",
  ],
  results: [
    {
      metric: "5×",
      label: "ROAS Achieved",
      desc: "D2C fashion brand scaled from ₹50K to ₹8L/month ad spend maintaining 5× return.",
      tag: "D2C",
    },
    {
      metric: "45%",
      label: "CAC Reduction",
      desc: "B2B SaaS company — restructured Google + LinkedIn campaigns, cut cost per trial by 45%.",
      tag: "B2B SaaS",
    },
    {
      metric: "320%",
      label: "Revenue Growth",
      desc: "E-commerce brand — 3-month Meta + Google strategy drove 3.2× revenue with same team size.",
      tag: "E-Commerce",
    },
  ],
  faqs: [
    {
      q: "What's the minimum ad budget you work with?",
      a: "We recommend a minimum of ₹1L/month in ad spend to gather enough data for optimisation. Below that, learning phases take too long to be cost-effective.",
    },
    {
      q: "How long before I see results?",
      a: "Most campaigns show early signal within 2–4 weeks. Significant scaling typically happens in months 2–3 once the algorithm has sufficient conversion data.",
    },
    {
      q: "Do you create the ad creatives too?",
      a: "Yes — our performance creative team produces static, video, and carousel ads designed specifically for conversion, not just brand awareness.",
    },
    {
      q: "How do you report on performance?",
      a: "You get a weekly performance report and access to a live Looker Studio dashboard showing all key metrics: spend, ROAS, CPA, impressions, and conversion trends.",
    },
  ],
  pricing: [
    {
      name: "Starter",
      price: "₹25K/mo + 10% of spend",
      desc: "Up to ₹2L/month ad spend.",
      features: [
        "2 platforms",
        "Monthly reporting",
        "Creative direction",
      ],
      highlighted: false,
    },
    {
      name: "Growth",
      price: "₹45K/mo + 10% of spend",
      desc: "Up to ₹8L/month ad spend.",
      features: [
        "3 platforms",
        "Weekly reporting",
        "Creative production",
        "CRO recommendations",
      ],
      highlighted: true,
    },
    {
      name: "Scale",
      price: "₹80K/mo + 8% of spend",
      desc: "Unlimited ad spend.",
      features: [
        "All platforms",
        "Dedicated strategist",
        "Daily reporting",
        "Full creative team",
        "Attribution setup",
      ],
      highlighted: false,
    },
  ],
};

export default function PerformanceMarketing() {
  return <ServicePageTemplate {...props} />;
}
