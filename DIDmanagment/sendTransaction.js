require("dotenv").config(); // .env ファイルから環境変数をロード
const { sendTransaction } = require("./sendTransaction.1");

sendTransaction().catch(console.error);
