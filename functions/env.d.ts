interface Env {
  FAKTUM_VISITS: KVNamespace;
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
