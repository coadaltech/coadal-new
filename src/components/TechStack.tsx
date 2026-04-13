"use client";
import { motion } from "framer-motion";

const categories = [
  {
    label: "Frontend",
    color: "#D8E63C",
    items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    label: "Backend",
    color: "#D6B4FC",
    items: ["Node.js", "Python", "FastAPI", "GraphQL", "REST APIs", "PostgreSQL"],
  },
  {
    label: "AI & ML",
    color: "#D8E63C",
    items: ["OpenAI GPT-4o", "Claude API", "LangChain", "Pinecone", "HuggingFace", "Whisper"],
  },
  {
    label: "Mobile",
    color: "#D3DDE7",
    items: ["React Native", "Flutter", "Expo", "Swift", "Kotlin", "Firebase"],
  },
  {
    label: "Cloud & DevOps",
    color: "#D6B4FC",
    items: ["AWS", "Google Cloud", "Vercel", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    label: "Marketing Tech",
    color: "#D8E63C",
    items: ["Google Ads", "Meta Ads", "HubSpot", "Klaviyo", "GA4", "Mixpanel"],
  },
];

export default function TechStack() {
  return (
    <section className="py-24 overflow-hidden" style={{ background: "#0a0b22" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="mb-4" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(216,230,60,0.5)", fontFamily: "var(--font-inter)" }}>
              Our Stack
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Technologies We<br />
              <span className="font-serif-display italic font-light" style={{
                background: "linear-gradient(135deg, #D8E63C, #D6B4FC)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Master Daily</span>
            </h2>
          </div>
          <p className="text-white/30 text-sm max-w-xs leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
            Best-in-class tools, proven in production across 50+ projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-3xl overflow-hidden border border-white/[0.06]">
          {categories.map((cat, i) => (
            <motion.div key={cat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#0a0b22] p-7 hover:bg-white/[0.03] transition-colors duration-300">

              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: cat.color }} />
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase"
                  style={{ color: cat.color, fontFamily: "var(--font-inter)", opacity: 0.9 }}>{cat.label}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <motion.span key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 + j * 0.04 }}
                    className="text-xs px-3 py-1.5 rounded-full border transition-all duration-200 cursor-default hover:border-white/20"
                    style={{
                      borderColor: "rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.5)",
                      background: "rgba(255,255,255,0.03)",
                      fontFamily: "var(--font-inter)",
                    }}>
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
