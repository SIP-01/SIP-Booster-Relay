import { RelayInfo } from './types';
import { SIP01_NOSTR_COMPATIBLE_KINDS, isSip01EventKindAllowed } from '../shared/nostr-nip-kinds.js';

// ***************************** //
// ** BEGIN EDITABLE SETTINGS ** //
// ***************************** //

// Settings below can be configured to your preferences. Everything here is
// static compile-time configuration — the same values are baked into the
// NIP-11 relay information document, so keep them truthful.

// ---------------------------------------------------------------------------
// Relay operating mode
// ---------------------------------------------------------------------------

/**
 * RELAY_MODE controls what this relay accepts:
 *
 *  - "sip01"   — SIP-01 optimized index relay. It accepts kind 39697
 *                observations plus the narrowly-scoped interoperable Nostr
 *                side-channel kinds needed by search clients: NIP-25/73
 *                reactions, NIP-51 bookmark lists, NIP-B0 public web
 *                bookmarks, and NIP-85 provider/assertion events. It also
 *                accepts kind 5 deletions, kind 9735 zap receipts when payment
 *                is enabled, kind 16919 crawler heartbeats and kind 39698
 *                ORBSTR capability announcements. 39697 alone receives
 *                SIP-01 validation/indexing; other events retain generic
 *                NIP-01 semantics. NIP-85 assertions are transported, not
 *                computed or endorsed by this relay.
 *  - "hybrid"  — General Nostr relay + first-class SIP-01 indexing. All
 *                kinds are accepted (subject to the allow/block lists
 *                below); kind 39697 additionally gets validated and indexed.
 *  - "general" — Plain Nostr relay (upstream Nosflare behavior). SIP-01
 *                validation is off; kind 39697 events are stored like any
 *                other addressable event. SIP-01 search/index APIs disable
 *                themselves.
 */
export const RELAY_MODE: 'general' | 'hybrid' | 'sip01' = 'sip01';

// ---------------------------------------------------------------------------
// SIP-01 (Search Index Protocol) settings
// ---------------------------------------------------------------------------

export const SIP01_ENABLED = (RELAY_MODE as string) !== 'general';

/** Enable DVM job transport only on a relay explicitly configured for it. */
export const NIP90_ENABLED = false;

/** Validate kind 39697 events at ingestion (SIP-01 §12.4) and reject
 *  malformed observations with `OK false invalid: ...`. */
export const SIP01_VALIDATION = true;

/** Maintain the SIP-01 document/observation/indexer tables and serve the
 *  document-aware NIP-50 search operators. */
export const SIP01_INDEXING = SIP01_ENABLED;

/** Crawler node heartbeat kind (indexstr + Crawlstr; replaceable range). The
 *  SIP-01 ecosystem dashboard reads these alongside kind 39697 for the
 *  crawler-network health view, so a dedicated index relay should carry them
 *  instead of splitting the network picture. Not validated (indexstr-owned
 *  schema); stored as an ordinary replaceable event. */
export const SIP01_HEARTBEAT_KIND = 16919;

/** Kinds accepted for storage in "sip01" mode. The interoperable kinds are
 *  ordinary Nostr events: kind 7/17 reactions, 10003/30003 NIP-51 bookmark
 *  lists, 39701 NIP-B0 web bookmarks, and 10040/30382-30385 NIP-85 provider
 *  and assertion events. NIP-51 private data remains client-side NIP-44
 *  ciphertext. This relay stores NIP-85 assertions but does not calculate
 *  trust scores or act as their source. Kind 5, kind 9735, heartbeat 16919
 *  and capability 39698 are relay/operational events. Kind 22242 AUTH is
 *  ephemeral and is never stored.
 */
export const SIP01_MODE_ALLOWED_KINDS = new Set<number>([
  ...SIP01_NOSTR_COMPATIBLE_KINDS,
  5,
  9735,
  SIP01_HEARTBEAT_KIND,
  39698,
]);

/** Per-indexer write rate limit for kind 39697 (token bucket: sustained
 *  rate per ms + burst capacity). Crawlers publish bursts of observations;
 *  the default allows ~120 observations/minute with a burst of 240. */
export const SIP01_INDEXER_RATE_LIMIT = { rate: 120 / 60000, capacity: 240 };

/** Maximum accepted byte size of a single kind 39697 event message. The
 *  spec's field caps make legit events far smaller than this. */
export const SIP01_MAX_EVENT_BYTES = 64 * 1024; // 64 KB

