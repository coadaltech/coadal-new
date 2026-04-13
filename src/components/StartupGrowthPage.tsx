"use client";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, ChevronDown, Rocket, Shield, Zap, TrendingUp } from "lucide-react";

const packages = [
  {
    name: "Launch",
    price: "₹2.5L",
    period: "one-time",
    tag: "For pre-revenue startups",
    desc: "Everything you need to launch fast, validate your idea, and get your first customers.",
    accent: "#D8E63C",
    dark: false,
    includes: [
      "Brand identity & logo system",
      "Marketing website (5–8 pages)",
      "SEO foundation setup",
      "Social media setup & content kit",
      "Google Analytics & tracking",
      "30-day post-launch support",
    ],
  },
  {
    name: "Growth",
    price: "₹6L",
    period: "per quarter",
    tag: "For seed-stage startups",
    desc: "Proven growth infrastructure to acquire users, optimise conversion, and prepare for your next raise.",
    accent: "#17184B",
    dark: true,
    includes: [
      "Everything in Launch",
      "Performance ad management (Meta + Google)",
      "Content marketing (8 articles/month)",
      "Conversion rate optimisation",
      "Weekly analytics reporting",
      "Growth strategy sessions (bi-weekly)",
      "AI-powered lead qualification setup",
    ],
  },
  {
    name: "Scale",
    price: "₹12L+",
    period: "per quarter",
    tag: "For Series A startups",
    desc: "Full-stack growth partnership — product, marketing, and AI — to hit the metrics investors want to see.",
    accent: "#D6B4FC",
    dark: false,
    includes: [
      "Everything in Growth",
      "Dedicated product team (dev + design)",
      "Enterprise-grade AI integrations",
      "Investor deck & data room support",
      "PR & thought leadership programme",
      "Programmatic ad campaigns",
      "Custom analytics dashboard",
      "Weekly executive strategy calls",
    ],
  },
];

const reasons = [
  {
    icon: <Rocket size={22} />,
    title: "Speed First",
    desc: "We've shipped 50+ startup products. Our processes are optimised for launch velocity — not endless planning cycles.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Growth-Led Thinking",
    desc: "Every design, copy, and technical decision is made with user acquisition and retention in mind — not just aesthetics.",
  },
  {
    icon: <Shield size={22} />,
    title: "Founder-Aligned Pricing",
    desc: "Startup packages are priced for runway reality. No bloated retainers — just clear deliverables and outcomes.",
  },
  {
    icon: <Zap size={22} />,
    title: "AI-Native by Default",
    desc: "We bake AI into everything we build — from automated lead flows to AI-generated content — so you start with an advantage.",
  },
];

const caseStudies = [
  { company: "Kredify", stage: "Pre-seed → Seed", metric: "0 → 8,000 users in 60 days", accent: "#D8E63C" },
  { company: "Fluxo", stage: "Seed → Series A", metric: "3× ROAS improvement in Q1", accent: "#D6B4FC" },
  { company: "Stackly", stage: "Bootstrap → Seed", metric: "₹2.4Cr ARR in 12 months", accent: "#17184B" },
];

