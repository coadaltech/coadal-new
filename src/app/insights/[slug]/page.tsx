"use client";
import { use, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Share2, Link2, Clock, Calendar } from "lucide-react";

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: { name: string; role: string; initials: string };
  coverColor: string;
  readTime: string;
  publishedAt: string;
  featured: boolean;
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

function extractH2s(html: string): string[] {
  const matches = html.match(/<h2[^>]*>(.*?)<\/h2>/g) || [];
  return matches.map((m) => m.replace(/<[^>]+>/g, ""));
}

function RelatedCard({ post }: { post: Post }) {
  return (
    <a href={`/insights/${post.slug}`} className="block rounded-xl overflow-hidden border hover:shadow-md transition-all" style={{ background: "#ffffff", borderColor: "rgba(23,24,75,0.09)" }}>
      <div className="h-2 w-full" style={{ background: post.coverColor }} />
      <div className="p-5">
        <span className="text-xs font-semibold" style={{ color: "rgba(13,13,13,0.45)" }}>{post.category}</span>
        <h4 className="font-bold text-sm mt-1 mb-2 leading-snug line-clamp-2" style={{ color: "#0d0d0d" }}>{post.title}</h4>
        <span className="text-xs" style={{ color: "rgba(13,13,13,0.4)" }}>{post.readTime}</span>
      </div>
    </a>
  );
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [post, setPost] = useState<Post | null>(null);
  const [related, setRelated] = useState<Post[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((r) => r.json())
      .then((data: Post[]) => {
        setAllPosts(data);
        const found = data.find((p) => p.slug === slug || p.id === slug);
        if (found) {
          setPost(found);
          setRelated(data.filter((p) => p.id !== found.id && p.category === found.category).slice(0, 2));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div style={{ background: "#F0EEE9", minHeight: "100vh" }}>
        <Navbar />
        <div className="pt-28 text-center" style={{ color: "rgba(13,13,13,0.4)" }}>Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div style={{ background: "#F0EEE9", minHeight: "100vh" }}>
        <Navbar />
        <div className="pt-28 text-center">
          <h1 className="text-2xl font-bold" style={{ color: "#0d0d0d" }}>Post not found</h1>
          <a href="/insights" className="mt-4 inline-block text-sm underline" style={{ color: "#17184B" }}>← Back to Insights</a>
        </div>
      </div>
    );
  }

  const headings = extractH2s(post.content);
  const moreArticles = allPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div style={{ background: "#F0EEE9", minHeight: "100vh" }}>
      <Navbar />

      {/* Post Hero */}
      <section className="pt-14" style={{ background: "#F0EEE9" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">
          <a href="/insights" className="inline-flex items-center gap-2 text-sm mb-8 hover:opacity-70 transition-opacity" style={{ color: "rgba(13,13,13,0.5)" }}>
            <ArrowLeft size={14} /> Back to Insights
          </a>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6" style={{ background: post.coverColor + "30", color: post.coverColor === "#D8E63C" ? "#5a6300" : post.coverColor === "#17184B" ? "#17184B" : "#6b21a8" }}>
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: "#0d0d0d", fontFamily: "var(--font-syne)" }}>
              {post.title}
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(13,13,13,0.55)" }}>{post.excerpt}</p>
            {/* Author row */}
            <div className="flex flex-wrap items-center gap-5 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "linear-gradient(135deg,#D8E63C,#D6B4FC)", color: "#17184B" }}>
                  {post.author.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#0d0d0d" }}>{post.author.name}</p>
                  <p className="text-xs" style={{ color: "rgba(13,13,13,0.4)" }}>{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(13,13,13,0.45)" }}>
                <Calendar size={12} /> {formatDate(post.publishedAt)}
              </div>
              <div className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(13,13,13,0.45)" }}>
                <Clock size={12} /> {post.readTime}
              </div>
            </div>
            {/* Cover bar */}
            <div className="h-1.5 rounded-full w-full" style={{ background: `linear-gradient(90deg, ${post.coverColor}, ${post.coverColor === "#D8E63C" ? "#D6B4FC" : "#D8E63C"})` }} />
          </div>
        </div>
      </section>

      {/* Article + Sidebar */}
      <section className="py-10 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex gap-14 flex-col lg:flex-row">
          {/* Article */}
          <article className="flex-1 min-w-0">
            <div
              className="prose-content rounded-2xl p-8 md:p-10"
              style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.07)" }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: "#F0EEE9", color: "#17184B", border: "1px solid rgba(23,24,75,0.12)" }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Share */}
            <div className="flex items-center gap-4 mt-8">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(13,13,13,0.35)" }}>Share</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-70 text-xs font-black"
                style={{ background: "#0d0d0d", color: "#ffffff" }}
                title="Share on X"
              >
                𝕏
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
                style={{ background: "#0077b5", color: "#ffffff" }}
                title="Share on LinkedIn"
              >
                <Share2 size={14} />
              </a>
              <button
                onClick={copyLink}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
                style={{ background: "#F0EEE9", color: "#17184B", border: "1px solid rgba(23,24,75,0.12)" }}
              >
                <Link2 size={15} />
              </button>
              {copied && <span className="text-xs" style={{ color: "#D8E63C" }}>Copied!</span>}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="sticky top-20 flex flex-col gap-6">
              {/* Table of Contents */}
              {headings.length > 0 && (
                <div className="rounded-2xl p-6" style={{ background: "#ffffff", border: "1px solid rgba(23,24,75,0.09)" }}>
                  <h3 className="font-bold text-sm mb-4" style={{ color: "#0d0d0d" }}>In This Article</h3>
                  <ul className="flex flex-col gap-2.5">
                    {headings.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: "#D8E63C" }} />
                        <span className="text-xs leading-relaxed" style={{ color: "rgba(13,13,13,0.55)" }}>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Author Card */}
              <div className="rounded-2xl p-6" style={{ background: "#17184B" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-base font-bold flex-shrink-0" style={{ background: "linear-gradient(135deg,#D8E63C,#D6B4FC)", color: "#17184B" }}>
                    {post.author.initials}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white">{post.author.name}</p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{post.author.role}</p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Part of the COADAL team — building AI-powered products and marketing systems for ambitious brands.
                </p>
              </div>

              {/* Related Posts */}
              {related.length > 0 && (
                <div>
                  <h3 className="font-bold text-sm mb-4" style={{ color: "#0d0d0d" }}>Related Posts</h3>
                  <div className="flex flex-col gap-3">
                    {related.map((p) => <RelatedCard key={p.id} post={p} />)}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* More Articles */}
      {moreArticles.length > 0 && (
        <section className="py-20 px-6 md:px-10" style={{ background: "#ffffff" }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-10" style={{ color: "#0d0d0d" }}>Read More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {moreArticles.map((p) => (
                <a
                  key={p.id}
                  href={`/insights/${p.slug}`}
                  className="block rounded-2xl overflow-hidden border hover:shadow-md transition-all"
                  style={{ background: "#F0EEE9", borderColor: "rgba(23,24,75,0.09)" }}
                >
                  <div className="h-2 w-full" style={{ background: p.coverColor }} />
                  <div className="p-6">
                    <span className="text-xs font-semibold" style={{ color: "rgba(13,13,13,0.45)" }}>{p.category}</span>
                    <h4 className="font-bold mt-1 mb-2 text-base leading-snug" style={{ color: "#0d0d0d" }}>{p.title}</h4>
                    <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "rgba(13,13,13,0.5)" }}>{p.excerpt}</p>
                    <p className="text-xs mt-3" style={{ color: "rgba(13,13,13,0.35)" }}>{p.readTime}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />

      <style>{`
        .prose-content h2 {
          font-family: var(--font-syne), system-ui, sans-serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #0d0d0d;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .prose-content p {
          color: rgba(13,13,13,0.7);
          line-height: 1.8;
          margin-bottom: 1.25rem;
          font-size: 1rem;
        }
        .prose-content ul {
          margin: 1.25rem 0;
          padding-left: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .prose-content li {
          color: rgba(13,13,13,0.7);
          line-height: 1.7;
          font-size: 1rem;
        }
        .prose-content blockquote {
          border-left: 3px solid #D8E63C;
          margin: 2rem 0;
          padding: 1rem 1.5rem;
          background: rgba(216,230,60,0.07);
          border-radius: 0 12px 12px 0;
          font-style: italic;
          color: rgba(13,13,13,0.6);
          font-size: 1rem;
          line-height: 1.7;
        }
        .prose-content strong {
          color: #0d0d0d;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
