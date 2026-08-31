import { x402Client } from "@x402/core/client";
import { ExactEvmScheme } from "@x402/evm/exact/client";
import { wrapFetchWithPayment, x402HTTPClient } from "@x402/fetch";
import { privateKeyToAccount } from "viem/accounts";

const privateKey = process.env.EVM_PRIVATE_KEY as `0x${string}` | undefined;
if (!privateKey) throw new Error("Set EVM_PRIVATE_KEY in your secret manager.");

const signer = privateKeyToAccount(privateKey);
const client = new x402Client();
client.register("eip155:*", new ExactEvmScheme(signer));

const paidFetch = wrapFetchWithPayment(fetch, client);
const httpClient = new x402HTTPClient(client);
const response = await paidFetch("https://greatergood.site/v1/grants/search", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    keyword: "rural clean water",
    statuses: ["posted", "forecasted"],
    rows: 5,
  }),
});

const result = await httpClient.processResponse(response);
console.log(JSON.stringify(result.body, null, 2));
