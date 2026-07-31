import { Context, Next } from 'hono';
import { Bindings } from '../types/env';

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;

export const rateLimiter = async (c: Context<{ Bindings: Bindings }>, next: Next) => {
  const rawIp = c.req.header('cf-connecting-ip') || c.req.header('x-real-ip') || c.req.header('x-forwarded-for') || '127.0.0.1';
  const ip = rawIp.split(',')[0].trim();
  const key = `rate_limit:${ip}`;

  if (!c.env?.RATE_LIMIT_STORE) {
    console.warn('RATE_LIMIT_STORE KV namespace is not bound. Skipping rate limit.');
    return next();
  }

  try {
    const rawData = await c.env.RATE_LIMIT_STORE.get(key);
    const count = rawData ? parseInt(rawData, 10) || 0 : 0;

    if (count >= MAX_REQUESTS) {
      return c.json({ error: 'Too many contact requests from this IP, please try again after 15 minutes.' }, 429);
    }

    await c.env.RATE_LIMIT_STORE.put(key, (count + 1).toString(), { expirationTtl: 900 });

    return next();
  } catch (error) {
    console.error('Rate limiting error:', error);
    return next();
  }
};