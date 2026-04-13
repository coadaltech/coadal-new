"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const CARD_W = 180;
const CARD_H = 320;
const RADIUS = 330;
const SPEED  = 0.13;

interface Reel {
  id: string;
  title: string;
  category: string;
  metric: string;
  metricLabel: string;
  accent: string;
  bg: string;
  videoSrc: string;
}

export default function Portfolio() {
  const [reels, setReels] = useState<Reel[]>([]);
  const ringRef   = useRef<HTMLDivElement>(null);
  const cardRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const rafRef    = useRef<number>(0);
  const angleRef  = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    fetch("/api/portfolio?type=reels")
      .then(r => r.json())
      .then(d => { if (Array.isArray(d)) setReels(d); })
      .catch(() => {});
  }, []);

  const N      = reels.length || 7;
  const A_STEP = 360 / N;

  const startAllVideos = () => {
    videoRefs.current.forEach(vid => {
      if (vid && vid.paused) vid.play().catch(() => {});
    });
  };

  useEffect(() => {
    if (reels.length === 0) return;
    startAllVideos();

    const tick = () => {
      if (!pausedRef.current) angleRef.current -= SPEED;
      if (ringRef.current) ringRef.current.style.transform = `rotateY(${angleRef.current}deg)`;

      for (let i = 0; i < reels.length; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;
        const raw = ((i * A_STEP + angleRef.current) % 360 + 360) % 360;
        const a   = raw > 180 ? raw - 360 : raw;
        const cos = Math.cos(a * Math.PI / 180);
        el.style.opacity   = String(Math.max(0, cos));
        el.style.transform = `scale(${0.84 + 0.16 * Math.max(0, cos)})`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reels]);

  const step = (dir: 1 | -1) => { angleRef.current += dir * A_STEP; };

  if (reels.length === 0) return null;

  return (
    <section id="portfolio" className="overflow-hidden" style={{ background:"#07080f", paddingTop:"80px", paddingBottom:"80px" }}>

      <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="text-center mb-16 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.10] bg-white/[0.04] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D8E63C] animate-pulse" />
          <span className="text-[11px] text-white/50 tracking-[0.18em] uppercase font-medium" style={{ fontFamily:"var(--font-inter)" }}>Our Work</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight" style={{ fontFamily:"var(--font-syne)" }}>
          Work That{" "}
          <span className="font-serif-display italic font-light" style={{ background:"linear-gradient(135deg,#D8E63C,#D6B4FC)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Moves Needles</span>
        </h2>
        <p className="text-white/30 text-sm max-w-xs mx-auto" style={{ fontFamily:"var(--font-inter)" }}>
          Rotate the ring · hover to pause · click to play
        </p>
      </motion.div>

      <div className="relative select-none ring-container" style={{ height:460, perspective:"1400px", perspectiveOrigin:"50% 50%" }}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}>

        <div className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none" style={{ width:200, background:"linear-gradient(to right,#07080f 30%,transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none" style={{ width:200, background:"linear-gradient(to left,#07080f 30%,transparent)" }} />

        <div style={{ position:"absolute", left:"50%", top:"50%", transform:"translate(-50%,-50%)", transformStyle:"preserve-3d" }}>
          <div ref={ringRef} style={{ transformStyle:"preserve-3d", willChange:"transform" }}>
            {reels.map((r, i) => (
              <div key={r.id} style={{ position:"absolute", transform:`rotateY(${i * A_STEP}deg) translateZ(${RADIUS}px)`, transformStyle:"preserve-3d" }}>
                <div ref={el => { cardRefs.current[i] = el; }}
                  style={{ width:CARD_W, height:CARD_H, marginLeft:-CARD_W/2, marginTop:-CARD_H/2, borderRadius:22, overflow:"hidden", background:r.bg, cursor:"pointer", willChange:"transform, opacity", transition:"opacity 0.05s linear", boxShadow:"0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)" }}>

                  {r.videoSrc && (
                    <video ref={el => { videoRefs.current[i] = el; }} src={r.videoSrc}
                      className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline />
                  )}

                  {!r.videoSrc && (
                    <div className="absolute inset-0">
                      <div className="absolute inset-0" style={{ backgroundImage:`linear-gradient(${r.accent}12 1px,transparent 1px),linear-gradient(90deg,${r.accent}12 1px,transparent 1px)`, backgroundSize:"22px 22px" }} />
                      <div className="absolute" style={{ top:"20%", left:"50%", transform:"translateX(-50%)", width:100, height:100, borderRadius:"50%", background:`radial-gradient(circle,${r.accent}40 0%,transparent 70%)`, filter:"blur(18px)" }} />
                      <div className="absolute bottom-0 left-0 right-0 h-28" style={{ background:`radial-gradient(ellipse 80% 60% at 50% 100%,${r.accent}22 0%,transparent 70%)`, filter:"blur(8px)" }} />
                    </div>
                  )}

                  <div className="absolute inset-0" style={{ background:"linear-gradient(to bottom,rgba(0,0,0,0.10) 0%,transparent 28%,transparent 50%,rgba(0,0,0,0.88) 100%)" }} />

                  <div className="absolute top-3.5 left-3.5">
                    <span style={{ fontFamily:"var(--font-inter)", fontSize:9, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", padding:"4px 10px", borderRadius:99, background:`${r.accent}20`, color:r.accent, border:`1px solid ${r.accent}35` }}>{r.category}</span>
                  </div>

                  {r.videoSrc ? (
                    <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-2 py-1 rounded-full" style={{ background:"rgba(0,0,0,0.45)", backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.12)" }}>
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background:r.accent }} />
                      <span style={{ fontSize:9, fontFamily:"var(--font-inter)", color:"rgba(255,255,255,0.70)", fontWeight:700, letterSpacing:"0.1em" }}>LIVE</span>
                    </div>
                  ) : (
                    <div className="absolute top-3.5 right-3.5">
                      <div style={{ width:28, height:28, borderRadius:"50%", background:"rgba(255,255,255,0.10)", backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.18)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <ArrowUpRight size={13} color="white" />
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div style={{ fontSize:22, fontWeight:900, fontFamily:"var(--font-syne)", color:r.accent, lineHeight:1, marginBottom:2 }}>{r.metric}</div>
                    <div style={{ fontSize:9, fontFamily:"var(--font-inter)", color:"rgba(255,255,255,0.40)", marginBottom:8, letterSpacing:"0.08em", textTransform:"uppercase" }}>{r.metricLabel}</div>
                    <div style={{ fontSize:13, fontWeight:700, fontFamily:"var(--font-syne)", color:"#ffffff", lineHeight:1.2 }}>{r.title}</div>
                  </div>

                  <div className="absolute inset-0 rounded-[22px] pointer-events-none" style={{ boxShadow:`inset 0 0 0 1px ${r.accent}25` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => step(1)} className="absolute left-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all hover:scale-110"
          style={{ width:42, height:42, borderRadius:"50%", background:"rgba(255,255,255,0.07)", backdropFilter:"blur(12px)", border:"1px solid rgba(255,255,255,0.12)" }}>
          <ChevronLeft size={18} color="white" />
        </button>
        <button onClick={() => step(-1)} className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all hover:scale-110"
          style={{ width:42, height:42, borderRadius:"50%", background:"rgba(255,255,255,0.07)", backdropFilter:"blur(12px)", border:"1px solid rgba(255,255,255,0.12)" }}>
          <ChevronRight size={18} color="white" />
        </button>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
          {reels.map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background:"rgba(255,255,255,0.25)" }} />)}
        </div>
      </div>

      <style>{`@media(max-width:640px){.ring-container{height:320px!important;}}`}</style>

      <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.2 }} className="text-center mt-14 px-6">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="/portfolio" className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-[#17184B] hover:opacity-90 transition-all"
            style={{ background:"linear-gradient(135deg,#D8E63C,#c8d430)", fontFamily:"var(--font-syne)", boxShadow:"0 8px 24px rgba(216,230,60,0.25)" }}>
            View All Projects <ArrowUpRight size={14} />
          </a>
          <a href="/start-a-project" className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white/60 hover:text-white transition-all border"
            style={{ borderColor:"rgba(255,255,255,0.12)", fontFamily:"var(--font-syne)" }}>
            Start Your Project
          </a>
        </div>
      </motion.div>
    </section>
  );
}
