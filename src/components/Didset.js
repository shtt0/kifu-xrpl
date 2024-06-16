"use client";

import React, { useState } from "react";
import { convertStringToHex } from "xrpl";
import { Xumm } from "xumm";
import "../index.css";

const xumm = new Xumm("9e14cd6e-166c-4f70-9f59-f7e5d4d3cf0e");

export const DidSet = () => {
  const [fileContent, setFileContent] = useState("");
  const [status, setStatus] = useState("");
  const [account, setAccount] = useState("");

  const handleFileChange = (event) => {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], "UTF-8");
    fileReader.onload = (e) => setFileContent(e.target.result);
  };

  const connectWallet = async () => {
    try {
      await xumm.authorize();
      const account = await xumm.user.account;
      setAccount(account);
    } catch (error) {
      console.error("Failed to connect wallet", error);
    }
  };

  const handleDIDSet = async () => {
    if (!account) {
      setStatus("Wallet is not connected.");
      return;
    }

    try {
      const jsonData = JSON.parse(fileContent);
      const didDocument = convertStringToHex(JSON.stringify(jsonData));

      const payload = await xumm.payload.create({
        txjson: {
          TransactionType: "DIDSet",
          Account: account,
          DIDDocument: didDocument,
        },
        options: {
          force_network: "TESTNET", // Using TESTNET
        },
        custom_meta: {
          identifier: "did-set-transaction",
          instruction:
            "Please sign this DIDSet transaction to update your DID.",
        },
      });

      xumm.xapp.openSignRequest(payload);

      setStatus("Payload created, waiting for user to sign the transaction.");
    } catch (error) {
      console.error("Error submitting DIDSet transaction:", error);
      setStatus("Failed to submit DIDSet transaction.");
    }
  };

  return (
    <div>
      <button onClick={connectWallet} className="btn btn-primary">
        Connect Wallet
      </button>
      <p></p>
      {account && <p>Connected account: {account}</p>}
      <input
        type="file"
        onChange={handleFileChange}
        className="input input-bordered"
      />
      {fileContent && <pre>{fileContent}</pre>}
      <p>※JSON sampleはuni-json.jsを参照</p>

      <button onClick={handleDIDSet} className="btn btn-primary">
        Set DID（エラー中…）
      </button>
      <p>{status}</p>
    </div>
  );
};