const faqs = [
  { q: "Do you work with very early-stage startups?", a: "Yes — some of our best work has been with founders at the idea stage. The Launch package is specifically designed for pre-revenue startups who need to build credibility and start acquiring customers fast." },
  { q: "Can we start with one service and add more?", a: "Absolutely. Many clients start with a website or performance marketing and expand as they see results. Our packages are modular by design." },
  { q: "How quickly can you get started?", a: "Typically within 5–7 business days of signing. We don't have long onboarding processes — we hit the ground running." },
  { q: "Do you take equity instead of cash?", a: "In select cases, for exceptional startups, we're open to discussing equity arrangements. Reach out and let's talk about your situation." },
  { q: "What makes COADAL different from a typical agency?", a: "We're builders first. Our team includes former startup founders and engineers who understand what it takes to grow fast with limited resources. We measure success by your metrics, not our deliverable count." },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function StartupGrowthPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: "#F0EEE9", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-14" style={{ background: "#07080f" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
          <m.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6" style={{ background: "rgba(216,230,60,0.12)", color: "#D8E63C" }}>
              Startup Growth
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl">
              Built for Founders.<br />
              <span className="gradient-text-dark">Priced for Startups.</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
              We've helped 40+ startups go from zero to traction. Packages designed for every stage — from pre-launch to Series A.
            </p>
            <a
              href="/start-a-project"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold transition-all hover:opacity-90"
              style={{ background: "#D8E63C", color: "#17184B" }}
            >
              Book a Free Strategy Call <ArrowRight size={18} />
            </a>
          </m.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0d0d0d" }}>Startup Packages</h2>
            <p className="text-lg" style={{ color: "rgba(13,13,13,0.5)" }}>Choose the right plan for your stage. Upgrade any time.</p>
          </div>
          <m.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {packages.map((pkg) => (
              <m.div
                key={pkg.name}
                variants={fadeUp}
                className="rounded-3xl p-8 flex flex-col gap-6"
                style={{
                  background: pkg.dark ? "#17184B" : "#ffffff",
                  border: `1px solid ${pkg.dark ? "rgba(255,255,255,0.08)" : "rgba(23,24,75,0.09)"}`,
                }}
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: pkg.accent + (pkg.dark ? "25" : "18"), color: pkg.dark ? pkg.accent : pkg.accent === "#17184B" ? "#17184B" : "#17184B" }}>
                    {pkg.tag}
                  </span>
                  <h3 className="text-2xl font-black mb-1" style={{ color: pkg.dark ? "#ffffff" : "#0d0d0d" }}>{pkg.name}</h3>
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-4xl font-black" style={{ color: pkg.accent === "#17184B" ? "#D8E63C" : pkg.accent, fontFamily: "var(--font-syne)" }}>{pkg.price}</span>
                    <span className="text-sm mb-1.5" style={{ color: pkg.dark ? "rgba(255,255,255,0.4)" : "rgba(13,13,13,0.4)" }}>/ {pkg.period}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: pkg.dark ? "rgba(255,255,255,0.55)" : "rgba(13,13,13,0.55)" }}>{pkg.desc}</p>
                </div>
                <ul className="flex flex-col gap-3 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: pkg.dark ? "rgba(255,255,255,0.8)" : "#0d0d0d" }}>
                      <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: pkg.accent === "#17184B" ? "#D8E63C" : pkg.accent }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/start-a-project"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-bold transition-all hover:opacity-90"
                  style={{
                    background: pkg.dark ? "#D8E63C" : pkg.accent === "#D6B4FC" ? "#D6B4FC" : "#17184B",
                    color: pkg.dark ? "#17184B" : pkg.accent === "#D6B4FC" ? "#17184B" : "#ffffff",
                  }}
                >
                  Get Started <ArrowRight size={14} />
                </a>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* Why COADAL */}
      <section className="py-20 px-6 md:px-10" style={{ background: "#07080f" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Startups Choose COADAL</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="p-7 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(216,230,60,0.14)", color: "#D8E63C" }}>
                  {r.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0d0d0d" }}>Startup Success Stories</h2>
            <p className="text-lg" style={{ color: "rgba(13,13,13,0.5)" }}>Real results from founders who bet on COADAL.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((c) => (
              <div key={c.company} className="rounded-2xl p-8" style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.09)" }}>
                <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-lg font-black" style={{ background: c.accent + "20", color: c.accent === "#17184B" ? "#17184B" : c.accent }}>
                  {c.company[0]}
                </div>
                <h3 className="text-xl font-black mb-1" style={{ color: "#0d0d0d" }}>{c.company}</h3>
                <p className="text-sm mb-4" style={{ color: "rgba(13,13,13,0.45)" }}>{c.stage}</p>
                <p className="text-2xl font-bold" style={{ color: c.accent === "#17184B" ? "#17184B" : c.accent === "#D8E63C" ? "#17184B" : c.accent }}>{c.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-10" style={{ background: "#F0EEE9" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0d0d0d" }}>Common Questions</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.09)" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left"
                >
                  <span className="font-semibold text-base" style={{ color: "#0d0d0d" }}>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 transition-transform duration-200"
                    style={{ color: "rgba(13,13,13,0.4)", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-7 pb-5 text-sm leading-relaxed" style={{ color: "rgba(13,13,13,0.55)" }}>{faq.a}</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-10" style={{ background: "#17184B" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to accelerate your startup?</h2>
          <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>
            Book a free 45-minute strategy call. No pitch, no pressure — just clarity on your growth path.
          </p>
          <a
            href="/start-a-project"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold transition-all hover:opacity-90"
            style={{ background: "#D8E63C", color: "#17184B" }}
          >
            Book a Free Strategy Call <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
