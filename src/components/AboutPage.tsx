"use client";
import { m } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const values = [
  {
    title: "Speed",
    desc: "We move fast without breaking things. Rapid iteration, quick decisions, and a bias for action are core to how we work.",
    accent: "#D8E63C",
    num: "01",
  },
  {
    title: "Precision",
    desc: "Every pixel, every line of code, every campaign is executed with intention. Details compound into excellence.",
    accent: "#D6B4FC",
    num: "02",
  },
  {
    title: "Transparency",
    desc: "No black boxes. You see exactly what we're building, why we're building it, and what the results are — always.",
    accent: "#D8E63C",
    num: "03",
  },
  {
    title: "Innovation",
    desc: "We're early adopters of tools that make our clients win. When AI can do it better, we use AI. When craft matters, we craft.",
    accent: "#D6B4FC",
    num: "04",
  },
];

const team = [
  { name: "Aryan Mehta", role: "Head of AI & Engineering", initials: "AM", accent: "#D8E63C" },
  { name: "Priya Kapoor", role: "Growth Strategist", initials: "PK", accent: "#D6B4FC" },
  { name: "Rahul Singh", role: "Lead Engineer", initials: "RS", accent: "#D8E63C" },
  { name: "Neha Sharma", role: "SEO & Content Lead", initials: "NS", accent: "#D6B4FC" },
  { name: "Karan Patel", role: "Creative Director", initials: "KP", accent: "#D8E63C" },
  { name: "Sana Mirza", role: "Performance Marketing Lead", initials: "SM", accent: "#D6B4FC" },
];

const numbers = [
  { n: "50+", l: "Projects Shipped" },
  { n: "3+", l: "Years in Operation" },
  { n: "15+", l: "Team Members" },
  { n: "120+", l: "Clients Served" },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export default function AboutPage() {
  return (
    <div style={{ background: "#F0EEE9", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-14" style={{ background: "#07080f" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
          <m.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6" style={{ background: "rgba(216,230,60,0.12)", color: "#D8E63C" }}>
              About COADAL
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl">
              We Build Products<br />
              <span className="gradient-text-dark">That Actually Work</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              COADAL is a full-stack AI development and marketing agency. We partner with ambitious founders and brands to build products that grow — fast.
            </p>
          </m.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 md:px-10" style={{ background: "#F0EEE9" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <m.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="section-label mb-6 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#0d0d0d" }}>
              Founded in 2022 with a simple belief
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(13,13,13,0.6)" }}>
              Most agencies optimise for their own processes — not your outcomes. COADAL was founded to be different: a team of builders and marketers who measure success by client metrics, not deliverable counts.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(13,13,13,0.6)" }}>
              We started with a single SaaS client and three people. Today, we're a team of 15+ specialists — engineers, designers, marketers, and AI researchers — who've shipped 50+ products and driven growth for 120+ businesses across India and beyond.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(13,13,13,0.6)" }}>
              Our mission is simple: give every ambitious founder access to the kind of A-team that was previously only available to well-funded enterprises.
            </p>
          </m.div>
          <m.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="rounded-3xl p-10" style={{ background: "#17184B" }}>
              <blockquote className="text-xl font-medium text-white leading-relaxed mb-6" style={{ fontFamily: "var(--font-cormorant)" }}>
                "We believe the best companies are built by small, focused teams with excellent tools and relentless execution. AI has made this more true than ever."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "linear-gradient(135deg,#D8E63C,#D6B4FC)", color: "#17184B" }}>
                  AM
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Aryan Mehta</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>Co-founder & Head of AI</p>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-16 px-6 md:px-10" style={{ background: "#17184B" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {numbers.map((n) => (
            <div key={n.l} className="text-center">
              <p className="text-5xl md:text-6xl font-black mb-2" style={{ color: "#D8E63C", fontFamily: "var(--font-syne)" }}>{n.n}</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{n.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 md:px-10" style={{ background: "#F0EEE9" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label mb-4 block">What Drives Us</span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#0d0d0d" }}>Our Core Values</h2>
          </div>
          <m.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.09 } } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {values.map((v) => (
              <m.div
                key={v.title}
                variants={fadeUp}
                className="rounded-2xl p-8"
                style={{ background: "#17184B", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-black" style={{ color: v.accent, fontFamily: "var(--font-syne)" }}>{v.num}</span>
                  <span className="w-2 h-2 rounded-full mt-2" style={{ background: v.accent }} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{v.desc}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 md:px-10" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label mb-4 block">The People</span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#0d0d0d" }}>Meet the Team</h2>
            <p className="text-lg mt-4" style={{ color: "rgba(13,13,13,0.45)" }}>Builders, thinkers, and growth obsessives.</p>
          </div>
          <m.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {team.map((member) => (
              <m.div key={member.name} variants={fadeUp} className="flex flex-col items-center text-center gap-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-black"
                  style={{
                    background: `linear-gradient(135deg, ${member.accent}, ${member.accent === "#D8E63C" ? "#D6B4FC" : "#D8E63C"})`,
                    color: "#17184B",
                    fontFamily: "var(--font-syne)",
                  }}
                >
                  {member.initials}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#0d0d0d" }}>{member.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(13,13,13,0.45)" }}>{member.role}</p>
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-10" style={{ background: "#07080f" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Work With Us</h2>
          <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>
            We're selective about who we work with — because great work requires great partnership. Let's see if we're a fit.
          </p>
          <a
            href="/start-a-project"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold transition-all hover:opacity-90"
            style={{ background: "#D8E63C", color: "#17184B" }}
          >
            Start a Conversation <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
