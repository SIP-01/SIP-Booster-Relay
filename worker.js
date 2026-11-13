var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/types.ts
var _RateLimiter = class _RateLimiter {
  constructor(rate, capacity) {
    this.tokens = capacity;
    this.lastRefillTime = Date.now();
    this.capacity = capacity;
    this.fillRate = rate;
  }
  removeToken() {
    this.refill();
    if (this.tokens < 1) {
      return false;
    }
    this.tokens -= 1;
    return true;
  }
  refill() {
    const now = Date.now();
    const elapsedTime = now - this.lastRefillTime;
    const tokensToAdd = Math.floor(elapsedTime * this.fillRate);
    this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
    this.lastRefillTime = now;
  }
};
__name(_RateLimiter, "RateLimiter");
var RateLimiter = _RateLimiter;

// src/config.ts
var config_exports = {};
__export(config_exports, {
  AUTH_REQUIRED: () => AUTH_REQUIRED,
  AUTH_TIMEOUT_MS: () => AUTH_TIMEOUT_MS,
  BASE_CHAIN_ID: () => BASE_CHAIN_ID,
  BASE_RPC_QUORUM: () => BASE_RPC_QUORUM,
  BASE_RPC_URLS: () => BASE_RPC_URLS,
  COUNT_MAX_ESTIMATE: () => COUNT_MAX_ESTIMATE,
  DB_PRUNE_BATCH_SIZE: () => DB_PRUNE_BATCH_SIZE,
  DB_PRUNE_TARGET_GB: () => DB_PRUNE_TARGET_GB,
  DB_PRUNING_ENABLED: () => DB_PRUNING_ENABLED,
  DB_SIZE_THRESHOLD_GB: () => DB_SIZE_THRESHOLD_GB,
  DEBUG_LOGS: () => DEBUG_LOGS,
  DEPLOY_BUNDLE_REF: () => DEPLOY_BUNDLE_REF,
  DEPLOY_BUNDLE_SHA256: () => DEPLOY_BUNDLE_SHA256,
  DEPLOY_BUNDLE_URL: () => DEPLOY_BUNDLE_URL,
  DEPLOY_MAX_PER_IP_PER_DAY: () => DEPLOY_MAX_PER_IP_PER_DAY,
  DEPLOY_PRE_ADDRESS: () => DEPLOY_PRE_ADDRESS,
  DEPLOY_PRICE_PRE: () => DEPLOY_PRICE_PRE,
  DEPLOY_PRICE_SATS: () => DEPLOY_PRICE_SATS,
  DEPLOY_SERVICE_ENABLED: () => DEPLOY_SERVICE_ENABLED,
  DEPLOY_ZAP_NPUB: () => DEPLOY_ZAP_NPUB,
  NEG_FRAME_SIZE_LIMIT: () => NEG_FRAME_SIZE_LIMIT,
  NEG_MAX_CONCURRENT_SESSIONS: () => NEG_MAX_CONCURRENT_SESSIONS,
  NEG_MAX_ITEMS: () => NEG_MAX_ITEMS,
  NEG_OPEN_PER_IP_PER_MIN: () => NEG_OPEN_PER_IP_PER_MIN,
  NEG_SESSION_TIMEOUT_MS: () => NEG_SESSION_TIMEOUT_MS,
  NIP45_ENABLED: () => NIP45_ENABLED,
  NIP50_ENABLED: () => NIP50_ENABLED,
  NIP77_ENABLED: () => NIP77_ENABLED,
  PAYMENT_MODE: () => PAYMENT_MODE,
  PAY_TO_RELAY_ENABLED: () => PAY_TO_RELAY_ENABLED,
  PRE_TOKEN_CONTRACT: () => PRE_TOKEN_CONTRACT,
  PRE_TOKEN_DECIMALS: () => PRE_TOKEN_DECIMALS,
  PUBKEY_RATE_LIMIT: () => PUBKEY_RATE_LIMIT,
  RELAY_ACCESS_PRICE_SATS: () => RELAY_ACCESS_PRICE_SATS,
  RELAY_MODE: () => RELAY_MODE,
  REQ_RATE_LIMIT: () => REQ_RATE_LIMIT,
  SEARCH_MAX_QUERY_LENGTH: () => SEARCH_MAX_QUERY_LENGTH,
  SEARCH_MAX_RESULTS: () => SEARCH_MAX_RESULTS,
  SERVICE_OWNER_PUBKEY: () => SERVICE_OWNER_PUBKEY,
  SIP01_ENABLED: () => SIP01_ENABLED,
  SIP01_HEARTBEAT_KIND: () => SIP01_HEARTBEAT_KIND,
  SIP01_INDEXER_POLICY: () => SIP01_INDEXER_POLICY,
  SIP01_INDEXER_RATE_LIMIT: () => SIP01_INDEXER_RATE_LIMIT,
  SIP01_INDEXING: () => SIP01_INDEXING,
  SIP01_MAX_EVENT_BYTES: () => SIP01_MAX_EVENT_BYTES,
  SIP01_MODE_ALLOWED_KINDS: () => SIP01_MODE_ALLOWED_KINDS,
  SIP01_PRUNE_ALLOWED: () => SIP01_PRUNE_ALLOWED,
  SIP01_SCOPE: () => SIP01_SCOPE,
  SIP01_SCOPE_DOCUMENT_TYPES: () => SIP01_SCOPE_DOCUMENT_TYPES,
  SIP01_SCOPE_DOMAINS: () => SIP01_SCOPE_DOMAINS,
  SIP01_SCOPE_LANGUAGES: () => SIP01_SCOPE_LANGUAGES,
  SIP01_VALIDATION: () => SIP01_VALIDATION,
  allowedEventKinds: () => allowedEventKinds,
  allowedNip05Domains: () => allowedNip05Domains,
  allowedPubkeys: () => allowedPubkeys,
  allowedTags: () => allowedTags,
  antiSpamKinds: () => antiSpamKinds,
  blockedContent: () => blockedContent,
  blockedEventKinds: () => blockedEventKinds,
  blockedNip05Domains: () => blockedNip05Domains,
  blockedPubkeys: () => blockedPubkeys,
  blockedTags: () => blockedTags,
  checkValidNip05: () => checkValidNip05,
  containsBlockedContent: () => containsBlockedContent,
  enableAntiSpam: () => enableAntiSpam,
  enableGlobalDuplicateCheck: () => enableGlobalDuplicateCheck,
  excludedRateLimitKinds: () => excludedRateLimitKinds,
  isEventKindAllowed: () => isEventKindAllowed,
  isIndexerAllowed: () => isIndexerAllowed,
  isPubkeyAllowed: () => isPubkeyAllowed,
  isTagAllowed: () => isTagAllowed,
  nip05Users: () => nip05Users,
  pruneProtectedKinds: () => pruneProtectedKinds,
  relayInfo: () => relayInfo,
  relayNpub: () => relayNpub,
  sip01AllowedIndexers: () => sip01AllowedIndexers,
  sip01BlockedIndexers: () => sip01BlockedIndexers
});

// shared/nostr-nip-kinds.js
var SIP01_NOSTR_COMPATIBLE_KINDS = Object.freeze([
  39697,
  // SIP-01 web-index observation
  7,
  // NIP-25 reaction to a native Nostr event
  17,
  // NIP-25 reaction to external content, using NIP-73 i/k tags
  10003,
  // NIP-51 global bookmark list
  30003,
  // NIP-51 categorized bookmark set
  39701,
  // NIP-B0 public web bookmark
  10040,
  // NIP-85 trusted-provider list (transport only)
  30382,
  // NIP-85 user assertion (transport only)
  30383,
  // NIP-85 event assertion (transport only)
  30384,
  // NIP-85 addressable-event assertion (transport only)
  30385
  // NIP-85 external-identifier assertion (transport only)
]);

// src/config.ts
var RELAY_MODE = "sip01";
var SIP01_ENABLED = RELAY_MODE !== "general";
var SIP01_VALIDATION = true;
var SIP01_INDEXING = SIP01_ENABLED;
var SIP01_HEARTBEAT_KIND = 16919;
var SIP01_MODE_ALLOWED_KINDS = /* @__PURE__ */ new Set([
  ...SIP01_NOSTR_COMPATIBLE_KINDS,
  5,
  9735,
  SIP01_HEARTBEAT_KIND,
  39698
]);
var SIP01_INDEXER_RATE_LIMIT = { rate: 120 / 6e4, capacity: 240 };
var SIP01_MAX_EVENT_BYTES = 64 * 1024;
var SIP01_INDEXER_POLICY = "open";
var sip01AllowedIndexers = /* @__PURE__ */ new Set([
  // ... hex pubkeys of explicitly allowed indexers (allowlist policy)
]);
var sip01BlockedIndexers = /* @__PURE__ */ new Set([
  // ... hex pubkeys of blocked indexers (blocklist policy)
]);
var NIP50_ENABLED = true;
var SEARCH_MAX_RESULTS = 100;
var SEARCH_MAX_QUERY_LENGTH = 500;
var NIP77_ENABLED = true;
var NEG_MAX_ITEMS = 1e5;
var NEG_FRAME_SIZE_LIMIT = 256 * 1024;
var NEG_SESSION_TIMEOUT_MS = 10 * 60 * 1e3;
var NEG_OPEN_PER_IP_PER_MIN = 10;
var NEG_MAX_CONCURRENT_SESSIONS = 25;
var NIP45_ENABLED = true;
var COUNT_MAX_ESTIMATE = 5e4;
var PAYMENT_MODE = "free";
var PAY_TO_RELAY_ENABLED = PAYMENT_MODE === "pay-to-relay";
var relayNpub = "npub1jzha7heltdlq5tdc5uqw0a8d4e2zl9022f8phmjj9h8fhjem0v2qmtdeke";
var RELAY_ACCESS_PRICE_SATS = 212121;
var DEPLOY_SERVICE_ENABLED = false;
var SERVICE_OWNER_PUBKEY = "90afdf5f3f5b7e0a2db8a700e7f4edae542f95ea524e1bee522dce9bcb3b7b14";
var DEPLOY_PRICE_SATS = 21420;
var DEPLOY_PRICE_PRE = 500;
var DEPLOY_ZAP_NPUB = relayNpub;
var DEPLOY_PRE_ADDRESS = "0x0000000000000000000000000000000000000000";
var PRE_TOKEN_CONTRACT = "0x3816dd4bd44c8830c2fa020a5605bac72fa3de7a";
var PRE_TOKEN_DECIMALS = 18;
var BASE_CHAIN_ID = 8453;
var BASE_RPC_URLS = [
  "https://mainnet.base.org",
  "https://base-rpc.publicnode.com"
];
var BASE_RPC_QUORUM = 2;
var DEPLOY_BUNDLE_REF = "405dc089b8ec8c4fbd1a3b294a16b6bb4718467a";
var DEPLOY_BUNDLE_SHA256 = "";
var DEPLOY_BUNDLE_URL = `https://raw.githubusercontent.com/NostrDanish/SIP-Booster-Relay/${DEPLOY_BUNDLE_REF}/worker.js`;
var DEPLOY_MAX_PER_IP_PER_DAY = 10;
var AUTH_REQUIRED = false;
var AUTH_TIMEOUT_MS = 6e5;
var DEBUG_LOGS = false;
var relayInfo = {
  name: "UNCAGED SIP Relay",
  description: "A serverless SIP-01 search index relay \u2014 decentralized web-index observations (Nostr kind 39697) on Cloudflare Workers + D1. One shared decentralized index. Many independent indexers. No single owner.",
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
    max_message_length: 262144,
    // 256KB
    max_subscriptions: 100,
    max_limit: 500,
    max_subid_length: 64,
    max_event_tags: 2e3,
    max_content_length: 7e4,
    // min_pow_difficulty: 0,
    auth_required: AUTH_REQUIRED,
    payment_required: PAY_TO_RELAY_ENABLED,
    restricted_writes: PAY_TO_RELAY_ENABLED || SIP01_INDEXER_POLICY === "allowlist",
    // created_at_lower_limit: 0,
    created_at_upper_limit: 900,
    // reject events more than 15 min in the future
    default_limit: 100
  }
  // Event retention policies (uncomment and configure as needed):
  // retention: [
  //   { kinds: [[30000, 39999]], count: 100000 },
  // ],
  // Content limitations by country (uncomment as needed):
  // relay_countries: ["*"],
  // Payment configuration (added dynamically in handleRelayInfoRequest when enabled):
  // payments_url / fees
};
var SIP01_SCOPE = "global";
var SIP01_SCOPE_DOMAINS = ["*"];
var SIP01_SCOPE_LANGUAGES = [];
var SIP01_SCOPE_DOCUMENT_TYPES = [];
var nip05Users = {
  // "name": "hexpubkey",
  // ... more NIP-05 verified users
};
var enableAntiSpam = false;
var enableGlobalDuplicateCheck = false;
var antiSpamKinds = /* @__PURE__ */ new Set([
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  16,
  17,
  40,
  41,
  42,
  43,
  44,
  64,
  818,
  1021,
  1022,
  1040,
  1059,
  1063,
  1311,
  1617,
  1621,
  1622,
  1630,
  1633,
  1971,
  1984,
  1985,
  1986,
  1987,
  2003,
  2004,
  2022,
  4550,
  5e3,
  5999,
  6e3,
  6999,
  7e3,
  9e3,
  9030,
  9041,
  9467,
  9734,
  9735,
  9802,
  1e4,
  10001,
  10002,
  10003,
  10004,
  10005,
  10006,
  10007,
  10009,
  10015,
  10030,
  10050,
  10063,
  10096,
  13194,
  21e3,
  22242,
  23194,
  23195,
  24133,
  24242,
  27235,
  3e4,
  30001,
  30002,
  30003,
  30004,
  30005,
  30007,
  30008,
  30009,
  30015,
  30017,
  30018,
  30019,
  30020,
  30023,
  30024,
  30030,
  30040,
  30041,
  30063,
  30078,
  30311,
  30315,
  30402,
  30403,
  30617,
  30618,
  30818,
  30819,
  31890,
  31922,
  31923,
  31924,
  31925,
  31989,
  31990,
  34235,
  34236,
  34237,
  34550,
  39e3,
  39001,
  39002,
  39003,
  39004,
  39005,
  39006,
  39007,
  39008,
  39009
  // Add other kinds you want to check for duplicates
]);
var blockedPubkeys = /* @__PURE__ */ new Set([
  // ... pubkeys that are explicitly blocked
]);
var allowedPubkeys = /* @__PURE__ */ new Set([
  // ... pubkeys that are explicitly allowed
]);
var blockedEventKinds = /* @__PURE__ */ new Set([
  1064
]);
var allowedEventKinds = /* @__PURE__ */ new Set([
  // ... kinds that are explicitly allowed
]);
var blockedContent = /* @__PURE__ */ new Set([
  "~~ hello world! ~~"
  // ... more blocked content
]);
var checkValidNip05 = false;
var blockedNip05Domains = /* @__PURE__ */ new Set([
  // Add domains that are explicitly blocked
  // "primal.net"
]);
var allowedNip05Domains = /* @__PURE__ */ new Set([
  // Add domains that are explicitly allowed
  // Leave empty to allow all domains (unless blocked)
]);
var blockedTags = /* @__PURE__ */ new Set([
  // ... tags that are explicitly blocked
]);
var allowedTags = /* @__PURE__ */ new Set([
  // "p", "e", "t"
  // ... tags that are explicitly allowed
]);
var PUBKEY_RATE_LIMIT = { rate: 10 / 6e4, capacity: 10 };
var REQ_RATE_LIMIT = { rate: 50 / 6e4, capacity: 50 };
var excludedRateLimitKinds = /* @__PURE__ */ new Set([
  1059
  // ... kinds to exclude from EVENT rate limiting Ex: 1, 2, 3
]);
var DB_PRUNING_ENABLED = true;
var DB_SIZE_THRESHOLD_GB = 4;
var DB_PRUNE_BATCH_SIZE = 1e3;
var DB_PRUNE_TARGET_GB = 3.5;
var SIP01_PRUNE_ALLOWED = false;
var pruneProtectedKinds = /* @__PURE__ */ new Set([
  0,
  // Profile metadata
  3,
  // Contact list / follows
  10002,
  // Relay list metadata
  39697
  // SIP-01 web index observations (see SIP01_PRUNE_ALLOWED)
]);
function isPubkeyAllowed(pubkey) {
  if (allowedPubkeys.size > 0 && !allowedPubkeys.has(pubkey)) {
    return false;
  }
  return !blockedPubkeys.has(pubkey);
}
__name(isPubkeyAllowed, "isPubkeyAllowed");
function isEventKindAllowed(kind) {
  if (RELAY_MODE === "sip01" && !SIP01_MODE_ALLOWED_KINDS.has(kind)) {
    return false;
  }
  if (allowedEventKinds.size > 0 && !allowedEventKinds.has(kind)) {
    return false;
  }
  return !blockedEventKinds.has(kind);
}
__name(isEventKindAllowed, "isEventKindAllowed");
function isIndexerAllowed(pubkey) {
  if (SIP01_INDEXER_POLICY === "allowlist") {
    return sip01AllowedIndexers.has(pubkey);
  }
  if (SIP01_INDEXER_POLICY === "blocklist") {
    return !sip01BlockedIndexers.has(pubkey);
  }
  return true;
}
__name(isIndexerAllowed, "isIndexerAllowed");
function containsBlockedContent(event) {
  const lowercaseContent = (event.content || "").toLowerCase();
  const lowercaseTags = event.tags.map((tag) => tag.join("").toLowerCase());
  for (const blocked of blockedContent) {
    const blockedLower = blocked.toLowerCase();
    if (lowercaseContent.includes(blockedLower) || lowercaseTags.some((tag) => tag.includes(blockedLower))) {
      return true;
    }
  }
  return false;
}
__name(containsBlockedContent, "containsBlockedContent");
function isTagAllowed(tag) {
  if (allowedTags.size > 0 && !allowedTags.has(tag)) {
    return false;
  }
  return !blockedTags.has(tag);
}
__name(isTagAllowed, "isTagAllowed");

// node_modules/@noble/hashes/esm/crypto.js
var crypto2 = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;

// node_modules/@noble/hashes/esm/utils.js
function isBytes(a) {
  return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
__name(isBytes, "isBytes");
function anumber(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error("positive integer expected, got " + n);
}
__name(anumber, "anumber");
function abytes(b, ...lengths) {
  if (!isBytes(b))
    throw new Error("Uint8Array expected");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b.length);
}
__name(abytes, "abytes");
function ahash(h) {
  if (typeof h !== "function" || typeof h.create !== "function")
    throw new Error("Hash should be wrapped by utils.createHasher");
  anumber(h.outputLen);
  anumber(h.blockLen);
}
__name(ahash, "ahash");
function aexists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
__name(aexists, "aexists");
function aoutput(out, instance) {
  abytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error("digestInto() expects output buffer of length at least " + min);
  }
}
__name(aoutput, "aoutput");
function clean(...arrays) {
  for (let i = 0; i < arrays.length; i++) {
    arrays[i].fill(0);
  }
}
__name(clean, "clean");
function createView(arr) {
  return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
__name(createView, "createView");
function rotr(word, shift) {
  return word << 32 - shift | word >>> shift;
}
__name(rotr, "rotr");
var hasHexBuiltin = /* @__PURE__ */ (() => (
  // @ts-ignore
  typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function"
))();
var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
function bytesToHex(bytes) {
  abytes(bytes);
  if (hasHexBuiltin)
    return bytes.toHex();
  let hex = "";
  for (let i = 0; i < bytes.length; i++) {
    hex += hexes[bytes[i]];
  }
  return hex;
}
__name(bytesToHex, "bytesToHex");
var asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function asciiToBase16(ch) {
  if (ch >= asciis._0 && ch <= asciis._9)
    return ch - asciis._0;
  if (ch >= asciis.A && ch <= asciis.F)
    return ch - (asciis.A - 10);
  if (ch >= asciis.a && ch <= asciis.f)
    return ch - (asciis.a - 10);
  return;
}
__name(asciiToBase16, "asciiToBase16");
function hexToBytes(hex) {
  if (typeof hex !== "string")
    throw new Error("hex string expected, got " + typeof hex);
  if (hasHexBuiltin)
    return Uint8Array.fromHex(hex);
  const hl = hex.length;
  const al = hl / 2;
  if (hl % 2)
    throw new Error("hex string expected, got unpadded hex of length " + hl);
  const array = new Uint8Array(al);
  for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
    const n1 = asciiToBase16(hex.charCodeAt(hi));
    const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
    if (n1 === void 0 || n2 === void 0) {
      const char = hex[hi] + hex[hi + 1];
      throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
    }
    array[ai] = n1 * 16 + n2;
  }
  return array;
}
__name(hexToBytes, "hexToBytes");
function utf8ToBytes(str) {
  if (typeof str !== "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(str));
}
__name(utf8ToBytes, "utf8ToBytes");
function toBytes(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  abytes(data);
  return data;
}
__name(toBytes, "toBytes");
function concatBytes(...arrays) {
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    const a = arrays[i];
    abytes(a);
    sum += a.length;
  }
  const res = new Uint8Array(sum);
  for (let i = 0, pad = 0; i < arrays.length; i++) {
    const a = arrays[i];
    res.set(a, pad);
    pad += a.length;
  }
  return res;
}
__name(concatBytes, "concatBytes");
var _Hash = class _Hash {
};
__name(_Hash, "Hash");
var Hash = _Hash;
function createHasher(hashCons) {
  const hashC = /* @__PURE__ */ __name((msg) => hashCons().update(toBytes(msg)).digest(), "hashC");
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
__name(createHasher, "createHasher");
function randomBytes(bytesLength = 32) {
  if (crypto2 && typeof crypto2.getRandomValues === "function") {
    return crypto2.getRandomValues(new Uint8Array(bytesLength));
  }
  if (crypto2 && typeof crypto2.randomBytes === "function") {
    return Uint8Array.from(crypto2.randomBytes(bytesLength));
  }
  throw new Error("crypto.getRandomValues must be defined");
}
__name(randomBytes, "randomBytes");

// node_modules/@noble/hashes/esm/_md.js
function setBigUint64(view, byteOffset, value, isLE) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE);
  const _32n = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n & _u32_max);
  const wl = Number(value & _u32_max);
  const h = isLE ? 4 : 0;
  const l = isLE ? 0 : 4;
  view.setUint32(byteOffset + h, wh, isLE);
  view.setUint32(byteOffset + l, wl, isLE);
}
__name(setBigUint64, "setBigUint64");
function Chi(a, b, c) {
  return a & b ^ ~a & c;
}
__name(Chi, "Chi");
function Maj(a, b, c) {
  return a & b ^ a & c ^ b & c;
}
__name(Maj, "Maj");
var _HashMD = class _HashMD extends Hash {
  constructor(blockLen, outputLen, padOffset, isLE) {
    super();
    this.finished = false;
    this.length = 0;
    this.pos = 0;
    this.destroyed = false;
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView(this.buffer);
  }
  update(data) {
    aexists(this);
    data = toBytes(data);
    abytes(data);
    const { view, buffer, blockLen } = this;
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    aexists(this);
    aoutput(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    clean(this.buffer.subarray(pos));
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i = pos; i < blockLen; i++)
      buffer[i] = 0;
    setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
    this.process(view, 0);
    const oview = createView(out);
    const len = this.outputLen;
    if (len % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const outLen = len / 4;
    const state = this.get();
    if (outLen > state.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let i = 0; i < outLen; i++)
      oview.setUint32(4 * i, state[i], isLE);
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to) {
    to || (to = new this.constructor());
    to.set(...this.get());
    const { blockLen, buffer, length, finished, destroyed, pos } = this;
    to.destroyed = destroyed;
    to.finished = finished;
    to.length = length;
    to.pos = pos;
    if (length % blockLen)
      to.buffer.set(buffer);
    return to;
  }
  clone() {
    return this._cloneInto();
  }
};
__name(_HashMD, "HashMD");
var HashMD = _HashMD;
var SHA256_IV = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);

// node_modules/@noble/hashes/esm/sha2.js
var SHA256_K = /* @__PURE__ */ Uint32Array.from([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
var _SHA256 = class _SHA256 extends HashMD {
  constructor(outputLen = 32) {
    super(64, outputLen, 8, false);
    this.A = SHA256_IV[0] | 0;
    this.B = SHA256_IV[1] | 0;
    this.C = SHA256_IV[2] | 0;
    this.D = SHA256_IV[3] | 0;
    this.E = SHA256_IV[4] | 0;
    this.F = SHA256_IV[5] | 0;
    this.G = SHA256_IV[6] | 0;
    this.H = SHA256_IV[7] | 0;
  }
  get() {
    const { A, B, C, D, E, F, G, H } = this;
    return [A, B, C, D, E, F, G, H];
  }
  // prettier-ignore
  set(A, B, C, D, E, F, G, H) {
    this.A = A | 0;
    this.B = B | 0;
    this.C = C | 0;
    this.D = D | 0;
    this.E = E | 0;
    this.F = F | 0;
    this.G = G | 0;
    this.H = H | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      SHA256_W[i] = view.getUint32(offset, false);
    for (let i = 16; i < 64; i++) {
      const W15 = SHA256_W[i - 15];
      const W2 = SHA256_W[i - 2];
      const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
      const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
      SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
    }
    let { A, B, C, D, E, F, G, H } = this;
    for (let i = 0; i < 64; i++) {
      const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
      const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
      const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
      const T2 = sigma0 + Maj(A, B, C) | 0;
      H = G;
      G = F;
      F = E;
      E = D + T1 | 0;
      D = C;
      C = B;
      B = A;
      A = T1 + T2 | 0;
    }
    A = A + this.A | 0;
    B = B + this.B | 0;
    C = C + this.C | 0;
    D = D + this.D | 0;
    E = E + this.E | 0;
    F = F + this.F | 0;
    G = G + this.G | 0;
    H = H + this.H | 0;
    this.set(A, B, C, D, E, F, G, H);
  }
  roundClean() {
    clean(SHA256_W);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    clean(this.buffer);
  }
};
__name(_SHA256, "SHA256");
var SHA256 = _SHA256;
var sha256 = /* @__PURE__ */ createHasher(() => new SHA256());

// node_modules/@noble/hashes/esm/hmac.js
var _HMAC = class _HMAC extends Hash {
  constructor(hash, _key) {
    super();
    this.finished = false;
    this.destroyed = false;
    ahash(hash);
    const key = toBytes(_key);
    this.iHash = hash.create();
    if (typeof this.iHash.update !== "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen;
    this.outputLen = this.iHash.outputLen;
    const blockLen = this.blockLen;
    const pad = new Uint8Array(blockLen);
    pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
    for (let i = 0; i < pad.length; i++)
      pad[i] ^= 54;
    this.iHash.update(pad);
    this.oHash = hash.create();
    for (let i = 0; i < pad.length; i++)
      pad[i] ^= 54 ^ 92;
    this.oHash.update(pad);
    clean(pad);
  }
  update(buf) {
    aexists(this);
    this.iHash.update(buf);
    return this;
  }
  digestInto(out) {
    aexists(this);
    abytes(out, this.outputLen);
    this.finished = true;
    this.iHash.digestInto(out);
    this.oHash.update(out);
    this.oHash.digestInto(out);
    this.destroy();
  }
  digest() {
    const out = new Uint8Array(this.oHash.outputLen);
    this.digestInto(out);
    return out;
  }
  _cloneInto(to) {
    to || (to = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
    to = to;
    to.finished = finished;
    to.destroyed = destroyed;
    to.blockLen = blockLen;
    to.outputLen = outputLen;
    to.oHash = oHash._cloneInto(to.oHash);
    to.iHash = iHash._cloneInto(to.iHash);
    return to;
  }
  clone() {
    return this._cloneInto();
  }
  destroy() {
    this.destroyed = true;
    this.oHash.destroy();
    this.iHash.destroy();
  }
};
__name(_HMAC, "HMAC");
var HMAC = _HMAC;
var hmac = /* @__PURE__ */ __name((hash, key, message) => new HMAC(hash, key).update(message).digest(), "hmac");
hmac.create = (hash, key) => new HMAC(hash, key);

// node_modules/@noble/curves/esm/utils.js
var _0n = /* @__PURE__ */ BigInt(0);
var _1n = /* @__PURE__ */ BigInt(1);
function _abool2(value, title = "") {
  if (typeof value !== "boolean") {
    const prefix = title && `"${title}"`;
    throw new Error(prefix + "expected boolean, got type=" + typeof value);
  }
  return value;
}
__name(_abool2, "_abool2");
function _abytes2(value, length, title = "") {
  const bytes = isBytes(value);
  const len = value?.length;
  const needsLen = length !== void 0;
  if (!bytes || needsLen && len !== length) {
    const prefix = title && `"${title}" `;
    const ofLen = needsLen ? ` of length ${length}` : "";
    const got = bytes ? `length=${len}` : `type=${typeof value}`;
    throw new Error(prefix + "expected Uint8Array" + ofLen + ", got " + got);
  }
  return value;
}
__name(_abytes2, "_abytes2");
function numberToHexUnpadded(num2) {
  const hex = num2.toString(16);
  return hex.length & 1 ? "0" + hex : hex;
}
__name(numberToHexUnpadded, "numberToHexUnpadded");
function hexToNumber(hex) {
  if (typeof hex !== "string")
    throw new Error("hex string expected, got " + typeof hex);
  return hex === "" ? _0n : BigInt("0x" + hex);
}
__name(hexToNumber, "hexToNumber");
function bytesToNumberBE(bytes) {
  return hexToNumber(bytesToHex(bytes));
}
__name(bytesToNumberBE, "bytesToNumberBE");
function bytesToNumberLE(bytes) {
  abytes(bytes);
  return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
}
__name(bytesToNumberLE, "bytesToNumberLE");
function numberToBytesBE(n, len) {
  return hexToBytes(n.toString(16).padStart(len * 2, "0"));
}
__name(numberToBytesBE, "numberToBytesBE");
function numberToBytesLE(n, len) {
  return numberToBytesBE(n, len).reverse();
}
__name(numberToBytesLE, "numberToBytesLE");
function ensureBytes(title, hex, expectedLength) {
  let res;
  if (typeof hex === "string") {
    try {
      res = hexToBytes(hex);
    } catch (e) {
      throw new Error(title + " must be hex string or Uint8Array, cause: " + e);
    }
  } else if (isBytes(hex)) {
    res = Uint8Array.from(hex);
  } else {
    throw new Error(title + " must be hex string or Uint8Array");
  }
  const len = res.length;
  if (typeof expectedLength === "number" && len !== expectedLength)
    throw new Error(title + " of length " + expectedLength + " expected, got " + len);
  return res;
}
__name(ensureBytes, "ensureBytes");
var isPosBig = /* @__PURE__ */ __name((n) => typeof n === "bigint" && _0n <= n, "isPosBig");
function inRange(n, min, max) {
  return isPosBig(n) && isPosBig(min) && isPosBig(max) && min <= n && n < max;
}
__name(inRange, "inRange");
function aInRange(title, n, min, max) {
  if (!inRange(n, min, max))
    throw new Error("expected valid " + title + ": " + min + " <= n < " + max + ", got " + n);
}
__name(aInRange, "aInRange");
function bitLen(n) {
  let len;
  for (len = 0; n > _0n; n >>= _1n, len += 1)
    ;
  return len;
}
__name(bitLen, "bitLen");
var bitMask = /* @__PURE__ */ __name((n) => (_1n << BigInt(n)) - _1n, "bitMask");
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
  if (typeof hashLen !== "number" || hashLen < 2)
    throw new Error("hashLen must be a number");
  if (typeof qByteLen !== "number" || qByteLen < 2)
    throw new Error("qByteLen must be a number");
  if (typeof hmacFn !== "function")
    throw new Error("hmacFn must be a function");
  const u8n = /* @__PURE__ */ __name((len) => new Uint8Array(len), "u8n");
  const u8of = /* @__PURE__ */ __name((byte) => Uint8Array.of(byte), "u8of");
  let v = u8n(hashLen);
  let k = u8n(hashLen);
  let i = 0;
  const reset = /* @__PURE__ */ __name(() => {
    v.fill(1);
    k.fill(0);
    i = 0;
  }, "reset");
  const h = /* @__PURE__ */ __name((...b) => hmacFn(k, v, ...b), "h");
  const reseed = /* @__PURE__ */ __name((seed = u8n(0)) => {
    k = h(u8of(0), seed);
    v = h();
    if (seed.length === 0)
      return;
    k = h(u8of(1), seed);
    v = h();
  }, "reseed");
  const gen = /* @__PURE__ */ __name(() => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let len = 0;
    const out = [];
    while (len < qByteLen) {
      v = h();
      const sl = v.slice();
      out.push(sl);
      len += v.length;
    }
    return concatBytes(...out);
  }, "gen");
  const genUntil = /* @__PURE__ */ __name((seed, pred) => {
    reset();
    reseed(seed);
    let res = void 0;
    while (!(res = pred(gen())))
      reseed();
    reset();
    return res;
  }, "genUntil");
  return genUntil;
}
__name(createHmacDrbg, "createHmacDrbg");
function _validateObject(object, fields, optFields = {}) {
  if (!object || typeof object !== "object")
    throw new Error("expected valid options object");
  function checkField(fieldName, expectedType, isOpt) {
    const val = object[fieldName];
    if (isOpt && val === void 0)
      return;
    const current = typeof val;
    if (current !== expectedType || val === null)
      throw new Error(`param "${fieldName}" is invalid: expected ${expectedType}, got ${current}`);
  }
  __name(checkField, "checkField");
  Object.entries(fields).forEach(([k, v]) => checkField(k, v, false));
  Object.entries(optFields).forEach(([k, v]) => checkField(k, v, true));
}
__name(_validateObject, "_validateObject");
function memoized(fn) {
  const map = /* @__PURE__ */ new WeakMap();
  return (arg, ...args) => {
    const val = map.get(arg);
    if (val !== void 0)
      return val;
    const computed = fn(arg, ...args);
    map.set(arg, computed);
    return computed;
  };
}
__name(memoized, "memoized");

// node_modules/@noble/curves/esm/abstract/modular.js
var _0n2 = BigInt(0);
var _1n2 = BigInt(1);
var _2n = /* @__PURE__ */ BigInt(2);
var _3n = /* @__PURE__ */ BigInt(3);
var _4n = /* @__PURE__ */ BigInt(4);
var _5n = /* @__PURE__ */ BigInt(5);
var _7n = /* @__PURE__ */ BigInt(7);
var _8n = /* @__PURE__ */ BigInt(8);
var _9n = /* @__PURE__ */ BigInt(9);
var _16n = /* @__PURE__ */ BigInt(16);
function mod(a, b) {
  const result = a % b;
  return result >= _0n2 ? result : b + result;
}
__name(mod, "mod");
function pow2(x, power, modulo) {
  let res = x;
  while (power-- > _0n2) {
    res *= res;
    res %= modulo;
  }
  return res;
}
__name(pow2, "pow2");
function invert(number, modulo) {
  if (number === _0n2)
    throw new Error("invert: expected non-zero number");
  if (modulo <= _0n2)
    throw new Error("invert: expected positive modulus, got " + modulo);
  let a = mod(number, modulo);
  let b = modulo;
  let x = _0n2, y = _1n2, u = _1n2, v = _0n2;
  while (a !== _0n2) {
    const q = b / a;
    const r = b % a;
    const m = x - u * q;
    const n = y - v * q;
    b = a, a = r, x = u, y = v, u = m, v = n;
  }
  const gcd = b;
  if (gcd !== _1n2)
    throw new Error("invert: does not exist");
  return mod(x, modulo);
}
__name(invert, "invert");
function assertIsSquare(Fp, root, n) {
  if (!Fp.eql(Fp.sqr(root), n))
    throw new Error("Cannot find square root");
}
__name(assertIsSquare, "assertIsSquare");
function sqrt3mod4(Fp, n) {
  const p1div4 = (Fp.ORDER + _1n2) / _4n;
  const root = Fp.pow(n, p1div4);
  assertIsSquare(Fp, root, n);
  return root;
}
__name(sqrt3mod4, "sqrt3mod4");
function sqrt5mod8(Fp, n) {
  const p5div8 = (Fp.ORDER - _5n) / _8n;
  const n2 = Fp.mul(n, _2n);
  const v = Fp.pow(n2, p5div8);
  const nv = Fp.mul(n, v);
  const i = Fp.mul(Fp.mul(nv, _2n), v);
  const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
  assertIsSquare(Fp, root, n);
  return root;
}
__name(sqrt5mod8, "sqrt5mod8");
function sqrt9mod16(P) {
  const Fp_ = Field(P);
  const tn = tonelliShanks(P);
  const c1 = tn(Fp_, Fp_.neg(Fp_.ONE));
  const c2 = tn(Fp_, c1);
  const c3 = tn(Fp_, Fp_.neg(c1));
  const c4 = (P + _7n) / _16n;
  return (Fp, n) => {
    let tv1 = Fp.pow(n, c4);
    let tv2 = Fp.mul(tv1, c1);
    const tv3 = Fp.mul(tv1, c2);
    const tv4 = Fp.mul(tv1, c3);
    const e1 = Fp.eql(Fp.sqr(tv2), n);
    const e2 = Fp.eql(Fp.sqr(tv3), n);
    tv1 = Fp.cmov(tv1, tv2, e1);
    tv2 = Fp.cmov(tv4, tv3, e2);
    const e3 = Fp.eql(Fp.sqr(tv2), n);
    const root = Fp.cmov(tv1, tv2, e3);
    assertIsSquare(Fp, root, n);
    return root;
  };
}
__name(sqrt9mod16, "sqrt9mod16");
function tonelliShanks(P) {
  if (P < _3n)
    throw new Error("sqrt is not defined for small field");
  let Q = P - _1n2;
  let S = 0;
  while (Q % _2n === _0n2) {
    Q /= _2n;
    S++;
  }
  let Z = _2n;
  const _Fp = Field(P);
  while (FpLegendre(_Fp, Z) === 1) {
    if (Z++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  }
  if (S === 1)
    return sqrt3mod4;
  let cc = _Fp.pow(Z, Q);
  const Q1div2 = (Q + _1n2) / _2n;
  return /* @__PURE__ */ __name(function tonelliSlow(Fp, n) {
    if (Fp.is0(n))
      return n;
    if (FpLegendre(Fp, n) !== 1)
      throw new Error("Cannot find square root");
    let M = S;
    let c = Fp.mul(Fp.ONE, cc);
    let t = Fp.pow(n, Q);
    let R = Fp.pow(n, Q1div2);
    while (!Fp.eql(t, Fp.ONE)) {
      if (Fp.is0(t))
        return Fp.ZERO;
      let i = 1;
      let t_tmp = Fp.sqr(t);
      while (!Fp.eql(t_tmp, Fp.ONE)) {
        i++;
        t_tmp = Fp.sqr(t_tmp);
        if (i === M)
          throw new Error("Cannot find square root");
      }
      const exponent = _1n2 << BigInt(M - i - 1);
      const b = Fp.pow(c, exponent);
      M = i;
      c = Fp.sqr(b);
      t = Fp.mul(t, c);
      R = Fp.mul(R, b);
    }
    return R;
  }, "tonelliSlow");
}
__name(tonelliShanks, "tonelliShanks");
function FpSqrt(P) {
  if (P % _4n === _3n)
    return sqrt3mod4;
  if (P % _8n === _5n)
    return sqrt5mod8;
  if (P % _16n === _9n)
    return sqrt9mod16(P);
  return tonelliShanks(P);
}
__name(FpSqrt, "FpSqrt");
var FIELD_FIELDS = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function validateField(field) {
  const initial = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "number",
    BITS: "number"
  };
  const opts = FIELD_FIELDS.reduce((map, val) => {
    map[val] = "function";
    return map;
  }, initial);
  _validateObject(field, opts);
  return field;
}
__name(validateField, "validateField");
function FpPow(Fp, num2, power) {
  if (power < _0n2)
    throw new Error("invalid exponent, negatives unsupported");
  if (power === _0n2)
    return Fp.ONE;
  if (power === _1n2)
    return num2;
  let p = Fp.ONE;
  let d = num2;
  while (power > _0n2) {
    if (power & _1n2)
      p = Fp.mul(p, d);
    d = Fp.sqr(d);
    power >>= _1n2;
  }
  return p;
}
__name(FpPow, "FpPow");
function FpInvertBatch(Fp, nums, passZero = false) {
  const inverted = new Array(nums.length).fill(passZero ? Fp.ZERO : void 0);
  const multipliedAcc = nums.reduce((acc, num2, i) => {
    if (Fp.is0(num2))
      return acc;
    inverted[i] = acc;
    return Fp.mul(acc, num2);
  }, Fp.ONE);
  const invertedAcc = Fp.inv(multipliedAcc);
  nums.reduceRight((acc, num2, i) => {
    if (Fp.is0(num2))
      return acc;
    inverted[i] = Fp.mul(acc, inverted[i]);
    return Fp.mul(acc, num2);
  }, invertedAcc);
  return inverted;
}
__name(FpInvertBatch, "FpInvertBatch");
function FpLegendre(Fp, n) {
  const p1mod2 = (Fp.ORDER - _1n2) / _2n;
  const powered = Fp.pow(n, p1mod2);
  const yes = Fp.eql(powered, Fp.ONE);
  const zero = Fp.eql(powered, Fp.ZERO);
  const no = Fp.eql(powered, Fp.neg(Fp.ONE));
  if (!yes && !zero && !no)
    throw new Error("invalid Legendre symbol result");
  return yes ? 1 : zero ? 0 : -1;
}
__name(FpLegendre, "FpLegendre");
function nLength(n, nBitLength) {
  if (nBitLength !== void 0)
    anumber(nBitLength);
  const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
  const nByteLength = Math.ceil(_nBitLength / 8);
  return { nBitLength: _nBitLength, nByteLength };
}
__name(nLength, "nLength");
function Field(ORDER, bitLenOrOpts, isLE = false, opts = {}) {
  if (ORDER <= _0n2)
    throw new Error("invalid field: expected ORDER > 0, got " + ORDER);
  let _nbitLength = void 0;
  let _sqrt = void 0;
  let modFromBytes = false;
  let allowedLengths = void 0;
  if (typeof bitLenOrOpts === "object" && bitLenOrOpts != null) {
    if (opts.sqrt || isLE)
      throw new Error("cannot specify opts in two arguments");
    const _opts = bitLenOrOpts;
    if (_opts.BITS)
      _nbitLength = _opts.BITS;
    if (_opts.sqrt)
      _sqrt = _opts.sqrt;
    if (typeof _opts.isLE === "boolean")
      isLE = _opts.isLE;
    if (typeof _opts.modFromBytes === "boolean")
      modFromBytes = _opts.modFromBytes;
    allowedLengths = _opts.allowedLengths;
  } else {
    if (typeof bitLenOrOpts === "number")
      _nbitLength = bitLenOrOpts;
    if (opts.sqrt)
      _sqrt = opts.sqrt;
  }
  const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, _nbitLength);
  if (BYTES > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let sqrtP;
  const f = Object.freeze({
    ORDER,
    isLE,
    BITS,
    BYTES,
    MASK: bitMask(BITS),
    ZERO: _0n2,
    ONE: _1n2,
    allowedLengths,
    create: (num2) => mod(num2, ORDER),
    isValid: (num2) => {
      if (typeof num2 !== "bigint")
        throw new Error("invalid field element: expected bigint, got " + typeof num2);
      return _0n2 <= num2 && num2 < ORDER;
    },
    is0: (num2) => num2 === _0n2,
    // is valid and invertible
    isValidNot0: (num2) => !f.is0(num2) && f.isValid(num2),
    isOdd: (num2) => (num2 & _1n2) === _1n2,
    neg: (num2) => mod(-num2, ORDER),
    eql: (lhs, rhs) => lhs === rhs,
    sqr: (num2) => mod(num2 * num2, ORDER),
    add: (lhs, rhs) => mod(lhs + rhs, ORDER),
    sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
    mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
    pow: (num2, power) => FpPow(f, num2, power),
    div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
    // Same as above, but doesn't normalize
    sqrN: (num2) => num2 * num2,
    addN: (lhs, rhs) => lhs + rhs,
    subN: (lhs, rhs) => lhs - rhs,
    mulN: (lhs, rhs) => lhs * rhs,
    inv: (num2) => invert(num2, ORDER),
    sqrt: _sqrt || ((n) => {
      if (!sqrtP)
        sqrtP = FpSqrt(ORDER);
      return sqrtP(f, n);
    }),
    toBytes: (num2) => isLE ? numberToBytesLE(num2, BYTES) : numberToBytesBE(num2, BYTES),
    fromBytes: (bytes, skipValidation = true) => {
      if (allowedLengths) {
        if (!allowedLengths.includes(bytes.length) || bytes.length > BYTES) {
          throw new Error("Field.fromBytes: expected " + allowedLengths + " bytes, got " + bytes.length);
        }
        const padded = new Uint8Array(BYTES);
        padded.set(bytes, isLE ? 0 : padded.length - bytes.length);
        bytes = padded;
      }
      if (bytes.length !== BYTES)
        throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes.length);
      let scalar = isLE ? bytesToNumberLE(bytes) : bytesToNumberBE(bytes);
      if (modFromBytes)
        scalar = mod(scalar, ORDER);
      if (!skipValidation) {
        if (!f.isValid(scalar))
          throw new Error("invalid field element: outside of range 0..ORDER");
      }
      return scalar;
    },
    // TODO: we don't need it here, move out to separate fn
    invertBatch: (lst) => FpInvertBatch(f, lst),
    // We can't move this out because Fp6, Fp12 implement it
    // and it's unclear what to return in there.
    cmov: (a, b, c) => c ? b : a
  });
  return Object.freeze(f);
}
__name(Field, "Field");
function getFieldBytesLength(fieldOrder) {
  if (typeof fieldOrder !== "bigint")
    throw new Error("field order must be bigint");
  const bitLength = fieldOrder.toString(2).length;
  return Math.ceil(bitLength / 8);
}
__name(getFieldBytesLength, "getFieldBytesLength");
function getMinHashLength(fieldOrder) {
  const length = getFieldBytesLength(fieldOrder);
  return length + Math.ceil(length / 2);
}
__name(getMinHashLength, "getMinHashLength");
function mapHashToField(key, fieldOrder, isLE = false) {
  const len = key.length;
  const fieldLen = getFieldBytesLength(fieldOrder);
  const minLen = getMinHashLength(fieldOrder);
  if (len < 16 || len < minLen || len > 1024)
    throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
  const num2 = isLE ? bytesToNumberLE(key) : bytesToNumberBE(key);
  const reduced = mod(num2, fieldOrder - _1n2) + _1n2;
  return isLE ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
}
__name(mapHashToField, "mapHashToField");

// node_modules/@noble/curves/esm/abstract/curve.js
var _0n3 = BigInt(0);
var _1n3 = BigInt(1);
function negateCt(condition, item) {
  const neg = item.negate();
  return condition ? neg : item;
}
__name(negateCt, "negateCt");
function normalizeZ(c, points) {
  const invertedZs = FpInvertBatch(c.Fp, points.map((p) => p.Z));
  return points.map((p, i) => c.fromAffine(p.toAffine(invertedZs[i])));
}
__name(normalizeZ, "normalizeZ");
function validateW(W2, bits) {
  if (!Number.isSafeInteger(W2) || W2 <= 0 || W2 > bits)
    throw new Error("invalid window size, expected [1.." + bits + "], got W=" + W2);
}
__name(validateW, "validateW");
function calcWOpts(W2, scalarBits) {
  validateW(W2, scalarBits);
  const windows = Math.ceil(scalarBits / W2) + 1;
  const windowSize = 2 ** (W2 - 1);
  const maxNumber = 2 ** W2;
  const mask = bitMask(W2);
  const shiftBy = BigInt(W2);
  return { windows, windowSize, mask, maxNumber, shiftBy };
}
__name(calcWOpts, "calcWOpts");
function calcOffsets(n, window, wOpts) {
  const { windowSize, mask, maxNumber, shiftBy } = wOpts;
  let wbits = Number(n & mask);
  let nextN = n >> shiftBy;
  if (wbits > windowSize) {
    wbits -= maxNumber;
    nextN += _1n3;
  }
  const offsetStart = window * windowSize;
  const offset = offsetStart + Math.abs(wbits) - 1;
  const isZero = wbits === 0;
  const isNeg = wbits < 0;
  const isNegF = window % 2 !== 0;
  const offsetF = offsetStart;
  return { nextN, offset, isZero, isNeg, isNegF, offsetF };
}
__name(calcOffsets, "calcOffsets");
function validateMSMPoints(points, c) {
  if (!Array.isArray(points))
    throw new Error("array expected");
  points.forEach((p, i) => {
    if (!(p instanceof c))
      throw new Error("invalid point at index " + i);
  });
}
__name(validateMSMPoints, "validateMSMPoints");
function validateMSMScalars(scalars, field) {
  if (!Array.isArray(scalars))
    throw new Error("array of scalars expected");
  scalars.forEach((s, i) => {
    if (!field.isValid(s))
      throw new Error("invalid scalar at index " + i);
  });
}
__name(validateMSMScalars, "validateMSMScalars");
var pointPrecomputes = /* @__PURE__ */ new WeakMap();
var pointWindowSizes = /* @__PURE__ */ new WeakMap();
function getW(P) {
  return pointWindowSizes.get(P) || 1;
}
__name(getW, "getW");
function assert0(n) {
  if (n !== _0n3)
    throw new Error("invalid wNAF");
}
__name(assert0, "assert0");
var _wNAF = class _wNAF {
  // Parametrized with a given Point class (not individual point)
  constructor(Point, bits) {
    this.BASE = Point.BASE;
    this.ZERO = Point.ZERO;
    this.Fn = Point.Fn;
    this.bits = bits;
  }
  // non-const time multiplication ladder
  _unsafeLadder(elm, n, p = this.ZERO) {
    let d = elm;
    while (n > _0n3) {
      if (n & _1n3)
        p = p.add(d);
      d = d.double();
      n >>= _1n3;
    }
    return p;
  }
  /**
   * Creates a wNAF precomputation window. Used for caching.
   * Default window size is set by `utils.precompute()` and is equal to 8.
   * Number of precomputed points depends on the curve size:
   * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
   * - 𝑊 is the window size
   * - 𝑛 is the bitlength of the curve order.
   * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
   * @param point Point instance
   * @param W window size
   * @returns precomputed point tables flattened to a single array
   */
  precomputeWindow(point, W2) {
    const { windows, windowSize } = calcWOpts(W2, this.bits);
    const points = [];
    let p = point;
    let base = p;
    for (let window = 0; window < windows; window++) {
      base = p;
      points.push(base);
      for (let i = 1; i < windowSize; i++) {
        base = base.add(p);
        points.push(base);
      }
      p = base.double();
    }
    return points;
  }
  /**
   * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
   * More compact implementation:
   * https://github.com/paulmillr/noble-secp256k1/blob/47cb1669b6e506ad66b35fe7d76132ae97465da2/index.ts#L502-L541
   * @returns real and fake (for const-time) points
   */
  wNAF(W2, precomputes, n) {
    if (!this.Fn.isValid(n))
      throw new Error("invalid scalar");
    let p = this.ZERO;
    let f = this.BASE;
    const wo = calcWOpts(W2, this.bits);
    for (let window = 0; window < wo.windows; window++) {
      const { nextN, offset, isZero, isNeg, isNegF, offsetF } = calcOffsets(n, window, wo);
      n = nextN;
      if (isZero) {
        f = f.add(negateCt(isNegF, precomputes[offsetF]));
      } else {
        p = p.add(negateCt(isNeg, precomputes[offset]));
      }
    }
    assert0(n);
    return { p, f };
  }
  /**
   * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
   * @param acc accumulator point to add result of multiplication
   * @returns point
   */
  wNAFUnsafe(W2, precomputes, n, acc = this.ZERO) {
    const wo = calcWOpts(W2, this.bits);
    for (let window = 0; window < wo.windows; window++) {
      if (n === _0n3)
        break;
      const { nextN, offset, isZero, isNeg } = calcOffsets(n, window, wo);
      n = nextN;
      if (isZero) {
        continue;
      } else {
        const item = precomputes[offset];
        acc = acc.add(isNeg ? item.negate() : item);
      }
    }
    assert0(n);
    return acc;
  }
  getPrecomputes(W2, point, transform) {
    let comp = pointPrecomputes.get(point);
    if (!comp) {
      comp = this.precomputeWindow(point, W2);
      if (W2 !== 1) {
        if (typeof transform === "function")
          comp = transform(comp);
        pointPrecomputes.set(point, comp);
      }
    }
    return comp;
  }
  cached(point, scalar, transform) {
    const W2 = getW(point);
    return this.wNAF(W2, this.getPrecomputes(W2, point, transform), scalar);
  }
  unsafe(point, scalar, transform, prev) {
    const W2 = getW(point);
    if (W2 === 1)
      return this._unsafeLadder(point, scalar, prev);
    return this.wNAFUnsafe(W2, this.getPrecomputes(W2, point, transform), scalar, prev);
  }
  // We calculate precomputes for elliptic curve point multiplication
  // using windowed method. This specifies window size and
  // stores precomputed values. Usually only base point would be precomputed.
  createCache(P, W2) {
    validateW(W2, this.bits);
    pointWindowSizes.set(P, W2);
    pointPrecomputes.delete(P);
  }
  hasCache(elm) {
    return getW(elm) !== 1;
  }
};
__name(_wNAF, "wNAF");
var wNAF = _wNAF;
function mulEndoUnsafe(Point, point, k1, k2) {
  let acc = point;
  let p1 = Point.ZERO;
  let p2 = Point.ZERO;
  while (k1 > _0n3 || k2 > _0n3) {
    if (k1 & _1n3)
      p1 = p1.add(acc);
    if (k2 & _1n3)
      p2 = p2.add(acc);
    acc = acc.double();
    k1 >>= _1n3;
    k2 >>= _1n3;
  }
  return { p1, p2 };
}
__name(mulEndoUnsafe, "mulEndoUnsafe");
function pippenger(c, fieldN, points, scalars) {
  validateMSMPoints(points, c);
  validateMSMScalars(scalars, fieldN);
  const plength = points.length;
  const slength = scalars.length;
  if (plength !== slength)
    throw new Error("arrays of points and scalars must have equal length");
  const zero = c.ZERO;
  const wbits = bitLen(BigInt(plength));
  let windowSize = 1;
  if (wbits > 12)
    windowSize = wbits - 3;
  else if (wbits > 4)
    windowSize = wbits - 2;
  else if (wbits > 0)
    windowSize = 2;
  const MASK = bitMask(windowSize);
  const buckets = new Array(Number(MASK) + 1).fill(zero);
  const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
  let sum = zero;
  for (let i = lastBits; i >= 0; i -= windowSize) {
    buckets.fill(zero);
    for (let j = 0; j < slength; j++) {
      const scalar = scalars[j];
      const wbits2 = Number(scalar >> BigInt(i) & MASK);
      buckets[wbits2] = buckets[wbits2].add(points[j]);
    }
    let resI = zero;
    for (let j = buckets.length - 1, sumI = zero; j > 0; j--) {
      sumI = sumI.add(buckets[j]);
      resI = resI.add(sumI);
    }
    sum = sum.add(resI);
    if (i !== 0)
      for (let j = 0; j < windowSize; j++)
        sum = sum.double();
  }
  return sum;
}
__name(pippenger, "pippenger");
function createField(order, field, isLE) {
  if (field) {
    if (field.ORDER !== order)
      throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    validateField(field);
    return field;
  } else {
    return Field(order, { isLE });
  }
}
__name(createField, "createField");
function _createCurveFields(type, CURVE, curveOpts = {}, FpFnLE) {
  if (FpFnLE === void 0)
    FpFnLE = type === "edwards";
  if (!CURVE || typeof CURVE !== "object")
    throw new Error(`expected valid ${type} CURVE object`);
  for (const p of ["p", "n", "h"]) {
    const val = CURVE[p];
    if (!(typeof val === "bigint" && val > _0n3))
      throw new Error(`CURVE.${p} must be positive bigint`);
  }
  const Fp = createField(CURVE.p, curveOpts.Fp, FpFnLE);
  const Fn = createField(CURVE.n, curveOpts.Fn, FpFnLE);
  const _b = type === "weierstrass" ? "b" : "d";
  const params = ["Gx", "Gy", "a", _b];
  for (const p of params) {
    if (!Fp.isValid(CURVE[p]))
      throw new Error(`CURVE.${p} must be valid field element of CURVE.Fp`);
  }
  CURVE = Object.freeze(Object.assign({}, CURVE));
  return { CURVE, Fp, Fn };
}
__name(_createCurveFields, "_createCurveFields");

// node_modules/@noble/curves/esm/abstract/weierstrass.js
var divNearest = /* @__PURE__ */ __name((num2, den) => (num2 + (num2 >= 0 ? den : -den) / _2n2) / den, "divNearest");
function _splitEndoScalar(k, basis, n) {
  const [[a1, b1], [a2, b2]] = basis;
  const c1 = divNearest(b2 * k, n);
  const c2 = divNearest(-b1 * k, n);
  let k1 = k - c1 * a1 - c2 * a2;
  let k2 = -c1 * b1 - c2 * b2;
  const k1neg = k1 < _0n4;
  const k2neg = k2 < _0n4;
  if (k1neg)
    k1 = -k1;
  if (k2neg)
    k2 = -k2;
  const MAX_NUM = bitMask(Math.ceil(bitLen(n) / 2)) + _1n4;
  if (k1 < _0n4 || k1 >= MAX_NUM || k2 < _0n4 || k2 >= MAX_NUM) {
    throw new Error("splitScalar (endomorphism): failed, k=" + k);
  }
  return { k1neg, k1, k2neg, k2 };
}
__name(_splitEndoScalar, "_splitEndoScalar");
function validateSigFormat(format) {
  if (!["compact", "recovered", "der"].includes(format))
    throw new Error('Signature format must be "compact", "recovered", or "der"');
  return format;
}
__name(validateSigFormat, "validateSigFormat");
function validateSigOpts(opts, def) {
  const optsn = {};
  for (let optName of Object.keys(def)) {
    optsn[optName] = opts[optName] === void 0 ? def[optName] : opts[optName];
  }
  _abool2(optsn.lowS, "lowS");
  _abool2(optsn.prehash, "prehash");
  if (optsn.format !== void 0)
    validateSigFormat(optsn.format);
  return optsn;
}
__name(validateSigOpts, "validateSigOpts");
var _DERErr = class _DERErr extends Error {
  constructor(m = "") {
    super(m);
  }
};
__name(_DERErr, "DERErr");
var DERErr = _DERErr;
var DER = {
  // asn.1 DER encoding utils
  Err: DERErr,
  // Basic building block is TLV (Tag-Length-Value)
  _tlv: {
    encode: (tag, data) => {
      const { Err: E } = DER;
      if (tag < 0 || tag > 256)
        throw new E("tlv.encode: wrong tag");
      if (data.length & 1)
        throw new E("tlv.encode: unpadded data");
      const dataLen = data.length / 2;
      const len = numberToHexUnpadded(dataLen);
      if (len.length / 2 & 128)
        throw new E("tlv.encode: long form length too big");
      const lenLen = dataLen > 127 ? numberToHexUnpadded(len.length / 2 | 128) : "";
      const t = numberToHexUnpadded(tag);
      return t + lenLen + len + data;
    },
    // v - value, l - left bytes (unparsed)
    decode(tag, data) {
      const { Err: E } = DER;
      let pos = 0;
      if (tag < 0 || tag > 256)
        throw new E("tlv.encode: wrong tag");
      if (data.length < 2 || data[pos++] !== tag)
        throw new E("tlv.decode: wrong tlv");
      const first = data[pos++];
      const isLong = !!(first & 128);
      let length = 0;
      if (!isLong)
        length = first;
      else {
        const lenLen = first & 127;
        if (!lenLen)
          throw new E("tlv.decode(long): indefinite length not supported");
        if (lenLen > 4)
          throw new E("tlv.decode(long): byte length is too big");
        const lengthBytes = data.subarray(pos, pos + lenLen);
        if (lengthBytes.length !== lenLen)
          throw new E("tlv.decode: length bytes not complete");
        if (lengthBytes[0] === 0)
          throw new E("tlv.decode(long): zero leftmost byte");
        for (const b of lengthBytes)
          length = length << 8 | b;
        pos += lenLen;
        if (length < 128)
          throw new E("tlv.decode(long): not minimal encoding");
      }
      const v = data.subarray(pos, pos + length);
      if (v.length !== length)
        throw new E("tlv.decode: wrong value length");
      return { v, l: data.subarray(pos + length) };
    }
  },
  // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
  // since we always use positive integers here. It must always be empty:
  // - add zero byte if exists
  // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
  _int: {
    encode(num2) {
      const { Err: E } = DER;
      if (num2 < _0n4)
        throw new E("integer: negative integers are not allowed");
      let hex = numberToHexUnpadded(num2);
      if (Number.parseInt(hex[0], 16) & 8)
        hex = "00" + hex;
      if (hex.length & 1)
        throw new E("unexpected DER parsing assertion: unpadded hex");
      return hex;
    },
    decode(data) {
      const { Err: E } = DER;
      if (data[0] & 128)
        throw new E("invalid signature integer: negative");
      if (data[0] === 0 && !(data[1] & 128))
        throw new E("invalid signature integer: unnecessary leading zero");
      return bytesToNumberBE(data);
    }
  },
  toSig(hex) {
    const { Err: E, _int: int, _tlv: tlv } = DER;
    const data = ensureBytes("signature", hex);
    const { v: seqBytes, l: seqLeftBytes } = tlv.decode(48, data);
    if (seqLeftBytes.length)
      throw new E("invalid signature: left bytes after parsing");
    const { v: rBytes, l: rLeftBytes } = tlv.decode(2, seqBytes);
    const { v: sBytes, l: sLeftBytes } = tlv.decode(2, rLeftBytes);
    if (sLeftBytes.length)
      throw new E("invalid signature: left bytes after parsing");
    return { r: int.decode(rBytes), s: int.decode(sBytes) };
  },
  hexFromSig(sig) {
    const { _tlv: tlv, _int: int } = DER;
    const rs = tlv.encode(2, int.encode(sig.r));
    const ss = tlv.encode(2, int.encode(sig.s));
    const seq = rs + ss;
    return tlv.encode(48, seq);
  }
};
var _0n4 = BigInt(0);
var _1n4 = BigInt(1);
var _2n2 = BigInt(2);
var _3n2 = BigInt(3);
var _4n2 = BigInt(4);
function _normFnElement(Fn, key) {
  const { BYTES: expected } = Fn;
  let num2;
  if (typeof key === "bigint") {
    num2 = key;
  } else {
    let bytes = ensureBytes("private key", key);
    try {
      num2 = Fn.fromBytes(bytes);
    } catch (error) {
      throw new Error(`invalid private key: expected ui8a of size ${expected}, got ${typeof key}`);
    }
  }
  if (!Fn.isValidNot0(num2))
    throw new Error("invalid private key: out of range [1..N-1]");
  return num2;
}
__name(_normFnElement, "_normFnElement");
function weierstrassN(params, extraOpts = {}) {
  const validated = _createCurveFields("weierstrass", params, extraOpts);
  const { Fp, Fn } = validated;
  let CURVE = validated.CURVE;
  const { h: cofactor, n: CURVE_ORDER } = CURVE;
  _validateObject(extraOpts, {}, {
    allowInfinityPoint: "boolean",
    clearCofactor: "function",
    isTorsionFree: "function",
    fromBytes: "function",
    toBytes: "function",
    endo: "object",
    wrapPrivateKey: "boolean"
  });
  const { endo } = extraOpts;
  if (endo) {
    if (!Fp.is0(CURVE.a) || typeof endo.beta !== "bigint" || !Array.isArray(endo.basises)) {
      throw new Error('invalid endo: expected "beta": bigint and "basises": array');
    }
  }
  const lengths = getWLengths(Fp, Fn);
  function assertCompressionIsSupported() {
    if (!Fp.isOdd)
      throw new Error("compression is not supported: Field does not have .isOdd()");
  }
  __name(assertCompressionIsSupported, "assertCompressionIsSupported");
  function pointToBytes2(_c, point, isCompressed) {
    const { x, y } = point.toAffine();
    const bx = Fp.toBytes(x);
    _abool2(isCompressed, "isCompressed");
    if (isCompressed) {
      assertCompressionIsSupported();
      const hasEvenY = !Fp.isOdd(y);
      return concatBytes(pprefix(hasEvenY), bx);
    } else {
      return concatBytes(Uint8Array.of(4), bx, Fp.toBytes(y));
    }
  }
  __name(pointToBytes2, "pointToBytes");
  function pointFromBytes(bytes) {
    _abytes2(bytes, void 0, "Point");
    const { publicKey: comp, publicKeyUncompressed: uncomp } = lengths;
    const length = bytes.length;
    const head = bytes[0];
    const tail = bytes.subarray(1);
    if (length === comp && (head === 2 || head === 3)) {
      const x = Fp.fromBytes(tail);
      if (!Fp.isValid(x))
        throw new Error("bad point: is not on curve, wrong x");
      const y2 = weierstrassEquation(x);
      let y;
      try {
        y = Fp.sqrt(y2);
      } catch (sqrtError) {
        const err = sqrtError instanceof Error ? ": " + sqrtError.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + err);
      }
      assertCompressionIsSupported();
      const isYOdd = Fp.isOdd(y);
      const isHeadOdd = (head & 1) === 1;
      if (isHeadOdd !== isYOdd)
        y = Fp.neg(y);
      return { x, y };
    } else if (length === uncomp && head === 4) {
      const L = Fp.BYTES;
      const x = Fp.fromBytes(tail.subarray(0, L));
      const y = Fp.fromBytes(tail.subarray(L, L * 2));
      if (!isValidXY(x, y))
        throw new Error("bad point: is not on curve");
      return { x, y };
    } else {
      throw new Error(`bad point: got length ${length}, expected compressed=${comp} or uncompressed=${uncomp}`);
    }
  }
  __name(pointFromBytes, "pointFromBytes");
  const encodePoint = extraOpts.toBytes || pointToBytes2;
  const decodePoint = extraOpts.fromBytes || pointFromBytes;
  function weierstrassEquation(x) {
    const x2 = Fp.sqr(x);
    const x3 = Fp.mul(x2, x);
    return Fp.add(Fp.add(x3, Fp.mul(x, CURVE.a)), CURVE.b);
  }
  __name(weierstrassEquation, "weierstrassEquation");
  function isValidXY(x, y) {
    const left = Fp.sqr(y);
    const right = weierstrassEquation(x);
    return Fp.eql(left, right);
  }
  __name(isValidXY, "isValidXY");
  if (!isValidXY(CURVE.Gx, CURVE.Gy))
    throw new Error("bad curve params: generator point");
  const _4a3 = Fp.mul(Fp.pow(CURVE.a, _3n2), _4n2);
  const _27b2 = Fp.mul(Fp.sqr(CURVE.b), BigInt(27));
  if (Fp.is0(Fp.add(_4a3, _27b2)))
    throw new Error("bad curve params: a or b");
  function acoord(title, n, banZero = false) {
    if (!Fp.isValid(n) || banZero && Fp.is0(n))
      throw new Error(`bad point coordinate ${title}`);
    return n;
  }
  __name(acoord, "acoord");
  function aprjpoint(other) {
    if (!(other instanceof Point))
      throw new Error("ProjectivePoint expected");
  }
  __name(aprjpoint, "aprjpoint");
  function splitEndoScalarN(k) {
    if (!endo || !endo.basises)
      throw new Error("no endo");
    return _splitEndoScalar(k, endo.basises, Fn.ORDER);
  }
  __name(splitEndoScalarN, "splitEndoScalarN");
  const toAffineMemo = memoized((p, iz) => {
    const { X, Y, Z } = p;
    if (Fp.eql(Z, Fp.ONE))
      return { x: X, y: Y };
    const is0 = p.is0();
    if (iz == null)
      iz = is0 ? Fp.ONE : Fp.inv(Z);
    const x = Fp.mul(X, iz);
    const y = Fp.mul(Y, iz);
    const zz = Fp.mul(Z, iz);
    if (is0)
      return { x: Fp.ZERO, y: Fp.ZERO };
    if (!Fp.eql(zz, Fp.ONE))
      throw new Error("invZ was invalid");
    return { x, y };
  });
  const assertValidMemo = memoized((p) => {
    if (p.is0()) {
      if (extraOpts.allowInfinityPoint && !Fp.is0(p.Y))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x, y } = p.toAffine();
    if (!Fp.isValid(x) || !Fp.isValid(y))
      throw new Error("bad point: x or y not field elements");
    if (!isValidXY(x, y))
      throw new Error("bad point: equation left != right");
    if (!p.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return true;
  });
  function finishEndo(endoBeta, k1p, k2p, k1neg, k2neg) {
    k2p = new Point(Fp.mul(k2p.X, endoBeta), k2p.Y, k2p.Z);
    k1p = negateCt(k1neg, k1p);
    k2p = negateCt(k2neg, k2p);
    return k1p.add(k2p);
  }
  __name(finishEndo, "finishEndo");
  const _Point = class _Point {
    /** Does NOT validate if the point is valid. Use `.assertValidity()`. */
    constructor(X, Y, Z) {
      this.X = acoord("x", X);
      this.Y = acoord("y", Y, true);
      this.Z = acoord("z", Z);
      Object.freeze(this);
    }
    static CURVE() {
      return CURVE;
    }
    /** Does NOT validate if the point is valid. Use `.assertValidity()`. */
    static fromAffine(p) {
      const { x, y } = p || {};
      if (!p || !Fp.isValid(x) || !Fp.isValid(y))
        throw new Error("invalid affine point");
      if (p instanceof _Point)
        throw new Error("projective point not allowed");
      if (Fp.is0(x) && Fp.is0(y))
        return _Point.ZERO;
      return new _Point(x, y, Fp.ONE);
    }
    static fromBytes(bytes) {
      const P = _Point.fromAffine(decodePoint(_abytes2(bytes, void 0, "point")));
      P.assertValidity();
      return P;
    }
    static fromHex(hex) {
      return _Point.fromBytes(ensureBytes("pointHex", hex));
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     *
     * @param windowSize
     * @param isLazy true will defer table computation until the first multiplication
     * @returns
     */
    precompute(windowSize = 8, isLazy = true) {
      wnaf.createCache(this, windowSize);
      if (!isLazy)
        this.multiply(_3n2);
      return this;
    }
    // TODO: return `this`
    /** A point on curve is valid if it conforms to equation. */
    assertValidity() {
      assertValidMemo(this);
    }
    hasEvenY() {
      const { y } = this.toAffine();
      if (!Fp.isOdd)
        throw new Error("Field doesn't support isOdd");
      return !Fp.isOdd(y);
    }
    /** Compare one point to another. */
    equals(other) {
      aprjpoint(other);
      const { X: X1, Y: Y1, Z: Z1 } = this;
      const { X: X2, Y: Y2, Z: Z2 } = other;
      const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
      const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
      return U1 && U2;
    }
    /** Flips point to one corresponding to (x, -y) in Affine coordinates. */
    negate() {
      return new _Point(this.X, Fp.neg(this.Y), this.Z);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a, b } = CURVE;
      const b3 = Fp.mul(b, _3n2);
      const { X: X1, Y: Y1, Z: Z1 } = this;
      let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
      let t0 = Fp.mul(X1, X1);
      let t1 = Fp.mul(Y1, Y1);
      let t2 = Fp.mul(Z1, Z1);
      let t3 = Fp.mul(X1, Y1);
      t3 = Fp.add(t3, t3);
      Z3 = Fp.mul(X1, Z1);
      Z3 = Fp.add(Z3, Z3);
      X3 = Fp.mul(a, Z3);
      Y3 = Fp.mul(b3, t2);
      Y3 = Fp.add(X3, Y3);
      X3 = Fp.sub(t1, Y3);
      Y3 = Fp.add(t1, Y3);
      Y3 = Fp.mul(X3, Y3);
      X3 = Fp.mul(t3, X3);
      Z3 = Fp.mul(b3, Z3);
      t2 = Fp.mul(a, t2);
      t3 = Fp.sub(t0, t2);
      t3 = Fp.mul(a, t3);
      t3 = Fp.add(t3, Z3);
      Z3 = Fp.add(t0, t0);
      t0 = Fp.add(Z3, t0);
      t0 = Fp.add(t0, t2);
      t0 = Fp.mul(t0, t3);
      Y3 = Fp.add(Y3, t0);
      t2 = Fp.mul(Y1, Z1);
      t2 = Fp.add(t2, t2);
      t0 = Fp.mul(t2, t3);
      X3 = Fp.sub(X3, t0);
      Z3 = Fp.mul(t2, t1);
      Z3 = Fp.add(Z3, Z3);
      Z3 = Fp.add(Z3, Z3);
      return new _Point(X3, Y3, Z3);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(other) {
      aprjpoint(other);
      const { X: X1, Y: Y1, Z: Z1 } = this;
      const { X: X2, Y: Y2, Z: Z2 } = other;
      let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
      const a = CURVE.a;
      const b3 = Fp.mul(CURVE.b, _3n2);
      let t0 = Fp.mul(X1, X2);
      let t1 = Fp.mul(Y1, Y2);
      let t2 = Fp.mul(Z1, Z2);
      let t3 = Fp.add(X1, Y1);
      let t4 = Fp.add(X2, Y2);
      t3 = Fp.mul(t3, t4);
      t4 = Fp.add(t0, t1);
      t3 = Fp.sub(t3, t4);
      t4 = Fp.add(X1, Z1);
      let t5 = Fp.add(X2, Z2);
      t4 = Fp.mul(t4, t5);
      t5 = Fp.add(t0, t2);
      t4 = Fp.sub(t4, t5);
      t5 = Fp.add(Y1, Z1);
      X3 = Fp.add(Y2, Z2);
      t5 = Fp.mul(t5, X3);
      X3 = Fp.add(t1, t2);
      t5 = Fp.sub(t5, X3);
      Z3 = Fp.mul(a, t4);
      X3 = Fp.mul(b3, t2);
      Z3 = Fp.add(X3, Z3);
      X3 = Fp.sub(t1, Z3);
      Z3 = Fp.add(t1, Z3);
      Y3 = Fp.mul(X3, Z3);
      t1 = Fp.add(t0, t0);
      t1 = Fp.add(t1, t0);
      t2 = Fp.mul(a, t2);
      t4 = Fp.mul(b3, t4);
      t1 = Fp.add(t1, t2);
      t2 = Fp.sub(t0, t2);
      t2 = Fp.mul(a, t2);
      t4 = Fp.add(t4, t2);
      t0 = Fp.mul(t1, t4);
      Y3 = Fp.add(Y3, t0);
      t0 = Fp.mul(t5, t4);
      X3 = Fp.mul(t3, X3);
      X3 = Fp.sub(X3, t0);
      t0 = Fp.mul(t3, t1);
      Z3 = Fp.mul(t5, Z3);
      Z3 = Fp.add(Z3, t0);
      return new _Point(X3, Y3, Z3);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    is0() {
      return this.equals(_Point.ZERO);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(scalar) {
      const { endo: endo2 } = extraOpts;
      if (!Fn.isValidNot0(scalar))
        throw new Error("invalid scalar: out of range");
      let point, fake;
      const mul = /* @__PURE__ */ __name((n) => wnaf.cached(this, n, (p) => normalizeZ(_Point, p)), "mul");
      if (endo2) {
        const { k1neg, k1, k2neg, k2 } = splitEndoScalarN(scalar);
        const { p: k1p, f: k1f } = mul(k1);
        const { p: k2p, f: k2f } = mul(k2);
        fake = k1f.add(k2f);
        point = finishEndo(endo2.beta, k1p, k2p, k1neg, k2neg);
      } else {
        const { p, f } = mul(scalar);
        point = p;
        fake = f;
      }
      return normalizeZ(_Point, [point, fake])[0];
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed secret key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(sc) {
      const { endo: endo2 } = extraOpts;
      const p = this;
      if (!Fn.isValid(sc))
        throw new Error("invalid scalar: out of range");
      if (sc === _0n4 || p.is0())
        return _Point.ZERO;
      if (sc === _1n4)
        return p;
      if (wnaf.hasCache(this))
        return this.multiply(sc);
      if (endo2) {
        const { k1neg, k1, k2neg, k2 } = splitEndoScalarN(sc);
        const { p1, p2 } = mulEndoUnsafe(_Point, p, k1, k2);
        return finishEndo(endo2.beta, p1, p2, k1neg, k2neg);
      } else {
        return wnaf.unsafe(p, sc);
      }
    }
    multiplyAndAddUnsafe(Q, a, b) {
      const sum = this.multiplyUnsafe(a).add(Q.multiplyUnsafe(b));
      return sum.is0() ? void 0 : sum;
    }
    /**
     * Converts Projective point to affine (x, y) coordinates.
     * @param invertedZ Z^-1 (inverted zero) - optional, precomputation is useful for invertBatch
     */
    toAffine(invertedZ) {
      return toAffineMemo(this, invertedZ);
    }
    /**
     * Checks whether Point is free of torsion elements (is in prime subgroup).
     * Always torsion-free for cofactor=1 curves.
     */
    isTorsionFree() {
      const { isTorsionFree } = extraOpts;
      if (cofactor === _1n4)
        return true;
      if (isTorsionFree)
        return isTorsionFree(_Point, this);
      return wnaf.unsafe(this, CURVE_ORDER).is0();
    }
    clearCofactor() {
      const { clearCofactor } = extraOpts;
      if (cofactor === _1n4)
        return this;
      if (clearCofactor)
        return clearCofactor(_Point, this);
      return this.multiplyUnsafe(cofactor);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(cofactor).is0();
    }
    toBytes(isCompressed = true) {
      _abool2(isCompressed, "isCompressed");
      this.assertValidity();
      return encodePoint(_Point, this, isCompressed);
    }
    toHex(isCompressed = true) {
      return bytesToHex(this.toBytes(isCompressed));
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    // TODO: remove
    get px() {
      return this.X;
    }
    get py() {
      return this.X;
    }
    get pz() {
      return this.Z;
    }
    toRawBytes(isCompressed = true) {
      return this.toBytes(isCompressed);
    }
    _setWindowSize(windowSize) {
      this.precompute(windowSize);
    }
    static normalizeZ(points) {
      return normalizeZ(_Point, points);
    }
    static msm(points, scalars) {
      return pippenger(_Point, Fn, points, scalars);
    }
    static fromPrivateKey(privateKey) {
      return _Point.BASE.multiply(_normFnElement(Fn, privateKey));
    }
  };
  __name(_Point, "Point");
  let Point = _Point;
  Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
  Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
  Point.Fp = Fp;
  Point.Fn = Fn;
  const bits = Fn.BITS;
  const wnaf = new wNAF(Point, extraOpts.endo ? Math.ceil(bits / 2) : bits);
  Point.BASE.precompute(8);
  return Point;
}
__name(weierstrassN, "weierstrassN");
function pprefix(hasEvenY) {
  return Uint8Array.of(hasEvenY ? 2 : 3);
}
__name(pprefix, "pprefix");
function getWLengths(Fp, Fn) {
  return {
    secretKey: Fn.BYTES,
    publicKey: 1 + Fp.BYTES,
    publicKeyUncompressed: 1 + 2 * Fp.BYTES,
    publicKeyHasPrefix: true,
    signature: 2 * Fn.BYTES
  };
}
__name(getWLengths, "getWLengths");
function ecdh(Point, ecdhOpts = {}) {
  const { Fn } = Point;
  const randomBytes_ = ecdhOpts.randomBytes || randomBytes;
  const lengths = Object.assign(getWLengths(Point.Fp, Fn), { seed: getMinHashLength(Fn.ORDER) });
  function isValidSecretKey(secretKey) {
    try {
      return !!_normFnElement(Fn, secretKey);
    } catch (error) {
      return false;
    }
  }
  __name(isValidSecretKey, "isValidSecretKey");
  function isValidPublicKey(publicKey, isCompressed) {
    const { publicKey: comp, publicKeyUncompressed } = lengths;
    try {
      const l = publicKey.length;
      if (isCompressed === true && l !== comp)
        return false;
      if (isCompressed === false && l !== publicKeyUncompressed)
        return false;
      return !!Point.fromBytes(publicKey);
    } catch (error) {
      return false;
    }
  }
  __name(isValidPublicKey, "isValidPublicKey");
  function randomSecretKey(seed = randomBytes_(lengths.seed)) {
    return mapHashToField(_abytes2(seed, lengths.seed, "seed"), Fn.ORDER);
  }
  __name(randomSecretKey, "randomSecretKey");
  function getPublicKey(secretKey, isCompressed = true) {
    return Point.BASE.multiply(_normFnElement(Fn, secretKey)).toBytes(isCompressed);
  }
  __name(getPublicKey, "getPublicKey");
  function keygen(seed) {
    const secretKey = randomSecretKey(seed);
    return { secretKey, publicKey: getPublicKey(secretKey) };
  }
  __name(keygen, "keygen");
  function isProbPub(item) {
    if (typeof item === "bigint")
      return false;
    if (item instanceof Point)
      return true;
    const { secretKey, publicKey, publicKeyUncompressed } = lengths;
    if (Fn.allowedLengths || secretKey === publicKey)
      return void 0;
    const l = ensureBytes("key", item).length;
    return l === publicKey || l === publicKeyUncompressed;
  }
  __name(isProbPub, "isProbPub");
  function getSharedSecret(secretKeyA, publicKeyB, isCompressed = true) {
    if (isProbPub(secretKeyA) === true)
      throw new Error("first arg must be private key");
    if (isProbPub(publicKeyB) === false)
      throw new Error("second arg must be public key");
    const s = _normFnElement(Fn, secretKeyA);
    const b = Point.fromHex(publicKeyB);
    return b.multiply(s).toBytes(isCompressed);
  }
  __name(getSharedSecret, "getSharedSecret");
  const utils = {
    isValidSecretKey,
    isValidPublicKey,
    randomSecretKey,
    // TODO: remove
    isValidPrivateKey: isValidSecretKey,
    randomPrivateKey: randomSecretKey,
    normPrivateKeyToScalar: (key) => _normFnElement(Fn, key),
    precompute(windowSize = 8, point = Point.BASE) {
      return point.precompute(windowSize, false);
    }
  };
  return Object.freeze({ getPublicKey, getSharedSecret, keygen, Point, utils, lengths });
}
__name(ecdh, "ecdh");
function ecdsa(Point, hash, ecdsaOpts = {}) {
  ahash(hash);
  _validateObject(ecdsaOpts, {}, {
    hmac: "function",
    lowS: "boolean",
    randomBytes: "function",
    bits2int: "function",
    bits2int_modN: "function"
  });
  const randomBytes2 = ecdsaOpts.randomBytes || randomBytes;
  const hmac2 = ecdsaOpts.hmac || ((key, ...msgs) => hmac(hash, key, concatBytes(...msgs)));
  const { Fp, Fn } = Point;
  const { ORDER: CURVE_ORDER, BITS: fnBits } = Fn;
  const { keygen, getPublicKey, getSharedSecret, utils, lengths } = ecdh(Point, ecdsaOpts);
  const defaultSigOpts = {
    prehash: false,
    lowS: typeof ecdsaOpts.lowS === "boolean" ? ecdsaOpts.lowS : false,
    format: void 0,
    //'compact' as ECDSASigFormat,
    extraEntropy: false
  };
  const defaultSigOpts_format = "compact";
  function isBiggerThanHalfOrder(number) {
    const HALF = CURVE_ORDER >> _1n4;
    return number > HALF;
  }
  __name(isBiggerThanHalfOrder, "isBiggerThanHalfOrder");
  function validateRS(title, num2) {
    if (!Fn.isValidNot0(num2))
      throw new Error(`invalid signature ${title}: out of range 1..Point.Fn.ORDER`);
    return num2;
  }
  __name(validateRS, "validateRS");
  function validateSigLength(bytes, format) {
    validateSigFormat(format);
    const size = lengths.signature;
    const sizer = format === "compact" ? size : format === "recovered" ? size + 1 : void 0;
    return _abytes2(bytes, sizer, `${format} signature`);
  }
  __name(validateSigLength, "validateSigLength");
  const _Signature = class _Signature {
    constructor(r, s, recovery) {
      this.r = validateRS("r", r);
      this.s = validateRS("s", s);
      if (recovery != null)
        this.recovery = recovery;
      Object.freeze(this);
    }
    static fromBytes(bytes, format = defaultSigOpts_format) {
      validateSigLength(bytes, format);
      let recid;
      if (format === "der") {
        const { r: r2, s: s2 } = DER.toSig(_abytes2(bytes));
        return new _Signature(r2, s2);
      }
      if (format === "recovered") {
        recid = bytes[0];
        format = "compact";
        bytes = bytes.subarray(1);
      }
      const L = Fn.BYTES;
      const r = bytes.subarray(0, L);
      const s = bytes.subarray(L, L * 2);
      return new _Signature(Fn.fromBytes(r), Fn.fromBytes(s), recid);
    }
    static fromHex(hex, format) {
      return this.fromBytes(hexToBytes(hex), format);
    }
    addRecoveryBit(recovery) {
      return new _Signature(this.r, this.s, recovery);
    }
    recoverPublicKey(messageHash) {
      const FIELD_ORDER = Fp.ORDER;
      const { r, s, recovery: rec } = this;
      if (rec == null || ![0, 1, 2, 3].includes(rec))
        throw new Error("recovery id invalid");
      const hasCofactor = CURVE_ORDER * _2n2 < FIELD_ORDER;
      if (hasCofactor && rec > 1)
        throw new Error("recovery id is ambiguous for h>1 curve");
      const radj = rec === 2 || rec === 3 ? r + CURVE_ORDER : r;
      if (!Fp.isValid(radj))
        throw new Error("recovery id 2 or 3 invalid");
      const x = Fp.toBytes(radj);
      const R = Point.fromBytes(concatBytes(pprefix((rec & 1) === 0), x));
      const ir = Fn.inv(radj);
      const h = bits2int_modN(ensureBytes("msgHash", messageHash));
      const u1 = Fn.create(-h * ir);
      const u2 = Fn.create(s * ir);
      const Q = Point.BASE.multiplyUnsafe(u1).add(R.multiplyUnsafe(u2));
      if (Q.is0())
        throw new Error("point at infinify");
      Q.assertValidity();
      return Q;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return isBiggerThanHalfOrder(this.s);
    }
    toBytes(format = defaultSigOpts_format) {
      validateSigFormat(format);
      if (format === "der")
        return hexToBytes(DER.hexFromSig(this));
      const r = Fn.toBytes(this.r);
      const s = Fn.toBytes(this.s);
      if (format === "recovered") {
        if (this.recovery == null)
          throw new Error("recovery bit must be present");
        return concatBytes(Uint8Array.of(this.recovery), r, s);
      }
      return concatBytes(r, s);
    }
    toHex(format) {
      return bytesToHex(this.toBytes(format));
    }
    // TODO: remove
    assertValidity() {
    }
    static fromCompact(hex) {
      return _Signature.fromBytes(ensureBytes("sig", hex), "compact");
    }
    static fromDER(hex) {
      return _Signature.fromBytes(ensureBytes("sig", hex), "der");
    }
    normalizeS() {
      return this.hasHighS() ? new _Signature(this.r, Fn.neg(this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return this.toBytes("der");
    }
    toDERHex() {
      return bytesToHex(this.toBytes("der"));
    }
    toCompactRawBytes() {
      return this.toBytes("compact");
    }
    toCompactHex() {
      return bytesToHex(this.toBytes("compact"));
    }
  };
  __name(_Signature, "Signature");
  let Signature = _Signature;
  const bits2int = ecdsaOpts.bits2int || /* @__PURE__ */ __name(function bits2int_def(bytes) {
    if (bytes.length > 8192)
      throw new Error("input is too large");
    const num2 = bytesToNumberBE(bytes);
    const delta = bytes.length * 8 - fnBits;
    return delta > 0 ? num2 >> BigInt(delta) : num2;
  }, "bits2int_def");
  const bits2int_modN = ecdsaOpts.bits2int_modN || /* @__PURE__ */ __name(function bits2int_modN_def(bytes) {
    return Fn.create(bits2int(bytes));
  }, "bits2int_modN_def");
  const ORDER_MASK = bitMask(fnBits);
  function int2octets(num2) {
    aInRange("num < 2^" + fnBits, num2, _0n4, ORDER_MASK);
    return Fn.toBytes(num2);
  }
  __name(int2octets, "int2octets");
  function validateMsgAndHash(message, prehash) {
    _abytes2(message, void 0, "message");
    return prehash ? _abytes2(hash(message), void 0, "prehashed message") : message;
  }
  __name(validateMsgAndHash, "validateMsgAndHash");
  function prepSig(message, privateKey, opts) {
    if (["recovered", "canonical"].some((k) => k in opts))
      throw new Error("sign() legacy options not supported");
    const { lowS, prehash, extraEntropy } = validateSigOpts(opts, defaultSigOpts);
    message = validateMsgAndHash(message, prehash);
    const h1int = bits2int_modN(message);
    const d = _normFnElement(Fn, privateKey);
    const seedArgs = [int2octets(d), int2octets(h1int)];
    if (extraEntropy != null && extraEntropy !== false) {
      const e = extraEntropy === true ? randomBytes2(lengths.secretKey) : extraEntropy;
      seedArgs.push(ensureBytes("extraEntropy", e));
    }
    const seed = concatBytes(...seedArgs);
    const m = h1int;
    function k2sig(kBytes) {
      const k = bits2int(kBytes);
      if (!Fn.isValidNot0(k))
        return;
      const ik = Fn.inv(k);
      const q = Point.BASE.multiply(k).toAffine();
      const r = Fn.create(q.x);
      if (r === _0n4)
        return;
      const s = Fn.create(ik * Fn.create(m + r * d));
      if (s === _0n4)
        return;
      let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n4);
      let normS = s;
      if (lowS && isBiggerThanHalfOrder(s)) {
        normS = Fn.neg(s);
        recovery ^= 1;
      }
      return new Signature(r, normS, recovery);
    }
    __name(k2sig, "k2sig");
    return { seed, k2sig };
  }
  __name(prepSig, "prepSig");
  function sign(message, secretKey, opts = {}) {
    message = ensureBytes("message", message);
    const { seed, k2sig } = prepSig(message, secretKey, opts);
    const drbg = createHmacDrbg(hash.outputLen, Fn.BYTES, hmac2);
    const sig = drbg(seed, k2sig);
    return sig;
  }
  __name(sign, "sign");
  function tryParsingSig(sg) {
    let sig = void 0;
    const isHex = typeof sg === "string" || isBytes(sg);
    const isObj = !isHex && sg !== null && typeof sg === "object" && typeof sg.r === "bigint" && typeof sg.s === "bigint";
    if (!isHex && !isObj)
      throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    if (isObj) {
      sig = new Signature(sg.r, sg.s);
    } else if (isHex) {
      try {
        sig = Signature.fromBytes(ensureBytes("sig", sg), "der");
      } catch (derError) {
        if (!(derError instanceof DER.Err))
          throw derError;
      }
      if (!sig) {
        try {
          sig = Signature.fromBytes(ensureBytes("sig", sg), "compact");
        } catch (error) {
          return false;
        }
      }
    }
    if (!sig)
      return false;
    return sig;
  }
  __name(tryParsingSig, "tryParsingSig");
  function verify(signature, message, publicKey, opts = {}) {
    const { lowS, prehash, format } = validateSigOpts(opts, defaultSigOpts);
    publicKey = ensureBytes("publicKey", publicKey);
    message = validateMsgAndHash(ensureBytes("message", message), prehash);
    if ("strict" in opts)
      throw new Error("options.strict was renamed to lowS");
    const sig = format === void 0 ? tryParsingSig(signature) : Signature.fromBytes(ensureBytes("sig", signature), format);
    if (sig === false)
      return false;
    try {
      const P = Point.fromBytes(publicKey);
      if (lowS && sig.hasHighS())
        return false;
      const { r, s } = sig;
      const h = bits2int_modN(message);
      const is = Fn.inv(s);
      const u1 = Fn.create(h * is);
      const u2 = Fn.create(r * is);
      const R = Point.BASE.multiplyUnsafe(u1).add(P.multiplyUnsafe(u2));
      if (R.is0())
        return false;
      const v = Fn.create(R.x);
      return v === r;
    } catch (e) {
      return false;
    }
  }
  __name(verify, "verify");
  function recoverPublicKey(signature, message, opts = {}) {
    const { prehash } = validateSigOpts(opts, defaultSigOpts);
    message = validateMsgAndHash(message, prehash);
    return Signature.fromBytes(signature, "recovered").recoverPublicKey(message).toBytes();
  }
  __name(recoverPublicKey, "recoverPublicKey");
  return Object.freeze({
    keygen,
    getPublicKey,
    getSharedSecret,
    utils,
    lengths,
    Point,
    sign,
    verify,
    recoverPublicKey,
    Signature,
    hash
  });
}
__name(ecdsa, "ecdsa");
function _weierstrass_legacy_opts_to_new(c) {
  const CURVE = {
    a: c.a,
    b: c.b,
    p: c.Fp.ORDER,
    n: c.n,
    h: c.h,
    Gx: c.Gx,
    Gy: c.Gy
  };
  const Fp = c.Fp;
  let allowedLengths = c.allowedPrivateKeyLengths ? Array.from(new Set(c.allowedPrivateKeyLengths.map((l) => Math.ceil(l / 2)))) : void 0;
  const Fn = Field(CURVE.n, {
    BITS: c.nBitLength,
    allowedLengths,
    modFromBytes: c.wrapPrivateKey
  });
  const curveOpts = {
    Fp,
    Fn,
    allowInfinityPoint: c.allowInfinityPoint,
    endo: c.endo,
    isTorsionFree: c.isTorsionFree,
    clearCofactor: c.clearCofactor,
    fromBytes: c.fromBytes,
    toBytes: c.toBytes
  };
  return { CURVE, curveOpts };
}
__name(_weierstrass_legacy_opts_to_new, "_weierstrass_legacy_opts_to_new");
function _ecdsa_legacy_opts_to_new(c) {
  const { CURVE, curveOpts } = _weierstrass_legacy_opts_to_new(c);
  const ecdsaOpts = {
    hmac: c.hmac,
    randomBytes: c.randomBytes,
    lowS: c.lowS,
    bits2int: c.bits2int,
    bits2int_modN: c.bits2int_modN
  };
  return { CURVE, curveOpts, hash: c.hash, ecdsaOpts };
}
__name(_ecdsa_legacy_opts_to_new, "_ecdsa_legacy_opts_to_new");
function _ecdsa_new_output_to_legacy(c, _ecdsa) {
  const Point = _ecdsa.Point;
  return Object.assign({}, _ecdsa, {
    ProjectivePoint: Point,
    CURVE: Object.assign({}, c, nLength(Point.Fn.ORDER, Point.Fn.BITS))
  });
}
__name(_ecdsa_new_output_to_legacy, "_ecdsa_new_output_to_legacy");
function weierstrass(c) {
  const { CURVE, curveOpts, hash, ecdsaOpts } = _ecdsa_legacy_opts_to_new(c);
  const Point = weierstrassN(CURVE, curveOpts);
  const signs = ecdsa(Point, hash, ecdsaOpts);
  return _ecdsa_new_output_to_legacy(c, signs);
}
__name(weierstrass, "weierstrass");

// node_modules/@noble/curves/esm/_shortw_utils.js
function createCurve(curveDef, defHash) {
  const create = /* @__PURE__ */ __name((hash) => weierstrass({ ...curveDef, hash }), "create");
  return { ...create(defHash), create };
}
__name(createCurve, "createCurve");

// node_modules/@noble/curves/esm/secp256k1.js
var secp256k1_CURVE = {
  p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
  n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
  h: BigInt(1),
  a: BigInt(0),
  b: BigInt(7),
  Gx: BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),
  Gy: BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")
};
var secp256k1_ENDO = {
  beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
  basises: [
    [BigInt("0x3086d221a7d46bcde86c90e49284eb15"), -BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],
    [BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), BigInt("0x3086d221a7d46bcde86c90e49284eb15")]
  ]
};
var _0n5 = /* @__PURE__ */ BigInt(0);
var _1n5 = /* @__PURE__ */ BigInt(1);
var _2n3 = /* @__PURE__ */ BigInt(2);
function sqrtMod(y) {
  const P = secp256k1_CURVE.p;
  const _3n3 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
  const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
  const b2 = y * y * y % P;
  const b3 = b2 * b2 * y % P;
  const b6 = pow2(b3, _3n3, P) * b3 % P;
  const b9 = pow2(b6, _3n3, P) * b3 % P;
  const b11 = pow2(b9, _2n3, P) * b2 % P;
  const b22 = pow2(b11, _11n, P) * b11 % P;
  const b44 = pow2(b22, _22n, P) * b22 % P;
  const b88 = pow2(b44, _44n, P) * b44 % P;
  const b176 = pow2(b88, _88n, P) * b88 % P;
  const b220 = pow2(b176, _44n, P) * b44 % P;
  const b223 = pow2(b220, _3n3, P) * b3 % P;
  const t1 = pow2(b223, _23n, P) * b22 % P;
  const t2 = pow2(t1, _6n, P) * b2 % P;
  const root = pow2(t2, _2n3, P);
  if (!Fpk1.eql(Fpk1.sqr(root), y))
    throw new Error("Cannot find square root");
  return root;
}
__name(sqrtMod, "sqrtMod");
var Fpk1 = Field(secp256k1_CURVE.p, { sqrt: sqrtMod });
var secp256k1 = createCurve({ ...secp256k1_CURVE, Fp: Fpk1, lowS: true, endo: secp256k1_ENDO }, sha256);
var TAGGED_HASH_PREFIXES = {};
function taggedHash(tag, ...messages) {
  let tagP = TAGGED_HASH_PREFIXES[tag];
  if (tagP === void 0) {
    const tagH = sha256(utf8ToBytes(tag));
    tagP = concatBytes(tagH, tagH);
    TAGGED_HASH_PREFIXES[tag] = tagP;
  }
  return sha256(concatBytes(tagP, ...messages));
}
__name(taggedHash, "taggedHash");
var pointToBytes = /* @__PURE__ */ __name((point) => point.toBytes(true).slice(1), "pointToBytes");
var Pointk1 = /* @__PURE__ */ (() => secp256k1.Point)();
var hasEven = /* @__PURE__ */ __name((y) => y % _2n3 === _0n5, "hasEven");
function schnorrGetExtPubKey(priv) {
  const { Fn, BASE } = Pointk1;
  const d_ = _normFnElement(Fn, priv);
  const p = BASE.multiply(d_);
  const scalar = hasEven(p.y) ? d_ : Fn.neg(d_);
  return { scalar, bytes: pointToBytes(p) };
}
__name(schnorrGetExtPubKey, "schnorrGetExtPubKey");
function lift_x(x) {
  const Fp = Fpk1;
  if (!Fp.isValidNot0(x))
    throw new Error("invalid x: Fail if x \u2265 p");
  const xx = Fp.create(x * x);
  const c = Fp.create(xx * x + BigInt(7));
  let y = Fp.sqrt(c);
  if (!hasEven(y))
    y = Fp.neg(y);
  const p = Pointk1.fromAffine({ x, y });
  p.assertValidity();
  return p;
}
__name(lift_x, "lift_x");
var num = bytesToNumberBE;
function challenge(...args) {
  return Pointk1.Fn.create(num(taggedHash("BIP0340/challenge", ...args)));
}
__name(challenge, "challenge");
function schnorrGetPublicKey(secretKey) {
  return schnorrGetExtPubKey(secretKey).bytes;
}
__name(schnorrGetPublicKey, "schnorrGetPublicKey");
function schnorrSign(message, secretKey, auxRand = randomBytes(32)) {
  const { Fn } = Pointk1;
  const m = ensureBytes("message", message);
  const { bytes: px, scalar: d } = schnorrGetExtPubKey(secretKey);
  const a = ensureBytes("auxRand", auxRand, 32);
  const t = Fn.toBytes(d ^ num(taggedHash("BIP0340/aux", a)));
  const rand = taggedHash("BIP0340/nonce", t, px, m);
  const { bytes: rx, scalar: k } = schnorrGetExtPubKey(rand);
  const e = challenge(rx, px, m);
  const sig = new Uint8Array(64);
  sig.set(rx, 0);
  sig.set(Fn.toBytes(Fn.create(k + e * d)), 32);
  if (!schnorrVerify(sig, m, px))
    throw new Error("sign: Invalid signature produced");
  return sig;
}
__name(schnorrSign, "schnorrSign");
function schnorrVerify(signature, message, publicKey) {
  const { Fn, BASE } = Pointk1;
  const sig = ensureBytes("signature", signature, 64);
  const m = ensureBytes("message", message);
  const pub = ensureBytes("publicKey", publicKey, 32);
  try {
    const P = lift_x(num(pub));
    const r = num(sig.subarray(0, 32));
    if (!inRange(r, _1n5, secp256k1_CURVE.p))
      return false;
    const s = num(sig.subarray(32, 64));
    if (!inRange(s, _1n5, secp256k1_CURVE.n))
      return false;
    const e = challenge(Fn.toBytes(r), pointToBytes(P), m);
    const R = BASE.multiplyUnsafe(s).add(P.multiplyUnsafe(Fn.neg(e)));
    const { x, y } = R.toAffine();
    if (R.is0() || !hasEven(y) || x !== r)
      return false;
    return true;
  } catch (error) {
    return false;
  }
}
__name(schnorrVerify, "schnorrVerify");
var schnorr = /* @__PURE__ */ (() => {
  const size = 32;
  const seedLength = 48;
  const randomSecretKey = /* @__PURE__ */ __name((seed = randomBytes(seedLength)) => {
    return mapHashToField(seed, secp256k1_CURVE.n);
  }, "randomSecretKey");
  secp256k1.utils.randomSecretKey;
  function keygen(seed) {
    const secretKey = randomSecretKey(seed);
    return { secretKey, publicKey: schnorrGetPublicKey(secretKey) };
  }
  __name(keygen, "keygen");
  return {
    keygen,
    getPublicKey: schnorrGetPublicKey,
    sign: schnorrSign,
    verify: schnorrVerify,
    Point: Pointk1,
    utils: {
      randomSecretKey,
      randomPrivateKey: randomSecretKey,
      taggedHash,
      // TODO: remove
      lift_x,
      pointToBytes,
      numberToBytesBE,
      bytesToNumberBE,
      mod
    },
    lengths: {
      secretKey: size,
      publicKey: size,
      publicKeyHasPrefix: false,
      signature: size * 2,
      seed: seedLength
    }
  };
})();

// shared/sha256.js
var K = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
var H0 = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
var W = new Uint32Array(64);
function sha2562(data) {
  const H = new Uint32Array(H0);
  const byteLen = data.length;
  const bitLen2 = byteLen * 8;
  const padLen = ((56 - byteLen - 1) % 64 + 64) % 64 + 1;
  const msg = new Uint8Array(byteLen + padLen + 8);
  msg.set(data);
  msg[byteLen] = 128;
  const dv = new DataView(msg.buffer);
  dv.setUint32(msg.length - 8, Math.floor(bitLen2 / 4294967296));
  dv.setUint32(msg.length - 4, bitLen2 >>> 0);
  for (let block = 0; block < msg.length; block += 64) {
    for (let t = 0; t < 16; t++) {
      W[t] = dv.getUint32(block + t * 4);
    }
    for (let t = 16; t < 64; t++) {
      const w15 = W[t - 15];
      const w2 = W[t - 2];
      const s0 = (w15 >>> 7 | w15 << 25) ^ (w15 >>> 18 | w15 << 14) ^ w15 >>> 3;
      const s1 = (w2 >>> 17 | w2 << 15) ^ (w2 >>> 19 | w2 << 13) ^ w2 >>> 10;
      W[t] = W[t - 16] + s0 + W[t - 7] + s1 >>> 0;
    }
    let a = H[0], b = H[1], c = H[2], d = H[3];
    let e = H[4], f = H[5], g = H[6], h = H[7];
    for (let t = 0; t < 64; t++) {
      const S1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
      const ch = e & f ^ ~e & g;
      const temp1 = h + S1 + ch + K[t] + W[t] >>> 0;
      const S0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
      const maj = a & b ^ a & c ^ b & c;
      const temp2 = S0 + maj >>> 0;
      h = g;
      g = f;
      f = e;
      e = d + temp1 >>> 0;
      d = c;
      c = b;
      b = a;
      a = temp1 + temp2 >>> 0;
    }
    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
    H[5] = H[5] + f >>> 0;
    H[6] = H[6] + g >>> 0;
    H[7] = H[7] + h >>> 0;
  }
  const out = new Uint8Array(32);
  const outDv = new DataView(out.buffer);
  for (let i = 0; i < 8; i++)
    outDv.setUint32(i * 4, H[i]);
  return out;
}
__name(sha2562, "sha256");
var HEX_TABLE = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
function bytesToHex2(bytes) {
  let out = "";
  for (let i = 0; i < bytes.length; i++)
    out += HEX_TABLE[bytes[i]];
  return out;
}
__name(bytesToHex2, "bytesToHex");
function hexToBytes2(hex) {
  if (typeof hex !== "string" || hex.length % 2 !== 0 || !/^[0-9a-fA-F]*$/.test(hex)) {
    throw new Error("invalid hex string");
  }
  const out = new Uint8Array(hex.length / 2);
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}
__name(hexToBytes2, "hexToBytes");
var textEncoder = new TextEncoder();
function sha256HexSync(text) {
  return bytesToHex2(sha2562(textEncoder.encode(text)));
}
__name(sha256HexSync, "sha256HexSync");
async function sha256Hex(text) {
  const subtle = globalThis.crypto && globalThis.crypto.subtle;
  if (subtle) {
    const digest = await subtle.digest("SHA-256", textEncoder.encode(text));
    return bytesToHex2(new Uint8Array(digest));
  }
  return sha256HexSync(text);
}
__name(sha256Hex, "sha256Hex");

// shared/sip01.js
var SIP01_KIND = 39697;
var SIP01_SCHEMA_VERSION = "1";
var SIP01_D_PREFIX = "widx:";
var MAX_URL_LEN = 2048;
var MAX_TITLE_LEN = 300;
var MAX_DESCRIPTION_LEN = 1e3;
var MAX_IMAGE_LEN = 2048;
var MAX_ALT_LEN = 1e3;
var MAX_SOURCE_LEN = 100;
var MAX_TOPICS = 8;
var TRACKING_PARAMS = (
  /** @type {const} */
  [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "fbclid",
    "gclid",
    "dclid",
    "mc_cid",
    "mc_eid",
    "igshid",
    "ref_src",
    "spm",
    "si"
  ]
);
var TRACKING_SET = new Set(TRACKING_PARAMS);
var TOPIC_RE = /^[a-z0-9][a-z0-9-]{0,99}$/;
var LANG_RE = /^[a-z]{2}$/;
var EXTENSION_VALUE_RE = /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,49}$/;
var MIME_RE = /^[a-zA-Z0-9][a-zA-Z0-9!#$&^_.+-]{0,126}\/[a-zA-Z0-9][a-zA-Z0-9!#$&^_.+-]{0,126}(;\s*[^\s;=]+=[^\s;]+)*$/;
var PUBLISHED_RE = /^\d{1,16}$/;
var HASH_RE = /^[0-9a-f]{64}$/;
var IPV4_RE = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
var CORE_TAGS = ["d", "u", "v", "alt", "t", "l", "x", "published", "source"];
var EXTENSION_TAGS = ["type", "platform", "category", "network", "country", "mime"];
var KNOWN_TAGS = /* @__PURE__ */ new Set([...CORE_TAGS, ...EXTENSION_TAGS]);
function normalizeIndexUrl(input) {
  if (typeof input !== "string")
    return null;
  let url;
  try {
    url = new URL(input.trim());
  } catch {
    return null;
  }
  if (url.protocol !== "https:" && url.protocol !== "http:")
    return null;
  if (url.hostname.startsWith("www.")) {
    url.hostname = url.hostname.slice(4);
  }
  url.hash = "";
  const entries = [...url.searchParams.entries()].filter(([key]) => !TRACKING_SET.has(key.toLowerCase())).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0);
  const sorted = new URLSearchParams();
  for (const [key, value] of entries)
    sorted.append(key, value);
  url.search = sorted.toString();
  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1);
  }
  return url.toString();
}
__name(normalizeIndexUrl, "normalizeIndexUrl");
async function documentId(normalizedUrl) {
  const hex = await sha256Hex(normalizedUrl);
  return `${SIP01_D_PREFIX}${hex.slice(0, 32)}`;
}
__name(documentId, "documentId");
async function contentHash(title, description = "") {
  return sha256Hex(`${title}
${description}`);
}
__name(contentHash, "contentHash");
function tagValues(event, name) {
  return event.tags.filter((t) => t[0] === name && t[1]).map((t) => t[1]);
}
__name(tagValues, "tagValues");
function tagValue(event, name) {
  return tagValues(event, name)[0];
}
__name(tagValue, "tagValue");
function parseWebDocumentContent(content) {
  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch {
    return void 0;
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
    return void 0;
  const { title, description, image } = (
    /** @type {Record<string, unknown>} */
    parsed
  );
  if (typeof title !== "string")
    return void 0;
  return {
    title,
    ...typeof description === "string" && { description },
    ...typeof image === "string" && { image }
  };
}
__name(parseWebDocumentContent, "parseWebDocumentContent");
async function validateSip01Event(event) {
  const errors = [];
  const notices = [];
  if (!event || typeof event !== "object" || event.kind !== SIP01_KIND) {
    return {
      valid: false,
      errors: [`wrong kind (expected ${SIP01_KIND}, got ${event && event.kind})`],
      notices
    };
  }
  const dTags = event.tags.filter((t) => t[0] === "d");
  if (dTags.length === 0 || !dTags[0][1])
    errors.push("web document missing d tag");
  if (dTags.length > 1)
    errors.push("web document has multiple d tags");
  const dTag = dTags[0] && dTags[0][1];
  const uTags = event.tags.filter((t) => t[0] === "u");
  if (uTags.length === 0 || !uTags[0][1])
    errors.push("web document missing u tag");
  if (uTags.length > 1)
    errors.push("web document has multiple u tags");
  const uTag = uTags[0] && uTags[0][1];
  const vTags = event.tags.filter((t) => t[0] === "v");
  if (vTags.length === 0 || !vTags[0][1])
    errors.push("web document missing v tag");
  else if (vTags.length > 1)
    errors.push("web document has multiple v tags");
  else if (vTags[0][1] !== SIP01_SCHEMA_VERSION) {
    errors.push(`unsupported web document schema version "${vTags[0][1]}"`);
  }
  const altTags = event.tags.filter((t) => t[0] === "alt");
  if (altTags.length === 0 || !altTags[0][1] || !altTags[0][1].trim()) {
    errors.push("web document missing alt tag");
  } else if (altTags.length > 1) {
    errors.push("web document has multiple alt tags");
  } else if (altTags[0][1].length > MAX_ALT_LEN) {
    errors.push(`alt tag exceeds ${MAX_ALT_LEN} characters`);
  }
  let normalized = null;
  if (uTag !== void 0 && uTag !== null && uTag !== "") {
    if (uTag.length > MAX_URL_LEN)
      errors.push(`u tag exceeds ${MAX_URL_LEN} characters`);
    normalized = normalizeIndexUrl(uTag);
    if (!normalized) {
      errors.push("u tag is not a valid http(s) URL");
    } else if (dTag) {
      const expected = await documentId(normalized);
      if (dTag !== expected) {
        errors.push("d tag does not match the normalized u tag (widx: + sha256(u)[0:32])");
      }
    }
  }
  const content = parseWebDocumentContent(event.content || "");
  if (!content) {
    errors.push("web document content is not valid JSON with a title");
  } else {
    const trimmedTitle = content.title.trim();
    if (trimmedTitle.length === 0 || trimmedTitle.length > MAX_TITLE_LEN) {
      errors.push(`title must be 1-${MAX_TITLE_LEN} characters`);
    }
    if (content.description !== void 0 && content.description.length > MAX_DESCRIPTION_LEN) {
      errors.push(`description exceeds ${MAX_DESCRIPTION_LEN} characters`);
    }
    if (content.image !== void 0) {
      let ok = false;
      try {
        ok = new URL(content.image).protocol === "https:";
      } catch {
      }
      if (!ok)
        errors.push("image must be an https URL");
      else if (content.image.length > MAX_IMAGE_LEN) {
        errors.push(`image exceeds ${MAX_IMAGE_LEN} characters`);
      }
    }
  }
  const topics = event.tags.filter((t) => t[0] === "t");
  if (topics.length > MAX_TOPICS)
    errors.push(`web document has more than ${MAX_TOPICS} topic tags`);
  for (const topic of topics) {
    if (!topic[1] || !TOPIC_RE.test(topic[1])) {
      errors.push("topic (t) tags must be lowercase alphanumeric words");
      break;
    }
  }
  const lang = tagValue(event, "l");
  if (lang !== void 0 && !LANG_RE.test(lang)) {
    errors.push("l tag is not a valid ISO 639-1 language code");
  }
  const x = tagValue(event, "x");
  if (x !== void 0) {
    if (!HASH_RE.test(x)) {
      errors.push("x tag must be a lowercase hex sha256 digest");
    } else if (content) {
      const expected = await contentHash(content.title, content.description ?? "");
      if (x !== expected)
        errors.push("x tag does not match sha256(title + \\n + description)");
    }
  }
  const published = tagValue(event, "published");
  if (published !== void 0 && !PUBLISHED_RE.test(published)) {
    errors.push("published tag must be a unix timestamp in seconds");
  }
  const source = tagValue(event, "source");
  if (source !== void 0 && source.length > MAX_SOURCE_LEN) {
    errors.push(`source tag exceeds ${MAX_SOURCE_LEN} characters`);
  }
  for (const name of ["type", "platform", "category", "network"]) {
    const value = tagValue(event, name);
    if (value !== void 0 && !EXTENSION_VALUE_RE.test(value)) {
      errors.push(`${name} tag is not a valid keyword`);
    }
  }
  const country = tagValue(event, "country");
  if (country !== void 0 && !/^[a-zA-Z]{2}$/.test(country)) {
    errors.push("country tag must be an ISO 3166-1 alpha-2 code");
  }
  const mime = tagValue(event, "mime");
  if (mime !== void 0 && !MIME_RE.test(mime)) {
    errors.push("mime tag is not a valid MIME type");
  }
  const unknown = [...new Set(event.tags.map((t) => t[0]).filter((n) => n && !KNOWN_TAGS.has(n)))];
  if (unknown.length > 0) {
    notices.push(`unknown extension tag(s) ignored: ${unknown.join(", ")}`);
  }
  return { valid: errors.length === 0, errors, notices };
}
__name(validateSip01Event, "validateSip01Event");
function domainHierarchy(host) {
  if (!host || IPV4_RE.test(host) || host.includes(":"))
    return [host];
  const parts = host.split(".");
  const out = [host];
  for (let i = 1; i < parts.length - 1; i++) {
    out.push(parts.slice(i).join("."));
  }
  return out;
}
__name(domainHierarchy, "domainHierarchy");
function fileExtension(pathname) {
  const lastSegment = pathname.split("/").pop() ?? "";
  const dot = lastSegment.lastIndexOf(".");
  if (dot <= 0)
    return void 0;
  const ext = lastSegment.slice(dot + 1).toLowerCase();
  return /^[a-z0-9]{1,10}$/.test(ext) ? ext : void 0;
}
__name(fileExtension, "fileExtension");
function searchHostValue(value) {
  let v = String(value).trim().toLowerCase();
  if (!v)
    return void 0;
  if (v.includes("://")) {
    const normalized = normalizeIndexUrl(v);
    if (!normalized)
      return void 0;
    v = new URL(normalized).hostname;
  }
  if (v.startsWith("www."))
    v = v.slice(4);
  if (v.endsWith("."))
    v = v.slice(0, -1);
  if (v.includes("/"))
    v = v.split("/")[0];
  if (v.length > 253 || !/^[a-z0-9.\-:[\]]+$/.test(v))
    return void 0;
  return v;
}
__name(searchHostValue, "searchHostValue");
function extractSip01Fields(event) {
  if (!event || event.kind !== SIP01_KIND)
    return null;
  const d = tagValue(event, "d");
  const rawUrl = tagValue(event, "u");
  if (!d || !rawUrl)
    return null;
  const url = normalizeIndexUrl(rawUrl);
  if (!url)
    return null;
  const content = parseWebDocumentContent(event.content || "");
  if (!content)
    return null;
  let host = "";
  try {
    host = new URL(url).hostname.toLowerCase();
  } catch {
    return null;
  }
  const fields = {
    d,
    url,
    url_host: host,
    url_domain_hierarchy: domainHierarchy(host),
    title: content.title,
    observed_at: event.created_at,
    topics: event.tags.filter((t) => t[0] === "t" && t[1] && TOPIC_RE.test(t[1])).map((t) => t[1]).slice(0, MAX_TOPICS)
  };
  const ext = fileExtension(new URL(url).pathname);
  if (ext)
    fields.file_ext = ext;
  if (content.description)
    fields.description = content.description;
  if (content.image)
    fields.image = content.image;
  const x = tagValue(event, "x");
  if (x && HASH_RE.test(x))
    fields.content_hash = x;
  const published = tagValue(event, "published");
  if (published && PUBLISHED_RE.test(published)) {
    fields.published_at = Number.parseInt(published, 10);
  }
  const source = tagValue(event, "source");
  if (source) {
    fields.source = source;
    const slash = source.indexOf("/");
    if (slash > 0) {
      fields.software = source.slice(0, slash);
      fields.software_version = source.slice(slash + 1) || void 0;
    } else {
      fields.software = source;
    }
  }
  const lang = tagValue(event, "l");
  if (lang && LANG_RE.test(lang))
    fields.language = lang;
  for (const [tag, key] of [["type", "doc_type"], ["platform", "platform"], ["category", "category"], ["network", "network"]]) {
    const value = tagValue(event, tag);
    if (value && EXTENSION_VALUE_RE.test(value))
      fields[key] = value.toLowerCase();
  }
  const country = tagValue(event, "country");
  if (country && /^[a-zA-Z]{2}$/.test(country))
    fields.country = country.toUpperCase();
  const mime = tagValue(event, "mime");
  if (mime && MIME_RE.test(mime))
    fields.content_type = mime.toLowerCase();
  return fields;
}
__name(extractSip01Fields, "extractSip01Fields");

// shared/search-query.js
var SUPPORTED_NIP50_OPERATORS = (
  /** @type {const} */
  [
    "site",
    "domain",
    "url",
    "inurl",
    "title",
    "topic",
    "type",
    "platform",
    "category",
    "network",
    "country",
    "mime",
    "filetype",
    "source",
    "lang",
    "before",
    "after",
    "indexer",
    "x",
    "d",
    "distinct:domain"
  ]
);
var KNOWN_OPS = /* @__PURE__ */ new Set([...SUPPORTED_NIP50_OPERATORS.filter((op) => op !== "distinct:domain"), "language"]);
function parseSearchQuery(input) {
  const raw = String(input ?? "");
  const out = { keywords: [], phrases: [], ops: [], ignored: [], distinctDomain: false, distinctAuthor: false, raw };
  const tokens = [];
  const re = /(-?[a-zA-Z][a-zA-Z0-9]*(?::[a-zA-Z]+)?:"[^"]*")|"([^"]*)"|(\S+)/g;
  let m;
  while ((m = re.exec(raw)) !== null) {
    if (m[1] !== void 0) {
      tokens.push({ text: m[1], quoted: false });
    } else if (m[2] !== void 0) {
      tokens.push({ text: m[2], quoted: true });
    } else {
      tokens.push({ text: m[3], quoted: false });
    }
  }
  for (const token of tokens) {
    const text = token.text;
    if (!text)
      continue;
    const opMatch = /^(-?)([a-zA-Z][a-zA-Z0-9]*(?::[a-zA-Z]+)?):(.+)$/.exec(text);
    if (!token.quoted && opMatch) {
      const negated = opMatch[1] === "-";
      let op = opMatch[2].toLowerCase();
      let value = opMatch[3];
      if (value.length >= 2 && value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      if (op === "distinct:domain" || op === "distinct") {
        if (op === "distinct:domain" || op === "distinct" && value === "domain") {
          if (!negated)
            out.distinctDomain = true;
        } else if (op === "distinct" && value.toLowerCase() === "author") {
          if (!negated)
            out.distinctAuthor = true;
        } else {
          out.ignored.push(`${op}:${value}`);
        }
        continue;
      }
      if (op === "language")
        op = "lang";
      if (KNOWN_OPS.has(op)) {
        out.ops.push({ op, value, negated });
      } else {
        out.ignored.push(`${op}:${value}`);
      }
      continue;
    }
    if (!token.quoted && /^(-?)distinct:domain$/.test(text)) {
      if (!text.startsWith("-"))
        out.distinctDomain = true;
      continue;
    }
    if (token.quoted) {
      out.phrases.push(text);
    } else {
      out.keywords.push(text.toLowerCase());
    }
  }
  return out;
}
__name(parseSearchQuery, "parseSearchQuery");
function parseDateValue(value) {
  const v = String(value).trim();
  if (/^\d{1,16}$/.test(v))
    return Number.parseInt(v, 10);
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v);
  if (!m)
    return null;
  const ms = Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return Number.isNaN(ms) ? null : Math.floor(ms / 1e3);
}
__name(parseDateValue, "parseDateValue");
var FILETYPE_MIME_MAP = (
  /** @type {const} */
  {
    pdf: "application/pdf",
    html: "text/html",
    txt: "text/plain",
    json: "application/json",
    xml: "application/xml",
    csv: "text/csv",
    md: "text/markdown",
    epub: "application/epub+zip",
    zip: "application/zip",
    mp3: "audio/mpeg",
    mp4: "video/mp4",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml"
  }
);
function escapeLike(s) {
  return s.replace(/[\\%_]/g, (c) => "\\" + c);
}
__name(escapeLike, "escapeLike");
var OR_OPERATORS = /* @__PURE__ */ new Set([
  "site",
  "domain",
  "topic",
  "type",
  "platform",
  "category",
  "network",
  "country",
  "lang",
  "mime",
  "filetype",
  "source",
  "indexer",
  "x",
  "d"
]);
var AND_TEXT_OPERATORS = /* @__PURE__ */ new Set(["title", "inurl"]);
var FIRST_ONLY_OPERATORS = /* @__PURE__ */ new Set(["url", "before", "after"]);
function groupSearchOps(parsed) {
  const out = { orGroups: [], andText: [], firstOnly: [] };
  const orMap = /* @__PURE__ */ new Map();
  const firstSeen = /* @__PURE__ */ new Set();
  for (const op of parsed.ops) {
    const key = `${op.negated ? "-" : ""}${op.op}`;
    if (OR_OPERATORS.has(op.op)) {
      const group = orMap.get(key) || { op: op.op, values: [], negated: op.negated };
      group.values.push(op.value);
      orMap.set(key, group);
    } else if (AND_TEXT_OPERATORS.has(op.op)) {
      out.andText.push({ op: (
        /** @type {'title'|'inurl'} */
        op.op
      ), value: op.value, negated: op.negated });
    } else if (FIRST_ONLY_OPERATORS.has(op.op)) {
      if (!firstSeen.has(key)) {
        firstSeen.add(key);
        out.firstOnly.push(op);
      }
    }
  }
  out.orGroups = [...orMap.values()];
  return out;
}
__name(groupSearchOps, "groupSearchOps");
function matchOrGroup(group, fields) {
  const host = (fields.url_host || "").toLowerCase();
  const url = (fields.url || "").toLowerCase();
  const topics = fields.topics || [];
  let sawUsable = false;
  let any = false;
  for (const value of group.values) {
    let hit;
    switch (group.op) {
      case "site": {
        const h = searchHostValue(value);
        if (h === void 0)
          continue;
        sawUsable = true;
        hit = host === h || host.endsWith("." + h);
        break;
      }
      case "domain": {
        const h = searchHostValue(value);
        if (h === void 0)
          continue;
        sawUsable = true;
        hit = host === h;
        break;
      }
      case "topic":
        sawUsable = true;
        hit = topics.includes(value.toLowerCase());
        break;
      case "type":
        sawUsable = true;
        hit = fields.doc_type === value.toLowerCase();
        break;
      case "platform":
        sawUsable = true;
        hit = fields.platform === value.toLowerCase();
        break;
      case "category":
        sawUsable = true;
        hit = fields.category === value.toLowerCase();
        break;
      case "network":
        sawUsable = true;
        hit = fields.network === value.toLowerCase();
        break;
      case "country":
        sawUsable = true;
        hit = fields.country === value.toUpperCase();
        break;
      case "lang":
        sawUsable = true;
        hit = fields.language === value.toLowerCase();
        break;
      case "mime":
        sawUsable = true;
        hit = (fields.content_type || "") === value.toLowerCase();
        break;
      case "filetype": {
        sawUsable = true;
        const ft = value.replace(/^\./, "").toLowerCase();
        const alias = FILETYPE_MIME_MAP[ft];
        hit = fields.file_ext === ft || alias !== void 0 && fields.content_type === alias;
        break;
      }
      case "source":
        sawUsable = true;
        hit = fields.source === value || fields.software === value;
        break;
      case "indexer":
        sawUsable = true;
        hit = fields.indexer === value.toLowerCase();
        break;
      case "x":
        sawUsable = true;
        hit = fields.content_hash === value.toLowerCase();
        break;
      case "d":
        sawUsable = true;
        hit = fields.d === value;
        break;
      default:
        continue;
    }
    if (hit)
      any = true;
  }
  return sawUsable ? any : void 0;
}
__name(matchOrGroup, "matchOrGroup");
function matchSip01Search(parsed, fields) {
  const title = (fields.title || "").toLowerCase();
  const description = (fields.description || "").toLowerCase();
  const url = (fields.url || "").toLowerCase();
  const textHit = /* @__PURE__ */ __name((needleRaw) => {
    const needle = needleRaw.toLowerCase();
    return title.includes(needle) || description.includes(needle) || url.includes(needle);
  }, "textHit");
  for (const kw of parsed.keywords)
    if (!textHit(kw))
      return false;
  for (const ph of parsed.phrases)
    if (!textHit(ph))
      return false;
  const grouped = groupSearchOps(parsed);
  for (const group of grouped.orGroups) {
    const result = matchOrGroup(group, fields);
    if (result === void 0)
      continue;
    if (group.negated ? result : !result)
      return false;
  }
  for (const { op, value, negated } of grouped.andText) {
    const haystack = op === "title" ? title : url;
    const hit = haystack.includes(value.toLowerCase());
    if (negated ? hit : !hit)
      return false;
  }
  for (const { op, value, negated } of grouped.firstOnly) {
    if (op === "url") {
      const n = normalizeIndexUrl(value);
      const hit = n !== null ? fields.url === n : url === value.toLowerCase();
      if (negated ? hit : !hit)
        return false;
    } else {
      const ts = parseDateValue(value);
      if (ts === null)
        continue;
      const published = fields.published_at;
      const hit = published !== void 0 && published !== null && (op === "before" ? published < ts : published >= ts);
      if (negated ? hit : !hit)
        return false;
    }
  }
  return true;
}
__name(matchSip01Search, "matchSip01Search");
function sqlForOrGroup(group) {
  const clauses = [];
  const params = [];
  const usable = [];
  for (const value of group.values) {
    if (group.op === "site" || group.op === "domain") {
      const h = searchHostValue(value);
      if (h !== void 0)
        usable.push(h);
    } else {
      usable.push(value);
    }
  }
  if (usable.length === 0)
    return null;
  const lower = usable.map((v) => v.toLowerCase());
  const inList = /* @__PURE__ */ __name((n) => `(${Array(n).fill("?").join(",")})`, "inList");
  switch (group.op) {
    case "site": {
      for (const h of usable) {
        clauses.push(`(doc.url_host = ? OR doc.url_host LIKE '%.' || ?)`);
        params.push(h, h);
      }
      break;
    }
    case "domain":
      clauses.push(`doc.url_host IN ${inList(usable.length)}`);
      params.push(...usable);
      break;
    case "topic":
      clauses.push(`EXISTS (SELECT 1 FROM json_each(doc.topics) je WHERE je.value IN ${inList(usable.length)})`);
      params.push(...lower);
      break;
    case "type":
      clauses.push(`doc.doc_type IN ${inList(usable.length)}`);
      params.push(...lower);
      break;
    case "platform":
      clauses.push(`doc.platform IN ${inList(usable.length)}`);
      params.push(...lower);
      break;
    case "category":
      clauses.push(`doc.category IN ${inList(usable.length)}`);
      params.push(...lower);
      break;
    case "network":
      clauses.push(`doc.network IN ${inList(usable.length)}`);
      params.push(...lower);
      break;
    case "country":
      clauses.push(`doc.country IN ${inList(usable.length)}`);
      params.push(...usable.map((v) => v.toUpperCase()));
      break;
    case "lang":
      clauses.push(`doc.language IN ${inList(usable.length)}`);
      params.push(...lower);
      break;
    case "mime":
      clauses.push(`doc.content_type IN ${inList(usable.length)}`);
      params.push(...lower);
      break;
    case "filetype": {
      for (const raw of usable) {
        const ft = raw.replace(/^\./, "").toLowerCase();
        const alias = FILETYPE_MIME_MAP[ft];
        if (alias) {
          clauses.push(`(doc.file_ext = ? OR doc.content_type = ?)`);
          params.push(ft, alias);
        } else {
          clauses.push(`doc.file_ext = ?`);
          params.push(ft);
        }
      }
      break;
    }
    case "source": {
      for (const v of usable) {
        clauses.push(`(o.source = ? OR substr(o.source, 1, ?) = ?)`);
        params.push(v, v.length + 1, `${v}/`);
      }
      break;
    }
    case "indexer":
      clauses.push(`o.pubkey IN ${inList(usable.length)}`);
      params.push(...lower);
      break;
    case "x":
      clauses.push(`o.content_hash IN ${inList(usable.length)}`);
      params.push(...lower);
      break;
    case "d":
      clauses.push(`doc.d IN ${inList(usable.length)}`);
      params.push(...usable);
      break;
    default:
      return null;
  }
  const joined = clauses.length === 1 ? clauses[0] : `(${clauses.join(" OR ")})`;
  return { sql: group.negated ? `NOT (${joined})` : `(${joined})`, params };
}
__name(sqlForOrGroup, "sqlForOrGroup");
function buildFtsMatch(parsed) {
  const parts = [];
  for (const kw of parsed.keywords) {
    if (/^[a-z0-9_]+$/.test(kw)) {
      parts.push(`${kw}*`);
    } else {
      const cleaned = kw.replace(/["*()^]/g, " ").replace(/\s+/g, " ").trim();
      if (cleaned)
        parts.push(`"${cleaned}"`);
    }
  }
  for (const ph of parsed.phrases) {
    const cleaned = ph.replace(/"/g, "").trim();
    if (cleaned)
      parts.push(`"${cleaned}"`);
  }
  return parts.length > 0 ? parts.join(" AND ") : null;
}
__name(buildFtsMatch, "buildFtsMatch");
function buildSip01SearchConditions(parsed, opts = {}) {
  const docConditions = [];
  const docParams = [];
  const eventConditions = [];
  const eventParams = [];
  const useFts = opts.keywordMode === "fts";
  const pushText = /* @__PURE__ */ __name((needleRaw, negated) => {
    const needle = `%${escapeLike(needleRaw.toLowerCase())}%`;
    const clause = `(lower(doc.title) LIKE ? ESCAPE '\\' OR lower(doc.description) LIKE ? ESCAPE '\\' OR lower(doc.canonical_url) LIKE ? ESCAPE '\\')`;
    docConditions.push(negated ? `NOT ${clause}` : clause);
    docParams.push(needle, needle, needle);
  }, "pushText");
  if (!useFts) {
    for (const kw of parsed.keywords)
      pushText(kw, false);
    for (const ph of parsed.phrases)
      pushText(ph, false);
  }
  const grouped = groupSearchOps(parsed);
  for (const group of grouped.orGroups) {
    const fragment = sqlForOrGroup(group);
    if (!fragment)
      continue;
    if (group.op === "source" || group.op === "indexer" || group.op === "x") {
      eventConditions.push(fragment.sql);
      eventParams.push(...fragment.params);
    } else {
      docConditions.push(fragment.sql);
      docParams.push(...fragment.params);
    }
  }
  for (const { op, value, negated } of grouped.andText) {
    const column = op === "title" ? "doc.title" : "doc.canonical_url";
    const clause = `lower(${column}) LIKE ? ESCAPE '\\'`;
    docConditions.push(negated ? `NOT (${clause})` : `(${clause})`);
    docParams.push(`%${escapeLike(value.toLowerCase())}%`);
  }
  for (const { op, value, negated } of grouped.firstOnly) {
    if (op === "url") {
      const n = normalizeIndexUrl(value);
      const clause = `doc.canonical_url = ?`;
      docConditions.push(negated ? `NOT (${clause})` : `(${clause})`);
      docParams.push(n ?? value);
    } else {
      const ts = parseDateValue(value);
      if (ts === null)
        continue;
      const range = op === "before" ? `doc.published_at < ?` : `doc.published_at >= ?`;
      docConditions.push(negated ? `(doc.published_at IS NULL OR NOT (${range}))` : `(${range})`);
      docParams.push(ts);
    }
  }
  return { docConditions, docParams, eventConditions, eventParams };
}
__name(buildSip01SearchConditions, "buildSip01SearchConditions");
function buildSip01Rank(parsed) {
  const params = [];
  const parts = [];
  for (const termRaw of [...parsed.keywords, ...parsed.phrases]) {
    const term = `%${escapeLike(termRaw.toLowerCase())}%`;
    parts.push(`(CASE WHEN lower(doc.title) LIKE ? ESCAPE '\\' THEN 4 ELSE 0 END)`);
    params.push(term);
    parts.push(`(CASE WHEN lower(doc.description) LIKE ? ESCAPE '\\' THEN 2 ELSE 0 END)`);
    params.push(term);
  }
  parts.push(`(CASE WHEN doc.indexer_count >= 8 THEN 8 ELSE doc.indexer_count END)`);
  parts.push(`(CASE WHEN doc.last_seen > 0 THEN 2.0 * (doc.last_seen % 1000000) / 1000000.0 ELSE 0 END)`);
  const rankSql = parts.length > 0 ? parts.join(" + ") : "0";
  return { rankSql, params };
}
__name(buildSip01Rank, "buildSip01Rank");
function buildSip01SearchSql(parsed, limit, extras = {}) {
  const fts = extras.fts === true;
  const ftsMatch = fts ? buildFtsMatch(parsed) : null;
  const useFts = ftsMatch !== null;
  const { docConditions, docParams, eventConditions, eventParams } = buildSip01SearchConditions(
    parsed,
    { keywordMode: useFts ? "fts" : "like" }
  );
  const { rankSql, params: rankParams } = buildSip01Rank(parsed);
  const ftsJoin = useFts ? "JOIN sip01_fts ON sip01_fts.rowid = doc.fts_id" : "";
  const bm25Select = useFts ? ", bm25(sip01_fts, 10.0, 5.0, 2.0, 1.5) AS bm25rank" : "";
  const whereParts = [...useFts ? ["sip01_fts MATCH ?"] : [], ...docConditions];
  const where = whereParts.length > 0 ? `WHERE ${whereParts.join(" AND ")}` : "";
  const whereParams = [...useFts ? [ftsMatch] : [], ...docParams];
  const docSelect = `
    SELECT doc.d AS d, doc.last_seen AS last_seen, (${rankSql}) AS rank${bm25Select}
    FROM sip01_documents doc
    ${ftsJoin}
    ${where}
  `;
  const docSet = parsed.distinctDomain ? `
    SELECT d, MAX(rank) AS rank, ${useFts ? "MIN(bm25rank) AS bm25rank," : ""} MAX(last_seen) AS last_seen FROM (
      SELECT doc.d AS d, doc.url_host AS url_host, doc.last_seen AS last_seen, (${rankSql}) AS rank${bm25Select}
      FROM sip01_documents doc
      ${ftsJoin}
      ${where}
    ) GROUP BY url_host
  ` : docSelect;
  const outerConditions = [...eventConditions, ...extras.extraConditions ?? []];
  const outerWhere = outerConditions.length > 0 ? `WHERE ${outerConditions.join(" AND ")}` : "";
  const orderBy = useFts ? "ORDER BY r.bm25rank ASC, r.rank DESC, e.created_at DESC" : "ORDER BY r.rank DESC, e.created_at DESC";
  const sql = `
    SELECT e.id, e.pubkey, e.created_at, e.kind, e.tags, e.content, e.sig, r.rank
    FROM (${docSet}) r
    JOIN sip01_observations o ON o.d = r.d
    JOIN events e ON e.id = o.event_id
    ${outerWhere}
    ${orderBy}
    LIMIT ?
  `;
  const baseParams = [...rankParams, ...whereParams, ...eventParams, ...extras.extraParams ?? [], limit];
  return { sql, params: baseParams };
}
__name(buildSip01SearchSql, "buildSip01SearchSql");
function buildSip01CountSql(parsed, extras = {}) {
  const fts = extras.fts === true;
  const ftsMatch = fts ? buildFtsMatch(parsed) : null;
  const useFts = ftsMatch !== null;
  const { docConditions, docParams, eventConditions, eventParams } = buildSip01SearchConditions(
    parsed,
    { keywordMode: useFts ? "fts" : "like" }
  );
  const ftsJoin = useFts ? "JOIN sip01_fts ON sip01_fts.rowid = doc.fts_id" : "";
  const whereParts = [...useFts ? ["sip01_fts MATCH ?"] : [], ...docConditions];
  const where = whereParts.length > 0 ? `WHERE ${whereParts.join(" AND ")}` : "";
  const whereParams = [...useFts ? [ftsMatch] : [], ...docParams];
  const countExpr = parsed.distinctAuthor ? "COUNT(DISTINCT o.pubkey)" : parsed.distinctDomain ? "COUNT(DISTINCT r.url_host)" : "COUNT(*)";
  const outerConditions = [...eventConditions, ...extras.extraConditions ?? []];
  const outerWhere = outerConditions.length > 0 ? `WHERE ${outerConditions.join(" AND ")}` : "";
  const sql = `
    SELECT ${countExpr} AS count
    FROM (
      SELECT doc.d AS d, doc.url_host AS url_host
      FROM sip01_documents doc
      ${ftsJoin}
      ${where}
    ) r
    JOIN sip01_observations o ON o.d = r.d
    JOIN events e ON e.id = o.event_id
    ${outerWhere}
  `;
  const params = [...whereParams, ...eventParams, ...extras.extraParams ?? []];
  return { sql, params };
}
__name(buildSip01CountSql, "buildSip01CountSql");

// src/sip01/schema.ts
var CACHED_TAG_NAMES = ["p", "e", "a", "t", "d", "r", "L", "s", "u", "l", "x", "v", "i", "k"];
var SIP01_SCHEMA_STATEMENTS = [
  `CREATE TABLE IF NOT EXISTS sip01_documents (
    d TEXT PRIMARY KEY,
    canonical_url TEXT NOT NULL,
    url_host TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    image TEXT,
    content_hash TEXT,
    language TEXT,
    content_type TEXT,
    doc_type TEXT,
    platform TEXT,
    category TEXT,
    network TEXT,
    country TEXT,
    file_ext TEXT,
    topics TEXT NOT NULL DEFAULT '[]',
    published_at INTEGER,
    first_seen INTEGER NOT NULL,
    last_seen INTEGER NOT NULL,
    observation_count INTEGER NOT NULL DEFAULT 1,
    indexer_count INTEGER NOT NULL DEFAULT 1,
    first_indexed_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
    last_event_id TEXT
  )`,
  `CREATE INDEX IF NOT EXISTS idx_sip01_documents_host ON sip01_documents(url_host, last_seen DESC)`,
  `CREATE INDEX IF NOT EXISTS idx_sip01_documents_last_seen ON sip01_documents(last_seen DESC)`,
  `CREATE INDEX IF NOT EXISTS idx_sip01_documents_language ON sip01_documents(language, last_seen DESC)`,
  `CREATE INDEX IF NOT EXISTS idx_sip01_documents_content_type ON sip01_documents(content_type, last_seen DESC)`,
  `CREATE INDEX IF NOT EXISTS idx_sip01_documents_content_hash ON sip01_documents(content_hash)`,
  `CREATE INDEX IF NOT EXISTS idx_sip01_documents_published ON sip01_documents(published_at DESC)`,
  `CREATE TABLE IF NOT EXISTS sip01_observations (
    event_id TEXT PRIMARY KEY,
    d TEXT NOT NULL,
    pubkey TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    content_hash TEXT,
    source TEXT,
    relay_seen_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
    UNIQUE (pubkey, d)
  )`,
  `CREATE INDEX IF NOT EXISTS idx_sip01_observations_d ON sip01_observations(d, created_at DESC)`,
  `CREATE INDEX IF NOT EXISTS idx_sip01_observations_pubkey ON sip01_observations(pubkey, created_at DESC)`,
  `CREATE INDEX IF NOT EXISTS idx_sip01_observations_source ON sip01_observations(source, created_at DESC)`,
  `CREATE TABLE IF NOT EXISTS sip01_indexers (
    pubkey TEXT PRIMARY KEY,
    software TEXT,
    software_version TEXT,
    first_seen INTEGER NOT NULL,
    last_seen INTEGER NOT NULL,
    observation_count INTEGER NOT NULL DEFAULT 0,
    document_count INTEGER NOT NULL DEFAULT 0
  )`,
  `CREATE INDEX IF NOT EXISTS idx_sip01_indexers_last_seen ON sip01_indexers(last_seen DESC)`,
  `CREATE INDEX IF NOT EXISTS idx_sip01_indexers_software ON sip01_indexers(software)`,
  `CREATE TABLE IF NOT EXISTS relay_metrics (
    key TEXT PRIMARY KEY,
    value INTEGER NOT NULL DEFAULT 0
  )`
];
var SCHEMA_VERSION = 12;
function migrationV7Statements() {
  return [
    // Rebuild event_tags_cache_multi without the restrictive CHECK list.
    `CREATE TABLE IF NOT EXISTS event_tags_cache_multi_v7 (
      event_id TEXT NOT NULL,
      pubkey TEXT NOT NULL,
      kind INTEGER NOT NULL,
      created_at INTEGER NOT NULL,
      tag_type TEXT NOT NULL,
      tag_value TEXT NOT NULL,
      PRIMARY KEY (event_id, tag_type, tag_value)
    )`,
    `INSERT OR IGNORE INTO event_tags_cache_multi_v7 (event_id, pubkey, kind, created_at, tag_type, tag_value)
      SELECT event_id, pubkey, kind, created_at, tag_type, tag_value FROM event_tags_cache_multi`,
    // Backfill l/x from the generic tags table for pre-v7 databases.
    `INSERT OR IGNORE INTO event_tags_cache_multi_v7 (event_id, pubkey, kind, created_at, tag_type, tag_value)
      SELECT e.id, e.pubkey, e.kind, e.created_at, t.tag_name, t.tag_value
      FROM events e INNER JOIN tags t ON e.id = t.event_id
      WHERE t.tag_name IN ('l', 'x')`,
    `DROP TABLE IF EXISTS event_tags_cache_multi`,
    `ALTER TABLE event_tags_cache_multi_v7 RENAME TO event_tags_cache_multi`,
    `CREATE INDEX IF NOT EXISTS idx_cache_multi_type_value_time ON event_tags_cache_multi(tag_type, tag_value, created_at DESC)`,
    `CREATE INDEX IF NOT EXISTS idx_cache_multi_type_value_event ON event_tags_cache_multi(tag_type, tag_value, event_id)`,
    `CREATE INDEX IF NOT EXISTS idx_cache_multi_kind_type_value ON event_tags_cache_multi(kind, tag_type, tag_value, created_at DESC)`,
    `CREATE INDEX IF NOT EXISTS idx_cache_multi_event_id ON event_tags_cache_multi(event_id)`,
    // NOTE: no tag_l column — SQLite identifiers are case-insensitive, so
    // `tag_l` collides with the existing `tag_L` (the 'L' tag). The 'l' tag
    // is fully indexed via event_tags_cache_multi (values are case-sensitive)
    // and needs no first-value column.
    `ALTER TABLE events ADD COLUMN tag_x TEXT`,
    `UPDATE events SET
      tag_x = (SELECT tag_value FROM tags WHERE event_id = events.id AND tag_name = 'x' LIMIT 1)
      WHERE EXISTS (SELECT 1 FROM tags t WHERE t.event_id = events.id AND t.tag_name = 'x')`
  ];
}
__name(migrationV7Statements, "migrationV7Statements");
function migrationV8Statements() {
  return [
    `ALTER TABLE deploy_jobs ADD COLUMN status TEXT NOT NULL DEFAULT 'deployed'`,
    `ALTER TABLE deploy_jobs ADD COLUMN steps TEXT`
  ];
}
__name(migrationV8Statements, "migrationV8Statements");
function migrationV9Statements() {
  return [
    `ALTER TABLE sip01_documents ADD COLUMN fts_id INTEGER`,
    `UPDATE sip01_documents SET fts_id = rowid WHERE fts_id IS NULL`,
    `CREATE UNIQUE INDEX IF NOT EXISTS idx_sip01_documents_fts_id ON sip01_documents(fts_id)`,
    `CREATE VIRTUAL TABLE IF NOT EXISTS sip01_fts USING fts5(d UNINDEXED, title, description, canonical_url, topics, tokenize='porter unicode61')`,
    `INSERT INTO sip01_fts (rowid, d, title, description, canonical_url, topics)
       SELECT fts_id, d, title, COALESCE(description, ''), canonical_url, COALESCE(topics, '[]')
       FROM sip01_documents
       WHERE fts_id IS NOT NULL
         AND NOT EXISTS (SELECT 1 FROM sip01_fts f WHERE f.rowid = sip01_documents.fts_id)`
  ];
}
__name(migrationV9Statements, "migrationV9Statements");
function migrationV10Statements() {
  return migrationV9Statements();
}
__name(migrationV10Statements, "migrationV10Statements");
function migrationV11Statements() {
  return [
    `INSERT OR IGNORE INTO event_tags_cache_multi (event_id, pubkey, kind, created_at, tag_type, tag_value)
      SELECT e.id, e.pubkey, e.kind, e.created_at, t.tag_name, t.tag_value
      FROM events e INNER JOIN tags t ON e.id = t.event_id
      WHERE t.tag_name = 'v'`
  ];
}
__name(migrationV11Statements, "migrationV11Statements");
function migrationV12Statements() {
  return [
    `INSERT OR IGNORE INTO event_tags_cache_multi (event_id, pubkey, kind, created_at, tag_type, tag_value)
      SELECT e.id, e.pubkey, e.kind, e.created_at, t.tag_name, t.tag_value
      FROM events e INNER JOIN tags t ON e.id = t.event_id
      WHERE t.tag_name IN ('i', 'k')`
  ];
}
__name(migrationV12Statements, "migrationV12Statements");
var SERVICE_SCHEMA_STATEMENTS = [
  `CREATE TABLE IF NOT EXISTS service_settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
  )`,
  // One row per verified payment. `proof` is unique (zap receipt id or PRE
  // tx hash) — replay protection. `used_at` marks the credit consumed by a
  // deployment.
  `CREATE TABLE IF NOT EXISTS deploy_payments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    pubkey TEXT NOT NULL,
    method TEXT NOT NULL CHECK(method IN ('lightning', 'pre')),
    amount TEXT NOT NULL,
    proof TEXT NOT NULL UNIQUE,
    payer_detail TEXT,
    created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
    used_at INTEGER
  )`,
  `CREATE INDEX IF NOT EXISTS idx_deploy_payments_pubkey ON deploy_payments(pubkey, used_at)`,
  `CREATE TABLE IF NOT EXISTS deploy_jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    pubkey TEXT NOT NULL,
    worker_name TEXT NOT NULL,
    relay_url TEXT NOT NULL,
    payment_id INTEGER,
    created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
    FOREIGN KEY (payment_id) REFERENCES deploy_payments(id)
  )`,
  `CREATE INDEX IF NOT EXISTS idx_deploy_jobs_pubkey ON deploy_jobs(pubkey, created_at DESC)`,
  // Per-IP daily deploy counter (abuse guard)
  `CREATE TABLE IF NOT EXISTS deploy_rate (
    ip_day TEXT PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0
  )`
];

// src/sip01/ingest.ts
var metricBuffer = /* @__PURE__ */ new Map();
var metricLastFlush = 0;
var metricFlushInFlight = null;
var METRIC_FLUSH_KEYS = 32;
var METRIC_FLUSH_MS = 15e3;
async function flushMetrics(session) {
  if (metricBuffer.size === 0 || metricFlushInFlight)
    return metricFlushInFlight ?? Promise.resolve();
  const pending = [...metricBuffer.entries()];
  metricBuffer.clear();
  metricLastFlush = Date.now();
  metricFlushInFlight = (async () => {
    try {
      await session.batch(
        pending.map(
          ([key, delta]) => session.prepare(
            `INSERT INTO relay_metrics (key, value) VALUES (?, ?)
               ON CONFLICT(key) DO UPDATE SET value = value + excluded.value`
          ).bind(key, delta)
        )
      );
    } catch (error) {
      for (const [key, delta] of pending) {
        metricBuffer.set(key, (metricBuffer.get(key) ?? 0) + delta);
      }
      console.error("metric flush failed:", error);
    } finally {
      metricFlushInFlight = null;
    }
  })();
  return metricFlushInFlight;
}
__name(flushMetrics, "flushMetrics");
async function bumpMetric(session, key, delta = 1) {
  metricBuffer.set(key, (metricBuffer.get(key) ?? 0) + delta);
  if (metricBuffer.size >= METRIC_FLUSH_KEYS || Date.now() - metricLastFlush >= METRIC_FLUSH_MS) {
    await flushMetrics(session);
  }
}
__name(bumpMetric, "bumpMetric");
async function ingestSip01Observation(session, event) {
  const fields = extractSip01Fields(event);
  if (!fields) {
    console.error(`sip01: could not extract fields from event ${event.id}`);
    return;
  }
  const topics = JSON.stringify(fields.topics ?? []);
  const statements = [];
  statements.push(
    session.prepare(
      `INSERT INTO sip01_observations (event_id, d, pubkey, created_at, content_hash, source)
         VALUES (?, ?, ?, ?, ?, ?)
         ON CONFLICT(event_id) DO NOTHING`
    ).bind(
      event.id,
      fields.d,
      event.pubkey,
      event.created_at,
      fields.content_hash ?? null,
      fields.source ?? null
    )
  );
  const docValues = [
    fields.d,
    fields.url,
    fields.url_host,
    fields.title,
    fields.description ?? null,
    fields.image ?? null,
    fields.content_hash ?? null,
    fields.language ?? null,
    fields.content_type ?? null,
    fields.doc_type ?? null,
    fields.platform ?? null,
    fields.category ?? null,
    fields.network ?? null,
    fields.country ?? null,
    fields.file_ext ?? null,
    topics,
    fields.published_at ?? null,
    event.created_at,
    // first_seen (initial)
    event.created_at,
    // last_seen (initial)
    event.id
  ];
  statements.push(
    session.prepare(
      `INSERT INTO sip01_documents (
           d, canonical_url, url_host, title, description, image, content_hash,
           language, content_type, doc_type, platform, category, network, country,
           file_ext, topics, published_at, first_seen, last_seen, last_event_id
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(d) DO UPDATE SET
           canonical_url = CASE WHEN excluded.last_seen >= sip01_documents.last_seen THEN excluded.canonical_url ELSE sip01_documents.canonical_url END,
           url_host      = CASE WHEN excluded.last_seen >= sip01_documents.last_seen THEN excluded.url_host      ELSE sip01_documents.url_host      END,
           title         = CASE WHEN excluded.last_seen >= sip01_documents.last_seen THEN excluded.title         ELSE sip01_documents.title         END,
           description   = CASE WHEN excluded.last_seen >= sip01_documents.last_seen THEN excluded.description   ELSE sip01_documents.description   END,
           image         = CASE WHEN excluded.last_seen >= sip01_documents.last_seen THEN excluded.image         ELSE sip01_documents.image         END,
           content_hash  = CASE WHEN excluded.last_seen >= sip01_documents.last_seen THEN excluded.content_hash  ELSE sip01_documents.content_hash  END,
           language      = CASE WHEN excluded.last_seen >= sip01_documents.last_seen THEN excluded.language      ELSE sip01_documents.language      END,
           content_type  = CASE WHEN excluded.last_seen >= sip01_documents.last_seen THEN excluded.content_type  ELSE sip01_documents.content_type  END,
           doc_type      = CASE WHEN excluded.last_seen >= sip01_documents.last_seen THEN excluded.doc_type      ELSE sip01_documents.doc_type      END,
           platform      = CASE WHEN excluded.last_seen >= sip01_documents.last_seen THEN excluded.platform      ELSE sip01_documents.platform      END,
           category      = CASE WHEN excluded.last_seen >= sip01_documents.last_seen THEN excluded.category      ELSE sip01_documents.category      END,
           network       = CASE WHEN excluded.last_seen >= sip01_documents.last_seen THEN excluded.network       ELSE sip01_documents.network       END,
           country       = CASE WHEN excluded.last_seen >= sip01_documents.last_seen THEN excluded.country       ELSE sip01_documents.country       END,
           file_ext      = CASE WHEN excluded.last_seen >= sip01_documents.last_seen THEN excluded.file_ext      ELSE sip01_documents.file_ext      END,
           topics        = CASE WHEN excluded.last_seen >= sip01_documents.last_seen THEN excluded.topics        ELSE sip01_documents.topics        END,
           published_at  = CASE WHEN excluded.last_seen >= sip01_documents.last_seen THEN excluded.published_at  ELSE sip01_documents.published_at  END,
           last_event_id = CASE WHEN excluded.last_seen >= sip01_documents.last_seen THEN excluded.last_event_id ELSE sip01_documents.last_event_id END`
    ).bind(...docValues)
  );
  statements.push(
    session.prepare(
      `UPDATE sip01_documents SET
           observation_count = (SELECT COUNT(*) FROM sip01_observations WHERE d = ?),
           indexer_count     = (SELECT COUNT(DISTINCT pubkey) FROM sip01_observations WHERE d = ?),
           first_seen        = (SELECT MIN(created_at) FROM sip01_observations WHERE d = ?),
           last_seen         = (SELECT MAX(created_at) FROM sip01_observations WHERE d = ?)
         WHERE d = ?`
    ).bind(fields.d, fields.d, fields.d, fields.d, fields.d)
  );
  statements.push(
    session.prepare(
      `INSERT INTO sip01_indexers (pubkey, software, software_version, first_seen, last_seen)
         VALUES (?, ?, ?, ?, ?)
         ON CONFLICT(pubkey) DO UPDATE SET
           software         = COALESCE(excluded.software, sip01_indexers.software),
           software_version = COALESCE(excluded.software_version, sip01_indexers.software_version),
           last_seen        = MAX(sip01_indexers.last_seen, excluded.last_seen),
           first_seen       = MIN(sip01_indexers.first_seen, excluded.first_seen)`
    ).bind(event.pubkey, fields.software ?? null, fields.software_version ?? null, event.created_at, event.created_at)
  );
  statements.push(
    session.prepare(
      `UPDATE sip01_indexers SET
           observation_count = (SELECT COUNT(*) FROM sip01_observations WHERE pubkey = ?),
           document_count    = (SELECT COUNT(DISTINCT d) FROM sip01_observations WHERE pubkey = ?)
         WHERE pubkey = ?`
    ).bind(event.pubkey, event.pubkey, event.pubkey)
  );
  await session.batch(statements);
  await ftsUpsertDocument(session, fields.d);
}
__name(ingestSip01Observation, "ingestSip01Observation");
async function ftsUpsertDocument(session, d) {
  try {
    const doc = await session.prepare("SELECT rowid, fts_id, d, title, description, canonical_url, topics FROM sip01_documents WHERE d = ?").bind(d).first();
    if (!doc)
      return;
    let ftsId = doc.fts_id;
    if (!ftsId) {
      ftsId = doc.rowid;
      await session.prepare("UPDATE sip01_documents SET fts_id = ? WHERE d = ?").bind(ftsId, d).run();
    }
    await session.prepare("DELETE FROM sip01_fts WHERE rowid = ?").bind(ftsId).run().catch(() => void 0);
    await session.prepare("INSERT INTO sip01_fts (rowid, d, title, description, canonical_url, topics) VALUES (?, ?, ?, ?, ?, ?)").bind(ftsId, doc.d, doc.title ?? "", doc.description ?? "", doc.canonical_url ?? "", doc.topics ?? "[]").run();
  } catch {
  }
}
__name(ftsUpsertDocument, "ftsUpsertDocument");
async function ftsDeleteDocument(session, d) {
  try {
    const row = await session.prepare("SELECT rowid FROM sip01_fts WHERE d = ?").bind(d).first();
    if (row) {
      await session.prepare("DELETE FROM sip01_fts WHERE rowid = ?").bind(row.rowid).run();
    }
  } catch {
  }
}
__name(ftsDeleteDocument, "ftsDeleteDocument");
async function removeSip01Observations(session, eventIds) {
  if (eventIds.length === 0)
    return;
  const placeholders = eventIds.map(() => "?").join(",");
  const affected = await session.prepare(`SELECT event_id, d, pubkey FROM sip01_observations WHERE event_id IN (${placeholders})`).bind(...eventIds).all();
  if (!affected.results || affected.results.length === 0)
    return;
  const ds = /* @__PURE__ */ new Set();
  const pubkeys = /* @__PURE__ */ new Set();
  for (const row of affected.results) {
    ds.add(row.d);
    pubkeys.add(row.pubkey);
  }
  const statements = [];
  statements.push(
    session.prepare(`DELETE FROM sip01_observations WHERE event_id IN (${placeholders})`).bind(...eventIds)
  );
  for (const d of ds) {
    statements.push(
      session.prepare(
        `UPDATE sip01_documents SET
             observation_count = (SELECT COUNT(*) FROM sip01_observations WHERE d = ?),
             indexer_count     = (SELECT COUNT(DISTINCT pubkey) FROM sip01_observations WHERE d = ?),
             first_seen        = COALESCE((SELECT MIN(created_at) FROM sip01_observations WHERE d = ?), first_seen),
             last_seen         = COALESCE((SELECT MAX(created_at) FROM sip01_observations WHERE d = ?), last_seen)
           WHERE d = ?`
      ).bind(d, d, d, d, d)
    );
    statements.push(
      session.prepare(`DELETE FROM sip01_documents WHERE d = ? AND NOT EXISTS (SELECT 1 FROM sip01_observations WHERE d = ?)`).bind(d, d)
    );
  }
  for (const d of ds) {
    const stillThere = await session.prepare("SELECT 1 FROM sip01_documents WHERE d = ? LIMIT 1").bind(d).first().catch(() => null);
    if (stillThere) {
      await ftsUpsertDocument(session, d);
    } else {
      await ftsDeleteDocument(session, d);
    }
  }
  for (const pubkey of pubkeys) {
    statements.push(
      session.prepare(
        `UPDATE sip01_indexers SET
             observation_count = (SELECT COUNT(*) FROM sip01_observations WHERE pubkey = ?),
             document_count    = (SELECT COUNT(DISTINCT d) FROM sip01_observations WHERE pubkey = ?)
           WHERE pubkey = ?`
      ).bind(pubkey, pubkey, pubkey)
    );
    statements.push(
      session.prepare(`DELETE FROM sip01_indexers WHERE pubkey = ? AND NOT EXISTS (SELECT 1 FROM sip01_observations WHERE pubkey = ?)`).bind(pubkey, pubkey)
    );
  }
  for (let i = 0; i < statements.length; i += 90) {
    await session.batch(statements.slice(i, i + 90));
  }
}
__name(removeSip01Observations, "removeSip01Observations");

// src/sip01/api.ts
function clampInt(value, min, max, fallback) {
  const n = value ? Number.parseInt(value, 10) : NaN;
  if (!Number.isFinite(n))
    return fallback;
  return Math.min(max, Math.max(min, n));
}
__name(clampInt, "clampInt");
async function getDatabaseSizeBytes(session) {
  try {
    const result = await session.prepare("SELECT 1").run();
    const sizeAfter = result.meta?.size_after;
    return typeof sizeAfter === "number" && sizeAfter > 0 ? sizeAfter : 0;
  } catch {
    return 0;
  }
}
__name(getDatabaseSizeBytes, "getDatabaseSizeBytes");
async function getMetrics(session) {
  const out = {};
  try {
    const rows = await session.prepare("SELECT key, value FROM relay_metrics").all();
    for (const row of rows.results ?? []) {
      out[row.key] = row.value;
    }
  } catch {
  }
  return out;
}
__name(getMetrics, "getMetrics");
async function getSip01Stats(session) {
  const now = Math.floor(Date.now() / 1e3);
  const dayAgo = now - 86400;
  const weekAgo = now - 7 * 86400;
  const [
    totals,
    last24h,
    last7d,
    topHosts,
    topLanguages,
    topMimes,
    topTypes,
    topIndexers,
    topSoftware,
    metricsRows
  ] = await session.batch([
    session.prepare(
      `SELECT
         (SELECT COUNT(*) FROM sip01_documents) AS documents,
         (SELECT COUNT(*) FROM sip01_observations) AS observations,
         (SELECT COUNT(*) FROM sip01_indexers) AS indexers`
    ),
    session.prepare("SELECT COUNT(*) AS n FROM sip01_observations WHERE created_at >= ?").bind(dayAgo),
    session.prepare("SELECT COUNT(*) AS n FROM sip01_observations WHERE created_at >= ?").bind(weekAgo),
    session.prepare("SELECT url_host, COUNT(*) AS n FROM sip01_documents GROUP BY url_host ORDER BY n DESC LIMIT 10"),
    session.prepare("SELECT language, COUNT(*) AS n FROM sip01_documents WHERE language IS NOT NULL GROUP BY language ORDER BY n DESC LIMIT 10"),
    session.prepare("SELECT content_type, COUNT(*) AS n FROM sip01_documents WHERE content_type IS NOT NULL GROUP BY content_type ORDER BY n DESC LIMIT 10"),
    session.prepare("SELECT doc_type, COUNT(*) AS n FROM sip01_documents WHERE doc_type IS NOT NULL GROUP BY doc_type ORDER BY n DESC LIMIT 10"),
    session.prepare("SELECT pubkey, software, software_version, observation_count, document_count, last_seen FROM sip01_indexers ORDER BY observation_count DESC LIMIT 10"),
    session.prepare("SELECT software, COUNT(*) AS n, SUM(observation_count) AS observations FROM sip01_indexers WHERE software IS NOT NULL GROUP BY software ORDER BY observations DESC LIMIT 10"),
    session.prepare("SELECT key, value FROM relay_metrics")
  ]);
  const metrics = {};
  for (const row of metricsRows.results ?? []) {
    metrics[row.key] = row.value;
  }
  const last24hRow = last24h.results?.[0];
  const last7dRow = last7d.results?.[0];
  const sizeBytes = await getDatabaseSizeBytes(session);
  const totalsRow = totals.results?.[0] ?? {};
  return {
    documents: totalsRow.documents ?? 0,
    observations: totalsRow.observations ?? 0,
    indexers: totalsRow.indexers ?? 0,
    observations_24h: last24hRow?.n ?? 0,
    observations_7d: last7dRow?.n ?? 0,
    top_hosts: topHosts.results ?? [],
    top_languages: topLanguages.results ?? [],
    top_mime_types: topMimes.results ?? [],
    top_document_types: topTypes.results ?? [],
    top_indexers: topIndexers.results ?? [],
    indexer_software: topSoftware.results ?? [],
    metrics,
    database_size_bytes: sizeBytes,
    generated_at: now
  };
}
__name(getSip01Stats, "getSip01Stats");
async function listIndexers(session, url) {
  const limit = clampInt(url.searchParams.get("limit"), 1, 500, 50);
  const offset = clampInt(url.searchParams.get("offset"), 0, 1e6, 0);
  const rows = await session.prepare(
    `SELECT pubkey, software, software_version, first_seen, last_seen, observation_count, document_count
       FROM sip01_indexers ORDER BY observation_count DESC, last_seen DESC LIMIT ? OFFSET ?`
  ).bind(limit, offset).all();
  const total = await session.prepare("SELECT COUNT(*) AS n FROM sip01_indexers").first();
  return { indexers: rows.results ?? [], total: total?.n ?? 0, limit, offset };
}
__name(listIndexers, "listIndexers");
async function listDocuments(session, url) {
  const limit = clampInt(url.searchParams.get("limit"), 1, 500, 50);
  const offset = clampInt(url.searchParams.get("offset"), 0, 1e6, 0);
  const host = url.searchParams.get("host");
  const language = url.searchParams.get("lang");
  const q = url.searchParams.get("q");
  const conditions = [];
  const params = [];
  if (host) {
    conditions.push("(url_host = ? OR url_host LIKE ?)");
    params.push(host.toLowerCase(), `%.${host.toLowerCase()}`);
  }
  if (language) {
    conditions.push("language = ?");
    params.push(language.toLowerCase());
  }
  if (q) {
    const needle = `%${q.toLowerCase().replace(/[\\%_]/g, (c) => "\\" + c)}%`;
    conditions.push(`(lower(title) LIKE ? ESCAPE '\\' OR lower(description) LIKE ? ESCAPE '\\' OR lower(canonical_url) LIKE ? ESCAPE '\\')`);
    params.push(needle, needle, needle);
  }
  const where = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";
  const rows = await session.prepare(
    `SELECT d, canonical_url, url_host, title, description, image, content_hash, language,
              content_type, doc_type, platform, category, network, country, file_ext, topics,
              published_at, first_seen, last_seen, observation_count, indexer_count, last_event_id
       FROM sip01_documents ${where}
       ORDER BY last_seen DESC LIMIT ? OFFSET ?`
  ).bind(...params, limit, offset).all();
  const total = await session.prepare(`SELECT COUNT(*) AS n FROM sip01_documents ${where}`).bind(...params).first();
  return { documents: rows.results ?? [], total: total?.n ?? 0, limit, offset };
}
__name(listDocuments, "listDocuments");
async function getDocument(session, d) {
  const doc = await session.prepare(
    `SELECT d, canonical_url, url_host, title, description, image, content_hash, language,
              content_type, doc_type, platform, category, network, country, file_ext, topics,
              published_at, first_seen, last_seen, observation_count, indexer_count, last_event_id
       FROM sip01_documents WHERE d = ?`
  ).bind(d).first();
  if (!doc)
    return null;
  const observations = await session.prepare(
    `SELECT o.event_id, o.pubkey, o.created_at, o.content_hash, o.source, o.relay_seen_at
       FROM sip01_observations o WHERE o.d = ? ORDER BY o.created_at DESC`
  ).bind(d).all();
  return { document: doc, observations: observations.results ?? [] };
}
__name(getDocument, "getDocument");
async function listObservations(session, url) {
  const limit = clampInt(url.searchParams.get("limit"), 1, 200, 50);
  const offset = clampInt(url.searchParams.get("offset"), 0, 1e6, 0);
  const pubkey = url.searchParams.get("pubkey");
  const d = url.searchParams.get("d");
  const conditions = [];
  const params = [];
  if (pubkey) {
    conditions.push("o.pubkey = ?");
    params.push(pubkey.toLowerCase());
  }
  if (d) {
    conditions.push("o.d = ?");
    params.push(d);
  }
  const where = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";
  const rows = await session.prepare(
    `SELECT e.id, e.pubkey, e.created_at, e.kind, e.tags, e.content, e.sig
       FROM sip01_observations o JOIN events e ON e.id = o.event_id
       ${where} ORDER BY o.created_at DESC LIMIT ? OFFSET ?`
  ).bind(...params, limit, offset).all();
  const events = (rows.results ?? []).map((row) => ({
    id: row.id,
    pubkey: row.pubkey,
    created_at: row.created_at,
    kind: row.kind,
    tags: JSON.parse(row.tags),
    content: row.content,
    sig: row.sig
  }));
  return { events, limit, offset };
}
__name(listObservations, "listObservations");
async function getIndexer(session, pubkey) {
  const indexer = await session.prepare(
    `SELECT pubkey, software, software_version, first_seen, last_seen, observation_count, document_count
       FROM sip01_indexers WHERE pubkey = ?`
  ).bind(pubkey.toLowerCase()).first();
  if (!indexer)
    return null;
  const topHosts = await session.prepare(
    `SELECT doc.url_host, COUNT(*) AS n FROM sip01_observations o
       JOIN sip01_documents doc ON doc.d = o.d
       WHERE o.pubkey = ? GROUP BY doc.url_host ORDER BY n DESC LIMIT 10`
  ).bind(pubkey.toLowerCase()).all();
  const languages = await session.prepare(
    `SELECT doc.language, COUNT(*) AS n FROM sip01_observations o
       JOIN sip01_documents doc ON doc.d = o.d
       WHERE o.pubkey = ? AND doc.language IS NOT NULL GROUP BY doc.language ORDER BY n DESC LIMIT 10`
  ).bind(pubkey.toLowerCase()).all();
  return {
    indexer,
    top_hosts: topHosts.results ?? [],
    languages: languages.results ?? []
  };
}
__name(getIndexer, "getIndexer");

// src/sip01/search.ts
var ftsProbe = null;
function ftsAvailable(session) {
  if (!ftsProbe) {
    ftsProbe = (async () => {
      try {
        await session.prepare("SELECT rowid FROM sip01_fts LIMIT 1").first();
        return true;
      } catch {
        return false;
      }
    })().catch(() => false);
    ftsProbe.catch(() => {
      ftsProbe = null;
    });
  }
  return ftsProbe;
}
__name(ftsAvailable, "ftsAvailable");
function clampSearchLimit(limit) {
  if (!limit || !Number.isFinite(limit) || limit <= 0)
    return Math.min(50, SEARCH_MAX_RESULTS);
  return Math.min(limit, SEARCH_MAX_RESULTS);
}
__name(clampSearchLimit, "clampSearchLimit");
function eventFilterExtras(filter) {
  const conditions = [];
  const params = [];
  if (filter.ids && filter.ids.length > 0) {
    conditions.push(`e.id IN (${filter.ids.map(() => "?").join(",")})`);
    params.push(...filter.ids);
  }
  if (filter.authors && filter.authors.length > 0) {
    conditions.push(`e.pubkey IN (${filter.authors.map(() => "?").join(",")})`);
    params.push(...filter.authors);
  }
  if (filter.since) {
    conditions.push("e.created_at >= ?");
    params.push(filter.since);
  }
  if (filter.until) {
    conditions.push("e.created_at <= ?");
    params.push(filter.until);
  }
  for (const [key, values] of Object.entries(filter)) {
    if (key.startsWith("#") && Array.isArray(values) && values.length > 0) {
      const tagName = key.substring(1);
      if (tagName.length !== 1)
        continue;
      conditions.push(
        `EXISTS (SELECT 1 FROM event_tags_cache_multi em WHERE em.event_id = e.id AND em.tag_type = ? AND em.tag_value IN (${values.map(() => "?").join(",")}))`
      );
      params.push(tagName, ...values);
    }
  }
  return { conditions, params };
}
__name(eventFilterExtras, "eventFilterExtras");
async function executeSearch(session, filter) {
  const limit = clampSearchLimit(filter.limit);
  const parsed = parseSearchQuery(String(filter.search ?? "").slice(0, 500));
  const kinds = Array.isArray(filter.kinds) ? filter.kinds : void 0;
  const wantSip01 = SIP01_INDEXING && (!kinds || kinds.includes(SIP01_KIND));
  const otherKinds = kinds ? kinds.filter((k) => k !== SIP01_KIND) : void 0;
  const extras = eventFilterExtras(filter);
  const events = [];
  const seen = /* @__PURE__ */ new Set();
  if (wantSip01) {
    const hasTextTerms = parsed.keywords.length > 0 || parsed.phrases.length > 0;
    const useFts = hasTextTerms && await ftsAvailable(session);
    const { sql, params } = buildSip01SearchSql(parsed, limit, {
      extraConditions: extras.conditions,
      extraParams: extras.params,
      fts: useFts
    });
    const distinctAuthor = parsed.distinctAuthor;
    try {
      const result = await session.prepare(sql).bind(...params).all();
      const seenAuthors = /* @__PURE__ */ new Set();
      for (const row of result.results ?? []) {
        const id = row.id;
        const pubkey = row.pubkey;
        if (seen.has(id))
          continue;
        if (distinctAuthor) {
          if (seenAuthors.has(pubkey))
            continue;
          seenAuthors.add(pubkey);
        }
        seen.add(id);
        events.push({
          id,
          pubkey,
          created_at: row.created_at,
          kind: row.kind,
          tags: JSON.parse(row.tags),
          content: row.content,
          sig: row.sig
        });
      }
    } catch (error) {
      if (useFts) {
        console.error("sip01 FTS search failed, falling back to LIKE:", error);
        ftsProbe = Promise.resolve(false);
        const fallback = buildSip01SearchSql(parsed, limit, {
          extraConditions: extras.conditions,
          extraParams: extras.params,
          fts: false
        });
        try {
          const result = await session.prepare(fallback.sql).bind(...fallback.params).all();
          const fallbackSeenAuthors = /* @__PURE__ */ new Set();
          for (const row of result.results ?? []) {
            const id = row.id;
            const pubkey = row.pubkey;
            if (seen.has(id))
              continue;
            if (distinctAuthor) {
              if (fallbackSeenAuthors.has(pubkey))
                continue;
              fallbackSeenAuthors.add(pubkey);
            }
            seen.add(id);
            events.push({
              id,
              pubkey,
              created_at: row.created_at,
              kind: row.kind,
              tags: JSON.parse(row.tags),
              content: row.content,
              sig: row.sig
            });
          }
        } catch (fallbackError) {
          console.error("sip01 LIKE fallback search failed:", fallbackError);
        }
      } else {
        console.error("sip01 search query failed:", error, sql);
      }
    }
  }
  const genericKinds = kinds === void 0 ? void 0 : otherKinds;
  const wantGeneric = kinds === void 0 || genericKinds !== void 0 && genericKinds.length > 0;
  if (wantGeneric && (parsed.keywords.length > 0 || parsed.phrases.length > 0)) {
    const conditions = [];
    const params = [];
    for (const termRaw of [...parsed.keywords, ...parsed.phrases]) {
      conditions.push(`lower(e.content) LIKE ? ESCAPE '\\'`);
      params.push(`%${escapeLike(termRaw.toLowerCase())}%`);
    }
    if (genericKinds && genericKinds.length > 0) {
      conditions.push(`e.kind IN (${genericKinds.map(() => "?").join(",")})`);
      params.push(...genericKinds);
    }
    if (filter.ids && filter.ids.length > 0) {
      conditions.push(`e.id IN (${filter.ids.map(() => "?").join(",")})`);
      params.push(...filter.ids);
    }
    if (filter.authors && filter.authors.length > 0) {
      conditions.push(`e.pubkey IN (${filter.authors.map(() => "?").join(",")})`);
      params.push(...filter.authors);
    }
    if (filter.since) {
      conditions.push("e.created_at >= ?");
      params.push(filter.since);
    }
    if (filter.until) {
      conditions.push("e.created_at <= ?");
      params.push(filter.until);
    }
    const sql = `
      SELECT e.id, e.pubkey, e.created_at, e.kind, e.tags, e.content, e.sig
      FROM events e
      ${conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : ""}
      ORDER BY e.created_at DESC
      LIMIT ?
    `;
    params.push(limit);
    try {
      const result = await session.prepare(sql).bind(...params).all();
      const distinctAuthor = parsed.distinctAuthor;
      const seenAuthors = /* @__PURE__ */ new Set();
      for (const row of result.results ?? []) {
        const id = row.id;
        const pubkey = row.pubkey;
        if (seen.has(id))
          continue;
        if (distinctAuthor) {
          if (seenAuthors.has(pubkey))
            continue;
          seenAuthors.add(pubkey);
        }
        seen.add(id);
        events.push({
          id,
          pubkey,
          created_at: row.created_at,
          kind: row.kind,
          tags: JSON.parse(row.tags),
          content: row.content,
          sig: row.sig
        });
      }
    } catch (error) {
      console.error("generic search query failed:", error);
    }
  }
  return events.slice(0, limit);
}
__name(executeSearch, "executeSearch");
async function executeSearchCount(session, filter) {
  const parsed = parseSearchQuery(String(filter.search ?? "").slice(0, 500));
  const hasTextTerms = parsed.keywords.length > 0 || parsed.phrases.length > 0;
  const useFts = hasTextTerms && await ftsAvailable(session);
  const extras = eventFilterExtras(filter);
  const { sql, params } = buildSip01CountSql(parsed, {
    extraConditions: extras.conditions,
    extraParams: extras.params,
    fts: useFts
  });
  try {
    const result = await session.prepare(sql).bind(...params).first();
    return result?.count || 0;
  } catch (error) {
    if (useFts) {
      console.error("sip01 FTS count failed, falling back to LIKE:", error);
      ftsProbe = Promise.resolve(false);
      const fallback = buildSip01CountSql(parsed, {
        extraConditions: extras.conditions,
        extraParams: extras.params,
        fts: false
      });
      try {
        const result = await session.prepare(fallback.sql).bind(...fallback.params).first();
        return result?.count || 0;
      } catch (fallbackError) {
        console.error("sip01 LIKE fallback count failed:", fallbackError);
        return 0;
      }
    }
    console.error("sip01 count query failed:", error, sql);
    return 0;
  }
}
__name(executeSearchCount, "executeSearchCount");

// shared/bech32.js
var CHARSET = "qpzry9x8gf2tvdw0s3jn54khce6mua7l";
var CHARKEY = new Map([...CHARSET].map((c, i) => [c, i]));
function polymod(values) {
  const GEN = [996825010, 642813549, 513874426, 1027748829, 705979059];
  let chk = 1;
  for (const v of values) {
    const top = chk >> 25;
    chk = (chk & 33554431) << 5 ^ v;
    for (let i = 0; i < 5; i++) {
      if (top >> i & 1)
        chk ^= GEN[i];
    }
  }
  return chk;
}
__name(polymod, "polymod");
function hrpExpand(hrp) {
  return [...hrp].map((c) => c.charCodeAt(0) >> 5).concat([0], [...hrp].map((c) => c.charCodeAt(0) & 31));
}
__name(hrpExpand, "hrpExpand");
function convertBits(data, fromBits, toBits, pad) {
  let acc = 0;
  let bits = 0;
  const ret = [];
  const maxv = (1 << toBits) - 1;
  for (const value of data) {
    if (value < 0 || value >> fromBits !== 0)
      return null;
    acc = acc << fromBits | value;
    bits += fromBits;
    while (bits >= toBits) {
      bits -= toBits;
      ret.push(acc >> bits & maxv);
    }
  }
  if (pad) {
    if (bits > 0)
      ret.push(acc << toBits - bits & maxv);
  } else if (bits >= fromBits || (acc << toBits - bits & maxv) !== 0) {
    return null;
  }
  return ret;
}
__name(convertBits, "convertBits");
function npubToHex(npub) {
  try {
    const value = String(npub).trim().toLowerCase();
    const split = value.lastIndexOf("1");
    if (split < 1 || split + 7 > value.length)
      return null;
    const hrp = value.slice(0, split);
    if (hrp !== "npub")
      return null;
    const dataPart = value.slice(split + 1);
    const data = [];
    for (const c of dataPart) {
      const d = CHARKEY.get(c);
      if (d === void 0)
        return null;
      data.push(d);
    }
    if (data.length < 6)
      return null;
    const checksum = polymod(hrpExpand(hrp).concat(data));
    if (checksum !== 1)
      return null;
    const words = convertBits(data.slice(0, -6), 5, 8, false);
    if (!words || words.length !== 32)
      return null;
    return words.map((b) => b.toString(16).padStart(2, "0")).join("");
  } catch {
    return null;
  }
}
__name(npubToHex, "npubToHex");

// src/pay.ts
var MAX_RECEIPT_AGE_SECONDS = 30 * 24 * 3600;
async function verifyZapReceipt(event, relayNpub3, priceSats, verifySig) {
  try {
    if (!event || event.kind !== 9735)
      return null;
    const operatorHex = npubToHex(relayNpub3);
    if (!operatorHex) {
      console.error("pay: configured relayNpub is not a valid npub");
      return null;
    }
    const tags = event.tags ?? [];
    const tag = /* @__PURE__ */ __name((name) => tags.find((t) => t[0] === name && t[1])?.[1], "tag");
    if (tag("p") !== operatorHex)
      return null;
    const payer = tag("P");
    if (!payer || !/^[0-9a-f]{64}$/.test(payer))
      return null;
    const amountTag = tag("amount");
    const amountMsats = amountTag ? Number.parseInt(amountTag, 10) : NaN;
    if (!Number.isFinite(amountMsats) || amountMsats < priceSats * 1e3) {
      return null;
    }
    const bolt11 = tag("bolt11");
    if (!bolt11 || !bolt11.toLowerCase().startsWith("ln"))
      return null;
    const now = Math.floor(Date.now() / 1e3);
    if (event.created_at > now + 900 || event.created_at < now - MAX_RECEIPT_AGE_SECONDS) {
      return null;
    }
    if (!await verifySig(event))
      return null;
    return {
      payer,
      amountSats: Math.floor(amountMsats / 1e3),
      receiptId: event.id,
      bolt11
    };
  } catch (error) {
    console.error("pay: zap receipt verification failed:", error);
    return null;
  }
}
__name(verifyZapReceipt, "verifyZapReceipt");
async function hasPaidForRelay(pubkey, env) {
  try {
    const session = env.RELAY_DATABASE.withSession("first-unconstrained");
    const result = await session.prepare("SELECT pubkey FROM paid_pubkeys WHERE pubkey = ? LIMIT 1").bind(pubkey).first();
    return result !== null;
  } catch (error) {
    console.error(`Error checking paid status for ${pubkey}:`, error);
    return null;
  }
}
__name(hasPaidForRelay, "hasPaidForRelay");
async function savePaidPubkey(pubkey, env, amountSats, receiptId) {
  try {
    const session = env.RELAY_DATABASE.withSession("first-primary");
    await session.prepare(
      `INSERT INTO paid_pubkeys (pubkey, paid_at, amount_sats)
         VALUES (?, ?, ?)
         ON CONFLICT(pubkey) DO UPDATE SET
           paid_at = excluded.paid_at,
           amount_sats = excluded.amount_sats`
    ).bind(pubkey, Math.floor(Date.now() / 1e3), amountSats ?? 0).run();
    if (receiptId) {
      console.log(`pay: recorded payment for ${pubkey} (receipt ${receiptId}, ${amountSats} sats)`);
    }
    return true;
  } catch (error) {
    console.error(`Error saving paid pubkey ${pubkey}:`, error);
    return false;
  }
}
__name(savePaidPubkey, "savePaidPubkey");

// src/mini-landing.ts
function serveMiniLanding(host) {
  const wsUrl = `wss://${host}`;
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(relayInfo.name)}</title>
<style>
  body { background:#0a0a0f; color:#e8e8f0; font-family: ui-monospace, Menlo, monospace;
         display:flex; min-height:100vh; align-items:center; justify-content:center; margin:0; }
  .box { max-width:640px; padding:2rem; border:1px solid #2a2a3a; border-radius:12px; background:#12121a; }
  h1 { color:#f0b45a; font-size:1.4rem; margin:0 0 .5rem; }
  code { display:block; background:#0a0a0f; border:1px solid #2a2a3a; border-radius:8px;
         padding:.75rem 1rem; color:#f0b45a; margin:1rem 0; word-break:break-all; }
  p { color:#9a9ab0; line-height:1.6; }
  a { color:#f0b45a; }
  small { color:#666; }
</style>
</head>
<body>
  <div class="box">
    <h1>${escapeHtml(relayInfo.name)}</h1>
    <p>${escapeHtml(relayInfo.description)}</p>
    <p>Connect your Nostr client to:</p>
    <code>${escapeHtml(wsUrl)}</code>
    <p>
      <a href="/?" onclick="return false">NIP-11</a> relay info:
      <code style="display:inline">curl -H "Accept: application/nostr+json" https://${escapeHtml(host)}</code>
    </p>
    <small>Software: <a href="${escapeHtml(relayInfo.software)}">${escapeHtml(relayInfo.software)}</a> \xB7 v${escapeHtml(relayInfo.version)}<br>
    Minimal page: static assets binding not configured. Deploy with wrangler for the full dashboard.</small>
  </div>
</body>
</html>`;
  return new Response(html, {
    status: 200,
    headers: { "Content-Type": "text/html;charset=UTF-8", "Cache-Control": "public, max-age=300" }
  });
}
__name(serveMiniLanding, "serveMiniLanding");
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[c]);
}
__name(escapeHtml, "escapeHtml");

// src/runtime-config.ts
function runtimeRelayName(env) {
  return env.RELAY_NAME?.trim() || relayInfo.name;
}
__name(runtimeRelayName, "runtimeRelayName");
function runtimeRelayNpub(env) {
  return env.RELAY_NPUB?.trim() || relayNpub;
}
__name(runtimeRelayNpub, "runtimeRelayNpub");
function runtimeRelayPubkey(env) {
  return env.RELAY_PUBKEY?.trim() || relayInfo.pubkey;
}
__name(runtimeRelayPubkey, "runtimeRelayPubkey");
function runtimeRelayContact(env) {
  return env.RELAY_CONTACT?.trim() || relayInfo.contact;
}
__name(runtimeRelayContact, "runtimeRelayContact");
function runtimeOwnerPubkey(env) {
  return env.SERVICE_OWNER_PUBKEY?.trim() || SERVICE_OWNER_PUBKEY;
}
__name(runtimeOwnerPubkey, "runtimeOwnerPubkey");
function runtimeDeployServiceEnabled(env) {
  const v = env.DEPLOY_SERVICE_ENABLED?.trim().toLowerCase();
  if (v === "false" || v === "0" || v === "off")
    return false;
  if (v === "true" || v === "1" || v === "on")
    return true;
  return DEPLOY_SERVICE_ENABLED;
}
__name(runtimeDeployServiceEnabled, "runtimeDeployServiceEnabled");
function runtimePaymentMode(env) {
  const v = env.PAYMENT_MODE?.trim().toLowerCase();
  if (v === "free" || v === "donation" || v === "pay-to-relay")
    return v;
  return PAYMENT_MODE;
}
__name(runtimePaymentMode, "runtimePaymentMode");
function runtimePaymentPriceSats(env) {
  const v = Number.parseInt(env.RELAY_ACCESS_PRICE_SATS?.trim() ?? "", 10);
  if (Number.isFinite(v) && v > 0)
    return v;
  return RELAY_ACCESS_PRICE_SATS;
}
__name(runtimePaymentPriceSats, "runtimePaymentPriceSats");
function runtimeAuthRequired(env) {
  const v = env.AUTH_REQUIRED?.trim().toLowerCase();
  if (v === "true" || v === "1" || v === "on")
    return true;
  if (v === "false" || v === "0" || v === "off")
    return false;
  return AUTH_REQUIRED;
}
__name(runtimeAuthRequired, "runtimeAuthRequired");

// src/service/settings.ts
var SERVICE_SETTING_KEYS = [
  "deploy_price_sats",
  "deploy_price_pre",
  "zap_npub",
  "pre_address"
];
function defaults(env) {
  return {
    deploy_price_sats: String(DEPLOY_PRICE_SATS),
    deploy_price_pre: String(DEPLOY_PRICE_PRE),
    zap_npub: env ? runtimeRelayNpub(env) : DEPLOY_ZAP_NPUB,
    pre_address: DEPLOY_PRE_ADDRESS
  };
}
__name(defaults, "defaults");
async function getServiceSettings(session, env) {
  const out = defaults(env);
  try {
    const rows = await session.prepare(`SELECT key, value FROM service_settings WHERE key IN (${SERVICE_SETTING_KEYS.map(() => "?").join(",")})`).bind(...SERVICE_SETTING_KEYS).all();
    for (const row of rows.results ?? []) {
      const key = row.key;
      if (key in out)
        out[key] = row.value;
    }
  } catch (error) {
    console.error("service_settings read failed (using defaults):", error);
  }
  return out;
}
__name(getServiceSettings, "getServiceSettings");
async function setServiceSetting(session, key, value) {
  if (!SERVICE_SETTING_KEYS.includes(key)) {
    throw new Error(`unknown setting: ${key}`);
  }
  await session.prepare(
    `INSERT INTO service_settings (key, value, updated_at) VALUES (?, ?, strftime('%s', 'now'))
       ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at`
  ).bind(key, value).run();
}
__name(setServiceSetting, "setServiceSetting");

// src/service/pay.ts
async function recordPayment(session, pubkey, method, amount, proof, payerDetail) {
  try {
    await session.prepare(
      `INSERT INTO deploy_payments (pubkey, method, amount, proof, payer_detail)
         VALUES (?, ?, ?, ?, ?)`
    ).bind(pubkey, method, amount, proof, payerDetail ?? null).run();
    return { ok: true };
  } catch (error) {
    if (String(error?.message ?? "").includes("UNIQUE")) {
      return { ok: false, error: "this payment proof was already used" };
    }
    console.error("recordPayment failed:", error);
    return { ok: false, error: "could not record payment" };
  }
}
__name(recordPayment, "recordPayment");
async function hasDeployCredit(session, pubkey) {
  const row = await session.prepare("SELECT id FROM deploy_payments WHERE pubkey = ? AND used_at IS NULL LIMIT 1").bind(pubkey).first();
  return row !== null;
}
__name(hasDeployCredit, "hasDeployCredit");
async function consumeDeployCredit(session, pubkey) {
  const row = await session.prepare("SELECT id FROM deploy_payments WHERE pubkey = ? AND used_at IS NULL ORDER BY id ASC LIMIT 1").bind(pubkey).first();
  if (!row)
    return null;
  await session.prepare("UPDATE deploy_payments SET used_at = strftime('%s', 'now') WHERE id = ?").bind(row.id).run();
  return row.id;
}
__name(consumeDeployCredit, "consumeDeployCredit");
async function payWithLightning(session, event, claimedPubkey, verifySig, env) {
  const settings = await getServiceSettings(session, env);
  const priceSats = parseInt(settings.deploy_price_sats, 10);
  const verified = await verifyZapReceipt(event, settings.zap_npub, priceSats, verifySig);
  if (!verified) {
    return { ok: false, error: "invalid zap receipt (recipient, amount, or signature)" };
  }
  if (verified.payer !== claimedPubkey) {
    return { ok: false, error: "zap sender (P tag) does not match the logged-in pubkey" };
  }
  return recordPayment(
    session,
    claimedPubkey,
    "lightning",
    String(verified.amountSats),
    verified.receiptId,
    verified.bolt11?.slice(0, 64)
  );
}
__name(payWithLightning, "payWithLightning");
var TRANSFER_TOPIC = "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
async function baseRpc(url, method, params) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params })
  });
  if (!res.ok)
    throw new Error(`Base RPC HTTP ${res.status}`);
  const data = await res.json();
  if (data.error)
    throw new Error(`Base RPC ${data.error.message || "error"}`);
  return data.result;
}
__name(baseRpc, "baseRpc");
async function baseRpcQuorumReceipt(txHash) {
  const receipts = await Promise.allSettled(
    BASE_RPC_URLS.map((url) => baseRpc(url, "eth_getTransactionReceipt", [txHash]))
  );
  const ok = receipts.filter((r) => r.status === "fulfilled").map((r) => r.value).filter((r) => r !== null);
  const groups = /* @__PURE__ */ new Map();
  for (const receipt of ok) {
    const key = JSON.stringify({
      status: receipt.status,
      logs: (receipt.logs ?? []).map((l) => [l.address.toLowerCase(), l.topics, l.data])
    });
    const g = groups.get(key) || { receipt, count: 0 };
    g.count++;
    groups.set(key, g);
  }
  const best = [...groups.values()].sort((a, b) => b.count - a.count)[0];
  return { receipt: best?.receipt ?? null, agreed: best?.count ?? 0, total: ok.length };
}
__name(baseRpcQuorumReceipt, "baseRpcQuorumReceipt");
function toAddress(topicOrAddress) {
  return "0x" + topicOrAddress.slice(-40).toLowerCase();
}
__name(toAddress, "toAddress");
async function payWithPre(session, txHash, claimedPubkey, env) {
  if (!/^0x[0-9a-fA-F]{64}$/.test(txHash)) {
    return { ok: false, error: "not a valid transaction hash" };
  }
  const settings = await getServiceSettings(session, env);
  const serviceAddress = settings.pre_address.toLowerCase();
  if (!/^0x[0-9a-f]{40}$/.test(serviceAddress)) {
    return { ok: false, error: "service PRE wallet is not configured" };
  }
  let receipt;
  let agreed = 0;
  let total = 0;
  try {
    ({ receipt, agreed, total } = await baseRpcQuorumReceipt(txHash));
  } catch (error) {
    return { ok: false, error: `could not reach Base RPC: ${error.message}` };
  }
  if (!receipt) {
    return {
      ok: false,
      error: total === 0 ? "transaction not found on Base yet \u2014 try again in a few seconds" : "RPC endpoints disagree on this transaction \u2014 try again shortly"
    };
  }
  if (agreed < BASE_RPC_QUORUM) {
    return { ok: false, error: `only ${agreed}/${BASE_RPC_URLS.length} RPC endpoints confirm this transaction (need ${BASE_RPC_QUORUM})` };
  }
  if (receipt.status !== "0x1") {
    return { ok: false, error: "transaction failed on-chain" };
  }
  const pricePre = BigInt(settings.deploy_price_pre || "0");
  const minValue = pricePre * 10n ** BigInt(PRE_TOKEN_DECIMALS);
  const contract = PRE_TOKEN_CONTRACT.toLowerCase();
  const matching = (receipt.logs ?? []).filter((log) => {
    if (log.address.toLowerCase() !== contract)
      return false;
    if (log.topics?.[0]?.toLowerCase() !== TRANSFER_TOPIC)
      return false;
    if (toAddress(log.topics[2] || "") !== serviceAddress)
      return false;
    let value = 0n;
    try {
      value = BigInt(log.data);
    } catch {
      return false;
    }
    return value >= minValue;
  });
  if (matching.length === 0) {
    return { ok: false, error: "no qualifying PRE transfer to the service wallet in this transaction" };
  }
  return recordPayment(
    session,
    claimedPubkey,
    "pre",
    settings.deploy_price_pre,
    txHash.toLowerCase(),
    receipt.from?.toLowerCase()
  );
}
__name(payWithPre, "payWithPre");

// src/service/deploy.ts
var CF_API = "https://api.cloudflare.com/client/v4";
function slugifyWorkerName(name) {
  return name.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 48);
}
__name(slugifyWorkerName, "slugifyWorkerName");
async function cfApi(token, path, options = {}) {
  try {
    const headers = { Authorization: `Bearer ${token}` };
    let body;
    if (options.form) {
      body = options.form;
    } else if (options.body !== void 0) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(options.body);
    }
    const res = await fetch(`${CF_API}${path}`, { method: options.method ?? (body ? "POST" : "GET"), headers, body });
    const data = await res.json().catch(() => null);
    if (!res.ok || !data?.success) {
      const msg = data?.errors?.[0]?.message ?? `HTTP ${res.status}`;
      return { ok: false, error: String(msg) };
    }
    return { ok: true, data: data.result };
  } catch (error) {
    return { ok: false, error: `network: ${error?.message ?? error}` };
  }
}
__name(cfApi, "cfApi");
async function orchestrateDeploy(req) {
  const steps = [];
  const workerName = slugifyWorkerName(req.workerName);
  if (!workerName || workerName.length < 3) {
    return { ok: false, error: "worker name must be 3+ chars of a-z, 0-9, -", steps };
  }
  if (!/^[0-9a-f]{64}$/.test(req.pubkey)) {
    return { ok: false, error: "invalid pubkey", steps };
  }
  if (!/^[0-9a-f]{32}$/i.test(req.cfAccountId)) {
    return { ok: false, error: "invalid Cloudflare account id (32 hex chars)", steps };
  }
  let verify = await cfApi(req.cfToken, "/user/tokens/verify");
  if (!verify.ok) {
    verify = await cfApi(req.cfToken, `/accounts/${req.cfAccountId}/tokens/verify`);
  }
  if (!verify.ok) {
    steps.push({ step: "verify-token", ok: false, detail: verify.error });
    return { ok: false, error: `Cloudflare token check failed: ${verify.error}`, steps };
  }
  steps.push({ step: "verify-token", ok: true });
  const dbName = `${workerName}-db`;
  let databaseId;
  const created = await cfApi(req.cfToken, `/accounts/${req.cfAccountId}/d1/database`, {
    body: { name: dbName }
  });
  if (created.ok && created.data?.uuid) {
    databaseId = created.data.uuid;
    steps.push({ step: "create-d1", ok: true, detail: dbName });
  } else {
    const list = await cfApi(req.cfToken, `/accounts/${req.cfAccountId}/d1/database`);
    const existing = list.data?.find((d) => d?.name === dbName);
    if (existing?.uuid) {
      databaseId = existing.uuid;
      steps.push({ step: "create-d1", ok: true, detail: `${dbName} (existing)` });
    } else {
      steps.push({ step: "create-d1", ok: false, detail: created.error });
      return { ok: false, error: `D1 create failed: ${created.error}`, steps };
    }
  }
  let bundle;
  try {
    const cacheReq = new Request(DEPLOY_BUNDLE_URL);
    let res = await caches.default.match(cacheReq);
    let fromCache = !!res;
    if (!res || !res.ok) {
      const fresh = await fetch(DEPLOY_BUNDLE_URL);
      if (!fresh.ok)
        throw new Error(`HTTP ${fresh.status}`);
      res = fresh;
      fromCache = false;
    }
    bundle = await res.text();
    if (bundle.length < 1e4 || !bundle.includes("RelayWebSocket")) {
      throw new Error("bundle looks wrong");
    }
    if (String(DEPLOY_BUNDLE_SHA256).length > 0) {
      const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(bundle));
      const hex = Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
      if (hex !== DEPLOY_BUNDLE_SHA256.toLowerCase()) {
        throw new Error("bundle SHA-256 mismatch \u2014 refusing to deploy unverified software");
      }
    }
    if (!fromCache) {
      await caches.default.put(cacheReq, new Response(bundle, {
        headers: { "Cache-Control": "public, max-age=3600" }
      }));
    }
    steps.push({ step: "fetch-bundle", ok: true, detail: `${bundle.length} bytes @${DEPLOY_BUNDLE_REF.slice(0, 8)}${DEPLOY_BUNDLE_SHA256 ? ", sha256 verified" : ""}${fromCache ? " (edge cache)" : ""}` });
  } catch (error) {
    steps.push({ step: "fetch-bundle", ok: false, detail: error?.message });
    return { ok: false, error: `could not fetch the relay bundle: ${error?.message ?? error}`, steps };
  }
  const bindings = [
    { name: "RELAY_DATABASE", type: "d1", id: databaseId },
    { name: "RELAY_WEBSOCKET", type: "durable_object_namespace", class_name: "RelayWebSocket" }
  ];
  if (req.relayName && /^[\w\s().#-]{1,40}$/.test(req.relayName)) {
    bindings.push({ name: "RELAY_NAME", type: "plain_text", text: req.relayName.slice(0, 40) });
  }
  if (req.relayNpub && /^npub1[02-9ac-hj-np-z]{20,}$/.test(req.relayNpub)) {
    bindings.push({ name: "RELAY_NPUB", type: "plain_text", text: req.relayNpub });
  }
  if (req.ownerPubkey && /^[0-9a-f]{64}$/.test(req.ownerPubkey)) {
    bindings.push({ name: "SERVICE_OWNER_PUBKEY", type: "plain_text", text: req.ownerPubkey });
    bindings.push({ name: "RELAY_PUBKEY", type: "plain_text", text: req.ownerPubkey });
  }
  if (req.paymentMode && ["free", "donation", "pay-to-relay"].includes(req.paymentMode)) {
    bindings.push({ name: "PAYMENT_MODE", type: "plain_text", text: req.paymentMode });
  }
  if (typeof req.paymentSats === "number" && Number.isInteger(req.paymentSats) && req.paymentSats > 0 && req.paymentSats < 1e8) {
    bindings.push({ name: "RELAY_ACCESS_PRICE_SATS", type: "plain_text", text: String(req.paymentSats) });
  }
  if (typeof req.authRequired === "boolean") {
    bindings.push({ name: "AUTH_REQUIRED", type: "plain_text", text: String(req.authRequired) });
  }
  const metadata = {
    main_module: "worker.js",
    compatibility_date: "2025-06-01",
    bindings,
    migrations: { new_tag: "v4", new_sqlite_classes: ["RelayWebSocket"] }
  };
  const form = new FormData();
  form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
  form.append("worker.js", new Blob([bundle], { type: "application/javascript+module" }), "worker.js");
  const upload = await cfApi(req.cfToken, `/accounts/${req.cfAccountId}/workers/scripts/${workerName}`, {
    method: "PUT",
    form
  });
  if (!upload.ok) {
    if (upload.error?.includes("migration tag precondition")) {
      delete metadata.migrations;
      const retryForm = new FormData();
      retryForm.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
      retryForm.append("worker.js", new Blob([bundle], { type: "application/javascript+module" }), "worker.js");
      const retry = await cfApi(req.cfToken, `/accounts/${req.cfAccountId}/workers/scripts/${workerName}`, {
        method: "PUT",
        form: retryForm
      });
      if (!retry.ok) {
        steps.push({ step: "upload-worker", ok: false, detail: retry.error });
        return { ok: false, error: `worker upload failed: ${retry.error}`, steps };
      }
    } else {
      steps.push({ step: "upload-worker", ok: false, detail: upload.error });
      return { ok: false, error: `worker upload failed: ${upload.error}`, steps };
    }
  }
  steps.push({ step: "upload-worker", ok: true, detail: workerName });
  let accountSubdomain;
  const sub = await cfApi(req.cfToken, `/accounts/${req.cfAccountId}/workers/subdomain`);
  accountSubdomain = sub.data?.subdomain;
  if (!accountSubdomain) {
    const suggested = slugifyWorkerName(`${workerName}-relay`).replace(/-+/g, "-");
    const claim = await cfApi(req.cfToken, `/accounts/${req.cfAccountId}/workers/subdomain`, {
      method: "PUT",
      body: { subdomain: suggested }
    });
    if (claim.ok && claim.data?.subdomain) {
      accountSubdomain = claim.data.subdomain;
      steps.push({ step: "account-subdomain", ok: true, detail: `claimed ${accountSubdomain}.workers.dev` });
    } else {
      steps.push({
        step: "account-subdomain",
        ok: false,
        detail: "no workers.dev subdomain on this account \u2014 set one in the Cloudflare dashboard (Workers \u2192 your subdomain), then enable the route"
      });
    }
  }
  if (accountSubdomain) {
    const enable = await cfApi(req.cfToken, `/accounts/${req.cfAccountId}/workers/scripts/${workerName}/subdomain`, {
      body: { enabled: true }
    });
    steps.push({ step: "enable-subdomain", ok: enable.ok, detail: enable.error });
  }
  const httpsUrl = accountSubdomain ? `https://${workerName}.${accountSubdomain}.workers.dev` : void 0;
  const wssUrl = accountSubdomain ? `wss://${workerName}.${accountSubdomain}.workers.dev` : void 0;
  return {
    ok: true,
    steps,
    relay_https_url: httpsUrl,
    relay_wss_url: wssUrl
  };
}
__name(orchestrateDeploy, "orchestrateDeploy");

// src/service/auth.ts
var KIND_HTTP_AUTH = 27235;
var FRESHNESS_SECONDS = 300;
function hexToBytes3(hex) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++)
    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  return bytes;
}
__name(hexToBytes3, "hexToBytes");
function bytesToHex3(bytes) {
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}
__name(bytesToHex3, "bytesToHex");
function base64UrlDecode(s) {
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/");
  const padded = b64 + "=".repeat((4 - b64.length % 4) % 4);
  const bin = atob(padded);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++)
    bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}
__name(base64UrlDecode, "base64UrlDecode");
async function sha256Hex2(text) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return bytesToHex3(new Uint8Array(digest));
}
__name(sha256Hex2, "sha256Hex");
async function verifySignedEvent(event) {
  try {
    const serialized = JSON.stringify([0, event.pubkey, event.created_at, event.kind, event.tags, event.content]);
    const hash = new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(serialized)));
    if (bytesToHex3(hash) !== event.id)
      return false;
    return schnorr.verify(hexToBytes3(event.sig), hash, hexToBytes3(event.pubkey));
  } catch {
    return false;
  }
}
__name(verifySignedEvent, "verifySignedEvent");
async function verifyAdminAuth(request, rawBody, env) {
  const header = request.headers.get("Authorization") || "";
  const match = /^Nostr\s+(.+)$/.exec(header);
  if (!match)
    return { ok: false, error: "missing Nostr auth event" };
  let event;
  try {
    event = JSON.parse(base64UrlDecode(match[1]));
  } catch {
    return { ok: false, error: "malformed auth event" };
  }
  if (!event || event.kind !== KIND_HTTP_AUTH) {
    return { ok: false, error: `auth event must be kind ${KIND_HTTP_AUTH}` };
  }
  if (event.pubkey !== runtimeOwnerPubkey(env)) {
    return { ok: false, error: "not the service owner" };
  }
  const now = Math.floor(Date.now() / 1e3);
  if (Math.abs(now - event.created_at) > FRESHNESS_SECONDS) {
    return { ok: false, error: "auth event expired" };
  }
  const tag = /* @__PURE__ */ __name((name) => event.tags.find((t) => t[0] === name)?.[1], "tag");
  if (tag("u") !== request.url) {
    return { ok: false, error: "u tag mismatch" };
  }
  if ((tag("method") || "").toUpperCase() !== request.method.toUpperCase()) {
    return { ok: false, error: "method tag mismatch" };
  }
  if (request.method !== "GET" && request.method !== "HEAD") {
    const payloadHash = await sha256Hex2(rawBody || "");
    if (tag("payload") !== payloadHash) {
      return { ok: false, error: "payload hash mismatch" };
    }
  }
  if (!await verifySignedEvent(event)) {
    return { ok: false, error: "invalid signature" };
  }
  return { ok: true };
}
__name(verifyAdminAuth, "verifyAdminAuth");

// src/service/config-check.ts
var ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
function validateServiceConfig(preAddressOverride) {
  const errors = [];
  const lightningEnabled = npubToHex(DEPLOY_ZAP_NPUB) !== null;
  if (!lightningEnabled) {
    errors.push("DEPLOY_ZAP_NPUB is not a valid npub \u2014 Lightning payments disabled");
  }
  const preAddress = (preAddressOverride ?? DEPLOY_PRE_ADDRESS).toLowerCase();
  const rpcOk = BASE_RPC_URLS.length > 0 && BASE_RPC_URLS.every((u) => u.startsWith("https://"));
  const preEnabled = /^0x[0-9a-f]{40}$/.test(preAddress) && preAddress !== ZERO_ADDRESS && rpcOk;
  if (preAddress === ZERO_ADDRESS) {
    errors.push("DEPLOY_PRE_ADDRESS is the zero address \u2014 PRE payments disabled until the owner sets a real Base wallet (/admin)");
  } else if (!/^0x[0-9a-f]{40}$/.test(preAddress)) {
    errors.push("DEPLOY_PRE_ADDRESS is not a valid 0x EVM address \u2014 PRE payments disabled");
  }
  if (!rpcOk) {
    errors.push("BASE_RPC_URLS must all be https:// endpoints");
  }
  try {
    const u = new URL(DEPLOY_BUNDLE_URL);
    if (u.protocol !== "https:" || u.pathname.includes("/main/")) {
      errors.push("DEPLOY_BUNDLE_URL must be https and pinned to an immutable commit (DEPLOY_BUNDLE_REF)");
    }
  } catch {
    errors.push("DEPLOY_BUNDLE_URL is not a valid URL");
  }
  return {
    ok: errors.length === 0 && (lightningEnabled || preEnabled),
    errors,
    lightningEnabled,
    preEnabled
  };
}
__name(validateServiceConfig, "validateServiceConfig");

// src/service/routes.ts
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Cache-Control": "no-store"
    }
  });
}
__name(json, "json");
function dayKey(ip) {
  return `${ip}:${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}`;
}
__name(dayKey, "dayKey");
async function checkIpRate(session, ip) {
  if (!ip)
    return true;
  const key = dayKey(ip);
  const row = await session.prepare(
    `INSERT INTO deploy_rate (ip_day, count) VALUES (?, 1)
       ON CONFLICT(ip_day) DO UPDATE SET count = count + 1
       RETURNING count`
  ).bind(key).first();
  return (row?.count ?? 1) <= DEPLOY_MAX_PER_IP_PER_DAY;
}
__name(checkIpRate, "checkIpRate");
async function authedPubkey(request, rawBody) {
  const header = request.headers.get("Authorization") || "";
  const match = /^Nostr\s+(.+)$/.exec(header);
  if (!match)
    return null;
  let event;
  try {
    const b64 = match[1].replace(/-/g, "+").replace(/_/g, "/");
    const bin = atob(b64 + "=".repeat((4 - b64.length % 4) % 4));
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++)
      bytes[i] = bin.charCodeAt(i);
    event = JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return null;
  }
  if (!event || event.kind !== 27242 && event.kind !== 27235)
    return null;
  const now = Math.floor(Date.now() / 1e3);
  if (Math.abs(now - event.created_at) > 300)
    return null;
  const tag = /* @__PURE__ */ __name((name) => event.tags.find((t) => t[0] === name)?.[1], "tag");
  if (tag("u") !== request.url)
    return null;
  if ((tag("method") || "").toUpperCase() !== request.method.toUpperCase())
    return null;
  if (request.method !== "GET" && request.method !== "HEAD") {
    const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(rawBody || ""));
    const payloadHash = Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
    if (tag("payload") !== payloadHash)
      return null;
  }
  if (!await verifyEventSignature(event))
    return null;
  return event.pubkey;
}
__name(authedPubkey, "authedPubkey");
async function handleServiceApi(request, env, url) {
  if (!runtimeDeployServiceEnabled(env)) {
    return json({ error: "deploy service is disabled on this relay" }, 404);
  }
  const path = url.pathname.replace(/^\/api\/service\/?/, "");
  const session = env.RELAY_DATABASE.withSession("first-primary");
  const rawBody = request.method === "GET" || request.method === "HEAD" ? "" : await request.text();
  const settings = await getServiceSettings(session, env);
  const check = validateServiceConfig(settings.pre_address);
  if (path === "config" && request.method === "GET") {
    return json({
      enabled: true,
      owner_npub: settings.zap_npub,
      owner_pubkey: runtimeOwnerPubkey(env),
      deploy_price_sats: Number(settings.deploy_price_sats),
      deploy_price_pre: Number(settings.deploy_price_pre),
      zap_npub: settings.zap_npub,
      pre: {
        address: settings.pre_address,
        token_contract: PRE_TOKEN_CONTRACT,
        chain_id: BASE_CHAIN_ID,
        network: "Base",
        decimals: PRE_TOKEN_DECIMALS
      },
      methods: { lightning: check.lightningEnabled, pre: check.preEnabled },
      config_errors: check.errors,
      relay_repo: "https://github.com/NostrDanish/SIP-Booster-Relay"
    });
  }
  if (path === "pay/lightning" && request.method === "POST") {
    if (!check.lightningEnabled)
      return json({ error: `Lightning payments not available: ${check.errors.join("; ")}` }, 503);
    const pubkey = await authedPubkey(request, rawBody);
    if (!pubkey)
      return json({ error: "sign in with Nostr first (signed auth required)" }, 401);
    let body;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return json({ error: "invalid JSON" }, 400);
    }
    if (!body?.event)
      return json({ error: "missing zap receipt event" }, 400);
    const result = await payWithLightning(session, body.event, pubkey, verifyEventSignature, env);
    return result.ok ? json({ ok: true }) : json({ error: result.error }, 400);
  }
  if (path === "pay/pre" && request.method === "POST") {
    if (!check.preEnabled)
      return json({ error: `PRE payments not available: ${check.errors.join("; ")}` }, 503);
    const pubkey = await authedPubkey(request, rawBody);
    if (!pubkey)
      return json({ error: "sign in with Nostr first (signed auth required)" }, 401);
    let body;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return json({ error: "invalid JSON" }, 400);
    }
    if (!body?.txHash)
      return json({ error: "missing txHash" }, 400);
    const result = await payWithPre(session, String(body.txHash), pubkey, env);
    return result.ok ? json({ ok: true }) : json({ error: result.error }, 400);
  }
  if (path === "payment-status" && request.method === "GET") {
    const pubkey = url.searchParams.get("pubkey") || "";
    if (!/^[0-9a-f]{64}$/.test(pubkey))
      return json({ error: "invalid pubkey" }, 400);
    return json({ paid: await hasDeployCredit(session, pubkey) });
  }
  if (path === "my-deployments" && request.method === "GET") {
    const pubkey = await authedPubkey(request, rawBody);
    if (!pubkey)
      return json({ error: "sign in with Nostr first (signed auth required)" }, 401);
    const rows = await session.prepare("SELECT id, worker_name, relay_url, status, created_at FROM deploy_jobs WHERE pubkey = ? ORDER BY id DESC LIMIT 100").bind(pubkey).all();
    return json({ deployments: rows.results ?? [] });
  }
  if (path === "deploy" && request.method === "POST") {
    if (!check.ok) {
      return json({ error: `deploy service is misconfigured: ${check.errors.join("; ")}` }, 503);
    }
    const pubkey = await authedPubkey(request, rawBody);
    if (!pubkey)
      return json({ error: "sign in with Nostr first (signed auth required)" }, 401);
    let body;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return json({ error: "invalid JSON" }, 400);
    }
    if (!await hasDeployCredit(session, pubkey)) {
      return json({ error: "payment required \u2014 pay first (Lightning or PRE)", paid: false }, 402);
    }
    const ip = request.headers.get("CF-Connecting-IP") || "";
    if (!await checkIpRate(session, ip)) {
      return json({ error: "too many deployments from this IP today" }, 429);
    }
    const creditId = await consumeDeployCredit(session, pubkey);
    const workerName = String(body.workerName || "");
    let jobId = null;
    if (creditId !== null) {
      const job = await session.prepare("INSERT INTO deploy_jobs (pubkey, worker_name, relay_url, payment_id, status) VALUES (?, ?, '', ?, 'provisioning') RETURNING id").bind(pubkey, workerName, creditId).first().catch((e) => {
        console.error("deploy_jobs insert failed:", e);
        return null;
      });
      jobId = job?.id ?? null;
    }
    let result;
    try {
      result = await orchestrateDeploy({
        pubkey,
        cfToken: String(body.cfToken || ""),
        cfAccountId: String(body.cfAccountId || ""),
        workerName,
        // The customer is the owner of their deployed relay by default.
        relayName: body.relayName ? String(body.relayName) : void 0,
        relayNpub: body.relayNpub ? String(body.relayNpub) : void 0,
        ownerPubkey: body.ownerPubkey ? String(body.ownerPubkey) : pubkey,
        paymentMode: body.paymentMode ? String(body.paymentMode) : void 0,
        paymentSats: typeof body.paymentSats === "number" ? body.paymentSats : void 0,
        authRequired: typeof body.authRequired === "boolean" ? body.authRequired : void 0
      });
    } catch (error) {
      result = { ok: false, error: error?.message ?? "deploy failed", steps: [] };
    }
    if (jobId !== null) {
      await session.prepare("UPDATE deploy_jobs SET status = ?, relay_url = ?, steps = ? WHERE id = ?").bind(result.ok ? "deployed" : "failed", result.relay_wss_url ?? "", JSON.stringify(result.steps ?? []), jobId).run().catch((e) => console.error("deploy_jobs update failed:", e));
    }
    if (!result.ok && creditId !== null) {
      await session.prepare("UPDATE deploy_payments SET used_at = NULL WHERE id = ?").bind(creditId).run().catch(() => void 0);
    }
    return json(result, result.ok ? 200 : 502);
  }
  if (path.startsWith("admin/")) {
    const auth = await verifyAdminAuth(request, rawBody, env);
    if (!auth.ok)
      return json({ error: `unauthorized: ${auth.error}` }, 401);
    if (path === "admin/settings" && request.method === "GET") {
      return json({ settings: await getServiceSettings(session, env), keys: SERVICE_SETTING_KEYS });
    }
    if (path === "admin/settings" && request.method === "POST") {
      let body;
      try {
        body = JSON.parse(rawBody);
      } catch {
        return json({ error: "invalid JSON" }, 400);
      }
      const key = String(body?.key ?? "");
      const value = String(body?.value ?? "").trim();
      if (!SERVICE_SETTING_KEYS.includes(key))
        return json({ error: "unknown setting" }, 400);
      if ((key === "deploy_price_sats" || key === "deploy_price_pre") && !/^\d{1,12}$/.test(value)) {
        return json({ error: "price must be a positive integer" }, 400);
      }
      if (key === "zap_npub" && !/^npub1[02-9ac-hj-np-z]{20,}$/.test(value)) {
        return json({ error: "zap_npub must be a valid npub" }, 400);
      }
      if (key === "pre_address" && !/^0x[0-9a-fA-F]{40}$/.test(value)) {
        return json({ error: "pre_address must be a 0x EVM address" }, 400);
      }
      await setServiceSetting(session, key, value);
      return json({ ok: true, settings: await getServiceSettings(session, env) });
    }
    if (path === "admin/payments" && request.method === "GET") {
      const rows = await session.prepare("SELECT id, pubkey, method, amount, proof, payer_detail, created_at, used_at FROM deploy_payments ORDER BY id DESC LIMIT 200").all();
      return json({ payments: rows.results ?? [] });
    }
    if (path === "admin/jobs" && request.method === "GET") {
      const rows = await session.prepare("SELECT id, pubkey, worker_name, relay_url, payment_id, status, steps, created_at FROM deploy_jobs ORDER BY id DESC LIMIT 200").all();
      return json({ jobs: rows.results ?? [] });
    }
    return json({ error: "unknown admin endpoint" }, 404);
  }
  return json({ error: "unknown service endpoint" }, 404);
}
__name(handleServiceApi, "handleServiceApi");

// src/log.ts
function dbg(...args) {
  if (DEBUG_LOGS)
    console.log(...args);
}
__name(dbg, "dbg");

// src/relay-worker.ts
var {
  relayInfo: relayInfo2,
  RELAY_MODE: RELAY_MODE2,
  SIP01_ENABLED: SIP01_ENABLED2,
  SIP01_VALIDATION: SIP01_VALIDATION2,
  SIP01_INDEXING: SIP01_INDEXING2,
  PAYMENT_MODE: PAYMENT_MODE2,
  PAY_TO_RELAY_ENABLED: PAY_TO_RELAY_ENABLED2,
  RELAY_ACCESS_PRICE_SATS: RELAY_ACCESS_PRICE_SATS2,
  relayNpub: relayNpub2,
  nip05Users: nip05Users2,
  enableAntiSpam: enableAntiSpam2,
  enableGlobalDuplicateCheck: enableGlobalDuplicateCheck2,
  antiSpamKinds: antiSpamKinds2,
  checkValidNip05: checkValidNip052,
  blockedNip05Domains: blockedNip05Domains2,
  allowedNip05Domains: allowedNip05Domains2,
  isIndexerAllowed: isIndexerAllowed2,
  SIP01_MAX_EVENT_BYTES: SIP01_MAX_EVENT_BYTES2,
  NIP50_ENABLED: NIP50_ENABLED2,
  NIP45_ENABLED: NIP45_ENABLED2,
  NIP77_ENABLED: NIP77_ENABLED2,
  NEG_MAX_ITEMS: NEG_MAX_ITEMS2,
  DB_PRUNING_ENABLED: DB_PRUNING_ENABLED2,
  DB_SIZE_THRESHOLD_GB: DB_SIZE_THRESHOLD_GB2,
  DB_PRUNE_BATCH_SIZE: DB_PRUNE_BATCH_SIZE2,
  DB_PRUNE_TARGET_GB: DB_PRUNE_TARGET_GB2,
  pruneProtectedKinds: pruneProtectedKinds2,
  SIP01_PRUNE_ALLOWED: SIP01_PRUNE_ALLOWED2
} = config_exports;
var GLOBAL_MAX_EVENTS = 500;
var MAX_QUERY_COMPLEXITY = 1e3;
var CHUNK_SIZE = 500;
var dbInitPromise = null;
function ensureDatabase(db) {
  if (!dbInitPromise) {
    dbInitPromise = initializeDatabase(db).catch((error) => {
      console.error("DB init error:", error);
      dbInitPromise = null;
    });
  }
  return dbInitPromise;
}
__name(ensureDatabase, "ensureDatabase");
async function initializeDatabase(db) {
  const dropSession = db.withSession("first-primary");
  try {
    await dropSession.prepare(`
      CREATE TABLE IF NOT EXISTS system_config (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        created_at INTEGER DEFAULT (strftime('%s', 'now'))
      )
    `).run();
  } catch (_) {
  }
  const cleanupDone = await dropSession.prepare(
    "SELECT value FROM system_config WHERE key = 'cleanup_v1' LIMIT 1"
  ).first().catch(() => null);
  if (!cleanupDone || cleanupDone.value !== "1") {
    const dropIndexes = [
      "idx_events_pubkey",
      "idx_events_kind",
      "idx_events_created_at_kind",
      "idx_events_authors_kinds",
      "idx_events_tag_p_created_at",
      "idx_events_tag_e_created_at",
      "idx_events_tag_a_created_at",
      "idx_events_tag_t_created_at",
      "idx_events_tag_d_created_at",
      "idx_events_tag_r_created_at",
      "idx_events_tag_L_created_at",
      "idx_events_tag_s_created_at",
      "idx_events_tag_u_created_at",
      "idx_events_kind_tag_p",
      "idx_events_kind_tag_e",
      "idx_events_kind_tag_a",
      "idx_events_kind_tag_t",
      "idx_events_kind_tag_L",
      "idx_events_kind_tag_s",
      "idx_events_reply_to",
      "idx_events_root_thread",
      "idx_events_kind_created_at_covering",
      "idx_events_pubkey_kind_created_at_covering",
      "idx_events_created_at_covering",
      "idx_events_kind_pubkey_created_at_covering",
      "idx_tags_name_value",
      "idx_tags_value",
      "idx_tags_name_value_event_created"
    ];
    for (const idx of dropIndexes) {
      await dropSession.prepare(`DROP INDEX IF EXISTS ${idx}`).run();
    }
    const dropTables = ["event_tags_cache", "mv_follow_graph", "mv_recent_notes", "mv_timeline_cache"];
    for (const tbl of dropTables) {
      await dropSession.prepare(`DROP TABLE IF EXISTS ${tbl}`).run();
    }
    await dropSession.prepare(
      "INSERT OR REPLACE INTO system_config (key, value) VALUES ('cleanup_v1', '1')"
    ).run();
  }
  const session = db.withSession("first-primary");
  try {
    const statements = [
      `CREATE TABLE IF NOT EXISTS events (
        id TEXT PRIMARY KEY,
        pubkey TEXT NOT NULL,
        created_at INTEGER NOT NULL,
        kind INTEGER NOT NULL,
        tags TEXT NOT NULL,
        content TEXT NOT NULL,
        sig TEXT NOT NULL,
        created_timestamp INTEGER DEFAULT (strftime('%s', 'now')),
        tag_p TEXT,
        tag_e TEXT,
        tag_a TEXT,
        tag_t TEXT,
        tag_d TEXT,
        tag_r TEXT,
        tag_L TEXT,
        tag_s TEXT,
        tag_u TEXT,
        tag_x TEXT,
        reply_to_event_id TEXT,
        root_event_id TEXT,
        content_preview TEXT
      )`,
      `CREATE INDEX IF NOT EXISTS idx_events_created_at ON events(created_at DESC)`,
      `CREATE INDEX IF NOT EXISTS idx_events_kind_created_at ON events(kind, created_at DESC)`,
      `CREATE INDEX IF NOT EXISTS idx_events_pubkey_created_at ON events(pubkey, created_at DESC)`,
      `CREATE INDEX IF NOT EXISTS idx_events_pubkey_kind_created_at ON events(pubkey, kind, created_at DESC)`,
      `CREATE INDEX IF NOT EXISTS idx_events_kind_pubkey_created_at ON events(kind, pubkey, created_at DESC)`,
      `CREATE TABLE IF NOT EXISTS tags (
        event_id TEXT NOT NULL,
        tag_name TEXT NOT NULL,
        tag_value TEXT NOT NULL,
        FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
      )`,
      `CREATE INDEX IF NOT EXISTS idx_tags_name_value_event ON tags(tag_name, tag_value, event_id)`,
      `CREATE INDEX IF NOT EXISTS idx_tags_event_id ON tags(event_id)`,
      `CREATE TABLE IF NOT EXISTS event_tags_cache_multi (
        event_id TEXT NOT NULL,
        pubkey TEXT NOT NULL,
        kind INTEGER NOT NULL,
        created_at INTEGER NOT NULL,
        tag_type TEXT NOT NULL,
        tag_value TEXT NOT NULL,
        PRIMARY KEY (event_id, tag_type, tag_value)
      )`,
      `CREATE INDEX IF NOT EXISTS idx_cache_multi_type_value_time ON event_tags_cache_multi(tag_type, tag_value, created_at DESC)`,
      `CREATE INDEX IF NOT EXISTS idx_cache_multi_type_value_event ON event_tags_cache_multi(tag_type, tag_value, event_id)`,
      `CREATE INDEX IF NOT EXISTS idx_cache_multi_kind_type_value ON event_tags_cache_multi(kind, tag_type, tag_value, created_at DESC)`,
      `CREATE INDEX IF NOT EXISTS idx_cache_multi_event_id ON event_tags_cache_multi(event_id)`,
      `CREATE TABLE IF NOT EXISTS paid_pubkeys (
        pubkey TEXT PRIMARY KEY,
        paid_at INTEGER NOT NULL,
        amount_sats INTEGER,
        created_timestamp INTEGER DEFAULT (strftime('%s', 'now'))
      )`,
      `CREATE TABLE IF NOT EXISTS content_hashes (
        hash TEXT PRIMARY KEY,
        event_id TEXT NOT NULL,
        pubkey TEXT NOT NULL,
        created_at INTEGER NOT NULL,
        FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
      )`,
      `CREATE INDEX IF NOT EXISTS idx_content_hashes_pubkey ON content_hashes(pubkey)`,
      `CREATE INDEX IF NOT EXISTS idx_content_hashes_created_at ON content_hashes(created_at DESC)`,
      `CREATE INDEX IF NOT EXISTS idx_content_hashes_pubkey_created ON content_hashes(pubkey, created_at DESC)`,
      // SIP-01 tables (documents / observations / indexers / metrics)
      ...SIP01_SCHEMA_STATEMENTS,
      // Hosted deploy service tables (service_settings / deploy_payments /
      // deploy_jobs / deploy_rate)
      ...SERVICE_SCHEMA_STATEMENTS
    ];
    for (const statement of statements) {
      await session.prepare(statement).run();
    }
    await session.prepare("PRAGMA foreign_keys = ON").run();
    const versionResult = await session.prepare(
      "SELECT value FROM system_config WHERE key = 'schema_version'"
    ).first();
    const currentVersion = versionResult ? parseInt(versionResult.value) : 0;
    if (currentVersion < SCHEMA_VERSION) {
      dbg(`Migrating schema ${currentVersion} \u2192 ${SCHEMA_VERSION}...`);
      const migrationStatements = [
        ...currentVersion < 7 ? migrationV7Statements() : [],
        ...currentVersion < 8 ? migrationV8Statements() : [],
        ...currentVersion < 9 ? migrationV9Statements() : [],
        ...currentVersion < 10 ? migrationV10Statements() : [],
        ...currentVersion < 11 ? migrationV11Statements() : [],
        ...currentVersion < 12 ? migrationV12Statements() : []
      ];
      for (const statement of migrationStatements) {
        try {
          await session.prepare(statement).run();
        } catch (error) {
          if (!error?.message?.includes("duplicate column"))
            throw error;
        }
      }
      const sentinel = await session.prepare(
        "SELECT COUNT(*) AS n FROM sqlite_master WHERE name IN ('events', 'sip01_documents', 'sip01_observations', 'sip01_indexers', 'sip01_fts')"
      ).first();
      if ((sentinel?.n ?? 0) < 5) {
        throw new Error("schema migration incomplete \u2014 sentinel objects missing (will retry on next request)");
      }
      await session.prepare(
        "INSERT OR REPLACE INTO system_config (key, value) VALUES ('schema_version', ?)"
      ).bind(String(SCHEMA_VERSION)).run();
      dbg("Schema migration completed");
    }
    await session.prepare(
      "INSERT OR REPLACE INTO system_config (key, value) VALUES ('db_initialized', '1')"
    ).run();
    await session.prepare(`
      INSERT OR IGNORE INTO event_tags_cache_multi (event_id, pubkey, kind, created_at, tag_type, tag_value)
      SELECT
        e.id,
        e.pubkey,
        e.kind,
        e.created_at,
        t.tag_name,
        t.tag_value
      FROM events e
      INNER JOIN tags t ON e.id = t.event_id
      WHERE t.tag_name IN (${CACHED_TAG_NAMES.map((t) => `'${t}'`).join(", ")})
    `).run();
    dbg("Database initialization completed!");
  } catch (error) {
    console.error("Failed to initialize database:", error);
    throw error;
  }
}
__name(initializeDatabase, "initializeDatabase");
async function verifyEventSignature(event) {
  try {
    const signatureBytes = hexToBytes4(event.sig);
    const serializedEventData = serializeEventForSigning(event);
    const messageHashBuffer = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(serializedEventData)
    );
    const messageHash = new Uint8Array(messageHashBuffer);
    const publicKeyBytes = hexToBytes4(event.pubkey);
    return schnorr.verify(signatureBytes, messageHash, publicKeyBytes);
  } catch (error) {
    console.error("Error verifying event signature:", error);
    return false;
  }
}
__name(verifyEventSignature, "verifyEventSignature");
async function verifyEventId(event) {
  try {
    const serializedEventData = serializeEventForSigning(event);
    const messageHashBuffer = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(serializedEventData)
    );
    return bytesToHex4(new Uint8Array(messageHashBuffer)) === event.id;
  } catch {
    return false;
  }
}
__name(verifyEventId, "verifyEventId");
function serializeEventForSigning(event) {
  return JSON.stringify([
    0,
    event.pubkey,
    event.created_at,
    event.kind,
    event.tags,
    event.content
  ]);
}
__name(serializeEventForSigning, "serializeEventForSigning");
function hexToBytes4(hexString) {
  if (hexString.length % 2 !== 0)
    throw new Error("Invalid hex string");
  const bytes = new Uint8Array(hexString.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hexString.substr(i * 2, 2), 16);
  }
  return bytes;
}
__name(hexToBytes4, "hexToBytes");
function bytesToHex4(bytes) {
  return Array.from(bytes).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
__name(bytesToHex4, "bytesToHex");
async function hashContent(event) {
  const contentToHash = enableGlobalDuplicateCheck2 ? JSON.stringify({ kind: event.kind, tags: event.tags, content: event.content }) : JSON.stringify({ pubkey: event.pubkey, kind: event.kind, tags: event.tags, content: event.content });
  const buffer = new TextEncoder().encode(contentToHash);
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  return bytesToHex4(new Uint8Array(hashBuffer));
}
__name(hashContent, "hashContent");
function shouldCheckForDuplicates(kind) {
  return enableAntiSpam2 && antiSpamKinds2.has(kind);
}
__name(shouldCheckForDuplicates, "shouldCheckForDuplicates");
async function validateNIP05FromKind0(pubkey, env) {
  try {
    const filters = [{ kinds: [0], authors: [pubkey], limit: 1 }];
    const result = await queryEvents(filters, "first-unconstrained", env);
    const metadataEvent = result.events?.[0] ?? null;
    if (!metadataEvent) {
      console.error(`No kind 0 metadata event found for pubkey: ${pubkey}`);
      return false;
    }
    const metadata = JSON.parse(metadataEvent.content);
    const nip05Address = metadata.nip05;
    if (!nip05Address) {
      console.error(`No NIP-05 address found in kind 0 for pubkey: ${pubkey}`);
      return false;
    }
    return await validateNIP05(nip05Address, pubkey);
  } catch (error) {
    console.error(`Error validating NIP-05 for pubkey ${pubkey}: ${error}`);
    return false;
  }
}
__name(validateNIP05FromKind0, "validateNIP05FromKind0");
async function validateNIP05(nip05Address, pubkey) {
  try {
    const [name, domain] = nip05Address.split("@");
    if (!domain) {
      throw new Error(`Invalid NIP-05 address format: ${nip05Address}`);
    }
    if (blockedNip05Domains2.has(domain)) {
      console.error(`NIP-05 domain is blocked: ${domain}`);
      return false;
    }
    if (allowedNip05Domains2.size > 0 && !allowedNip05Domains2.has(domain)) {
      console.error(`NIP-05 domain is not allowed: ${domain}`);
      return false;
    }
    const url = `https://${domain}/.well-known/nostr.json?name=${encodeURIComponent(name)}`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch NIP-05 data from ${url}: ${response.statusText}`);
      return false;
    }
    const nip05Data = await response.json();
    if (!nip05Data.names || !nip05Data.names[name]) {
      console.error(`NIP-05 data does not contain a matching public key for ${name}`);
      return false;
    }
    const nip05Pubkey = nip05Data.names[name];
    return nip05Pubkey === pubkey;
  } catch (error) {
    console.error(`Error validating NIP-05 address: ${error}`);
    return false;
  }
}
__name(validateNIP05, "validateNIP05");
function calculateQueryComplexity(filter) {
  let complexity = 0;
  complexity += (filter.ids?.length || 0) * 1;
  complexity += (filter.authors?.length || 0) * 2;
  complexity += (filter.kinds?.length || 0) * 5;
  for (const [key, values] of Object.entries(filter)) {
    if (key.startsWith("#") && Array.isArray(values)) {
      complexity += values.length * 10;
    }
  }
  if (!filter.since && !filter.until) {
    complexity *= 2;
  }
  if ((filter.limit || 0) > 1e3) {
    complexity *= 1.5;
  }
  return complexity;
}
__name(calculateQueryComplexity, "calculateQueryComplexity");
async function processEvent(event, sessionId, env) {
  await ensureDatabase(env.RELAY_DATABASE);
  const session = env.RELAY_DATABASE.withSession("first-primary");
  try {
    if (!await verifyEventId(event)) {
      await bumpMetric(session, "events_invalid");
      return { success: false, message: "invalid: event id does not match content" };
    }
    const upperLimit = relayInfo2.limitation?.created_at_upper_limit;
    if (typeof upperLimit === "number" && upperLimit > 0) {
      const now = Math.floor(Date.now() / 1e3);
      if (event.created_at > now + upperLimit) {
        await bumpMetric(session, "events_invalid");
        return { success: false, message: "invalid: created_at is too far in the future" };
      }
    }
    if (event.kind !== 1059 && checkValidNip052 && event.kind !== 0) {
      const isValidNIP05 = await validateNIP05FromKind0(event.pubkey, env);
      if (!isValidNIP05) {
        console.error(`Event denied. NIP-05 validation failed for pubkey ${event.pubkey}.`);
        await bumpMetric(session, "events_invalid");
        return { success: false, message: "invalid: NIP-05 validation failed" };
      }
    }
    if (event.kind === 5) {
      return await processDeletionEvent(event, env);
    }
    if (event.kind >= 2e4 && event.kind < 3e4) {
      return { success: true, message: "Ephemeral event broadcast" };
    }
    if (event.kind === SIP01_KIND && SIP01_ENABLED2) {
      if (!isIndexerAllowed2(event.pubkey)) {
        await bumpMetric(session, "sip01_indexer_blocked");
        return { success: false, message: "blocked: indexer pubkey not allowed on this relay" };
      }
      const eventBytes = JSON.stringify(event).length;
      if (eventBytes > SIP01_MAX_EVENT_BYTES2) {
        await bumpMetric(session, "sip01_validation_failures");
        return { success: false, message: `invalid: event exceeds ${SIP01_MAX_EVENT_BYTES2} bytes` };
      }
      if (SIP01_VALIDATION2) {
        const validation = await validateSip01Event(event);
        if (!validation.valid) {
          await bumpMetric(session, "sip01_validation_failures");
          dbg(`sip01: rejected observation ${event.id}: ${validation.errors.join("; ")}`);
          return { success: false, message: `invalid: ${validation.errors[0]}` };
        }
      }
    }
    return await saveEventToDatabase(event, env);
  } catch (error) {
    console.error(`Error processing event: ${error.message}`);
    return { success: false, message: `error: ${error.message}` };
  }
}
__name(processEvent, "processEvent");
async function saveEventToDatabase(event, env) {
  try {
    const cache = caches.default;
    const cacheKey = new Request(`https://event-cache/${event.id}`);
    const cached = await cache.match(cacheKey);
    if (cached) {
      return { success: false, message: "duplicate: event already exists" };
    }
    const session = env.RELAY_DATABASE.withSession("first-primary");
    const existingEvent = await session.prepare("SELECT id FROM events WHERE id = ? LIMIT 1").bind(event.id).first();
    if (existingEvent) {
      if (event.kind === SIP01_KIND)
        await bumpMetric(session, "sip01_duplicates");
      return { success: false, message: "duplicate: event already exists", bookmark: session.getBookmark() ?? void 0 };
    }
    const isReplaceable = event.kind === 0 || event.kind === 3 || event.kind >= 1e4 && event.kind < 2e4;
    if (isReplaceable) {
      const existing = await session.prepare(
        "SELECT id, created_at FROM events WHERE kind = ? AND pubkey = ? LIMIT 1"
      ).bind(event.kind, event.pubkey).first();
      if (existing) {
        if (event.created_at <= existing.created_at) {
          return { success: false, message: "duplicate: a newer or equal replaceable event already exists", bookmark: session.getBookmark() ?? void 0 };
        }
        const oldId = existing.id;
        await session.batch([
          session.prepare("DELETE FROM tags WHERE event_id = ?").bind(oldId),
          session.prepare("DELETE FROM content_hashes WHERE event_id = ?").bind(oldId),
          session.prepare("DELETE FROM event_tags_cache_multi WHERE event_id = ?").bind(oldId),
          session.prepare("DELETE FROM events WHERE id = ?").bind(oldId)
        ]);
        dbg(`Replaced older event ${oldId} with newer event ${event.id} (kind ${event.kind})`);
      }
    }
    const isParameterizedReplaceable = event.kind >= 3e4 && event.kind < 4e4;
    if (isParameterizedReplaceable) {
      const dTag = event.tags.find((t) => t[0] === "d")?.[1] || "";
      const existing = await session.prepare(
        "SELECT id, created_at FROM events WHERE kind = ? AND pubkey = ? AND tag_d = ? LIMIT 1"
      ).bind(event.kind, event.pubkey, dTag).first();
      if (existing) {
        if (event.created_at <= existing.created_at) {
          return { success: false, message: "duplicate: a newer or equal parameterized replaceable event already exists", bookmark: session.getBookmark() ?? void 0 };
        }
        const oldId = existing.id;
        await session.batch([
          session.prepare("DELETE FROM tags WHERE event_id = ?").bind(oldId),
          session.prepare("DELETE FROM content_hashes WHERE event_id = ?").bind(oldId),
          session.prepare("DELETE FROM event_tags_cache_multi WHERE event_id = ?").bind(oldId),
          session.prepare("DELETE FROM events WHERE id = ?").bind(oldId)
        ]);
        if (event.kind === SIP01_KIND && SIP01_INDEXING2) {
          await removeSip01Observations(session, [oldId]);
        }
        dbg(`Replaced older parameterized event ${oldId} with newer event ${event.id} (kind ${event.kind}, d=${dTag})`);
      }
    }
    let contentHash2 = null;
    if (shouldCheckForDuplicates(event.kind)) {
      contentHash2 = await hashContent(event);
      const duplicateContent = enableGlobalDuplicateCheck2 ? await session.prepare("SELECT event_id FROM content_hashes WHERE hash = ? LIMIT 1").bind(contentHash2).first() : await session.prepare("SELECT event_id FROM content_hashes WHERE hash = ? AND pubkey = ? LIMIT 1").bind(contentHash2, event.pubkey).first();
      if (duplicateContent) {
        return { success: false, message: "duplicate: content already exists", bookmark: session.getBookmark() ?? void 0 };
      }
    }
    const tagInserts = [];
    const firstValues = {};
    for (const name of CACHED_TAG_NAMES)
      firstValues[name] = null;
    for (const tag of event.tags) {
      if (tag[0]) {
        tagInserts.push({ name: tag[0], value: tag[1] || "" });
        if (tag[0] in firstValues && firstValues[tag[0]] === null) {
          firstValues[tag[0]] = tag[1] ?? "";
        }
      }
    }
    const eTags = tagInserts.filter((t) => t.name === "e").map((t) => t.value);
    const replyToEventId = eTags.length > 0 ? eTags[0] : null;
    const rootEventId = eTags.length > 1 ? eTags[eTags.length - 1] : null;
    const contentPreview = event.content.substring(0, 100);
    const insertResult = await session.prepare(`
      INSERT INTO events (id, pubkey, created_at, kind, tags, content, sig, tag_p, tag_e, tag_a, tag_t, tag_d, tag_r, tag_L, tag_s, tag_u, tag_x, reply_to_event_id, root_event_id, content_preview)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO NOTHING
    `).bind(
      event.id,
      event.pubkey,
      event.created_at,
      event.kind,
      JSON.stringify(event.tags),
      event.content,
      event.sig,
      firstValues["p"],
      firstValues["e"],
      firstValues["a"],
      firstValues["t"],
      firstValues["d"],
      firstValues["r"],
      firstValues["L"],
      firstValues["s"],
      firstValues["u"],
      firstValues["x"],
      replyToEventId,
      rootEventId,
      contentPreview
    ).run();
    if (insertResult.meta.changes === 0) {
      dbg(`Event ${event.id} already exists in database (race condition duplicate)`);
      return { success: false, message: "duplicate: event already exists", bookmark: session.getBookmark() ?? void 0 };
    }
    const postInsertBatch = [];
    for (const t of tagInserts) {
      postInsertBatch.push(
        session.prepare("INSERT INTO tags (event_id, tag_name, tag_value) VALUES (?, ?, ?)").bind(event.id, t.name, t.value)
      );
    }
    const cachedSet = new Set(CACHED_TAG_NAMES);
    const cacheableTags = tagInserts.filter((t) => cachedSet.has(t.name));
    for (const t of cacheableTags) {
      postInsertBatch.push(
        session.prepare(`
          INSERT OR IGNORE INTO event_tags_cache_multi (event_id, pubkey, kind, created_at, tag_type, tag_value)
          VALUES (?, ?, ?, ?, ?, ?)
        `).bind(event.id, event.pubkey, event.kind, event.created_at, t.name, t.value)
      );
    }
    if (contentHash2) {
      postInsertBatch.push(
        session.prepare(`
          INSERT INTO content_hashes (hash, event_id, pubkey, created_at)
          VALUES (?, ?, ?, ?)
          ON CONFLICT(hash) DO NOTHING
        `).bind(contentHash2, event.id, event.pubkey, event.created_at)
      );
    }
    for (let i = 0; i < postInsertBatch.length; i += 90) {
      await session.batch(postInsertBatch.slice(i, i + 90));
    }
    if (event.kind === SIP01_KIND && SIP01_INDEXING2) {
      try {
        await ingestSip01Observation(session, event);
        await bumpMetric(session, "sip01_accepted");
      } catch (error) {
        console.error(`sip01: indexing failed for ${event.id}:`, error);
        await bumpMetric(session, "sip01_index_errors");
      }
    }
    await bumpMetric(session, "events_accepted");
    await cache.put(cacheKey, new Response("cached", {
      headers: { "Cache-Control": "max-age=3600" }
    }));
    dbg(`Event ${event.id} saved directly to database`);
    return { success: true, message: "Event saved successfully", bookmark: session.getBookmark() ?? void 0 };
  } catch (error) {
    console.error(`Error saving event to database: ${error.message}`);
    console.error(`Event details: ID=${event.id}, Kind=${event.kind}, Tags count=${event.tags.length}`);
    return { success: false, message: `error: ${error.message}` };
  }
}
__name(saveEventToDatabase, "saveEventToDatabase");
async function processDeletionEvent(event, env) {
  dbg(`Processing deletion event ${event.id}`);
  const deletedEventIds = event.tags.filter((tag) => tag[0] === "e").map((tag) => tag[1]);
  const session = env.RELAY_DATABASE.withSession("first-primary");
  const addressTags = event.tags.filter((tag) => tag[0] === "a").map((tag) => tag[1]);
  if (deletedEventIds.length === 0 && addressTags.length === 0) {
    return { success: true, message: "No events to delete", bookmark: session.getBookmark() ?? void 0 };
  }
  let deletedCount = 0;
  const errors = [];
  const idsToDelete = [];
  if (deletedEventIds.length > 0) {
    try {
      const ownerPlaceholders = deletedEventIds.map(() => "?").join(",");
      const ownerResult = await session.prepare(
        `SELECT id, pubkey FROM events WHERE id IN (${ownerPlaceholders})`
      ).bind(...deletedEventIds).all();
      const eventOwners = /* @__PURE__ */ new Map();
      for (const row of ownerResult.results) {
        eventOwners.set(row.id, row.pubkey);
      }
      for (const eventId of deletedEventIds) {
        const ownerPubkey = eventOwners.get(eventId);
        if (!ownerPubkey) {
          console.warn(`Event ${eventId} not found in D1. Nothing to delete.`);
          continue;
        }
        if (ownerPubkey !== event.pubkey) {
          console.warn(`Event ${eventId} does not belong to pubkey ${event.pubkey}. Skipping deletion.`);
          errors.push(`unauthorized: cannot delete event ${eventId} - wrong pubkey`);
          continue;
        }
        idsToDelete.push(eventId);
      }
    } catch (error) {
      console.error("Error checking event ownership:", error);
      errors.push("error checking event ownership");
    }
  }
  if (addressTags.length > 0) {
    for (const addr of addressTags) {
      const [kindStr, author, d] = addr.split(":");
      const kind = Number.parseInt(kindStr, 10);
      if (!Number.isFinite(kind) || !author || author !== event.pubkey)
        continue;
      try {
        const existing = await session.prepare(
          "SELECT id, created_at FROM events WHERE kind = ? AND pubkey = ? AND tag_d = ? LIMIT 1"
        ).bind(kind, author, d ?? "").first();
        if (existing && existing.created_at <= event.created_at) {
          idsToDelete.push(existing.id);
        }
      } catch (error) {
        console.error(`Error resolving address ${addr}:`, error);
      }
    }
  }
  if (idsToDelete.length > 0) {
    try {
      if (SIP01_INDEXING2) {
        await removeSip01Observations(session, idsToDelete);
      }
      const deleteStatements = [];
      for (const eventId of idsToDelete) {
        deleteStatements.push(
          session.prepare("DELETE FROM tags WHERE event_id = ?").bind(eventId),
          session.prepare("DELETE FROM content_hashes WHERE event_id = ?").bind(eventId),
          session.prepare("DELETE FROM event_tags_cache_multi WHERE event_id = ?").bind(eventId),
          session.prepare("DELETE FROM events WHERE id = ?").bind(eventId)
        );
      }
      for (let i = 0; i < deleteStatements.length; i += 90) {
        await session.batch(deleteStatements.slice(i, i + 90));
      }
      deletedCount = idsToDelete.length;
      dbg(`Batch deleted ${deletedCount} events from D1.`);
    } catch (error) {
      console.error("Error batch deleting events:", error);
      errors.push("error batch deleting events");
    }
  }
  const saveResult = await saveEventToDatabase(event, env);
  if (errors.length > 0) {
    return { success: false, message: errors[0], bookmark: saveResult.bookmark ?? (session.getBookmark() ?? void 0) };
  }
  return {
    success: true,
    message: deletedCount > 0 ? `Successfully deleted ${deletedCount} event(s)` : "No matching events found to delete",
    bookmark: saveResult.bookmark ?? (session.getBookmark() ?? void 0)
  };
}
__name(processDeletionEvent, "processDeletionEvent");
function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}
__name(chunkArray, "chunkArray");
var EVENT_COLS = "e.id, e.pubkey, e.created_at, e.kind, e.tags, e.content, e.sig";
var EVENT_COLS_BARE = "id, pubkey, created_at, kind, tags, content, sig";
var CACHED_TAG_SET = new Set(CACHED_TAG_NAMES);
function buildIdSelect(filter) {
  const params = [];
  const conditions = [];
  const directTags = [];
  const otherTags = [];
  for (const [key, values] of Object.entries(filter)) {
    if (key.startsWith("#") && Array.isArray(values) && values.length > 0) {
      const tagName = key.substring(1);
      if (CACHED_TAG_SET.has(tagName)) {
        directTags.push({ name: tagName, values });
      } else {
        otherTags.push({ name: tagName, values });
      }
    }
  }
  if (directTags.length > 0 && otherTags.length === 0) {
    if (directTags.length === 1) {
      const tagFilter = directTags[0];
      const hasKinds = filter.kinds && filter.kinds.length > 0;
      const indexHint = hasKinds && filter.kinds.length <= 10 ? " INDEXED BY idx_cache_multi_kind_type_value" : " INDEXED BY idx_cache_multi_type_value_time";
      let sql2 = `SELECT DISTINCT m.event_id AS id FROM event_tags_cache_multi m${indexHint}
        WHERE m.tag_type = ? AND m.tag_value IN (${tagFilter.values.map(() => "?").join(",")})`;
      params.push(tagFilter.name, ...tagFilter.values);
      if (filter.authors && filter.authors.length > 0) {
        sql2 += ` AND m.pubkey IN (${filter.authors.map(() => "?").join(",")})`;
        params.push(...filter.authors);
      }
      if (hasKinds) {
        sql2 += ` AND m.kind IN (${filter.kinds.map(() => "?").join(",")})`;
        params.push(...filter.kinds);
      }
      if (filter.since) {
        sql2 += " AND m.created_at >= ?";
        params.push(filter.since);
      }
      if (filter.until) {
        sql2 += " AND m.created_at <= ?";
        params.push(filter.until);
      }
      return { sql: sql2, params };
    } else {
      const hasKindsMulti = filter.kinds && filter.kinds.length > 0;
      const firstTag = directTags[0];
      const firstHint = hasKindsMulti && filter.kinds.length <= 10 ? " INDEXED BY idx_cache_multi_kind_type_value" : " INDEXED BY idx_cache_multi_type_value_time";
      const additionalJoins = directTags.slice(1).map((t, i) => {
        const alias = `m${i + 1}`;
        const placeholders = t.values.map(() => "?").join(",");
        return `INNER JOIN event_tags_cache_multi ${alias} ON m0.event_id = ${alias}.event_id AND ${alias}.tag_type = ? AND ${alias}.tag_value IN (${placeholders})`;
      }).join("\n        ");
      let sql2 = `SELECT DISTINCT m0.event_id AS id FROM event_tags_cache_multi m0${firstHint}
        ${additionalJoins}
        WHERE m0.tag_type = ? AND m0.tag_value IN (${firstTag.values.map(() => "?").join(",")})`;
      params.push(firstTag.name, ...firstTag.values);
      for (const tagFilter of directTags.slice(1)) {
        params.push(tagFilter.name, ...tagFilter.values);
      }
      if (filter.authors && filter.authors.length > 0) {
        sql2 += ` AND m0.pubkey IN (${filter.authors.map(() => "?").join(",")})`;
        params.push(...filter.authors);
      }
      if (hasKindsMulti) {
        sql2 += ` AND m0.kind IN (${filter.kinds.map(() => "?").join(",")})`;
        params.push(...filter.kinds);
      }
      if (filter.since) {
        sql2 += " AND m0.created_at >= ?";
        params.push(filter.since);
      }
      if (filter.until) {
        sql2 += " AND m0.created_at <= ?";
        params.push(filter.until);
      }
      return { sql: sql2, params };
    }
  }
  if (directTags.length > 0 || otherTags.length > 0) {
    const allTags = [...directTags, ...otherTags];
    if (allTags.length === 1) {
      const tagFilter = allTags[0];
      let sql2 = `SELECT DISTINCT e.id FROM events e
        INNER JOIN tags t ON e.id = t.event_id
        WHERE t.tag_name = ? AND t.tag_value IN (${tagFilter.values.map(() => "?").join(",")})`;
      params.push(tagFilter.name, ...tagFilter.values);
      if (filter.authors && filter.authors.length > 0) {
        sql2 += ` AND e.pubkey IN (${filter.authors.map(() => "?").join(",")})`;
        params.push(...filter.authors);
      }
      if (filter.kinds && filter.kinds.length > 0) {
        sql2 += ` AND e.kind IN (${filter.kinds.map(() => "?").join(",")})`;
        params.push(...filter.kinds);
      }
      if (filter.since) {
        sql2 += " AND e.created_at >= ?";
        params.push(filter.since);
      }
      if (filter.until) {
        sql2 += " AND e.created_at <= ?";
        params.push(filter.until);
      }
      return { sql: sql2, params };
    } else {
      const tagConditions = allTags.map((t) => {
        const placeholders = t.values.map(() => "?").join(",");
        return `(t.tag_name = ? AND t.tag_value IN (${placeholders}))`;
      }).join(" OR ");
      for (const tagFilter of allTags) {
        params.push(tagFilter.name, ...tagFilter.values);
      }
      let sql2 = `SELECT e.id FROM events e
        INNER JOIN tags t ON e.id = t.event_id
        WHERE ${tagConditions}`;
      if (filter.authors && filter.authors.length > 0) {
        sql2 += ` AND e.pubkey IN (${filter.authors.map(() => "?").join(",")})`;
        params.push(...filter.authors);
      }
      if (filter.kinds && filter.kinds.length > 0) {
        sql2 += ` AND e.kind IN (${filter.kinds.map(() => "?").join(",")})`;
        params.push(...filter.kinds);
      }
      if (filter.since) {
        sql2 += " AND e.created_at >= ?";
        params.push(filter.since);
      }
      if (filter.until) {
        sql2 += " AND e.created_at <= ?";
        params.push(filter.until);
      }
      sql2 += ` GROUP BY e.id HAVING COUNT(DISTINCT t.tag_name) = ?`;
      params.push(allTags.length);
      return { sql: sql2, params };
    }
  }
  let sql = "SELECT id FROM events";
  if (filter.ids && filter.ids.length > 0) {
    conditions.push(`id IN (${filter.ids.map(() => "?").join(",")})`);
    params.push(...filter.ids);
  }
  if (filter.authors && filter.authors.length > 0) {
    conditions.push(`pubkey IN (${filter.authors.map(() => "?").join(",")})`);
    params.push(...filter.authors);
  }
  if (filter.kinds && filter.kinds.length > 0) {
    conditions.push(`kind IN (${filter.kinds.map(() => "?").join(",")})`);
    params.push(...filter.kinds);
  }
  if (filter.since) {
    conditions.push("created_at >= ?");
    params.push(filter.since);
  }
  if (filter.until) {
    conditions.push("created_at <= ?");
    params.push(filter.until);
  }
  if (conditions.length > 0) {
    sql += " WHERE " + conditions.join(" AND ");
  }
  return { sql, params };
}
__name(buildIdSelect, "buildIdSelect");
function buildCountQuery(filter) {
  const { sql, params } = buildIdSelect(filter);
  return { sql: `SELECT COUNT(*) as count FROM (${sql})`, params };
}
__name(buildCountQuery, "buildCountQuery");
function buildQuery(filter) {
  const params = [];
  const conditions = [];
  let tagCount = 0;
  const directTags = [];
  const otherTags = [];
  for (const [key, values] of Object.entries(filter)) {
    if (key.startsWith("#") && Array.isArray(values) && values.length > 0) {
      tagCount += values.length;
      const tagName = key.substring(1);
      if (CACHED_TAG_SET.has(tagName)) {
        directTags.push({ name: tagName, values });
      } else {
        otherTags.push({ name: tagName, values });
      }
    }
  }
  if (directTags.length > 0 && otherTags.length === 0) {
    let sql2;
    const whereConditions = [];
    const cacheAlias = directTags.length === 1 ? "m" : "m0";
    if (directTags.length === 1) {
      const tagFilter = directTags[0];
      const hasKinds2 = filter.kinds && filter.kinds.length > 0;
      let indexHint2 = "";
      if (hasKinds2 && filter.kinds.length <= 10) {
        indexHint2 = " INDEXED BY idx_cache_multi_kind_type_value";
      } else {
        indexHint2 = " INDEXED BY idx_cache_multi_type_value_time";
      }
      sql2 = `SELECT DISTINCT ${EVENT_COLS} FROM events e
        INNER JOIN event_tags_cache_multi m${indexHint2} ON e.id = m.event_id
        WHERE m.tag_type = ? AND m.tag_value IN (${tagFilter.values.map(() => "?").join(",")})`;
      params.push(tagFilter.name, ...tagFilter.values);
    } else {
      const hasKindsMulti = filter.kinds && filter.kinds.length > 0;
      const tagConditions = directTags.map((t, i) => {
        const alias = `m${i}`;
        const placeholders = t.values.map(() => "?").join(",");
        const hint = i === 0 ? hasKindsMulti && filter.kinds.length <= 10 ? " INDEXED BY idx_cache_multi_kind_type_value" : " INDEXED BY idx_cache_multi_type_value_time" : "";
        return `INNER JOIN event_tags_cache_multi ${alias}${hint} ON e.id = ${alias}.event_id AND ${alias}.tag_type = ? AND ${alias}.tag_value IN (${placeholders})`;
      }).join("\n        ");
      sql2 = `SELECT DISTINCT ${EVENT_COLS} FROM events e
        ${tagConditions}
        WHERE 1=1`;
      for (const tagFilter of directTags) {
        params.push(tagFilter.name, ...tagFilter.values);
      }
    }
    if (filter.ids && filter.ids.length > 0) {
      whereConditions.push(`e.id IN (${filter.ids.map(() => "?").join(",")})`);
      params.push(...filter.ids);
    }
    if (filter.authors && filter.authors.length > 0) {
      whereConditions.push(`e.pubkey IN (${filter.authors.map(() => "?").join(",")})`);
      params.push(...filter.authors);
    }
    if (filter.kinds && filter.kinds.length > 0) {
      whereConditions.push(`${cacheAlias}.kind IN (${filter.kinds.map(() => "?").join(",")})`);
      params.push(...filter.kinds);
    }
    if (filter.since) {
      whereConditions.push(`${cacheAlias}.created_at >= ?`);
      params.push(filter.since);
    }
    if (filter.until) {
      whereConditions.push(`${cacheAlias}.created_at <= ?`);
      params.push(filter.until);
    }
    if (filter.cursor) {
      const [timestamp, lastId] = filter.cursor.split(":");
      whereConditions.push(`(${cacheAlias}.created_at < ? OR (${cacheAlias}.created_at = ? AND e.id > ?))`);
      params.push(parseInt(timestamp), parseInt(timestamp), lastId);
    }
    if (whereConditions.length > 0) {
      sql2 += " AND " + whereConditions.join(" AND ");
    }
    sql2 += ` ORDER BY ${cacheAlias}.created_at DESC LIMIT ?`;
    params.push(Math.min(filter.limit || 500, 500));
    return { sql: sql2, params };
  }
  if (tagCount > 0) {
    const allTags = [...directTags, ...otherTags];
    if (allTags.length === 1) {
      const tagFilter = allTags[0];
      let sql3 = `SELECT ${EVENT_COLS} FROM events e
        INNER JOIN tags t ON e.id = t.event_id
        WHERE t.tag_name = ? AND t.tag_value IN (${tagFilter.values.map(() => "?").join(",")})`;
      params.push(tagFilter.name, ...tagFilter.values);
      const whereConditions2 = [];
      if (filter.ids && filter.ids.length > 0) {
        whereConditions2.push(`e.id IN (${filter.ids.map(() => "?").join(",")})`);
        params.push(...filter.ids);
      }
      if (filter.authors && filter.authors.length > 0) {
        whereConditions2.push(`e.pubkey IN (${filter.authors.map(() => "?").join(",")})`);
        params.push(...filter.authors);
      }
      if (filter.kinds && filter.kinds.length > 0) {
        whereConditions2.push(`e.kind IN (${filter.kinds.map(() => "?").join(",")})`);
        params.push(...filter.kinds);
      }
      if (filter.since) {
        whereConditions2.push("e.created_at >= ?");
        params.push(filter.since);
      }
      if (filter.until) {
        whereConditions2.push("e.created_at <= ?");
        params.push(filter.until);
      }
      if (filter.cursor) {
        const [timestamp, lastId] = filter.cursor.split(":");
        whereConditions2.push("(e.created_at < ? OR (e.created_at = ? AND e.id > ?))");
        params.push(parseInt(timestamp), parseInt(timestamp), lastId);
      }
      if (whereConditions2.length > 0) {
        sql3 += " AND " + whereConditions2.join(" AND ");
      }
      sql3 += " ORDER BY e.created_at DESC";
      sql3 += " LIMIT ?";
      params.push(Math.min(filter.limit || 500, 500));
      return { sql: sql3, params };
    }
    const tagConditions = allTags.map((t) => {
      const placeholders = t.values.map(() => "?").join(",");
      return `(t.tag_name = ? AND t.tag_value IN (${placeholders}))`;
    }).join(" OR ");
    for (const tagFilter of allTags) {
      params.push(tagFilter.name, ...tagFilter.values);
    }
    let sql2 = `SELECT ${EVENT_COLS} FROM events e
      INNER JOIN tags t ON e.id = t.event_id
      WHERE ${tagConditions}`;
    const whereConditions = [];
    if (filter.ids && filter.ids.length > 0) {
      whereConditions.push(`e.id IN (${filter.ids.map(() => "?").join(",")})`);
      params.push(...filter.ids);
    }
    if (filter.authors && filter.authors.length > 0) {
      whereConditions.push(`e.pubkey IN (${filter.authors.map(() => "?").join(",")})`);
      params.push(...filter.authors);
    }
    if (filter.kinds && filter.kinds.length > 0) {
      whereConditions.push(`e.kind IN (${filter.kinds.map(() => "?").join(",")})`);
      params.push(...filter.kinds);
    }
    if (filter.since) {
      whereConditions.push("e.created_at >= ?");
      params.push(filter.since);
    }
    if (filter.until) {
      whereConditions.push("e.created_at <= ?");
      params.push(filter.until);
    }
    if (filter.cursor) {
      const [timestamp, lastId] = filter.cursor.split(":");
      whereConditions.push("(e.created_at < ? OR (e.created_at = ? AND e.id > ?))");
      params.push(parseInt(timestamp), parseInt(timestamp), lastId);
    }
    if (whereConditions.length > 0) {
      sql2 += " AND " + whereConditions.join(" AND ");
    }
    sql2 += " GROUP BY e.id, e.pubkey, e.created_at, e.kind, e.tags, e.content, e.sig";
    sql2 += ` HAVING COUNT(DISTINCT t.tag_name) = ?`;
    params.push(allTags.length);
    sql2 += " ORDER BY e.created_at DESC";
    sql2 += " LIMIT ?";
    params.push(Math.min(filter.limit || 500, 500));
    return { sql: sql2, params };
  }
  let indexHint = "";
  const hasAuthors = filter.authors && filter.authors.length > 0;
  const hasKinds = filter.kinds && filter.kinds.length > 0;
  const hasTimeRange = filter.since || filter.until;
  const authorCount = filter.authors?.length || 0;
  const kindCount = filter.kinds?.length || 0;
  if (hasAuthors && hasKinds && authorCount <= 10 && kindCount <= 10) {
    if (authorCount <= kindCount) {
      indexHint = " INDEXED BY idx_events_pubkey_kind_created_at";
    } else {
      indexHint = " INDEXED BY idx_events_kind_pubkey_created_at";
    }
  } else if (hasAuthors && authorCount <= 5 && !hasKinds) {
    indexHint = " INDEXED BY idx_events_pubkey_created_at";
  } else if (hasKinds && kindCount <= 5 && !hasAuthors) {
    indexHint = " INDEXED BY idx_events_kind_created_at";
  } else if (hasAuthors && hasKinds && authorCount > 10) {
    indexHint = " INDEXED BY idx_events_kind_created_at";
  } else if (!hasAuthors && !hasKinds && hasTimeRange) {
    indexHint = " INDEXED BY idx_events_created_at";
  }
  let sql = `SELECT ${EVENT_COLS_BARE} FROM events${indexHint}`;
  if (filter.ids && filter.ids.length > 0) {
    conditions.push(`id IN (${filter.ids.map(() => "?").join(",")})`);
    params.push(...filter.ids);
  }
  if (filter.authors && filter.authors.length > 0) {
    conditions.push(`pubkey IN (${filter.authors.map(() => "?").join(",")})`);
    params.push(...filter.authors);
  }
  if (filter.kinds && filter.kinds.length > 0) {
    conditions.push(`kind IN (${filter.kinds.map(() => "?").join(",")})`);
    params.push(...filter.kinds);
  }
  if (filter.since) {
    conditions.push("created_at >= ?");
    params.push(filter.since);
  }
  if (filter.until) {
    conditions.push("created_at <= ?");
    params.push(filter.until);
  }
  if (filter.cursor) {
    const [timestamp, lastId] = filter.cursor.split(":");
    conditions.push("(created_at < ? OR (created_at = ? AND id > ?))");
    params.push(parseInt(timestamp), parseInt(timestamp), lastId);
  }
  if (conditions.length > 0) {
    sql += " WHERE " + conditions.join(" AND ");
  }
  sql += " ORDER BY created_at DESC";
  sql += " LIMIT ?";
  params.push(Math.min(filter.limit || 500, 500));
  return { sql, params };
}
__name(buildQuery, "buildQuery");
async function queryDatabaseChunked(filter, bookmark, env) {
  const session = env.RELAY_DATABASE.withSession(bookmark);
  const allRows = /* @__PURE__ */ new Map();
  const baseFilter = { ...filter };
  const needsChunking = {
    ids: false,
    authors: false,
    kinds: false,
    tags: {}
  };
  if (filter.ids && filter.ids.length > CHUNK_SIZE) {
    needsChunking.ids = true;
    delete baseFilter.ids;
  }
  if (filter.authors && filter.authors.length > CHUNK_SIZE) {
    needsChunking.authors = true;
    delete baseFilter.authors;
  }
  if (filter.kinds && filter.kinds.length > CHUNK_SIZE) {
    needsChunking.kinds = true;
    delete baseFilter.kinds;
  }
  for (const [key, values] of Object.entries(filter)) {
    if (key.startsWith("#") && Array.isArray(values) && values.length > CHUNK_SIZE) {
      needsChunking.tags[key] = true;
      delete baseFilter[key];
    }
  }
  const processStringChunks = /* @__PURE__ */ __name(async (filterType, values) => {
    const chunks = chunkArray(values, CHUNK_SIZE);
    for (const chunk of chunks) {
      const chunkFilter = { ...baseFilter };
      if (filterType === "ids") {
        chunkFilter.ids = chunk;
      } else if (filterType === "authors") {
        chunkFilter.authors = chunk;
      } else if (filterType.startsWith("#")) {
        chunkFilter[filterType] = chunk;
      }
      const query = buildQuery(chunkFilter);
      try {
        const result = await session.prepare(query.sql).bind(...query.params).all();
        for (const row of result.results) {
          allRows.set(row.id, row);
        }
      } catch (error) {
        console.error(`Error in chunk query: ${error}`);
      }
    }
  }, "processStringChunks");
  const processNumberChunks = /* @__PURE__ */ __name(async (filterType, values) => {
    const chunks = chunkArray(values, CHUNK_SIZE);
    for (const chunk of chunks) {
      const chunkFilter = { ...baseFilter };
      chunkFilter.kinds = chunk;
      const query = buildQuery(chunkFilter);
      try {
        const result = await session.prepare(query.sql).bind(...query.params).all();
        for (const row of result.results) {
          allRows.set(row.id, row);
        }
      } catch (error) {
        console.error(`Error in chunk query: ${error}`);
      }
    }
  }, "processNumberChunks");
  if (needsChunking.ids && filter.ids) {
    await processStringChunks("ids", filter.ids);
  }
  if (needsChunking.authors && filter.authors) {
    await processStringChunks("authors", filter.authors);
  }
  if (needsChunking.kinds && filter.kinds) {
    await processNumberChunks("kinds", filter.kinds);
  }
  for (const [tagKey, _] of Object.entries(needsChunking.tags)) {
    const tagValues2 = filter[tagKey];
    if (Array.isArray(tagValues2) && tagValues2.every((v) => typeof v === "string")) {
      await processStringChunks(tagKey, tagValues2);
    }
  }
  if (!needsChunking.ids && !needsChunking.authors && !needsChunking.kinds && Object.keys(needsChunking.tags).length === 0) {
    const query = buildQuery(filter);
    try {
      const result = await session.prepare(query.sql).bind(...query.params).all();
      for (const row of result.results) {
        allRows.set(row.id, row);
      }
    } catch (error) {
      console.error(`Error in query: ${error}`);
    }
  }
  const events = Array.from(allRows.values()).map((row) => ({
    id: row.id,
    pubkey: row.pubkey,
    created_at: row.created_at,
    kind: row.kind,
    tags: JSON.parse(row.tags),
    content: row.content,
    sig: row.sig
  }));
  dbg(`Found ${events.length} events (chunked)`);
  return { events };
}
__name(queryDatabaseChunked, "queryDatabaseChunked");
async function queryEvents(filters, bookmark, env) {
  await ensureDatabase(env.RELAY_DATABASE);
  try {
    dbg(`Processing query with ${filters.length} filters and bookmark: ${bookmark}`);
    const session = env.RELAY_DATABASE.withSession(bookmark);
    const eventSet = /* @__PURE__ */ new Map();
    const chunkedFilters = [];
    const batchableFilters = [];
    for (const filter of filters) {
      const complexity = calculateQueryComplexity(filter);
      if (complexity > MAX_QUERY_COMPLEXITY) {
        console.warn(`Query too complex (complexity: ${complexity}), skipping filter`);
        continue;
      }
      const needsChunking = filter.ids && filter.ids.length > CHUNK_SIZE || filter.authors && filter.authors.length > CHUNK_SIZE || filter.kinds && filter.kinds.length > CHUNK_SIZE || Object.entries(filter).some(
        ([key, values]) => key.startsWith("#") && Array.isArray(values) && values.length > CHUNK_SIZE
      );
      if (needsChunking) {
        chunkedFilters.push(filter);
      } else {
        batchableFilters.push(filter);
      }
    }
    let totalEventsRead = 0;
    for (const filter of chunkedFilters) {
      if (totalEventsRead >= GLOBAL_MAX_EVENTS) {
        console.warn(`Global event limit reached (${GLOBAL_MAX_EVENTS}), stopping query`);
        break;
      }
      dbg(`Filter has arrays >${CHUNK_SIZE} items, using chunked query...`);
      const chunkedResult = await queryDatabaseChunked(filter, bookmark, env);
      for (const event of chunkedResult.events) {
        if (totalEventsRead >= GLOBAL_MAX_EVENTS)
          break;
        eventSet.set(event.id, event);
        totalEventsRead++;
      }
    }
    if (batchableFilters.length > 0 && totalEventsRead < GLOBAL_MAX_EVENTS) {
      const validFilters = [];
      for (const filter of batchableFilters) {
        const hasTagFilters = Object.keys(filter).some((key) => key.startsWith("#"));
        if (hasTagFilters) {
          const countQuery = buildCountQuery(filter);
          const countResult = await session.prepare(countQuery.sql).bind(...countQuery.params).first();
          const estimatedRows = countResult?.count || 0;
          if (estimatedRows > 1e4) {
            console.warn(`Query precheck: estimated ${estimatedRows} rows, skipping filter to prevent timeout`);
            continue;
          } else {
            dbg(`Query precheck: estimated ${estimatedRows} rows, proceeding`);
          }
        }
        validFilters.push(filter);
      }
      if (validFilters.length === 0) {
        console.warn("All filters were too expensive after COUNT precheck");
      } else {
        const queries = validFilters.map((filter) => {
          const query = buildQuery(filter);
          return session.prepare(query.sql).bind(...query.params);
        });
        try {
          const results = await session.batch(queries);
          const allRows = [];
          for (let i = 0; i < results.length; i++) {
            const result = results[i];
            if (i === 0 && result.meta) {
              dbg({
                servedByRegion: result.meta.served_by_region ?? "",
                servedByPrimary: result.meta.served_by_primary ?? false,
                batchSize: results.length
              });
            }
            if (result.success && result.results) {
              for (const row of result.results) {
                if (totalEventsRead >= GLOBAL_MAX_EVENTS)
                  break;
                allRows.push(row);
                totalEventsRead++;
              }
            } else if (!result.success) {
              console.error(`Batch query ${i} failed:`, result.error);
            }
          }
          for (const row of allRows) {
            const event = {
              id: row.id,
              pubkey: row.pubkey,
              created_at: row.created_at,
              kind: row.kind,
              tags: JSON.parse(row.tags),
              content: row.content,
              sig: row.sig
            };
            eventSet.set(event.id, event);
          }
        } catch (error) {
          console.error(`Batch query execution error: ${error.message}`);
          throw error;
        }
      }
    }
    const events = Array.from(eventSet.values()).sort((a, b) => {
      if (b.created_at !== a.created_at) {
        return b.created_at - a.created_at;
      }
      return a.id.localeCompare(b.id);
    });
    const newBookmark = session.getBookmark();
    dbg(`Found ${events.length} events. New bookmark: ${newBookmark}`);
    return { events, bookmark: newBookmark };
  } catch (error) {
    console.error(`Error querying events: ${error.message}`);
    return { events: [], bookmark: null };
  }
}
__name(queryEvents, "queryEvents");
async function countEvents(filters, bookmark, env) {
  await ensureDatabase(env.RELAY_DATABASE);
  const session = env.RELAY_DATABASE.withSession(bookmark);
  const selects = [];
  const params = [];
  for (const filter of filters) {
    const complexity = calculateQueryComplexity(filter);
    if (complexity > MAX_QUERY_COMPLEXITY) {
      console.warn(`COUNT filter too complex (${complexity}), skipping`);
      continue;
    }
    const { sql: sql2, params: p } = buildIdSelect(filter);
    selects.push(sql2);
    params.push(...p);
  }
  if (selects.length === 0)
    return 0;
  const sql = selects.length === 1 ? `SELECT COUNT(*) as count FROM (${selects[0]})` : `SELECT COUNT(*) as count FROM (${selects.join(" UNION ")})`;
  try {
    const result = await session.prepare(sql).bind(...params).first();
    return result?.count || 0;
  } catch (error) {
    console.error("COUNT query failed:", error);
    return 0;
  }
}
__name(countEvents, "countEvents");
async function querySyncItems(filter, env) {
  await ensureDatabase(env.RELAY_DATABASE);
  const session = env.RELAY_DATABASE.withSession("first-unconstrained");
  const conditions = [];
  const params = [];
  if (filter.ids && filter.ids.length > 0) {
    conditions.push(`id IN (${filter.ids.map(() => "?").join(",")})`);
    params.push(...filter.ids);
  }
  if (filter.authors && filter.authors.length > 0) {
    conditions.push(`pubkey IN (${filter.authors.map(() => "?").join(",")})`);
    params.push(...filter.authors);
  }
  if (filter.kinds && filter.kinds.length > 0) {
    conditions.push(`kind IN (${filter.kinds.map(() => "?").join(",")})`);
    params.push(...filter.kinds);
  }
  if (filter.since) {
    conditions.push("created_at >= ?");
    params.push(filter.since);
  }
  if (filter.until) {
    conditions.push("created_at <= ?");
    params.push(filter.until);
  }
  for (const [key, values] of Object.entries(filter)) {
    if (key.startsWith("#") && Array.isArray(values) && values.length > 0) {
      const tagName = key.substring(1);
      if (tagName.length !== 1)
        continue;
      conditions.push(
        `EXISTS (SELECT 1 FROM event_tags_cache_multi m WHERE m.event_id = events.id AND m.tag_type = ? AND m.tag_value IN (${values.map(() => "?").join(",")}))`
      );
      params.push(tagName, ...values);
    }
  }
  const windowLimit = typeof filter.limit === "number" && filter.limit > 0 ? Math.min(filter.limit, NEG_MAX_ITEMS2) : void 0;
  const sql = `
    SELECT id, created_at FROM events
    ${conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : ""}
    ORDER BY created_at ${windowLimit ? "DESC" : "ASC"}, id ${windowLimit ? "DESC" : "ASC"}
    LIMIT ?
  `;
  params.push((windowLimit ?? NEG_MAX_ITEMS2) + 1);
  const result = await session.prepare(sql).bind(...params).all();
  let rows = result.results ?? [];
  const truncated = windowLimit ? false : rows.length > NEG_MAX_ITEMS2;
  rows = rows.slice(0, windowLimit ?? NEG_MAX_ITEMS2);
  if (windowLimit) {
    rows = rows.sort((a, b) => a.created_at - b.created_at || a.id.localeCompare(b.id));
  }
  return { items: rows, truncated };
}
__name(querySyncItems, "querySyncItems");
function handleRelayInfoRequest(request, env) {
  const responseInfo = {
    ...relayInfo2,
    name: runtimeRelayName(env),
    pubkey: runtimeRelayPubkey(env),
    contact: runtimeRelayContact(env)
  };
  const nips = /* @__PURE__ */ new Set([1, 5, 9, 11, 16, 33, 42]);
  if (NIP45_ENABLED2)
    nips.add(45);
  if (NIP50_ENABLED2)
    nips.add(50);
  if (NIP77_ENABLED2)
    nips.add(77);
  responseInfo.supported_nips = [...nips].sort((a, b) => a - b);
  if (SIP01_ENABLED2) {
    responseInfo.uncaged_index = {
      sip01: true,
      nip50: NIP50_ENABLED2,
      nip77: NIP77_ENABLED2,
      document_kinds: [SIP01_KIND],
      scope: SIP01_SCOPE,
      domains: SIP01_SCOPE_DOMAINS,
      languages: SIP01_SCOPE_LANGUAGES,
      document_types: SIP01_SCOPE_DOCUMENT_TYPES,
      filters: [...SUPPORTED_NIP50_OPERATORS],
      relay_mode: RELAY_MODE2,
      validation: SIP01_VALIDATION,
      schema_version: "1"
    };
  }
  const paymentMode = runtimePaymentMode(env);
  if (paymentMode !== "free") {
    const url = new URL(request.url);
    responseInfo.payments_url = `${url.protocol}//${url.host}`;
  }
  if (paymentMode === "pay-to-relay") {
    responseInfo.fees = {
      admission: [{ amount: runtimePaymentPriceSats(env) * 1e3, unit: "msats" }]
    };
  }
  return new Response(JSON.stringify(responseInfo), {
    status: 200,
    headers: {
      "Content-Type": "application/nostr+json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Accept",
      "Access-Control-Allow-Methods": "GET"
    }
  });
}
__name(handleRelayInfoRequest, "handleRelayInfoRequest");
function handleNIP05Request(url) {
  const name = url.searchParams.get("name");
  if (!name) {
    return new Response(JSON.stringify({ error: "Missing 'name' parameter" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const pubkey = nip05Users2[name.toLowerCase()];
  if (!pubkey) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  }
  const response = {
    names: { [name]: pubkey },
    relays: { [pubkey]: [] }
  };
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
__name(handleNIP05Request, "handleNIP05Request");
async function handleCheckPayment(request, env) {
  const url = new URL(request.url);
  const pubkey = url.searchParams.get("pubkey");
  if (!pubkey || !/^[0-9a-f]{64}$/.test(pubkey)) {
    return new Response(JSON.stringify({ error: "Missing or invalid pubkey (hex)" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const paid = await hasPaidForRelay(pubkey, env);
  if (paid === null) {
    return new Response(JSON.stringify({ error: "Unable to verify payment status" }), {
      status: 503,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
  return new Response(JSON.stringify({ paid }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
__name(handleCheckPayment, "handleCheckPayment");
async function handlePaymentNotification(request, env) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  try {
    const body = await request.json();
    const receipt = body?.event;
    if (!receipt) {
      return new Response(JSON.stringify({ error: "Missing zap receipt event" }), {
        status: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }
    const verified = await verifyZapReceipt(receipt, runtimeRelayNpub(env), RELAY_ACCESS_PRICE_SATS2, verifyEventSignature);
    if (!verified) {
      return new Response(JSON.stringify({ error: "Invalid zap receipt" }), {
        status: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }
    await saveEventToDatabase(receipt, env).catch(() => void 0);
    const success = await savePaidPubkey(verified.payer, env, verified.amountSats, verified.receiptId);
    return new Response(JSON.stringify({
      success,
      pubkey: verified.payer,
      message: success ? "Payment recorded successfully" : "Failed to save payment"
    }), {
      status: success ? 200 : 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    console.error("Error processing payment notification:", error);
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
}
__name(handlePaymentNotification, "handlePaymentNotification");
function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-store"
    }
  });
}
__name(jsonResponse, "jsonResponse");
async function handleApiRequest(url, request, env) {
  const path = url.pathname;
  if (path === "/api/relay-info") {
    return jsonResponse({
      name: relayInfo2.name,
      description: relayInfo2.description,
      version: relayInfo2.version,
      software: relayInfo2.software,
      icon: relayInfo2.icon,
      relay_mode: RELAY_MODE2,
      sip01_enabled: SIP01_ENABLED2,
      sip01_validation: SIP01_VALIDATION2,
      nip50: NIP50_ENABLED2,
      nip45: NIP45_ENABLED2,
      nip77: NIP77_ENABLED2,
      auth_required: runtimeAuthRequired(env),
      payment_mode: runtimePaymentMode(env),
      payment_sats: runtimePaymentPriceSats(env),
      payment_npub: runtimeRelayNpub(env),
      supported_operators: [...SUPPORTED_NIP50_OPERATORS]
    });
  }
  if (path === "/metrics" || path === "/api/metrics") {
    const session2 = env.RELAY_DATABASE.withSession("first-unconstrained");
    const metrics = await getMetrics(session2);
    let counts = null;
    try {
      counts = await session2.prepare(
        `SELECT
             (SELECT COUNT(*) FROM events) AS events,
             (SELECT COUNT(*) FROM sip01_documents) AS documents,
             (SELECT COUNT(*) FROM sip01_observations) AS observations,
             (SELECT COUNT(*) FROM sip01_indexers) AS indexers`
      ).first();
    } catch {
    }
    const sizeBytes = await getDatabaseSizeBytes(session2);
    const lines = [
      "# HELP siprelay_info Relay build info",
      "# TYPE siprelay_info gauge",
      `siprelay_info{version="${relayInfo2.version}",mode="${RELAY_MODE2}"} 1`
    ];
    const gauges = [
      ["siprelay_events_total", counts?.events ?? 0, "events stored"],
      ["siprelay_documents", counts?.documents ?? 0, "SIP-01 documents"],
      ["siprelay_observations", counts?.observations ?? 0, "SIP-01 observations"],
      ["siprelay_indexers", counts?.indexers ?? 0, "SIP-01 indexers"],
      ["siprelay_database_size_bytes", sizeBytes, "D1 database size"]
    ];
    for (const [name, value, help] of gauges) {
      lines.push(`# HELP ${name} ${help}`, `# TYPE ${name} gauge`, `${name} ${value}`);
    }
    for (const [key, value] of Object.entries(metrics)) {
      const name = `siprelay_${key.replace(/[^a-z0-9_]/g, "_")}_total`;
      lines.push(`# TYPE ${name} counter`, `${name} ${value}`);
    }
    return new Response(lines.join("\n") + "\n", {
      status: 200,
      headers: { "Content-Type": "text/plain; version=0.0.4", "Access-Control-Allow-Origin": "*" }
    });
  }
  if (path === "/api/health") {
    const session2 = env.RELAY_DATABASE.withSession("first-unconstrained");
    let events = 0;
    let schemaOk = false;
    try {
      const row = await session2.prepare("SELECT COUNT(*) AS n FROM events").first();
      events = row?.n ?? 0;
      const tables = await session2.prepare(
        "SELECT COUNT(*) AS n FROM sqlite_master WHERE type = 'table' AND name IN ('events', 'sip01_documents', 'sip01_observations', 'sip01_indexers')"
      ).first();
      schemaOk = (tables?.n ?? 0) === 4;
    } catch {
    }
    return jsonResponse({
      status: schemaOk ? "ok" : "initializing-or-degraded",
      events,
      schema_ok: schemaOk,
      mode: RELAY_MODE2,
      version: relayInfo2.version,
      time: Math.floor(Date.now() / 1e3)
    });
  }
  if (!SIP01_INDEXING2) {
    return jsonResponse({ error: "SIP-01 indexing is disabled on this relay" }, 404);
  }
  const session = env.RELAY_DATABASE.withSession("first-unconstrained");
  if (path === "/api/stats") {
    return jsonResponse(await getSip01Stats(session));
  }
  if (path === "/api/indexers") {
    return jsonResponse(await listIndexers(session, url));
  }
  if (path === "/api/indexer") {
    const pubkey = url.searchParams.get("pubkey");
    if (!pubkey || !/^[0-9a-f]{64}$/.test(pubkey)) {
      return jsonResponse({ error: "Missing or invalid pubkey (hex)" }, 400);
    }
    const result = await getIndexer(session, pubkey);
    return result ? jsonResponse(result) : jsonResponse({ error: "Indexer not found" }, 404);
  }
  if (path === "/api/documents") {
    return jsonResponse(await listDocuments(session, url));
  }
  if (path === "/api/document") {
    const d = url.searchParams.get("d");
    if (!d || !/^widx:[0-9a-f]{32}$/.test(d)) {
      return jsonResponse({ error: "Missing or invalid d (expected 'widx:' + 32 hex chars)" }, 400);
    }
    const result = await getDocument(session, d);
    return result ? jsonResponse(result) : jsonResponse({ error: "Document not found" }, 404);
  }
  if (path === "/api/observations") {
    return jsonResponse(await listObservations(session, url));
  }
  if (path === "/api/search") {
    if (!NIP50_ENABLED2)
      return jsonResponse({ error: "search disabled" }, 404);
    const q = (url.searchParams.get("q") || "").slice(0, 500);
    if (!q.trim())
      return jsonResponse({ error: "Missing q parameter" }, 400);
    const limit = Math.min(parseInt(url.searchParams.get("limit") || "25", 10) || 25, 100);
    await bumpMetric(env.RELAY_DATABASE.withSession("first-primary"), "search_queries_http");
    const events = await executeSearch(session, { kinds: [SIP01_KIND], search: q, limit });
    return jsonResponse({ events, query: q, count: events.length });
  }
  return jsonResponse({ error: "Unknown API endpoint" }, 404);
}
__name(handleApiRequest, "handleApiRequest");
async function getOptimalDO(cf, env) {
  const country = cf?.country || "US";
  const region = cf?.region || "unknown";
  const ALL_ENDPOINTS = [
    { name: "relay-WNAM-primary", hint: "wnam" },
    { name: "relay-ENAM-primary", hint: "enam" },
    { name: "relay-WEUR-primary", hint: "weur" },
    { name: "relay-EEUR-primary", hint: "eeur" },
    { name: "relay-APAC-primary", hint: "apac" },
    { name: "relay-OC-primary", hint: "oc" },
    { name: "relay-SAM-primary", hint: "sam" },
    { name: "relay-AFR-primary", hint: "afr" },
    { name: "relay-ME-primary", hint: "me" }
  ];
  const countryToHint = {
    "US": "enam",
    "CA": "enam",
    "MX": "wnam",
    "GT": "wnam",
    "BZ": "wnam",
    "SV": "wnam",
    "HN": "wnam",
    "NI": "wnam",
    "CR": "wnam",
    "PA": "wnam",
    "CU": "wnam",
    "DO": "wnam",
    "HT": "wnam",
    "JM": "wnam",
    "PR": "wnam",
    "TT": "wnam",
    "BB": "wnam",
    "BR": "sam",
    "AR": "sam",
    "CL": "sam",
    "CO": "sam",
    "PE": "sam",
    "VE": "sam",
    "EC": "sam",
    "BO": "sam",
    "PY": "sam",
    "UY": "sam",
    "GY": "sam",
    "SR": "sam",
    "GF": "sam",
    "GB": "weur",
    "FR": "weur",
    "DE": "weur",
    "ES": "weur",
    "IT": "weur",
    "NL": "weur",
    "BE": "weur",
    "CH": "weur",
    "AT": "weur",
    "PT": "weur",
    "IE": "weur",
    "LU": "weur",
    "MC": "weur",
    "AD": "weur",
    "SM": "weur",
    "VA": "weur",
    "LI": "weur",
    "MT": "weur",
    "SE": "weur",
    "NO": "weur",
    "DK": "weur",
    "FI": "weur",
    "IS": "weur",
    "PL": "eeur",
    "RU": "eeur",
    "UA": "eeur",
    "RO": "eeur",
    "CZ": "eeur",
    "HU": "eeur",
    "GR": "eeur",
    "BG": "eeur",
    "SK": "eeur",
    "HR": "eeur",
    "RS": "eeur",
    "SI": "eeur",
    "BA": "eeur",
    "AL": "eeur",
    "MK": "eeur",
    "ME": "eeur",
    "XK": "eeur",
    "BY": "eeur",
    "MD": "eeur",
    "LT": "eeur",
    "LV": "eeur",
    "EE": "eeur",
    "CY": "eeur",
    "JP": "apac",
    "CN": "apac",
    "KR": "apac",
    "IN": "apac",
    "SG": "apac",
    "TH": "apac",
    "ID": "apac",
    "MY": "apac",
    "VN": "apac",
    "PH": "apac",
    "TW": "apac",
    "HK": "apac",
    "MO": "apac",
    "KH": "apac",
    "LA": "apac",
    "MM": "apac",
    "BD": "apac",
    "LK": "apac",
    "NP": "apac",
    "BT": "apac",
    "MV": "apac",
    "PK": "apac",
    "AF": "apac",
    "MN": "apac",
    "KP": "apac",
    "BN": "apac",
    "TL": "apac",
    "PG": "apac",
    "FJ": "apac",
    "SB": "apac",
    "VU": "apac",
    "NC": "apac",
    "PF": "apac",
    "WS": "apac",
    "TO": "apac",
    "KI": "apac",
    "PW": "apac",
    "MH": "apac",
    "FM": "apac",
    "NR": "apac",
    "TV": "apac",
    "CK": "apac",
    "NU": "apac",
    "TK": "apac",
    "GU": "apac",
    "MP": "apac",
    "AS": "apac",
    "AU": "oc",
    "NZ": "oc",
    "AE": "me",
    "SA": "me",
    "IL": "me",
    "TR": "me",
    "EG": "me",
    "IQ": "me",
    "IR": "me",
    "SY": "me",
    "JO": "me",
    "LB": "me",
    "KW": "me",
    "QA": "me",
    "BH": "me",
    "OM": "me",
    "YE": "me",
    "PS": "me",
    "GE": "me",
    "AM": "me",
    "AZ": "me",
    "ZA": "afr",
    "NG": "afr",
    "KE": "afr",
    "MA": "afr",
    "TN": "afr",
    "DZ": "afr",
    "LY": "afr",
    "ET": "afr",
    "GH": "afr",
    "TZ": "afr",
    "UG": "afr",
    "SD": "afr",
    "AO": "afr",
    "MZ": "afr",
    "MG": "afr",
    "CM": "afr",
    "CI": "afr",
    "NE": "afr",
    "BF": "afr",
    "ML": "afr",
    "MW": "afr",
    "ZM": "afr",
    "SN": "afr",
    "SO": "afr",
    "TD": "afr",
    "ZW": "afr",
    "GN": "afr",
    "RW": "afr",
    "BJ": "afr",
    "BI": "afr",
    "TG": "afr",
    "SL": "afr",
    "LR": "afr",
    "MR": "afr",
    "CF": "afr",
    "ER": "afr",
    "GM": "afr",
    "BW": "afr",
    "NA": "afr",
    "GA": "afr",
    "LS": "afr",
    "GW": "afr",
    "GQ": "afr",
    "MU": "afr",
    "SZ": "afr",
    "DJ": "afr",
    "KM": "afr",
    "CV": "afr",
    "SC": "afr",
    "ST": "afr",
    "SS": "afr",
    "EH": "afr",
    "CG": "afr",
    "CD": "afr",
    "KZ": "apac",
    "UZ": "apac",
    "TM": "apac",
    "TJ": "apac",
    "KG": "apac"
  };
  const usStateToHint = {
    "California": "wnam",
    "Oregon": "wnam",
    "Washington": "wnam",
    "Nevada": "wnam",
    "Arizona": "wnam",
    "Utah": "wnam",
    "Idaho": "wnam",
    "Montana": "wnam",
    "Wyoming": "wnam",
    "Colorado": "wnam",
    "New Mexico": "wnam",
    "Alaska": "wnam",
    "Hawaii": "wnam",
    "New York": "enam",
    "Florida": "enam",
    "Texas": "enam",
    "Illinois": "enam",
    "Georgia": "enam",
    "Pennsylvania": "enam",
    "Ohio": "enam",
    "Michigan": "enam",
    "North Carolina": "enam",
    "Virginia": "enam",
    "Massachusetts": "enam",
    "New Jersey": "enam",
    "Maryland": "enam",
    "Connecticut": "enam",
    "Maine": "enam",
    "New Hampshire": "enam",
    "Vermont": "enam",
    "Rhode Island": "enam",
    "South Carolina": "enam",
    "Tennessee": "enam",
    "Alabama": "enam",
    "Mississippi": "enam",
    "Louisiana": "enam",
    "Arkansas": "enam",
    "Missouri": "enam",
    "Iowa": "enam",
    "Minnesota": "enam",
    "Wisconsin": "enam",
    "Indiana": "enam",
    "Kentucky": "enam",
    "West Virginia": "enam",
    "Delaware": "enam",
    "Oklahoma": "enam",
    "Kansas": "enam",
    "Nebraska": "enam",
    "South Dakota": "enam",
    "North Dakota": "enam",
    "District of Columbia": "enam"
  };
  const continentToHint = {
    "NA": "enam",
    "SA": "sam",
    "EU": "weur",
    "AS": "apac",
    "AF": "afr",
    "OC": "oc"
  };
  let bestHint;
  if (country === "US" && region && region !== "unknown") {
    bestHint = usStateToHint[region] || "enam";
  } else {
    bestHint = countryToHint[country] || continentToHint[cf?.continent || "NA"] || "enam";
  }
  const primaryEndpoint = ALL_ENDPOINTS.find((ep) => ep.hint === bestHint) || ALL_ENDPOINTS[1];
  const orderedEndpoints = [
    primaryEndpoint,
    ...ALL_ENDPOINTS.filter((ep) => ep.name !== primaryEndpoint.name)
  ];
  for (const endpoint of orderedEndpoints) {
    try {
      const id2 = env.RELAY_WEBSOCKET.idFromName(endpoint.name);
      const stub2 = env.RELAY_WEBSOCKET.get(id2, { locationHint: endpoint.hint });
      return { stub: stub2, doName: endpoint.name };
    } catch (error) {
      dbg(`Failed to connect to ${endpoint.name}: ${error}`);
    }
  }
  const fallback = ALL_ENDPOINTS[1];
  const id = env.RELAY_WEBSOCKET.idFromName(fallback.name);
  const stub = env.RELAY_WEBSOCKET.get(id, { locationHint: fallback.hint });
  return { stub, doName: fallback.name };
}
__name(getOptimalDO, "getOptimalDO");
async function getDatabaseSizeBytes2(session) {
  try {
    const result = await session.prepare("SELECT 1").run();
    const sizeAfter = result.meta?.size_after;
    if (typeof sizeAfter === "number" && sizeAfter > 0) {
      return sizeAfter;
    }
    return 0;
  } catch (error) {
    console.error("Error getting database size:", error);
    return 0;
  }
}
__name(getDatabaseSizeBytes2, "getDatabaseSizeBytes");
async function pruneOldEvents(session, targetSizeBytes) {
  let totalEventsDeleted = 0;
  let currentSize = await getDatabaseSizeBytes2(session);
  dbg(`Starting database pruning. Current size: ${(currentSize / (1024 * 1024 * 1024)).toFixed(2)} GB, Target: ${(targetSizeBytes / (1024 * 1024 * 1024)).toFixed(2)} GB`);
  const protectedKinds = new Set(pruneProtectedKinds2);
  if (SIP01_PRUNE_ALLOWED2)
    protectedKinds.delete(SIP01_KIND);
  const protectedKindsArray = Array.from(protectedKinds);
  const protectedKindsClause = protectedKindsArray.length > 0 ? `AND kind NOT IN (${protectedKindsArray.join(",")})` : "";
  while (currentSize > targetSizeBytes) {
    const oldestEvents = await session.prepare(`
      SELECT id FROM events
      WHERE 1=1 ${protectedKindsClause}
      ORDER BY created_at ASC
      LIMIT ?
    `).bind(DB_PRUNE_BATCH_SIZE2).all();
    if (!oldestEvents.results || oldestEvents.results.length === 0) {
      dbg("No more events eligible for pruning");
      break;
    }
    const eventIds = oldestEvents.results.map((row) => row.id);
    const placeholders = eventIds.map(() => "?").join(",");
    if (SIP01_INDEXING2) {
      await removeSip01Observations(session, eventIds);
    }
    const pruneResults = await session.batch([
      session.prepare(`DELETE FROM tags WHERE event_id IN (${placeholders})`).bind(...eventIds),
      session.prepare(`DELETE FROM content_hashes WHERE event_id IN (${placeholders})`).bind(...eventIds),
      session.prepare(`DELETE FROM event_tags_cache_multi WHERE event_id IN (${placeholders})`).bind(...eventIds),
      session.prepare(`DELETE FROM events WHERE id IN (${placeholders})`).bind(...eventIds)
    ]);
    const deletedCount = pruneResults[3]?.meta?.changes || eventIds.length;
    totalEventsDeleted += deletedCount;
    dbg(`Pruned ${deletedCount} events (total: ${totalEventsDeleted})`);
    currentSize = await getDatabaseSizeBytes2(session);
    dbg(`Current database size: ${(currentSize / (1024 * 1024 * 1024)).toFixed(2)} GB`);
    if (totalEventsDeleted >= 1e5) {
      dbg("Reached maximum pruning limit for this run (100,000 events)");
      break;
    }
  }
  return { eventsDeleted: totalEventsDeleted, finalSizeBytes: currentSize };
}
__name(pruneOldEvents, "pruneOldEvents");
var UI_ROUTES = /* @__PURE__ */ new Set([
  "/",
  "/dashboard",
  "/search",
  "/explorer",
  "/indexers",
  "/documents",
  "/relay",
  "/deploy",
  "/tests",
  "/docs"
]);
async function serveUi(request, env, url) {
  if (env.ASSETS) {
    if (UI_ROUTES.has(url.pathname)) {
      const indexUrl = new URL("/index.html", url);
      return env.ASSETS.fetch(new Request(indexUrl.toString(), request));
    }
    const asset = await env.ASSETS.fetch(request);
    if (asset.status !== 404)
      return asset;
    return new Response("Not found", { status: 404 });
  }
  return serveMiniLanding(url.host);
}
__name(serveUi, "serveUi");
var relay_worker_default = {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      if (request.method === "OPTIONS" && url.pathname.startsWith("/api/")) {
        return new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Max-Age": "86400"
          }
        });
      }
      if (request.method === "POST" && url.searchParams.has("notify-zap") && PAY_TO_RELAY_ENABLED2) {
        return await handlePaymentNotification(request, env);
      }
      if (url.pathname === "/api/check-payment" && PAY_TO_RELAY_ENABLED2) {
        return await handleCheckPayment(request, env);
      }
      if (url.pathname.startsWith("/api/service/")) {
        await ensureDatabase(env.RELAY_DATABASE);
        return await handleServiceApi(request, env, url);
      }
      if (url.pathname.startsWith("/api/") || url.pathname === "/metrics") {
        await ensureDatabase(env.RELAY_DATABASE);
        return await handleApiRequest(url, request, env);
      }
      if (url.pathname === "/") {
        if (request.headers.get("Upgrade") === "websocket") {
          const cf = request.cf;
          const { stub, doName } = await getOptimalDO(cf, env);
          const newUrl = new URL(request.url);
          newUrl.searchParams.set("region", cf?.region || "unknown");
          newUrl.searchParams.set("colo", cf?.colo || "unknown");
          newUrl.searchParams.set("continent", cf?.continent || "unknown");
          newUrl.searchParams.set("country", cf?.country || "unknown");
          newUrl.searchParams.set("doName", doName);
          newUrl.searchParams.set("ip", request.headers.get("CF-Connecting-IP") || "");
          return stub.fetch(new Request(newUrl, request));
        } else if ((request.headers.get("Accept") || "").includes("application/nostr+json")) {
          return handleRelayInfoRequest(request, env);
        } else {
          ctx.waitUntil(ensureDatabase(env.RELAY_DATABASE));
          return serveUi(request, env, url);
        }
      } else if (url.pathname === "/.well-known/nostr.json") {
        return handleNIP05Request(url);
      } else if (request.method === "GET") {
        return await serveUi(request, env, url);
      } else {
        return new Response("Invalid request", { status: 400 });
      }
    } catch (error) {
      console.error("Error in fetch handler:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  },
  // Scheduled handler for 24hr database maintenance (runs daily at 00:00 UTC)
  async scheduled(event, env, ctx) {
    dbg("Running scheduled 24hr database maintenance...");
    try {
      const session = env.RELAY_DATABASE.withSession("first-primary");
      if (DB_PRUNING_ENABLED2) {
        const currentSizeBytes = await getDatabaseSizeBytes2(session);
        const currentSizeGB = currentSizeBytes / (1024 * 1024 * 1024);
        dbg(`Current database size: ${currentSizeGB.toFixed(2)} GB (threshold: ${DB_SIZE_THRESHOLD_GB2} GB)`);
        if (currentSizeGB >= DB_SIZE_THRESHOLD_GB2) {
          dbg(`Database size (${currentSizeGB.toFixed(2)} GB) exceeds threshold (${DB_SIZE_THRESHOLD_GB2} GB). Starting pruning...`);
          const targetSizeBytes = DB_PRUNE_TARGET_GB2 * 1024 * 1024 * 1024;
          const pruneResult = await pruneOldEvents(session, targetSizeBytes);
          dbg(`Pruning completed. Deleted ${pruneResult.eventsDeleted} events. Final size: ${(pruneResult.finalSizeBytes / (1024 * 1024 * 1024)).toFixed(2)} GB`);
        } else {
          dbg("Database size is within limits. No pruning needed.");
        }
      } else {
        dbg("Database pruning is disabled.");
      }
      dbg("Running PRAGMA optimize...");
      await session.prepare("PRAGMA optimize").run();
      dbg("Running ANALYZE on all tables...");
      await session.prepare("ANALYZE events").run();
      await session.prepare("ANALYZE tags").run();
      await session.prepare("ANALYZE event_tags_cache_multi").run();
      await session.prepare("ANALYZE content_hashes").run();
      await session.prepare("ANALYZE sip01_documents").run().catch(() => void 0);
      await session.prepare("ANALYZE sip01_observations").run().catch(() => void 0);
      await session.prepare("ANALYZE sip01_indexers").run().catch(() => void 0);
      dbg("Scheduled 24hr database maintenance completed successfully");
    } catch (error) {
      console.error("Scheduled maintenance failed:", error);
    }
  }
};

// shared/negentropy.js
var PROTOCOL_VERSION = 97;
var ID_SIZE = 32;
var FINGERPRINT_SIZE = 16;
var MAX_TIMESTAMP = Number.MAX_SAFE_INTEGER;
var SPLIT_BUCKETS = 16;
var Mode = { Skip: 0, Fingerprint: 1, IdList: 2 };
var EMPTY_ID = new Uint8Array(0);
function infinityBound() {
  return { timestamp: MAX_TIMESTAMP, id: EMPTY_ID };
}
__name(infinityBound, "infinityBound");
var VARINT_SAFE_LIMIT = (Number.MAX_SAFE_INTEGER - 127) / 128;
function encodeVarInt(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("varint must be a non-negative integer");
  }
  if (n === 0)
    return new Uint8Array([0]);
  const digits = [];
  while (n > 0) {
    digits.push(n % 128);
    n = Math.floor(n / 128);
  }
  digits.reverse();
  for (let i = 0; i < digits.length - 1; i++) {
    digits[i] |= 128;
  }
  return new Uint8Array(digits);
}
__name(encodeVarInt, "encodeVarInt");
var _Reader = class _Reader {
  constructor(buf) {
    this.buf = buf;
    this.pos = 0;
  }
  get remaining() {
    return this.buf.length - this.pos;
  }
  readByte() {
    if (this.pos >= this.buf.length) {
      throw new Error("negentropy message ends prematurely");
    }
    return this.buf[this.pos++];
  }
  readBytes(n) {
    if (this.remaining < n) {
      throw new Error("negentropy message ends prematurely");
    }
    const out = this.buf.subarray(this.pos, this.pos + n);
    this.pos += n;
    return out;
  }
  readVarInt() {
    let result = 0;
    while (true) {
      if (result > VARINT_SAFE_LIMIT) {
        throw new Error("varint too large");
      }
      const byte = this.readByte();
      result = result * 128 + (byte & 127);
      if ((byte & 128) === 0)
        break;
    }
    return result;
  }
};
__name(_Reader, "Reader");
var Reader = _Reader;
var _Writer = class _Writer {
  constructor() {
    this.chunks = [];
    this._length = 0;
  }
  get length() {
    return this._length;
  }
  byte(b) {
    this.chunks.push(new Uint8Array([b]));
    this._length += 1;
  }
  bytes(b) {
    this.chunks.push(b);
    this._length += b.length;
  }
  varint(n) {
    this.bytes(encodeVarInt(n));
  }
  /** Append another writer's contents (and reset it). */
  extend(other) {
    for (const chunk of other.chunks) {
      this.chunks.push(chunk);
    }
    this._length += other._length;
    other.chunks = [];
    other._length = 0;
  }
  unwrap() {
    const out = new Uint8Array(this._length);
    let offset = 0;
    for (const chunk of this.chunks) {
      out.set(chunk, offset);
      offset += chunk.length;
    }
    return out;
  }
};
__name(_Writer, "Writer");
var Writer = _Writer;
function compareBytes(a, b) {
  const len = Math.min(a.length, b.length);
  for (let i = 0; i < len; i++) {
    if (a[i] < b[i])
      return -1;
    if (a[i] > b[i])
      return 1;
  }
  return a.length - b.length;
}
__name(compareBytes, "compareBytes");
var _NegentropyStorageVector = class _NegentropyStorageVector {
  constructor() {
    this.timestamps = [];
    this.idBuf = new Uint8Array(ID_SIZE * 64);
    this.sealed = false;
  }
  get size() {
    return this.timestamps.length;
  }
  /** Insert a record. ID must be exactly 32 bytes. */
  insert(timestamp, id) {
    if (this.sealed)
      throw new Error("already sealed");
    if (id.length !== ID_SIZE) {
      throw new Error(`item ID must be ${ID_SIZE} bytes`);
    }
    if (!Number.isInteger(timestamp) || timestamp < 0 || timestamp >= MAX_TIMESTAMP) {
      throw new Error("item timestamp out of range");
    }
    const index = this.timestamps.length;
    if ((index + 1) * ID_SIZE > this.idBuf.length) {
      const grown = new Uint8Array(this.idBuf.length * 2);
      grown.set(this.idBuf);
      this.idBuf = grown;
    }
    this.idBuf.set(id, index * ID_SIZE);
    this.timestamps.push(timestamp);
  }
  /** Insert a record with a lowercase hex-encoded 64-char ID. */
  insertHex(timestamp, idHex) {
    if (!/^[0-9a-f]{64}$/.test(idHex)) {
      throw new Error("item ID must be 64 lowercase hex chars");
    }
    this.insert(timestamp, hexToBytes2(idHex));
  }
  /**
   * Seal the vector: verify (or establish) sorted order and reject duplicate
   * records. Must be called before use in reconciliation.
   */
  seal() {
    if (this.sealed)
      throw new Error("already sealed");
    if (!this.isSorted()) {
      this.sortInPlace();
    }
    for (let i = 1; i < this.size; i++) {
      if (this.compareItems(i - 1, i) === 0) {
        throw new Error("duplicate item inserted");
      }
    }
    this.sealed = true;
  }
  getItem(index) {
    this.checkSealed();
    if (index < 0 || index >= this.size) {
      throw new Error("item index out of range");
    }
    return { timestamp: this.timestamps[index], id: this.getId(index) };
  }
  /** Iterate records in [begin, end). Return false from cb to stop early. */
  iterate(begin, end, cb) {
    this.checkSealed();
    this.checkBounds(begin, end);
    for (let i = begin; i < end; i++) {
      if (!cb({ timestamp: this.timestamps[i], id: this.getId(i) }, i))
        break;
    }
  }
  /** Find the first index in [first, last) whose record is >= bound. */
  findLowerBound(first, last, bound) {
    this.checkSealed();
    this.checkBounds(first, last);
    let lo = first;
    let hi = last;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (this.compareItemToBound(mid, bound) < 0) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    return lo;
  }
  /**
   * Fingerprint of records in [begin, end): SHA-256 of (sum of IDs as
   * 32-byte little-endian integers mod 2^256, concatenated with the record
   * count as a varint), truncated to 16 bytes (NIP-77 appendix).
   */
  fingerprint(begin, end) {
    this.checkSealed();
    this.checkBounds(begin, end);
    const acc = new Uint8Array(ID_SIZE);
    for (let i = begin; i < end; i++) {
      let carry = 0;
      const offset = i * ID_SIZE;
      for (let j = 0; j < ID_SIZE; j++) {
        const t = acc[j] + this.idBuf[offset + j] + carry;
        acc[j] = t & 255;
        carry = t >> 8;
      }
    }
    const countVarint = encodeVarInt(end - begin);
    const preimage = new Uint8Array(ID_SIZE + countVarint.length);
    preimage.set(acc, 0);
    preimage.set(countVarint, ID_SIZE);
    return sha2562(preimage).subarray(0, FINGERPRINT_SIZE);
  }
  getId(index) {
    return this.idBuf.subarray(index * ID_SIZE, (index + 1) * ID_SIZE);
  }
  compareItems(a, b) {
    if (this.timestamps[a] !== this.timestamps[b]) {
      return this.timestamps[a] - this.timestamps[b];
    }
    return compareBytes(this.getId(a), this.getId(b));
  }
  compareItemToBound(index, bound) {
    if (this.timestamps[index] !== bound.timestamp) {
      return this.timestamps[index] - bound.timestamp;
    }
    return compareBytes(this.getId(index), bound.id);
  }
  isSorted() {
    for (let i = 1; i < this.size; i++) {
      if (this.compareItems(i - 1, i) > 0)
        return false;
    }
    return true;
  }
  /** Sort records via an index permutation, then rebuild the buffers. */
  sortInPlace() {
    const indices = this.timestamps.map((_, i) => i);
    indices.sort((a, b) => this.compareItems(a, b));
    const newTimestamps = new Array(this.size);
    const newIdBuf = new Uint8Array(this.idBuf.length);
    for (let i = 0; i < indices.length; i++) {
      const from = indices[i];
      newTimestamps[i] = this.timestamps[from];
      newIdBuf.set(this.getId(from), i * ID_SIZE);
    }
    this.timestamps = newTimestamps;
    this.idBuf = newIdBuf;
  }
  checkSealed() {
    if (!this.sealed)
      throw new Error("not sealed");
  }
  checkBounds(begin, end) {
    if (begin > end || end > this.size) {
      throw new Error("bad range");
    }
  }
};
__name(_NegentropyStorageVector, "NegentropyStorageVector");
var NegentropyStorageVector = _NegentropyStorageVector;
var _Negentropy = class _Negentropy {
  /**
   * @param {NegentropyStorageVector} storage Sealed storage vector of local records.
   * @param {number} [frameSizeLimit] Maximum size (bytes) of produced messages.
   *   `0` disables the limit. Must be >= 4096 when set.
   */
  constructor(storage, frameSizeLimit = 0) {
    if (frameSizeLimit !== 0 && frameSizeLimit < 4096) {
      throw new Error("frameSizeLimit too small");
    }
    this.storage = storage;
    this.frameSizeLimit = frameSizeLimit;
    this.isInitiator = false;
    this.lastTimestampIn = 0;
    this.lastTimestampOut = 0;
    this.haveIds = [];
    this.needIds = [];
  }
  /** Build the initial message (initiator role). */
  initiate() {
    if (this.isInitiator)
      throw new Error("already initiated");
    this.isInitiator = true;
    this.lastTimestampOut = 0;
    const output = new Writer();
    output.byte(PROTOCOL_VERSION);
    this.splitRange(0, this.storage.size, infinityBound(), output);
    return output.unwrap();
  }
  /**
   * Process an incoming message and produce the local response.
   *
   * For the server role the returned `message` is always non-null. For the
   * initiator role a `null` message means reconciliation is complete.
   *
   * @param {Uint8Array} query
   * @returns {{ message: Uint8Array | null, haveIds: string[], needIds: string[] }}
   */
  reconcile(query) {
    this.lastTimestampIn = 0;
    this.lastTimestampOut = 0;
    const reader = new Reader(query);
    const fullOutput = new Writer();
    fullOutput.byte(PROTOCOL_VERSION);
    const protocolVersion = reader.readByte();
    if (protocolVersion < 96 || protocolVersion > 111) {
      throw new Error("invalid negentropy protocol version byte");
    }
    if (protocolVersion !== PROTOCOL_VERSION) {
      if (this.isInitiator) {
        throw new Error(
          `unsupported negentropy protocol version requested: ${protocolVersion - 96}`
        );
      }
      return this.result(fullOutput.unwrap());
    }
    const storageSize = this.storage.size;
    let prevBound = { timestamp: 0, id: EMPTY_ID };
    let prevIndex = 0;
    let skip = false;
    while (reader.remaining > 0) {
      const o = new Writer();
      const doSkip = /* @__PURE__ */ __name(() => {
        if (skip) {
          skip = false;
          this.encodeBound(prevBound, o);
          o.varint(Mode.Skip);
        }
      }, "doSkip");
      const currBound = this.decodeBound(reader);
      const mode = reader.readVarInt();
      const lower = prevIndex;
      let upper = this.storage.findLowerBound(prevIndex, storageSize, currBound);
      if (mode === Mode.Skip) {
        skip = true;
      } else if (mode === Mode.Fingerprint) {
        const theirFingerprint = reader.readBytes(FINGERPRINT_SIZE);
        const ourFingerprint = this.storage.fingerprint(lower, upper);
        if (compareBytes(theirFingerprint, ourFingerprint) !== 0) {
          doSkip();
          this.splitRange(lower, upper, currBound, o);
        } else {
          skip = true;
        }
      } else if (mode === Mode.IdList) {
        const numIds = reader.readVarInt();
        const theirElems = /* @__PURE__ */ new Map();
        for (let i = 0; i < numIds; i++) {
          const id = reader.readBytes(ID_SIZE);
          theirElems.set(bytesToHex2(id), id);
        }
        this.storage.iterate(lower, upper, (item) => {
          const k = bytesToHex2(item.id);
          if (!theirElems.has(k)) {
            if (this.isInitiator)
              this.haveIds.push(k);
          } else {
            theirElems.delete(k);
          }
          return true;
        });
        if (this.isInitiator) {
          skip = true;
          for (const k of theirElems.keys()) {
            this.needIds.push(k);
          }
        } else {
          doSkip();
          const responseIds = new Writer();
          let numResponseIds = 0;
          let endBound = currBound;
          this.storage.iterate(lower, upper, (item, index) => {
            if (this.exceededFrameSizeLimit(fullOutput.length + responseIds.length)) {
              endBound = item;
              upper = index;
              return false;
            }
            responseIds.bytes(Uint8Array.from(item.id));
            numResponseIds++;
            return true;
          });
          this.encodeBound(endBound, o);
          o.varint(Mode.IdList);
          o.varint(numResponseIds);
          o.extend(responseIds);
          fullOutput.extend(o);
        }
      } else {
        throw new Error(`unexpected negentropy mode: ${mode}`);
      }
      if (this.exceededFrameSizeLimit(fullOutput.length + o.length)) {
        const remainingFingerprint = this.storage.fingerprint(upper, storageSize);
        this.encodeBound(infinityBound(), fullOutput);
        fullOutput.varint(Mode.Fingerprint);
        fullOutput.bytes(remainingFingerprint);
        break;
      }
      fullOutput.extend(o);
      prevIndex = upper;
      prevBound = currBound;
    }
    const message = fullOutput.length === 1 && this.isInitiator ? null : fullOutput.unwrap();
    return this.result(message);
  }
  result(message) {
    return { message, haveIds: this.haveIds, needIds: this.needIds };
  }
  /**
   * Cover [lower, upper) with ranges ending at upperBound: a single IdList
   * for small ranges, or {@link SPLIT_BUCKETS} fingerprint buckets.
   */
  splitRange(lower, upper, upperBound, output) {
    const numElems = upper - lower;
    if (numElems < SPLIT_BUCKETS * 2) {
      this.encodeBound(upperBound, output);
      output.varint(Mode.IdList);
      output.varint(numElems);
      this.storage.iterate(lower, upper, (item) => {
        output.bytes(Uint8Array.from(item.id));
        return true;
      });
      return;
    }
    const itemsPerBucket = Math.floor(numElems / SPLIT_BUCKETS);
    const bucketsWithExtra = numElems % SPLIT_BUCKETS;
    let curr = lower;
    for (let i = 0; i < SPLIT_BUCKETS; i++) {
      const bucketSize = itemsPerBucket + (i < bucketsWithExtra ? 1 : 0);
      const ourFingerprint = this.storage.fingerprint(curr, curr + bucketSize);
      curr += bucketSize;
      const bound = curr === upper ? upperBound : this.getMinimalBound(
        this.storage.getItem(curr - 1),
        this.storage.getItem(curr)
      );
      this.encodeBound(bound, output);
      output.varint(Mode.Fingerprint);
      output.bytes(ourFingerprint);
    }
  }
  /** Shortest bound that separates `prev` from `curr`. */
  getMinimalBound(prev, curr) {
    if (curr.timestamp !== prev.timestamp) {
      return { timestamp: curr.timestamp, id: EMPTY_ID };
    }
    let sharedPrefixBytes = 0;
    for (let i = 0; i < ID_SIZE; i++) {
      if (curr.id[i] !== prev.id[i])
        break;
      sharedPrefixBytes++;
    }
    return {
      timestamp: curr.timestamp,
      id: Uint8Array.from(curr.id.subarray(0, sharedPrefixBytes + 1))
    };
  }
  exceededFrameSizeLimit(n) {
    return this.frameSizeLimit !== 0 && n > this.frameSizeLimit - 200;
  }
  // -- Bound encoding -------------------------------------------------------
  encodeTimestampOut(timestamp) {
    if (timestamp === MAX_TIMESTAMP) {
      this.lastTimestampOut = MAX_TIMESTAMP;
      return encodeVarInt(0);
    }
    const delta = timestamp - this.lastTimestampOut;
    this.lastTimestampOut = timestamp;
    return encodeVarInt(delta + 1);
  }
  decodeTimestampIn(reader) {
    let timestamp = reader.readVarInt();
    timestamp = timestamp === 0 ? MAX_TIMESTAMP : timestamp - 1;
    if (this.lastTimestampIn === MAX_TIMESTAMP) {
      timestamp = MAX_TIMESTAMP;
    } else {
      timestamp += this.lastTimestampIn;
      if (timestamp >= MAX_TIMESTAMP)
        timestamp = MAX_TIMESTAMP;
    }
    this.lastTimestampIn = timestamp;
    return timestamp;
  }
  encodeBound(bound, output) {
    output.bytes(this.encodeTimestampOut(bound.timestamp));
    output.varint(bound.id.length);
    output.bytes(bound.id);
  }
  decodeBound(reader) {
    const timestamp = this.decodeTimestampIn(reader);
    const len = reader.readVarInt();
    if (len > ID_SIZE)
      throw new Error("bound key too long");
    const id = Uint8Array.from(reader.readBytes(len));
    return { timestamp, id };
  }
};
__name(_Negentropy, "Negentropy");
var Negentropy = _Negentropy;

// src/durable-object.ts
var _RelayWebSocket = class _RelayWebSocket {
  constructor(state, env) {
    this.processedEvents = /* @__PURE__ */ new Map();
    // eventId -> timestamp
    // Query cache for REQ messages
    this.queryCache = /* @__PURE__ */ new Map();
    this.QUERY_CACHE_TTL = 6e4;
    this.MAX_CACHE_SIZE = 100;
    // Query cache index for efficient invalidation (kind:X, author:Y, etc.)
    this.queryCacheIndex = /* @__PURE__ */ new Map();
    // Active queries for deduplication (prevent duplicate work)
    this.activeQueries = /* @__PURE__ */ new Map();
    // Payment status cache
    this.paymentCache = /* @__PURE__ */ new Map();
    this.PAYMENT_CACHE_TTL = 6e4;
    // NIP-77 negentropy sessions: `${sessionId}:${subId}` → state (in-memory;
    // reclaimed on hibernation/timeout with NEG-ERR closed:)
    this.negSessions = /* @__PURE__ */ new Map();
    // Federation budget: NEG-OPEN count per client IP per minute
    this.negIpBuckets = /* @__PURE__ */ new Map();
    // Parsed NIP-50 queries cached per filter object (live delivery matching)
    this.parsedSearchCache = /* @__PURE__ */ new WeakMap();
    // Alarm and cleanup configuration
    this.IDLE_TIMEOUT = 5 * 60 * 1e3;
    // 5 minutes
    this.lastActivityTime = Date.now();
    this.state = state;
    this.sessions = /* @__PURE__ */ new Map();
    this.env = env;
    this.doId = crypto.randomUUID();
    this.region = "unknown";
    this.doName = "unknown";
    this.processedEvents = /* @__PURE__ */ new Map();
    this.queryCache = /* @__PURE__ */ new Map();
    this.queryCacheIndex = /* @__PURE__ */ new Map();
    this.activeQueries = /* @__PURE__ */ new Map();
    this.paymentCache = /* @__PURE__ */ new Map();
    this.negSessions = /* @__PURE__ */ new Map();
    this.lastActivityTime = Date.now();
  }
  /** Pay-to-relay required (runtime override-aware). */
  paymentRequired() {
    return runtimePaymentMode(this.env) === "pay-to-relay";
  }
  /** NIP-42 auth required (runtime override-aware). */
  authRequired() {
    return runtimeAuthRequired(this.env);
  }
  // Alarm handler - called when scheduled alarm fires
  async alarm() {
    dbg(`Alarm triggered for DO ${this.doName}`);
    const now = Date.now();
    const idleTime = now - this.lastActivityTime;
    const activeWebSockets = this.state.getWebSockets();
    const activeCount = activeWebSockets.length;
    dbg(`DO ${this.doName} - Active WebSockets: ${activeCount}, Idle time: ${idleTime}ms`);
    this.reclaimIdleNegSessions();
    if (activeCount === 0) {
      dbg(`Cleaning up DO ${this.doName} - no active connections`);
      await this.cleanup();
      return;
    }
    const nextAlarm = now + this.IDLE_TIMEOUT;
    await this.state.storage.setAlarm(nextAlarm);
    dbg(`Next alarm scheduled for DO ${this.doName} in ${this.IDLE_TIMEOUT}ms`);
  }
  async cleanup() {
    dbg(`Running cleanup for DO ${this.doName}`);
    this.queryCache.clear();
    this.queryCacheIndex.clear();
    this.activeQueries.clear();
    this.paymentCache.clear();
    this.processedEvents.clear();
    this.negSessions.clear();
    this.sessions.clear();
    await this.cleanupOrphanedSubscriptions();
    dbg(`Cleanup complete for DO ${this.doName}`);
  }
  async cleanupOrphanedSubscriptions() {
    try {
      const allKeys = await this.state.storage.list();
      const activeWebSockets = this.state.getWebSockets();
      const activeSessionIds = /* @__PURE__ */ new Set();
      for (const ws of activeWebSockets) {
        const attachment = ws.deserializeAttachment();
        if (attachment) {
          activeSessionIds.add(attachment.sessionId);
        }
      }
      const keysToDelete = [];
      for (const [key] of allKeys) {
        if (key.startsWith("subs:")) {
          const sessionId = key.substring(5);
          if (!activeSessionIds.has(sessionId)) {
            keysToDelete.push(key);
          }
        }
      }
      if (keysToDelete.length > 0) {
        await this.state.storage.delete(keysToDelete);
        dbg(`Cleaned up ${keysToDelete.length} orphaned subscription entries`);
      }
    } catch (error) {
      console.error("Error cleaning up orphaned subscriptions:", error);
    }
  }
  async scheduleAlarmIfNeeded() {
    const existingAlarm = await this.state.storage.getAlarm();
    if (existingAlarm === null) {
      const alarmTime = Date.now() + this.IDLE_TIMEOUT;
      await this.state.storage.setAlarm(alarmTime);
      dbg(`Scheduled first alarm for DO ${this.doName}`);
    }
  }
  // Storage helper methods for subscriptions
  async saveSubscriptions(sessionId, subscriptions) {
    const key = `subs:${sessionId}`;
    const data = Array.from(subscriptions.entries());
    await this.state.storage.put(key, data);
  }
  async loadSubscriptions(sessionId) {
    const key = `subs:${sessionId}`;
    const data = await this.state.storage.get(key);
    return new Map(data || []);
  }
  async deleteSubscriptions(sessionId) {
    const key = `subs:${sessionId}`;
    await this.state.storage.delete(key);
  }
  // Payment cache methods
  async getCachedPaymentStatus(pubkey) {
    const cached = this.paymentCache.get(pubkey);
    if (cached && Date.now() - cached.timestamp < this.PAYMENT_CACHE_TTL) {
      return cached.hasPaid;
    }
    if (cached) {
      this.paymentCache.delete(pubkey);
    }
    return null;
  }
  setCachedPaymentStatus(pubkey, hasPaid) {
    this.paymentCache.set(pubkey, {
      hasPaid,
      timestamp: Date.now()
    });
    if (this.paymentCache.size > 1e3) {
      const sortedEntries = Array.from(this.paymentCache.entries()).sort((a, b) => a[1].timestamp - b[1].timestamp);
      const toRemove = Math.floor(this.paymentCache.size * 0.2);
      for (let i = 0; i < toRemove; i++) {
        this.paymentCache.delete(sortedEntries[i][0]);
      }
    }
  }
  // Helper to generate global cache key
  async generateGlobalCacheKey(filters, bookmark) {
    const cacheData = JSON.stringify({ filters, bookmark });
    const buffer = new TextEncoder().encode(cacheData);
    const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return `https://siprelay-query-cache/${hashHex}`;
  }
  // Query cache methods with deduplication and global caching
  async getCachedOrQuery(filters, bookmark) {
    const cacheKey = JSON.stringify({ filters, bookmark });
    if (this.activeQueries.has(cacheKey)) {
      dbg("Returning in-flight query result (deduplication)");
      return await this.activeQueries.get(cacheKey);
    }
    try {
      const globalCache = caches.default;
      const globalCacheKey = await this.generateGlobalCacheKey(filters, bookmark);
      const globalCached = await globalCache.match(globalCacheKey);
      if (globalCached) {
        const cachedDate = globalCached.headers.get("X-Cache-Time");
        if (cachedDate && Date.now() - parseInt(cachedDate) > 3e5) {
          dbg("Global cache entry expired, deleting");
          await globalCache.delete(globalCacheKey);
        } else {
          dbg("Returning globally cached query result");
          const result = await globalCached.json();
          this.queryCache.set(cacheKey, {
            result,
            timestamp: Date.now(),
            accessCount: 1,
            lastAccessed: Date.now()
          });
          this.addToCacheIndex(cacheKey, filters);
          return result;
        }
      }
    } catch (error) {
      console.error("Error checking global cache:", error);
    }
    const cached = this.queryCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < this.QUERY_CACHE_TTL) {
      cached.accessCount++;
      cached.lastAccessed = Date.now();
      return cached.result;
    }
    const queryPromise = queryEvents(filters, bookmark, this.env);
    this.activeQueries.set(cacheKey, queryPromise);
    try {
      const result = await queryPromise;
      this.queryCache.set(cacheKey, {
        result,
        timestamp: Date.now(),
        accessCount: 1,
        lastAccessed: Date.now()
      });
      this.addToCacheIndex(cacheKey, filters);
      if (this.queryCache.size > this.MAX_CACHE_SIZE) {
        this.cleanupQueryCache();
      }
      try {
        const globalCache = caches.default;
        const globalCacheKey = await this.generateGlobalCacheKey(filters, bookmark);
        const response = new Response(JSON.stringify(result), {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=300",
            "X-Cache-Time": Date.now().toString()
          }
        });
        await globalCache.put(globalCacheKey, response);
      } catch (error) {
        console.error("Error storing in global cache:", error);
      }
      return result;
    } finally {
      this.activeQueries.delete(cacheKey);
    }
  }
  cleanupQueryCache() {
    const now = Date.now();
    for (const [key, entry] of this.queryCache.entries()) {
      if (now - entry.timestamp > this.QUERY_CACHE_TTL) {
        this.queryCache.delete(key);
        this.removeFromCacheIndex(key);
      }
    }
    if (this.queryCache.size > this.MAX_CACHE_SIZE) {
      const entries = Array.from(this.queryCache.entries());
      const scoredEntries = entries.map(([key, entry]) => {
        const recencyScore = (now - entry.lastAccessed) / 1e3;
        const frequencyScore = entry.accessCount * 10;
        const evictionScore = frequencyScore - recencyScore / 60;
        return { key, score: evictionScore };
      });
      scoredEntries.sort((a, b) => a.score - b.score);
      const toRemove = Math.floor(this.MAX_CACHE_SIZE * 0.2);
      for (let i = 0; i < toRemove; i++) {
        const key = scoredEntries[i].key;
        this.queryCache.delete(key);
        this.removeFromCacheIndex(key);
      }
      dbg(`Evicted ${toRemove} low-scoring cache entries (LFU)`);
    }
  }
  addToCacheIndex(cacheKey, filters) {
    for (const filter of filters) {
      if (filter.kinds) {
        for (const kind of filter.kinds) {
          const indexKey = `kind:${kind}`;
          if (!this.queryCacheIndex.has(indexKey)) {
            this.queryCacheIndex.set(indexKey, /* @__PURE__ */ new Set());
          }
          this.queryCacheIndex.get(indexKey).add(cacheKey);
        }
      }
      if (filter.authors) {
        for (const author of filter.authors) {
          const indexKey = `author:${author}`;
          if (!this.queryCacheIndex.has(indexKey)) {
            this.queryCacheIndex.set(indexKey, /* @__PURE__ */ new Set());
          }
          this.queryCacheIndex.get(indexKey).add(cacheKey);
        }
      }
      for (const [key, values] of Object.entries(filter)) {
        if (key.startsWith("#") && Array.isArray(values)) {
          const tagName = key.substring(1);
          for (const value of values) {
            const indexKey = `tag:${tagName}:${value}`;
            if (!this.queryCacheIndex.has(indexKey)) {
              this.queryCacheIndex.set(indexKey, /* @__PURE__ */ new Set());
            }
            this.queryCacheIndex.get(indexKey).add(cacheKey);
          }
        }
      }
    }
  }
  removeFromCacheIndex(cacheKey) {
    for (const [indexKey, cacheKeys] of this.queryCacheIndex.entries()) {
      cacheKeys.delete(cacheKey);
      if (cacheKeys.size === 0) {
        this.queryCacheIndex.delete(indexKey);
      }
    }
  }
  invalidateRelevantCaches(event) {
    const keysToInvalidate = /* @__PURE__ */ new Set();
    const kindKey = `kind:${event.kind}`;
    if (this.queryCacheIndex.has(kindKey)) {
      for (const cacheKey of this.queryCacheIndex.get(kindKey)) {
        keysToInvalidate.add(cacheKey);
      }
    }
    const authorKey = `author:${event.pubkey}`;
    if (this.queryCacheIndex.has(authorKey)) {
      for (const cacheKey of this.queryCacheIndex.get(authorKey)) {
        keysToInvalidate.add(cacheKey);
      }
    }
    for (const tag of event.tags) {
      if (tag.length >= 2) {
        const tagKey = `tag:${tag[0]}:${tag[1]}`;
        if (this.queryCacheIndex.has(tagKey)) {
          for (const cacheKey of this.queryCacheIndex.get(tagKey)) {
            keysToInvalidate.add(cacheKey);
          }
        }
      }
    }
    for (const key of keysToInvalidate) {
      this.queryCache.delete(key);
      this.removeFromCacheIndex(key);
    }
    if (keysToInvalidate.size > 0) {
      dbg(`Invalidated ${keysToInvalidate.size} local cache entries for event ${event.id} (kind:${event.kind}, author:${event.pubkey.substring(0, 8)}...)`);
    }
  }
  async fetch(request) {
    const url = new URL(request.url);
    const urlDoName = url.searchParams.get("doName");
    if (urlDoName && urlDoName !== "unknown" && _RelayWebSocket.ALLOWED_ENDPOINTS.includes(urlDoName)) {
      this.doName = urlDoName;
    }
    if (url.pathname === "/do-broadcast") {
      return await this.handleDOBroadcast(request);
    }
    const upgradeHeader = request.headers.get("Upgrade");
    if (!upgradeHeader || upgradeHeader !== "websocket") {
      return new Response("Expected Upgrade: websocket", { status: 426 });
    }
    this.region = url.searchParams.get("region") || this.region || "unknown";
    const colo = url.searchParams.get("colo") || "default";
    dbg(`WebSocket connection to DO: ${this.doName} (region: ${this.region}, colo: ${colo})`);
    const webSocketPair = new WebSocketPair();
    const [client, server] = Object.values(webSocketPair);
    const sessionId = crypto.randomUUID();
    const host = request.headers.get("host") || url.host;
    const ip = url.searchParams.get("ip") || "";
    const session = this.createSession(sessionId, server, "first-unconstrained", host, [], void 0, void 0, void 0, ip);
    this.sessions.set(sessionId, session);
    const attachment = {
      sessionId,
      bookmark: session.bookmark,
      host,
      doName: this.doName,
      authenticatedPubkeys: [],
      challenge: session.challenge,
      ip
    };
    server.serializeAttachment(attachment);
    this.state.acceptWebSocket(server);
    if (this.authRequired() && session.challenge) {
      this.sendAuth(server, session.challenge);
    }
    this.lastActivityTime = Date.now();
    await this.scheduleAlarmIfNeeded();
    dbg(`New WebSocket session: ${sessionId} on DO ${this.doName}`);
    return new Response(null, {
      status: 101,
      webSocket: client
    });
  }
  /** Construct a session object with fresh rate limiters and auth state. */
  createSession(sessionId, ws, bookmark, host, authenticatedPubkeys, challenge2, hasPaid, subscriptions, ip) {
    return {
      id: sessionId,
      webSocket: ws,
      subscriptions: subscriptions ?? /* @__PURE__ */ new Map(),
      pubkeyRateLimiter: new RateLimiter(PUBKEY_RATE_LIMIT.rate, PUBKEY_RATE_LIMIT.capacity),
      // SIP-01 indexers get their own, roomier bucket (crawlers burst).
      sipRateLimiter: new RateLimiter(SIP01_INDEXER_RATE_LIMIT.rate, SIP01_INDEXER_RATE_LIMIT.capacity),
      reqRateLimiter: new RateLimiter(REQ_RATE_LIMIT.rate, REQ_RATE_LIMIT.capacity),
      bookmark,
      host,
      challenge: challenge2 ?? (this.authRequired() ? this.generateAuthChallenge() : void 0),
      authenticatedPubkeys: new Set(authenticatedPubkeys),
      hasPaid,
      ip
    };
  }
  // WebSocket Hibernation API handler methods
  async webSocketMessage(ws, message) {
    this.lastActivityTime = Date.now();
    const attachment = ws.deserializeAttachment();
    if (!attachment) {
      console.error("No session attachment found");
      ws.close(1011, "Session not found");
      return;
    }
    let session = this.sessions.get(attachment.sessionId);
    if (!session) {
      if (attachment.doName && this.doName === "unknown") {
        this.doName = attachment.doName;
      }
      const subscriptions = await this.loadSubscriptions(attachment.sessionId);
      const restoredPubkeys = attachment.authenticatedPubkeys || [];
      session = this.createSession(
        attachment.sessionId,
        ws,
        attachment.bookmark,
        attachment.host,
        restoredPubkeys,
        attachment.challenge || (this.authRequired() ? this.generateAuthChallenge() : void 0),
        attachment.hasPaid,
        subscriptions,
        attachment.ip
      );
      this.sessions.set(attachment.sessionId, session);
      if (this.authRequired() && restoredPubkeys.length === 0 && session.challenge) {
        this.sendAuth(ws, session.challenge);
      }
    }
    try {
      const maxMessageLength = relayInfo.limitation?.max_message_length ?? 262144;
      const messageLength = typeof message === "string" ? message.length : message.byteLength;
      if (messageLength > maxMessageLength) {
        this.sendError(ws, `error: message exceeds ${maxMessageLength} bytes`);
        ws.close(1009, "message too large");
        return;
      }
      let parsedMessage;
      if (typeof message === "string") {
        parsedMessage = JSON.parse(message);
      } else {
        const decoder = new TextDecoder();
        const text = decoder.decode(message);
        parsedMessage = JSON.parse(text);
      }
      await this.handleMessage(session, parsedMessage);
      const updatedAttachment = {
        sessionId: session.id,
        bookmark: session.bookmark,
        host: session.host,
        doName: this.doName,
        hasPaid: session.hasPaid,
        authenticatedPubkeys: Array.from(session.authenticatedPubkeys),
        challenge: session.challenge,
        ip: session.ip
      };
      ws.serializeAttachment(updatedAttachment);
    } catch (error) {
      console.error("Error handling message:", error);
      if (error instanceof SyntaxError) {
        this.sendError(ws, "Invalid JSON format");
      } else {
        this.sendError(ws, "Failed to process message");
      }
    }
  }
  async webSocketClose(ws, code, reason, wasClean) {
    const attachment = ws.deserializeAttachment();
    if (attachment) {
      dbg(`WebSocket closed: ${attachment.sessionId} on DO ${this.doName}`);
      this.sessions.delete(attachment.sessionId);
      for (const key of [...this.negSessions.keys()]) {
        if (key.startsWith(`${attachment.sessionId}:`)) {
          this.negSessions.delete(key);
        }
      }
      await this.deleteSubscriptions(attachment.sessionId);
      const activeWebSockets = this.state.getWebSockets();
      if (activeWebSockets.length === 0) {
        await this.state.storage.deleteAlarm();
        dbg(`Deleted alarm for DO ${this.doName} - no active connections remaining`);
      }
    }
  }
  async webSocketError(ws, error) {
    const attachment = ws.deserializeAttachment();
    if (attachment) {
      console.error(`WebSocket error for session ${attachment.sessionId}:`, error);
      this.sessions.delete(attachment.sessionId);
    }
  }
  async handleDOBroadcast(request) {
    try {
      const data = await request.json();
      const { event, sourceDoId } = data;
      if (this.processedEvents.has(event.id)) {
        return new Response(JSON.stringify({ success: true, duplicate: true }));
      }
      this.processedEvents.set(event.id, Date.now());
      dbg(`DO ${this.doName} received event ${event.id} from ${sourceDoId}`);
      this.invalidateRelevantCaches(event);
      await this.broadcastToLocalSessions(event);
      const fiveMinutesAgo = Date.now() - 3e5;
      for (const [eventId, timestamp] of this.processedEvents) {
        if (timestamp < fiveMinutesAgo) {
          this.processedEvents.delete(eventId);
        }
      }
      return new Response(JSON.stringify({ success: true }));
    } catch (error) {
      console.error("Error handling DO broadcast:", error);
      return new Response(JSON.stringify({ success: false, error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
  async handleMessage(session, message) {
    if (!Array.isArray(message)) {
      this.sendError(session.webSocket, "Invalid message format: expected JSON array");
      return;
    }
    const [type, ...args] = message;
    try {
      switch (type) {
        case "EVENT":
          await this.handleEvent(session, args[0]);
          break;
        case "REQ":
          await this.handleReq(session, message);
          break;
        case "CLOSE":
          await this.handleCloseSubscription(session, args[0]);
          break;
        case "AUTH":
          await this.handleAuth(session, args[0]);
          break;
        case "COUNT":
          await this.handleCount(session, message);
          break;
        case "NEG-OPEN":
          await this.handleNegOpen(session, message);
          break;
        case "NEG-MSG":
          await this.handleNegMsg(session, message);
          break;
        case "NEG-CLOSE":
          await this.handleNegClose(session, message);
          break;
        default:
          this.sendError(session.webSocket, `Unknown message type: ${type}`);
      }
    } catch (error) {
      console.error(`Error handling ${type} message:`, error);
      this.sendError(session.webSocket, `Failed to process ${type} message`);
    }
  }
  async handleEvent(session, event) {
    try {
      if (!event || typeof event !== "object") {
        this.sendOK(session.webSocket, "", false, "invalid: event object required");
        return;
      }
      if (!event.id || !event.pubkey || !event.sig || !event.created_at || event.kind === void 0 || !Array.isArray(event.tags) || event.content === void 0 || event.content === null) {
        this.sendOK(session.webSocket, event.id || "", false, "invalid: missing required fields");
        return;
      }
      if (!/^[0-9a-f]{64}$/.test(event.id) || !/^[0-9a-f]{64}$/.test(event.pubkey) || !/^[0-9a-f]{128}$/.test(event.sig)) {
        this.sendOK(session.webSocket, event.id || "", false, "invalid: id, pubkey and sig must be lowercase hex");
        return;
      }
      if (!Number.isInteger(event.kind) || event.kind < 0 || event.kind > 65535) {
        this.sendOK(session.webSocket, event.id, false, "invalid: kind must be an integer in range [0, 65535]");
        return;
      }
      if (!Number.isInteger(event.created_at)) {
        this.sendOK(session.webSocket, event.id, false, "invalid: created_at must be an integer");
        return;
      }
      const maxTags = relayInfo.limitation?.max_event_tags ?? 2e3;
      if (event.tags.length > maxTags) {
        this.sendOK(session.webSocket, event.id, false, `invalid: event has more than ${maxTags} tags`);
        return;
      }
      const maxContent = relayInfo.limitation?.max_content_length ?? 7e4;
      if (typeof event.content !== "string" || event.content.length > maxContent) {
        this.sendOK(session.webSocket, event.id, false, `invalid: content exceeds ${maxContent} characters`);
        return;
      }
      if (event.kind === 22242) {
        this.sendOK(session.webSocket, event.id, false, "invalid: kind 22242 events are for authentication only");
        return;
      }
      if (this.authRequired()) {
        if (session.authenticatedPubkeys.size === 0) {
          this.sendOK(session.webSocket, event.id, false, "auth-required: authenticate to publish events");
          return;
        }
        if (event.kind !== 1059 && !session.authenticatedPubkeys.has(event.pubkey)) {
          this.sendOK(session.webSocket, event.id, false, "restricted: event pubkey does not match authenticated pubkey");
          return;
        }
      }
      if (!excludedRateLimitKinds.has(event.kind)) {
        const limiter = event.kind === SIP01_KIND && SIP01_ENABLED ? session.sipRateLimiter : session.pubkeyRateLimiter;
        if (!limiter.removeToken()) {
          dbg(`Rate limit exceeded for pubkey ${event.pubkey} (kind ${event.kind})`);
          this.sendOK(session.webSocket, event.id, false, "rate-limited: slow down there chief");
          return;
        }
      }
      const isValidSignature = await verifyEventSignature(event);
      if (!isValidSignature) {
        console.error(`Signature verification failed for event ${event.id}`);
        this.sendOK(session.webSocket, event.id, false, "invalid: signature verification failed");
        return;
      }
      if (this.paymentRequired() && event.kind !== 1059) {
        let hasPaid = await this.getCachedPaymentStatus(event.pubkey);
        if (hasPaid === null) {
          hasPaid = await hasPaidForRelay(event.pubkey, this.env);
          if (hasPaid !== null) {
            this.setCachedPaymentStatus(event.pubkey, hasPaid);
          }
        }
        if (hasPaid !== true) {
          const relayUrl = `https://${session.host}`;
          console.error(`Event denied. Pubkey ${event.pubkey} has not paid for relay access.`);
          this.sendOK(session.webSocket, event.id, false, `blocked: payment required. Visit ${relayUrl} to pay for relay access. If you just paid, retry in ~60 seconds (payment cache).`);
          return;
        }
      }
      if (event.kind !== 1059 && !isPubkeyAllowed(event.pubkey)) {
        console.error(`Event denied. Pubkey ${event.pubkey} is not allowed.`);
        this.sendOK(session.webSocket, event.id, false, "blocked: pubkey not allowed");
        return;
      }
      if (!isEventKindAllowed(event.kind)) {
        console.error(`Event denied. Event kind ${event.kind} is not allowed.`);
        this.sendOK(session.webSocket, event.id, false, `blocked: event kind ${event.kind} not allowed on this relay`);
        return;
      }
      if (containsBlockedContent(event)) {
        console.error("Event denied. Content contains blocked phrases.");
        this.sendOK(session.webSocket, event.id, false, "blocked: content contains blocked phrases");
        return;
      }
      for (const tag of event.tags) {
        if (!isTagAllowed(tag[0])) {
          console.error(`Event denied. Tag '${tag[0]}' is not allowed.`);
          this.sendOK(session.webSocket, event.id, false, `blocked: tag '${tag[0]}' not allowed`);
          return;
        }
      }
      const result = await processEvent(event, session.id, this.env);
      if (result.bookmark) {
        session.bookmark = result.bookmark;
      }
      if (result.success) {
        this.sendOK(session.webSocket, event.id, true, result.message);
        this.processedEvents.set(event.id, Date.now());
        this.invalidateRelevantCaches(event);
        dbg(`DO ${this.doName} broadcasting event ${event.id}`);
        await this.broadcastEvent(event);
      } else {
        this.sendOK(session.webSocket, event.id, false, result.message);
      }
    } catch (error) {
      console.error("Error handling event:", error);
      this.sendOK(session.webSocket, event?.id || "", false, `error: ${error.message}`);
    }
  }
  async handleReq(session, message) {
    const [_, subscriptionId, ...filters] = message;
    if (!subscriptionId || typeof subscriptionId !== "string" || subscriptionId === "" || subscriptionId.length > 64) {
      this.sendError(session.webSocket, "Invalid subscription ID: must be non-empty string of max 64 chars");
      return;
    }
    if (this.authRequired() && session.authenticatedPubkeys.size === 0) {
      this.sendClosed(session.webSocket, subscriptionId, "auth-required: authentication required to subscribe");
      return;
    }
    if (!session.reqRateLimiter.removeToken()) {
      console.error(`REQ rate limit exceeded for subscription: ${subscriptionId}`);
      this.sendClosed(session.webSocket, subscriptionId, "rate-limited: slow down there chief");
      return;
    }
    if (filters.length === 0) {
      this.sendClosed(session.webSocket, subscriptionId, "error: at least one filter required");
      return;
    }
    if (filters.length > 20) {
      this.sendClosed(session.webSocket, subscriptionId, "error: too many filters (max 20)");
      return;
    }
    const maxSubscriptions = relayInfo.limitation?.max_subscriptions ?? 100;
    if (session.subscriptions.size >= maxSubscriptions && !session.subscriptions.has(subscriptionId)) {
      this.sendClosed(session.webSocket, subscriptionId, `error: max subscriptions (${maxSubscriptions}) reached`);
      return;
    }
    for (const filter of filters) {
      if (typeof filter !== "object" || filter === null) {
        this.sendClosed(session.webSocket, subscriptionId, "invalid: filter must be an object");
        return;
      }
      if (filter.ids) {
        for (const id of filter.ids) {
          if (!/^[a-f0-9]{64}$/.test(id)) {
            this.sendClosed(session.webSocket, subscriptionId, `invalid: Invalid event ID format: ${id}`);
            return;
          }
        }
      }
      if (filter.authors) {
        for (const author of filter.authors) {
          if (!/^[a-f0-9]{64}$/.test(author)) {
            this.sendClosed(session.webSocket, subscriptionId, `invalid: Invalid author pubkey format: ${author}`);
            return;
          }
        }
      }
      if (filter.kinds) {
        const allowedKinds = filter.kinds.filter((kind) => isEventKindAllowed(kind));
        const blockedKinds = filter.kinds.filter((kind) => !isEventKindAllowed(kind));
        if (allowedKinds.length === 0) {
          console.error(`Blocked kinds in subscription: ${blockedKinds.join(", ")}`);
          this.sendClosed(session.webSocket, subscriptionId, `blocked: kinds ${blockedKinds.join(", ")} not carried by this relay`);
          return;
        }
        if (blockedKinds.length > 0) {
          filter.kinds = allowedKinds;
          this.sendError(session.webSocket, `note: kinds ${blockedKinds.join(", ")} not carried by this relay, filter narrowed`);
        }
      }
      if (filter.ids && filter.ids.length > 5e3) {
        this.sendClosed(session.webSocket, subscriptionId, "invalid: too many event IDs (max 5000)");
        return;
      }
      if (filter.search !== void 0) {
        if (!NIP50_ENABLED) {
          this.sendClosed(session.webSocket, subscriptionId, "blocked: search is not supported by this relay");
          return;
        }
        if (typeof filter.search !== "string" || filter.search.length > 500) {
          this.sendClosed(session.webSocket, subscriptionId, "invalid: search must be a string of max 500 chars");
          return;
        }
      }
      if (filter.limit && filter.limit > 500) {
        filter.limit = 500;
      } else if (!filter.limit) {
        filter.limit = 500;
      }
    }
    session.subscriptions.set(subscriptionId, filters);
    await this.saveSubscriptions(session.id, session.subscriptions);
    dbg(`New subscription ${subscriptionId} for session ${session.id} on DO ${this.doName}`);
    try {
      await ensureDatabase(this.env.RELAY_DATABASE);
      const searchFilters = filters.filter((f) => typeof f.search === "string" && f.search.trim() !== "");
      const plainFilters = filters.filter((f) => !(typeof f.search === "string" && f.search.trim() !== ""));
      const seenIds = /* @__PURE__ */ new Set();
      if (plainFilters.length > 0) {
        const result = await this.getCachedOrQuery(plainFilters, session.bookmark);
        if (result.bookmark) {
          session.bookmark = result.bookmark;
        }
        for (const event of result.events) {
          if (seenIds.has(event.id))
            continue;
          seenIds.add(event.id);
          this.sendEvent(session.webSocket, subscriptionId, event);
        }
      }
      for (const filter of searchFilters) {
        const events = await executeSearch(this.env.RELAY_DATABASE.withSession(session.bookmark), filter);
        for (const event of events) {
          if (seenIds.has(event.id))
            continue;
          seenIds.add(event.id);
          this.sendEvent(session.webSocket, subscriptionId, event);
        }
        bumpMetric(this.env.RELAY_DATABASE.withSession("first-primary"), "search_queries_ws").catch(() => void 0);
      }
      this.sendEOSE(session.webSocket, subscriptionId);
    } catch (error) {
      console.error(`Error processing REQ for subscription ${subscriptionId}:`, error);
      this.sendClosed(session.webSocket, subscriptionId, "error: could not connect to the database");
    }
  }
  async handleCloseSubscription(session, subscriptionId) {
    if (!subscriptionId) {
      this.sendError(session.webSocket, "Invalid subscription ID for CLOSE");
      return;
    }
    const deleted = session.subscriptions.delete(subscriptionId);
    if (deleted) {
      await this.saveSubscriptions(session.id, session.subscriptions);
      dbg(`Closed subscription ${subscriptionId} for session ${session.id} on DO ${this.doName}`);
      this.sendClosed(session.webSocket, subscriptionId, "Subscription closed");
    } else {
      this.sendClosed(session.webSocket, subscriptionId, "Subscription not found");
    }
  }
  // -------------------------------------------------------------------------
  // NIP-45 COUNT
  // -------------------------------------------------------------------------
  async handleCount(session, message) {
    const [_, queryId, ...filters] = message;
    if (!queryId || typeof queryId !== "string" || queryId === "" || queryId.length > 64) {
      this.sendError(session.webSocket, "Invalid query ID for COUNT");
      return;
    }
    if (!NIP45_ENABLED) {
      this.sendClosed(session.webSocket, queryId, "blocked: COUNT is not supported by this relay");
      return;
    }
    if (this.authRequired() && session.authenticatedPubkeys.size === 0) {
      this.sendClosed(session.webSocket, queryId, "auth-required: authentication required");
      return;
    }
    if (!session.reqRateLimiter.removeToken()) {
      this.sendClosed(session.webSocket, queryId, "rate-limited: slow down there chief");
      return;
    }
    if (filters.length === 0 || filters.length > 10) {
      this.sendClosed(session.webSocket, queryId, "error: COUNT requires 1-10 filters");
      return;
    }
    const searchFilters = [];
    const plainFilters = [];
    for (const filter of filters) {
      if (typeof filter !== "object" || filter === null) {
        this.sendClosed(session.webSocket, queryId, "invalid: filter must be an object");
        return;
      }
      if (calculateQueryComplexity(filter) > 500) {
        this.sendClosed(session.webSocket, queryId, "blocked: filter too complex to count");
        return;
      }
      const hasSearch = typeof filter.search === "string" && filter.search.trim() !== "";
      if (hasSearch) {
        const kinds = Array.isArray(filter.kinds) ? filter.kinds : void 0;
        const sipOnly = SIP01_INDEXING && (kinds === void 0 ? RELAY_MODE === "sip01" : kinds.every((k) => k === SIP01_KIND));
        if (!sipOnly) {
          this.sendClosed(session.webSocket, queryId, "blocked: COUNT with search is only supported for kind 39697 filters on this relay");
          return;
        }
        searchFilters.push(filter);
      } else {
        plainFilters.push(filter);
      }
    }
    try {
      let count;
      let approximate = false;
      if (searchFilters.length === 0) {
        count = await countEvents(plainFilters, session.bookmark, this.env);
      } else {
        approximate = filters.length > 1;
        count = 0;
        const d1 = this.env.RELAY_DATABASE.withSession(session.bookmark);
        for (const filter of searchFilters) {
          count += await executeSearchCount(d1, filter);
        }
        if (plainFilters.length > 0) {
          count += await countEvents(plainFilters, session.bookmark, this.env);
        }
      }
      this.sendCount(session.webSocket, queryId, count, approximate);
      bumpMetric(this.env.RELAY_DATABASE.withSession("first-primary"), "count_queries").catch(() => void 0);
    } catch (error) {
      console.error("COUNT failed:", error);
      this.sendClosed(session.webSocket, queryId, "error: could not compute count");
    }
  }
  // -------------------------------------------------------------------------
  // NIP-77 negentropy sync
  // -------------------------------------------------------------------------
  negKey(sessionId, subId) {
    return `${sessionId}:${subId}`;
  }
  /** Per-IP NEG-OPEN budget: NEG_OPEN_PER_IP_PER_MIN per rolling minute. */
  takeNegOpenBudget(ip) {
    const now = Date.now();
    const bucket = this.negIpBuckets.get(ip);
    if (!bucket || now >= bucket.resetAt) {
      this.negIpBuckets.set(ip, { count: 1, resetAt: now + 6e4 });
      return true;
    }
    if (bucket.count >= NEG_OPEN_PER_IP_PER_MIN)
      return false;
    bucket.count++;
    return true;
  }
  reclaimIdleNegSessions() {
    const now = Date.now();
    for (const [key, neg] of this.negSessions) {
      if (now - neg.createdAt > NEG_SESSION_TIMEOUT_MS) {
        this.negSessions.delete(key);
        dbg(`Reclaimed idle NEG session ${key}`);
      }
    }
  }
  async handleNegOpen(session, message) {
    const [_, subId, filter, initialMessage] = message;
    if (!subId || typeof subId !== "string" || subId === "" || subId.length > 64) {
      this.sendError(session.webSocket, "Invalid NEG subscription ID");
      return;
    }
    if (!NIP77_ENABLED) {
      this.sendNegErr(session.webSocket, subId, "disabled: negentropy sync is not enabled on this relay");
      return;
    }
    if (this.authRequired() && session.authenticatedPubkeys.size === 0) {
      this.sendNegErr(session.webSocket, subId, "auth-required: authentication required to sync");
      return;
    }
    if (!session.reqRateLimiter.removeToken()) {
      this.sendNegErr(session.webSocket, subId, "rate-limited: slow down there chief");
      return;
    }
    if (this.negSessions.size >= NEG_MAX_CONCURRENT_SESSIONS) {
      this.sendNegErr(session.webSocket, subId, "blocked: too many active sync sessions on this relay node");
      return;
    }
    if (session.ip && !this.takeNegOpenBudget(session.ip)) {
      this.sendNegErr(session.webSocket, subId, "rate-limited: too many sync sessions from your network");
      return;
    }
    if (typeof filter !== "object" || filter === null) {
      this.sendNegErr(session.webSocket, subId, "invalid: filter must be an object");
      return;
    }
    const SYNC_FILTER_KEYS = /* @__PURE__ */ new Set(["ids", "authors", "kinds", "since", "until", "limit"]);
    for (const key of Object.keys(filter)) {
      if (key.startsWith("#"))
        continue;
      if (!SYNC_FILTER_KEYS.has(key)) {
        this.sendNegErr(session.webSocket, subId, `invalid: unsupported filter field '${key}' for sync`);
        return;
      }
    }
    if (typeof initialMessage !== "string" || !/^[0-9a-fA-F]*$/.test(initialMessage)) {
      this.sendNegErr(session.webSocket, subId, "invalid: initial message must be hex-encoded");
      return;
    }
    try {
      this.negSessions.delete(this.negKey(session.id, subId));
      this.reclaimIdleNegSessions();
      const { items, truncated } = await querySyncItems(filter, this.env);
      if (truncated) {
        this.sendNegErr(session.webSocket, subId, "blocked: this query is too big", String(NEG_MAX_ITEMS2));
        return;
      }
      const storage = new NegentropyStorageVector();
      for (const item of items) {
        storage.insertHex(item.created_at, item.id);
      }
      storage.seal();
      const neg = new Negentropy(storage, NEG_FRAME_SIZE_LIMIT);
      const result = neg.reconcile(hexToBytes2(initialMessage));
      this.negSessions.set(this.negKey(session.id, subId), {
        neg,
        ip: session.ip,
        filter,
        createdAt: Date.now(),
        itemCount: items.length
      });
      bumpMetric(this.env.RELAY_DATABASE.withSession("first-primary"), "neg_sessions").catch(() => void 0);
      dbg(`NEG-OPEN ${subId}: reconciling ${items.length} items for session ${session.id}`);
      this.sendNegMsg(session.webSocket, subId, bytesToHex2(result.message));
    } catch (error) {
      console.error("NEG-OPEN failed:", error);
      this.sendNegErr(session.webSocket, subId, `invalid: ${error.message || "bad negentropy message"}`);
    }
  }
  async handleNegMsg(session, message) {
    const [_, subId, theirMessage] = message;
    if (!subId || typeof subId !== "string") {
      this.sendError(session.webSocket, "Invalid NEG subscription ID");
      return;
    }
    const negSession = this.negSessions.get(this.negKey(session.id, subId));
    if (!negSession) {
      this.sendNegErr(session.webSocket, subId, "closed: no such NEG session (expired or never opened)");
      return;
    }
    if (typeof theirMessage !== "string" || !/^[0-9a-fA-F]*$/.test(theirMessage)) {
      this.sendNegErr(session.webSocket, subId, "invalid: message must be hex-encoded");
      this.negSessions.delete(this.negKey(session.id, subId));
      return;
    }
    try {
      negSession.createdAt = Date.now();
      const result = negSession.neg.reconcile(hexToBytes2(theirMessage));
      this.sendNegMsg(session.webSocket, subId, bytesToHex2(result.message));
    } catch (error) {
      console.error("NEG-MSG failed:", error);
      this.sendNegErr(session.webSocket, subId, `invalid: ${error.message || "bad negentropy message"}`);
      this.negSessions.delete(this.negKey(session.id, subId));
    }
  }
  async handleNegClose(session, message) {
    const [_, subId] = message;
    if (typeof subId === "string") {
      this.negSessions.delete(this.negKey(session.id, subId));
    }
  }
  // NIP-42: Handle AUTH message from client
  async handleAuth(session, authEvent) {
    try {
      if (!authEvent || typeof authEvent !== "object") {
        this.sendOK(session.webSocket, "", false, "invalid: auth event object required");
        return;
      }
      if (!authEvent.id || !authEvent.pubkey || !authEvent.sig || !authEvent.created_at || authEvent.kind === void 0 || !Array.isArray(authEvent.tags) || authEvent.content === void 0) {
        this.sendOK(session.webSocket, authEvent.id || "", false, "invalid: missing required fields");
        return;
      }
      if (authEvent.kind !== 22242) {
        this.sendOK(session.webSocket, authEvent.id, false, "invalid: auth event must be kind 22242");
        return;
      }
      const isValidSignature = await verifyEventSignature(authEvent);
      if (!isValidSignature) {
        this.sendOK(session.webSocket, authEvent.id, false, "invalid: signature verification failed");
        return;
      }
      const now = Math.floor(Date.now() / 1e3);
      const timeDiff = Math.abs(now - authEvent.created_at);
      const timeoutSeconds = AUTH_TIMEOUT_MS / 1e3;
      if (timeDiff > timeoutSeconds) {
        this.sendOK(session.webSocket, authEvent.id, false, "invalid: auth event created_at is too far from current time");
        return;
      }
      const challengeTag = authEvent.tags.find((tag) => tag[0] === "challenge");
      if (!challengeTag || !challengeTag[1]) {
        this.sendOK(session.webSocket, authEvent.id, false, "invalid: missing challenge tag");
        return;
      }
      if (!session.challenge) {
        this.sendOK(session.webSocket, authEvent.id, false, "invalid: no challenge was issued");
        return;
      }
      if (challengeTag[1] !== session.challenge) {
        this.sendOK(session.webSocket, authEvent.id, false, "invalid: challenge mismatch");
        return;
      }
      const relayTag = authEvent.tags.find((tag) => tag[0] === "relay");
      if (!relayTag || !relayTag[1]) {
        this.sendOK(session.webSocket, authEvent.id, false, "invalid: missing relay tag");
        return;
      }
      try {
        const authRelayUrl = new URL(relayTag[1]);
        const sessionHost = session.host.toLowerCase().replace(/:\d+$/, "");
        const authHost = authRelayUrl.host.toLowerCase().replace(/:\d+$/, "");
        if (authHost !== sessionHost) {
          this.sendOK(session.webSocket, authEvent.id, false, `invalid: relay URL mismatch (expected ${sessionHost})`);
          return;
        }
      } catch {
        this.sendOK(session.webSocket, authEvent.id, false, "invalid: malformed relay URL");
        return;
      }
      session.authenticatedPubkeys.add(authEvent.pubkey);
      if (this.paymentRequired()) {
        const paid = await hasPaidForRelay(authEvent.pubkey, this.env);
        if (paid !== null) {
          session.hasPaid = paid;
          this.setCachedPaymentStatus(authEvent.pubkey, paid);
        }
      }
      this.sendOK(session.webSocket, authEvent.id, true, "");
    } catch (error) {
      console.error("Error handling AUTH:", error);
      this.sendOK(session.webSocket, authEvent?.id || "", false, `error: ${error.message}`);
    }
  }
  async broadcastEvent(event) {
    await this.broadcastToLocalSessions(event);
    await this.broadcastToOtherDOs(event);
  }
  async broadcastToLocalSessions(event) {
    let broadcastCount = 0;
    const activeWebSockets = this.state.getWebSockets();
    for (const ws of activeWebSockets) {
      const attachment = ws.deserializeAttachment();
      if (!attachment)
        continue;
      let session = this.sessions.get(attachment.sessionId);
      if (!session) {
        const subscriptions = await this.loadSubscriptions(attachment.sessionId);
        session = this.createSession(
          attachment.sessionId,
          ws,
          attachment.bookmark,
          attachment.host,
          attachment.authenticatedPubkeys || [],
          attachment.challenge,
          attachment.hasPaid,
          subscriptions,
          attachment.ip
        );
        this.sessions.set(attachment.sessionId, session);
      }
      for (const [subscriptionId, filters] of session.subscriptions) {
        if (this.matchesFilters(event, filters)) {
          try {
            this.sendEvent(ws, subscriptionId, event);
            broadcastCount++;
          } catch (error) {
            console.error(`Error broadcasting to subscription ${subscriptionId}:`, error);
          }
        }
      }
    }
    if (broadcastCount > 0) {
      dbg(`Event ${event.id} broadcast to ${broadcastCount} local subscriptions on DO ${this.doName}`);
    }
  }
  async broadcastToOtherDOs(event) {
    const broadcasts = [];
    for (const endpoint of _RelayWebSocket.ALLOWED_ENDPOINTS) {
      if (endpoint === this.doName)
        continue;
      broadcasts.push(this.sendToSpecificDO(endpoint, event));
    }
    const results = await Promise.allSettled(
      broadcasts.map((p) => Promise.race([
        p,
        new Promise(
          (_, reject) => setTimeout(() => reject(new Error("Broadcast timeout")), 3e3)
        )
      ]))
    );
    const successful = results.filter((r) => r.status === "fulfilled").length;
    dbg(`Event ${event.id} broadcast from DO ${this.doName} to ${successful}/${broadcasts.length} remote DOs`);
  }
  async sendToSpecificDO(doName, event) {
    try {
      if (!_RelayWebSocket.ALLOWED_ENDPOINTS.includes(doName)) {
        throw new Error(`Invalid DO name: ${doName}`);
      }
      const id = this.env.RELAY_WEBSOCKET.idFromName(doName);
      const locationHint = _RelayWebSocket.ENDPOINT_HINTS[doName] || "auto";
      const stub = this.env.RELAY_WEBSOCKET.get(id, { locationHint });
      const url = new URL("https://internal/do-broadcast");
      url.searchParams.set("doName", doName);
      return await stub.fetch(new Request(url.toString(), {
        method: "POST",
        body: JSON.stringify({
          event,
          sourceDoId: this.doId
        })
      }));
    } catch (error) {
      console.error(`Failed to broadcast to ${doName}:`, error);
      throw error;
    }
  }
  matchesFilters(event, filters) {
    return filters.some((filter) => this.matchesFilter(event, filter));
  }
  matchesFilter(event, filter) {
    if (filter.ids && filter.ids.length > 0 && !filter.ids.includes(event.id)) {
      return false;
    }
    if (filter.authors && filter.authors.length > 0 && !filter.authors.includes(event.pubkey)) {
      return false;
    }
    if (filter.kinds && filter.kinds.length > 0 && !filter.kinds.includes(event.kind)) {
      return false;
    }
    if (filter.since && event.created_at < filter.since) {
      return false;
    }
    if (filter.until && event.created_at > filter.until) {
      return false;
    }
    for (const [key, values] of Object.entries(filter)) {
      if (key.startsWith("#") && Array.isArray(values) && values.length > 0) {
        const tagName = key.substring(1);
        const eventTagValues = event.tags.filter((tag) => tag[0] === tagName).map((tag) => tag[1]);
        const hasMatch = values.some((v) => eventTagValues.includes(v));
        if (!hasMatch) {
          return false;
        }
      }
    }
    if (typeof filter.search === "string" && filter.search.trim() !== "") {
      let parsed = this.parsedSearchCache.get(filter);
      if (!parsed) {
        parsed = parseSearchQuery(filter.search);
        this.parsedSearchCache.set(filter, parsed);
      }
      if (event.kind === SIP01_KIND && SIP01_ENABLED) {
        const fields = extractSip01Fields(event);
        if (!fields)
          return false;
        if (!matchSip01Search(parsed, { ...fields, indexer: event.pubkey })) {
          return false;
        }
      } else {
        const content = (event.content || "").toLowerCase();
        for (const kw of parsed.keywords) {
          if (!content.includes(kw))
            return false;
        }
        for (const ph of parsed.phrases) {
          if (!content.includes(ph.toLowerCase()))
            return false;
        }
      }
    }
    return true;
  }
  // -------------------------------------------------------------------------
  // Wire senders
  // -------------------------------------------------------------------------
  sendAuth(ws, challenge2) {
    try {
      const authMessage = ["AUTH", challenge2];
      ws.send(JSON.stringify(authMessage));
    } catch (error) {
      console.error("Error sending AUTH:", error);
    }
  }
  generateAuthChallenge() {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("");
  }
  sendOK(ws, eventId, status, message) {
    try {
      const okMessage = ["OK", eventId, status, message || ""];
      ws.send(JSON.stringify(okMessage));
    } catch (error) {
      console.error("Error sending OK:", error);
    }
  }
  sendError(ws, message) {
    try {
      const noticeMessage = ["NOTICE", message];
      ws.send(JSON.stringify(noticeMessage));
    } catch (error) {
      console.error("Error sending NOTICE:", error);
    }
  }
  sendEOSE(ws, subscriptionId) {
    try {
      const eoseMessage = ["EOSE", subscriptionId];
      ws.send(JSON.stringify(eoseMessage));
    } catch (error) {
      console.error("Error sending EOSE:", error);
    }
  }
  sendClosed(ws, subscriptionId, message) {
    try {
      const closedMessage = ["CLOSED", subscriptionId, message];
      ws.send(JSON.stringify(closedMessage));
    } catch (error) {
      console.error("Error sending CLOSED:", error);
    }
  }
  sendEvent(ws, subscriptionId, event) {
    try {
      const eventMessage = ["EVENT", subscriptionId, event];
      ws.send(JSON.stringify(eventMessage));
    } catch (error) {
      console.error("Error sending EVENT:", error);
    }
  }
  sendCount(ws, queryId, count, approximate = false) {
    try {
      const countMessage = ["COUNT", queryId, { count, approximate }];
      ws.send(JSON.stringify(countMessage));
    } catch (error) {
      console.error("Error sending COUNT:", error);
    }
  }
  sendNegMsg(ws, subId, hexMessage) {
    try {
      ws.send(JSON.stringify(["NEG-MSG", subId, hexMessage]));
    } catch (error) {
      console.error("Error sending NEG-MSG:", error);
    }
  }
  sendNegErr(ws, subId, reason, maxRecords) {
    try {
      const msg = ["NEG-ERR", subId, reason];
      if (maxRecords !== void 0)
        msg.push(maxRecords);
      ws.send(JSON.stringify(msg));
    } catch (error) {
      console.error("Error sending NEG-ERR:", error);
    }
  }
};
__name(_RelayWebSocket, "RelayWebSocket");
// Define allowed endpoints
_RelayWebSocket.ALLOWED_ENDPOINTS = [
  "relay-WNAM-primary",
  // Western North America
  "relay-ENAM-primary",
  // Eastern North America
  "relay-WEUR-primary",
  // Western Europe
  "relay-EEUR-primary",
  // Eastern Europe
  "relay-APAC-primary",
  // Asia-Pacific
  "relay-OC-primary",
  // Oceania
  "relay-SAM-primary",
  // South America (redirects to enam)
  "relay-AFR-primary",
  // Africa (redirects to weur)
  "relay-ME-primary"
  // Middle East (redirects to eeur)
];
// Map endpoints to their proper location hints
_RelayWebSocket.ENDPOINT_HINTS = {
  "relay-WNAM-primary": "wnam",
  "relay-ENAM-primary": "enam",
  "relay-WEUR-primary": "weur",
  "relay-EEUR-primary": "eeur",
  "relay-APAC-primary": "apac",
  "relay-OC-primary": "oc",
  "relay-SAM-primary": "enam",
  "relay-AFR-primary": "weur",
  "relay-ME-primary": "eeur"
};
var RelayWebSocket = _RelayWebSocket;

// entry.ts
var RelayWebSocket2 = RelayWebSocket;
var entry_default = relay_worker_default;
export {
  RelayWebSocket2 as RelayWebSocket,
  entry_default as default
};
/*! Bundled license information:

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/modular.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/curve.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/weierstrass.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/_shortw_utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/secp256k1.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
