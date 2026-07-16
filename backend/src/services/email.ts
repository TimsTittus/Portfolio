export const sendContactEmail = async (
  apiKey: string,
  toEmail: string,
  name: string,
  fromEmail: string,
  subject: string,
  message: string
) => {
  if (!apiKey) {
    throw new Error('Resend API key is not configured.');
  }

  if (!toEmail) {
    throw new Error('Destination email address (EMAIL_TO) is not configured.');
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [toEmail],
      reply_to: `${name} <${fromEmail}>`,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Message from Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${fromEmail}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\\n/g, '<br/>')}</p>
      `,
    }),
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`Failed to send email via Resend: ${res.status} ${res.statusText} - ${errorBody}`);
  }

  return await res.json();
};