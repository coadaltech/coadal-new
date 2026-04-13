"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Smartphone } from "lucide-react";

interface App {
  id: string;
  title: string;
  category: string;
  desc: string;
  platform: string;
  metric: string;
  metricLabel: string;
  tech: string[];
  accent: string;
  imageSrc: string;
}

const fadeUp = { hidden:{ opacity:0, y:32 }, show:{ opacity:1, y:0, transition:{ duration:0.6 } } };

function PhoneMockup({ app }: { app: App }) {
  return (
    <div style={{ width:180, height:340, borderRadius:32, background:"#0a0a14", border:"8px solid #1e1e2e", boxShadow:"0 40px 80px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.06)", position:"relative", overflow:"hidden", flexShrink:0 }}>
      <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:56, height:14, borderRadius:"0 0 14px 14px", background:"#0a0a14", zIndex:3 }} />
      {app.imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={app.imageSrc} alt={app.title} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
      ) : (
        <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:10, background:"linear-gradient(160deg,#111120 0%,#1a1a2e 100%)" }}>
          <div style={{ position:"absolute", inset:0, backgroundImage:`linear-gradient(${app.accent}10 1px,transparent 1px),linear-gradient(90deg,${app.accent}10 1px,transparent 1px)`, backgroundSize:"18px 18px" }} />
          <div style={{ position:"relative", zIndex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
            <div style={{ width:44, height:44, borderRadius:14, border:`1.5px dashed ${app.accent}45`, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <Smartphone size={20} color={`${app.accent}70`} />
            </div>
            <span style={{ fontSize:8, color:`${app.accent}55`, fontFamily:"var(--font-inter)", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", textAlign:"center", lineHeight:1.4, maxWidth:100 }}>Screenshot{"\n"}coming soon</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PortfolioApps() {
  const [apps, setApps] = useState<App[]>([]);

  useEffect(() => {
    fetch("/api/portfolio?type=apps")
      .then(r => r.json()).then(d => { if (Array.isArray(d)) setApps(d); }).catch(() => {});
  }, []);

  if (apps.length === 0) return null;

  return (
    <section style={{ background:"#07080f", paddingTop:80, paddingBottom:80 }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width:36, height:36, borderRadius:10, background:"rgba(214,180,252,0.12)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <Smartphone size={16} color="#D6B4FC" />
            </div>
            <span style={{ fontSize:11, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#D6B4FC", fontFamily:"var(--font-inter)" }}>Mobile Apps</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3" style={{ fontFamily:"var(--font-syne)" }}>
            Apps Built to{" "}
            <span style={{ background:"linear-gradient(135deg,#D6B4FC,#D8E63C)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Scale & Delight</span>
          </h2>
          <p className="text-white/35 text-sm max-w-lg" style={{ fontFamily:"var(--font-inter)" }}>
            Cross-platform mobile experiences with native-level performance — from FinTech to Logistics.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once:true }} variants={{ show:{ transition:{ staggerChildren:0.1 } } }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {apps.map(app => (
            <motion.div key={app.id} variants={fadeUp} className="app-card"
              style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:24, padding:"24px", display:"flex", gap:24, alignItems:"center", cursor:"pointer", transition:"border-color 0.25s ease, background 0.25s ease" }}
              whileHover={{ borderColor:`${app.accent}40`, backgroundColor:"rgba(255,255,255,0.05)" }}>
              <PhoneMockup app={app} />
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
                  <span style={{ fontSize:9, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", padding:"3px 10px", borderRadius:99, background:`${app.accent}18`, color:app.accent, border:`1px solid ${app.accent}30`, fontFamily:"var(--font-inter)" }}>{app.category}</span>
                  <span style={{ fontSize:9, color:"rgba(255,255,255,0.25)", fontFamily:"var(--font-inter)" }}>{app.platform}</span>
                </div>
                <h3 style={{ fontSize:20, fontWeight:800, color:"#ffffff", fontFamily:"var(--font-syne)", marginBottom:8, lineHeight:1.2 }}>{app.title}</h3>
                <p style={{ fontSize:12, color:"rgba(255,255,255,0.38)", lineHeight:1.7, fontFamily:"var(--font-inter)", marginBottom:14 }}>{app.desc}</p>
                <div style={{ display:"inline-flex", alignItems:"baseline", gap:6, padding:"6px 14px", borderRadius:10, background:`${app.accent}12`, border:`1px solid ${app.accent}25`, marginBottom:16 }}>
                  <span style={{ fontSize:18, fontWeight:900, color:app.accent, fontFamily:"var(--font-syne)" }}>{app.metric}</span>
                  <span style={{ fontSize:10, color:"rgba(255,255,255,0.35)", fontFamily:"var(--font-inter)" }}>{app.metricLabel}</span>
                </div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                  {(app.tech||[]).map(t => (
                    <span key={t} style={{ fontSize:10, padding:"3px 10px", borderRadius:99, background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", color:"rgba(255,255,255,0.35)", fontFamily:"var(--font-inter)" }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.3 }} className="text-center mt-12">
          <a href="/start-a-project" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"12px 28px", borderRadius:99, border:"1px solid rgba(214,180,252,0.25)", color:"#D6B4FC", fontSize:13, fontWeight:600, fontFamily:"var(--font-syne)", textDecoration:"none" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(214,180,252,0.5)"; e.currentTarget.style.background="rgba(214,180,252,0.06)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(214,180,252,0.25)"; e.currentTarget.style.background="transparent"; }}>
            Build Your App <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
      <style>{`@media(max-width:640px){.app-card{flex-direction:column!important;align-items:center!important;}}`}</style>
    </section>
  );
}
