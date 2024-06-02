const xrpl = require("xrpl");
const fs = require("fs");
const path = require("path");

async function sendTransaction() {
  const client = new xrpl.Client("wss://s1.ripple.com"); // 実際の環境に応じて変更してください。
  await client.connect();

  const wallet = xrpl.Wallet.fromSeed("MY_SECRET"); // 実際のシークレットを使用

  const transactionJSON = fs.readFileSync(
    path.join(__dirname, "DIDmanagment", "DIDset.json"),
    "utf8"
  );
  const transaction = JSON.parse(transactionJSON);

  const prepared = await client.autofill(transaction);
  const signed = wallet.sign(prepared);
  const result = await client.submitAndWait(signed.tx_blob);

  console.log(result);
  client.disconnect();
}

sendTransaction().catch(console.error);
