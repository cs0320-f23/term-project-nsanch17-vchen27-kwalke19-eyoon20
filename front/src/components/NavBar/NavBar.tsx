import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/NavBar.css";
import Logo from "../../assets/image-logo.png";
import Heart from "../../assets/Heart_01.png";
import Chat from "../../assets/Chat.png";
import Bell from "../../assets/Bell_Notification.png";
import UserIcon from "../../assets/User_Icon.png";
import UserProfilePic from "../../assets/profile.jpeg";
import Search from "./Search";
import Notification from "../Notifications/Notifications";
import LoggedInProfilePopup from "../ProfilePopups/LoggedInProfilePopup";
import LoggedOutProfilePopup from "../ProfilePopups/LoggedOutProfilePopup";

import mockNotifications from "../../mocks/mockNotifications";

interface NavBarProps {
  isLoggedIn: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);


  //Notifications popup should disappear if other part of screen is clicked
  const NotificationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (NotificationsRef.current && !NotificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  // Handlers
  const handleChatClick = () => navigate("/messaging");
  const handleHomeClick = () => navigate("/");

  return (
    <nav className="navbar">
      <div className="left-menu">
        <img onClick={handleHomeClick} src={Logo} alt="Logo" className="logo" />
        <span onClick={handleHomeClick} className="brand-name">
          Ivy Exchange
        </span>
        <Search onSearch={setSearchKeyword} />
      </div>
      <div className="right-menu">
        <img src={Heart} alt="Saved Items" className="navbar-icon" />
        <img
          onClick={handleChatClick}
          src={Chat}
          alt="Messaging"
          className="navbar-icon"
        />
        <img
          onClick={() => setShowNotifications(!showNotifications)}
          src={Bell}
          alt="Notifications"
          className="navbar-icon"
        />
        {showNotifications && (
          <Notification notifications={mockNotifications} ref={NotificationsRef} />
        )}
        <img
          onClick={() => setShowProfilePopup(!showProfilePopup)}
          src={isLoggedIn ? UserProfilePic : UserIcon}
          alt="User"
          className="user-icon"
        />
        {showProfilePopup &&
          (isLoggedIn ? <LoggedInProfilePopup /> : <LoggedOutProfilePopup />)}
      </div>
    </nav>
  );
};

export default NavBar;
