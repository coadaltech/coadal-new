"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Monitor, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

interface Site {
  id: string;
  title: string;
  category: string;
  url: string;
  desc: string;
  metric: string;
  metricLabel: string;
  tech: string[];
  accent: string;
  imageSrc: string;
}

function BrowserMockup({ site }: { site: Site }) {
  return (
    <div style={{ width:"100%", borderRadius:14, overflow:"hidden", border:"1px solid rgba(0,0,0,0.09)", boxShadow:"0 8px 24px rgba(0,0,0,0.08)", background:"#f5f5f5" }}>
      <div style={{ background:"#ececec", padding:"8px 12px", display:"flex", alignItems:"center", gap:8, borderBottom:"1px solid rgba(0,0,0,0.08)" }}>
        <div style={{ display:"flex", gap:4 }}>
          {["#ff5f57","#febc2e","#28c840"].map((c,i) => (
            <div key={i} style={{ width:8, height:8, borderRadius:"50%", background:c, opacity:0.85 }} />
          ))}
        </div>
        <div style={{ flex:1, background:"#ffffff", borderRadius:5, padding:"3px 9px", display:"flex", alignItems:"center", gap:4, border:"1px solid rgba(0,0,0,0.09)" }}>
          <div style={{ width:5, height:5, borderRadius:"50%", background:"#28c840", opacity:0.7 }} />
          <span style={{ fontSize:10, color:"rgba(0,0,0,0.35)", fontFamily:"var(--font-inter)" }}>{site.url}</span>
        </div>
      </div>
      <div style={{ width:"100%", aspectRatio:"16/9", position:"relative", overflow:"hidden" }}>
        {site.imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={site.imageSrc} alt={site.title} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
        ) : (
          <div style={{ position:"absolute", inset:0, background:"#fafafa", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:8 }}>
            <div style={{ position:"absolute", inset:0, backgroundImage:`linear-gradient(rgba(0,0,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.04) 1px,transparent 1px)`, backgroundSize:"24px 24px" }} />
            <div style={{ position:"relative", zIndex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
              <div style={{ width:36, height:36, borderRadius:10, border:"1.5px dashed rgba(0,0,0,0.18)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <ImageIcon size={16} color="rgba(0,0,0,0.25)" />
              </div>
              <span style={{ fontSize:9, color:"rgba(0,0,0,0.25)", fontFamily:"var(--font-inter)", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase" }}>Screenshot coming soon</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PortfolioWebsites() {
  const [sites, setSites] = useState<Site[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/portfolio?type=websites")
      .then(r => r.json()).then(d => { if (Array.isArray(d)) setSites(d); }).catch(() => {});
  }, []);

  const scroll = (dir: 1|-1) => { scrollRef.current?.scrollBy({ left:dir*420, behavior:"smooth" }); };

  if (sites.length === 0) return null;

  return (
    <section style={{ background:"#F0EEE9", paddingTop:80, paddingBottom:80 }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="mb-12">
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                <div style={{ width:36, height:36, borderRadius:10, background:"rgba(23,24,75,0.08)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <Monitor size={16} color="#17184B" />
                </div>
                <span style={{ fontSize:11, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#17184B", opacity:0.5, fontFamily:"var(--font-inter)" }}>Websites & Web Apps</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ color:"#0d0d0d", fontFamily:"var(--font-syne)" }}>
                Digital Experiences That <span className="gradient-text-dark">Convert</span>
              </h2>
              <p style={{ fontSize:14, color:"rgba(13,13,13,0.45)", marginTop:10, fontFamily:"var(--font-inter)", maxWidth:500 }}>
                From marketing sites to full-stack SaaS platforms — every pixel built for performance and conversion.
              </p>
            </div>
            <div style={{ display:"flex", gap:8 }}>
              <button onClick={() => scroll(-1)} style={{ width:40, height:40, borderRadius:"50%", background:"#ffffff", border:"1px solid rgba(0,0,0,0.10)", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", boxShadow:"0 2px 8px rgba(0,0,0,0.08)" }}><ChevronLeft size={16} color="#17184B" /></button>
              <button onClick={() => scroll(1)} style={{ width:40, height:40, borderRadius:"50%", background:"#17184B", border:"none", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", boxShadow:"0 4px 14px rgba(23,24,75,0.25)" }}><ChevronRight size={16} color="#ffffff" /></button>
            </div>
          </div>
        </motion.div>

        <div ref={scrollRef} style={{ display:"flex", gap:20, overflowX:"auto", paddingBottom:8, scrollbarWidth:"none", msOverflowStyle:"none" }} className="hide-scrollbar">
          {sites.map((site,i) => (
            <motion.div key={site.id} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.07 }}
              className="website-card" style={{ minWidth:300, background:"#ffffff", borderRadius:24, padding:20, border:"1px solid rgba(0,0,0,0.07)", boxShadow:"0 4px 20px rgba(0,0,0,0.06)", cursor:"pointer", flexShrink:0 }}
              whileHover={{ y:-4, boxShadow:"0 12px 40px rgba(0,0,0,0.12)" }}>
              <BrowserMockup site={site} />
              <div style={{ marginTop:16 }}>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:8 }}>
                  <span style={{ fontSize:9, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", padding:"3px 10px", borderRadius:99, background:`${site.accent}18`, color:site.accent==="#D8E63C"?"#17184B":site.accent, border:`1px solid ${site.accent}35`, fontFamily:"var(--font-inter)" }}>{site.category}</span>
                  <ArrowUpRight size={14} color="rgba(13,13,13,0.25)" />
                </div>
                <h3 style={{ fontSize:18, fontWeight:800, color:"#0d0d0d", fontFamily:"var(--font-syne)", marginBottom:6, lineHeight:1.2 }}>{site.title}</h3>
                <p style={{ fontSize:12, color:"rgba(13,13,13,0.45)", lineHeight:1.7, fontFamily:"var(--font-inter)", marginBottom:14 }}>{site.desc}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                  {(site.tech||[]).map(t => (
                    <span key={t} style={{ fontSize:10, padding:"3px 10px", borderRadius:99, background:"#F0EEE9", border:"1px solid rgba(0,0,0,0.07)", color:"rgba(13,13,13,0.45)", fontFamily:"var(--font-inter)" }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.2 }} className="text-center mt-14">
          <a href="/start-a-project" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 32px", borderRadius:99, background:"linear-gradient(135deg,#D8E63C,#c8d430)", color:"#17184B", fontSize:13, fontWeight:700, fontFamily:"var(--font-syne)", textDecoration:"none", boxShadow:"0 8px 24px rgba(216,230,60,0.30)" }}>
            Start Your Project <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
      <style>{`.hide-scrollbar::-webkit-scrollbar{display:none;}@media(max-width:640px){.website-card{min-width:calc(85vw)!important;}}`}</style>
    </section>
  );
}
