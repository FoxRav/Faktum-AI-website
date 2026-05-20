const KV_KEY = 'global_visits';

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

function getKvStore(env: Env): KVNamespace | undefined {
  return env.FAKTUM_VISITS;
}

async function readVisits(kv: KVNamespace): Promise<number> {
  const currentRaw = await kv.get(KV_KEY);
  const current = currentRaw ? Number.parseInt(currentRaw, 10) : 0;
  return Number.isFinite(current) && current >= 0 ? current : 0;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const kv = getKvStore(context.env);
  if (!kv) {
    return jsonResponse({ error: 'kv_binding_missing' }, 503);
  }

  try {
    const visits = await readVisits(kv);
    return jsonResponse({ visits });
  } catch {
    return jsonResponse({ error: 'visit_counter_failed' }, 500);
  }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const kv = getKvStore(context.env);
  if (!kv) {
    return jsonResponse({ error: 'kv_binding_missing' }, 503);
  }

  try {
    const visits = await readVisits(kv);
    const next = visits + 1;
    await kv.put(KV_KEY, String(next));
    return jsonResponse({ visits: next });
  } catch {
    return jsonResponse({ error: 'visit_counter_failed' }, 500);
  }
};
