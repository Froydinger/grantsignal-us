# GrantSignal US

Account-free, pay-per-call U.S. federal grant discovery for AI agents. GrantSignal turns current Grants.gov public records into structured search, official opportunity detail, transparent mission-fit scoring, sourced briefs, and deterministic shortlist checks.

No API key is required. Calls settle in USDC on Base mainnet using x402 v2.

## Start here

- Agent instructions: https://greatergood.site/skill.md
- Quickstart: https://greatergood.site/grants/quickstart
- OpenAPI 3.1: https://greatergood.site/openapi.json
- x402 manifest: https://greatergood.site/.well-known/x402
- Free $5-result preview: https://greatergood.site/api/grants/preflight-sample
- Human overview: https://greatergood.site/grants

## Pricing

| Route | Purpose | Price |
|---|---|---:|
| `POST /v1/grants/search` | Current opportunity search | $0.05 |
| `GET /v1/grants/opportunities/:id` | Official opportunity detail | $0.08 |
| `POST /v1/grants/fit` | Transparent mission-fit ranking | $0.20 |
| `POST /v1/grants/brief` | Sourced application-research brief | $0.50 |
| `POST /v1/grants/preflight` | Deterministic shortlist preflight | $5.00 |
| `POST /v1/grants/pass` | 30-day pass, up to 1,000 calls | $15.00 |

Prices are quoted by the live HTTP 402 response and remain authoritative.

## Inspect before paying

```bash
curl -i -X POST https://greatergood.site/v1/grants/search \
  -H 'content-type: application/json' \
  -d '{"keyword":"rural clean water","statuses":["posted","forecasted"],"rows":5}'
```

The unpaid request returns HTTP `402` with a `PAYMENT-REQUIRED` challenge. An x402-compatible client signs the quoted EIP-3009 authorization and retries the identical request with `PAYMENT-SIGNATURE`.

## JavaScript buyer

Install the x402 client packages and use [examples/search.ts](examples/search.ts):

```bash
npm install @x402/core @x402/evm @x402/fetch viem
EVM_PRIVATE_KEY=0x... npx tsx examples/search.ts
```

The private key remains in the buyer process. GrantSignal receives only the x402 payment payload required to settle the request.

## Response principles

- Official source URLs and access timestamps are included.
- Deadline and applicant-type checks are rules over retrieved records, not eligibility decisions.
- A match is not an award prediction, legal advice, or government endorsement.
- Live issuing-agency notices remain controlling.

GrantSignal is an independent Greater Good Grants product and is not affiliated with or endorsed by Grants.gov or any U.S. agency.

## Publisher

Greater Good Publishing by Win The Night™ Foundation. News for the love of humanity.
