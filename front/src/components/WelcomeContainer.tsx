import React, { FunctionComponent } from "react";
import "../style/Home/WelcomeContainer.css";
import Logo from "../assets/image-logo.png";

const WelcomeContainer: FunctionComponent = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-title-container"> 
        <h1>Welcome to Ivy Exchange!</h1>
        <img src={Logo} alt="Ivy Exchange Logo" className="Logo" />
      </div>
      <p>
        Online marketplace for Brown students and staff to buy and resell
        concert tickets, clothing, and more!
      </p>
    </div>
  );
};

export default WelcomeContainer;


