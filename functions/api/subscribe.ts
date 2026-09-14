import { jsonResponse } from '../lib/http';

export const onRequestPost: PagesFunction<Env> = async (context) => {
  return jsonResponse({ ok: false, error: 'newsletter_discontinued' }, 410);
};
