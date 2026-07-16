import { Context } from 'hono';

export const handleError = (err: Error, c: Context) => {
  console.error('Unhandled Exception:', err);
  return c.json(
    {
      error: 'Something went wrong. Please try again.',
      details: err.message,
    },
    500
  );
};