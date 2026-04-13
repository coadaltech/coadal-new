"use client";
import { motion } from "framer-motion";

const values = [
  { n:"01", title:"Speed Without Compromise", desc:"We ship fast. Every sprint is focused, every release is production-ready. No bloat, no endless revisions." },
  { n:"02", title:"AI-Native by Default",      desc:"We design every product and campaign with AI as a core ingredient — not an afterthought or a buzzword." },
  { n:"03", title:"Radical Transparency",      desc:"Weekly updates, shared dashboards, no black boxes. You always know exactly what we're building and why." },
  { n:"04", title:"Obsessed with ROI",         desc:"Every rupee spent is tracked. We optimize relentlessly until the numbers make sense for your business." },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — sticky */}
          <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} className="lg:sticky lg:top-28">
            <p className="section-label mb-5">About COADAL</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0d0d0d] mb-7 leading-tight">
              Where Code Meets{" "}
              <span className="font-serif-display italic font-light gradient-text">Market Intelligence</span>
            </h2>
            <p className="text-[#0d0d0d]/50 leading-relaxed mb-4 text-sm">
              COADAL was built on one belief — great products deserve great visibility, and great marketing needs great technology behind it. We refuse to separate the two.
            </p>
            <p className="text-[#0d0d0d]/40 leading-relaxed text-sm mb-10">
              Our team of engineers, AI specialists, designers, and growth marketers operate as one unified unit. No silos, no hand-offs, no misalignment — just outcomes.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[{ n:"150+",l:"Projects Delivered" },{ n:"50+",l:"AI Solutions Built" },{ n:"3×",l:"Avg. Revenue Growth" },{ n:"10+",l:"Industries Served" }].map(s => (
                <div key={s.l} className="rounded-2xl border border-black/[0.07] bg-[#f8f7f3] p-5">
                  <div className="text-3xl font-bold text-[#0d0d0d] mb-1">{s.n}</div>
                  <div className="text-xs text-[#0d0d0d]/40 font-medium">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — values */}
          <div className="space-y-3">
            {values.map((v,i) => (
              <motion.div key={v.n} initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.55, delay:i*0.1 }}
                className="group rounded-2xl border border-black/[0.07] bg-[#f8f7f3] p-7 hover:border-[#17184B]/25 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-start gap-5">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#17184B]/50 mt-0.5 flex-shrink-0">{v.n}</span>
                  <div>
                    <h4 className="text-base font-semibold text-[#0d0d0d] mb-2">{v.title}</h4>
                    <p className="text-sm text-[#0d0d0d]/45 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
