"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ImageIcon } from "lucide-react";

interface Creative {
  id: string;
  brand: string;
  type: string;
  platform: string;
  accent: string;
  imageSrc: string;
}

export default function PortfolioCreatives() {
  const [creatives, setCreatives] = useState<Creative[]>([]);

  useEffect(() => {
    fetch("/api/portfolio?type=creatives")
      .then(r => r.json()).then(d => { if (Array.isArray(d)) setCreatives(d); }).catch(() => {});
  }, []);

  if (creatives.length === 0) return null;

  const BG_FALLBACKS: Record<string, string> = {
    "#D8E63C": "linear-gradient(145deg,#0a1800 0%,#1a3a00 60%,#0d1030 100%)",
    "#D6B4FC": "linear-gradient(145deg,#0d0921 0%,#2d1060 60%,#1a0f35 100%)",
  };

  return (
    <section style={{ background:"#07080f", paddingTop:80, paddingBottom:80 }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="mb-14">
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                <div style={{ width:36, height:36, borderRadius:10, background:"rgba(214,180,252,0.12)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <ImageIcon size={16} color="#D6B4FC" />
                </div>
                <span style={{ fontSize:11, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#D6B4FC", fontFamily:"var(--font-inter)" }}>Social Media Creatives</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3" style={{ fontFamily:"var(--font-syne)" }}>
                Scroll-Stopping{" "}
                <span style={{ background:"linear-gradient(135deg,#D6B4FC,#D8E63C)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Ad Creatives</span>
              </h2>
              <p className="text-white/35 text-sm max-w-lg" style={{ fontFamily:"var(--font-inter)" }}>
                High-converting social media posts, stories, and ad creatives designed for engagement and brand recall.
              </p>
            </div>
            <a href="/start-a-project" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"11px 22px", borderRadius:99, border:"1px solid rgba(214,180,252,0.25)", color:"#D6B4FC", fontSize:12, fontWeight:600, fontFamily:"var(--font-syne)", textDecoration:"none", whiteSpace:"nowrap" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(214,180,252,0.5)"; e.currentTarget.style.background="rgba(214,180,252,0.06)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(214,180,252,0.25)"; e.currentTarget.style.background="transparent"; }}>
              Get Creatives <ArrowUpRight size={13} />
            </a>
          </div>
        </motion.div>

        <div className="creatives-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
          {creatives.map((c,i) => {
            const bg = BG_FALLBACKS[c.accent] ?? "linear-gradient(145deg,#17184B 0%,#1e1f6e 60%,#0d0e2e 100%)";
            return (
              <motion.div key={c.id} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.07 }} whileHover={{ y:-4 }}
                style={{ borderRadius:20, overflow:"hidden", border:"1px solid rgba(255,255,255,0.08)", boxShadow:"0 8px 32px rgba(0,0,0,0.35)", background:"#111120", display:"flex", flexDirection:"column" }}>
                <div style={{ width:"100%", aspectRatio:"1/1", position:"relative", background:c.imageSrc?"transparent":bg, overflow:"hidden" }}>
                  {c.imageSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={c.imageSrc} alt={c.brand} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                  ) : (
                    <>
                      <div style={{ position:"absolute", inset:0, backgroundImage:`linear-gradient(${c.accent}10 1px,transparent 1px),linear-gradient(90deg,${c.accent}10 1px,transparent 1px)`, backgroundSize:"28px 28px" }} />
                      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:120, height:120, borderRadius:"50%", background:`radial-gradient(circle,${c.accent}25 0%,transparent 70%)`, filter:"blur(24px)" }} />
                      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
                        <div style={{ width:44, height:44, borderRadius:12, border:`1.5px dashed ${c.accent}50`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                          <ImageIcon size={18} color={`${c.accent}80`} />
                        </div>
                        <span style={{ fontSize:9, color:`${c.accent}60`, fontFamily:"var(--font-inter)", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase" }}>Post coming soon</span>
                      </div>
                    </>
                  )}
                </div>
                <div style={{ padding:"14px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", background:"#111120" }}>
                  <div>
                    <div style={{ fontSize:13, fontWeight:700, color:"#ffffff", fontFamily:"var(--font-syne)", lineHeight:1.2 }}>{c.brand}</div>
                    <div style={{ fontSize:10, color:"rgba(255,255,255,0.28)", fontFamily:"var(--font-inter)", marginTop:2 }}>{c.type} · {c.platform}</div>
                  </div>
                  <span style={{ fontSize:9, fontWeight:700, padding:"4px 10px", borderRadius:99, background:`${c.accent}15`, color:c.accent, border:`1px solid ${c.accent}30`, fontFamily:"var(--font-inter)", letterSpacing:"0.08em", textTransform:"uppercase", flexShrink:0 }}>{c.platform}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.3 }}
          style={{ marginTop:40, display:"flex", alignItems:"center", justifyContent:"center", gap:8, flexWrap:"wrap" }}>
          <span style={{ fontSize:11, color:"rgba(255,255,255,0.20)", fontFamily:"var(--font-inter)" }}>Creatives for:</span>
          {["Instagram","Facebook","LinkedIn","Twitter / X","YouTube Thumbnails","Google Display"].map(p => (
            <span key={p} style={{ fontSize:11, padding:"5px 14px", borderRadius:99, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", color:"rgba(255,255,255,0.30)", fontFamily:"var(--font-inter)" }}>{p}</span>
          ))}
        </motion.div>
      </div>
      <style>{`@media(max-width:768px){.creatives-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:480px){.creatives-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
