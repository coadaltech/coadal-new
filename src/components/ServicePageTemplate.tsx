"use client";
import { useState } from "react";
import { m } from "framer-motion";
import { ArrowRight, Check, Plus, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ServicePageProps {
  badge: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroDesc: string;
  heroAccentColor: string;
  stats: { n: string; l: string }[];
  services: {
    title: string;
    desc: string;
    icon: React.ElementType;
  }[];
  process: {
    step: string;
    title: string;
    desc: string;
  }[];
  techStack: string[];
  faqs: { q: string; a: string }[];
  results: {
    metric: string;
    label: string;
    desc: string;
    tag: string;
  }[];
  pricing: {
    name: string;
    price: string;
    desc: string;
    features: string[];
    highlighted: boolean;
  }[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function ServicePageTemplate(props: ServicePageProps) {
  const {
    badge,
    heroTitle,
    heroTitleAccent,
    heroDesc,
    heroAccentColor,
    stats,
    services,
    process,
    techStack,
    faqs,
    results,
    pricing,
  } = props;

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const isLime = heroAccentColor === "#D8E63C";

  return (
    <div style={{ background: "#F0EEE9" }}>
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="pt-14" style={{ background: "#07080f" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <m.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8"
                style={{
                  background: heroAccentColor + "18",
                  color: heroAccentColor,
                  fontFamily: "var(--font-syne)",
                }}
              >
                {badge}
              </span>

              {/* Headline */}
              <h1
                className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {heroTitle}
                <br />
                <span className="font-serif-display italic font-light gradient-text-dark">
                  {heroTitleAccent}
                </span>
              </h1>

              <p
                className="text-base md:text-lg leading-relaxed mb-10 max-w-xl"
                style={{ color: "rgba(255,255,255,0.42)", fontFamily: "var(--font-inter)" }}
              >
                {heroDesc}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-12">
                {stats.map((s) => (
                  <div key={s.l}>
                    <p
                      className="text-3xl font-black mb-0.5"
                      style={{ color: heroAccentColor, fontFamily: "var(--font-syne)" }}
                    >
                      {s.n}
                    </p>
                    <p
                      className="text-xs tracking-widest uppercase"
                      style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-inter)" }}
                    >
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/start-a-project"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold transition-all hover:opacity-90"
                  style={{
                    background: "#D8E63C",
                    color: "#17184B",
                    fontFamily: "var(--font-syne)",
                  }}
                >
                  Start Your Project <ArrowRight size={15} />
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:opacity-70"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.75)",
                    fontFamily: "var(--font-syne)",
                  }}
                >
                  View Our Work
                </a>
              </div>
            </m.div>

            {/* Right — grid pattern + tech card */}
            <m.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hidden lg:block relative"
            >
              {/* Radial glow */}
              <div
                className="absolute -top-16 -right-8 w-80 h-80 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 70% 70% at 80% 20%, ${heroAccentColor}28 0%, transparent 70%)`,
                }}
              />

              {/* Square grid pattern */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                  borderRadius: "24px",
                }}
              />

              {/* Floating tech card */}
              <div
                className="relative rounded-3xl p-8"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-6"
                  style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-inter)" }}
                >
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {techStack.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{
                        background: heroAccentColor + "14",
                        color: heroAccentColor,
                        border: `1px solid ${heroAccentColor}25`,
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* ── Services/Capabilities Grid ───────────────────────────── */}
      <section className="py-24 px-6 md:px-10" style={{ background: "#F0EEE9" }}>
        <div className="max-w-7xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="section-label mb-4" style={{ color: "rgba(13,13,13,0.4)" }}>
              What&apos;s Included
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}
            >
              Everything You Get
            </h2>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {services.map((s) => (
              <m.div
                key={s.title}
                variants={fadeUp}
                className="group rounded-2xl p-7 border transition-all duration-300"
                style={{
                  background: "#ffffff",
                  borderColor: "rgba(0,0,0,0.07)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{
                    background: isLime ? "rgba(216,230,60,0.1)" : "rgba(214,180,252,0.1)",
                  }}
                >
                  <s.icon
                    size={20}
                    style={{ color: heroAccentColor }}
                    className="transition-colors duration-300"
                  />
                </div>
                <h3
                  className="text-base font-bold mb-2.5 transition-colors duration-300"
                  style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed transition-colors duration-300"
                  style={{ color: "rgba(13,13,13,0.5)", fontFamily: "var(--font-inter)" }}
                >
                  {s.desc}
                </p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* ── Process ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-10" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <p className="section-label mb-4" style={{ color: "rgba(13,13,13,0.35)" }}>
              How We Work
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}
            >
              Our Process
            </h2>
          </m.div>

          {/* Desktop: horizontal timeline; Mobile: vertical */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px" style={{ background: "rgba(13,13,13,0.08)" }} />

            {process.map((p, i) => (
              <m.div
                key={p.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col"
              >
                {/* Step number bubble */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-sm font-black z-10 relative"
                  style={{
                    background: "#D8E63C",
                    color: "#17184B",
                    fontFamily: "var(--font-syne)",
                  }}
                >
                  {p.step}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(13,13,13,0.5)", fontFamily: "var(--font-inter)" }}
                >
                  {p.desc}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack Strip ─────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-10" style={{ background: "#17184B" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-shrink-0">
              <p className="section-label mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                Technology
              </p>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Our Stack
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {techStack.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(216,230,60,0.1)",
                    color: "#D8E63C",
                    border: "1px solid rgba(216,230,60,0.2)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Results / Case Studies ───────────────────────────────── */}
      <section className="py-24 px-6 md:px-10" style={{ background: "#F0EEE9" }}>
        <div className="max-w-7xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="section-label mb-4" style={{ color: "rgba(13,13,13,0.4)" }}>
              Proof of Work
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}
            >
              Real Results
            </h2>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {results.map((r, i) => (
              <m.div
                key={r.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl p-8 flex flex-col gap-4"
                style={{ background: "#17184B" }}
              >
                <span
                  className="inline-block self-start px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
                  style={{
                    background: "rgba(216,230,60,0.12)",
                    color: "#D8E63C",
                    fontFamily: "var(--font-syne)",
                  }}
                >
                  {r.tag}
                </span>
                <p
                  className="text-5xl font-black"
                  style={{ color: "#D8E63C", fontFamily: "var(--font-syne)" }}
                >
                  {r.metric}
                </p>
                <p
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {r.label}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter)" }}
                >
                  {r.desc}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion ────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-10" style={{ background: "#F0EEE9" }}>
        <div className="max-w-3xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <p className="section-label mb-4" style={{ color: "rgba(13,13,13,0.4)" }}>
              FAQs
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}
            >
              Common Questions
            </h2>
          </m.div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl overflow-hidden border"
                style={{ background: "#ffffff", borderColor: "rgba(0,0,0,0.07)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left gap-4"
                >
                  <span
                    className="text-base font-semibold"
                    style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}
                  >
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0" style={{ color: "#D8E63C" }}>
                    {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-6">
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(13,13,13,0.55)", fontFamily: "var(--font-inter)" }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-10" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <p className="section-label mb-4" style={{ color: "rgba(13,13,13,0.35)" }}>
              Pricing
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}
            >
              Transparent Pricing
            </h2>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map((tier, i) => (
              <m.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl p-8 flex flex-col gap-6 border"
                style={
                  tier.highlighted
                    ? { background: "#17184B", borderColor: "transparent" }
                    : { background: "#ffffff", borderColor: "rgba(0,0,0,0.07)" }
                }
              >
                <div>
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-3"
                    style={{
                      color: tier.highlighted ? "rgba(255,255,255,0.4)" : "rgba(13,13,13,0.4)",
                      fontFamily: "var(--font-syne)",
                    }}
                  >
                    {tier.name}
                  </p>
                  <p
                    className="text-2xl font-black mb-2"
                    style={{
                      color: tier.highlighted ? "#D8E63C" : "#0d0d0d",
                      fontFamily: "var(--font-syne)",
                    }}
                  >
                    {tier.price}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: tier.highlighted ? "rgba(255,255,255,0.45)" : "rgba(13,13,13,0.5)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {tier.desc}
                  </p>
                </div>

                <ul className="flex flex-col gap-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: "rgba(216,230,60,0.15)" }}
                      >
                        <Check size={11} style={{ color: "#D8E63C" }} />
                      </span>
                      <span
                        style={{
                          color: tier.highlighted ? "rgba(255,255,255,0.7)" : "rgba(13,13,13,0.7)",
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/start-a-project"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold transition-all hover:opacity-90"
                  style={
                    tier.highlighted
                      ? { background: "#D8E63C", color: "#17184B" }
                      : { background: "#17184B", color: "#ffffff" }
                  }
                >
                  Get Started <ArrowRight size={14} />
                </a>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-10" style={{ background: "#07080f" }}>
        <div className="max-w-3xl mx-auto text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Ready to get started?
            </h2>
            <p
              className="text-base mb-10"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter)" }}
            >
              Tell us what you&apos;re building. We&apos;ll make it happen.
            </p>
            <a
              href="/start-a-project"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold transition-all hover:opacity-90"
              style={{ background: "#D8E63C", color: "#17184B", fontFamily: "var(--font-syne)" }}
            >
              Start Your Project <ArrowRight size={16} />
            </a>
          </m.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