/** Indexer allow/block policy for kind 39697 publishers.
 *  - "open"      — any valid signed observation is accepted (default)
 *  - "allowlist" — only pubkeys in sip01AllowedIndexers may publish
 *  - "blocklist" — pubkeys in sip01BlockedIndexers are rejected
 */
export const SIP01_INDEXER_POLICY: 'open' | 'allowlist' | 'blocklist' = 'open';

export const sip01AllowedIndexers = new Set<string>([
  // ... hex pubkeys of explicitly allowed indexers (allowlist policy)
]);

export const sip01BlockedIndexers = new Set<string>([
  // ... hex pubkeys of blocked indexers (blocklist policy)
]);

// ---------------------------------------------------------------------------
// Search (NIP-50)
// ---------------------------------------------------------------------------

export const NIP50_ENABLED = true;

/** Hard cap on search results per query (also clamps `limit`). */
export const SEARCH_MAX_RESULTS = 100;

/** Maximum parsed length of a `search` string. */
export const SEARCH_MAX_QUERY_LENGTH = 500;

// ---------------------------------------------------------------------------
// Federation (NIP-77 negentropy)
// ---------------------------------------------------------------------------

export const NIP77_ENABLED = true;

/** Maximum events loaded into a single NEG-OPEN reconciliation session.
 *  Larger requests are refused with `NEG-ERR blocked:` (clients can narrow
 *  the filter, e.g. by time range). */
export const NEG_MAX_ITEMS = 100000;

/** Maximum size of a single negentropy wire message (bytes, pre-hex). */
export const NEG_FRAME_SIZE_LIMIT = 256 * 1024; // 256 KB

/** Idle timeout after which a NEG session is reclaimed (NEG-ERR closed:). */
export const NEG_SESSION_TIMEOUT_MS = 10 * 60 * 1000; // 10 minutes

/** Federation abuse budgets (audit P1): NEG-OPEN rate per client IP and a
 *  concurrent-session cap per Durable Object — reconciliation is CPU/D1
 *  work, so it gets its own budgets beyond the generic REQ rate limit. */
export const NEG_OPEN_PER_IP_PER_MIN = 10;
export const NEG_MAX_CONCURRENT_SESSIONS = 25;

// ---------------------------------------------------------------------------
// Event counts (NIP-45)
// ---------------------------------------------------------------------------

export const NIP45_ENABLED = true;

/** Upper bound of rows a single COUNT may scan before being refused. */
export const COUNT_MAX_ESTIMATE = 50000;

// ---------------------------------------------------------------------------
// Payment (OPTIONAL — SIP-01 itself is open; payment is relay policy)
// ---------------------------------------------------------------------------

/**
 * PAYMENT_MODE:
 *  - "free"         — no payment required; no payment UI (default)
 *  - "donation"     — payment optional; the landing page shows a zap button
 *  - "pay-to-relay" — publishing requires a paid pubkey (Nostr zap to
 *                     relayNpub of RELAY_ACCESS_PRICE_SATS; verified from
 *                     kind 9735 zap receipts)
 */
export const PAYMENT_MODE: 'free' | 'donation' | 'pay-to-relay' = 'free';

// Derived for upstream-compatible checks.
export const PAY_TO_RELAY_ENABLED = (PAYMENT_MODE as string) === 'pay-to-relay';

export const relayNpub = "npub1jzha7heltdlq5tdc5uqw0a8d4e2zl9022f8phmjj9h8fhjem0v2qmtdeke"; // Use your own npub
export const RELAY_ACCESS_PRICE_SATS = 212121; // Price in SATS for relay access

/** Hex pubkey of the relay operator (payment recipient). Derived from
 *  relayNpub at startup in relay-worker.ts. */

// ---------------------------------------------------------------------------
// Hosted deploy service (optional product surface — "deploy a relay for sats")
// ---------------------------------------------------------------------------

/**
 * HOSTED DEPLOY SERVICE. When enabled, this instance can deploy stock-config
 * SIP relays into a customer's own Cloudflare account after payment.
 *
 * ISOLATION (audit P0): the service handles customer Cloudflare credentials,
 * so it should NOT run on your public relay — ship it as its own Worker via
 * `wrangler.service.toml` (src/service-worker.ts) on a separate hostname.
 * Default is therefore `false`; the standalone service worker enables it via
 * the DEPLOY_SERVICE_ENABLED binding (see src/runtime-config.ts).
 *
 * All values below are DEFAULTS. The live values are editable at runtime from
 * the /admin dashboard (stored in D1 `service_settings`), so the owner can
 * change prices and receiving wallets without redeploying.
 */
