"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Smartphone, Brain, BarChart2, Search, Palette, Cloud, ChevronDown } from "lucide-react";

const serviceItems = [
  { label: "Web Development",       href: "/services/web-development",      icon: Code2,      desc: "Next.js, React, custom SaaS platforms" },
  { label: "Mobile Apps",           href: "/services/mobile-apps",           icon: Smartphone, desc: "iOS & Android, React Native" },
  { label: "AI Development",        href: "/services/ai-development",        icon: Brain,      desc: "LLMs, agents, RAG, automation" },
  { label: "Performance Marketing", href: "/services/performance-marketing", icon: BarChart2,  desc: "Meta, Google, TikTok ads" },
  { label: "SEO & Content",         href: "/services/seo-content",           icon: Search,     desc: "Organic growth & content strategy" },
  { label: "Brand Identity",        href: "/services/brand-identity",        icon: Palette,    desc: "Logo, visual identity, design system" },
  { label: "Salesforce CRM",        href: "/services/salesforce",            icon: Cloud,      desc: "Implementation, Apex, CRM migration" },
];

const links = [
  { label: "Services",       href: "/services",       hasDropdown: true },
  { label: "Startup Growth", href: "/startup-growth", hasDropdown: false },
  { label: "About",          href: "/about",          hasDropdown: false },
  { label: "Insights",       href: "/insights",       hasDropdown: false },
  { label: "Portfolio",      href: "/portfolio",      hasDropdown: false },
  { label: "Contact",        href: "/contact",        hasDropdown: false },
];

