import React from "react";
import "../index.css"; // Ensure you import the CSS file

const Payment = ({ createTransaction }) => {
  return (
    <button onClick={createTransaction} className="wallet-connect-button">
      寄付をする
    </button>
  );
};

export default Payment;
