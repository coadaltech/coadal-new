"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { tag:"AI + Web App",          title:"AI-Powered E-Commerce",  desc:"Next.js storefront with AI product recommendations and automated marketing funnels. 40% higher conversion.",         m1:"+40%", l1:"Conversion",  m2:"3×",    l2:"LTV",           dark:false, span:"lg:col-span-2" },
  { tag:"Performance Marketing", title:"D2C Brand Growth",       desc:"Meta + Google strategy scaled from ₹50K to ₹8L/month ad spend with consistent 5× ROAS.",                            m1:"5×",   l1:"ROAS",        m2:"16×",   l2:"Scale",         dark:true,  span:"" },
  { tag:"AI Automation",         title:"Sales AI Agent",         desc:"LLM agent for automated lead qualification and CRM updates. Replaced 3 FTE tasks instantly.",                         m1:"3×",   l1:"FTE Saved",   m2:"60%",   l2:"Faster Close",  dark:false, span:"" },
  { tag:"Mobile App",            title:"FinTech Super App",      desc:"Cross-platform app with real-time transactions, biometric auth, and AI insights. 100K+ downloads in month one.",     m1:"100K+",l1:"Downloads",   m2:"4.8★",  l2:"Rating",        dark:true,  span:"lg:col-span-2" },
];

export default function Work() {
  return (
    <section id="work" className="py-28 bg-[#f8f7f3]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-4">Our Work</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0d0d0d]">
              Results That{" "}
              <span className="font-serif-display italic font-light gradient-text">Speak</span>
            </h2>
          </div>
          <a href="#contact" className="group flex items-center gap-1 text-xs font-semibold text-[#17184B] hover:text-[#0e0f35] transition-colors tracking-wide uppercase self-end">
            All Case Studies <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((p,i) => (
            <motion.div key={p.title} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55, delay:i*0.08 }}
              className={`group rounded-2xl p-7 overflow-hidden hover:shadow-lg transition-all duration-300 ${p.span} ${
                p.dark ? "bg-[#0d0d0d]" : "bg-white border border-black/[0.07] hover:border-black/[0.13]"
              }`}>
              <div className="flex items-start justify-between mb-5">
                <span className={`text-[10px] font-semibold px-3 py-1.5 rounded-full ${
                  p.dark ? "border border-white/15 text-white/50" : "border border-[#17184B]/20 text-[#17184B] bg-[#F0EEE9]"
                }`}>{p.tag}</span>
                <button className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                  p.dark ? "border-white/10 text-white/30 hover:border-white/25 hover:text-white" : "border-black/[0.09] text-black/30 hover:border-[#17184B]/40 hover:text-[#17184B]"
                }`}>
                  <ArrowUpRight size={12} />
                </button>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${p.dark ? "text-white" : "text-[#0d0d0d]"}`}>{p.title}</h3>
              <p className={`text-sm leading-relaxed mb-7 ${p.dark ? "text-white/45" : "text-[#0d0d0d]/45"}`}>{p.desc}</p>
              <div className="flex items-center gap-8">
                {[[p.m1,p.l1],[p.m2,p.l2]].map(([n,l]) => (
                  <div key={l}>
                    <div className={`text-2xl font-bold ${p.dark ? "text-white" : "text-[#17184B]"}`}>{n}</div>
                    <div className={`text-[10px] tracking-wide mt-0.5 ${p.dark ? "text-white/30" : "text-[#0d0d0d]/35"}`}>{l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
