"use client";
import { useState, useEffect } from "react";
import { LayoutDashboard, FileText, PlusCircle, ArrowLeft, Save, Activity, Layers } from "lucide-react";

interface PostForm {
  title: string;
  slug: string;
  category: string;
  tags: string;
  excerpt: string;
  coverColor: string;
  readTime: string;
  content: string;
  authorName: string;
  authorRole: string;
  featured: boolean;
  status: string;
}

const CATEGORIES = ["AI & Marketing", "Development", "Startup Growth", "SEO", "Performance Ads"];
const COVER_COLORS = [
  { label: "Lime", value: "#D8E63C" },
  { label: "Violet", value: "#D6B4FC" },
  { label: "Navy", value: "#17184B" },
];

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function Sidebar({ active }: { active: string }) {
  const navItems = [
    { label: "Dashboard",    href: "/admin",          icon: <LayoutDashboard size={16} /> },
    { label: "All Posts",    href: "/admin",          icon: <FileText size={16} /> },
    { label: "New Post",     href: "/admin/posts/new",icon: <PlusCircle size={16} /> },
    { label: "Activity",     href: "/admin/updates",   icon: <Activity size={16} /> },
    { label: "Portfolio",    href: "/admin/portfolio", icon: <Layers size={16} /> },
    { label: "Back to Site", href: "/",               icon: <ArrowLeft size={16} /> },
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
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
            style={{
              color: active === item.label ? "#ffffff" : "rgba(255,255,255,0.5)",
              background: active === item.label ? "rgba(255,255,255,0.1)" : "transparent",
            }}
          >
            {item.icon}
            {item.label}
          </a>
        ))}
      </nav>
      <div className="px-6 py-5 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>COADAL Admin v1.0</p>
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
  fontSize: "12px",
  fontWeight: 600,
  color: "rgba(13,13,13,0.5)",
  textTransform: "uppercase" as const,
  letterSpacing: "0.1em",
  display: "block",
  marginBottom: "6px",
};

