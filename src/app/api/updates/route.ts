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

export async function GET() {
  try {
    return Response.json(readUpdates());
  } catch {
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const updates = readUpdates();
    const item = { ...body, id: Date.now().toString(), date: body.date || new Date().toISOString().split("T")[0] };
    updates.unshift(item);
    writeUpdates(updates);
    return Response.json(item, { status: 201 });
  } catch {
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