export const DEPLOY_SERVICE_ENABLED = false;

/** The service owner's pubkey (hex) — only this key can sign into /admin. */
export const SERVICE_OWNER_PUBKEY = "90afdf5f3f5b7e0a2db8a700e7f4edae542f95ea524e1bee522dce9bcb3b7b14";

/** Default deployment price in sats (Lightning, paid as a Nostr zap). */
export const DEPLOY_PRICE_SATS = 21420;

/** Default deployment price in PRE (Presearch token on Base). */
export const DEPLOY_PRICE_PRE = 500;

/** Default Lightning recipient: zaps to this npub (its profile's lud16 is used). */
export const DEPLOY_ZAP_NPUB = relayNpub;

/** Default Base (EVM) receiving address for PRE payments — CHANGE THIS to your wallet. */
export const DEPLOY_PRE_ADDRESS = "0x0000000000000000000000000000000000000000";

/** PRE token contract on Base (chain id 8453). */
export const PRE_TOKEN_CONTRACT = "0x3816dd4bd44c8830c2fa020a5605bac72fa3de7a";
export const PRE_TOKEN_DECIMALS = 18;
export const BASE_CHAIN_ID = 8453;

/**
 * Base RPC endpoints — PRE payment verification queries ALL of them and
 * requires quorum agreement (a single compromised RPC cannot fake a payment).
 */
export const BASE_RPC_URLS = [
  "https://mainnet.base.org",
  "https://base-rpc.publicnode.com",
];
/** Minimum endpoints that must agree on a PRE payment. */
export const BASE_RPC_QUORUM = 2;

/**
 * Deploy bundle provenance (audit P0-3): deployments are pinned to an
 * immutable commit — never `main`. Bump DEPLOY_BUNDLE_REF and
 * DEPLOY_BUNDLE_SHA256 together per release (`sha256sum worker.js` of the
 * CI-built bundle at that commit). The hash check is enforced whenever
 * DEPLOY_BUNDLE_SHA256 is non-empty.
 */
export const DEPLOY_BUNDLE_REF = "405dc089b8ec8c4fbd1a3b294a16b6bb4718467a";
export const DEPLOY_BUNDLE_SHA256 = "";
export const DEPLOY_BUNDLE_URL =
  `https://raw.githubusercontent.com/NostrDanish/SIP-Booster-Relay/${DEPLOY_BUNDLE_REF}/worker.js`;

/** Deploy API abuse guard: max deployments per IP per day. */
export const DEPLOY_MAX_PER_IP_PER_DAY = 10;

// NIP-42 Authentication
export const AUTH_REQUIRED = false; // Set to true to require NIP-42 auth for reads+writes
export const AUTH_TIMEOUT_MS = 600000; // 10 minutes - how long the challenge is valid

// Verbose logging. Off by default: on Workers, observability log volume is a
// cost center at relay scale (lesson from relay.cashu.email's cost incident).
// Errors are always logged regardless.
export const DEBUG_LOGS = false;

// ---------------------------------------------------------------------------
// Relay info (NIP-11)
// ---------------------------------------------------------------------------

export const relayInfo: RelayInfo = {
  name: "UNCAGED SIP Relay",
  description: "A serverless SIP-01 search index relay — decentralized web-index observations (Nostr kind 39697) on Cloudflare Workers + D1. One shared decentralized index. Many independent indexers. No single owner.",
  pubkey: "90afdf5f3f5b7e0a2db8a700e7f4edae542f95ea524e1bee522dce9bcb3b7b14",
  contact: "npub1jzha7heltdlq5tdc5uqw0a8d4e2zl9022f8phmjj9h8fhjem0v2qmtdeke",
  supported_nips: [1, 5, 9, 11, 16, 25, 33, 42, 45, 50, 51, 73, 77],
  software: "https://github.com/NostrDanish/SIP-Booster-Relay",
  version: "1.1.0",
  icon: "https://raw.githubusercontent.com/NostrDanish/SIP-Booster-Relay/main/images/icon.png",

  // Optional fields (uncomment as needed):
  // banner: "https://example.com/banner.jpg",
  // privacy_policy: "https://example.com/privacy-policy.html",
  // terms_of_service: "https://example.com/terms.html",

  // Relay limitations
  limitation: {
    max_message_length: 262144, // 256KB
    max_subscriptions: 100,
    max_limit: 500,
    max_subid_length: 64,
    max_event_tags: 2000,
    max_content_length: 70000,
    // min_pow_difficulty: 0,
    auth_required: AUTH_REQUIRED,
    payment_required: PAY_TO_RELAY_ENABLED,
    restricted_writes: PAY_TO_RELAY_ENABLED || (SIP01_INDEXER_POLICY as string) === 'allowlist',
    // created_at_lower_limit: 0,
    created_at_upper_limit: 900, // reject events more than 15 min in the future
    default_limit: 100,
  },

  // Event retention policies (uncomment and configure as needed):
  // retention: [
  //   { kinds: [[30000, 39999]], count: 100000 },
  // ],

  // Content limitations by country (uncomment as needed):
  // relay_countries: ["*"],

  // Payment configuration (added dynamically in handleRelayInfoRequest when enabled):
  // payments_url / fees
};

