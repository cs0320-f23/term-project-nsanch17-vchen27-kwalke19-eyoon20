import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/NavBar.css";
import Logo from "../../assets/image-logo.png";
import Heart from "../../assets/Heart_01.png";
import Chat from "../../assets/Chat.png";
import Bell from "../../assets/Bell_Notification.png";
import UserIcon from "../../assets/User_Icon.png"; 
import UserProfilePic from "../../assets/profile.jpeg";
import Search from "./Search";

interface NavBarProps {
  isLoggedIn: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');

  // Handlers
  const handleChatClick = () => navigate("/messaging");
  const handleProfileClick = () => navigate("/profile");

  return (
    <nav className="navbar">
      <div className="left-menu">
        <img src={Logo} alt="Logo" className="logo" />
        <span className="brand-name">Ivy Exchange</span>
        <Search onSearch={setSearchKeyword} />
      </div>
      <div className="right-menu">
        <img src={Heart} alt="Saved Items" className="navbar-icon" />
        <img onClick={handleChatClick} src={Chat} alt="Messaging" className="navbar-icon" />
        <img src={Bell} alt="Notifications" className="navbar-icon" />
        <img onClick={handleProfileClick} src={isLoggedIn ? UserProfilePic : UserIcon} alt="User" className="user-icon" />
      </div>
    </nav>
  );
};

export default NavBar;
