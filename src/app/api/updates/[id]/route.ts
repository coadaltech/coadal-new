import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/data/updates.json");

function readUpdates() {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}
function writeUpdates(data: unknown[]) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const all = readUpdates();
    const item = all.find((u: { id: string }) => u.id === id);
    if (!item) return Response.json({ error: "Not found" }, { status: 404 });
    return Response.json(item);
  } catch {
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const all = readUpdates();
    const idx = all.findIndex((u: { id: string }) => u.id === id);
    if (idx === -1) return Response.json({ error: "Not found" }, { status: 404 });
    all[idx] = { ...all[idx], ...body, id };
    writeUpdates(all);
    return Response.json(all[idx]);
  } catch {
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const all = readUpdates();
    const filtered = all.filter((u: { id: string }) => u.id !== id);
    if (filtered.length === all.length) return Response.json({ error: "Not found" }, { status: 404 });
    writeUpdates(filtered);
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
