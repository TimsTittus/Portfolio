export type Bindings = {
  RATE_LIMIT_STORE: KVNamespace;
  RESEND_API_KEY: string;
  EMAIL_TO: string; // The email to send contact forms to (formerly EMAIL_USER)
  // Assets binding is provided by Workers automatically when configured in wrangler
};