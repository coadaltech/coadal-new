import { NextRequest } from "next/server";
import { getDB } from "@/lib/db";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const sql = await getDB();
    const rows = await sql`
      SELECT data FROM posts WHERE id = ${id} OR slug = ${id}
    `;
    if (!rows.length) return Response.json({ error: "Post not found" }, { status: 404 });
    return Response.json(rows[0].data);
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
    const sql = await getDB();
    const rows = await sql`SELECT data FROM posts WHERE id = ${id}`;
    if (!rows.length) return Response.json({ error: "Post not found" }, { status: 404 });
    const updated = { ...rows[0].data, ...body, id };
    await sql`
      UPDATE posts
      SET data = ${JSON.stringify(updated)},
          slug = ${updated.slug ?? id},
          published_at = ${updated.publishedAt ?? null}
      WHERE id = ${id}
    `;
    return Response.json(updated);
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
    const sql = await getDB();
    const result = await sql`DELETE FROM posts WHERE id = ${id} RETURNING id`;
    if (!result.length) return Response.json({ error: "Post not found" }, { status: 404 });
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
