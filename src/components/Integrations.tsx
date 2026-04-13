"use client";
import { motion } from "framer-motion";

const tools = [
  { name:"Next.js",    icon:"▲" }, { name:"React",      icon:"⚛" },
  { name:"OpenAI",     icon:"◎" }, { name:"Claude AI",  icon:"✦" },
  { name:"Google Ads", icon:"G" }, { name:"Meta Ads",   icon:"ƒ" },
  { name:"Node.js",    icon:"⬡" }, { name:"AWS",        icon:"⬡" },
  { name:"Figma",      icon:"◈" }, { name:"Shopify",    icon:"⬡" },
  { name:"HubSpot",    icon:"⬡" }, { name:"Slack",      icon:"#" },
  { name:"GitHub",     icon:"⬡" }, { name:"Flutter",    icon:"◆" },
  { name:"Python",     icon:"⬡" }, { name:"Notion",     icon:"N" },
  // duplicate for loop
  { name:"Next.js",    icon:"▲" }, { name:"React",      icon:"⚛" },
  { name:"OpenAI",     icon:"◎" }, { name:"Claude AI",  icon:"✦" },
  { name:"Google Ads", icon:"G" }, { name:"Meta Ads",   icon:"ƒ" },
  { name:"Node.js",    icon:"⬡" }, { name:"AWS",        icon:"⬡" },
  { name:"Figma",      icon:"◈" }, { name:"Shopify",    icon:"⬡" },
  { name:"HubSpot",    icon:"⬡" }, { name:"Slack",      icon:"#" },
  { name:"GitHub",     icon:"⬡" }, { name:"Flutter",    icon:"◆" },
  { name:"Python",     icon:"⬡" }, { name:"Notion",     icon:"N" },
];

export default function Integrations() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      {/* Background number watermark */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black leading-none" style={{
            fontSize:"clamp(160px,32vw,480px)",
            color:"rgba(0,0,0,0.03)",
            letterSpacing:"-0.04em",
          }}>100+</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="text-center mb-14">
            <p className="section-label mb-4">Integrations</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0d0d0d]">
              Works With The Tools{" "}
              <span className="font-serif-display italic font-light gradient-text">You Already Use</span>
            </h2>
            <p className="text-[#0d0d0d]/45 text-base mt-4 max-w-lg mx-auto">
              Seamlessly integrating with 100+ platforms — from AI providers to ad networks to your existing dev stack.
            </p>
          </motion.div>
        </div>

        {/* Row 1 */}
        <div className="relative overflow-hidden mb-3">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex gap-3 animate-ticker w-max py-1.5">
            {tools.map((t,i) => {
              const isCenter = i === 7;
              return (
                <div key={`${t.name}-${i}`}
                  className={`flex-shrink-0 w-24 h-24 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                    isCenter
                      ? "border-2 border-[#17184B] bg-[#F0EEE9] shadow-lg shadow-[#17184B]/20"
                      : "border border-black/[0.07] bg-[#f8f7f3] hover:border-black/20"
                  }`}
                >
                  <span className={`text-xl leading-none ${isCenter ? "text-[#17184B]" : "text-[#0d0d0d]/40"}`}>{t.icon}</span>
                  <span className={`text-[9px] font-semibold tracking-wide text-center px-1 leading-tight ${isCenter ? "text-[#17184B]" : "text-[#0d0d0d]/35"}`}>{t.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2 — reversed */}
        <div className="relative overflow-hidden mb-14">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex gap-3 w-max py-1.5" style={{ animation:"ticker 42s linear infinite reverse" }}>
            {[...tools].reverse().map((t,i) => (
              <div key={`r-${t.name}-${i}`}
                className="flex-shrink-0 w-24 h-24 rounded-2xl border border-black/[0.06] bg-[#f8f7f3] flex flex-col items-center justify-center gap-2">
                <span className="text-xl leading-none text-[#0d0d0d]/30">{t.icon}</span>
                <span className="text-[9px] font-medium tracking-wide text-[#0d0d0d]/25 text-center px-1 leading-tight">{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-black/[0.07]">
          {[{ n:"100+", l:"Tools & Platforms" },{ n:"150+", l:"Projects Delivered" },{ n:"10+", l:"Industries" }].map(s => (
            <div key={s.l} className="px-12 py-4 text-center">
              <div className="text-3xl font-bold text-[#0d0d0d] mb-1">{s.n}</div>
              <div className="text-xs text-[#0d0d0d]/40 font-medium">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
