import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, TrendingUp, BarChart2, Search, Megaphone, RefreshCw, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Growth Retainer — COADAL",
  description: "A monthly growth partner covering SEO, paid ads, content, and conversion optimisation — all under one retainer.",
};

const deliverables = [
  { icon: Megaphone,  title: "Paid Advertising",       desc: "Monthly campaign management across Google, Meta, and LinkedIn with creative refresh." },
  { icon: Search,     title: "SEO & Content",           desc: "Keyword tracking, 2–8 content pieces/month, and link building based on your tier." },
  { icon: BarChart2,  title: "Analytics & Reporting",  desc: "Weekly performance report + live dashboard. Monthly strategy call with your account lead." },
  { icon: TrendingUp, title: "CRO",                    desc: "Landing page A/B tests, funnel analysis, and UX improvements every month." },
  { icon: RefreshCw,  title: "Creative Refresh",       desc: "New ad creatives, social media posts, and email templates on a rolling calendar." },
  { icon: Users,      title: "Dedicated Team",         desc: "Named strategist, designer, and analyst — same people every month, full context retained." },
];

const plans = [
  {
    name: "Accelerate",
    price: "₹60K/mo",
    desc: "For startups scaling paid acquisition.",
    features: ["Google + Meta ads", "2 content pieces/month", "Monthly reporting", "CRO recommendations", "Dedicated strategist"],
    highlighted: false,
  },
  {
    name: "Dominate",
    price: "₹1.2L/mo",
    desc: "Full-stack growth for ambitious brands.",
    features: ["All ad platforms", "4 content pieces/month", "4 backlinks/month", "Weekly reporting", "Creative production", "Monthly CRO test", "Dedicated team"],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "₹2.5L/mo",
    desc: "Enterprise-grade growth operations.",
    features: ["Unlimited platforms", "8 content pieces/month", "16 backlinks/month", "Daily monitoring", "Full creative team", "Custom dashboards", "Quarterly offsite strategy"],
    highlighted: false,
  },
];

export default function GrowthRetainerPage() {
  return (
    <div style={{ background: "#F0EEE9", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-14" style={{ background: "#07080f" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <TrendingUp size={12} color="#D8E63C" />
            <span className="text-[11px] text-white/50 tracking-[0.18em] uppercase font-medium" style={{ fontFamily: "var(--font-inter)" }}>Growth Retainer</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl" style={{ fontFamily: "var(--font-syne)" }}>
            Your Growth Team.<br />
            <span style={{ background: "linear-gradient(135deg,#D8E63C,#D6B4FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              On Retainer.
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.50)", fontFamily: "var(--font-inter)" }}>
            SEO, paid ads, content, and conversion optimisation — one monthly retainer, one dedicated team, compounding results.
          </p>
          <a href="/start-a-project" className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm" style={{ background: "#D8E63C", color: "#17184B", fontFamily: "var(--font-syne)" }}>
            Start Growing <ArrowRight size={16} />
          </a>
          <div className="flex gap-10 mt-14 flex-wrap">
            {[["6mo","Avg to 2× Traffic"],["45%","Avg CAC Reduction"],["5×","Avg ROAS"]].map(([n,l])=>(
              <div key={l}>
                <div className="text-3xl font-black" style={{ color: "#D8E63C", fontFamily: "var(--font-syne)" }}>{n}</div>
                <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-inter)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <p className="section-label mb-4">Monthly Deliverables</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-14" style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}>
          What Happens Every Month
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map(item => {
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
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4" style={{ fontFamily: "var(--font-syne)" }}>Retainer Plans</h2>
          <p className="text-center text-sm mb-14" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-inter)" }}>No lock-in. Cancel anytime with 30 days notice.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map(plan => (
              <div key={plan.name} className="p-8 rounded-2xl flex flex-col" style={{
                background: plan.highlighted ? "#D8E63C" : "rgba(255,255,255,0.04)",
                border: plan.highlighted ? "none" : "1px solid rgba(255,255,255,0.08)",
              }}>
                <div className="mb-6">
                  <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: plan.highlighted ? "#17184B" : "rgba(255,255,255,0.40)", fontFamily: "var(--font-inter)" }}>{plan.name}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-black" style={{ color: plan.highlighted ? "#17184B" : "#ffffff", fontFamily: "var(--font-syne)" }}>{plan.price}</span>
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
