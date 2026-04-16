import { NextRequest } from "next/server";
import { getDB } from "@/lib/db";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const sql = await getDB();
    const rows = await sql`SELECT data FROM updates WHERE id = ${id}`;
    if (!rows.length) return Response.json({ error: "Not found" }, { status: 404 });
    return Response.json(rows[0].data);
  } catch {
    return Response.json({ error: "Failed" }, { status: 500 });
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
    const rows = await sql`SELECT data FROM updates WHERE id = ${id}`;
    if (!rows.length) return Response.json({ error: "Not found" }, { status: 404 });
    const updated = { ...rows[0].data, ...body, id };
    await sql`
      UPDATE updates SET data = ${JSON.stringify(updated)}, date = ${updated.date ?? null}
      WHERE id = ${id}
    `;
    return Response.json(updated);
  } catch {
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const sql = await getDB();
    const result = await sql`DELETE FROM updates WHERE id = ${id} RETURNING id`;
    if (!result.length) return Response.json({ error: "Not found" }, { status: 404 });
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
