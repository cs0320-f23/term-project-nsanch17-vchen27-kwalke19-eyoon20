import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/NavBar.css";
import "../../style/App.css";
import Logo from "../../assets/image-logo.png";
import Heart from "../../assets/Heart_01.png";
import DarkHeart from "../../assets/dark_heart.png";
import Chat from "../../assets/Chat.png";
import DarkChat from "../../assets/dark_chat.png";
import Bell from "../../assets/Bell_Notification.png";
import Profile from "../../assets/profile.jpeg";
import SearchBar from "./SearchBar";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate(); // Create navigate function

  const handleChatClick = () => {
    navigate("/messaging"); // Navigate to the messaging route
  };

  const handleProfileClick = () => {
    navigate("/profile"); // Navigate to the messaging route
  };

  return (
    <div className="frame">
      <div className="titleSearch">
        <div className="left">
          <div className="titleLogo">
            <img className="logo" src={Logo} alt="Ivy Exchange Logo" />
            <div className="title">Ivy Exchange</div>
          </div>
          <div className="searchHolder">
            <SearchBar setValue={setSearchValue} ariaLabel="Search" />
          </div>
        </div>
      </div>
      <div className="spacer">
        <div className="innerSpacer">
          <div className="rightHolders">
            <img className="heart" src={Heart} />
            <img className="darkHeart" src={DarkHeart} />
          </div>
          <div className="rightHolders">
            <img className="chat" src={Chat} onClick={handleChatClick} />{" "}
            {/* Add onClick event here */}
            <img className="darkChat" src={DarkChat} />
          </div>
          <div className="right">
            <div className="rightHolders">
              <img className="bell" src={Bell} />
            </div>
            <div className="profileHolder">
              <img
                className="profile"
                src={Profile}
                onClick={handleProfileClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
