import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"; // Ensure you import the CSS file

const SearchPage = ({ disconnect }) => {
  const navigate = useNavigate();

  const navigateToResults = () => {
    navigate("/search-results");
  };

  return (
    <div className="search-container">
      <div className="header">
        <div className="header-text">支援する人を探す</div>
        <div className="header-actions">
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
      <div className="search-section">
        <div className="search-label">フリーワード検索で探す</div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button" onClick={navigateToResults}>
            &#x27A4;
          </button>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-label">保有しているDIDから探す</div>
        <div className="filter-options">
          <div>
            <input type="checkbox" id="tokyo-current" />
            <label htmlFor="tokyo-current">東京大学在籍</label>
          </div>
          <div>
            <input type="checkbox" id="tokyo-grad" />
            <label htmlFor="tokyo-grad">東京大学卒</label>
          </div>
          <div>
            <input type="checkbox" id="arabic-current" />
            <label htmlFor="arabic-current">アラビア語専攻中</label>
          </div>
          <div>
            <input type="checkbox" id="arabic-grad" />
            <label htmlFor="arabic-grad">アラビア語専攻卒</label>
          </div>
          <div>
            <input type="checkbox" id="fujisawa" />
            <label htmlFor="fujisawa">富良野市出身</label>
          </div>
          <div>
            <input type="checkbox" id="naha" />
            <label htmlFor="naha">那覇市出身</label>
          </div>
          <div>
            <input type="checkbox" id="gpa" />
            <label htmlFor="gpa">GPA4.0を2年以上取得</label>
          </div>
          <div>
            <input type="checkbox" id="pharma" />
            <label htmlFor="pharma">薬膳コーディネーター</label>
          </div>
          <div>
            <input type="checkbox" id="santa" />
            <label htmlFor="santa">公認サンタクロース</label>
          </div>
          <div>
            <input type="checkbox" id="medical-current" />
            <label htmlFor="medical-current">医学部在籍</label>
          </div>
          <div>
            <input type="checkbox" id="scholarship" />
            <label htmlFor="scholarship">奨学金受給大学生</label>
          </div>
          <div>
            <input type="checkbox" id="noto" />
            <label htmlFor="noto">能登市在住</label>
          </div>
        </div>
      </div>
      <div className="more-options">さらにDID一覧を見る</div>
      <button onClick={navigateToResults} className="search-submit-button">
        検索を実行する
      </button>
    </div>
  );
};

export default SearchPage;
