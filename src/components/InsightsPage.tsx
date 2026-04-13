"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Mail } from "lucide-react";

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: { name: string; role: string; initials: string };
  coverColor: string;
  readTime: string;
  publishedAt: string;
  featured: boolean;
}

const categories = ["All", "AI & Marketing", "Development", "Startup Growth", "SEO", "Performance Ads"];

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function BlogCard({ post, large = false }: { post: Post; large?: boolean }) {
  return (
    <a
      href={`/insights/${post.slug}`}
      className={`group block rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${large ? "" : ""}`}
      style={{ background: "#ffffff", borderColor: "rgba(23,24,75,0.09)" }}
    >
      {/* Cover strip */}
      <div className={`${large ? "h-4" : "h-3"} w-full`} style={{ background: post.coverColor }} />
      <div className={`p-${large ? "8" : "6"} flex flex-col gap-4`}>
        {/* Category */}
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold self-start" style={{ background: post.coverColor + "25", color: post.coverColor === "#D8E63C" ? "#5a6300" : post.coverColor === "#17184B" ? "#17184B" : "#6b21a8" }}>
          {post.category}
        </span>
        {/* Title */}
        <h3 className={`font-bold leading-snug ${large ? "text-2xl md:text-3xl" : "text-lg"} group-hover:opacity-80 transition-opacity`} style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}>
          {post.title}
        </h3>
        {/* Excerpt */}
        <p className={`text-sm leading-relaxed ${large ? "" : "line-clamp-2"}`} style={{ color: "rgba(13,13,13,0.55)" }}>
          {post.excerpt}
        </p>
        {/* Meta */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t" style={{ borderColor: "rgba(23,24,75,0.07)" }}>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: "linear-gradient(135deg,#D8E63C,#D6B4FC)", color: "#17184B" }}>
              {post.author.initials}
            </div>
            <div>
              <p className="text-xs font-medium" style={{ color: "#0d0d0d" }}>{post.author.name}</p>
              <p className="text-xs" style={{ color: "rgba(13,13,13,0.4)" }}>{formatDate(post.publishedAt)}</p>
            </div>
          </div>
          <span className="text-xs" style={{ color: "rgba(13,13,13,0.4)" }}>{post.readTime}</span>
        </div>
        <span className="flex items-center gap-1 text-xs font-semibold transition-colors" style={{ color: "#17184B" }}>
          Read More <ArrowRight size={12} />
        </span>
      </div>
    </a>
  );
}

export default function InsightsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subLoading, setSubLoading] = useState(false);
  const [subError, setSubError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((r) => r.json())
      .then((data) => { setPosts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  const featured = filtered.find((p) => p.featured) || filtered[0];
  const rest = filtered.filter((p) => p.id !== featured?.id);

  const allTags = [...new Set(posts.flatMap((p) => p.tags))];

  return (
    <div style={{ background: "#F0EEE9", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-14" style={{ background: "#F0EEE9" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-12">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label mb-4 block">The COADAL Blog</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: "#0d0d0d" }}>
              Insights &{" "}
              <span className="gradient-text-dark">Perspectives</span>
            </h1>
            <p className="text-lg max-w-xl" style={{ color: "rgba(13,13,13,0.5)" }}>
              Practical guides on AI, growth, and product from a team that ships for a living.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  background: activeCategory === cat ? "#17184B" : "#ffffff",
                  color: activeCategory === cat ? "#ffffff" : "rgba(13,13,13,0.55)",
                  border: `1px solid ${activeCategory === cat ? "#17184B" : "rgba(23,24,75,0.12)"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-6 md:px-10 max-w-7xl mx-auto">
        {loading ? (
          <div className="text-center py-20" style={{ color: "rgba(13,13,13,0.4)" }}>Loading posts...</div>
        ) : (
          <div className="flex gap-10 flex-col lg:flex-row">
            {/* Posts */}
            <div className="flex-1 min-w-0">
              {/* Featured */}
              {featured && (
                <div className="mb-8">
                  <BlogCard post={featured} large />
                </div>
              )}

              {/* Grid */}
              {rest.length > 0 && (
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={{ show: { transition: { staggerChildren: 0.08 } } }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {rest.map((post) => (
                    <motion.div key={post.id} variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}>
                      <BlogCard post={post} />
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {filtered.length === 0 && !loading && (
                <div className="text-center py-20" style={{ color: "rgba(13,13,13,0.4)" }}>
                  No posts in this category yet.
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-6">
              {/* Subscribe */}
              <div className="rounded-2xl p-6" style={{ background: "#17184B" }}>
                <h3 className="font-bold text-white mb-2 text-lg">Stay in the loop</h3>
                <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Get the latest insights on AI, growth, and dev — straight to your inbox.
                </p>
                {subscribed ? (
                  <p className="text-sm font-semibold" style={{ color: "#D8E63C" }}>You're subscribed!</p>
                ) : (
                  <div className="flex flex-col gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.08)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.12)" }}
                    />
                    <button
                      disabled={subLoading}
                      onClick={async () => {
                        if (!email) return;
                        setSubLoading(true); setSubError("");
                        const res = await fetch("/api/subscribe", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ email }),
                        });
                        setSubLoading(false);
                        if (res.ok) { setSubscribed(true); }
                        else if (res.status === 409) { setSubscribed(true); } // already subscribed
                        else { setSubError("Something went wrong. Try again."); }
                      }}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                      style={{ background: "#D8E63C", color: "#17184B" }}
                    >
                      <Mail size={14} /> Subscribe
                    </button>
                    {subError && (
                      <p style={{ fontSize: 11, color: "#ff6b6b", marginTop: 4, fontFamily: "var(--font-inter)" }}>
                        {subError}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Popular Tags */}
              <div className="rounded-2xl p-6" style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.09)" }}>
                <h3 className="font-bold mb-4 text-base" style={{ color: "#0d0d0d" }}>Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:opacity-80 transition-opacity"
                      style={{ background: "#F0EEE9", color: "#17184B", border: "1px solid rgba(23,24,75,0.12)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Browse categories */}
              <div className="rounded-2xl p-6" style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.09)" }}>
                <h3 className="font-bold mb-4 text-base" style={{ color: "#0d0d0d" }}>Browse Categories</h3>
                <ul className="flex flex-col gap-2">
                  {categories.slice(1).map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className="text-sm hover:opacity-70 transition-opacity text-left"
                        style={{ color: activeCategory === cat ? "#17184B" : "rgba(13,13,13,0.55)", fontWeight: activeCategory === cat ? 600 : 400 }}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        )}
      </section>

      <div className="pb-16" />
      <Footer />
    </div>
  );
}
