"use client";
import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Discovery Call",
    desc: "We understand your business, goals, stack, and competition. No generic questionnaires — a real conversation that shapes everything after.",
    dur: "Day 1–2",
    dark: false,
    grad: false,
  },
  {
    n: "02",
    title: "Strategy & Roadmap",
    desc: "Custom roadmap — tech architecture, AI integration points, marketing funnel, KPIs, and timeline. You approve before we touch a single tool.",
    dur: "Day 3–7",
    dark: false,
    grad: false,
  },
  {
    n: "03",
    title: "Design & Prototype",
    desc: "High-fidelity prototypes first. You see exactly what you're getting before a single line of production code is written.",
    dur: "Week 2",
    dark: true,
    grad: false,
  },
  {
    n: "04",
    title: "Build & Integrate",
    desc: "Agile sprints with weekly demos. Code is reviewed, tested, deployed continuously. AI models integrated and validated in real conditions.",
    dur: "Week 3–8",
    dark: false,
    grad: true,
  },
  {
    n: "05",
    title: "Launch & Go-to-Market",
    desc: "We handle deployment, monitoring, paid campaigns, SEO foundations, and social rollout — fully coordinated, end to end.",
    dur: "Week 8–10",
    dark: false,
    grad: false,
  },
  {
    n: "06",
    title: "Scale & Optimize",
    desc: "Post-launch we run A/B tests, optimize ad spend, improve AI models with real data, and double down on what's working.",
    dur: "Ongoing",
    dark: false,
    grad: false,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 bg-[#F0EEE9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-4">How We Work</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0d0d0d] leading-[1.05]">
              Zero Surprises.{" "}
              <span className="font-serif-display italic font-light gradient-text">Just Results.</span>
            </h2>
          </div>
          <p className="text-[#0d0d0d]/40 text-sm max-w-xs leading-relaxed md:text-right" style={{ fontFamily: "var(--font-inter)" }}>
            A proven 6-step process refined across 150+ projects.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {steps.map((step, i) => {
            /* ── Lime card ── */
            if (step.grad) return (
              <motion.div key={step.n}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative rounded-3xl p-8 overflow-hidden cursor-default"
                style={{ background: "linear-gradient(135deg, #D8E63C 0%, #b8cc00 100%)" }}>
                <div className="absolute -right-3 -top-5 text-[110px] font-black leading-none select-none pointer-events-none"
                  style={{ color: "rgba(0,0,0,0.08)", fontFamily: "var(--font-syne)" }}>{step.n}</div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#17184B]/60"
                      style={{ fontFamily: "var(--font-inter)" }}>Step {step.n}</span>
                    <span className="text-[10px] px-3 py-1.5 rounded-full font-semibold bg-[#17184B]/10 text-[#17184B]"
                      style={{ fontFamily: "var(--font-inter)" }}>{step.dur}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#17184B] mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-[#17184B]/60 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>{step.desc}</p>
                </div>
              </motion.div>
            );

            /* ── Dark navy card ── */
            if (step.dark) return (
              <motion.div key={step.n}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative rounded-3xl p-8 overflow-hidden cursor-default"
                style={{ background: "linear-gradient(145deg, #17184B 0%, #0d0e35 100%)" }}>
                {/* Violet glow */}
                <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(214,180,252,0.35) 0%, transparent 70%)" }} />
                <div className="absolute -right-3 -top-5 text-[110px] font-black leading-none select-none pointer-events-none"
                  style={{ color: "rgba(255,255,255,0.05)", fontFamily: "var(--font-syne)" }}>{step.n}</div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#D6B4FC]/60"
                      style={{ fontFamily: "var(--font-inter)" }}>Step {step.n}</span>
                    <span className="text-[10px] px-3 py-1.5 rounded-full font-semibold"
                      style={{ background: "rgba(214,180,252,0.15)", color: "#D6B4FC", fontFamily: "var(--font-inter)" }}>{step.dur}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>{step.desc}</p>
                </div>
              </motion.div>
            );

            /* ── Default white card ── */
            return (
              <motion.div key={step.n}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative bg-white rounded-3xl p-8 border border-black/[0.07] hover:border-[#17184B]/20 hover:shadow-md transition-all duration-300 overflow-hidden cursor-default group">
                <div className="absolute -right-3 -top-5 text-[110px] font-black leading-none select-none pointer-events-none transition-all duration-300 group-hover:opacity-100"
                  style={{ color: "rgba(23,24,75,0.05)", fontFamily: "var(--font-syne)" }}>{step.n}</div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#17184B]/40"
                      style={{ fontFamily: "var(--font-inter)" }}>Step {step.n}</span>
                    <span className="text-[10px] px-3 py-1.5 rounded-full font-semibold border border-black/[0.08] text-[#0d0d0d]/40"
                      style={{ fontFamily: "var(--font-inter)" }}>{step.dur}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0d0d0d] mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-[#0d0d0d]/45 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Violet bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #17184B 0%, #2d1060 100%)" }}>
          {/* Lime glow left */}
          <div className="absolute left-0 top-0 bottom-0 w-64 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 0% 50%, rgba(216,230,60,0.20) 0%, transparent 70%)" }} />
          {/* Violet glow right */}
          <div className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 100% 50%, rgba(214,180,252,0.25) 0%, transparent 70%)" }} />
          <div className="relative">
            <p className="text-white/40 text-xs tracking-[0.18em] uppercase mb-2 font-medium" style={{ fontFamily: "var(--font-inter)" }}>
              Ready to start?
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              From idea to launch in{" "}
              <span className="font-serif-display italic font-light" style={{
                background: "linear-gradient(135deg, #D8E63C, #D6B4FC)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>10 weeks.</span>
            </h3>
          </div>
          <a href="#contact"
            className="relative flex-shrink-0 flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-all text-[#17184B] shadow-lg shadow-[#D8E63C]/20"
            style={{ background: "linear-gradient(135deg, #D8E63C, #c8d430)", fontFamily: "var(--font-syne)" }}>
            Book a Discovery Call →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
