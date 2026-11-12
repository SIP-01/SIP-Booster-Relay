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
| 77 | Negentropy sync | ✅ | NEG-OPEN/NEG-MSG/NEG-CLOSE/NEG-ERR; Negentropy V1 (version byte 0x61), frame-size-limited splitting, per-session item cap |
| 57 | Zaps | partial | kind 9735 receipts verified for the optional pay-to-relay policy (not a zap service) |

Not implemented / not advertised: NIP-02, 04, 17, 65 (client-side or
out of scope for an index relay); NIP-13 PoW (config placeholder only);
NIP-40 expiration (events are retained per pruning policy);
NIP-70 relay-gated writes (use allowlists instead).

## NIP-25 / NIP-73 / bookmark interoperability

This relay treats these event kinds as ordinary NIP-01 events; it does not
rewrite or decrypt their payloads.

- Native NIP-25 reactions (kind 7) and external-content reactions (kind 17)
  are accepted by the generic event path.
- NIP-73 external identifiers and NIP-25 web reactions use single-letter
  tags i and k. Both are indexed by schema v12, including a backfill for
  events already stored before the upgrade.
- NIP-51 bookmark lists (kinds 10003 and 30003) and NIP-B0 public bookmarks
  (kind 39701) are stored and returned as generic events. The relay does not
  decrypt private NIP-51 content.
- NIP-85 provider lists (kind 10040) and assertion events (kinds 30382–30385)
  are generic NIP-01 events. The relay does not calculate or endorse trust
  scores; the client verifies the selected provider, signature and subject.

A kind-17 web-reaction query can use a baseline filter with kinds [17],
tag k equal to web, and tag i equal to the normalized URL. These tag filters
work on fresh databases and upgraded databases after migration v12.

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
