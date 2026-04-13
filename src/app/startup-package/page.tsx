import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Rocket, Zap, BarChart2, Users, Globe, Megaphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Startup Package — COADAL",
  description: "Everything a startup needs to launch, grow, and scale — web, app, marketing, and AI bundled into one fixed-price package.",
};

const includes = [
  { icon: Globe,      title: "Web Development",        desc: "High-converting marketing site or MVP web app built on Next.js." },
  { icon: Zap,        title: "AI Integration",          desc: "LLM-powered features, chatbots, or automation baked into your product." },
  { icon: Megaphone,  title: "Performance Marketing",   desc: "Paid ad campaigns across Google & Meta from day one." },
  { icon: BarChart2,  title: "SEO Foundation",          desc: "Technical SEO setup, keyword strategy, and first-month content." },
  { icon: Users,      title: "Brand Identity",          desc: "Logo, colour palette, typography, and brand guidelines." },
  { icon: Rocket,     title: "Launch Strategy",         desc: "Product Hunt prep, press kit, and growth plan for the first 90 days." },
];

const plans = [
  {
    name: "Seed",
    price: "₹2.5L",
    period: "one-time",
    desc: "For pre-revenue startups ready to launch.",
    features: ["Landing page", "Brand identity", "Google & Meta ads setup", "SEO basics", "30-day support"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹6L",
    period: "one-time",
    desc: "Full stack launch package for funded startups.",
    features: ["Full web app (MVP)", "AI feature integration", "Paid ads (2 platforms)", "SEO + 4 content pieces", "Brand identity + guidelines", "60-day hypercare"],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "₹12L+",
    period: "one-time",
    desc: "Product, marketing, and growth — everything.",
    features: ["Web + Mobile app", "AI automation", "Full marketing stack", "Ongoing retainer option", "Dedicated team", "Quarterly strategy reviews"],
    highlighted: false,
  },
];

export default function StartupPackagePage() {
  return (
    <div style={{ background: "#F0EEE9", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-14" style={{ background: "#07080f" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <Rocket size={12} color="#D8E63C" />
            <span className="text-[11px] text-white/50 tracking-[0.18em] uppercase font-medium" style={{ fontFamily: "var(--font-inter)" }}>Startup Package</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl" style={{ fontFamily: "var(--font-syne)" }}>
            Launch Fast.<br />
            <span style={{ background: "linear-gradient(135deg,#D8E63C,#D6B4FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Grow Faster.
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.50)", fontFamily: "var(--font-inter)" }}>
            Everything a startup needs — product, brand, and marketing — bundled into one fixed-price package. No agencies, no bloat.
          </p>
          <a href="/start-a-project" className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm" style={{ background: "#D8E63C", color: "#17184B", fontFamily: "var(--font-syne)" }}>
            Get Started <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <p className="section-label mb-4">What&apos;s Included</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-14" style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}>
          Everything You Need to Win
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {includes.map(item => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="p-7 rounded-2xl border" style={{ background: "#ffffff", borderColor: "rgba(23,24,75,0.08)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(216,230,60,0.12)" }}>
                  <Icon size={20} color="#17184B" />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(13,13,13,0.50)", fontFamily: "var(--font-inter)" }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 md:px-10" style={{ background: "#17184B" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(216,230,60,0.50)", fontFamily: "var(--font-inter)" }}>Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-14" style={{ fontFamily: "var(--font-syne)" }}>Choose Your Launch Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map(plan => (
              <div key={plan.name} className="p-8 rounded-2xl flex flex-col" style={{
                background: plan.highlighted ? "#D8E63C" : "rgba(255,255,255,0.04)",
                border: plan.highlighted ? "none" : "1px solid rgba(255,255,255,0.08)",
              }}>
                <div className="mb-6">
                  <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: plan.highlighted ? "#17184B" : "rgba(255,255,255,0.40)", fontFamily: "var(--font-inter)" }}>{plan.name}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-black" style={{ color: plan.highlighted ? "#17184B" : "#ffffff", fontFamily: "var(--font-syne)" }}>{plan.price}</span>
                    <span className="text-sm" style={{ color: plan.highlighted ? "#17184B80" : "rgba(255,255,255,0.30)", fontFamily: "var(--font-inter)" }}>{plan.period}</span>
                  </div>
                  <p className="text-sm" style={{ color: plan.highlighted ? "rgba(23,24,75,0.60)" : "rgba(255,255,255,0.40)", fontFamily: "var(--font-inter)" }}>{plan.desc}</p>
                </div>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm" style={{ color: plan.highlighted ? "#17184B" : "rgba(255,255,255,0.70)", fontFamily: "var(--font-inter)" }}>
                      <Check size={14} style={{ flexShrink: 0, color: plan.highlighted ? "#17184B" : "#D8E63C" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/start-a-project" className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm" style={{
                  background: plan.highlighted ? "#17184B" : "rgba(216,230,60,0.12)",
                  color: plan.highlighted ? "#D8E63C" : "#D8E63C",
                  fontFamily: "var(--font-syne)", textDecoration: "none",
                }}>
                  Get Started <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
