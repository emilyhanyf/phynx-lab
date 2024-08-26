import React, { useState } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import SearchHistory from "../../components/SearchHistory/SearchHistory";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Search: React.FC = () => {
  const navigate = useNavigate();
  const UserProfile = () => {
    navigate("/profile");
  };

  const [query, setQuery] = useState<string>("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
    const CX = import.meta.env.VITE_SEARCH_ENGINE_ID;    

    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${API_KEY}&cx=${CX}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // const data = await response.json();
      // setResults(data.items || []);
      // console.log("Search results:", data.items);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <div className="logo">
        <Logo />
      </div>

      {/* Side Menu */}
      <div className="menu">
        <SearchHistory />
        <SearchHistory />
        <SearchHistory />
        <div className="menu-decor" />
        <button className="user-profile" onClick={UserProfile} />
      </div>

      {/* Header and Search Section */}
      <div className="header-container">
        <div className="title">PhnyX RAG에게 무엇이든 물어보세요.</div>
        <form onSubmit={handleSearch} className="search-form">
          <div className="input-container">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="질문을 입력하세요."
              className="search-input"
            />
            <SubmitButton onClick={handleSearch}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
