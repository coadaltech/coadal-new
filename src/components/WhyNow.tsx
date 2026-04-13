"use client";
import { motion } from "framer-motion";

const stats = [
  { stat:"78%",  text:"of companies worldwide used AI in 2024",                                          src:"Source: McKinsey",   accent:true  },
  { stat:"56%",  text:"of companies say AI reduces shortage of skilled workers by automating routine tasks", src:"Source: KPMG",       accent:false },
  { stat:"3.7×", text:"higher revenue growth for companies using AI-driven marketing vs competitors",    src:"Source: Salesforce", accent:false },
  { stat:"83%",  text:"of executives say AI is a top strategic priority for 2025",                      src:"Source: PwC",        accent:true  },
];
const quotes = [
  { q:"AI is the most transformative technology humanity has ever worked on — more profound than electricity.",  name:"Sundar Pichai",  role:"CEO, Google",   init:"SP" },
  { q:"Every company will be an AI company. The question is whether you move first or get left behind.",         name:"Jensen Huang",   role:"CEO, NVIDIA",   init:"JH" },
  { q:"AI will improve everyone's lives and enable us to work together in ways we never could before.",         name:"Satya Nadella",  role:"CEO, Microsoft", init:"SN" },
];

export default function WhyNow() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="text-center mb-16">
          <p className="section-label mb-4">Why Act Now</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0d0d0d]">
            The AI Wave Is Here.{" "}
            <span className="font-serif-display italic font-light gradient-text">Are You Ready?</span>
          </h2>
          <p className="text-[#0d0d0d]/45 text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Companies adopting AI now are building advantages that will be nearly impossible to close in 2–3 years.
          </p>
        </motion.div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-3">
          {/* Stat 1 */}
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}
            className="md:col-span-4 rounded-2xl border border-black/[0.07] bg-[#f8f7f3] p-8">
            <div className="text-6xl font-black text-[#0d0d0d] mb-3">{stats[0].stat}</div>
            <p className="text-sm text-[#0d0d0d]/55 leading-relaxed mb-4">{stats[0].text}</p>
            <p className="text-[10px] text-[#0d0d0d]/25 italic">{stats[0].src}</p>
          </motion.div>
          {/* Quote 1 */}
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.06 }}
            className="md:col-span-4 rounded-2xl border border-black/[0.07] bg-white p-8 flex flex-col justify-between">
            <p className="text-base text-[#0d0d0d]/65 leading-relaxed italic mb-6">&ldquo;{quotes[0].q}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#17184B] flex items-center justify-center text-xs font-bold text-white flex-shrink-0">{quotes[0].init}</div>
              <div>
                <div className="text-sm font-semibold text-[#0d0d0d]">{quotes[0].name}</div>
                <div className="text-xs text-[#0d0d0d]/35">{quotes[0].role}</div>
              </div>
            </div>
          </motion.div>
          {/* Stat 2 — accent */}
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.1 }}
            className="md:col-span-4 rounded-2xl p-8" style={{background:"linear-gradient(135deg,#17184B,#2d1e6e)"}}>
            <div className="text-6xl font-black text-white mb-3">{stats[1].stat}</div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">{stats[1].text}</p>
            <p className="text-[10px] text-white/40 italic">{stats[1].src}</p>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-3">
          {/* Quote 2 */}
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.08 }}
            className="md:col-span-5 rounded-2xl border border-black/[0.07] bg-[#f8f7f3] p-8 flex flex-col justify-between">
            <p className="text-base text-[#0d0d0d]/65 leading-relaxed italic mb-6">&ldquo;{quotes[1].q}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#0d0d0d] flex items-center justify-center text-xs font-bold text-white flex-shrink-0">{quotes[1].init}</div>
              <div>
                <div className="text-sm font-semibold text-[#0d0d0d]">{quotes[1].name}</div>
                <div className="text-xs text-[#0d0d0d]/35">{quotes[1].role}</div>
              </div>
            </div>
          </motion.div>
          {/* Stat 3 — accent */}
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.12 }}
            className="md:col-span-3 rounded-2xl p-8" style={{background:"linear-gradient(135deg,#D8E63C,#17184B)"}}>
            <div className="text-6xl font-black text-white mb-3">{stats[2].stat}</div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">{stats[2].text}</p>
            <p className="text-[10px] text-white/40 italic">{stats[2].src}</p>
          </motion.div>
          {/* Quote 3 */}
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.15 }}
            className="md:col-span-4 rounded-2xl border border-black/[0.07] bg-white p-8 flex flex-col justify-between">
            <p className="text-base text-[#0d0d0d]/65 leading-relaxed italic mb-6">&ldquo;{quotes[2].q}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#17184B] flex items-center justify-center text-xs font-bold text-white flex-shrink-0">{quotes[2].init}</div>
              <div>
                <div className="text-sm font-semibold text-[#0d0d0d]">{quotes[2].name}</div>
                <div className="text-xs text-[#0d0d0d]/35">{quotes[2].role}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom full-width */}
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.18 }}
          className="rounded-2xl border border-black/[0.07] bg-[#f8f7f3] p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-baseline gap-5">
            <div className="text-6xl font-black text-[#0d0d0d]">{stats[3].stat}</div>
            <div>
              <p className="text-sm text-[#0d0d0d]/55 leading-relaxed">{stats[3].text}</p>
              <p className="text-[10px] text-[#0d0d0d]/25 italic mt-1">{stats[3].src}</p>
            </div>
          </div>
          <a href="#contact" className="flex-shrink-0 px-7 py-3.5 rounded-full bg-[#17184B] text-white text-sm font-semibold hover:bg-[#0e0f35] transition-all">
            Don&apos;t Get Left Behind →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
