# Genuine Good Grants API

Account-free, pay-per-call U.S. federal grant discovery for AI agents, grant software, and small research teams. Genuine Good Grants turns current Grants.gov public records into structured search, official opportunity detail, transparent mission-fit scoring, sourced briefs, and deterministic shortlist checks.

No API key is required. Calls settle in USDC on Base mainnet using x402 v2.

## Start here

- Agent overview: https://genuinegood.online/grants/agents
- Agent instructions: https://genuinegood.online/skill.md
- Quickstart: https://genuinegood.online/grants/quickstart
- OpenAPI 3.1: https://genuinegood.online/openapi.json
- x402 manifest: https://genuinegood.online/.well-known/x402
- Free $5-result preview: https://genuinegood.online/api/grants/preflight-sample
- Human overview: https://genuinegood.online/grants

## Discovery and verification

- Live 402 Index directory: https://402index.io/directory?q=genuinegood.online
- x402scan listing request: https://github.com/Merit-Systems/x402scan/issues/1163
- Public API source: https://github.com/Froydinger/grantsignal-us

These links are provided for discovery and independent verification. Directory review and indexing status are controlled by the directory maintainers.

## Choose the first call

If you already have one to five Grants.gov opportunity IDs, start with the free preview to inspect the output shape, then use the $5 preflight. If you are building a repeated research workflow, the non-renewing $15 pass covers 30 days or 1,000 calls, whichever comes first.

## Pricing

| Route | Purpose | Price |
|---|---|---:|
| `POST or GET /v1/grants/search` | Current opportunity search | $5.00 |
| `POST or GET /v1/grants/detail` | Official opportunity detail | $5.00 |
| `POST or GET /v1/grants/fit` | Transparent mission-fit ranking | $5.00 |
| `POST or GET /v1/grants/brief` | Sourced application-research brief | $5.00 |
| `POST or GET /v1/grants/preflight` | Deterministic shortlist preflight | $5.00 |
| `POST /v1/grants/pass` | Non-renewing 30-day pass, up to 1,000 calls | $15.00 |

Prices in this table mirror the current live catalog. The HTTP 402 response and its `PAYMENT-REQUIRED` header are authoritative for each request.

## Inspect before paying

~~~bash
curl -i -X POST https://genuinegood.online/v1/grants/search -H 'content-type: application/json' -d '{"keyword":"rural clean water","statuses":["posted","forecasted"],"rows":5}'
~~~

The unpaid request returns HTTP `402` with a `PAYMENT-REQUIRED` challenge. An x402-compatible client signs the quoted EIP-3009 authorization and retries the identical request with `PAYMENT-SIGNATURE`. A successful retry returns JSON plus `PAYMENT-RESPONSE`.

## JavaScript buyer

Install the x402 client packages and use [examples/search.ts](examples/search.ts):

~~~bash
npm install @x402/core @x402/evm @x402/fetch viem
EVM_PRIVATE_KEY=0x... npx tsx examples/search.ts
~~~

The example sets x402's spend cap to $15 so it can cover the highest-priced pass. A buyer needs an EVM wallet with USDC on Base mainnet and a small amount of ETH on Base for gas. A BTC/BCH-only wallet cannot sign this payment; a multichain wallet with Base enabled can. The private key remains in the buyer process; Genuine Good receives only the x402 payment payload required to settle the request.

## Response principles

- Official source URLs and access timestamps are included.
- Deadline and applicant-type checks are rules over retrieved records, not eligibility decisions.
- A match is not an award prediction, legal advice, or government endorsement.
- Live issuing-agency notices remain controlling.

Genuine Good Grants is an independent product and is not affiliated with or endorsed by Grants.gov or any U.S. agency.

## Publisher

Genuine Good News by Win The Night™ Foundation. News for the love of humanity.
