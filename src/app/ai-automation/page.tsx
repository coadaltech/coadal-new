import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Zap, Bot, RefreshCw, FileText, Bell, GitBranch } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation — COADAL",
  description: "Automate repetitive work with custom AI agents, n8n workflows, and LLM-powered pipelines. Cut costs, eliminate errors, scale without headcount.",
};

const automations = [
  { icon: Bot,        title: "AI Agents",             desc: "Autonomous agents that handle lead qualification, customer support, data enrichment, and more — 24/7." },
  { icon: RefreshCw,  title: "Workflow Automation",   desc: "n8n, Zapier, and Make.com workflows that connect your tools and eliminate manual handoffs." },
  { icon: FileText,   title: "Document Processing",   desc: "AI-powered extraction from invoices, contracts, and forms — structured output into your systems." },
  { icon: Bell,       title: "Intelligent Alerts",    desc: "Smart monitoring pipelines that detect anomalies, trigger actions, and notify the right people." },
  { icon: GitBranch,  title: "Data Pipelines",        desc: "Automated ETL pipelines that sync, clean, and transform data across CRMs, databases, and APIs." },
  { icon: Zap,        title: "Content Automation",    desc: "AI-generated reports, summaries, product descriptions, and social posts — at scale, on schedule." },
];

const plans = [
  {
    name: "Starter",
    price: "₹80K",
    period: "one-time",
    desc: "1–3 automation workflows.",
    features: ["Workflow audit", "Up to 3 automations", "n8n or Zapier", "30-day support"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹2L",
    period: "one-time",
    desc: "Custom AI agent + workflows.",
    features: ["Full workflow audit", "1 custom AI agent", "Unlimited automations", "API integrations", "60-day support"],
    highlighted: true,
  },
  {
    name: "Retainer",
    price: "₹60K/mo",
    period: "monthly",
    desc: "Ongoing automation management.",
    features: ["New automations monthly", "Agent monitoring", "Performance reporting", "Priority support", "Strategy calls"],
    highlighted: false,
  },
];

export default function AIAutomationPage() {
  return (
    <div style={{ background: "#F0EEE9", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-14" style={{ background: "#07080f" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <Zap size={12} color="#D8E63C" />
            <span className="text-[11px] text-white/50 tracking-[0.18em] uppercase font-medium" style={{ fontFamily: "var(--font-inter)" }}>AI Automation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl" style={{ fontFamily: "var(--font-syne)" }}>
            Automate the Work<br />
            <span style={{ background: "linear-gradient(135deg,#D8E63C,#D6B4FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Humans Shouldn&apos;t Do.
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.50)", fontFamily: "var(--font-inter)" }}>
            Custom AI agents, n8n workflows, and LLM pipelines that eliminate repetitive tasks, reduce errors, and scale your team without headcount.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/start-a-project" className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm" style={{ background: "#D8E63C", color: "#17184B", fontFamily: "var(--font-syne)" }}>
              Start Automating <ArrowRight size={16} />
            </a>
          </div>
          <div className="flex gap-10 mt-14 flex-wrap">
            {[["80%","Less Manual Work"],["3×","Team Output"],["₹2L+","Avg Annual Savings"]].map(([n,l])=>(
              <div key={l}>
                <div className="text-3xl font-black" style={{ color: "#D8E63C", fontFamily: "var(--font-syne)" }}>{n}</div>
                <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-inter)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation types */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <p className="section-label mb-4">What We Automate</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-14" style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}>
          Any Process. Any Tool. Any Scale.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automations.map(item => {
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
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-14" style={{ fontFamily: "var(--font-syne)" }}>Simple Pricing</h2>
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
                  color: "#D8E63C", fontFamily: "var(--font-syne)", textDecoration: "none",
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
