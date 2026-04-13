"use client";
import { motion } from "framer-motion";
import { Bot, BrainCircuit, Workflow, MessageSquareCode, Cpu, ShieldCheck } from "lucide-react";

const caps = [
  { icon: BrainCircuit,      title: "LLM-Powered Apps",      desc: "Custom apps built on GPT-4, Claude, Gemini — fine-tuned to your domain." },
  { icon: Bot,               title: "AI Agents & Automation", desc: "Autonomous agents handling support, sales, analysis — 24/7 without breaks." },
  { icon: Workflow,          title: "AI Marketing Workflows", desc: "Automated pipelines for content, email, and ad creatives at scale." },
  { icon: MessageSquareCode, title: "RAG & Knowledge Systems",desc: "Intelligent Q&A, internal knowledge bases on your own data." },
  { icon: Cpu,               title: "ML Model Integration",   desc: "Predictive analytics, recommendations, churn detection — in your product." },
  { icon: ShieldCheck,       title: "Responsible AI",         desc: "Safety guardrails, bias testing, compliance. Trustworthy by design." },
];

export default function AISection() {
  return (
    <section id="ai" className="py-28 bg-[#f8f7f3]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="text-center mb-16">
          <p className="section-label mb-4">AI Solutions</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0d0d0d]">
            AI That Actually{" "}
            <span className="font-serif-display italic font-light gradient-text">Works</span>
            <br />For Your Business
          </h2>
          <p className="text-[#0d0d0d]/45 text-base mt-5 max-w-xl mx-auto leading-relaxed">
            We don&apos;t add AI for the sake of it. Every solution we build solves a real problem and delivers measurable results.
          </p>
        </motion.div>

        {/* Feature card */}
        <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}
          className="relative rounded-3xl bg-[#0d0d0d] overflow-hidden p-10 md:p-14 mb-4">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none" style={{
            background: "radial-gradient(ellipse 80% 80% at 100% 0%, rgba(79,95,247,0.25) 0%, transparent 65%)",
          }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#17184B]/30 bg-[#17184B]/10 text-[#7c8ff9] text-[11px] font-semibold tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c8ff9] animate-pulse" />
                AI-Powered
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Your Business on<br />Autopilot with AI
              </h3>
              <p className="text-white/50 leading-relaxed mb-8 text-sm">
                Customer support handled by AI that knows your product inside-out. Marketing content written and optimized automatically. Sales pipeline enriched and nurtured without manual effort. That&apos;s what we build.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[#17184B] text-sm font-bold hover:opacity-90 transition-all" style={{background:"linear-gradient(135deg,#D8E63C,#D6B4FC)"}}>
                Explore AI Solutions →
              </a>
            </div>
            {/* Visual orbit */}
            <div className="flex items-center justify-center">
              <div className="relative w-56 h-56">
                {[0,1,2].map(i => (
                  <div key={i} className="absolute inset-0 rounded-full border border-white/[0.06]"
                    style={{ transform:`scale(${1+i*0.22})`, opacity:1-i*0.3 }} />
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-3xl bg-[#17184B] flex items-center justify-center shadow-2xl shadow-[#17184B]/30">
                    <Bot size={34} className="text-white" />
                  </div>
                </div>
                {["GPT-4","Claude","Gemini","Llama"].map((label, i) => {
                  const angle = (i/4)*2*Math.PI - Math.PI/2;
                  const r=105; const x=50+(r/2.24)*Math.cos(angle); const y=50+(r/2.24)*Math.sin(angle);
                  return (
                    <div key={label} className="absolute px-2 py-1 rounded-full border border-white/10 bg-[#1a1a1a] text-[9px] text-white/50 font-medium whitespace-nowrap"
                      style={{ left:`${x}%`, top:`${y}%`, transform:"translate(-50%,-50%)" }}>
                      {label}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 6 capability cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {caps.map((c,i) => (
            <motion.div key={c.title} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.07 }}
              className="rounded-2xl border border-black/[0.07] bg-white p-6 hover:border-[#17184B]/30 hover:shadow-sm transition-all duration-300 group">
              <div className="w-9 h-9 rounded-xl bg-[#F0EEE9] flex items-center justify-center text-[#17184B] mb-4 group-hover:bg-[#17184B] group-hover:text-white transition-all">
                <c.icon size={17} />
              </div>
              <h4 className="text-sm font-semibold text-[#0d0d0d] mb-2">{c.title}</h4>
              <p className="text-xs text-[#0d0d0d]/45 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
