import { NextResponse } from 'next/server';

// Simple in-memory rate limiter for serverless / edge / Node runtime
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  // Clean up expired entry if any
  if (entry && now > entry.expiresAt) {
    rateLimitMap.delete(ip);
  }

  const current = rateLimitMap.get(ip);
  if (!current) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + WINDOW_MS });
    return true;
  }

  if (current.count >= MAX_REQUESTS) {
    return false;
  }

  current.count += 1;
  return true;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: Request) {
  try {
    const clientIp =
      req.headers.get('cf-connecting-ip') ||
      req.headers.get('x-real-ip') ||
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      '127.0.0.1';

    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: 'Too many contact requests from this IP. Please try again after 15 minutes.' },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const subject = typeof body.subject === 'string' ? body.subject.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address format.' }, { status: 400 });
    }

    if (name.length > 100 || email.length > 100 || subject.length > 200 || message.length > 5000) {
      return NextResponse.json({ error: 'Payload exceeds maximum field lengths.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.EMAIL_TO;

    if (!apiKey || !toEmail) {
      console.error('Missing RESEND_API_KEY or EMAIL_TO environment variables.');
      return NextResponse.json(
        { error: 'Email service is currently misconfigured on server.' },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safeFromEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br/>');

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>',
        to: [toEmail],
        reply_to: `${name} <${email}>`,
        subject: `Contact Form: ${subject}`,
        html: `
          <h2>New Message from Contact Form</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeFromEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <p><strong>Message:</strong><br/>${safeMessage}</p>
        `,
      }),
    });

    if (!resendRes.ok) {
      const errorBody = await resendRes.text();
      console.error('Failed to send email via Resend:', resendRes.status, errorBody);
      return NextResponse.json(
        { error: 'Failed to send message via email service. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: 'Email sent successfully.' }, { status: 200 });
  } catch (error: any) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}