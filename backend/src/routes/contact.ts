import { Hono } from 'hono';
import { Bindings } from '../types/env';
import { rateLimiter } from '../middleware/rateLimit';
import { sendContactEmail } from '../services/email';

const contactRouter = new Hono<{ Bindings: Bindings }>();

contactRouter.post('/', rateLimiter, async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return c.json({ error: 'All fields are required.' }, 400);
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