import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Code2, Cpu, Layers, Globe, Smartphone, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Projects — COADAL",
  description: "Have something unique in mind? We scope, design, and build fully custom digital products — no templates, no off-the-shelf solutions.",
};

const types = [
  { icon: Code2,      title: "Custom Web Apps",         desc: "Complex web applications with custom logic, integrations, and workflows — built from scratch." },
  { icon: Smartphone, title: "Custom Mobile Apps",      desc: "iOS and Android apps tailored to niche workflows that off-the-shelf apps can't handle." },
  { icon: Cpu,        title: "AI-Powered Products",     desc: "Products with LLM reasoning, computer vision, predictive models, or custom ML pipelines at their core." },
  { icon: Globe,      title: "Platforms & Marketplaces",desc: "Multi-sided platforms, B2B SaaS, and marketplace products with complex user roles and data flows." },
  { icon: Layers,     title: "System Integrations",     desc: "Custom middleware, API bridges, and data sync layers between disparate enterprise systems." },
  { icon: Settings,   title: "Legacy Modernisation",    desc: "Rewrite or extend legacy systems with modern tech stacks — zero downtime migration strategies." },
];

const steps = [
  { n: "01", title: "Discovery Call", desc: "We understand your idea, constraints, and goals in a 45-minute session. No commitment." },
  { n: "02", title: "Scope & Proposal", desc: "Detailed proposal with architecture, tech stack, timeline, milestones, and fixed price." },
  { n: "03", title: "Build & Iterate", desc: "Agile delivery with weekly demos, transparent Jira board, and regular checkpoints." },
  { n: "04", title: "Launch & Support", desc: "Deployment, monitoring setup, and 60-day hypercare before handing over full ownership." },
];

export default function CustomProjectsPage() {
  return (
    <div style={{ background: "#F0EEE9", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-14" style={{ background: "#07080f" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <Layers size={12} color="#D6B4FC" />
            <span className="text-[11px] text-white/50 tracking-[0.18em] uppercase font-medium" style={{ fontFamily: "var(--font-inter)" }}>Custom Projects</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl" style={{ fontFamily: "var(--font-syne)" }}>
            If You Can Imagine It,<br />
            <span style={{ background: "linear-gradient(135deg,#D6B4FC,#D8E63C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              We Can Build It.
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.50)", fontFamily: "var(--font-inter)" }}>
            No templates, no cookie-cutter solutions. We scope, architect, and build fully custom digital products from first principles.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/start-a-project" className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm" style={{ background: "#D6B4FC", color: "#17184B", fontFamily: "var(--font-syne)" }}>
              Tell Us Your Idea <ArrowRight size={16} />
            </a>
            <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm border border-white/15 text-white/70" style={{ fontFamily: "var(--font-syne)" }}>
              Talk to an Engineer
            </a>
          </div>
        </div>
      </section>

      {/* Project types */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <p className="section-label mb-4">What We Build</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-14" style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}>
          No Brief Is Too Complex
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map(item => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="p-7 rounded-2xl border" style={{ background: "#ffffff", borderColor: "rgba(23,24,75,0.08)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(214,180,252,0.12)" }}>
                  <Icon size={20} color="#17184B" />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(13,13,13,0.50)", fontFamily: "var(--font-inter)" }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 md:px-10" style={{ background: "#17184B" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(216,230,60,0.50)", fontFamily: "var(--font-inter)" }}>Our Process</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-14" style={{ fontFamily: "var(--font-syne)" }}>From Idea to Shipped Product</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(step => (
              <div key={step.n} className="p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="text-4xl font-black mb-4 block" style={{ color: "#D8E63C", fontFamily: "var(--font-syne)" }}>{step.n}</span>
                <h3 className="text-base font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-10" style={{ background: "#07080f" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-syne)" }}>
            Ready to Build Something New?
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter)" }}>
            Share your idea — we&apos;ll send back a detailed scope within 48 hours. No commitment required.
          </p>
          <a href="/start-a-project" className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold" style={{ background: "#D8E63C", color: "#17184B", fontFamily: "var(--font-syne)" }}>
            Start a Custom Project <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
