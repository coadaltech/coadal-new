import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

const FILES: Record<string, string> = {
  websites:  "src/data/portfolio-websites.json",
  apps:      "src/data/portfolio-apps.json",
  creatives: "src/data/portfolio-creatives.json",
  reels:     "src/data/portfolio-reels.json",
};

function getPath(type: string) {
  return path.join(process.cwd(), FILES[type]);
}

function read(type: string) {
  return JSON.parse(fs.readFileSync(getPath(type), "utf-8"));
}
function write(type: string, data: unknown[]) {
  fs.writeFileSync(getPath(type), JSON.stringify(data, null, 2), "utf-8");
}

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type") ?? "";
  if (!FILES[type]) return Response.json({ error: "Invalid type" }, { status: 400 });
  try { return Response.json(read(type)); }
  catch { return Response.json({ error: "Failed" }, { status: 500 }); }
}

export async function POST(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type") ?? "";
  if (!FILES[type]) return Response.json({ error: "Invalid type" }, { status: 400 });
  try {
    const body = await request.json();
    const items = read(type);
    const item = { ...body, id: Date.now().toString() };
    items.push(item);
    write(type, items);
    return Response.json(item, { status: 201 });
  } catch { return Response.json({ error: "Failed" }, { status: 500 }); }
}

export async function PUT(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type") ?? "";
  const id   = request.nextUrl.searchParams.get("id") ?? "";
  if (!FILES[type]) return Response.json({ error: "Invalid type" }, { status: 400 });
  try {
    const body = await request.json();
    const items = read(type);
    const idx = items.findIndex((x: { id: string }) => x.id === id);
    if (idx === -1) return Response.json({ error: "Not found" }, { status: 404 });
    items[idx] = { ...items[idx], ...body, id };
    write(type, items);
    return Response.json(items[idx]);
  } catch { return Response.json({ error: "Failed" }, { status: 500 }); }
}

export async function DELETE(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type") ?? "";
  const id   = request.nextUrl.searchParams.get("id") ?? "";
  if (!FILES[type]) return Response.json({ error: "Invalid type" }, { status: 400 });
  try {
    const items = read(type);
    const filtered = items.filter((x: { id: string }) => x.id !== id);
    write(type, filtered);
    return Response.json({ success: true });
  } catch { return Response.json({ error: "Failed" }, { status: 500 }); }
}
