"use client";
import { useState, useEffect, useRef } from "react";
import { LayoutDashboard, FileText, PlusCircle, ArrowLeft, Save, Trash2, Edit2, Activity, LogOut, X, ImageIcon } from "lucide-react";

interface Update {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  date: string;
}

const TAGS = ["Launch", "Milestone", "Team", "Award", "Event", "News", "Update"];

function Sidebar({ active }: { active: string }) {
  const navItems = [
    { label: "Dashboard",   href: "/admin",          icon: <LayoutDashboard size={16} /> },
    { label: "All Posts",   href: "/admin",          icon: <FileText size={16} /> },
    { label: "New Post",    href: "/admin/posts/new",icon: <PlusCircle size={16} /> },
    { label: "Activity",    href: "/admin/updates",  icon: <Activity size={16} /> },
    { label: "Back to Site",href: "/",               icon: <ArrowLeft size={16} /> },
  ];
  return (
    <aside className="w-60 flex-shrink-0 flex flex-col min-h-screen" style={{ background: "#17184B" }}>
      <div className="px-6 py-7 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg,#D8E63C,#D6B4FC)" }}>
            <span className="text-[#17184B] text-xs font-black">C</span>
          </div>
          <span className="text-white font-bold tracking-widest text-sm">COADAL</span>
        </div>
        <p className="text-xs mt-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>Admin Panel</p>
      </div>
      <nav className="flex flex-col py-6 px-3 gap-1 flex-1">
        {navItems.map(item => (
          <a key={item.label} href={item.href}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
            style={{
              color: active === item.label ? "#ffffff" : "rgba(255,255,255,0.5)",
              background: active === item.label ? "rgba(255,255,255,0.1)" : "transparent",
            }}>
            {item.icon} {item.label}
          </a>
        ))}
      </nav>
      <div className="px-4 py-5 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <button onClick={async () => { await fetch("/api/admin/logout", { method: "POST" }); window.location.href = "/admin/login"; }}
          className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-red-500/10"
          style={{ color: "rgba(255,100,100,0.70)" }}>
          <LogOut size={16} /> Logout
        </button>
      </div>
    </aside>
  );
}

const inputStyle = {
  background: "#ffffff",
  border: "1px solid rgba(23,24,75,0.12)",
  borderRadius: "12px",
  padding: "10px 14px",
  fontSize: "14px",
  color: "#0d0d0d",
  outline: "none",
  width: "100%",
};
const labelStyle = {
  fontSize: "12px", fontWeight: 600 as const,
  color: "rgba(13,13,13,0.5)", textTransform: "uppercase" as const,
  letterSpacing: "0.1em", display: "block", marginBottom: "6px",
};

