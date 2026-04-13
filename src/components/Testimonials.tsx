"use client";
import { motion } from "framer-motion";

const row1 = [
  { q: "COADAL built our AI chatbot and rewrote our entire marketing funnel in 8 weeks. Organic traffic up 320%, CAC down 45%. These guys are the real deal.", name: "Arjun Kapoor",  role: "CEO, TechNova",      init: "AK", tag: "AI + Marketing" },
  { q: "We scaled from seed to Series A with COADAL as our tech partner. Every decision was data-backed and delivered on time. No excuses, just pure execution.", name: "Priya Sharma",  role: "Founder, GrowthBox",  init: "PS", tag: "Startup Growth" },
  { q: "E-commerce revenue doubled in 3 months. Their Meta ad strategy combined with AI-generated creatives is something I've never seen anywhere else.",          name: "Rahul Mehta",   role: "Director, ShopNest",  init: "RM", tag: "E-commerce" },
  { q: "The onboarding was smooth and the team was deeply invested in our success. Felt like a true extension of our in-house team, not just a vendor.",            name: "Neha Gupta",    role: "VP Growth, CloudEdge", init: "NG", tag: "Partnership" },
];

const row2 = [
  { q: "Enterprise-level quality without enterprise pricing. They integrated AI into our CRM and saved 20 hours per week per team member. Remarkable.",            name: "Sneha Patel",   role: "CTO, LogiFlow",       init: "SP", tag: "Enterprise AI" },
  { q: "From zero online presence to 50K monthly visitors in 6 months. Their SEO and content strategy is methodical, not guesswork. Absolute professionals.",      name: "Vikram Bose",   role: "MD, UrbanRealty",     init: "VB", tag: "SEO" },
  { q: "The mobile app has a 4.8 star rating with 100K downloads. They obsessed over every UX detail and it absolutely shows in the final product.",               name: "Aisha Khan",    role: "CPO, PocketPay",      init: "AK", tag: "Mobile App" },
  { q: "We saw a 3× increase in qualified leads within 60 days of COADAL taking over our Google and Meta campaigns. The attribution data alone was a game changer.", name: "Karan Mehta",  role: "CMO, Maverick AI",    init: "KM", tag: "Performance Ads" },
];

function Card({ r }: { r: typeof row1[0] }) {
  return (
    <div className="flex-shrink-0 w-[360px] md:w-[420px] rounded-2xl p-6 border border-white/[0.07] mx-2"
      style={{ background: "rgba(255,255,255,0.03)" }}>
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ color: "#D8E63C", fontSize: "14px" }}>&#9733;</span>
        ))}
      </div>
      <span className="inline-block text-[10px] px-2.5 py-1 rounded-full mb-3 font-semibold tracking-wide"
        style={{ background: "rgba(216,230,60,0.09)", color: "rgba(216,230,60,0.65)", border: "1px solid rgba(216,230,60,0.14)", fontFamily: "var(--font-inter)" }}>
        {r.tag}
      </span>
      <p className="text-sm leading-relaxed mb-5 text-white/45 italic" style={{ fontFamily: "var(--font-inter)" }}>
        &ldquo;{r.q}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 text-[#17184B]"
          style={{ background: "linear-gradient(135deg, #D8E63C, #c8d430)", fontFamily: "var(--font-syne)" }}>
          {r.init}
        </div>
        <div>
          <div className="text-sm font-semibold text-white/75" style={{ fontFamily: "var(--font-syne)" }}>{r.name}</div>
          <div className="text-xs text-white/30" style={{ fontFamily: "var(--font-inter)" }}>{r.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  /* Duplicate arrays so the loop is seamless */
  const track1 = [...row1, ...row1];
  const track2 = [...row2, ...row2];

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "#080918" }}>

      {/* Lime ambient glow — top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{
        width: "80%", height: "55%",
        background: "radial-gradient(ellipse 90% 80% at 50% 0%, rgba(140,200,60,0.14) 0%, rgba(90,160,40,0.06) 40%, transparent 70%)",
        filter: "blur(30px)",
      }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{
        width: "40%", height: "30%",
        background: "radial-gradient(ellipse 80% 70% at 50% 0%, rgba(180,230,60,0.12) 0%, transparent 65%)",
        filter: "blur(10px)",
      }} />

      {/* Left & right fade masks */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none" style={{
        background: "linear-gradient(to right, #080918, transparent)",
      }} />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none" style={{
        background: "linear-gradient(to left, #080918, transparent)",
      }} />

      <div className="relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-14 px-6">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.10] bg-white/[0.05] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8E63C] animate-pulse" />
            <span className="text-[11px] text-white/50 tracking-[0.18em] uppercase font-medium"
              style={{ fontFamily: "var(--font-inter)" }}>Client Stories</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
            120+ Happy{" "}
            <span className="font-serif-display italic font-light" style={{
              background: "linear-gradient(135deg, #D8E63C, #D6B4FC)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Clients</span>
          </h2>
          <p className="text-white/35 text-base max-w-md mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
            From early-stage startups to enterprise teams — they all trusted COADAL to deliver.
          </p>
        </motion.div>

        {/* Row 1 — right to left */}
        <div className="mb-4 overflow-hidden">
          <div className="flex" style={{ animation: "marquee-ltr 38s linear infinite", willChange: "transform", transform: "translateZ(0)" }}>
            {track1.map((r, i) => <Card key={i} r={r} />)}
          </div>
        </div>

        {/* Row 2 — left to right (reverse) */}
        <div className="overflow-hidden">
          <div className="flex" style={{ animation: "marquee-rtl 42s linear infinite", willChange: "transform", transform: "translateZ(0)" }}>
            {track2.map((r, i) => <Card key={i} r={r} />)}
          </div>
        </div>

        {/* Trust bar */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 mx-6 md:mx-10 max-w-7xl lg:mx-auto rounded-2xl border border-white/[0.07] px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: "rgba(255,255,255,0.03)" }}>
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: "#D8E63C", fontSize: "17px" }}>&#9733;</span>
              ))}
            </div>
            <span className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>4.9 / 5</span>
            <span className="text-sm text-white/30" style={{ fontFamily: "var(--font-inter)" }}>from 120+ client reviews</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-white/25 font-medium" style={{ fontFamily: "var(--font-inter)" }}>
            {["ISO Certified", "GDPR Compliant", "NDA Protected", "5-Star Rated"].map(b => (
              <span key={b} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8E63C]/60 flex-shrink-0" />{b}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee-ltr {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-rtl {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
