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
  39701, // NIP-B0 public web bookmark
  10040, // NIP-85 trusted-provider list (transport only)
  30382, // NIP-85 user assertion (transport only)
  30383, // NIP-85 event assertion (transport only)
  30384, // NIP-85 addressable-event assertion (transport only)
  30385, // NIP-85 external-identifier assertion (transport only)
]);
