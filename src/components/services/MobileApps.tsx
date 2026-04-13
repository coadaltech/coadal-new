"use client";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  Smartphone,
  Layers,
  MousePointerClick,
  Server,
  Upload,
  Wrench,
} from "lucide-react";

const props = {
  badge: "Mobile Apps",
  heroTitle: "Apps Users",
  heroTitleAccent: "Actually Love",
  heroDesc:
    "Cross-platform iOS and Android apps built with React Native and Flutter. Polished UX, native performance, delivered in weeks — not months.",
  heroAccentColor: "#D6B4FC",
  stats: [
    { n: "4.8★", l: "Avg App Rating" },
    { n: "100K+", l: "App Downloads" },
    { n: "12wk", l: "Avg Time to App Store" },
    { n: "20+", l: "Apps Shipped" },
  ],
  services: [
    {
      title: "iOS & Android Apps",
      desc: "Cross-platform apps with a single codebase using React Native. Native feel, shared logic, 40% faster development.",
      icon: Smartphone,
    },
    {
      title: "Flutter Development",
      desc: "Pixel-perfect Flutter apps for clients requiring highly customised UI with near-native performance.",
      icon: Layers,
    },
    {
      title: "App UX & Prototyping",
      desc: "User research, wireframing, and interactive Figma prototypes validated with real users before development starts.",
      icon: MousePointerClick,
    },
    {
      title: "Backend & API",
      desc: "Scalable Node.js or Python backends, real-time features with WebSockets, and secure RESTful APIs for your app.",
      icon: Server,
    },
    {
      title: "App Store Publishing",
      desc: "Full App Store and Google Play submission — screenshots, metadata, review process management.",
      icon: Upload,
    },
    {
      title: "Maintenance & Updates",
      desc: "Post-launch bug fixes, OS compatibility updates, performance monitoring, and feature additions.",
      icon: Wrench,
    },
  ],
  process: [
    {
      step: "01",
      title: "User Research & Wireframes",
      desc: "We define user personas, key flows, and low-fidelity wireframes before any visual design work.",
    },
    {
      step: "02",
      title: "UI Design & Prototype",
      desc: "High-fidelity screen designs with interactive prototype for stakeholder sign-off.",
    },
    {
      step: "03",
      title: "Development & QA",
      desc: "Sprint-based development with weekly builds on TestFlight and Google Play internal track.",
    },
    {
      step: "04",
      title: "App Store Launch",
      desc: "Submission, review management, launch campaign coordination, and post-launch monitoring.",
    },
  ],
  techStack: [
    "React Native",
    "Flutter",
    "Expo",
    "TypeScript",
    "Firebase",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Stripe",
    "Figma",
    "TestFlight",
    "Fastlane",
  ],
  results: [
    {
      metric: "100K+",
      label: "Downloads in Month 1",
      desc: "FinTech super app with real-time payments, biometric auth, and AI insights.",
      tag: "FinTech",
    },
    {
      metric: "4.8★",
      label: "App Store Rating",
      desc: "Healthcare booking app with 2K+ reviews and featured by Apple in App Store.",
      tag: "Healthcare",
    },
    {
      metric: "60%",
      label: "Lower Dev Cost",
      desc: "Replaced two native codebases with single React Native app without losing performance.",
      tag: "Cost Saving",
    },
  ],
  faqs: [
    {
      q: "React Native or Flutter — which is better?",
      a: "Both are excellent. React Native is ideal if you have a web team (shared JS skills). Flutter offers more UI customisation. We recommend based on your team, timeline, and product requirements.",
    },
    {
      q: "How do you handle app store rejections?",
      a: "We pre-audit apps against Apple and Google guidelines before submission. Our rejection rate is under 5%, and we handle any review feedback at no extra cost.",
    },
    {
      q: "Can you add features to an existing app?",
      a: "Yes — we regularly take over existing React Native or Flutter codebases. We start with a code audit before committing to a scope.",
    },
    {
      q: "What about backend and API costs?",
      a: "Backend development is scoped separately. We design cost-efficient architectures — many apps start on serverless (Firebase/Supabase) to keep infrastructure costs low.",
    },
  ],
  pricing: [
    {
      name: "MVP",
      price: "₹1.5L–₹3L",
      desc: "Core app for one platform (iOS or Android).",
      features: [
        "Up to 10 screens",
        "Basic auth",
        "1 API integration",
        "App Store submission",
      ],
      highlighted: false,
    },
    {
      name: "Standard",
      price: "₹3L–₹7L",
      desc: "Full cross-platform app.",
      features: [
        "Custom UI",
        "Auth & payments",
        "Push notifications",
        "3 integrations",
        "Both app stores",
        "30-day support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "₹7L+",
      desc: "Complex multi-feature app.",
      features: [
        "Offline mode",
        "Custom animations",
        "Real-time features",
        "Dedicated team",
        "90-day support",
      ],
      highlighted: false,
    },
  ],
};

export default function MobileApps() {
  return <ServicePageTemplate {...props} />;
}
