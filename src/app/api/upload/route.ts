import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const folder = (formData.get("folder") as string | null) ?? "updates";
    if (!file) return Response.json({ error: "No file" }, { status: 400 });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = file.name.split(".").pop() ?? "jpg";
    const fileName = `${Date.now()}.${ext}`;
    const uploadDir = path.join(process.cwd(), `public/uploads/${folder}`);

    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    fs.writeFileSync(path.join(uploadDir, fileName), buffer);
    return Response.json({ url: `/uploads/${folder}/${fileName}` });
  } catch {
    return Response.json({ error: "Upload failed" }, { status: 500 });
  }
}
