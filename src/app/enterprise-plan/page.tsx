import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Shield, Users, Cpu, BarChart2, Settings, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Plan — COADAL",
  description: "Dedicated teams, enterprise-grade infrastructure, and full-stack digital transformation for large organisations.",
};

const capabilities = [
  { icon: Cpu,        title: "Dedicated Dev Team",       desc: "2–8 engineers assigned full-time to your product. No shared resources, no context switching." },
  { icon: Shield,     title: "Enterprise Security",      desc: "SOC 2-ready infrastructure, VAPT testing, SSO integration, and data residency compliance." },
  { icon: BarChart2,  title: "Custom Reporting",         desc: "Executive dashboards, real-time KPI tracking, and quarterly business reviews." },
  { icon: Settings,   title: "System Integration",       desc: "ERP, CRM, HRMS, and legacy system integrations via REST, GraphQL, or MuleSoft." },
  { icon: Users,      title: "Account Management",       desc: "Named account manager, weekly standups, and a dedicated Slack channel for your team." },
  { icon: Headphones, title: "24/7 Priority Support",    desc: "SLA-backed support with 2-hour response times, on-call engineers, and zero-downtime deployments." },
];

const features = [
  "Dedicated engineering team (2–8 members)",
  "Priority SLA — 2hr response, 99.9% uptime",
  "Custom contract & NDA",
  "On-site workshops available",
  "Multi-cloud or private cloud deployment",
  "Compliance support (GDPR, SOC 2, ISO 27001)",
  "IP ownership — 100% yours",
  "Quarterly strategy & tech reviews",
  "Staff augmentation available",
  "White-label options",
];

export default function EnterprisePlanPage() {
  return (
    <div style={{ background: "#F0EEE9", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-14" style={{ background: "#07080f" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <Shield size={12} color="#D6B4FC" />
            <span className="text-[11px] text-white/50 tracking-[0.18em] uppercase font-medium" style={{ fontFamily: "var(--font-inter)" }}>Enterprise Plan</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl" style={{ fontFamily: "var(--font-syne)" }}>
            Built for<br />
            <span style={{ background: "linear-gradient(135deg,#D6B4FC,#D8E63C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Organisations That Scale.
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.50)", fontFamily: "var(--font-inter)" }}>
            Dedicated teams, enterprise-grade security, and full-stack digital transformation — custom scoped, fixed accountability.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm" style={{ background: "#D6B4FC", color: "#17184B", fontFamily: "var(--font-syne)" }}>
              Talk to Sales <ArrowRight size={16} />
            </a>
            <a href="/start-a-project" className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm border border-white/15 text-white/70 hover:text-white" style={{ fontFamily: "var(--font-syne)" }}>
              Get a Proposal
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <p className="section-label mb-4">Enterprise Capabilities</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-14" style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}>
          Everything Large Teams Need
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map(item => {
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

      {/* Features + CTA */}
      <section className="py-20 px-6 md:px-10" style={{ background: "#17184B" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(214,180,252,0.50)", fontFamily: "var(--font-inter)" }}>What You Get</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: "var(--font-syne)" }}>
              No Compromises.<br />No Hidden Costs.
            </h2>
            <ul className="grid grid-cols-1 gap-3">
              {features.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-inter)" }}>
                  <Check size={14} style={{ flexShrink: 0, color: "#D6B4FC" }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 rounded-3xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(216,230,60,0.50)", fontFamily: "var(--font-inter)" }}>Custom Pricing</p>
            <p className="text-5xl font-black text-white mb-3" style={{ fontFamily: "var(--font-syne)" }}>₹15L+</p>
            <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.40)", fontFamily: "var(--font-inter)" }}>
              Scoped to your exact requirements. Month-to-month or annual contracts available.
            </p>
            <a href="/contact" className="flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm mb-4" style={{
              background: "#D8E63C", color: "#17184B", fontFamily: "var(--font-syne)", textDecoration: "none",
            }}>
              Schedule a Discovery Call <ArrowRight size={14} />
            </a>
            <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-inter)" }}>
              NDA signed before any discussion. Response within 4 hours.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
