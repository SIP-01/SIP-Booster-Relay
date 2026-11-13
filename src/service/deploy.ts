/**
 * Hosted deploy orchestration — provisions a stock-config SIP relay into the
 * customer's OWN Cloudflare account, using the customer's API token.
 *
 * Trust model (documented in docs/SECURITY.md): the token transits this
 * Worker over TLS, is used in memory for these calls only, and is never
 * logged, stored, or returned. Customers are guided to create a scoped token
 * (Workers Scripts Edit + D1 Write) and to delete it afterwards.
 *
 * @module src/service/deploy
 */

import * as config from '../config';

const CF_API = 'https://api.cloudflare.com/client/v4';

export interface DeployRequest {
  pubkey: string;
  cfToken: string;
  cfAccountId: string;
  workerName: string;
  /** Per-deployment identity overrides (plain-text bindings — no rebuild). */
  relayName?: string;
  relayNpub?: string;
  ownerPubkey?: string;
  /** Per-deployment policy overrides. */
  paymentMode?: string;
  paymentSats?: number;
  authRequired?: boolean;
}

export interface DeployResult {
  ok: boolean;
  error?: string;
  steps: Array<{ step: string; ok: boolean; detail?: string }>;
  relay_https_url?: string;
  relay_wss_url?: string;
}

function slugifyWorkerName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48);
}

async function cfApi(token: string, path: string, options: { method?: string; body?: unknown; form?: FormData } = {}): Promise<{ ok: boolean; data?: any; error?: string }> {
  try {
    const headers: Record<string, string> = { Authorization: `Bearer ${token}` };
    let body: BodyInit | undefined;
    if (options.form) {
      body = options.form;
    } else if (options.body !== undefined) {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify(options.body);
    }
    const res = await fetch(`${CF_API}${path}`, { method: options.method ?? (body ? 'POST' : 'GET'), headers, body });
    const data = (await res.json().catch(() => null)) as any;
    if (!res.ok || !data?.success) {
      const msg = data?.errors?.[0]?.message ?? `HTTP ${res.status}`;
      return { ok: false, error: String(msg) };
    }
    return { ok: true, data: data.result };
  } catch (error: any) {
    return { ok: false, error: `network: ${error?.message ?? error}` };
  }
}

