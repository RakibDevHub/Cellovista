"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";
import { ratelimit } from "@/lib/rateLimit";

// Initialize Resend lazily so the app doesn't crash if the key is missing in dev
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

const ContactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(80),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .max(25)
    .optional()
    .or(z.literal("")),
  service: z.string().trim().min(1, "Please select a service."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message is too long."),
  // Honeypot — must be empty
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    message: formData.get("message"),
    company: formData.get("company"),
  };

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      message: "Please fix the errors below and try again.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // Rate limiting (skip if Upstash isn't configured yet)
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    try {
      const h = await headers();
      const ip =
        h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        h.get("x-real-ip") ||
        "anonymous";
      const { success: allowed } = await ratelimit.limit(ip);
      if (!allowed) {
        return {
          success: false,
          message:
            "Too many submissions. Please try again later or contact us on WhatsApp.",
        };
      }
    } catch (err) {
      // Don't block submissions if rate limiting itself fails
      console.error("Rate limit check failed:", err);
    }
  }

  const resend = getResend();
  if (!resend) {
    // Dev mode: log to console instead of failing
    console.log("[DEV] Contact form submission (RESEND_API_KEY not set):", parsed.data);
    return {
      success: true,
      message:
        "✅ (Dev mode) Submission received. In production this would be emailed.",
    };
  }

  const { name, email, phone, service, message } = parsed.data;

  try {
    const { error } = await resend.emails.send({
      from: process.env.MAIL_FROM || "Cellovista Website <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "cellovistainternational@gmail.com",
      replyTo: email,
      subject: `🌐 New Inquiry: ${service} — ${name}`,
      text: `
New inquiry from Cellovista website

Name:     ${name}
Email:    ${email}
Phone:    ${phone || "—"}
Service:  ${service}

Message:
${message}
      `.trim(),
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:32px 16px;">
              <tr><td align="center">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(10,61,98,0.08);">
                  <tr>
                    <td style="background:linear-gradient(135deg,#0A3D62,#1B5E8A);padding:28px 32px;color:#ffffff;">
                      <h1 style="margin:0;font-size:20px;font-weight:800;">🌐 New Website Inquiry</h1>
                      <p style="margin:6px 0 0;font-size:13px;opacity:0.85;">Cellovista Group BD — Contact Form</p>
                    </td>
                  </tr>
                  <tr><td style="padding:32px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#1f2937;">
                      <tr><td style="padding:8px 0;width:110px;color:#6b7280;font-weight:600;">Name</td><td style="padding:8px 0;">${name}</td></tr>
                      <tr><td style="padding:8px 0;color:#6b7280;font-weight:600;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#0A3D62;">${email}</a></td></tr>
                      <tr><td style="padding:8px 0;color:#6b7280;font-weight:600;">Phone</td><td style="padding:8px 0;">${phone || "—"}</td></tr>
                      <tr><td style="padding:8px 0;color:#6b7280;font-weight:600;">Service</td><td style="padding:8px 0;"><span style="display:inline-block;background:#E8A93D;color:#1a1a2e;font-weight:700;padding:4px 12px;border-radius:20px;font-size:12px;">${service}</span></td></tr>
                    </table>
                    <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;">
                    <p style="margin:0 0 8px;font-size:12px;color:#6b7280;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Message</p>
                    <div style="background:#f9fafb;border-left:3px solid #0A3D62;padding:16px 20px;border-radius:6px;font-size:14px;line-height:1.7;color:#1f2937;white-space:pre-wrap;">${message.replace(/</g, "&lt;")}</div>
                  </td></tr>
                  <tr><td style="padding:20px 32px;background:#f9fafb;text-align:center;font-size:12px;color:#9ca3af;">
                    Received from cellovistagroupbd.com · Reply directly to this email to respond.
                  </td></tr>
                </table>
              </td></tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        message:
          "We couldn't send your message right now. Please try WhatsApp or email us directly.",
      };
    }

    return {
      success: true,
      message:
        "✅ Thank you! Your inquiry has been received. Our team will get back to you within 24 hours.",
    };
  } catch (err) {
    console.error("Send email failed:", err);
    return {
      success: false,
      message:
        "Something went wrong. Please reach us via WhatsApp at +880 1711-169244.",
    };
  }
}