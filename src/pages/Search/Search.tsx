import React from "react";
import "./Search.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import SideMenu from "../../components/SideMenu/SideMenu";
import SearchForm from "../../components/SearchForm/SearchForm";

const Search: React.FC = () => {
  const handleSearch = async (query: string) => { // Accepting query as a parameter
    
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
    <div className="search-page">
      <div className="logo">
        <Logo />
      </div>

      {/* Side Menu */}
      <SideMenu />

      {/* Header and Search Section */}
      <div className="header-container">
        <div className="title">PhnyX RAG에게 무엇이든 물어보세요.</div>
        <SearchForm handleSearch={handleSearch}/>
      </div>
    </div>
  );
};

export default Search;
