import { siteUrl } from './send';

interface ConfirmTemplateInput {
  confirmUrl: string;
  privacyUrl: string;
  locale: 'fi' | 'en';
}

export function confirmEmail(input: ConfirmTemplateInput): {
  subject: string;
  html: string;
  text: string;
} {
  if (input.locale === 'en') {
    return {
      subject: 'Confirm your Faktum AI newsletter subscription',
      html: `<p>Thanks for subscribing to the <strong>Faktum AI newsletter</strong>.</p>
<p>The newsletter is sent about once a week.</p>
<p><a href="${input.confirmUrl}">Confirm your email address</a> to start receiving it.</p>
<p>This link expires in 48 hours. If you did not subscribe, you can ignore this message.</p>
<p><a href="${input.privacyUrl}">Privacy policy</a></p>`,
      text: `Confirm your Faktum AI newsletter subscription: ${input.confirmUrl}\nPrivacy: ${input.privacyUrl}`,
    };
  }

  return {
    subject: 'Vahvista Faktum AI -uutiskirjeen tilaus',
    html: `<p>Kiitos <strong>Faktum AI -uutiskirjeen</strong> tilaamisesta.</p>
<p>Uutiskirje lähetetään noin kerran viikossa.</p>
<p><a href="${input.confirmUrl}">Vahvista sähköpostiosoitteesi</a>, jotta voimme aloittaa lähetykset.</p>
<p>Linkki vanhenee 48 tunnissa. Jos et tilannut uutiskirjettä, voit jättää viestin huomiotta.</p>
<p><a href="${input.privacyUrl}">Tietosuojaseloste</a></p>`,
    text: `Vahvista Faktum AI -uutiskirjeen tilaus: ${input.confirmUrl}\nTietosuoja: ${input.privacyUrl}`,
  };
}

export function welcomeEmail(
  locale: 'fi' | 'en',
  manageUrl: string,
  unsubscribeUrl: string,
): { subject: string; html: string; text: string } {
  if (locale === 'en') {
    return {
      subject: 'Welcome to the Faktum AI newsletter',
      html: `<p>Your subscription is confirmed. Welcome to the <strong>Faktum AI newsletter</strong>.</p>
<p>We send the newsletter about once a week.</p>
<p><a href="${manageUrl}">Complete your profile</a> — tell us your role and interests so we can tailor content.</p>
<p><a href="${unsubscribeUrl}">Unsubscribe</a></p>`,
      text: `Welcome to the Faktum AI newsletter.\nManage preferences: ${manageUrl}\nUnsubscribe: ${unsubscribeUrl}`,
    };
  }

  return {
    subject: 'Tervetuloa Faktum AI -uutiskirjeen tilaajaksi',
    html: `<p>Tilauksesi on vahvistettu. Tervetuloa <strong>Faktum AI -uutiskirjeen</strong> tilaajaksi.</p>
<p>Lähetämme uutiskirjeen noin kerran viikossa.</p>
<p><a href="${manageUrl}">Täydennä profiilisi</a> — kerro roolisi ja kiinnostuksesi, jotta voimme kohdentaa sisältöä.</p>
<p><a href="${unsubscribeUrl}">Peru tilaus</a></p>`,
    text: `Tervetuloa Faktum AI -uutiskirjeen tilaajaksi.\nHallitse asetuksia: ${manageUrl}\nPeru tilaus: ${unsubscribeUrl}`,
  };
}

export function dataRequestEmail(
  locale: 'fi' | 'en',
  verifyUrl: string,
  requestType: 'export' | 'delete',
): { subject: string; html: string; text: string } {
  const actionFi = requestType === 'export' ? 'tietojen saanti' : 'tietojen poisto';
  const actionEn = requestType === 'export' ? 'data export' : 'data deletion';

  if (locale === 'en') {
    return {
      subject: `Verify your ${actionEn} request — Faktum AI`,
      html: `<p>We received a request to ${actionEn} for your subscriber data.</p>
<p><a href="${verifyUrl}">Verify this request</a>. The link expires in 48 hours.</p>`,
      text: `Verify your ${actionEn} request: ${verifyUrl}`,
    };
  }

  return {
    subject: `Vahvista ${actionFi} -pyyntö — Faktum AI`,
    html: `<p>Olemme vastaanottaneet pyynnön tilaajatietojesi ${actionFi}a varten.</p>
<p><a href="${verifyUrl}">Vahvista pyyntö</a>. Linkki vanhenee 48 tunnissa.</p>`,
    text: `Vahvista ${actionFi}-pyyntö: ${verifyUrl}`,
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

export function buildPrivacyUrl(env: Env, locale: 'fi' | 'en'): string {
  return locale === 'en' ? `${siteUrl(env)}/en/privacy/` : `${siteUrl(env)}/tietosuoja/`;
}

export function buildDataRequestVerifyUrl(env: Env, token: string): string {
  return `${siteUrl(env)}/api/data-request?token=${encodeURIComponent(token)}`;
}
