import { NextRequest } from "next/server";
import { getDB } from "@/lib/db";

const VALID_TYPES = new Set(["websites", "apps", "creatives", "reels"]);

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type") ?? "";
  if (!VALID_TYPES.has(type)) return Response.json({ error: "Invalid type" }, { status: 400 });
  try {
    const sql = await getDB();
    const rows = await sql`
      SELECT data FROM portfolio_items
      WHERE type = ${type}
      ORDER BY created_at ASC
    `;
    return Response.json(rows.map((r) => r.data));
  } catch {
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type") ?? "";
  if (!VALID_TYPES.has(type)) return Response.json({ error: "Invalid type" }, { status: 400 });
  try {
    const body = await request.json();
    const id = Date.now().toString();
    const item = { ...body, id };
    const sql = await getDB();
    await sql`
      INSERT INTO portfolio_items (id, type, data)
      VALUES (${id}, ${type}, ${JSON.stringify(item)})
    `;
    return Response.json(item, { status: 201 });
  } catch {
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type") ?? "";
  const id   = request.nextUrl.searchParams.get("id") ?? "";
  if (!VALID_TYPES.has(type)) return Response.json({ error: "Invalid type" }, { status: 400 });
  try {
    const body = await request.json();
    const sql = await getDB();
    const rows = await sql`SELECT data FROM portfolio_items WHERE id = ${id} AND type = ${type}`;
    if (!rows.length) return Response.json({ error: "Not found" }, { status: 404 });
    const updated = { ...rows[0].data, ...body, id };
    await sql`
      UPDATE portfolio_items SET data = ${JSON.stringify(updated)}
      WHERE id = ${id} AND type = ${type}
    `;
    return Response.json(updated);
  } catch {
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type") ?? "";
  const id   = request.nextUrl.searchParams.get("id") ?? "";
  if (!VALID_TYPES.has(type)) return Response.json({ error: "Invalid type" }, { status: 400 });
  try {
    const sql = await getDB();
    await sql`DELETE FROM portfolio_items WHERE id = ${id} AND type = ${type}`;
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
