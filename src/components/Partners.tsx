"use client";
import { motion } from "framer-motion";

const partners = [
  { name: "Google", sub: "Partner Agency" },
  { name: "Meta", sub: "Business Partner" },
  { name: "AWS", sub: "Partner Network" },
  { name: "OpenAI", sub: "API Partner" },
  { name: "HubSpot", sub: "Solutions Partner" },
  { name: "Shopify", sub: "Plus Partner" },
  { name: "Vercel", sub: "Deployment" },
  { name: "Stripe", sub: "Payments" },
];

const clients = [
  "TechNova", "GrowthBox", "ShopNest", "LogiFlow", "UrbanRealty", "PocketPay", "Maverick AI", "ScaleForge",
];

export default function Partners() {
  return (
    <section className="py-20 bg-white border-y border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <p className="section-label mb-3">Our Partners</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0d0d0d]">
            Trusted Platforms &{" "}
            <span className="font-serif-display italic font-light gradient-text">Partner Network</span>
          </h2>
        </motion.div>

        {/* Partner Logos */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-14">
          {partners.map((p, i) => (
            <motion.div key={p.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col items-center justify-center gap-1.5 py-5 px-3 rounded-2xl border border-black/[0.07] bg-[#F0EEE9] hover:border-[#17184B]/20 hover:bg-white hover:shadow-sm transition-all duration-300 cursor-default group">
              <span className="text-base font-bold text-[#0d0d0d]/70 group-hover:text-[#17184B] transition-colors tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}>{p.name}</span>
              <span className="text-[9px] text-[#0d0d0d]/30 text-center tracking-wide uppercase"
                style={{ fontFamily: "var(--font-inter)" }}>{p.sub}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-black/[0.06]" />
          <span className="text-[10px] text-[#0d0d0d]/30 tracking-[0.18em] uppercase font-medium" style={{ fontFamily: "var(--font-inter)" }}>
            Clients We&apos;ve Worked With
          </span>
          <div className="flex-1 h-px bg-black/[0.06]" />
        </div>

        {/* Client names */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {clients.map((c, i) => (
            <span key={c} className="text-[#0d0d0d]/25 text-sm font-semibold tracking-wide hover:text-[#17184B]/50 transition-colors cursor-default"
              style={{ fontFamily: "var(--font-syne)", transitionDelay: `${i * 30}ms` }}>
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
