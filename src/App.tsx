import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./pages/Search/Search.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import SearchResult from "./pages/SearchResult/SearchResult.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/result" element={<SearchResult />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