export default function PostEditor({ postId }: { postId?: string }) {
  const isEdit = !!postId;
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [slugManual, setSlugManual] = useState(false);

  const [form, setForm] = useState<PostForm>({
    title: "",
    slug: "",
    category: CATEGORIES[0],
    tags: "",
    excerpt: "",
    coverColor: "#D8E63C",
    readTime: "5 min read",
    content: "",
    authorName: "",
    authorRole: "",
    featured: false,
    status: "published",
  });

  useEffect(() => {
    if (isEdit && postId) {
      fetch(`/api/posts/${postId}`)
        .then((r) => r.json())
        .then((data) => {
          setForm({
            title: data.title || "",
            slug: data.slug || "",
            category: data.category || CATEGORIES[0],
            tags: (data.tags || []).join(", "),
            excerpt: data.excerpt || "",
            coverColor: data.coverColor || "#D8E63C",
            readTime: data.readTime || "5 min read",
            content: data.content || "",
            authorName: data.author?.name || "",
            authorRole: data.author?.role || "",
            featured: data.featured || false,
            status: data.status || "published",
          });
          setSlugManual(true);
        });
    }
  }, [isEdit, postId]);

  const update = (key: keyof PostForm, val: string | boolean) => {
    setForm((prev) => {
      const next = { ...prev, [key]: val };
      if (key === "title" && !slugManual) {
        next.slug = slugify(val as string);
      }
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const initials = form.authorName
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    const payload = {
      title: form.title,
      slug: form.slug,
      category: form.category,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      excerpt: form.excerpt,
      coverColor: form.coverColor,
      readTime: form.readTime,
      content: form.content,
      author: { name: form.authorName, role: form.authorRole, initials },
      featured: form.featured,
      status: form.status,
      publishedAt: new Date().toISOString().split("T")[0],
    };

    const res = await fetch(isEdit ? `/api/posts/${postId}` : "/api/posts", {
      method: isEdit ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setSaved(true);
      setSaving(false);
      setTimeout(() => {
        window.location.href = "/admin";
      }, 1200);
    } else {
      setSaving(false);
      alert("Failed to save post. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar active={isEdit ? "All Posts" : "New Post"} />

      <main className="flex-1 overflow-auto" style={{ background: "#F0EEE9" }}>
        {/* Header */}
        <div className="px-10 py-8 border-b" style={{ background: "#ffffff", borderColor: "rgba(23,24,75,0.08)" }}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold" style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}>
                {isEdit ? "Edit Post" : "New Post"}
              </h1>
              <p className="text-sm mt-0.5" style={{ color: "rgba(13,13,13,0.45)" }}>
                {isEdit ? "Update your blog post" : "Create a new blog post"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/admin"
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-opacity hover:opacity-70"
                style={{ background: "#F0EEE9", color: "rgba(13,13,13,0.6)", border: "1px solid rgba(23,24,75,0.12)" }}
              >
                Cancel
              </a>
              <button
                type="submit"
                form="post-editor-form"
                disabled={saving}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-opacity hover:opacity-90 disabled:opacity-50"
                style={{ background: saved ? "#22c55e" : "#D8E63C", color: "#17184B" }}
              >
                <Save size={15} />
                {saving ? "Saving..." : saved ? "Saved!" : "Save Post"}
              </button>
            </div>
          </div>
        </div>

        <form id="post-editor-form" onSubmit={handleSubmit} className="px-10 py-8">
          <div className="flex gap-8 flex-col lg:flex-row">
            {/* Main form */}
            <div className="flex-1 min-w-0 flex flex-col gap-6">
              {/* Title */}
              <div className="rounded-2xl p-7" style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.08)" }}>
                <label style={labelStyle}>Title</label>
                <input
                  type="text"
                  required
                  placeholder="Enter post title..."
                  value={form.title}
                  onChange={(e) => update("title", e.target.value)}
                  style={{ ...inputStyle, fontSize: "20px", fontWeight: 700, fontFamily: "var(--font-syne)", padding: "12px 16px" }}
                />
              </div>

              {/* Slug */}
              <div className="rounded-2xl p-7" style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.08)" }}>
                <label style={labelStyle}>Slug</label>
                <div className="flex items-center gap-2">
                  <span className="text-sm" style={{ color: "rgba(13,13,13,0.4)" }}>/insights/</span>
                  <input
                    type="text"
                    required
                    placeholder="post-slug"
                    value={form.slug}
                    onChange={(e) => { setSlugManual(true); update("slug", e.target.value); }}
                    style={{ ...inputStyle, flex: 1 }}
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div className="rounded-2xl p-7" style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.08)" }}>
                <div className="flex items-center justify-between mb-1.5">
                  <label style={{ ...labelStyle, marginBottom: 0 }}>Excerpt</label>
                  <span className="text-xs" style={{ color: form.excerpt.length > 160 ? "#dc2626" : "rgba(13,13,13,0.35)" }}>
                    {form.excerpt.length}/160
                  </span>
                </div>
                <textarea
                  rows={3}
                  placeholder="Brief summary of the post (max 160 characters)..."
                  value={form.excerpt}
                  onChange={(e) => update("excerpt", e.target.value)}
                  maxLength={160}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              {/* Content */}
              <div className="rounded-2xl p-7" style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.08)" }}>
                <label style={labelStyle}>Content (HTML)</label>
                <p className="text-xs mb-3" style={{ color: "rgba(13,13,13,0.4)" }}>
                  Use HTML tags: &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;blockquote&gt;, &lt;strong&gt;
                </p>
                <textarea
                  rows={18}
                  required
                  placeholder="<h2>Section Title</h2><p>Your content here...</p>"
                  value={form.content}
                  onChange={(e) => update("content", e.target.value)}
                  style={{ ...inputStyle, resize: "vertical", fontFamily: "monospace", fontSize: "13px", lineHeight: "1.6" }}
                />
              </div>
            </div>

            {/* Sidebar fields */}
            <div className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-5">
              {/* Status & Featured */}
              <div className="rounded-2xl p-6" style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.08)" }}>
                <label style={labelStyle}>Status</label>
                <select
                  value={form.status}
                  onChange={(e) => update("status", e.target.value)}
                  style={{ ...inputStyle, marginBottom: "16px" }}
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) => update("featured", e.target.checked)}
                    className="w-4 h-4 rounded"
                    style={{ accentColor: "#D8E63C" }}
                  />
                  <span className="text-sm font-medium" style={{ color: "#0d0d0d" }}>Featured post</span>
                </label>
              </div>

              {/* Category */}
              <div className="rounded-2xl p-6" style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.08)" }}>
                <label style={labelStyle}>Category</label>
                <select
                  value={form.category}
                  onChange={(e) => update("category", e.target.value)}
                  style={inputStyle}
                >
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {/* Tags */}
              <div className="rounded-2xl p-6" style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.08)" }}>
                <label style={labelStyle}>Tags</label>
                <input
                  type="text"
                  placeholder="AI, Marketing, Growth"
                  value={form.tags}
                  onChange={(e) => update("tags", e.target.value)}
                  style={inputStyle}
                />
                <p className="text-xs mt-1.5" style={{ color: "rgba(13,13,13,0.35)" }}>Comma-separated</p>
              </div>

              {/* Cover Color */}
              <div className="rounded-2xl p-6" style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.08)" }}>
                <label style={labelStyle}>Cover Color</label>
                <div className="flex gap-2 mb-3">
                  {COVER_COLORS.map((c) => (
                    <button
                      key={c.value}
                      type="button"
                      onClick={() => update("coverColor", c.value)}
                      className="w-8 h-8 rounded-lg transition-transform hover:scale-110"
                      style={{
                        background: c.value,
                        outline: form.coverColor === c.value ? `2px solid #17184B` : "2px solid transparent",
                        outlineOffset: "2px",
                      }}
                      title={c.label}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={form.coverColor}
                    onChange={(e) => update("coverColor", e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer"
                    style={{ border: "none", padding: 0 }}
                  />
                  <input
                    type="text"
                    value={form.coverColor}
                    onChange={(e) => update("coverColor", e.target.value)}
                    style={{ ...inputStyle, width: "auto", flex: 1 }}
                    placeholder="#D8E63C"
                  />
                </div>
              </div>

              {/* Read Time */}
              <div className="rounded-2xl p-6" style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.08)" }}>
                <label style={labelStyle}>Read Time</label>
                <input
                  type="text"
                  placeholder="5 min read"
                  value={form.readTime}
                  onChange={(e) => update("readTime", e.target.value)}
                  style={inputStyle}
                />
              </div>

              {/* Author */}
              <div className="rounded-2xl p-6" style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.08)" }}>
                <label style={labelStyle}>Author</label>
                <input
                  type="text"
                  placeholder="Author name"
                  value={form.authorName}
                  onChange={(e) => update("authorName", e.target.value)}
                  style={{ ...inputStyle, marginBottom: "10px" }}
                />
                <input
                  type="text"
                  placeholder="Author role"
                  value={form.authorRole}
                  onChange={(e) => update("authorRole", e.target.value)}
                  style={inputStyle}
                />
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