export async function orchestrateDeploy(req: DeployRequest): Promise<DeployResult> {
  const steps: DeployResult['steps'] = [];
  const workerName = slugifyWorkerName(req.workerName);
  if (!workerName || workerName.length < 3) {
    return { ok: false, error: 'worker name must be 3+ chars of a-z, 0-9, -', steps };
  }
  if (!/^[0-9a-f]{64}$/.test(req.pubkey)) {
    return { ok: false, error: 'invalid pubkey', steps };
  }
  if (!/^[0-9a-f]{32}$/i.test(req.cfAccountId)) {
    return { ok: false, error: 'invalid Cloudflare account id (32 hex chars)', steps };
  }

  // 1. Verify the customer's API token. User tokens verify via
  //    /user/tokens/verify; account-scoped tokens via
  //    /accounts/{id}/tokens/verify — accept either.
  let verify = await cfApi(req.cfToken, '/user/tokens/verify');
  if (!verify.ok) {
    verify = await cfApi(req.cfToken, `/accounts/${req.cfAccountId}/tokens/verify`);
  }
  if (!verify.ok) {
    steps.push({ step: 'verify-token', ok: false, detail: verify.error });
    return { ok: false, error: `Cloudflare token check failed: ${verify.error}`, steps };
  }
  steps.push({ step: 'verify-token', ok: true });

  // 2. Create (or find) the D1 database.
  const dbName = `${workerName}-db`;
  let databaseId: string | undefined;
  const created = await cfApi(req.cfToken, `/accounts/${req.cfAccountId}/d1/database`, {
    body: { name: dbName },
  });
  if (created.ok && created.data?.uuid) {
    databaseId = created.data.uuid as string;
    steps.push({ step: 'create-d1', ok: true, detail: dbName });
  } else {
    // Name conflict is fine — find the existing database by name.
    const list = await cfApi(req.cfToken, `/accounts/${req.cfAccountId}/d1/database`);
    const existing = (list.data as any[] | undefined)?.find((d) => d?.name === dbName);
    if (existing?.uuid) {
      databaseId = existing.uuid as string;
      steps.push({ step: 'create-d1', ok: true, detail: `${dbName} (existing)` });
    } else {
      steps.push({ step: 'create-d1', ok: false, detail: created.error });
      return { ok: false, error: `D1 create failed: ${created.error}`, steps };
    }
  }

  // 3. Fetch the current relay bundle (CI-built worker.js from the repo),
  //    cached at the edge for an hour — deploys beyond the first per colo
  //    skip the GitHub round trip entirely.
  let bundle: string;
  try {
    const cacheReq = new Request(config.DEPLOY_BUNDLE_URL);
    let res = await caches.default.match(cacheReq);
    let fromCache = !!res;
    if (!res || !res.ok) {
      const fresh = await fetch(config.DEPLOY_BUNDLE_URL);
      if (!fresh.ok) throw new Error(`HTTP ${fresh.status}`);
      res = fresh;
      fromCache = false;
    }
    bundle = await res.text();
    if (bundle.length < 10000 || !bundle.includes('RelayWebSocket')) {
      throw new Error('bundle looks wrong');
    }
    // Supply-chain guard (audit P0-3): the bundle URL is pinned to an
    // immutable commit (DEPLOY_BUNDLE_REF); when DEPLOY_BUNDLE_SHA256 is
    // configured, verify the hash before deploying.
    if (String(config.DEPLOY_BUNDLE_SHA256).length > 0) {
      const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(bundle));
      const hex = Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, '0')).join('');
      if (hex !== config.DEPLOY_BUNDLE_SHA256.toLowerCase()) {
        throw new Error('bundle SHA-256 mismatch — refusing to deploy unverified software');
      }
    }
    if (!fromCache) {
      await caches.default.put(cacheReq, new Response(bundle, {
        headers: { 'Cache-Control': 'public, max-age=3600' },
      }));
    }
    steps.push({ step: 'fetch-bundle', ok: true, detail: `${bundle.length} bytes @${config.DEPLOY_BUNDLE_REF.slice(0, 8)}${config.DEPLOY_BUNDLE_SHA256 ? ', sha256 verified' : ''}${fromCache ? ' (edge cache)' : ''}` });
  } catch (error: any) {
    steps.push({ step: 'fetch-bundle', ok: false, detail: error?.message });
    return { ok: false, error: `could not fetch the relay bundle: ${error?.message ?? error}`, steps };
  }

  // 4. Upload the worker with bindings + DO migration (+ optional
  //    per-deployment identity overrides as plain-text bindings).
  const bindings: any[] = [
    { name: 'RELAY_DATABASE', type: 'd1', id: databaseId },
    { name: 'RELAY_WEBSOCKET', type: 'durable_object_namespace', class_name: 'RelayWebSocket' },
  ];
  if (req.relayName && /^[\w\s().#-]{1,40}$/.test(req.relayName)) {
    bindings.push({ name: 'RELAY_NAME', type: 'plain_text', text: req.relayName.slice(0, 40) });
  }
  if (req.relayNpub && /^npub1[02-9ac-hj-np-z]{20,}$/.test(req.relayNpub)) {
    bindings.push({ name: 'RELAY_NPUB', type: 'plain_text', text: req.relayNpub });
  }
  if (req.ownerPubkey && /^[0-9a-f]{64}$/.test(req.ownerPubkey)) {
    bindings.push({ name: 'SERVICE_OWNER_PUBKEY', type: 'plain_text', text: req.ownerPubkey });
    bindings.push({ name: 'RELAY_PUBKEY', type: 'plain_text', text: req.ownerPubkey });
  }
  if (req.paymentMode && ['free', 'donation', 'pay-to-relay'].includes(req.paymentMode)) {
    bindings.push({ name: 'PAYMENT_MODE', type: 'plain_text', text: req.paymentMode });
  }
  if (typeof req.paymentSats === 'number' && Number.isInteger(req.paymentSats) && req.paymentSats > 0 && req.paymentSats < 100000000) {
    bindings.push({ name: 'RELAY_ACCESS_PRICE_SATS', type: 'plain_text', text: String(req.paymentSats) });
  }
  if (typeof req.authRequired === 'boolean') {
    bindings.push({ name: 'AUTH_REQUIRED', type: 'plain_text', text: String(req.authRequired) });
  }

  const metadata = {
    main_module: 'worker.js',
    compatibility_date: '2025-06-01',
    bindings,
    migrations: { new_tag: 'v4', new_sqlite_classes: ['RelayWebSocket'] },
  };
  const form = new FormData();
  form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
  form.append('worker.js', new Blob([bundle], { type: 'application/javascript+module' }), 'worker.js');

  const upload = await cfApi(req.cfToken, `/accounts/${req.cfAccountId}/workers/scripts/${workerName}`, {
    method: 'PUT',
    form,
  });
  if (!upload.ok) {
    // Migration precondition on re-deploy: retry once without migrations.
    if (upload.error?.includes('migration tag precondition')) {
      delete (metadata as any).migrations;
      const retryForm = new FormData();
      retryForm.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
      retryForm.append('worker.js', new Blob([bundle], { type: 'application/javascript+module' }), 'worker.js');
      const retry = await cfApi(req.cfToken, `/accounts/${req.cfAccountId}/workers/scripts/${workerName}`, {
        method: 'PUT',
        form: retryForm,
      });
      if (!retry.ok) {
        steps.push({ step: 'upload-worker', ok: false, detail: retry.error });
        return { ok: false, error: `worker upload failed: ${retry.error}`, steps };
      }
    } else {
      steps.push({ step: 'upload-worker', ok: false, detail: upload.error });
      return { ok: false, error: `worker upload failed: ${upload.error}`, steps };
    }
  }
  steps.push({ step: 'upload-worker', ok: true, detail: workerName });

  // 5. Ensure the account has a workers.dev subdomain, then enable the
  //    script's route.
  let accountSubdomain: string | undefined;
  const sub = await cfApi(req.cfToken, `/accounts/${req.cfAccountId}/workers/subdomain`);
  accountSubdomain = sub.data?.subdomain;
  if (!accountSubdomain) {
    const suggested = slugifyWorkerName(`${workerName}-relay`).replace(/-+/g, '-');
    const claim = await cfApi(req.cfToken, `/accounts/${req.cfAccountId}/workers/subdomain`, {
      method: 'PUT',
      body: { subdomain: suggested },
    });
    if (claim.ok && claim.data?.subdomain) {
      accountSubdomain = claim.data.subdomain;
      steps.push({ step: 'account-subdomain', ok: true, detail: `claimed ${accountSubdomain}.workers.dev` });
    } else {
      steps.push({
        step: 'account-subdomain',
        ok: false,
        detail: 'no workers.dev subdomain on this account — set one in the Cloudflare dashboard (Workers → your subdomain), then enable the route',
      });
    }
  }

  if (accountSubdomain) {
    const enable = await cfApi(req.cfToken, `/accounts/${req.cfAccountId}/workers/scripts/${workerName}/subdomain`, {
      body: { enabled: true },
    });
    steps.push({ step: 'enable-subdomain', ok: enable.ok, detail: enable.error });
  }

  const httpsUrl = accountSubdomain ? `https://${workerName}.${accountSubdomain}.workers.dev` : undefined;
  const wssUrl = accountSubdomain ? `wss://${workerName}.${accountSubdomain}.workers.dev` : undefined;

  return {
    ok: true,
    steps,
    relay_https_url: httpsUrl,
    relay_wss_url: wssUrl,
  };
}
