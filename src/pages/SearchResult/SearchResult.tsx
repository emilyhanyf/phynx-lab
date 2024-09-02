import React from "react";
import "./SearchResult.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import SideMenu from "../../components/SideMenu/SideMenu";
import { useLocation } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";
import ScrollableSection from "../../components/ScrollableSection/ScrollableSection";
import SourcePage from "../../components/SourcePage/SourcePage";

const SearchResult: React.FC = () => {
  const location = useLocation();
  const results = location.state?.results || [];

  const searchResults = [
    { title: "관련 자료", description: "content" },
    {
      title: "답변",
      description:
        "피닉스랩이 현재 개발하고 있는 제품은 RAG 솔루션입니다. 이 제품은 정보 검색의 새로운 패러다임을 제시하며, 뛰어난 정확도, 확장성, 견고한 시스템, 그리고 다른 AI 어플리케이션과의 뛰어난 호환성을 특징으로 합니다. 특히, 피닉스랩의 RAG 솔루션은 모듈러 RAG 구조를 채택하고 있어, 고객에게 기술적 차별화와 유연성을 제공합니다. 이를 통해 다양한 유스케이스에 완벽히 최적화된 솔루션을 제공할 수 있습니다. 또한, 피닉스랩은 이 RAG 솔루션을 RAG-as-a-Service 형태로 제공하며, 애플리케이션과 SDK를 포함하여 기업들이 AI를 업무 환경에 쉽게 도입할 수 있도록 지원하고 있습니다.",
    },
    {
      title: "참고 자료",
      description:
        "240809 RAG_백서.pdf (페이지 13) …PhnyX Lab의 RAG 솔루션은 뛰어난 정확도, 확장성, 견고한 시스템, 그리고 다른 AI 어플리케이션과의 뛰어난 호환성을 통해 정보 검색의 새로운 패러다임을 제시합니다. 이 솔루션의 특장점은 아래와 같이 세분화가 가능합니다. 3.1.1 모듈러 RAG RAG 기술은 다양한 방법론과 기술로 구현될 수 있으며… 240812 Business Model.ppt (페이지 2) …목표: RAG-as-a-Service를 시작으로, PhnyX Lab은 AI를 기업 업무환경에 도입할 것입니다. 주요 내용: RAG-as-a-Service: 핵심 솔루션으로 애플리케이션 및 SDK를 포함하여 제공됩니다… 240720 RAG_백서.pdf (페이지 15) …PhnyX Lab 의 RAG 솔루션은 모듈러 RAG (Modular RAG) 구조를 채택함으로써 고객들에게 기술적 차별화 및 유연성을 제공할 예정입니다. 이러한 구조를 따른 프레임워크를 구축함으로써, 유스케이스에 따라 완벽히 최적화된 솔루션을 제공할 수 있도록 합니다. 3.2.1 기존 RAG 프레임워크 현존하는 대부분의 RAG 시스템은",
    },
  ];

  const handleSearch = async (query: string) => {
    // Accepting query as a parameter

    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
    const CX = import.meta.env.VITE_SEARCH_ENGINE_ID;

    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
          query
        )}&key=${API_KEY}&cx=${CX}`
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
    <div className="search-result-page">
      <div className="logo">
        <Logo />
      </div>

      <div className="menu-container">
        <SideMenu />
      </div>

      <div className="query">
        피닉스랩이 현재 개발하고 있는 제품은 무엇이며, 그 제품의 특장점은?
      </div>

      <div className="main-results">
        <div>
          <ScrollableSection items={searchResults} />
        </div>
        <SourcePage />
      </div>

      {/* <div className="search-results">
          {results.length > 0 ? (
            results.map((result: any, index: number) => (
              <div key={index} className="result-item">
                <h3><a href={result.link}>{result.title}</a></h3>
                <p>{result.snippet}</p>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div> */}

      <div className="search-bar-container">
        <SearchForm handleSearch={handleSearch} />
      </div>
    </div>
  );
};

export default SearchResult;
