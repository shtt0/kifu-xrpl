import { useState } from "react";
import "../index.css"; // Ensure you import the CSS file
import { useNavigate } from "react-router-dom";
import Payment from "../components/Payment";

const { Xumm } = require("xumm");

const xumm = new Xumm("2ebc29cd-4062-47b5-98d7-8ca2a1e633a3");

const HomePage = () => {
  const [account, setAccount] = useState(undefined);
  const navigate = useNavigate();

  xumm.user.account.then((account) => setAccount(account));

  const connect = async () => {
    // Xummでサインイン
    await xumm.authorize();
    navigate(`/profile/${account}`);
  };

  const disconnect = async () => {
    // Xummからサインアウト
    await xumm.logout();
    // アカウント情報を削除
    setAccount(undefined);
  };

  const createTransaction = async () => {
    const payload = await xumm.payload?.create({
      TransactionType: "Payment",
      Destination: "rQQQrUdN1cLdNmxH4dHfKgmX5P4kf3ZrM",
      Amount: "100", // 100 drops (=0.000100XRP)
    });
    if (!payload?.pushed) {
      // Xummへプッシュ通知が届かない場合
      // payload?.refs.qr_png を利用してQRコードを表示することで署名画面を表示することも可能
    }
  };

  return (
    <div className="app-container">
      <div className="header-text">LIGHTNING KIFU NETWORK on XRP Ledger</div>
      <div className="support-text">未来の成功の支援をしましょう</div>
      <div className="wallet-connect-container">
        {!account && (
          <button onClick={connect} className="wallet-connect-button">
            Wallet Connect
          </button>
        )}
        {account && (
          <>
            <div>{account}</div>
            <button onClick={disconnect} className="wallet-connect-button">
              Disconnect
            </button>
            <Payment createTransaction={createTransaction} />
          </>
        )}
      </div>
      <button
        onClick={() => navigate("/search")}
        className="wallet-connect-button"
      >
        Search Page
      </button>
    </div>
  );
};

export default HomePage;
