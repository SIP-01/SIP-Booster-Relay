# Configuration

All operator configuration lives in **`src/config.ts`** (compile-time, baked
into the Worker bundle — the same values are advertised in NIP-11, so keep
them truthful). No secrets belong here: Cloudflare API tokens and private
keys must never be committed.

## Relay mode

| Option | Values | Default | Meaning |
|---|---|---|---|
| `RELAY_MODE` | `'sip01'` \| `'hybrid'` \| `'general'` | `'sip01'` | What the relay accepts. `sip01`: only kind 39697 (+ kind 5 deletions, kind 9735 zap receipts, kind 16919 crawler heartbeats, kind 39698 capability announcements). `hybrid`: all kinds + SIP-01 indexing. `general`: plain relay, SIP-01 features off. |

## SIP-01

| Option | Default | Meaning |
|---|---|---|
| `SIP01_ENABLED` | derived from mode | Master switch (off in `general` mode). |
| `SIP01_VALIDATION` | `true` | Reject invalid kind 39697 events with `OK false invalid: …` (SIP-01 §12.4). |
| `SIP01_INDEXING` | on when enabled | Maintain the document/observation/indexer tables and SIP-01 search. |
| `SIP01_MODE_ALLOWED_KINDS` | `{39697, 5, 9735, 16919, 39698}` | Kinds stored in `sip01` mode (16919 = indexstr/Crawlstr crawler heartbeats, stored unvalidated as ordinary replaceable events so the ecosystem network-health view works against this relay; 39698 = ORBSTR capability announcements, stored unvalidated as ordinary addressable events so the ecosystem capability directory works against this relay). |
| `SIP01_INDEXER_RATE_LIMIT` | `120/min`, burst 240 | Per-connection write bucket for kind 39697 (crawlers burst). |
| `SIP01_MAX_EVENT_BYTES` | `65536` | Max serialized size of a kind 39697 event. |
| `SIP01_INDEXER_POLICY` | `'open'` | `'open'` \| `'allowlist'` \| `'blocklist'` for indexer pubkeys. |
| `sip01AllowedIndexers` / `sip01BlockedIndexers` | empty | Pubkey sets for the policy. |
| `SIP01_PRUNE_ALLOWED` | `false` | Allow age-based pruning of kind 39697 (see docs/OPERATIONS.md). |

## Search / counts / federation

| Option | Default | Meaning |
|---|---|---|
| `NIP50_ENABLED` | `true` | `search` filter support. |
| `SEARCH_MAX_RESULTS` | `100` | Hard cap per search query. |
| `SEARCH_MAX_QUERY_LENGTH` | `500` | Max search string length. |
| `NIP45_ENABLED` | `true` | `COUNT` verb. |
| `COUNT_MAX_ESTIMATE` | `50000` | Complexity guard for COUNT. |
| `NIP77_ENABLED` | `true` | Negentropy federation. |
| `NEG_MAX_ITEMS` | `100000` | Max events per NEG-OPEN session (bigger → `NEG-ERR blocked:`). |
| `NEG_FRAME_SIZE_LIMIT` | `262144` | Max negentropy wire message (bytes). |
| `NEG_SESSION_TIMEOUT_MS` | `600000` | Idle NEG session reclamation. |

## Payment (optional — SIP-01 itself is always free)

| Option | Default | Meaning |
|---|---|---|
| `PAYMENT_MODE` | `'free'` | `'free'` \| `'donation'` \| `'pay-to-relay'`. |
| `relayNpub` | (placeholder) | Operator npub — the zap recipient. **Change it.** |
| `RELAY_ACCESS_PRICE_SATS` | `212121` | Price in sats (admission). |
| `PAY_TO_RELAY_ENABLED` | derived | `true` when mode is `pay-to-relay`. |

Payments are verified from kind 9735 zap receipts — see docs/SECURITY.md for
the trust model.

## Hosted deploy service

