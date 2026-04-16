import { NextRequest } from "next/server";
import { getDB } from "@/lib/db";

export async function GET() {
  try {
    const sql = await getDB();
    const rows = await sql`
      SELECT data FROM posts
      ORDER BY published_at DESC, created_at DESC
    `;
    return Response.json(rows.map((r) => r.data));
  } catch {
    return Response.json({ error: "Failed to read posts" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const id = Date.now().toString();
    const publishedAt = body.publishedAt || new Date().toISOString().split("T")[0];
    const slug = body.slug || id;
    const newPost = { ...body, id, publishedAt, slug };
    const sql = await getDB();
    await sql`
      INSERT INTO posts (id, slug, data, published_at)
      VALUES (${id}, ${slug}, ${JSON.stringify(newPost)}, ${publishedAt})
    `;
    return Response.json(newPost, { status: 201 });
  } catch {
    return Response.json({ error: "Failed to create post" }, { status: 500 });
  }
}
