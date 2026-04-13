import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/data/posts.json");

function readPosts() {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

function writePosts(posts: unknown[]) {
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), "utf-8");
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const posts = readPosts();
    const post = posts.find((p: { id: string; slug: string }) => p.id === id || p.slug === id);
    if (!post) return Response.json({ error: "Post not found" }, { status: 404 });
    return Response.json(post);
  } catch {
    return Response.json({ error: "Failed to read post" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const posts = readPosts();
    const index = posts.findIndex((p: { id: string }) => p.id === id);
    if (index === -1) return Response.json({ error: "Post not found" }, { status: 404 });
    posts[index] = { ...posts[index], ...body, id };
    writePosts(posts);
    return Response.json(posts[index]);
  } catch {
    return Response.json({ error: "Failed to update post" }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const posts = readPosts();
    const filtered = posts.filter((p: { id: string }) => p.id !== id);
    if (filtered.length === posts.length) {
      return Response.json({ error: "Post not found" }, { status: 404 });
    }
    writePosts(filtered);
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