Optional paid deploy service (this instance deploys stock-config relays into
customers' own Cloudflare accounts after payment):

| Option | Default | Meaning |
|---|---|---|
| `DEPLOY_SERVICE_ENABLED` | `false` | Master switch for `/api/service/*`. Run the service as its own Worker (`wrangler.service.toml`, binding `DEPLOY_SERVICE_ENABLED = "true"`). |
| `SERVICE_OWNER_PUBKEY` | (hex) | Only this key can use `/admin` (NIP-98). |
| `DEPLOY_PRICE_SATS` | `21420` | Default Lightning price (editable live in /admin). |
| `DEPLOY_PRICE_PRE` | `500` | Default PRE price (editable live in /admin). |
| `DEPLOY_ZAP_NPUB` | `relayNpub` | Default Lightning recipient npub (editable live). |
| `DEPLOY_PRE_ADDRESS` | `0x000…` | **Set your Base receiving wallet** (editable live). |
| `PRE_TOKEN_CONTRACT` | `0x3816dd4b…de7a` | PRE token on Base. |
| `PRE_TOKEN_DECIMALS` | `18` | ERC-20 decimals for price math. |
| `BASE_RPC_URLS` | mainnet.base.org + base-rpc.publicnode.com | Base JSON-RPC endpoints (all queried; quorum must agree). |
| `BASE_RPC_QUORUM` | `2` | Minimum agreeing RPC endpoints for a PRE payment. |
| `DEPLOY_BUNDLE_REF` | pinned commit sha | Immutable commit the deploy bundle is fetched from (never `main`). |
| `DEPLOY_BUNDLE_SHA256` | `""` | When set, the bundle's SHA-256 must match before any deployment. |
| `DEPLOY_MAX_PER_IP_PER_DAY` | `10` | Deploy endpoint abuse guard. |

NEG budgets: `NEG_OPEN_PER_IP_PER_MIN` (10), `NEG_MAX_CONCURRENT_SESSIONS` (25) — see FEDERATION.md.

Runtime values live in D1 (`service_settings`) and win over these defaults;
the /admin dashboard edits them.

## Runtime overrides (per-deployment, no rebuild)

Plain-text Worker bindings override compile-time config at runtime — this is
how hosted-deploy customers get their own identity/policy from one stock
bundle (`src/runtime-config.ts`):

| Binding | Overrides |
|---|---|
| `RELAY_NAME` / `RELAY_PUBKEY` / `RELAY_CONTACT` / `RELAY_NPUB` | NIP-11 identity + payment recipient |
| `SERVICE_OWNER_PUBKEY` | /admin owner |
| `DEPLOY_SERVICE_ENABLED` | `"true"` enables the service API (used by the standalone service worker) |
| `PAYMENT_MODE` | `free` / `donation` / `pay-to-relay` |
| `RELAY_ACCESS_PRICE_SATS` | access price in sats |
| `AUTH_REQUIRED` | NIP-42 requirement toggle |

Relay mode and NIP toggles stay compile-time (`src/config.ts`) — they shape
the ingestion pipeline, so they're an operator decision, not a deploy-time
knob.

## NIP-42 auth

| Option | Default | Meaning |
|---|---|---|
| `AUTH_REQUIRED` | `false` | Require NIP-42 auth before reads/writes. |
| `AUTH_TIMEOUT_MS` | `600000` | Challenge validity. |

## Relay info (NIP-11)

`relayInfo` — name, description, pubkey, contact, icon, `limitation`
(`max_message_length`, `max_subscriptions`, `max_limit`,
`created_at_upper_limit`, …). The `supported_nips` list is computed from the
enabled features; the `uncaged_index` block is added when SIP-01 is on.

Scope advertisement (`uncaged_index`):

| Option | Meaning |
|---|---|
| `SIP01_SCOPE` | `'global'` \| `'regional'` \| `'community'` \| `'private'` |
| `SIP01_SCOPE_DOMAINS` | e.g. `["docs.example.com"]` for a specialized index, `["*"]` for global |
| `SIP01_SCOPE_LANGUAGES` | e.g. `["en", "de"]`; empty = all |
| `SIP01_SCOPE_DOCUMENT_TYPES` | e.g. `["page", "repository"]`; empty = all |

## Upstream policy engine (preserved)

`blockedPubkeys`, `allowedPubkeys`, `blockedEventKinds`, `allowedEventKinds`,
`blockedContent`, `blockedTags`, `allowedTags`, `nip05Users`,
`checkValidNip05`, `blockedNip05Domains`, `allowedNip05Domains`,
`enableAntiSpam`, `enableGlobalDuplicateCheck`, `antiSpamKinds`,
`PUBKEY_RATE_LIMIT`, `REQ_RATE_LIMIT`, `excludedRateLimitKinds`.

Allow/block semantics (upstream): if an allow list is non-empty, only listed
entries pass; block lists always apply.

## Pruning

| Option | Default | Meaning |
|---|---|---|
| `DB_PRUNING_ENABLED` | `true` | Daily cron size check. |
| `DB_SIZE_THRESHOLD_GB` | `4` | Start pruning at this D1 size (free tier: 5 GB hard cap). |
| `DB_PRUNE_TARGET_GB` | `3.5` | Prune down to this size. |
| `DB_PRUNE_BATCH_SIZE` | `1000` | Events per batch. |
| `pruneProtectedKinds` | `{0, 3, 10002, 39697}` | Never pruned by age. |
| `DEBUG_LOGS` | `false` | Verbose per-event/query logging (observability cost control). |

## Bindings (wrangler.toml / wrangler.jsonc)

| Binding | Purpose |
|---|---|
| `RELAY_DATABASE` | D1 database (create with `wrangler d1 create`). |
| `RELAY_WEBSOCKET` | Durable Object class `RelayWebSocket`. |
| `ASSETS` | Static operator UI (automatic via `[assets]`). |

## Runtime identity overrides (plain-text bindings, no rebuild)

For hosted/multi-tenant deployments, these optional environment bindings
override the compile-time config at request time (see
`src/runtime-config.ts`):

| Variable | Overrides |
|---|---|
| `RELAY_NAME` | `relayInfo.name` (NIP-11) |
| `RELAY_NPUB` | `relayNpub` (payment recipient; also the default `zap_npub` for the deploy service) |
| `RELAY_PUBKEY` | `relayInfo.pubkey` (NIP-11) |
| `RELAY_CONTACT` | `relayInfo.contact` (NIP-11) |
| `SERVICE_OWNER_PUBKEY` | `SERVICE_OWNER_PUBKEY` (who may use `/admin`) |
| `DEPLOY_SERVICE_ENABLED` | `"false"` disables `/api/service/*` on this instance |

The hosted deploy service sets these per deployment (the customer is the
owner of their relay by default). Via wrangler: `npx wrangler deploy --var
RELAY_NAME:MyRelay --var RELAY_NPUB:npub1…`
