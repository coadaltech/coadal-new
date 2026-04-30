import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, phone, company, budget, message, services } = await request.json();

  /* ── Gmail SMTP via App Password ── */
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,   // coadaltechnology@gmail.com
      pass: process.env.GMAIL_PASS,   // 16-char Gmail App Password
    },
  });

  const servicesText = Array.isArray(services) && services.length > 0
    ? services.join(", ")
    : "Not specified";

  const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 0; margin: 0;">
      <div style="max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <div style="background: #17184B; padding: 28px 32px; text-align: center;">
          <div style="font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: 0.18em;">COADAL</div>
          <div style="font-size: 13px; color: rgba(255,255,255,0.45); margin-top: 4px;">New Contact Form Submission</div>
        </div>

        <!-- Lime accent bar -->
        <div style="height: 4px; background: linear-gradient(90deg, #D8E63C, #D6B4FC);"></div>

        <!-- Body -->
        <div style="padding: 32px;">
          <h2 style="font-size: 18px; color: #0d0d0d; margin: 0 0 24px 0;">You have a new enquiry!</h2>

          <table style="width: 100%; border-collapse: collapse;">
            ${[
              ["Name",     name     || "—"],
              ["Email",    email    || "—"],
              ["Phone",    phone    || "—"],
              ["Company",  company  || "—"],
              ["Budget",   budget   || "—"],
              ["Services", servicesText],
            ].map(([label, value]) => `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0eeE9; width: 120px; font-size: 12px; color: rgba(0,0,0,0.40); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">${label}</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0eee9; font-size: 14px; color: #0d0d0d;">${value}</td>
              </tr>
            `).join("")}
          </table>

          <!-- Message -->
          <div style="margin-top: 24px;">
            <div style="font-size: 12px; color: rgba(0,0,0,0.40); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; margin-bottom: 10px;">Message</div>
            <div style="background: #f8f7f3; border-radius: 8px; padding: 16px; font-size: 14px; color: #0d0d0d; line-height: 1.7; white-space: pre-wrap;">${message || "—"}</div>
          </div>

          <!-- Reply CTA -->
          <div style="margin-top: 28px; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #D8E63C, #c8d430); color: #17184B; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 100px; text-decoration: none;">
              Reply to ${name || "Client"}
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #f8f7f3; padding: 16px 32px; text-align: center; border-top: 1px solid rgba(0,0,0,0.05);">
          <div style="font-size: 11px; color: rgba(0,0,0,0.30);">© ${new Date().getFullYear()} COADAL Technologies Pvt. Ltd. · Jaipur, India</div>
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
      subject: `New Enquiry from ${name || "Website Visitor"} — COADAL`,
      html,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    // Still return 200 so the user sees success — email can be retried manually
    return NextResponse.json({ success: false, error: "Email failed" }, { status: 200 });
  }
}
