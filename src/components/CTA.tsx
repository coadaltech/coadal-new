"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}
          className="relative rounded-3xl bg-[#0d0d0d] overflow-hidden px-10 py-24 text-center">
          {/* Subtle blue beam from top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[50%] pointer-events-none" style={{
            background: "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(79,95,247,0.28) 0%, transparent 70%)",
          }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[25%] h-[30%] pointer-events-none" style={{
            background: "radial-gradient(ellipse 80% 80% at 50% 0%, rgba(124,143,249,0.45) 0%, transparent 65%)",
            filter:"blur(12px)",
          }} />
          {/* Bottom sky glow */}
          <div className="absolute bottom-0 left-1/4 w-[25%] h-[30%] pointer-events-none" style={{
            background:"radial-gradient(ellipse 80% 60% at 30% 100%, rgba(79,95,247,0.18) 0%, transparent 70%)", filter:"blur(24px)"
          }} />
          <div className="absolute bottom-0 right-1/4 w-[25%] h-[30%] pointer-events-none" style={{
            background:"radial-gradient(ellipse 80% 60% at 70% 100%, rgba(79,95,247,0.12) 0%, transparent 70%)", filter:"blur(24px)"
          }} />

          <div className="relative">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/35 mb-6">Ready to Build?</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
              Let&apos;s Build Something<br />
              <span className="font-serif-display italic font-light" style={{
                background:"linear-gradient(105deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.35) 28%, rgba(255,255,255,0.82) 52%, rgba(255,255,255,1) 65%)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
              }}>Extraordinary</span>
            </h2>
            <p className="text-white/45 text-base md:text-lg mb-10 max-w-xl mx-auto">
              From AI-powered products to campaigns that convert — first conversation is always free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="group flex items-center gap-2 px-8 py-4 rounded-full text-[#17184B] font-bold text-sm hover:opacity-90 transition-all" style={{background:"linear-gradient(135deg,#D8E63C,#D6B4FC)"}}>
                Start Your Project <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#work" className="px-8 py-4 rounded-full border border-white/15 text-white/60 text-sm font-medium hover:border-white/30 hover:text-white transition-all">
                View Our Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
