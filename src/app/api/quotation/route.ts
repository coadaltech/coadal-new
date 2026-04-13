import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, company, email, phone, referral, services, addons, timeline, budget, projectDesc } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #f0eee9;width:140px;font-size:12px;color:rgba(0,0,0,0.40);text-transform:uppercase;letter-spacing:0.1em;font-weight:600;">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #f0eee9;font-size:14px;color:#0d0d0d;">${value}</td>
    </tr>`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:0;margin:0;">
      <div style="max-width:600px;margin:32px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <div style="background:#17184B;padding:28px 32px;text-align:center;">
          <div style="font-size:22px;font-weight:900;color:#ffffff;letter-spacing:0.18em;">COADAL</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.45);margin-top:4px;">New Project Quotation Request</div>
        </div>
        <div style="height:4px;background:linear-gradient(90deg,#D8E63C,#D6B4FC);"></div>

        <div style="padding:32px;">
          <h2 style="font-size:18px;color:#0d0d0d;margin:0 0 24px 0;">New quotation request received!</h2>

          <table style="width:100%;border-collapse:collapse;">
            ${row("Name", name || "—")}
            ${row("Company", company || "—")}
            ${row("Email", email || "—")}
            ${row("Phone", phone || "—")}
            ${row("Budget", budget || "—")}
            ${row("Timeline", timeline || "—")}
            ${row("Services", Array.isArray(services) && services.length ? services.join(", ") : "—")}
            ${row("Add-ons", Array.isArray(addons) && addons.length ? addons.join(", ") : "None")}
            ${row("Referral", referral || "—")}
          </table>

          <div style="margin-top:24px;">
            <div style="font-size:12px;color:rgba(0,0,0,0.40);text-transform:uppercase;letter-spacing:0.1em;font-weight:600;margin-bottom:10px;">Project Description</div>
            <div style="background:#f8f7f3;border-radius:8px;padding:16px;font-size:14px;color:#0d0d0d;line-height:1.7;white-space:pre-wrap;">${projectDesc || "—"}</div>
          </div>

          <div style="margin-top:28px;text-align:center;">
            <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#D8E63C,#c8d430);color:#17184B;font-weight:700;font-size:14px;padding:12px 28px;border-radius:100px;text-decoration:none;">
              Reply to ${name || "Client"}
            </a>
          </div>
        </div>

        <div style="background:#f8f7f3;padding:16px 32px;text-align:center;border-top:1px solid rgba(0,0,0,0.05);">
          <div style="font-size:11px;color:rgba(0,0,0,0.30);">© ${new Date().getFullYear()} COADAL Technologies Pvt. Ltd. · Jaipur, India</div>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from:    `"COADAL Website" <${process.env.GMAIL_USER}>`,
      to:      "coadaltechnology@gmail.com",
      replyTo: email,
      subject: `New Project Request from ${name || "Website Visitor"} — COADAL`,
      html,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quotation email error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
