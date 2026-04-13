"use client";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const openRoles = [
  {
    title: "Senior Full-Stack Engineer",
    team: "Engineering",
    type: "Full-time",
    location: "Remote / Jaipur",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "AI/ML Engineer",
    team: "AI",
    type: "Full-time",
    location: "Remote / Jaipur",
    tags: ["Python", "LangChain", "PyTorch"],
  },
  {
    title: "Performance Marketing Manager",
    team: "Marketing",
    type: "Full-time",
    location: "Remote",
    tags: ["Google Ads", "Meta Ads", "Analytics"],
  },
  {
    title: "UI/UX Designer",
    team: "Design",
    type: "Full-time",
    location: "Remote / Jaipur",
    tags: ["Figma", "Framer", "Motion Design"],
  },
  {
    title: "SEO & Content Strategist",
    team: "Marketing",
    type: "Full-time",
    location: "Remote",
    tags: ["SEO", "Content", "Ahrefs"],
  },
  {
    title: "Business Development Executive",
    team: "Growth",
    type: "Full-time",
    location: "Jaipur",
    tags: ["B2B Sales", "CRM", "Lead Gen"],
  },
];

const teamColors: Record<string, string> = {
  Engineering: "#D8E63C",
  AI: "#D6B4FC",
  Marketing: "#D8E63C",
  Design: "#D6B4FC",
  Growth: "#D8E63C",
};

export default function CareersClient() {
  return (
    <section className="py-20 px-6 md:px-10" style={{ background: "#17184B" }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(216,230,60,0.50)", fontFamily: "var(--font-inter)" }}>Open Positions</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-14" style={{ fontFamily: "var(--font-syne)" }}>
          Find Your Role
        </h2>
        <div className="flex flex-col gap-4">
          {openRoles.map(role => (
            <a
              key={role.title}
              href={`mailto:info@coadal.com?subject=Application: ${role.title}`}
              style={{ textDecoration: "none" }}
            >
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "background 0.2s ease, border-color 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(216,230,60,0.25)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span style={{
                      fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
                      padding: "3px 10px", borderRadius: 99,
                      background: `${teamColors[role.team] || "#D8E63C"}18`,
                      color: teamColors[role.team] || "#D8E63C",
                      border: `1px solid ${teamColors[role.team] || "#D8E63C"}30`,
                      fontFamily: "var(--font-inter)",
                    }}>{role.team}</span>
                    <div className="flex items-center gap-1.5">
                      <Clock size={11} color="rgba(255,255,255,0.25)" />
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.30)", fontFamily: "var(--font-inter)" }}>{role.type}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={11} color="rgba(255,255,255,0.25)" />
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.30)", fontFamily: "var(--font-inter)" }}>{role.location}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "var(--font-syne)" }}>{role.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {role.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: 10, padding: "3px 10px", borderRadius: 99,
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.35)",
                        fontFamily: "var(--font-inter)",
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 px-5 py-2.5 rounded-full" style={{
                  background: "rgba(216,230,60,0.10)",
                  border: "1px solid rgba(216,230,60,0.20)",
                }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#D8E63C", fontFamily: "var(--font-syne)" }}>Apply Now</span>
                  <ArrowRight size={13} color="#D8E63C" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* General apply */}
        <div className="mt-10 p-8 rounded-2xl text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-syne)" }}>Don&apos;t See Your Role?</h3>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.40)", fontFamily: "var(--font-inter)" }}>
            We&apos;re always looking for exceptional people. Send us your portfolio and tell us how you&apos;d add value.
          </p>
          <a href="mailto:info@coadal.com?subject=General Application — COADAL"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
            style={{ background: "#D8E63C", color: "#17184B", fontFamily: "var(--font-syne)", textDecoration: "none" }}>
            Send an Open Application <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
