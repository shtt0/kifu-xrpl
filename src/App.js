import { XummSdk } from "xumm-sdk";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"; // Ensure you import the CSS file
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
// import ProfilePage from "./components/ProfilePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import DidRegisterPage from "./pages/DidRegister"; // ファイル名とエクスポート名が正しいことを確認
import Header from "./components/Header";

const App = () => {
  const [searchResults, setSearchResults] = useState([
    // Dummy data for illustration
    {
      name: "rhyYNdxAyFQ7s2K...",
      occupation: "職業や組織名（例:学生、NPO運営）",
      introduction:
        "東京大学でアラビア語を学んでいる学生です。現在、奨学金を受けながら学問に励んでいますが、将来のために更なる支援を必要としています。",
      didList: ["東京大学在籍", "アラビア語専攻中"],
    },
    {
      name: "rhT4mHk6PxQ8zNw...",
      occupation: "職業や組織名（例:学生、NPO運営）",
      introduction:
        "東京大学でアラビア語を専攻している女子学生です。現在奨学金を受けて学業に励んでいますが、さらなる知識と経験を求めて中東への留学を希望しています。",
      didList: ["東京大学在籍", "アラビア語専攻中"],
    },
    {
      name: "rh3D8yEIKrL5sGx...",
      occupation: "職業や組織名（例:学生、NPO運営）",
      introduction:
        "東京大学でアラビア語を専攻している学生です。奨学金を受けながら学業と部活動を両立し、充実した大学生活を送っています。",
      didList: ["東京大学在籍", "アラビア語専攻中"],
    },
  ]); // This should be replaced with actual search results

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        {/* <Route path="/profile/:userId" element={<ProfilePage />} /> */}
        <Route
          path="/search-results"
          element={<SearchResultsPage results={searchResults} />}
        />
        <Route path="/register" element={<DidRegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
