"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, X, Zap, Globe, Smartphone, BarChart3, Search, Palette, Bot, Rocket } from "lucide-react";

/* ─── Service catalog ─── */
const SERVICE_CATEGORIES = [
  {
    id: "web",
    icon: Globe,
    label: "Web Development",
    desc: "Next.js, React, full-stack apps",
    price: "₹1.2L – ₹8L",
    basePrice: 120000,
    color: "#D8E63C",
  },
  {
    id: "mobile",
    icon: Smartphone,
    label: "Mobile App",
    desc: "iOS & Android (React Native / Flutter)",
    price: "₹2L – ₹12L",
    basePrice: 200000,
    color: "#D6B4FC",
  },
  {
    id: "ai",
    icon: Bot,
    label: "AI Integration",
    desc: "LLM agents, automation, AI features",
    price: "₹80K – ₹6L",
    basePrice: 80000,
    color: "#D8E63C",
  },
  {
    id: "marketing",
    icon: BarChart3,
    label: "Performance Marketing",
    desc: "Meta, Google Ads, paid growth",
    price: "₹40K/mo – ₹3L/mo",
    basePrice: 40000,
    color: "#D6B4FC",
  },
  {
    id: "seo",
    icon: Search,
    label: "SEO & Content",
    desc: "Organic growth, content strategy",
    price: "₹25K/mo – ₹1.5L/mo",
    basePrice: 25000,
    color: "#D8E63C",
  },
  {
    id: "brand",
    icon: Palette,
    label: "Brand Identity",
    desc: "Logo, design system, brand strategy",
    price: "₹60K – ₹3L",
    basePrice: 60000,
    color: "#D6B4FC",
  },
  {
    id: "startup",
    icon: Rocket,
    label: "Startup Package",
    desc: "Web + AI + Marketing bundle",
    price: "₹3L – ₹10L",
    basePrice: 300000,
    color: "#D8E63C",
  },
  {
    id: "custom",
    icon: Zap,
    label: "Custom / Enterprise",
    desc: "Full-scale enterprise projects",
    price: "Custom pricing",
    basePrice: 0,
    color: "#D6B4FC",
  },
];

const ADDONS = [
  { id: "cms",      label: "CMS / Admin Panel",         price: 30000 },
  { id: "auth",     label: "Auth & User Management",    price: 20000 },
  { id: "payments", label: "Payment Gateway",           price: 25000 },
  { id: "ai_chat",  label: "AI Chatbot",                price: 45000 },
  { id: "analytics",label: "Analytics Dashboard",       price: 35000 },
  { id: "multilang",label: "Multi-language Support",    price: 30000 },
];

const TIMELINES = [
  { id: "rush",    label: "Rush (< 4 weeks)",    multiplier: 1.4 },
  { id: "normal",  label: "Standard (4–8 weeks)", multiplier: 1.0 },
  { id: "relaxed", label: "Relaxed (8–16 weeks)", multiplier: 0.9 },
  { id: "ongoing", label: "Ongoing retainer",     multiplier: 1.0 },
];

const BUDGETS = [
  "Under ₹1L",
  "₹1L – ₹3L",
  "₹3L – ₹7L",
  "₹7L – ₹15L",
  "₹15L+",
  "Flexible / Not sure",
];

type Step = 1 | 2 | 3 | 4;

interface FormState {
  services: string[];
  addons: string[];
  timeline: string;
  budget: string;
  projectDesc: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  referral: string;
}

const EMPTY: FormState = {
  services: [], addons: [], timeline: "normal", budget: "",
  projectDesc: "", name: "", company: "", email: "", phone: "", referral: "",
};

function formatINR(n: number) {
  if (n >= 100000) return `₹${(n / 100000).toFixed(n % 100000 === 0 ? 0 : 1)}L`;
  if (n >= 1000)   return `₹${(n / 1000).toFixed(0)}K`;
  return `₹${n}`;
}

