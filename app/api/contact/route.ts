import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  projectType: z.enum([
    "Business Website",
    "Website Redesign",
    "Dynamic Website",
    "Custom Web System",
    "Other",
  ]),
  budget: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
  website: z.string().trim().max(0).optional(),
});

export const runtime = "nodejs";

const unavailableMessage = "The contact form is temporarily unavailable. Please email jushuaff@gmail.com directly.";

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Please send valid JSON." }, { status: 400 });
    }
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Please provide a valid name, email, project type, and message.",
        },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || "jushuaff@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();

    if (!apiKey || !fromEmail) {
      console.error("Contact email configuration missing: RESEND_API_KEY or CONTACT_FROM_EMAIL.");
      return NextResponse.json({ error: unavailableMessage }, { status: 503 });
    }

    if (!z.string().email().safeParse(fromEmail).success || !z.string().email().safeParse(toEmail).success) {
      console.error("Contact email configuration contains an invalid sender or recipient address.");
      return NextResponse.json({ error: unavailableMessage }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    const timestamp = new Date().toISOString();
    const payload = parsed.data;

    const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]!);
    const html = `
      <h2>New Portfolio Inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(payload.company || "Not provided")}</p>
      <p><strong>Project Type:</strong> ${escapeHtml(payload.projectType)}</p>
      <p><strong>Budget:</strong> ${escapeHtml(payload.budget || "Not provided")}</p>
      <p><strong>Timestamp:</strong> ${timestamp}</p>
      <p><strong>Message:</strong></p>
      <div>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</div>
    `;

    const text = [
      "New Portfolio Inquiry",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Company: ${payload.company || "Not provided"}`,
      `Project Type: ${payload.projectType}`,
      `Budget: ${payload.budget || "Not provided"}`,
      `Timestamp: ${timestamp}`,
      "",
      "Message:",
      payload.message,
    ].join("\n");

    const { data: receipt, error: deliveryError } = await resend.emails.send({
      from: `Joe David Portfolio <${fromEmail}>`,
      to: [toEmail],
      replyTo: payload.email,
      subject: `New Portfolio Inquiry — ${payload.name}`,
      html,
      text,
    });

    if (deliveryError || !receipt?.id) {
      console.error("Contact email rejected by provider:", deliveryError?.name || "missing_receipt");
      return NextResponse.json({ error: "The message could not be sent. Please try again or email me directly." }, { status: 502 });
    }

    return NextResponse.json({ success: true, message: "Your inquiry has been sent." });
  } catch (error) {
    console.error("Contact form error:", error instanceof Error ? error.name : "unknown_error");
    return NextResponse.json(
      {
        error: "The message could not be sent right now. Please try again later or email me directly.",
      },
      { status: 500 },
    );
  }
}
