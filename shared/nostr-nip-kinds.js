/**
 * Event kinds accepted by the SIP-focused relay profile in addition to
 * relay-control/operational kinds. Generic Nostr semantics (replaceable and
 * addressable storage, deletion, tag filters) remain handled by the relay.
 */
export const SIP01_NOSTR_COMPATIBLE_KINDS = Object.freeze([
  39697,
]);