/** SIP-01 capability block advertised in the NIP-11 document under the
 *  `uncaged_index` custom field (SIP-01 §15). Values are assembled
 *  dynamically from this configuration in relay-worker.ts. */
export const SIP01_SCOPE: 'global' | 'regional' | 'community' | 'private' = 'global';
export const SIP01_SCOPE_DOMAINS: string[] = ["*"];      // e.g. ["docs.example.com"] to specialize
export const SIP01_SCOPE_LANGUAGES: string[] = [];        // e.g. ["en", "de"]; empty = all
export const SIP01_SCOPE_DOCUMENT_TYPES: string[] = [];   // e.g. ["page", "repository"]; empty = all

// Nostr address NIP-05 verified users (for verified checkmark like username@your-relay.com)
export const nip05Users: Record<string, string> = {
  // "name": "hexpubkey",
  // ... more NIP-05 verified users
};

// ---------------------------------------------------------------------------
// Anti-spam / filtering (upstream Nosflare policy engine, preserved)
// ---------------------------------------------------------------------------

// Anti-spam settings
export const enableAntiSpam = false; // Set to true to enable hashing and duplicate content checking
export const enableGlobalDuplicateCheck = false; // When anti-spam is enabled, set to true for global hash (across all pubkeys and not individually)

// Kinds subjected to duplicate checks (only when anti-spam is enabled)
export const antiSpamKinds = new Set([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 40, 41, 42, 43, 44, 64, 818, 1021, 1022, 1040, 1059, 1063, 1311, 1617, 1621, 1622, 1630, 1633, 1971, 1984, 1985, 1986, 1987, 2003, 2004, 2022, 4550, 5000, 5999, 6000, 6999, 7000, 9000, 9030, 9041, 9467, 9734, 9735, 9802, 10000, 10001, 10002, 10003, 10004, 10005, 10006, 10007, 10009, 10015, 10030, 10050, 10063, 10096, 13194, 21000, 22242, 23194, 23195, 24133, 24242, 27235, 30000, 30001, 30002, 30003, 30004, 30005, 30007, 30008, 30009, 30015, 30017, 30018, 30019, 30020, 30023, 30024, 30030, 30040, 30041, 30063, 30078, 30311, 30315, 30402, 30403, 30617, 30618, 30818, 30819, 31890, 31922, 31923, 31924, 31925, 31989, 31990, 34235, 34236, 34237, 34550, 39000, 39001, 39002, 39003, 39004, 39005, 39006, 39007, 39008, 39009
  // Add other kinds you want to check for duplicates
]);

// Blocked pubkeys
// Add pubkeys in hex format to block write access
export const blockedPubkeys = new Set<string>([
  // ... pubkeys that are explicitly blocked
]);

// Allowed pubkeys
// Add pubkeys in hex format to allow write access
export const allowedPubkeys = new Set<string>([
  // ... pubkeys that are explicitly allowed
]);

// Blocked event kinds
// Add comma-separated kinds Ex: 1064, 4, 22242
export const blockedEventKinds = new Set<number>([
  1064
]);

// Allowed event kinds
// Add comma-separated kinds Ex: 1, 2, 3
export const allowedEventKinds = new Set<number>([
  // ... kinds that are explicitly allowed
]);

// Blocked words or phrases (case-insensitive)
export const blockedContent = new Set([
  "~~ hello world! ~~"
  // ... more blocked content
]);

// NIP-05 validation
export const checkValidNip05 = false; // Set to true to enable NIP-05 validation (this requires users to have a valid NIP-05 in order to publish events to the relay as part of anti-spam)

