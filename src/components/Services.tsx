"use client";
import { motion } from "framer-motion";
import { Bot, Code2, Smartphone, Zap, Search, Layers, Megaphone, BarChart3, ArrowUpRight } from "lucide-react";

const featured = [
  {
    icon: Bot,
    num: "01",
    title: "AI Development",
    desc: "LLM-powered apps, autonomous agents, and intelligent automation that give your business an unfair competitive advantage. From GPT integrations to custom-trained models.",
    tags: ["LLM Apps", "AI Agents", "Automation", "Custom Models"],
    accent: "#D8E63C",
    href: "/services/ai-development",
  },
  {
    icon: Zap,
    num: "02",
    title: "Performance Marketing",
    desc: "Data-driven campaigns across Google, Meta, and LinkedIn — engineered for measurable ROI. Every rupee tracked, every conversion optimized. No vanity metrics.",
    tags: ["Google Ads", "Meta Ads", "LinkedIn", "Retargeting"],
    accent: "#D6B4FC",
    href: "/services/performance-marketing",
  },
];

const services = [
  { icon: Code2,      num: "03", title: "Web Development",    desc: "High-performance web apps with Next.js and React — fast, scalable, conversion-optimized.",                href: "/services/web-development" },
  { icon: Smartphone, num: "04", title: "Mobile Apps",        desc: "Native and cross-platform iOS & Android apps that users love, built with React Native or Flutter.",       href: "/services/mobile-apps" },
  { icon: Search,     num: "05", title: "SEO & Content",      desc: "Organic growth strategy — technical SEO, content that ranks, and backlink authority building.",            href: "/services/seo-content" },
  { icon: Layers,     num: "06", title: "Brand Identity",     desc: "Logos, design systems, and brand guidelines that create lasting impressions at every touchpoint.",         href: "/services/brand-identity" },
  { icon: Megaphone,  num: "07", title: "Social Media",       desc: "Strategic content, community management, and paid social that builds real audience and engagement.",       href: "/services" },
  { icon: BarChart3,  num: "08", title: "Analytics & Growth", desc: "Custom dashboards, tracking setup, and continuous growth experiments to turn data into decisions.",        href: "/services" },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#F0EEE9]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0d0d0d] leading-[1.05]">
              Everything You Need<br />
              to{" "}
              <span className="font-serif-display italic font-light gradient-text">Scale & Win</span>
            </h2>
          </div>
          <p className="text-[#0d0d0d]/45 text-sm max-w-xs leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            From AI products to marketing that converts — your single partner for digital growth.
          </p>
        </motion.div>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {featured.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl p-8 md:p-10 overflow-hidden cursor-default"
              style={{ background: "linear-gradient(145deg, #0d0e30, #17184B)" }}>

              {/* Accent glow */}
              <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{
                background: `radial-gradient(ellipse 80% 80% at 90% 10%, ${s.accent}22 0%, transparent 70%)`,
              }} />

              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-white/30 uppercase" style={{ fontFamily: "var(--font-inter)" }}>{s.num}</span>
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
                    style={{ background: `${s.accent}22`, border: `1px solid ${s.accent}33` }}>
                    <s.icon size={18} style={{ color: s.accent }} />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8" style={{ fontFamily: "var(--font-inter)" }}>{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {s.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-3 py-1.5 rounded-full font-medium tracking-wide"
                      style={{ background: `${s.accent}15`, color: s.accent, border: `1px solid ${s.accent}25`, fontFamily: "var(--font-inter)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={s.href} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] transition-all group-hover:gap-3"
                  style={{ color: s.accent, fontFamily: "var(--font-inter)" }}>
                  Learn More <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Services — numbered list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}>
              <a href={s.href}
                className="group bg-white rounded-2xl p-6 border border-black/[0.06] hover:border-[#17184B]/20 hover:shadow-md transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-black/20 uppercase" style={{ fontFamily: "var(--font-inter)" }}>{s.num}</span>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#F0EEE9] group-hover:bg-[#17184B] transition-colors duration-300">
                    <s.icon size={15} className="text-[#17184B] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-[#0d0d0d] mb-2 tracking-tight">{s.title}</h3>
                <p className="text-[#0d0d0d]/45 text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>{s.desc}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
