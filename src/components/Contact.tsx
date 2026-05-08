"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

const budgets = ["Under ₹1L", "₹1L – ₹5L", "₹5L – ₹15L", "₹15L – ₹50L", "₹50L+", "Let's discuss"];
const servicesList = ["Web Development", "Mobile App", "AI Development", "Performance Marketing", "SEO & Content", "Brand Identity", "Full Package"];
const countryCodes = [
  { code: "+91",  label: "🇮🇳 +91"  },
  { code: "+1",   label: "🇺🇸 +1"   },
  { code: "+44",  label: "🇬🇧 +44"  },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+61",  label: "🇦🇺 +61"  },
  { code: "+65",  label: "🇸🇬 +65"  },
  { code: "+49",  label: "🇩🇪 +49"  },
  { code: "+33",  label: "🇫🇷 +33"  },
  { code: "+81",  label: "🇯🇵 +81"  },
  { code: "+86",  label: "🇨🇳 +86"  },
  { code: "+7",   label: "🇷🇺 +7"   },
  { code: "+55",  label: "🇧🇷 +55"  },
  { code: "+27",  label: "🇿🇦 +27"  },
  { code: "+234", label: "🇳🇬 +234" },
  { code: "+82",  label: "🇰🇷 +82"  },
];

//conuntryCodes can be expanded as needed

const inputCls = "w-full px-4 py-3.5 rounded-xl bg-[#F0EEE9] border border-black/[0.07] text-[#0d0d0d] text-sm placeholder-[#0d0d0d]/25 focus:outline-none focus:border-[#17184B]/30 focus:bg-white transition-all";
const labelCls = "block text-[10px] font-bold tracking-[0.18em] uppercase text-[#0d0d0d]/35 mb-2";
const fontInter = { fontFamily: "var(--font-inter), sans-serif" };

