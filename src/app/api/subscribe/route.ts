import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

const filePath = path.join(process.cwd(), "src/data/subscribers.json");

function readSubs(): { email: string; date: string }[] {
  try { return JSON.parse(fs.readFileSync(filePath, "utf-8")); }
  catch { return []; }
}
function writeSubs(data: { email: string; date: string }[]) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

export async function POST(request: NextRequest) {
  const { email } = await request.json();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  const subs = readSubs();
  if (subs.find(s => s.email === email)) {
    return Response.json({ error: "Already subscribed" }, { status: 409 });
  }

  subs.push({ email, date: new Date().toISOString() });
  writeSubs(subs);

  // Notify via Gmail
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
    });
    await transporter.sendMail({
      from: `"COADAL Website" <${process.env.GMAIL_USER}>`,
      to: "coadaltechnology@gmail.com",
      replyTo: email,
      subject: `New Newsletter Subscriber — ${email}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:480px;margin:32px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <div style="background:#17184B;padding:24px 28px;">
            <div style="font-size:20px;font-weight:900;color:#ffffff;letter-spacing:0.18em;">COADAL</div>
            <div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;">New Newsletter Subscriber</div>
          </div>
          <div style="height:4px;background:linear-gradient(90deg,#D8E63C,#D6B4FC);"></div>
          <div style="padding:28px;">
            <p style="font-size:15px;color:#0d0d0d;margin:0 0 12px;">New subscriber joined your newsletter:</p>
            <div style="background:#F0EEE9;border-radius:10px;padding:14px 18px;font-size:16px;font-weight:700;color:#17184B;">${email}</div>
            <p style="font-size:12px;color:rgba(0,0,0,0.4);margin-top:10px;">Total subscribers: <strong>${subs.length}</strong></p>
            <div style="margin-top:20px;text-align:center;">
              <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#D8E63C,#c8d430);color:#17184B;font-weight:700;font-size:13px;padding:10px 24px;border-radius:100px;text-decoration:none;">Reply to Subscriber</a>
            </div>
          </div>
          <div style="background:#f8f7f3;padding:14px 28px;text-align:center;border-top:1px solid rgba(0,0,0,0.05);">
            <div style="font-size:11px;color:rgba(0,0,0,0.30);">© ${new Date().getFullYear()} COADAL Technologies Pvt. Ltd.</div>
          </div>
        </div>
      `,
    });
  } catch { /* email notification failed — subscription still saved */ }

  return Response.json({ success: true, total: subs.length });
}

export async function GET() {
  return Response.json(readSubs());
}
