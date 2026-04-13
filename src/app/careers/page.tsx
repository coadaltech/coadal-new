import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersClient from "./CareersClient";
import { ArrowRight, MapPin, Briefcase, Globe, Zap, Heart, Users, Coffee } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — COADAL",
  description: "Join COADAL — we're building the future of AI-driven digital products and marketing. Remote-first, ambitious, and growing fast.",
};

const perks = [
  { icon: Globe,      title: "Remote First",      desc: "Work from anywhere in India. Async-friendly culture with deep work blocks built in." },
  { icon: Zap,        title: "Fast Growth",        desc: "Work on real products used by real customers — no sandbox projects, no busywork." },
  { icon: Heart,      title: "Health Benefits",    desc: "Health insurance for you and your family, from day one." },
  { icon: Coffee,     title: "Flexible Hours",     desc: "Core hours 11am–4pm. Outside that, manage your own schedule." },
  { icon: Users,      title: "Tight-knit Team",    desc: "Small team, big ownership. You'll have direct impact on every project you touch." },
  { icon: Briefcase,  title: "Learning Budget",    desc: "₹25K/year for courses, books, and conferences. We invest in your growth." },
];

export default function CareersPage() {
  return (
    <div style={{ background: "#F0EEE9", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-14" style={{ background: "#07080f" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <Briefcase size={12} color="#D8E63C" />
            <span className="text-[11px] text-white/50 tracking-[0.18em] uppercase font-medium" style={{ fontFamily: "var(--font-inter)" }}>We&apos;re Hiring</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl" style={{ fontFamily: "var(--font-syne)" }}>
            Build the Future<br />
            <span style={{ background: "linear-gradient(135deg,#D8E63C,#D6B4FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              With Us.
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.50)", fontFamily: "var(--font-inter)" }}>
            We&apos;re a small team doing big things — AI products, performance marketing, and world-class digital experiences. If you want ownership and impact, you&apos;ll fit right in.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.40)", fontFamily: "var(--font-inter)" }}>6 open positions</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={13} color="rgba(255,255,255,0.30)" />
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.40)", fontFamily: "var(--font-inter)" }}>Jaipur, India · Remote</span>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <p className="section-label mb-4">Why COADAL</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-14" style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}>
          A Place to Do Your Best Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map(perk => {
            const Icon = perk.icon;
            return (
              <div key={perk.title} className="p-7 rounded-2xl border" style={{ background: "#ffffff", borderColor: "rgba(23,24,75,0.08)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(216,230,60,0.12)" }}>
                  <Icon size={20} color="#17184B" />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}>{perk.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(13,13,13,0.50)", fontFamily: "var(--font-inter)" }}>{perk.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Open Roles — client component */}
      <CareersClient />

      {/* CTA */}
      <section className="py-24 px-6 md:px-10" style={{ background: "#07080f" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-syne)" }}>
            Ready to Join?
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter)" }}>
            Send your CV and portfolio to <span style={{ color: "#D8E63C" }}>info@coadal.com</span>
          </p>
          <a href="mailto:info@coadal.com?subject=Career Enquiry — COADAL"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold"
            style={{ background: "#D8E63C", color: "#17184B", fontFamily: "var(--font-syne)", textDecoration: "none" }}>
            Get in Touch <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
