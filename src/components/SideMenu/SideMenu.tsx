import React from 'react';
import SearchHistory from '../SearchHistory/SearchHistory';
import './SideMenu.css'; 
import { useNavigate } from "react-router-dom";

const SideMenu: React.FC = () => {
  const navigate = useNavigate();

  // Navigate to the user profile page
  const userProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="menu">
      <SearchHistory />
      <SearchHistory />
      <SearchHistory />
      <div className="menu-decor" />
      <button className="user-profile" onClick={userProfile} />
    </div>
  );
};

export default SideMenu;