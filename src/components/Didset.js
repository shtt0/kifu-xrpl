"use client";

import React, { useState } from "react";
import { useUser } from "@/components/UserProvider";
import { convertStringToHex } from "xrpl";
import { createPayload } from "@/lib/payload";

export const DIDSetComponent = () => {
  const { xumm, user } = useUser();
  const [fileContent, setFileContent] = useState("");
  const [status, setStatus] = useState("");

  const handleFileChange = (event) => {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setFileContent(e.target.result);
    };
  };

  const handleDIDSet = async () => {
    if (user.account && fileContent) {
      const uri = convertStringToHex(fileContent);
      const payload = await createPayload({
        TransactionType: "DIDSet",
        Account: user.account,
        URI: uri,
      });

      try {
        const response = await xumm.submit(payload);
        setStatus(`Transaction submitted: ${response}`);
      } catch (error) {
        console.error("Error submitting DIDSet transaction:", error);
        setStatus("Failed to submit DIDSet transaction.");
      }
    } else {
      setStatus("No account or file content available.");
    }
  };

  return (
    <div className="DIDSetComponent">
      <input
        type="file"
        onChange={handleFileChange}
        className="input input-bordered"
      />
      {fileContent && (
        <pre className="p-2 m-2 bg-base-200 rounded">{fileContent}</pre>
      )}
      <button onClick={handleDIDSet} className="btn btn-primary mt-2">
        Set DID
      </button>
      <p>{status}</p>
    </div>
  );
};
