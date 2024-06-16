import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Xumm } from "xumm";

const xumm = new Xumm("9e14cd6e-166c-4f70-9f59-f7e5d4d3cf0e");

const Header = () => {
  const [account, setAccount] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    xumm.user.account.then((account) => setAccount(account));
  }, []);

  const connect = async () => {
    try {
      await xumm.authorize();
      const account = await xumm.user.account;
      setAccount(account);
    } catch (error) {
      console.error("Failed to connect wallet", error);
    }
  };

  const disconnect = async () => {
    try {
      await xumm.logout();
      setAccount(undefined);
    } catch (error) {
      console.error("Failed to disconnect wallet", error);
    }
  };

  return (
    <div className="header">
      <div className="header-left">
        <h1 onClick={() => navigate("/")}>TEST VER</h1>
      </div>
      <div className="header-right">
        {!account ? (
          <button onClick={connect} className="wallet-connect-button">
            Wallet Connect
          </button>
        ) : (
          <>
            <button className="wallet-connect-button">{account}</button>
            <button onClick={disconnect} className="wallet-connect-button">
              Disconnect
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
