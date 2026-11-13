/** Nostr event families accepted by the SIP-focused relay profile. */
export const SIP01_NOSTR_COMPATIBLE_KINDS = Object.freeze([
  39697, 7, 17, 10003, 30003, 1985, 39701,
  10040, 30382, 30383, 30384, 30385, 31989, 31990,
]);

export function isNip90EventKind(kind) {
  return Number.isSafeInteger(kind) && ((kind >= 5000 && kind <= 6999) || kind === 7000);
}

export function isSip01EventKindAllowed(kind, allowNip90 = false, heartbeatKind = 16919) {
  return SIP01_NOSTR_COMPATIBLE_KINDS.includes(kind) ||
    kind === 5 || kind === 9735 || kind === heartbeatKind || kind === 39698 ||
    (allowNip90 && isNip90EventKind(kind));
}

export function evaluateEventExpiration(tags, nowSeconds = Math.floor(Date.now() / 1000)) {
  const rows = (Array.isArray(tags) ? tags : []).filter(
    (tag) => Array.isArray(tag) && tag[0] === 'expiration',
  );
  if (rows.length === 0) return { valid: true, expired: false, expiresAt: null };
  const values = rows.map((row) => row[1]);
  if (values.some((value) => typeof value !== 'string' || value.length === 0 ||
    Array.from(value).some((char) => char < '0' || char > '9'))) {
    return { valid: false, expired: false, expiresAt: null };
  }
  const timestamps = values.map(Number);
  if (timestamps.some((value) => !Number.isSafeInteger(value) || value < 0)) {
    return { valid: false, expired: false, expiresAt: null };
  }
  const expiresAt = Math.min(...timestamps);
  return { valid: true, expired: expiresAt <= nowSeconds, expiresAt };
}
