import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"; // Ensure you import the CSS file

const SearchResultsPage = ({ results, disconnect }) => {
  const navigate = useNavigate();

  return (
    <div className="search-results-container">
      <div className="header">
        <button className="back-button">&larr;</button>
        <div className="header-text">{results.length} 人が見つかりました</div>
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
      <div className="sort-options">
        <a href="#" className="sort-link">
          並び替え
        </a>
      </div>
      <div className="results-list">
        {results.map((result, index) => (
          <div key={index} className="result-item">
            <div className="result-icon"></div>
            <div className="result-info">
              <h1>{result.name}</h1>
              <p>{result.occupation}</p>
              <div className="did-list">
                {result.didList.map((did, index) => (
                  <span key={index} className="did-item">
                    {did}
                  </span>
                ))}
              </div>
              <p>{result.introduction}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="selected-filters">
        <button className="filter-button">
          東京大学在籍 | アラビア語専攻中
        </button>
      </div>
    </div>
  );
};

export default SearchResultsPage;
