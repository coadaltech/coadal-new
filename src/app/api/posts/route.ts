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

export async function GET() {
  try {
    const posts = readPosts();
    return Response.json(posts);
  } catch {
    return Response.json({ error: "Failed to read posts" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const posts = readPosts();
    const newPost = {
      ...body,
      id: Date.now().toString(),
      publishedAt: body.publishedAt || new Date().toISOString().split("T")[0],
    };
    posts.push(newPost);
    writePosts(posts);
    return Response.json(newPost, { status: 201 });
  } catch {
    return Response.json({ error: "Failed to create post" }, { status: 500 });
  }
}
