import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Payment from "../components/Payment";
import "../index.css";

const ProfilePage = ({ disconnect }) => {
  const { userId } = useParams();
  const navigate = useNavigate();

  // 静的なプロファイルデータの定義
  const profile = {
    name: "John Doe",
    occupation: "Student",
    introduction: "Studying at Tokyo University, majoring in Arabic.",
    didList: ["東京大学在籍", "アラビア語専攻中"],
    receivedAmount: 100,
    requiredAmount: 500,
    totalDonations: 300,
    recentDonationLocation: "Tokyo",
    recentDonationAmount: 50,
    recentDonationDate: "2021-09-01",
  };

  const createTransaction = async () => {
    console.log("Creating transaction for", profile.name);
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <button className="back-button">&larr;</button>
        <div className="profile-actions">
          <button onClick={disconnect} className="header-button">
            Disconnect
          </button>
          <button
            onClick={() => navigate("/profile/myProfileId")}
            className="header-icon"
          >
            👤
          </button>
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-info">
          <h1>{profile.name}</h1>
          <p>{profile.occupation}</p>
          <p>{profile.introduction}</p>
        </div>
      </div>
      <Payment createTransaction={createTransaction} />
    </div>
  );
};

export default ProfilePage;
