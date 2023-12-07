import React from "react";
import "../../style/NavBar.css";
import "../../style/App.css";
import Logo from "../../assets/image-logo.png";
import Heart from "../../assets/Heart_01.png";
import DarkHeart from "../../assets/dark_heart.png";
import Chat from "../../assets/Chat.png";
import DarkChat from "../../assets/dark_chat.png";
import Bell from "../../assets/Bell_Notification.png";
import Profile from "../../assets/profile.jpeg";
import { SearchBar } from "./SearchBar";


export function NavBar() {
  return (
    <div class="frame">
      <div class="titleSearch">
        <div class="left">
          <div class="titleLogo">
            <img class="logo" src={Logo} alt="Ivy Exchange Logo" />
            <div class="title">Ivy Exchange</div>
          </div>
          <div class="searchHolder">
            <SearchBar />
          </div>
        </div>
      </div>
      <div class="spacer">
        <div class="innerSpacer">
          <div class="rightHolders">
            <img class="heart" src={Heart} />
            <img class="darkHeart" src={DarkHeart} />
          </div>
          <div class="rightHolders">
            <img class="chat" src={Chat} />
            <img class="darkChat" src={DarkChat} />
          </div>
          <div class="right">
            <div class="rightHolders">
              <img class="bell" src={Bell} />
            </div>
            <div class="profileHolder">
              <img className="profile" src={Profile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
