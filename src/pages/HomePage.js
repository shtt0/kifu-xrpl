import "../index.css"; // Ensure you import the CSS file
import { useNavigate } from "react-router-dom";
import Payment from "../components/Payment";

const HomePage = () => {
  const navigate = useNavigate();

  const createTransaction = async () => {
    // Ensure xumm is available globally or passed as a prop
    const payload = await window.xumm.payload?.create({
      TransactionType: "Payment",
      Destination: "rQQQrUdN1cLdNmxH4dHfKgmX5P4kf3ZrM",
      Amount: "100", // 100 drops (=0.000100XRP)
    });
    if (!payload?.pushed) {
      // Handle case where push notification was not received
    }
  };

  return (
    <div className="app-container">
      <div className="header-text">LIGHTNING KIFU NETWORK on XRP Ledger</div>
      <div className="support-text">未来の成功の支援をしましょう</div>
      <div className="wallet-connect-container">
        <Payment createTransaction={createTransaction} />
      </div>
      <button
        onClick={() => navigate("/search")}
        className="wallet-connect-button"
      >
        Search Page（準備中）
      </button>
      <button
        onClick={() => navigate("/register")}
        className="wallet-connect-button"
      >
        DIDset Page（エラー中…）
      </button>
    </div>
  );
};

export default HomePage;
