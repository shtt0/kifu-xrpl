import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserProfile } from "../services/spreadsheetService";
import Payment from "../components/Payment"; // Import the Payment component
import "../index.css"; // Use the index.css file for styles

const ProfilePage = ({ disconnect }) => {
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getUserProfile(userId);
      setProfile(data);
    };
    fetchProfile();
  }, [userId]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  const createTransaction = async () => {
    // Implement your transaction logic here
    // For example, use profile data to create a transaction
    console.log("Creating transaction for", profile.name);
  };

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
        <div className="profile-icon"></div>
        <div className="profile-info">
          <h1>{profile.name}</h1>
          <p>{profile.occupation}</p>
        </div>
      </div>
      <div className="profile-section">
        <h2>自己紹介文</h2>
        <p>{profile.introduction}</p>
        <a href="#" className="more-link">
          See more
        </a>
      </div>
      <div className="donation-section">
        <h2>寄付を受けた総額 / 必要な寄付金額</h2>
        <p>
          {profile.receivedAmount} / {profile.requiredAmount} XRP
        </p>
        <a href="#" className="more-link">
          必要な寄付金額の根拠を見る
        </a>
      </div>
      <div className="history-section">
        <h2>これまでに寄付を行った総額</h2>
        <p>{profile.totalDonations} XRP</p>
        <div className="recent-donation">
          <p>{profile.recentDonationLocation}</p>
          <p>
            {profile.recentDonationAmount} XRP | {profile.recentDonationDate}
          </p>
        </div>
        <a href="#" className="more-link">
          過去の寄付履歴を見る
        </a>
      </div>
      <div className="did-section">
        <h2>保有するDID一覧</h2>
        <div className="did-list">
          {profile.didList.map((did, index) => (
            <span key={index} className="did-item">
              {did}
            </span>
          ))}
        </div>
      </div>
      <Payment createTransaction={createTransaction} />{" "}
      {/* Use Payment component */}
    </div>
  );
};

export default ProfilePage;