function UpdateForm({ postId, onDone }: { postId?: string; onDone: () => void }) {
  const isEdit = !!postId;
  const fileRef = useRef<HTMLInputElement>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", image: "", tag: TAGS[0], date: new Date().toISOString().split("T")[0] });

  useEffect(() => {
    if (isEdit) {
      fetch(`/api/updates/${postId}`).then(r => r.json()).then(d => {
        setForm({ title: d.title || "", description: d.description || "", image: d.image || "", tag: d.tag || TAGS[0], date: d.date || "" });
      });
    }
  }, [isEdit, postId]);

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (data.url) set("image", data.url);
    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    setSaving(true);
    await fetch(isEdit ? `/api/updates/${postId}` : "/api/updates", {
      method: isEdit ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSaving(false);
    onDone();
  };

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.08)" }}>
      <div className="px-7 py-5 border-b flex items-center justify-between" style={{ borderColor: "rgba(23,24,75,0.07)" }}>
        <h2 className="font-bold text-base" style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}>
          {isEdit ? "Edit Update" : "New Activity Update"}
        </h2>
        <button onClick={onDone} className="w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-70" style={{ background: "#F0EEE9", color: "#17184B" }}>
          <X size={14} />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="p-7 flex flex-col gap-5">
        {/* Title */}
        <div>
          <label style={labelStyle}>Title *</label>
          <input required type="text" placeholder="e.g. We launched a new service" value={form.title} onChange={e => set("title", e.target.value)} style={inputStyle} />
        </div>

        {/* Description */}
        <div>
          <label style={labelStyle}>Description *</label>
          <textarea required rows={4} placeholder="Describe this activity or milestone..." value={form.description} onChange={e => set("description", e.target.value)}
            style={{ ...inputStyle, resize: "vertical" }} />
        </div>

        {/* Image upload */}
        <div>
          <label style={labelStyle}>Photo</label>
          <div className="flex gap-3 items-start">
            {form.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={form.image} alt="" style={{ width: 100, height: 60, objectFit: "cover", borderRadius: 8, flexShrink: 0, border: "1px solid rgba(0,0,0,0.08)" }} />
            )}
            <div style={{ flex: 1 }}>
              <input type="text" placeholder="Or paste image URL..." value={form.image} onChange={e => set("image", e.target.value)} style={{ ...inputStyle, marginBottom: 8 }} />
              <button type="button" onClick={() => fileRef.current?.click()}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium hover:opacity-80 transition-opacity"
                style={{ background: "#F0EEE9", color: "#17184B", border: "1px solid rgba(23,24,75,0.12)" }}>
                <ImageIcon size={14} /> {uploading ? "Uploading..." : "Upload Photo"}
              </button>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleUpload} />
            </div>
          </div>
        </div>

        {/* Tag & Date */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label style={labelStyle}>Tag</label>
            <select value={form.tag} onChange={e => set("tag", e.target.value)} style={inputStyle}>
              {TAGS.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Date</label>
            <input type="date" value={form.date} onChange={e => set("date", e.target.value)} style={inputStyle} />
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button type="button" onClick={onDone} className="px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-70"
            style={{ background: "#F0EEE9", color: "rgba(13,13,13,0.6)", border: "1px solid rgba(23,24,75,0.12)" }}>
            Cancel
          </button>
          <button type="submit" disabled={saving}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 disabled:opacity-50"
            style={{ background: "#D8E63C", color: "#17184B" }}>
            <Save size={14} /> {saving ? "Saving..." : isEdit ? "Save Changes" : "Publish Update"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function UpdatesAdmin() {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | undefined>(undefined);

  const load = () => {
    setLoading(true);
    fetch("/api/updates").then(r => r.json()).then(d => { if (Array.isArray(d)) setUpdates(d); setLoading(false); }).catch(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const del = async (id: string) => {
    if (!confirm("Delete this update?")) return;
    await fetch(`/api/updates/${id}`, { method: "DELETE" });
    setUpdates(p => p.filter(u => u.id !== id));
  };

  const openNew = () => { setEditId(undefined); setShowForm(true); };
  const openEdit = (id: string) => { setEditId(id); setShowForm(true); };
  const done = () => { setShowForm(false); setEditId(undefined); load(); };

  return (
    <div className="flex min-h-screen">
      <Sidebar active="Activity" />
      <main className="flex-1 overflow-auto" style={{ background: "#F0EEE9" }}>
        {/* Header */}
        <div className="px-10 py-8 border-b" style={{ background: "#ffffff", borderColor: "rgba(23,24,75,0.08)" }}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold" style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}>Company Activity</h1>
              <p className="text-sm mt-0.5" style={{ color: "rgba(13,13,13,0.45)" }}>Manage updates shown on the home page</p>
            </div>
            <button onClick={openNew}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold hover:opacity-90"
              style={{ background: "#D8E63C", color: "#17184B" }}>
              <PlusCircle size={16} /> New Update
            </button>
          </div>
        </div>

        <div className="px-10 py-8 flex flex-col gap-6">
          {showForm && <UpdateForm postId={editId} onDone={done} />}

          {/* List */}
          <div className="rounded-2xl overflow-hidden" style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.08)" }}>
            <div className="px-7 py-5 border-b flex items-center justify-between" style={{ borderColor: "rgba(23,24,75,0.07)" }}>
              <h2 className="font-bold text-base" style={{ color: "#0d0d0d" }}>All Updates</h2>
              <span className="text-xs px-3 py-1 rounded-full" style={{ background: "#F0EEE9", color: "rgba(13,13,13,0.5)" }}>{updates.length} updates</span>
            </div>
            {loading ? (
              <div className="py-16 text-center" style={{ color: "rgba(13,13,13,0.4)" }}>Loading...</div>
            ) : updates.length === 0 ? (
              <div className="py-16 text-center">
                <p style={{ color: "rgba(13,13,13,0.4)" }}>No updates yet.</p>
                <button onClick={openNew} className="text-sm font-semibold mt-2 block mx-auto" style={{ color: "#17184B" }}>Create your first update →</button>
              </div>
            ) : (
              <div className="divide-y" style={{ borderColor: "rgba(23,24,75,0.05)" }}>
                {updates.map(u => (
                  <div key={u.id} className="px-7 py-4 flex items-center gap-4">
                    {/* Image thumb */}
                    <div style={{ width: 64, height: 40, borderRadius: 8, overflow: "hidden", flexShrink: 0, background: "#F0EEE9" }}>
                      {u.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={u.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      ) : (
                        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Activity size={16} color="rgba(13,13,13,0.2)" />
                        </div>
                      )}
                    </div>
                    {/* Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p className="font-medium text-sm truncate" style={{ color: "#0d0d0d" }}>{u.title}</p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(13,13,13,0.4)" }}>{u.date} · {u.tag}</p>
                    </div>
                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button onClick={() => openEdit(u.id)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-70"
                        style={{ background: "#F0EEE9", color: "#17184B" }}>
                        <Edit2 size={14} />
                      </button>
                      <button onClick={() => del(u.id)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-70"
                        style={{ background: "rgba(239,68,68,0.1)", color: "#dc2626" }}>
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
