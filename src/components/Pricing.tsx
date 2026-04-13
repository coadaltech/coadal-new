"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name:"Starter", tag:"Early-stage startups", price:"₹75K", period:"/ project",
    desc:"Get your idea off the ground fast with a lean, high-quality MVP and foundational marketing.",
    features:["MVP Web or Mobile App","UI/UX Design","Basic SEO Setup","Social Media Strategy","1 Month Post-Launch Support","Analytics Dashboard"],
    cta:"Get Started", featured:false,
  },
  {
    name:"Growth", tag:"Most Popular", price:"₹2.5L", period:"/ month",
    desc:"Full-stack development plus data-driven marketing — built for companies ready to scale aggressively.",
    features:["Full-Stack Web + Mobile","AI Feature Integration","Performance Marketing (Google + Meta)","SEO & Content Strategy","Brand Identity System","Weekly Reports","Dedicated PM","3 Months Support"],
    cta:"Start Growing", featured:true,
  },
  {
    name:"Enterprise", tag:"Large organizations", price:"Custom", period:"pricing",
    desc:"End-to-end AI transformation, marketing ops, and enterprise-grade engineering at scale.",
    features:["Custom AI Agent Development","Enterprise System Integration","Full Marketing Operations","Multi-channel Paid Media","Dedicated Engineering Team","SLA-backed Delivery","24/7 Priority Support","Quarterly Business Reviews"],
    cta:"Contact Us", featured:false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-[#f8f7f3]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="text-center mb-16">
          <p className="section-label mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0d0d0d]">
            Transparent.{" "}
            <span className="font-serif-display italic font-light gradient-text">No Hidden Fees.</span>
          </h2>
          <p className="text-[#0d0d0d]/45 text-base mt-4 max-w-lg mx-auto">
            Every plan includes direct access to our core team — no outsourcing, no juniors on your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((p,i) => (
            <motion.div key={p.name} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:i*0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                p.featured
                  ? "text-white lg:-mt-4 lg:mb-4 shadow-2xl"
                  : "bg-white border border-black/[0.07] hover:border-black/[0.13] hover:shadow-md transition-all duration-300"
              }`}
              style={p.featured ? {background:"linear-gradient(160deg,#17184B,#2d1060)"} : undefined}>
              {p.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0d0d0d] text-white text-[10px] font-bold tracking-wide uppercase whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <div className="mb-7">
                <p className={`text-[10px] font-bold tracking-[0.18em] uppercase mb-1 ${p.featured ? "text-white/55" : "text-[#17184B]"}`}>{p.name}</p>
                <p className={`text-xs mb-5 ${p.featured ? "text-white/45" : "text-[#0d0d0d]/40"}`}>{p.featured ? "For scaling companies" : p.tag}</p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className={`text-4xl font-bold ${p.featured ? "text-white" : "text-[#0d0d0d]"}`}>{p.price}</span>
                  <span className={`text-sm ${p.featured ? "text-white/45" : "text-[#0d0d0d]/35"}`}>{p.period}</span>
                </div>
                <p className={`text-sm leading-relaxed ${p.featured ? "text-white/65" : "text-[#0d0d0d]/50"}`}>{p.desc}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map(f => (
                  <li key={f} className={`flex items-start gap-3 text-sm ${p.featured ? "text-white/80" : "text-[#0d0d0d]/60"}`}>
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${p.featured ? "bg-white/20" : "bg-[#F0EEE9]"}`}>
                      <Check size={9} className={p.featured ? "text-white" : "text-[#17184B]"} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`w-full py-3.5 rounded-xl text-sm font-semibold text-center transition-all duration-200 ${
                p.featured
                  ? "bg-white text-[#17184B] hover:bg-white/90"
                  : "bg-[#17184B] text-white hover:bg-[#0e0f35]"
              }`}>{p.cta}</a>
            </motion.div>
          ))}
        </div>
        <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.3 }}
          className="text-center text-[#0d0d0d]/30 text-xs mt-8">
          All plans are customizable. Let&apos;s talk about what your business actually needs.
        </motion.p>
      </div>
    </section>
  );
}
