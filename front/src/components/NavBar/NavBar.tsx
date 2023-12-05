import React, { useState } from "react";
import "../../style/NavBar.css";
import "../../style/App.css";
import Logo from "../../assets/image-logo.png";
import Heart from "../../assets/Heart_01.png";
import Chat from "../../assets/Chat.png";
import Bell from "../../assets/Bell_Notification.png";
import Profile from "../../assets/profile.jpeg";
import SearchBar from "./SearchBar";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="frame">
      <div className="left">
        <div className="titleLogo">
          <img className="logo" src={Logo} alt="Ivy Exchange Logo" />
          <div className="title"></div>
        </div>
        <div className="searchHolder">
          <SearchBar setValue={setSearchValue} ariaLabel="Search" />
        </div>
      </div>
      <div className="spacer">
        <div className="innerSpacer">
          <div className="rightHolders">
            <img className="heart" src={Heart} alt="Heart Icon" />
          </div>
          <div className="rightHolders">
            <img className="chat" src={Chat} alt="Chat Icon" />
          </div>
          <div className="rightHolders">
            <img className="bell" src={Bell} alt="Bell Icon" />
          </div>
        </div>

        <div className="profileHolder">
          <div />
          <img className="profile" src={Profile} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
