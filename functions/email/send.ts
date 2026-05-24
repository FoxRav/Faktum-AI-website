interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  text: string;
}

export async function sendEmail(env: Env, payload: EmailPayload): Promise<boolean> {
  const apiKey = env.EMAIL_API_KEY;
  const from = env.EMAIL_FROM ?? 'Faktum AI Briefing <briefing@faktum-ai.com>';

  if (!apiKey) {
    console.error('email_send_skipped: EMAIL_API_KEY missing');
    return false;
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [payload.to],
      subject: payload.subject,
      html: payload.html,
      text: payload.text,
    }),
  });

  if (!response.ok) {
    console.error('email_send_failed', response.status, await response.text());
    return false;
  }

  return true;
}

export function siteUrl(env: Env): string {
  return (env.SITE_URL ?? 'https://www.faktum-ai.com').replace(/\/$/, '');
}
