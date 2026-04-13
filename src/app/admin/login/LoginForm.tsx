"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff, Lock, User, ArrowRight, ShieldCheck } from "lucide-react";

export default function LoginForm() {
  const params  = useSearchParams();
  const from    = params.get("from") || "/admin";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPw,   setShowPw]   = useState(false);
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);

  useEffect(() => {
    fetch("/api/admin/check").then(r => { if (r.ok) window.location.href = from; }).catch(() => {});
  }, [from]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        window.location.href = from;
      } else {
        setError(data.message || "Invalid credentials.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex" style={{ background: "#07080f" }}>

      {/* Left panel — branding */}
      <div className="hidden lg:flex flex-col justify-between w-[42%] p-12 relative overflow-hidden" style={{ background: "#17184B" }}>
        <div className="absolute top-0 left-0 w-full h-64 pointer-events-none" style={{
          background: "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(216,230,60,0.20) 0%, transparent 70%)",
        }} />
        <div className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none" style={{
          background: "radial-gradient(ellipse 70% 70% at 100% 100%, rgba(214,180,252,0.18) 0%, transparent 70%)",
        }} />

        {/* Logo */}
        <div className="relative flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#D8E63C,#D6B4FC)" }}>
            <span className="text-[#17184B] font-black text-sm" style={{ fontFamily: "var(--font-syne)" }}>C</span>
          </div>
          <span className="text-white font-bold tracking-[0.16em] text-lg" style={{ fontFamily: "var(--font-syne)" }}>COADAL</span>
        </div>

        {/* Middle */}
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: "rgba(216,230,60,0.12)", border: "1px solid rgba(216,230,60,0.20)" }}>
            <ShieldCheck size={12} color="#D8E63C" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase" style={{ color: "#D8E63C", fontFamily: "var(--font-inter)" }}>Secure Admin Access</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-syne)" }}>
            Manage your<br />content with ease.
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.40)", fontFamily: "var(--font-inter)" }}>
            Publish blog posts, manage your portfolio, and track insights — all from one place.
          </p>
          <div className="mt-8 space-y-3">
            {["Blog post creation & editing", "Portfolio management", "Analytics overview", "Contact form submissions"].map(f => (
              <div key={f} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#D8E63C" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.50)", fontFamily: "var(--font-inter)" }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="relative text-xs" style={{ color: "rgba(255,255,255,0.20)", fontFamily: "var(--font-inter)" }}>
          © {new Date().getFullYear()} COADAL Technologies Pvt. Ltd.
        </p>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">

          {/* Mobile logo */}
          <div className="flex items-center gap-2.5 mb-10 lg:hidden">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#D8E63C,#D6B4FC)" }}>
              <span className="text-[#17184B] font-black text-xs" style={{ fontFamily: "var(--font-syne)" }}>C</span>
            </div>
            <span className="text-white font-bold tracking-[0.14em]" style={{ fontFamily: "var(--font-syne)" }}>COADAL</span>
          </div>

          <h1 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-syne)" }}>Admin Login</h1>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-inter)" }}>Enter your credentials to access the dashboard.</p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Username */}
            <div>
              <label className="block text-xs font-semibold mb-2 tracking-wide" style={{ color: "rgba(255,255,255,0.50)", fontFamily: "var(--font-inter)" }}>Username</label>
              <div className="relative">
                <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(255,255,255,0.25)" }} />
                <input
                  type="text"
                  autoComplete="username"
                  placeholder="admin"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm outline-none border transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)", color: "#ffffff", fontFamily: "var(--font-inter)" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(216,230,60,0.50)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)")}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold mb-2 tracking-wide" style={{ color: "rgba(255,255,255,0.50)", fontFamily: "var(--font-inter)" }}>Password</label>
              <div className="relative">
                <Lock size={15} className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(255,255,255,0.25)" }} />
                <input
                  type={showPw ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="w-full pl-11 pr-12 py-3.5 rounded-2xl text-sm outline-none border transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)", color: "#ffffff", fontFamily: "var(--font-inter)" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(216,230,60,0.50)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)")}
                />
                <button type="button" onClick={() => setShowPw(v => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.60)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}>
                  {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-xl px-4 py-3 text-sm flex items-center gap-2" style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)", color: "#fca5a5", fontFamily: "var(--font-inter)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                {error}
              </div>
            )}

            {/* Submit */}
            <button type="submit" disabled={loading || !username || !password}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed mt-2"
              style={{ background: "linear-gradient(135deg,#D8E63C,#c8d430)", color: "#17184B", fontFamily: "var(--font-syne)" }}>
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-[#17184B]/30 border-t-[#17184B] rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                <>Sign In <ArrowRight size={14} /></>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-xs" style={{ color: "rgba(255,255,255,0.20)", fontFamily: "var(--font-inter)" }}>
            <a href="/" className="hover:text-white/40 transition-colors">← Back to website</a>
          </p>
        </div>
      </div>
    </div>
  );
}
