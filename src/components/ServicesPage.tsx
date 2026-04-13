"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Code2, Smartphone, Brain, BarChart2, Search, Palette, Zap, LineChart, Cloud } from "lucide-react";

const services = [
  {
    icon: <Code2 size={28} />,
    title: "Web Development",
    description: "Blazing-fast, conversion-optimised web applications built on modern stacks. From marketing sites to complex SaaS platforms.",
    includes: ["Next.js & React apps", "Custom CMS integration", "Performance optimisation", "API & backend development"],
    price: "From ₹1.2L",
    accent: "#D8E63C",
    href: "/services/web-development",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile App Development",
    description: "Cross-platform iOS & Android apps that users love. Shipped fast, built to scale, designed to convert.",
    includes: ["React Native & Expo", "Native iOS & Android", "App Store optimisation", "Push notifications & analytics"],
    price: "From ₹2.5L",
    accent: "#D6B4FC",
    href: "/services/mobile-apps",
  },
  {
    icon: <Brain size={28} />,
    title: "AI Development",
    description: "Custom AI products — from LLM-powered features to fully autonomous agents — built for your specific business context.",
    includes: ["LLM integration & fine-tuning", "AI agents & automation", "Retrieval-augmented generation", "Custom model training"],
    price: "From ₹3L",
    accent: "#D8E63C",
    href: "/services/ai-development",
  },
  {
    icon: <BarChart2 size={28} />,
    title: "Performance Marketing",
    description: "Data-driven paid advertising that cuts CAC and scales ROAS. Meta, Google, TikTok, and programmatic campaigns managed end-to-end.",
    includes: ["Campaign strategy & setup", "Creative production", "Continuous A/B testing", "Attribution & reporting"],
    price: "From ₹80K/mo",
    accent: "#D6B4FC",
    href: "/services/performance-marketing",
  },
  {
    icon: <Search size={28} />,
    title: "SEO & Content",
    description: "Organic traffic that compounds over time. Technical SEO, content strategy, and link building engineered to rank and convert.",
    includes: ["Technical SEO audit & fix", "Content strategy & writing", "Link building campaigns", "Core Web Vitals optimisation"],
    price: "From ₹60K/mo",
    accent: "#D8E63C",
    href: "/services/seo-content",
  },
  {
    icon: <Palette size={28} />,
    title: "Brand Identity",
    description: "Visual identities that communicate authority and attract the right customers. Strategy-led design from logo to full brand system.",
    includes: ["Logo & visual identity", "Brand guidelines", "UI design system", "Motion & illustration"],
    price: "From ₹90K",
    accent: "#D6B4FC",
    href: "/services/brand-identity",
  },
  {
    icon: <Zap size={28} />,
    title: "AI Automation",
    description: "Automate the work that shouldn't require humans — lead qualification, reporting, content adaptation, and more.",
    includes: ["Workflow audit & mapping", "n8n / Zapier automation", "Custom AI agent development", "Integration & monitoring"],
    price: "From ₹1.5L",
    accent: "#D8E63C",
    href: "/services/ai-development",
  },
  {
    icon: <LineChart size={28} />,
    title: "Analytics & Data",
    description: "Build the data foundation your growth decisions depend on. From tracking setup to executive dashboards.",
    includes: ["Analytics setup & migration", "Custom dashboard design", "Data pipeline engineering", "Conversion rate optimisation"],
    price: "From ₹70K",
    accent: "#D6B4FC",
    href: "/services/performance-marketing",
  },
  {
    icon: <Cloud size={28} />,
    title: "Salesforce CRM",
    description: "End-to-end Salesforce implementation, custom Apex & LWC development, and CRM migration — built to drive revenue, not complexity.",
    includes: ["Sales & Service Cloud setup", "CRM data migration", "Custom Apex & LWC dev", "Automation & Marketing Cloud"],
    price: "From ₹1.5L",
    accent: "#D8E63C",
    href: "/services/salesforce",
  },
];

const steps = [
  { num: "01", title: "Discovery Call", desc: "We understand your goals, constraints, and market context in a focused 45-minute call." },
  { num: "02", title: "Proposal & Scope", desc: "A detailed proposal with deliverables, timeline, and pricing — no vague retainers." },
  { num: "03", title: "Build & Deliver", desc: "We execute with weekly updates, transparent communication, and on-time delivery." },
];

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export default function ServicesPage() {
  return (
    <div style={{ background: "#F0EEE9", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-14" style={{ background: "#07080f" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6" style={{ background: "rgba(216,230,60,0.12)", color: "#D8E63C" }}>
              What We Do
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl">
              Everything You Need<br />
              <span className="gradient-text-dark">to Scale</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              From AI-powered product development to performance marketing and SEO — we're the full-stack growth partner for ambitious brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className="rounded-2xl p-8 border flex flex-col gap-5 group hover:shadow-lg transition-all duration-300"
              style={{ background: "#ffffff", borderColor: "rgba(23,24,75,0.09)" }}
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: s.accent + "20", color: s.accent === "#D8E63C" ? "#17184B" : s.accent }}>
                  {s.icon}
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "#F0EEE9", color: "#17184B" }}>
                  {s.price}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(13,13,13,0.55)" }}>
                  {s.description}
                </p>
              </div>
              <ul className="flex flex-col gap-2">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: "#0d0d0d" }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.accent === "#D8E63C" ? "#D8E63C" : "#D6B4FC" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center gap-4">
                <a
                  href={s.href}
                  className="flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{ color: s.accent === "#D8E63C" ? "#17184B" : "#D6B4FC" }}
                >
                  Learn More <ArrowRight size={14} />
                </a>
                <a
                  href="/start-a-project"
                  className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
                  style={{ color: "rgba(13,13,13,0.4)" }}
                >
                  Get started
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-6 md:px-10" style={{ background: "#17184B" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: "rgba(255,255,255,0.35)" }}>
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="text-5xl font-black mb-4 block" style={{ color: "#D8E63C", fontFamily: "var(--font-syne)" }}>
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-10" style={{ background: "#07080f" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to build something remarkable?</h2>
          <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>
            Tell us what you're building. We'll tell you exactly how to win.
          </p>
          <a
            href="/start-a-project"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold transition-all hover:opacity-90"
            style={{ background: "#D8E63C", color: "#17184B" }}
          >
            Start a Project <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
