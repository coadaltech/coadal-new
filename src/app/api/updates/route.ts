import { NextRequest } from "next/server";
import { getDB } from "@/lib/db";

export async function GET() {
  try {
    const sql = await getDB();
    const rows = await sql`
      SELECT data FROM updates
      ORDER BY created_at DESC
    `;
    return Response.json(rows.map((r) => r.data));
  } catch {
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const id = Date.now().toString();
    const date = body.date || new Date().toISOString().split("T")[0];
    const item = { ...body, id, date };
    const sql = await getDB();
    await sql`
      INSERT INTO updates (id, data, date)
      VALUES (${id}, ${JSON.stringify(item)}, ${date})
    `;
    return Response.json(item, { status: 201 });
  } catch {
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
