import { siteUrl } from './send';

export function dataRequestEmail(
  locale: 'fi' | 'en',
  verifyUrl: string,
  requestType: 'export' | 'delete',
): { subject: string; html: string; text: string } {
  const actionFi = requestType === 'export' ? 'tietojen kopiointia' : 'tietojen poistoa';
  const actionEn = requestType === 'export' ? 'data export' : 'data deletion';

  if (locale === 'en') {
    return {
      subject: `Verify your ${actionEn} request — FaktumAI`,
      html: `<p>We received a ${actionEn} request for your subscriber data.</p>
<p><a href="${verifyUrl}">Verify this request</a>. The link expires in 48 hours.</p>`,
      text: `Verify your ${actionEn} request: ${verifyUrl}`,
    };
  }

  return {
    subject: `Vahvista ${actionFi} koskeva pyyntö — FaktumAI`,
    html: `<p>Olemme vastaanottaneet pyynnön ${actionFi} varten.</p>
<p><a href="${verifyUrl}">Vahvista pyyntö</a>. Linkki vanhenee 48 tunnissa.</p>`,
    text: `Vahvista ${actionFi} koskeva pyyntö: ${verifyUrl}`,
  };
}

export function buildConfirmUrl(env: Env, token: string): string {
  return `${siteUrl(env)}/api/confirm?token=${encodeURIComponent(token)}`;
}

export function buildManageUrl(env: Env, locale: 'fi' | 'en', token: string): string {
  const base = locale === 'en' ? '/en/subscribe/preferences/' : '/tilaa/asetukset/';
  return `${siteUrl(env)}${base}?token=${encodeURIComponent(token)}`;
}

export function buildUnsubscribeUrl(env: Env, locale: 'fi' | 'en', token: string): string {
  const base = locale === 'en' ? '/en/subscribe/unsubscribe/' : '/tilaa/peru/';
  return `${siteUrl(env)}${base}?token=${encodeURIComponent(token)}`;
}

export function unsubscribeLinkEmail(input: {
  unsubscribeUrl: string;
  locale: 'fi' | 'en';
}): { subject: string; html: string; text: string } {
  if (input.locale === 'en') {
    return {
      subject: 'Unsubscribe from the FaktumAI newsletter',
      html: `<p>You requested to unsubscribe from the <strong>FaktumAI newsletter</strong>.</p>
<p><a href="${input.unsubscribeUrl}">Open the unsubscribe page</a> and confirm removal of your legacy subscriber data.</p>
<p>If you did not request this, you can ignore this message. The link expires in 90 days.</p>`,
      text: `Unsubscribe from the FaktumAI newsletter: ${input.unsubscribeUrl}`,
    };
  }

  return {
    subject: 'Peru FaktumAI -uutiskirjeen tilaus',
    html: `<p>Olet pyytänyt FaktumAI -uutiskirjeen tilauksen perumista.</p>
<p><a href="${input.unsubscribeUrl}">Avaa peruutussivu</a> ja vahvista vanhojen tilaajatietojesi poisto.</p>
<p>Jos et pyytänyt tätä, voit jättää viestin huomiotta. Linkki vanhenee 90 päivässä.</p>`,
    text: `Peru FaktumAI -uutiskirjeen tilaus: ${input.unsubscribeUrl}`,
  };
}

export function buildPrivacyUrl(env: Env, locale: 'fi' | 'en'): string {
  return locale === 'en' ? `${siteUrl(env)}/en/privacy/` : `${siteUrl(env)}/tietosuoja/`;
}

export function buildDataRequestVerifyUrl(env: Env, token: string, locale: 'fi' | 'en' = 'fi'): string {
  return `${siteUrl(env)}/api/data-request?token=${encodeURIComponent(token)}&locale=${locale}`;
}
