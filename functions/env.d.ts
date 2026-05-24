interface Env {
  FAKTUM_VISITS: KVNamespace;
  FAKTUM_DB: D1Database;
  EMAIL_API_KEY: string;
  EMAIL_FROM: string;
  SITE_URL: string;
  TOKEN_SECRET: string;
}

type PagesFunction<EnvBindings extends Env = Env> = (context: {
  request: Request;
  env: EnvBindings;
  params: Record<string, string>;
  waitUntil: (promise: Promise<unknown>) => void;
  passThroughOnException: () => void;
  next: () => Promise<Response>;
  data: Record<string, unknown>;
}) => Response | Promise<Response>;
