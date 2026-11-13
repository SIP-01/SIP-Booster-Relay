/**
 * Event kinds accepted by the SIP-focused relay profile in addition to
 * relay-control/operational kinds. The relay stores these as generic Nostr
 * events and applies NIP-01 replaceable/addressable/deletion semantics.
 * It does not decrypt NIP-51 data or calculate NIP-85 trust scores.
 */
export const SIP01_NOSTR_COMPATIBLE_KINDS = Object.freeze([
  39697, // SIP-01 web-index observation
  7,     // NIP-25 reaction to a native Nostr event
  17,    // NIP-25 reaction to external content, using NIP-73 i/k tags
  10003, // NIP-51 global bookmark list
  30003, // NIP-51 categorized bookmark set
  1985,  // NIP-32 distributed label
  39701, // optional NIP-B0 public web bookmark
  10040, // NIP-85 trusted-provider list (transport only)
  30382, // NIP-85 user assertion (transport only)
  30383, // NIP-85 event assertion (transport only)
  30384, // NIP-85 addressable-event assertion (transport only)
  30385, // NIP-85 external-identifier assertion (transport only)
  31989, // NIP-89 application handler recommendation
  31990, // NIP-89 application handler information
]);

/** NIP-90 job requests 5000-5999, results 6000-6999, feedback 7000. */
export function isNip90EventKind(kind) {
  return Number.isSafeInteger(kind) &&
    ((kind >= 5000 && kind <= 6999) || kind === 7000);
}

/**
 * Validate NIP-40 expiration tags and report whether an event is expired.
 * With multiple valid tags the earliest timestamp wins (conservative expiry).
 * Malformed expiration tags are rejected by the relay, not silently ignored.
 */
export function evaluateEventExpiration(tags, nowSeconds = Math.floor(Date.now() / 1000)) {
  const rows = (Array.isArray(tags) ? tags : []).filter(
    (tag) => Array.isArray(tag) && tag[0] === 'expiration',
  );
  if (rows.length === 0) return { valid: true, expired: false, expiresAt: null };
  const values = rows.map((row) => row[1]);
  if (values.some((value) => typeof value !== 'string' || !/^\\d+$/.test(value))) {
    return { valid: false, expired: false, expiresAt: null };
  }
  const timestamps = values.map(Number);
  if (timestamps.some((value) => !Number.isSafeInteger(value) || value < 0)) {
    return { valid: false, expired: false, expiresAt: null };
  }
  const expiresAt = Math.min(...timestamps);
  return { valid: true, expired: expiresAt <= nowSeconds, expiresAt };
}

