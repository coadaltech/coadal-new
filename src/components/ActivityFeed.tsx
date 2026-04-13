"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Activity } from "lucide-react";

interface Update {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  date: string;
}

const TAG_COLORS: Record<string, string> = {
  Launch:    "#D8E63C",
  Milestone: "#D6B4FC",
  Team:      "#7dd3fc",
  Award:     "#fbbf24",
  Event:     "#D8E63C",
  News:      "#D6B4FC",
  Update:    "#D8E63C",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export default function ActivityFeed() {
  const [updates, setUpdates] = useState<Update[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/updates")
      .then(r => r.json())
      .then(data => { if (Array.isArray(data)) setUpdates(data); })
      .catch(() => {});
  }, []);

  const scroll = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  if (updates.length === 0) return null;

  return (
    <section style={{ background: "#07080f", paddingTop: 80, paddingBottom: 80 }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "rgba(216,230,60,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Activity size={16} color="#D8E63C" />
                </div>
                <span style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "#D8E63C", fontFamily: "var(--font-inter)",
                }}>Company Activity</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white" style={{ fontFamily: "var(--font-syne)" }}>
                What We&apos;ve Been{" "}
                <span style={{
                  background: "linear-gradient(135deg,#D8E63C,#D6B4FC)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>Up To</span>
              </h2>
              <p style={{
                fontSize: 14, color: "rgba(255,255,255,0.35)", marginTop: 10,
                fontFamily: "var(--font-inter)", maxWidth: 460,
              }}>
                Latest milestones, launches, and behind-the-scenes moments from the COADAL team.
              </p>
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => scroll(-1)} style={{
                width: 40, height: 40, borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
              }}>
                <ChevronLeft size={16} color="rgba(255,255,255,0.6)" />
              </button>
              <button onClick={() => scroll(1)} style={{
                width: 40, height: 40, borderRadius: "50%",
                background: "#D8E63C",
                border: "none",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
              }}>
                <ChevronRight size={16} color="#17184B" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <div
          ref={scrollRef}
          style={{
            display: "flex", gap: 20, overflowX: "auto",
            paddingBottom: 8, scrollbarWidth: "none", msOverflowStyle: "none",
          }}
          className="hide-scrollbar"
        >
          {updates.map((u, i) => {
            const accent = TAG_COLORS[u.tag] ?? "#D8E63C";
            return (
              <motion.div
                key={u.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{
                  minWidth: 300, maxWidth: 300,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 24,
                  overflow: "hidden",
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Image */}
                <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                  {u.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={u.image} alt={u.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  ) : (
                    <div style={{
                      width: "100%", height: "100%",
                      background: `linear-gradient(135deg, ${accent}18 0%, rgba(23,24,75,0.6) 100%)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Activity size={32} color={`${accent}60`} />
                    </div>
                  )}
                  {/* Tag overlay */}
                  <div style={{ position: "absolute", top: 12, left: 12 }}>
                    <span style={{
                      fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
                      padding: "4px 10px", borderRadius: 99,
                      background: `${accent}22`,
                      color: accent,
                      border: `1px solid ${accent}40`,
                      fontFamily: "var(--font-inter)",
                      backdropFilter: "blur(8px)",
                    }}>{u.tag}</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                  <p style={{
                    fontSize: 10, color: "rgba(255,255,255,0.30)",
                    fontFamily: "var(--font-inter)",
                  }}>{formatDate(u.date)}</p>

                  <h3 style={{
                    fontSize: 16, fontWeight: 800, color: "#ffffff",
                    fontFamily: "var(--font-syne)", lineHeight: 1.3,
                  }}>{u.title}</h3>

                  <p style={{
                    fontSize: 12, color: "rgba(255,255,255,0.40)", lineHeight: 1.7,
                    fontFamily: "var(--font-inter)",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}>{u.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a href="/about" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "12px 28px", borderRadius: 99,
            border: "1px solid rgba(216,230,60,0.25)",
            color: "#D8E63C", fontSize: 13, fontWeight: 600,
            fontFamily: "var(--font-syne)", textDecoration: "none",
          }}>
            Learn More About Us <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        @media (max-width: 640px) {
          .activity-card { min-width: calc(80vw) !important; }
        }
      `}</style>
    </section>
  );
}
