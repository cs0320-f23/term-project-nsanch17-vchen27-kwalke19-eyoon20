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
import SavedItem from "../SavedItems/SavedItems";

import mockNotifications from "../../mocks/mockNotifications";
import mockedSavedItems from "../../mocks/mockSavedItems";

interface NavBarProps {
  isLoggedIn: boolean;
  onLogout: () => void; // Add this line
}

const NavBar: React.FC<NavBarProps> = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSavedItems, setShowSavedItems] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  //Notifications popup should disappear if other part of screen is clicked
  const NotificationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        NotificationsRef.current &&
        !NotificationsRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //Saved Items popup should disappear if other part of screen is clicked
  const SavedItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        SavedItemsRef.current &&
        !SavedItemsRef.current.contains(event.target as Node)
      ) {
        setShowSavedItems(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //Profile popup should disappear if other part of screen is clicked
  const ProfileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ProfileRef.current &&
        !ProfileRef.current.contains(event.target as Node)
      ) {
        setShowProfilePopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handlers
  const handleHomeClick = () => navigate("/");
  const handleCreateNewListingClick = () => navigate("/create-new-listing");

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
        {isLoggedIn && (
          <button
            onClick={handleCreateNewListingClick}
            className="create-listing-btn"
          >
            Create New Listing
          </button>
        )}
        <img
          onClick={() => setShowSavedItems(!showSavedItems)}
          src={Heart}
          alt="Saved Items"
          className="navbar-icon"
        />
        {showSavedItems && (
          <SavedItem saveditems={mockedSavedItems} ref={SavedItemsRef} />
        )}
        <img
          onClick={() => setShowNotifications(!showNotifications)}
          src={Bell}
          alt="Notifications"
          className="navbar-icon"
        />
        {showNotifications && (
          <Notification
            notifications={mockNotifications}
            ref={NotificationsRef}
          />
        )}
        <img
          onClick={() => setShowProfilePopup(!showProfilePopup)}
          src={isLoggedIn ? UserProfilePic : UserIcon}
          alt="User"
          className={isLoggedIn ? "user-profile-pic" : "user-icon"}
        />
        {showProfilePopup &&
          (isLoggedIn ? (
            <LoggedInProfilePopup onLogout={onLogout} ref={ProfileRef} />
          ) : (
            <LoggedOutProfilePopup ref={ProfileRef} />
          ))}
      </div>
    </nav>
  );
};

export default NavBar;
