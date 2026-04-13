"use client";
import { useState, useEffect } from "react";
import { LayoutDashboard, FileText, PlusCircle, ArrowLeft, Trash2, Edit2, BookOpen, FileCheck, Eye, LogOut, Activity, Layers } from "lucide-react";

interface Post {
  id: string;
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  featured: boolean;
  status?: string;
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
      <div className="px-4 py-5 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <button
          onClick={async () => {
            await fetch("/api/admin/logout", { method: "POST" });
            window.location.href = "/admin/login";
          }}
          className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:bg-red-500/10"
          style={{ color: "rgba(255,100,100,0.70)" }}
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default function AdminDashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((r) => r.json())
      .then((data) => { setPosts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const deletePost = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post? This cannot be undone.")) return;
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const stats = [
    { label: "Total Posts", value: posts.length, icon: <FileText size={20} />, accent: "#D8E63C" },
    { label: "Published", value: posts.filter((p) => !p.status || p.status === "published").length, icon: <FileCheck size={20} />, accent: "#D6B4FC" },
    { label: "Drafts", value: posts.filter((p) => p.status === "draft").length, icon: <BookOpen size={20} />, accent: "#D8E63C" },
    { label: "Total Reads", value: "2,847", icon: <Eye size={20} />, accent: "#D6B4FC" },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar active="Dashboard" />

      <main className="flex-1 overflow-auto" style={{ background: "#F0EEE9" }}>
        {/* Header */}
        <div className="px-10 py-8 border-b" style={{ background: "#ffffff", borderColor: "rgba(23,24,75,0.08)" }}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold" style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}>Dashboard</h1>
              <p className="text-sm mt-0.5" style={{ color: "rgba(13,13,13,0.45)" }}>Manage your blog content</p>
            </div>
            <a
              href="/admin/posts/new"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-opacity hover:opacity-90"
              style={{ background: "#D8E63C", color: "#17184B" }}
            >
              <PlusCircle size={16} /> New Post
            </a>
          </div>
        </div>

        <div className="px-10 py-8">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl p-6" style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.08)" }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: s.accent + "20", color: s.accent === "#D8E63C" ? "#5a6300" : s.accent }}>
                    {s.icon}
                  </div>
                </div>
                <p className="text-3xl font-black" style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}>{s.value}</p>
                <p className="text-xs mt-1" style={{ color: "rgba(13,13,13,0.45)" }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Posts Table */}
          <div className="rounded-2xl overflow-hidden" style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.08)" }}>
            <div className="px-7 py-5 border-b flex items-center justify-between" style={{ borderColor: "rgba(23,24,75,0.07)" }}>
              <h2 className="font-bold text-base" style={{ color: "#0d0d0d" }}>All Posts</h2>
              <span className="text-xs px-3 py-1 rounded-full" style={{ background: "#F0EEE9", color: "rgba(13,13,13,0.5)" }}>
                {posts.length} posts
              </span>
            </div>
            {loading ? (
              <div className="py-16 text-center" style={{ color: "rgba(13,13,13,0.4)" }}>Loading...</div>
            ) : posts.length === 0 ? (
              <div className="py-16 text-center">
                <p style={{ color: "rgba(13,13,13,0.4)" }}>No posts yet.</p>
                <a href="/admin/posts/new" className="text-sm font-semibold mt-2 block" style={{ color: "#17184B" }}>Create your first post →</a>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(23,24,75,0.07)" }}>
                      {["Title", "Category", "Date", "Status", "Actions"].map((h) => (
                        <th key={h} className="px-7 py-3.5 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(13,13,13,0.35)" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post, i) => (
                      <tr
                        key={post.id}
                        style={{ borderBottom: i < posts.length - 1 ? "1px solid rgba(23,24,75,0.05)" : "none" }}
                      >
                        <td className="px-7 py-4">
                          <div>
                            <p className="font-medium text-sm line-clamp-1" style={{ color: "#0d0d0d" }}>{post.title}</p>
                            <p className="text-xs mt-0.5" style={{ color: "rgba(13,13,13,0.35)" }}>/{post.slug}</p>
                          </div>
                        </td>
                        <td className="px-7 py-4">
                          <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: "#F0EEE9", color: "#17184B" }}>
                            {post.category}
                          </span>
                        </td>
                        <td className="px-7 py-4 text-sm" style={{ color: "rgba(13,13,13,0.5)" }}>
                          {new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </td>
                        <td className="px-7 py-4">
                          <span
                            className="px-3 py-1 rounded-full text-xs font-semibold"
                            style={{
                              background: post.status === "draft" ? "rgba(13,13,13,0.07)" : "rgba(216,230,60,0.2)",
                              color: post.status === "draft" ? "rgba(13,13,13,0.5)" : "#5a6300",
                            }}
                          >
                            {post.status === "draft" ? "Draft" : "Published"}
                          </span>
                        </td>
                        <td className="px-7 py-4">
                          <div className="flex items-center gap-2">
                            <a
                              href={`/admin/posts/${post.id}/edit`}
                              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:opacity-70"
                              style={{ background: "#F0EEE9", color: "#17184B" }}
                            >
                              <Edit2 size={14} />
                            </a>
                            <button
                              onClick={() => deletePost(post.id)}
                              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:opacity-70"
                              style={{ background: "rgba(239,68,68,0.1)", color: "#dc2626" }}
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
