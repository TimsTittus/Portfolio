import { Hono } from 'hono';
import { Bindings } from '../types/env';
import { rateLimiter } from '../middleware/rateLimit';
import { sendContactEmail } from '../services/email';

const contactRouter = new Hono<{ Bindings: Bindings }>();

contactRouter.post('/', rateLimiter, async (c) => {
  try {
    const body = await c.req.json();
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const subject = typeof body.subject === 'string' ? body.subject.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !subject || !message) {
      return c.json({ error: 'All fields are required.' }, 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ error: 'Invalid email address format.' }, 400);
    }

    if (name.length > 100 || email.length > 100 || subject.length > 200 || message.length > 5000) {
      return c.json({ error: 'Payload exceeds maximum field lengths.' }, 400);
    }

    await sendContactEmail(
      c.env.RESEND_API_KEY,
      c.env.EMAIL_TO,
      name,
      email,
      subject,
      message
    );

    return c.json({ success: 'Email sent successfully.' }, 200);
  } catch (error: any) {
    console.error('Error sending email:', error);
    return c.json(
      {
        error: 'Something went wrong. Please try again.',
        details: error.message,
      },
      500
    );
  }
});

export default contactRouter;