const LIGHT_PAGES = [
  "/insights", "/portfolio", "/contact", "/about", "/services",
  "/startup-growth", "/start-a-project", "/privacy-policy",
  "/terms-of-service", "/cookie-policy", "/security",
  "/careers", "/startup-package", "/enterprise-plan",
  "/ai-automation", "/growth-retainer", "/custom-projects",
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrollY, setScrollY]         = useState(0);
  const [open, setOpen]               = useState(false);
  const [dropOpen, setDropOpen]       = useState(false);
  const [mobileServOpen, setMobileServOpen] = useState(false);
  const dropTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => { setOpen(false); setMobileServOpen(false); }, [pathname]);

  const isLightPage = LIGHT_PAGES.some(p => pathname === p || pathname.startsWith(p + "/"));
  const scrolled    = scrollY > 40;
  const pastHero    = scrollY > (typeof window !== "undefined" ? window.innerHeight * 0.85 : 700);
  const isLight     = isLightPage || pastHero;

  const navBg = (() => {
    if (isLightPage) return scrolled ? "rgba(240,238,233,0.96)" : "rgba(240,238,233,1)";
    return scrolled ? (isLight ? "rgba(240,238,233,0.96)" : "rgba(7,8,15,0.85)") : "transparent";
  })();

  const navBorder = (() => {
    if (isLightPage || (scrolled && isLight)) return "1px solid rgba(0,0,0,0.07)";
    if (scrolled) return "1px solid rgba(255,255,255,0.07)";
    return "none";
  })();

  const linkColor   = isLight ? "rgba(13,13,13,0.55)"  : "rgba(255,255,255,0.60)";
  const linkHover   = isLight ? "#0d0d0d"               : "#ffffff";
  const logoColor   = isLight ? "#0d0d0d"               : "#ffffff";
  const burgerColor = isLight ? "#0d0d0d"               : "#ffffff";

  const menuBg      = isLight ? "rgba(245,243,238,0.98)" : "rgba(7,8,20,0.98)";
  const menuBorder  = isLight ? "1px solid rgba(0,0,0,0.07)" : "1px solid rgba(255,255,255,0.07)";
  const dividerColor= isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)";

  const handleDropEnter = () => {
    if (dropTimerRef.current) clearTimeout(dropTimerRef.current);
    setDropOpen(true);
  };
  const handleDropLeave = () => {
    dropTimerRef.current = setTimeout(() => setDropOpen(false), 120);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: navBg, borderBottom: navBorder,
          backdropFilter: (scrolled || isLightPage) ? "blur(18px)" : "none",
          WebkitBackdropFilter: (scrolled || isLightPage) ? "blur(18px)" : "none",
          transition: "background 0.35s ease, border-color 0.35s ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <span style={{ fontFamily: "var(--font-syne)", fontSize: 15, fontWeight: 800, letterSpacing: "0.14em", color: logoColor, transition: "color 0.3s ease" }}>
              COADAL
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {links.map(l => {
              const isActive = pathname === l.href || pathname.startsWith(l.href + "/");
              if (l.hasDropdown) {
                return (
                  <li key={l.label} className="relative" onMouseEnter={handleDropEnter} onMouseLeave={handleDropLeave}>
                    <button style={{
                      fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: isActive ? 600 : 500,
                      color: isActive ? linkHover : linkColor, background: "none", border: "none",
                      cursor: "pointer", display: "flex", alignItems: "center", gap: 4, padding: 0,
                      position: "relative", transition: "color 0.2s ease",
                    }}>
                      {l.label}
                      <ChevronDown size={13} style={{ transition: "transform 0.2s ease", transform: dropOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                      {isActive && <span style={{ position: "absolute", bottom: -4, left: "50%", transform: "translateX(-50%)", width: 4, height: 4, borderRadius: "50%", background: "#D8E63C", display: "block" }} />}
                    </button>

                    <AnimatePresence>
                      {dropOpen && (
                        <motion.div
                          key="services-drop"
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                          onMouseEnter={handleDropEnter}
                          onMouseLeave={handleDropLeave}
                          style={{
                            position: "absolute", top: "calc(100% + 14px)", left: "50%", transform: "translateX(-50%)",
                            width: 560, background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)",
                            borderRadius: 20, boxShadow: "0 16px 48px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)",
                            padding: "16px", zIndex: 100,
                          }}
                        >
                          <div style={{ position: "absolute", top: -6, left: "50%", transform: "translateX(-50%) rotate(45deg)", width: 12, height: 12, background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)", borderRight: "none", borderBottom: "none", borderRadius: "2px 0 0 0" }} />
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                            {serviceItems.map(s => {
                              const Icon = s.icon;
                              const isServiceActive = pathname === s.href || pathname.startsWith(s.href + "/");
                              return (
                                <a key={s.href} href={s.href} onClick={() => setDropOpen(false)}
                                  style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: 12, textDecoration: "none", transition: "background 0.15s ease", background: isServiceActive ? "#F0EEE9" : "transparent" }}
                                  onMouseEnter={e => { e.currentTarget.style.background = "#F0EEE9"; }}
                                  onMouseLeave={e => { e.currentTarget.style.background = isServiceActive ? "#F0EEE9" : "transparent"; }}
                                >
                                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(23,24,75,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#17184B" }}>
                                    <Icon size={16} />
                                  </div>
                                  <div>
                                    <div style={{ fontSize: 13, fontWeight: 600, color: "#0d0d0d", fontFamily: "var(--font-inter)", lineHeight: 1.3 }}>{s.label}</div>
                                    <div style={{ fontSize: 11, color: "rgba(13,13,13,0.45)", fontFamily: "var(--font-inter)", lineHeight: 1.4, marginTop: 1 }}>{s.desc}</div>
                                  </div>
                                </a>
                              );
                            })}
                          </div>
                          <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                            <a href="/services" onClick={() => setDropOpen(false)}
                              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "9px 0", borderRadius: 10, fontSize: 12, fontWeight: 600, color: "#17184B", fontFamily: "var(--font-inter)", textDecoration: "none", background: "rgba(23,24,75,0.04)", transition: "background 0.15s ease" }}
                              onMouseEnter={e => { e.currentTarget.style.background = "rgba(23,24,75,0.08)"; }}
                              onMouseLeave={e => { e.currentTarget.style.background = "rgba(23,24,75,0.04)"; }}
                            >
                              View All Services →
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }
              return (
                <li key={l.label}>
                  <a href={l.href}
                    style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: isActive ? 600 : 500, color: isActive ? linkHover : linkColor, textDecoration: "none", transition: "color 0.2s ease", position: "relative" }}
                    onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
                    onMouseLeave={e => (e.currentTarget.style.color = isActive ? linkHover : linkColor)}
                  >
                    {l.label}
                    {isActive && <span style={{ position: "absolute", bottom: -4, left: "50%", transform: "translateX(-50%)", width: 4, height: 4, borderRadius: "50%", background: "#D8E63C", display: "block" }} />}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <a href="/start-a-project" className="hidden md:flex items-center px-5 py-2 rounded-full text-[13px] font-bold hover:opacity-90 transition-opacity flex-shrink-0"
            style={{ fontFamily: "var(--font-syne)", background: "linear-gradient(135deg,#D8E63C,#c8d430)", color: "#17184B", boxShadow: "0 2px 12px rgba(216,230,60,0.25)" }}>
            Start a Project
          </a>

          {/* Hamburger */}
          <button onClick={() => setOpen(v => !v)} className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors" aria-label="Toggle menu"
            style={{ color: burgerColor, background: open ? (isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)") : "transparent" }}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-14 left-0 right-0 z-40 md:hidden overflow-hidden"
            style={{ background: menuBg, borderBottom: menuBorder, backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
          >
            <div className="px-5 py-4 flex flex-col gap-0.5" style={{ maxHeight: "calc(100vh - 56px)", overflowY: "auto" }}>

              {links.map(l => {
                const isActive = pathname === l.href || pathname.startsWith(l.href + "/");

                if (l.hasDropdown) {
                  return (
                    <div key={l.label}>
                      {/* Services row — tap to toggle */}
                      <button
                        onClick={() => setMobileServOpen(v => !v)}
                        className="w-full flex items-center justify-between px-3 py-3 rounded-xl"
                        style={{
                          fontFamily: "var(--font-inter)", fontSize: 15,
                          fontWeight: isActive ? 600 : 400,
                          color: isActive ? (isLight ? "#0d0d0d" : "#ffffff") : (isLight ? "rgba(13,13,13,0.60)" : "rgba(255,255,255,0.60)"),
                          background: isActive ? (isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.06)") : "transparent",
                          border: "none", cursor: "pointer", textAlign: "left",
                        }}
                      >
                        {l.label}
                        <ChevronDown size={16} style={{ transition: "transform 0.25s ease", transform: mobileServOpen ? "rotate(180deg)" : "rotate(0deg)", color: isLight ? "rgba(13,13,13,0.35)" : "rgba(255,255,255,0.35)", flexShrink: 0 }} />
                      </button>

                      {/* Expandable service list */}
                      <AnimatePresence>
                        {mobileServOpen && (
                          <motion.div
                            key="mobile-services"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                            style={{ overflow: "hidden" }}
                          >
                            <div style={{ paddingLeft: 8, paddingBottom: 4, display: "flex", flexDirection: "column", gap: 1 }}>
                              {serviceItems.map(s => {
                                const Icon = s.icon;
                                const isServiceActive = pathname === s.href || pathname.startsWith(s.href + "/");
                                return (
                                  <a key={s.href} href={s.href} onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                                    style={{
                                      fontFamily: "var(--font-inter)", fontSize: 14,
                                      fontWeight: isServiceActive ? 600 : 400,
                                      color: isServiceActive
                                        ? (isLight ? "#17184B" : "#D8E63C")
                                        : (isLight ? "rgba(13,13,13,0.55)" : "rgba(255,255,255,0.50)"),
                                      background: isServiceActive
                                        ? (isLight ? "rgba(23,24,75,0.06)" : "rgba(216,230,60,0.08)")
                                        : "transparent",
                                      textDecoration: "none",
                                    }}
                                  >
                                    <div style={{
                                      width: 30, height: 30, borderRadius: 8, flexShrink: 0,
                                      background: isLight ? "rgba(23,24,75,0.06)" : "rgba(255,255,255,0.07)",
                                      display: "flex", alignItems: "center", justifyContent: "center",
                                    }}>
                                      <Icon size={14} color={isLight ? "#17184B" : "rgba(255,255,255,0.60)"} />
                                    </div>
                                    <div>
                                      <div style={{ fontSize: 13, fontWeight: isServiceActive ? 600 : 500, lineHeight: 1.2 }}>{s.label}</div>
                                      <div style={{ fontSize: 11, opacity: 0.45, lineHeight: 1.3, marginTop: 1 }}>{s.desc}</div>
                                    </div>
                                  </a>
                                );
                              })}
                              {/* View all */}
                              <a href="/services" onClick={() => setOpen(false)}
                                className="flex items-center justify-center gap-2 mx-3 mt-1 mb-2 py-2.5 rounded-xl text-xs font-bold"
                                style={{
                                  fontFamily: "var(--font-inter)",
                                  color: isLight ? "#17184B" : "#D8E63C",
                                  background: isLight ? "rgba(23,24,75,0.06)" : "rgba(216,230,60,0.08)",
                                  textDecoration: "none",
                                }}
                              >
                                View All Services →
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-3 py-3 rounded-xl"
                    style={{
                      fontFamily: "var(--font-inter)", fontSize: 15,
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? (isLight ? "#0d0d0d" : "#ffffff") : (isLight ? "rgba(13,13,13,0.60)" : "rgba(255,255,255,0.60)"),
                      background: isActive ? (isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.06)") : "transparent",
                      textDecoration: "none",
                    }}
                  >
                    {l.label}
                    {isActive && <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D8E63C", flexShrink: 0 }} />}
                  </a>
                );
              })}

              {/* CTA */}
              <div className="mt-3 pt-3" style={{ borderTop: dividerColor ? `1px solid ${dividerColor}` : undefined }}>
                <a href="/start-a-project" onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 rounded-2xl font-bold text-sm"
                  style={{ fontFamily: "var(--font-syne)", background: "linear-gradient(135deg,#D8E63C,#c8d430)", color: "#17184B", textDecoration: "none" }}>
                  Start a Project
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