function calcEstimate(form: FormState): { low: number; high: number } | null {
  const svcTotal = form.services.reduce((sum, id) => {
    const s = SERVICE_CATEGORIES.find(x => x.id === id);
    return sum + (s?.basePrice ?? 0);
  }, 0);
  const addonTotal = form.addons.reduce((sum, id) => {
    const a = ADDONS.find(x => x.id === id);
    return sum + (a?.price ?? 0);
  }, 0);
  const base = svcTotal + addonTotal;
  if (base === 0) return null;
  const mult = TIMELINES.find(t => t.id === form.timeline)?.multiplier ?? 1;
  return { low: Math.round(base * mult * 0.9), high: Math.round(base * mult * 1.6) };
}

/* ── Step indicators ── */
const STEP_LABELS = ["Services", "Add-ons & Timeline", "Project Brief", "Your Details"];

export default function QuotationBuilder() {
  const [step, setStep]     = useState<Step>(1);
  const [form, setForm]     = useState<FormState>(EMPTY);
  const [submitted, setSub] = useState(false);
  const [sending, setSending] = useState(false);

  const estimate = calcEstimate(form);
  const hasCustom = form.services.includes("custom");

  const toggleService = (id: string) => {
    setForm(f => ({
      ...f,
      services: f.services.includes(id) ? f.services.filter(x => x !== id) : [...f.services, id],
    }));
  };
  const toggleAddon = (id: string) => {
    setForm(f => ({
      ...f,
      addons: f.addons.includes(id) ? f.addons.filter(x => x !== id) : [...f.addons, id],
    }));
  };

  const canNext = () => {
    if (step === 1) return form.services.length > 0;
    if (step === 2) return !!form.timeline;
    if (step === 3) return form.projectDesc.trim().length > 10 && !!form.budget;
    if (step === 4) return !!form.name && !!form.email;
    return false;
  };

  const handleSubmit = async () => {
    setSending(true);
    try {
      await fetch("/api/quotation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          referral: form.referral,
          services: form.services,
          addons: form.addons,
          timeline: form.timeline,
          budget: form.budget,
          projectDesc: form.projectDesc,
        }),
      });
    } finally {
      setSending(false);
      setSub(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "#F0EEE9" }}>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
          className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: "linear-gradient(135deg,#D8E63C,#c8d430)" }}>
            <Check size={28} color="#17184B" strokeWidth={3} />
          </div>
          <h2 className="text-3xl font-bold text-[#0d0d0d] mb-3" style={{ fontFamily: "var(--font-syne)" }}>
            Quotation Submitted!
          </h2>
          <p className="text-[#0d0d0d]/50 mb-8 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
            Thanks {form.name}! We've received your project brief and will send a detailed proposal to <strong>{form.email}</strong> within 24 hours.
          </p>
          <a href="/" className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-[#17184B] text-sm hover:opacity-90 transition-all"
            style={{ background: "linear-gradient(135deg,#D8E63C,#c8d430)", fontFamily: "var(--font-syne)" }}>
            Back to Home
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#F0EEE9" }}>

      {/* Top bar */}
      <div className="sticky top-0 z-30 border-b" style={{ background: "rgba(240,238,233,0.95)", backdropFilter: "blur(20px)", borderColor: "rgba(0,0,0,0.07)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#D8E63C,#D6B4FC)" }}>
              <span className="text-[#17184B] text-xs font-black" style={{ fontFamily: "var(--font-syne)" }}>C</span>
            </div>
            <span className="text-base font-bold tracking-[0.14em] text-[#0d0d0d]" style={{ fontFamily: "var(--font-syne)" }}>COADAL</span>
          </a>

          {/* Step progress */}
          <div className="hidden sm:flex items-center gap-2">
            {STEP_LABELS.map((label, i) => {
              const s = (i + 1) as Step;
              const done = step > s;
              const active = step === s;
              return (
                <div key={label} className="flex items-center gap-2">
                  {i > 0 && <div className="w-6 h-px" style={{ background: done ? "#17184B" : "rgba(0,0,0,0.12)" }} />}
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-all"
                      style={{
                        background: done ? "#17184B" : active ? "#D8E63C" : "rgba(0,0,0,0.08)",
                        color: done ? "#fff" : active ? "#17184B" : "rgba(0,0,0,0.35)",
                      }}>
                      {done ? <Check size={10} strokeWidth={3} /> : s}
                    </div>
                    <span className="text-[11px] font-medium hidden lg:block" style={{ color: active ? "#0d0d0d" : "rgba(0,0,0,0.35)", fontFamily: "var(--font-inter)" }}>{label}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <a href="/" className="text-xs text-[#0d0d0d]/40 hover:text-[#0d0d0d]/70 transition-colors flex items-center gap-1" style={{ fontFamily: "var(--font-inter)" }}>
            <X size={14} /> Exit
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">

          {/* ── Main content ── */}
          <div>
            <AnimatePresence mode="wait">

              {/* STEP 1 — Service Selection */}
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#17184B]/40 mb-2" style={{ fontFamily: "var(--font-inter)" }}>Step 1 of 4</p>
                  <h1 className="text-3xl md:text-4xl font-bold text-[#0d0d0d] mb-2 tracking-tight" style={{ fontFamily: "var(--font-syne)" }}>
                    What do you need?
                  </h1>
                  <p className="text-[#0d0d0d]/45 text-sm mb-8" style={{ fontFamily: "var(--font-inter)" }}>Select all that apply — mix and match freely.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICE_CATEGORIES.map(svc => {
                      const Icon = svc.icon;
                      const selected = form.services.includes(svc.id);
                      return (
                        <button key={svc.id} onClick={() => toggleService(svc.id)}
                          className="relative text-left rounded-2xl p-5 border transition-all duration-200 group"
                          style={{
                            background: selected ? "#17184B" : "#ffffff",
                            borderColor: selected ? "#17184B" : "rgba(0,0,0,0.07)",
                            boxShadow: selected ? "0 8px 24px rgba(23,24,75,0.18)" : "none",
                          }}>
                          {selected && (
                            <div className="absolute top-4 right-4 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "#D8E63C" }}>
                              <Check size={11} color="#17184B" strokeWidth={3} />
                            </div>
                          )}
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                            style={{ background: selected ? `${svc.color}22` : "rgba(23,24,75,0.06)" }}>
                            <Icon size={18} color={selected ? svc.color : "#17184B"} />
                          </div>
                          <div className="font-bold text-sm mb-0.5" style={{ fontFamily: "var(--font-syne)", color: selected ? "#ffffff" : "#0d0d0d" }}>{svc.label}</div>
                          <div className="text-xs mb-2" style={{ fontFamily: "var(--font-inter)", color: selected ? "rgba(255,255,255,0.50)" : "rgba(0,0,0,0.40)" }}>{svc.desc}</div>
                          <div className="text-xs font-semibold" style={{ color: selected ? svc.color : "#17184B", fontFamily: "var(--font-inter)" }}>{svc.price}</div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 2 — Add-ons & Timeline */}
              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#17184B]/40 mb-2" style={{ fontFamily: "var(--font-inter)" }}>Step 2 of 4</p>
                  <h1 className="text-3xl md:text-4xl font-bold text-[#0d0d0d] mb-2 tracking-tight" style={{ fontFamily: "var(--font-syne)" }}>Add-ons & Timeline</h1>
                  <p className="text-[#0d0d0d]/45 text-sm mb-8" style={{ fontFamily: "var(--font-inter)" }}>Enhance your project with extra features and set your preferred timeline.</p>

                  {/* Add-ons */}
                  <h3 className="text-sm font-bold text-[#0d0d0d] mb-4 tracking-tight" style={{ fontFamily: "var(--font-syne)" }}>Optional Add-ons</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10">
                    {ADDONS.map(addon => {
                      const selected = form.addons.includes(addon.id);
                      return (
                        <button key={addon.id} onClick={() => toggleAddon(addon.id)}
                          className="flex items-center justify-between rounded-xl px-5 py-4 border transition-all duration-200 text-left"
                          style={{
                            background: selected ? "#17184B" : "#ffffff",
                            borderColor: selected ? "#17184B" : "rgba(0,0,0,0.07)",
                          }}>
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded flex items-center justify-center border transition-all"
                              style={{
                                borderColor: selected ? "#D8E63C" : "rgba(0,0,0,0.2)",
                                background: selected ? "#D8E63C" : "transparent",
                              }}>
                              {selected && <Check size={10} color="#17184B" strokeWidth={3} />}
                            </div>
                            <span className="text-sm font-medium" style={{ fontFamily: "var(--font-inter)", color: selected ? "#ffffff" : "#0d0d0d" }}>{addon.label}</span>
                          </div>
                          <span className="text-xs font-semibold" style={{ color: selected ? "#D8E63C" : "rgba(23,24,75,0.55)", fontFamily: "var(--font-inter)" }}>+{formatINR(addon.price)}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Timeline */}
                  <h3 className="text-sm font-bold text-[#0d0d0d] mb-4 tracking-tight" style={{ fontFamily: "var(--font-syne)" }}>Preferred Timeline</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {TIMELINES.map(t => {
                      const selected = form.timeline === t.id;
                      return (
                        <button key={t.id} onClick={() => setForm(f => ({ ...f, timeline: t.id }))}
                          className="flex items-center gap-3 rounded-xl px-5 py-4 border transition-all duration-200 text-left"
                          style={{
                            background: selected ? "#17184B" : "#ffffff",
                            borderColor: selected ? "#17184B" : "rgba(0,0,0,0.07)",
                          }}>
                          <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0"
                            style={{ borderColor: selected ? "#D8E63C" : "rgba(0,0,0,0.2)" }}>
                            {selected && <div className="w-2 h-2 rounded-full" style={{ background: "#D8E63C" }} />}
                          </div>
                          <div>
                            <div className="text-sm font-medium" style={{ fontFamily: "var(--font-inter)", color: selected ? "#ffffff" : "#0d0d0d" }}>{t.label}</div>
                            {t.multiplier !== 1 && (
                              <div className="text-[10px]" style={{ color: selected ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.35)", fontFamily: "var(--font-inter)" }}>
                                {t.multiplier > 1 ? `+${Math.round((t.multiplier - 1) * 100)}% rush fee` : `${Math.round((1 - t.multiplier) * 100)}% discount`}
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 3 — Project Brief */}
              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#17184B]/40 mb-2" style={{ fontFamily: "var(--font-inter)" }}>Step 3 of 4</p>
                  <h1 className="text-3xl md:text-4xl font-bold text-[#0d0d0d] mb-2 tracking-tight" style={{ fontFamily: "var(--font-syne)" }}>Tell us about your project</h1>
                  <p className="text-[#0d0d0d]/45 text-sm mb-8" style={{ fontFamily: "var(--font-inter)" }}>The more detail you share, the more accurate your quotation will be.</p>

                  {/* Budget */}
                  <div className="mb-8">
                    <label className="block text-sm font-bold text-[#0d0d0d] mb-3" style={{ fontFamily: "var(--font-syne)" }}>Budget Range *</label>
                    <div className="flex flex-wrap gap-2">
                      {BUDGETS.map(b => {
                        const sel = form.budget === b;
                        return (
                          <button key={b} onClick={() => setForm(f => ({ ...f, budget: b }))}
                            className="px-4 py-2 rounded-full text-sm font-medium border transition-all"
                            style={{
                              background: sel ? "#17184B" : "#ffffff",
                              borderColor: sel ? "#17184B" : "rgba(0,0,0,0.1)",
                              color: sel ? "#ffffff" : "rgba(0,0,0,0.55)",
                              fontFamily: "var(--font-inter)",
                            }}>
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project description */}
                  <div className="mb-6">
                    <label className="block text-sm font-bold text-[#0d0d0d] mb-2" style={{ fontFamily: "var(--font-syne)" }}>Project Description *</label>
                    <p className="text-xs text-[#0d0d0d]/40 mb-3" style={{ fontFamily: "var(--font-inter)" }}>What problem are you solving? Who is the target audience? Any reference sites?</p>
                    <textarea
                      rows={6}
                      placeholder="e.g. We're building an AI-powered recruiting platform for SMBs. We need a web app with a job posting dashboard, candidate AI ranking, and integration with LinkedIn..."
                      value={form.projectDesc}
                      onChange={e => setForm(f => ({ ...f, projectDesc: e.target.value }))}
                      className="w-full rounded-2xl px-5 py-4 text-sm resize-none outline-none border transition-all focus:border-[#17184B]/40"
                      style={{
                        background: "#ffffff",
                        borderColor: "rgba(0,0,0,0.08)",
                        color: "#0d0d0d",
                        fontFamily: "var(--font-inter)",
                      }}
                    />
                    <div className="text-right text-[10px] mt-1" style={{ color: form.projectDesc.length < 10 ? "#ef4444" : "rgba(0,0,0,0.25)", fontFamily: "var(--font-inter)" }}>
                      {form.projectDesc.length} chars {form.projectDesc.length < 10 && "(min 10)"}
                    </div>
                  </div>

                  {/* Referral */}
                  <div>
                    <label className="block text-sm font-bold text-[#0d0d0d] mb-2" style={{ fontFamily: "var(--font-syne)" }}>How did you find us? <span className="font-normal text-[#0d0d0d]/40">(optional)</span></label>
                    <input
                      type="text"
                      placeholder="Google, LinkedIn, referral, social media..."
                      value={form.referral}
                      onChange={e => setForm(f => ({ ...f, referral: e.target.value }))}
                      className="w-full rounded-2xl px-5 py-3.5 text-sm outline-none border transition-all focus:border-[#17184B]/40"
                      style={{ background: "#ffffff", borderColor: "rgba(0,0,0,0.08)", color: "#0d0d0d", fontFamily: "var(--font-inter)" }}
                    />
                  </div>
                </motion.div>
              )}

              {/* STEP 4 — Contact Details */}
              {step === 4 && (
                <motion.div key="s4" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#17184B]/40 mb-2" style={{ fontFamily: "var(--font-inter)" }}>Step 4 of 4</p>
                  <h1 className="text-3xl md:text-4xl font-bold text-[#0d0d0d] mb-2 tracking-tight" style={{ fontFamily: "var(--font-syne)" }}>Almost there!</h1>
                  <p className="text-[#0d0d0d]/45 text-sm mb-8" style={{ fontFamily: "var(--font-inter)" }}>We'll send your detailed quotation to your email within 24 hours.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { key: "name",    label: "Full Name *",     type: "text",  placeholder: "Rahul Sharma" },
                      { key: "company", label: "Company / Brand", type: "text",  placeholder: "TechNova Pvt. Ltd." },
                      { key: "email",   label: "Email Address *", type: "email", placeholder: "rahul@technova.in" },
                      { key: "phone",   label: "Phone / WhatsApp",type: "tel",   placeholder: "+91 98765 43210" },
                    ].map(field => (
                      <div key={field.key} className={field.key === "email" || field.key === "name" ? "" : ""}>
                        <label className="block text-sm font-bold text-[#0d0d0d] mb-2" style={{ fontFamily: "var(--font-syne)" }}>{field.label}</label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={(form as unknown as Record<string, string>)[field.key]}
                          onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                          className="w-full rounded-2xl px-5 py-3.5 text-sm outline-none border transition-all focus:border-[#17184B]/40"
                          style={{ background: "#ffffff", borderColor: "rgba(0,0,0,0.08)", color: "#0d0d0d", fontFamily: "var(--font-inter)" }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Privacy note */}
                  <p className="mt-6 text-xs text-[#0d0d0d]/35 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                    By submitting, you agree to our <a href="#" className="underline hover:text-[#0d0d0d]/60">Privacy Policy</a>. We'll never share your info with third parties. Expect a reply within 24 hours — often sooner.
                  </p>
                </motion.div>
              )}

            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
              {step > 1 ? (
                <button onClick={() => setStep(s => (s - 1) as Step)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all hover:border-[#17184B]/30"
                  style={{ borderColor: "rgba(0,0,0,0.1)", color: "rgba(0,0,0,0.55)", fontFamily: "var(--font-syne)" }}>
                  <ArrowLeft size={14} /> Back
                </button>
              ) : <div />}

              {step < 4 ? (
                <button onClick={() => setStep(s => (s + 1) as Step)} disabled={!canNext()}
                  className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold transition-all disabled:opacity-35 disabled:cursor-not-allowed hover:opacity-90"
                  style={{ background: "linear-gradient(135deg,#D8E63C,#c8d430)", color: "#17184B", fontFamily: "var(--font-syne)" }}>
                  Continue <ArrowRight size={14} />
                </button>
              ) : (
                <button onClick={handleSubmit} disabled={!canNext() || sending}
                  className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold transition-all disabled:opacity-35 disabled:cursor-not-allowed hover:opacity-90"
                  style={{ background: "linear-gradient(135deg,#17184B,#2d1060)", color: "#ffffff", fontFamily: "var(--font-syne)" }}>
                  {sending ? "Sending…" : "Send Quotation Request"} <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>

          {/* ── Quotation sidebar ── */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(0,0,0,0.07)", background: "#17184B" }}>

              {/* Header */}
              <div className="px-6 pt-6 pb-4 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="text-xs font-semibold tracking-[0.18em] uppercase mb-1" style={{ color: "rgba(216,230,60,0.60)", fontFamily: "var(--font-inter)" }}>Live Estimate</div>
                <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
                  {hasCustom ? "Custom Pricing" : estimate ? `${formatINR(estimate.low)} – ${formatINR(estimate.high)}` : "Select services →"}
                </div>
                {estimate && !hasCustom && (
                  <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.30)", fontFamily: "var(--font-inter)" }}>Indicative range · final quote within 24h</p>
                )}
              </div>

              {/* Selected services */}
              <div className="px-6 py-4">
                {form.services.length === 0 ? (
                  <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-inter)" }}>No services selected yet.</p>
                ) : (
                  <ul className="space-y-2.5">
                    {form.services.map(id => {
                      const svc = SERVICE_CATEGORIES.find(s => s.id === id)!;
                      return (
                        <li key={id} className="flex items-center justify-between">
                          <span className="text-sm text-white/75 flex items-center gap-2" style={{ fontFamily: "var(--font-inter)" }}>
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: svc.color }} />
                            {svc.label}
                          </span>
                          <span className="text-xs" style={{ color: svc.color, fontFamily: "var(--font-inter)" }}>{svc.price}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}

                {form.addons.length > 0 && (
                  <>
                    <div className="my-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }} />
                    <p className="text-[10px] font-semibold tracking-[0.16em] uppercase mb-2.5" style={{ color: "rgba(255,255,255,0.30)", fontFamily: "var(--font-inter)" }}>Add-ons</p>
                    <ul className="space-y-2">
                      {form.addons.map(id => {
                        const a = ADDONS.find(x => x.id === id)!;
                        return (
                          <li key={id} className="flex items-center justify-between">
                            <span className="text-sm text-white/60" style={{ fontFamily: "var(--font-inter)" }}>{a.label}</span>
                            <span className="text-xs text-white/40" style={{ fontFamily: "var(--font-inter)" }}>+{formatINR(a.price)}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}

                {form.timeline && (
                  <>
                    <div className="my-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }} />
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/40" style={{ fontFamily: "var(--font-inter)" }}>Timeline</span>
                      <span className="text-xs text-white/60 font-medium" style={{ fontFamily: "var(--font-inter)" }}>{TIMELINES.find(t => t.id === form.timeline)?.label}</span>
                    </div>
                  </>
                )}

                {form.budget && (
                  <div className="flex items-center justify-between mt-2.5">
                    <span className="text-xs text-white/40" style={{ fontFamily: "var(--font-inter)" }}>Budget</span>
                    <span className="text-xs text-white/60 font-medium" style={{ fontFamily: "var(--font-inter)" }}>{form.budget}</span>
                  </div>
                )}
              </div>

              {/* Trust signals */}
              <div className="px-6 pb-6">
                <div className="rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.04)" }}>
                  {["No commitment required", "Proposal within 24 hours", "NDA available on request"].map(t => (
                    <div key={t} className="flex items-center gap-2 py-1">
                      <Check size={11} color="#D8E63C" />
                      <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.40)", fontFamily: "var(--font-inter)" }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
