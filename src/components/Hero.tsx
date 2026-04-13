"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

interface Star     { x:number; y:number; r:number; o:number }
interface Shooting { x:number; y:number; len:number; speed:number; angle:number; progress:number; opacity:number; tail:number }

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef   = useRef<number>(0);
  const starsRef  = useRef<Star[]>([]);
  const shootRef  = useRef<Shooting[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      starsRef.current = Array.from({ length: 140 }, () => ({
        x: Math.random() * canvas.width * 0.64,
        y: Math.random() * canvas.height,
        r: Math.random() * 0.85 + 0.15,
        o: Math.random() * 0.35 + 0.06,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = () => {
      const W = canvas.width * 0.64, H = canvas.height;
      const top = Math.random() > 0.4;
      shootRef.current.push({
        x: top ? Math.random()*W : 0, y: top ? 0 : Math.random()*H*0.5,
        len: W*(0.09+Math.random()*0.13), speed: W*(0.003+Math.random()*0.0035),
        angle: (Math.PI/180)*(30+Math.random()*28), progress:0, opacity:0,
        tail: W*(0.06+Math.random()*0.09),
      });
    };

    let spawnT=0, lastT=performance.now(), nextSpawn=1000+Math.random()*1600;
    const draw = (now:number) => {
      const dt=now-lastT; lastT=now; spawnT+=dt;
      if(spawnT>=nextSpawn){ spawn(); spawnT=0; nextSpawn=900+Math.random()*1600; }
      ctx.fillStyle="#07080f";
      ctx.fillRect(0,0,canvas.width,canvas.height);
      starsRef.current.forEach(s=>{
        ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(255,255,255,${s.o})`; ctx.fill();
      });
      shootRef.current = shootRef.current.filter(s=>{
        s.progress+=s.speed;
        const full=s.len+s.tail, fi=full*0.15, fo=full*0.75;
        if(s.progress<fi) s.opacity=s.progress/fi;
        else if(s.progress>fo) s.opacity=1-(s.progress-fo)/(full-fo);
        else s.opacity=1;
        s.opacity=Math.max(0,Math.min(1,s.opacity));
        const tx=s.x+Math.cos(s.angle)*s.progress, ty=s.y+Math.sin(s.angle)*s.progress;
        const td=Math.min(s.progress,s.tail), bx=tx-Math.cos(s.angle)*td, by=ty-Math.sin(s.angle)*td;
        const g=ctx.createLinearGradient(bx,by,tx,ty);
        g.addColorStop(0,"rgba(255,255,255,0)");
        g.addColorStop(0.6,`rgba(216,230,60,${s.opacity*0.18})`);
        g.addColorStop(1,`rgba(255,255,255,${s.opacity})`);
        ctx.save(); ctx.beginPath(); ctx.moveTo(bx,by); ctx.lineTo(tx,ty);
        ctx.strokeStyle=g; ctx.lineWidth=1.4; ctx.lineCap="round";
        ctx.shadowBlur=7; ctx.shadowColor="rgba(216,230,60,0.35)"; ctx.stroke();
        const tg=ctx.createRadialGradient(tx,ty,0,tx,ty,3);
        tg.addColorStop(0,`rgba(255,255,255,${s.opacity*0.85})`);
        tg.addColorStop(1,"rgba(255,255,255,0)");
        ctx.beginPath(); ctx.arc(tx,ty,3,0,Math.PI*2); ctx.fillStyle=tg; ctx.fill();
        ctx.restore();
        return s.progress<full;
      });
      animRef.current=requestAnimationFrame(draw);
    };
    animRef.current=requestAnimationFrame(draw);
    return ()=>{ cancelAnimationFrame(animRef.current); window.removeEventListener("resize",resize); };
  },[]);

  return (
    <section className="relative w-full h-screen min-h-[620px] overflow-hidden">

      {/* ── SQUARE GRID ── */}
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{
        backgroundImage:"linear-gradient(rgba(255,255,255,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.045) 1px,transparent 1px)",
        backgroundSize:"52px 52px",
      }} />
      {/* Vignette — keeps grid from clashing with text */}
      <div className="absolute inset-0 pointer-events-none z-[2]" style={{
        background:"radial-gradient(ellipse 80% 65% at 30% 52%, rgba(7,8,15,0.80) 0%, transparent 72%)",
      }} />

      {/* ── SPLIT BACKGROUND ── */}
      <div className="absolute inset-0 flex">

        {/* LEFT — deep dark */}
        <div className="h-full" style={{ width:"64%", background:"#07080f" }} />

        {/* RIGHT — abstract art panel */}
        <div className="hero-right-panel h-full relative overflow-hidden" style={{ width:"36%" }}>
          <div className="absolute inset-0" style={{
            background:"linear-gradient(155deg,#0c0d28 0%,#11123a 40%,#0d0921 100%)",
          }} />
          {/* Lime orb — soft, not harsh */}
          <div className="absolute pointer-events-none" style={{
            top:"-5%", left:"-15%", width:"100%", height:"62%",
            background:"radial-gradient(ellipse 70% 65% at 50% 25%, rgba(216,230,60,0.35) 0%, rgba(170,200,20,0.12) 42%, transparent 68%)",
            filter:"blur(10px)",
          }} />
          <div className="absolute pointer-events-none" style={{
            top:"2%", left:"10%", width:"70%", height:"40%",
            background:"radial-gradient(ellipse 55% 50% at 48% 28%, rgba(230,255,130,0.22) 0%, rgba(216,230,60,0.08) 52%, transparent 72%)",
            filter:"blur(5px)",
          }} />
          {/* Violet bloom — lower */}
          <div className="absolute pointer-events-none" style={{
            bottom:"-5%", right:"-10%", width:"95%", height:"58%",
            background:"radial-gradient(ellipse 75% 65% at 58% 82%, rgba(180,120,255,0.28) 0%, rgba(110,50,190,0.10) 48%, transparent 72%)",
            filter:"blur(12px)",
          }} />
          {/* Centre vignette */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background:"radial-gradient(ellipse 75% 55% at 50% 50%, rgba(4,5,16,0.78) 0%, transparent 72%)",
          }} />
          {/* Subtle grid */}
          <div className="absolute inset-0 pointer-events-none" style={{
            opacity:0.03,
            backgroundImage:"linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize:"48px 48px",
          }} />
          {/* Left blend */}
          <div className="absolute inset-y-0 left-0 pointer-events-none" style={{
            width:"90px",
            background:"linear-gradient(to right,#07080f,transparent)",
          }} />
        </div>
      </div>

      {/* Stars canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-[3]" />

      {/* ── GIANT HEADLINE ── */}
      <div className="hero-headline absolute inset-0 z-[10] flex flex-col justify-center pointer-events-none select-none"
        style={{ gap:"clamp(2px,0.4vw,8px)" }}>

        {/* Line 1 — YOUR VISION */}
        <motion.div
          initial={{ opacity:0, y:80 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1.0, ease:[0.16,1,0.3,1], delay:0.1 }}
          style={{ overflow:"hidden" }}>
          <div className="hero-line" style={{
            fontFamily:"var(--font-syne)",
            fontWeight:900,
            fontSize:"clamp(36px, 7vw, 104px)",
            lineHeight:0.88,
            letterSpacing:"-0.02em",
            paddingLeft:"clamp(20px,3.5vw,56px)",
            color:"#ffffff",
            whiteSpace:"nowrap",
          }}>
            YOUR VISION
          </div>
        </motion.div>

        {/* Line 2 — OUR PRIORITY */}
        <motion.div
          initial={{ opacity:0, y:80 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1.0, ease:[0.16,1,0.3,1], delay:0.2 }}
          style={{ overflow:"hidden" }}>
          <div className="hero-line" style={{
            fontFamily:"var(--font-syne)",
            fontWeight:900,
            fontSize:"clamp(36px, 7vw, 104px)",
            lineHeight:0.88,
            letterSpacing:"-0.02em",
            paddingLeft:"clamp(20px,3.5vw,56px)",
            whiteSpace:"nowrap",
            color:"#ffffff",
          }}>
            OUR PRIORITY
          </div>
        </motion.div>
      </div>

      {/* ── BOTTOM CONTENT ── */}
      <div className="hero-bottom absolute bottom-0 left-0 z-20 w-full md:w-[60%]"
        style={{ padding:"0 clamp(20px,3.5vw,56px) clamp(28px,3.5vw,52px)" }}>

        {/* Description */}
        <motion.p
          initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.7, delay:0.48 }}
          className="hero-desc text-white/40 text-sm md:text-[15px] leading-relaxed mb-7 max-w-sm"
          style={{ fontFamily:"var(--font-inter)" }}>
          We transform your ideas into AI-powered products and marketing engines that scale — for startups and enterprises worldwide.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6, delay:0.6 }}
          className="hero-cta flex flex-wrap items-center gap-3 mb-8">
          <a href="#contact"
            className="group flex items-center gap-2 px-6 py-3 rounded-full text-[#17184B] font-bold text-sm hover:opacity-90 transition-all"
            style={{ background:"linear-gradient(135deg,#D8E63C,#c8d430)", fontFamily:"var(--font-syne)", boxShadow:"0 8px 28px rgba(216,230,60,0.22)" }}>
            Start Your Project
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a href="#work"
            className="flex items-center gap-1.5 px-6 py-3 rounded-full border text-sm text-white/45 hover:text-white/75 hover:border-white/25 transition-all"
            style={{ borderColor:"rgba(255,255,255,0.12)", fontFamily:"var(--font-inter)" }}>
            View Our Work
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:0.8, delay:0.75 }}
          className="hero-stats flex items-center divide-x divide-white/[0.08]">
          {[
            { n:"50+", l:"Projects" },
            { n:"3×",  l:"Avg Growth" },
            { n:"98%", l:"Retention" },
            { n:"24h", l:"Response" },
          ].map(s => (
            <div key={s.l} className="px-4 first:pl-0">
              <div className="text-base md:text-lg font-bold text-white" style={{ fontFamily:"var(--font-syne)" }}>{s.n}</div>
              <div className="text-[10px] text-white/30 tracking-wide" style={{ fontFamily:"var(--font-inter)" }}>{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          /* Center the two headline lines on mobile */
          .hero-headline {
            justify-content: center !important;
            padding-bottom: 200px;
          }
          .hero-line {
            padding-left: 0 !important;
            text-align: center !important;
            font-size: clamp(34px, 10.5vw, 56px) !important;
            white-space: normal !important;
            word-break: keep-all !important;
          }

          /* Bottom content — center on mobile */
          .hero-bottom {
            width: 100% !important;
            text-align: center;
            padding: 0 20px 32px !important;
          }
          .hero-desc {
            margin-left: auto !important;
            margin-right: auto !important;
            text-align: center;
          }
          .hero-cta {
            justify-content: center !important;
          }
          .hero-stats {
            justify-content: center !important;
          }

          /* Hide right decorative panel on mobile */
          .hero-right-panel { display: none !important; }
        }
      `}</style>

    </section>
  );
}
