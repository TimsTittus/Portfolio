# PortF Cloudflare Workers Backend

This is the migrated Cloudflare Workers backend for the PortF project, built with [Hono](https://hono.dev/).

## Migration Report

### Previous Architecture (Node.js/Express)
The previous backend was a simple Express.js application running on a Node.js server. 
It utilized:
- **Express.js** for routing.
- **Nodemailer** for sending emails via Gmail SMTP.
- **express-rate-limit** for in-memory IP-based rate limiting.
- **express.static** to serve the built frontend assets.

### Cloudflare Workers Replacements
- **Hono:** Replaced Express with Hono, which is a lightweight, ultrafast web framework built specifically for Edge runtimes like Cloudflare Workers.
- **Resend API:** Replaced `nodemailer` with a standard `fetch` call to the Resend REST API. Cloudflare Workers cannot easily use standard Node `net` modules required for SMTP connections.
- **Cloudflare KV Rate Limiting:** Replaced `express-rate-limit` with a custom rate limiter using Cloudflare KV. This provides a robust, globally distributed rate-limiting mechanism, far superior to single-node memory caching.
- **Cloudflare Workers Assets:** The `backend/wrangler.jsonc` file is now configured with the `assets` property, automatically serving the compiled frontend (`../frontend/dist`) without needing Node.js `fs` or `path` modules.

## Project Structure

```
backend/
├── src/
│   ├── routes/       # API route handlers
│   ├── services/     # External services (Email)
│   ├── middleware/   # Rate limiting, custom middleware
│   ├── utils/        # Error handlers, helpers
│   ├── types/        # TypeScript environment bindings
│   └── index.ts      # Main Hono entry point
├── wrangler.jsonc    # Cloudflare Worker configuration
├── package.json      # Dependencies and scripts
└── tsconfig.json     # TypeScript configuration
```

## Environment Variables (Secrets)

Cloudflare Workers uses "bindings" instead of a `.env` file for production secrets. The following variables must be configured:

- `RESEND_API_KEY`: Your Resend API key for sending emails.
- `EMAIL_TO`: The destination email address where contact form submissions will be sent.

## Deployment Guide

### Prerequisites
1. [Node.js](https://nodejs.org/) installed locally.
2. A [Cloudflare](https://dash.cloudflare.com/sign-up) account.
3. A [Resend](https://resend.com) account (or your chosen HTTP email API).

### 1. Install Dependencies
```bash
npm install
```

### 2. Login to Cloudflare
Authenticate the Wrangler CLI with your Cloudflare account:
```bash
npx wrangler login
```

### 3. Create a KV Namespace for Rate Limiting
Create a new KV namespace to store rate limit counts:
```bash
npx wrangler kv:namespace create RATE_LIMIT_STORE
```
*Note the `id` output by this command and paste it into the `id` field of your `wrangler.jsonc` under `kv_namespaces`.*

### 4. Set Secrets
Set the required secrets in your Cloudflare account. Wrangler will prompt you to enter the values:
```bash
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put EMAIL_TO
```

### 5. Deploy
Deploy the worker and assets to Cloudflare:
```bash
npm run deploy
```

## Local Development
To run the worker locally for development, you need a preview KV namespace:
```bash
npx wrangler kv:namespace create RATE_LIMIT_STORE --preview
```
*(Update `preview_id` in `wrangler.jsonc` with the result).*

Then run:
```bash
npm run dev
```

## Limitations & Considerations
- **Email Delivery:** The contact form currently uses Resend. Ensure you have verified a domain with Resend to optimize email deliverability, or use the `onboarding@resend.dev` from address to send exclusively to your own verified email.
- **File Uploads/DBs:** There are no databases or file uploads in this simple contact form backend. If these are needed in the future, Cloudflare D1 (SQL), Cloudflare R2 (Object Storage), or external serverless DBs (like Neon or Supabase) would be the recommended integrations.
