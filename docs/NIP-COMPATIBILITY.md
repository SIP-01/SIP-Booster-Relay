# NIP compatibility

Honest support matrix. "Yes" means implemented and exercised by the
conformance suite or by design review against the NIP text; advertised in
`supported_nips` only when enabled.

| NIP | Name | Status | Notes |
|---|---|---|---|
| 01 | Basic protocol | ✅ | EVENT/REQ/CLOSE/OK/EOSE/CLOSED/NOTICE, filters incl. single-letter `#tag`, replaceable + addressable semantics, id hash + signature + future-`created_at` checks |
| 05 | Nostr address | ✅ | `/.well-known/nostr.json` for `nip05Users`; optional NIP-05-gated writes (off by default, local-store lookup only) |
| 09 | Deletion | ✅ | kind 5 with `e` ownership checks and `a` address deletion (kind/pubkey/d, `created_at` ceiling) |
| 11 | Relay information | ✅ | CORS-enabled; computed `supported_nips`; `limitation`; `fees`/`payments_url` when payment on; `uncaged_index` custom block |
| 16/33 | (folded into NIP-01) | ✅ | Ephemeral kinds 20000–29999 broadcast-not-stored; addressable kinds 30000–39999 one-live-slot per (kind, pubkey, d) |
| 42 | Authentication | ✅ | Challenge/AUTH round-trip, hibernation-safe, `auth-required:`/`restricted:` OK prefixes; optional (`AUTH_REQUIRED`) |
| 45 | COUNT | ✅ | `["COUNT", id, {count, approximate}]`; multiple plain filters OR'd with dedup (UNION); complexity-guarded. Relay-profile extension: `search` supported for kind 39697 filters (full operator set + `distinct:author`/`distinct:domain`); `search` on other kinds refused with `CLOSED` |
| 50 | Search | ✅ | `search` field; SIP-01 operators for kind 39697 (ranked) with relay-profile semantics (`before:`/`after:` → `published`; repeated ops OR; `language:` alias for `lang:`); content substring matching for other kinds; unknown extensions ignored |
| 25 | Reactions | ✅ | Kinds 7 and 17 are accepted and returned as ordinary NIP-01 events; web reactions can be queried with NIP-73 `#k` and `#i` |\n| 32 | Labeling | ✅ | Kind 1985 is stored and filterable as a generic NIP-01 event; label semantics and trust evaluation remain client/provider policy |\n| 40 | Expiration | ✅ | Malformed/expired events are rejected at ingestion; expired events are excluded from REQ, COUNT, NIP-77 sync, and cached query responses |
| 51 | Lists | ✅ | Kinds 10003 and 30003 use generic NIP-01 replaceable/addressable semantics; private list content remains opaque NIP-44 ciphertext |
| 73 | External identifiers | ✅ | NIP-73 `i` and `k` tags are retained and indexed (including backfill from schema v12) |\n| 85 | Trusted Assertions | transport | Kinds 10040 and 30382–30385 are accepted and queryable; this relay does not produce, verify provider identity, or calculate trust scores |\n| 89 | Recommended handlers | ✅ | Kinds 31989 and 31990 are accepted/queryable as NIP-01 addressable events |\n| 90 | Data Vending Machines | opt-in | Kinds 5000–5999, 6000–6999 and 7000 are accepted only when `NIP90_ENABLED=true`; relay transports jobs but does not execute them or verify off-relay payment |
| 77 | Negentropy sync | ✅ | NEG-OPEN/NEG-MSG/NEG-CLOSE/NEG-ERR; Negentropy V1 (version byte 0x61), frame-size-limited splitting, per-session item cap |
| 57 | Zaps | partial | kind 9735 receipts verified for the optional pay-to-relay policy (not a zap service) |

Not implemented / not advertised: NIP-02, 04, 65 (client-side or
out of scope for an index relay); NIP-13 PoW (config placeholder only);
NIP-40 expiration (events are retained per pruning policy);
NIP-70 relay-gated writes (use allowlists instead).

## NIP-25 / NIP-73 / bookmark interoperability

The SIP-focused write profile explicitly accepts these interoperable event
families. They use generic NIP-01 storage and query paths; the relay does not
rewrite, decrypt, or infer private meaning from their payloads.

- Native NIP-25 reactions (kind 7) and external-content reactions (kind 17)
  are accepted by the generic event path.
- NIP-73 external identifiers and NIP-25 web reactions use single-letter
  tags i and k. Both are indexed by schema v12, including a backfill for
  events already stored before the upgrade.
- NIP-51 bookmark lists (kinds 10003 and 30003) and NIP-B0 public bookmarks
  (kind 39701) are stored and returned as generic events. The relay does not
  decrypt private NIP-51 content.
- NIP-32 label events (kind 1985) are accepted and filterable. The relay does\n  not decide whether a labeler is reputable; clients must apply their own\n  trust policy and show provenance.\n- NIP-89 handler announcements/recommendations (kinds 31990/31989) are\n  accepted as generic addressable events. Clients must protect against\n  malicious handler redirects and allow users to control recommendations.\n- NIP-85 provider lists (kind 10040) and assertions (kinds 30382–30385) are
  accepted and transported as generic NIP-01 addressable events. This relay is
  **not** an NIP-85 scoring provider: it does not calculate, sign, or endorse
  trust assertions. The consuming engine must select the provider, verify its
  signatures and service identity, and match the exact target subject.

A kind-17 web-reaction query can use a baseline filter with kinds [17],
tag k equal to web, and tag i equal to the normalized URL. Those tag filters
work on fresh databases and upgraded databases after migration v12. The SIP-
focused write allowlist also accepts the above bookmark and assertion kinds;
no private NIP-51 URL is published in a public NIP-B0 event.

## Message-level summary

Client → relay: `EVENT`, `REQ`, `CLOSE`, `COUNT`, `AUTH`, `NEG-OPEN`,
`NEG-MSG`, `NEG-CLOSE`.
Relay → client: `EVENT`, `EOSE`, `OK`, `NOTICE`, `CLOSED`, `COUNT`,
`AUTH` (challenge), `NEG-MSG`, `NEG-ERR`.

## Intentional limits

- `max_message_length` 256 KB (close code 1009 beyond).
- `limit` clamped to 500 (NIP-11 `max_limit`), `default_limit` 100 for
  searches.
- Tag filters on multi-letter tag names are evaluated through the generic
  tags table (not indexed); single-letter tags use the cache.


## DVM and payment relay separation

- NIP-90 is an explicit operator opt-in (`NIP90_ENABLED=true`). The relay
  stores job requests (5000–5999), results (6000–6999) and feedback (7000)
  using generic NIP-01 semantics; it does not run compute, select providers,
  or claim a payment was made. Result kind is request kind + 1000.
- Public NIP-57 zap receipts (kind 9735) are accepted; the existing relay-pay
  flow verifies receipts for access. A plain stored receipt is not a universal
  proof that an unrelated DVM invoice was paid.
- NIP-47 wallet info (13194) may be public service metadata, but encrypted
  wallet requests/responses (23194/23195) should use an authenticated wallet
  relay, not a public search index. NIP-60 wallet/token events
  (17375/7375/7376) are personal encrypted wallet state and require owner-only
  relay access. NIP-61 nutzaps (9321) are a separate public ecash payment
  convention; they require Cashu validation by a wallet/mint-aware service.
- NIP-17 gift wraps (1059) should be served only to the p-tagged recipient
  under NIP-42 AUTH; the default SIP-only profile intentionally excludes them.
  NIP-98 HTTP AUTH (27235) belongs at authenticated HTTP API boundaries, not
  as a stored relay event.
