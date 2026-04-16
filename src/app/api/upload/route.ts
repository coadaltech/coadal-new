import { NextRequest } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const folder = (formData.get("folder") as string | null) ?? "updates";
    if (!file) return Response.json({ error: "No file" }, { status: 400 });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise<{ secure_url: string }>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: `coadal/${folder}`,
          resource_type: "auto",
        },
        (error, result) => {
          if (error || !result) return reject(error ?? new Error("Upload failed"));
          resolve(result);
        }
      );
      stream.end(buffer);
    });

    return Response.json({ url: result.secure_url });
  } catch (err) {
    console.error("Upload error:", err);
    return Response.json({ error: "Upload failed" }, { status: 500 });
  }
}
