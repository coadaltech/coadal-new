"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface FStar { x:number; y:number; r:number; o:number; blink:number; phase:number }
interface FShoot { x:number; y:number; len:number; speed:number; angle:number; progress:number; opacity:number; tail:number }

const cols: Record<string, { label: string; href: string }[]> = {
  "Services":  [
    { label:"Web Development",       href:"/services/web-development" },
    { label:"Mobile Apps",           href:"/services/mobile-apps" },
    { label:"AI Development",        href:"/services/ai-development" },
    { label:"Performance Marketing", href:"/services/performance-marketing" },
    { label:"SEO & Content",         href:"/services/seo-content" },
    { label:"Brand Identity",        href:"/services/brand-identity" },
    { label:"Salesforce CRM",        href:"/services/salesforce" },
  ],
  "Solutions": [
    { label:"Startup Package",  href:"/startup-package" },
    { label:"Enterprise Plan",  href:"/enterprise-plan" },
    { label:"AI Automation",    href:"/ai-automation" },
    { label:"Growth Retainer",  href:"/growth-retainer" },
    { label:"Custom Projects",  href:"/custom-projects" },
  ],
  "Company":   [
    { label:"About Us",   href:"/about" },
    { label:"Our Work",   href:"/portfolio" },
    { label:"Insights",   href:"/insights" },
    { label:"Contact",    href:"/contact" },
    { label:"Careers",    href:"/careers" },
  ],
  "Legal":     [
    { label:"Privacy Policy",    href:"/privacy-policy" },
    { label:"Terms of Service",  href:"/terms-of-service" },
    { label:"Cookie Policy",     href:"/cookie-policy" },
    { label:"Security",          href:"/security" },
  ],
};

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef   = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const stars: FStar[] = Array.from({ length: 220 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.1 + 0.2, o: Math.random() * 0.4 + 0.08,
      blink: Math.random() * 0.28 + 0.04, phase: Math.random() * Math.PI * 2,
    }));

    const shoots: FShoot[] = [];
    let nextShoot = 800;
    let lastT = performance.now();

    const spawn = () => {
      const W = canvas.width, H = canvas.height;
      const fromTop = Math.random() > 0.35;
      shoots.push({
        x: fromTop ? Math.random()*W : 0,
        y: fromTop ? 0 : Math.random()*H*0.55,
        len: W*(0.1+Math.random()*0.14), speed: W*(0.003+Math.random()*0.0028),
        angle: (Math.PI/180)*(28+Math.random()*32),
        progress:0, opacity:0, tail: W*(0.06+Math.random()*0.09),
      });
    };

    const draw = (now: number) => {
      const dt = now - lastT; lastT = now;
      nextShoot -= dt;
      if (nextShoot <= 0) { spawn(); nextShoot = 900 + Math.random() * 1900; }

      ctx.fillStyle = "#080918";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const t = now / 1000;

      /* Blinking stars — lime-tinted white */
      stars.forEach(s => {
        const alpha = Math.max(0, s.o + s.blink * Math.sin(t * 1.4 + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(225,240,200,${alpha})`;
        ctx.fill();
      });

      /* Shooting stars — lime to white trail */
      for (let i = shoots.length-1; i >= 0; i--) {
        const s = shoots[i];
        s.progress += s.speed;
        const full = s.len+s.tail, fi=full*0.15, fo=full*0.75;
        if (s.progress<fi) s.opacity=s.progress/fi;
        else if (s.progress>fo) s.opacity=1-(s.progress-fo)/(full-fo);
        else s.opacity=1;
        s.opacity=Math.max(0,Math.min(1,s.opacity));

        const tx=s.x+Math.cos(s.angle)*s.progress, ty=s.y+Math.sin(s.angle)*s.progress;
        const td=Math.min(s.progress,s.tail);
        const bx=tx-Math.cos(s.angle)*td, by=ty-Math.sin(s.angle)*td;

        const g = ctx.createLinearGradient(bx,by,tx,ty);
        g.addColorStop(0,`rgba(216,230,60,0)`);
        g.addColorStop(0.55,`rgba(216,230,60,${s.opacity*0.30})`);
        g.addColorStop(1,`rgba(255,255,255,${s.opacity})`);

        ctx.save();
        ctx.beginPath(); ctx.moveTo(bx,by); ctx.lineTo(tx,ty);
        ctx.strokeStyle=g; ctx.lineWidth=1.6; ctx.lineCap="round";
        ctx.shadowBlur=8; ctx.shadowColor=`rgba(216,230,60,0.50)`;
        ctx.stroke();

        const tg=ctx.createRadialGradient(tx,ty,0,tx,ty,4);
        tg.addColorStop(0,`rgba(255,255,255,${s.opacity*0.90})`);
        tg.addColorStop(1,"rgba(216,230,60,0)");
        ctx.beginPath(); ctx.arc(tx,ty,4,0,Math.PI*2);
        ctx.fillStyle=tg; ctx.fill();
        ctx.restore();

        if (s.progress>=full) shoots.splice(i,1);
      }
      animRef.current = requestAnimationFrame(draw);
    };
    animRef.current = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener("resize",resize); };
  }, []);

  return (
    <footer className="relative overflow-hidden" style={{ background:"linear-gradient(170deg,#080918 0%,#0d0e2e 55%,#0a0b20 100%)", minHeight:"520px" }}>

      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Lime-violet horizon glow — bottom center */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-0" style={{
        height:"65%",
        background:"radial-gradient(ellipse 110% 130% at 50% 115%, rgba(216,230,60,0.18) 0%, rgba(180,200,40,0.08) 28%, rgba(214,180,252,0.06) 52%, transparent 72%)",
      }} />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-0" style={{
        height:"30%",
        background:"radial-gradient(ellipse 70% 90% at 50% 112%, rgba(216,230,60,0.14) 0%, rgba(214,180,252,0.08) 42%, transparent 68%)",
      }} />
      {/* Violet left glow */}
      <div className="absolute bottom-0 left-0 pointer-events-none z-0" style={{
        width:"35%", height:"40%",
        background:"radial-gradient(ellipse 80% 70% at 0% 100%, rgba(214,180,252,0.14) 0%, transparent 70%)",
        filter:"blur(30px)",
      }} />
      {/* Lime right accent */}
      <div className="absolute bottom-0 right-0 pointer-events-none z-0" style={{
        width:"30%", height:"35%",
        background:"radial-gradient(ellipse 80% 70% at 100% 100%, rgba(216,230,60,0.10) 0%, transparent 70%)",
        filter:"blur(30px)",
      }} />

      {/* Top separator — lime-violet gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px z-10" style={{
        background:"linear-gradient(90deg, transparent 0%, rgba(216,230,60,0.30) 30%, rgba(214,180,252,0.30) 70%, transparent 100%)",
      }} />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">

        {/* Brand */}
        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="text-2xl font-black tracking-[0.18em] text-white" style={{fontFamily:"var(--font-syne)"}}>COADAL</div>
          </div>
          <p className="text-sm text-white/30 max-w-xs leading-relaxed" style={{fontFamily:"var(--font-inter)"}}>
            AI Development & Marketing Agency.<br />Building the digital future, one project at a time.
          </p>
        </motion.div>

        {/* Nav — 5 columns */}
        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.08 }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {Object.entries(cols).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-[10px] font-bold tracking-[0.22em] uppercase mb-6" style={{color:"rgba(216,230,60,0.40)",fontFamily:"var(--font-inter)"}}>{heading}</h4>
              <ul className="space-y-4">
                {items.map(item => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm text-white/35 hover:text-white transition-colors duration-200" style={{fontFamily:"var(--font-inter)"}}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6" style={{borderTop:"1px solid rgba(255,255,255,0.05)"}}>
          <span className="text-xs text-white/20" style={{fontFamily:"var(--font-inter)"}}>
            © {new Date().getFullYear()} COADAL Technologies Pvt. Ltd. All rights reserved.
          </span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{background:"rgba(216,230,60,0.70)"}} />
            <span className="text-xs text-white/20" style={{fontFamily:"var(--font-inter)"}}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
