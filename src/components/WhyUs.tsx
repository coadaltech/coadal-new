"use client";
import { motion } from "framer-motion";
import { Rocket, Building2, Check } from "lucide-react";

const startupPerks = ["MVP built in weeks, not months","Lean budgets, maximum impact","AI tools to compete with big players","Marketing that punches above your weight","Scalable architecture from day one"];
const enterprisePerks = ["Enterprise-grade AI integrations","Custom marketing automation at scale","Dedicated team, not shared resources","SLA-backed delivery & support","Secure, compliant, audit-ready systems"];

export default function WhyUs() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="text-center mb-16">
          <p className="section-label mb-4">Who We Serve</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0d0d0d]">
            Built for{" "}
            <span className="font-serif-display italic font-light gradient-text">Every Stage</span>
          </h2>
          <p className="text-[#0d0d0d]/45 text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re a startup finding product-market fit or an enterprise scaling globally — we have a proven playbook for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Startup */}
          <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.65 }}
            className="rounded-3xl border border-black/[0.07] bg-[#f8f7f3] p-8 md:p-10">
            <div className="w-12 h-12 rounded-2xl bg-[#F0EEE9] flex items-center justify-center mb-6">
              <Rocket size={22} className="text-[#17184B]" />
            </div>
            <p className="section-label mb-2">For Startups</p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0d0d0d] mb-4 leading-tight">Launch Fast.<br />Grow Faster.</h3>
            <p className="text-[#0d0d0d]/50 text-sm leading-relaxed mb-7">
              We&apos;ve helped early-stage startups go from idea to revenue-generating product in record time — using AI and lean marketing to outmaneuver the competition.
            </p>
            <ul className="space-y-3 mb-8">
              {startupPerks.map(p => (
                <li key={p} className="flex items-center gap-3 text-sm text-[#0d0d0d]/60">
                  <div className="w-5 h-5 rounded-full bg-[#F0EEE9] flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-[#17184B]" />
                  </div>
                  {p}
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[#17184B] text-sm font-bold hover:opacity-90 transition-all" style={{background:"linear-gradient(135deg,#D8E63C,#b8cc00)"}}>
              Startup Package →
            </a>
          </motion.div>

          {/* Enterprise */}
          <motion.div initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.65, delay:0.08 }}
            className="rounded-3xl border border-black/[0.07] bg-[#0d0d0d] p-8 md:p-10">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <Building2 size={22} className="text-white" />
            </div>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/40 mb-2">For Enterprises</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">Scale Smart.<br />Dominate Markets.</h3>
            <p className="text-white/45 text-sm leading-relaxed mb-7">
              Large organizations trust COADAL to modernize their tech, integrate cutting-edge AI, and run sophisticated marketing operations that move the needle.
            </p>
            <ul className="space-y-3 mb-8">
              {enterprisePerks.map(p => (
                <li key={p} className="flex items-center gap-3 text-sm text-white/55">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-white/70" />
                  </div>
                  {p}
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/8 transition-all">
              Enterprise Solutions →
            </a>
          </motion.div>
        </div>

        {/* Industry tags */}
        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.15 }}
          className="mt-8 flex flex-wrap justify-center gap-2">
          {["Fintech","EdTech","E-commerce","SaaS","Healthcare","Real Estate","D2C Brands","Media","Logistics","Manufacturing"].map(tag => (
            <span key={tag} className="px-3 py-1.5 rounded-full border border-black/[0.08] bg-white text-black/40 text-xs font-medium">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
