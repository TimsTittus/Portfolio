import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { Bindings } from './types/env';
import { handleError } from './utils/error';
import contactRouter from './routes/contact';

const app = new Hono<{ Bindings: Bindings }>();

app.use('*', logger());
app.use('/api/*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders: ['Content-Length'],
  maxAge: 600,
  credentials: true,
}));

app.onError(handleError);

app.get('/api/test', (c) => {
  return c.text('API is working');
});

app.route('/api/contact', contactRouter);

app.notFound((c) => {
  return c.json({ error: 'Not Found' }, 404);
});

export default app;