// Blocked NIP-05 domains
// This prevents users with NIP-05's from specified domains from publishing events to the relay
export const blockedNip05Domains = new Set<string>([
  // Add domains that are explicitly blocked
  // "primal.net"
]);

// Allowed NIP-05 domains
export const allowedNip05Domains = new Set<string>([
  // Add domains that are explicitly allowed
  // Leave empty to allow all domains (unless blocked)
]);

// Blocked tags
// Add comma-separated tags Ex: t, e, p
export const blockedTags = new Set<string>([
  // ... tags that are explicitly blocked
]);

// Allowed tags
// Add comma-separated tags Ex: p, e, t
export const allowedTags = new Set<string>([
  // "p", "e", "t"
  // ... tags that are explicitly allowed
]);

// Rate limit thresholds
export const PUBKEY_RATE_LIMIT = { rate: 10 / 60000, capacity: 10 }; // 10 EVENT messages per min
export const REQ_RATE_LIMIT = { rate: 50 / 60000, capacity: 50 }; // 50 REQ messages per min
export const excludedRateLimitKinds = new Set<number>([
  1059
  // ... kinds to exclude from EVENT rate limiting Ex: 1, 2, 3
]);

// ---------------------------------------------------------------------------
// Database pruning (D1 free tier: 5 GB, hard-enforced since 2026-09)
// ---------------------------------------------------------------------------

export const DB_PRUNING_ENABLED = true; // Set to false to disable automatic pruning
// D1 free tier is 5 GB total storage — and since 2026-09 the limit is HARD
// enforced (queries fail past it). Defaults stay well under that; paid-tier
// operators can raise these (D1 paid: 10 GB per database).
export const DB_SIZE_THRESHOLD_GB = 4; // Start pruning when database exceeds this size (in GB)
export const DB_PRUNE_BATCH_SIZE = 1000; // Number of events to delete per batch
export const DB_PRUNE_TARGET_GB = 3.5; // Target size to prune down to (in GB)

// Event kinds to preserve during pruning. In sip01/hybrid mode kind 39697
// observations are protected by default: an addressable index record's value
// is its latest state, not its age, and age-based eviction silently shrinks
// the searchable index. Set SIP01_PRUNE_ALLOWED to true to let pruning
// reclaim old observations anyway.
export const SIP01_PRUNE_ALLOWED = false;
export const pruneProtectedKinds = new Set<number>([
  0,      // Profile metadata
  3,      // Contact list / follows
  10002,  // Relay list metadata
  39697,  // SIP-01 web index observations (see SIP01_PRUNE_ALLOWED)
]);

// *************************** //
// ** END EDITABLE SETTINGS ** //
// *************************** //

// Helper validation functions
import { NostrEvent } from './types';

export function isPubkeyAllowed(pubkey: string): boolean {
  if (allowedPubkeys.size > 0 && !allowedPubkeys.has(pubkey)) {
    return false;
  }
  return !blockedPubkeys.has(pubkey);
}

export function isEventKindAllowed(kind: number): boolean {
  if (RELAY_MODE === 'sip01' && !isSip01EventKindAllowed(kind, NIP90_ENABLED, SIP01_HEARTBEAT_KIND)) {
    return false;
  }
  if (allowedEventKinds.size > 0 && !allowedEventKinds.has(kind)) {
    return false;
  }
  return !blockedEventKinds.has(kind);
}

export function isIndexerAllowed(pubkey: string): boolean {
  if ((SIP01_INDEXER_POLICY as string) === 'allowlist') {
    return sip01AllowedIndexers.has(pubkey);
  }
  if ((SIP01_INDEXER_POLICY as string) === 'blocklist') {
    return !sip01BlockedIndexers.has(pubkey);
  }
  return true;
}

export function containsBlockedContent(event: NostrEvent): boolean {
  const lowercaseContent = (event.content || "").toLowerCase();
  const lowercaseTags = event.tags.map(tag => tag.join("").toLowerCase());

  for (const blocked of blockedContent) {
    const blockedLower = blocked.toLowerCase(); // Checks case-insensitively
    if (
      lowercaseContent.includes(blockedLower) ||
      lowercaseTags.some(tag => tag.includes(blockedLower))
    ) {
      return true;
    }
  }
  return false;
}

export function isTagAllowed(tag: string): boolean {
  if (allowedTags.size > 0 && !allowedTags.has(tag)) {
    return false;
  }
  return !blockedTags.has(tag);
}