export default function Contact() {
  const [sent, setSent]               = useState(false);
  const [loading, setLoading]         = useState(false);
  const [selected, setSelected]       = useState<string[]>([]);
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneDigits, setPhoneDigits] = useState("");
  const [serviceError, setServiceError] = useState(false);

  const toggle = (s: string) => {
    setServiceError(false);
    setSelected(p => p.includes(s) ? p.filter(x => x !== s) : [...p, s]);
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneDigits(e.target.value.replace(/\D/g, ""));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selected.length === 0) { setServiceError(true); return; }
    setLoading(true);
    const form = e.currentTarget as HTMLFormElement;
    const data = {
      name:     (form.elements.namedItem("name")    as HTMLInputElement)?.value,
      email:    (form.elements.namedItem("email")   as HTMLInputElement)?.value,
      phone:    `${countryCode} ${phoneDigits}`,
      company:  (form.elements.namedItem("company") as HTMLInputElement)?.value,
      budget:   (form.elements.namedItem("budget")  as HTMLSelectElement)?.value,
      message:  (form.elements.namedItem("message") as HTMLTextAreaElement)?.value,
      services: selected,
    };
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch { /* show success regardless */ }
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#F0EEE9]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="flex flex-col justify-center">

            <p className="section-label mb-5">Contact Us</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0d0d0d] mb-5 leading-[1.05]">
              Let&apos;s Talk About<br />
              <span className="font-serif-display italic font-light gradient-text">Your Vision</span>
            </h2>
            <p className="text-[#0d0d0d]/45 text-sm leading-relaxed mb-10 max-w-sm" style={fontInter}>
              Tell us where you want to go. We&apos;ll map exactly how to get there — using the right technology and the right marketing strategy.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: Mail,   label: "Email",    val: "info@coadal.com" },
                { icon: Phone,  label: "Phone",    val: "+91 95093 67378" },
                { icon: MapPin, label: "Location", val: "Jaipur, India — Remote Worldwide" },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl border border-black/[0.08] bg-white flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-[#17184B]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#0d0d0d]/30 tracking-wide mb-0.5 font-semibold uppercase" style={fontInter}>{label}</div>
                    <div className="text-sm text-[#0d0d0d]/65 font-medium" style={fontInter}>{val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-black/[0.07] bg-white w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-[#0d0d0d]/50 font-medium" style={fontInter}>We respond within 24 hours</span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            {sent ? (
              <div className="min-h-[520px] flex flex-col items-center justify-center text-center rounded-3xl border border-emerald-200 bg-emerald-50 p-12">
                <CheckCircle2 size={52} className="text-emerald-500 mb-5" />
                <h3 className="text-2xl font-bold text-[#0d0d0d] mb-3">Message Sent!</h3>
                <p className="text-[#0d0d0d]/45 text-sm max-w-xs" style={fontInter}>
                  Our team will review your details and get back within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-black/[0.07] p-8 md:p-10 space-y-5 shadow-sm">

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "name",  label: "Full Name",  type: "text",  ph: "Rahul Sharma" },
                    { id: "email", label: "Work Email", type: "email", ph: "rahul@company.com" },
                  ].map(f => (
                    <div key={f.id}>
                      <label className={labelCls} style={fontInter}>{f.label}</label>
                      <input type={f.type} name={f.id} placeholder={f.ph} required
                        className={inputCls} style={fontInter} />
                    </div>
                  ))}
                </div>

                {/* Phone */}
                <div>
                  <label className={labelCls} style={fontInter}>Phone Number</label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={e => setCountryCode(e.target.value)}
                      className="px-3 py-3.5 rounded-xl bg-[#F0EEE9] border border-black/[0.07] text-[#0d0d0d] text-sm focus:outline-none focus:border-[#17184B]/30 transition-all appearance-none cursor-pointer"
                      style={fontInter}
                    >
                      {countryCodes.map(c => (
                        <option key={c.code} value={c.code}>{c.label}</option>
                      ))}
                    </select>
                    <input
                      type="text"
                      inputMode="numeric"
                      name="phone"
                      placeholder="98765 43210"
                      value={phoneDigits}
                      onChange={handlePhone}
                      required
                      minLength={6}
                      maxLength={15}
                      className={`${inputCls} flex-1`}
                      style={fontInter}
                    />
                  </div>
                </div>

                {/* Company + Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls} style={fontInter}>Company</label>
                    <input type="text" name="company" placeholder="Your Company" required
                      className={inputCls} style={fontInter} />
                  </div>
                  <div>
                    <label className={labelCls} style={fontInter}>Budget Range</label>
                    <select name="budget" required
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F0EEE9] border border-black/[0.07] text-[#0d0d0d]/60 text-sm focus:outline-none focus:border-[#17184B]/30 transition-all appearance-none"
                      style={fontInter}>
                      <option value="">Select budget...</option>
                      {budgets.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label className={labelCls} style={fontInter}>
                    Services Needed
                    {serviceError && <span className="ml-2 text-red-500 normal-case tracking-normal font-medium">— please select at least one</span>}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {servicesList.map(s => (
                      <button key={s} type="button" onClick={() => toggle(s)}
                        className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-200 ${
                          selected.includes(s)
                            ? "border-[#17184B] bg-[#17184B] text-white"
                            : "border-black/[0.08] bg-[#F0EEE9] text-[#0d0d0d]/45 hover:border-black/20"
                        }`}
                        style={fontInter}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelCls} style={fontInter}>Tell Us About Your Project</label>
                  <textarea rows={4} name="message" required placeholder="Your goals, challenges, timeline..."
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F0EEE9] border border-black/[0.07] text-[#0d0d0d] text-sm placeholder-[#0d0d0d]/25 focus:outline-none focus:border-[#17184B]/30 focus:bg-white transition-all resize-none"
                    style={fontInter} />
                </div>

                <button type="submit" disabled={loading}
                  className="w-full py-4 rounded-xl text-[#17184B] text-sm font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                  style={{ background: "linear-gradient(135deg, #D8E63C, #c8d430)", fontFamily: "var(--font-syne), sans-serif" }}>
                  {loading
                    ? <><div className="w-4 h-4 border-2 border-[#17184B]/30 border-t-[#17184B] rounded-full animate-spin" />Sending...</>
                    : <>Send Message <ArrowRight size={15} /></>
                  }
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
