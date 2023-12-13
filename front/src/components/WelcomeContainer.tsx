import React, { FunctionComponent } from "react";
import "../style/Home/WelcomeContainer.css";
import Logo from "../assets/image-logo.png";
import Arrow from "../assets/arrow.png";

const WelcomeContainer: FunctionComponent = () => {
  return (
    <div className="title">
      <div className="breadcrumbs">
        <div className="home4">Home</div>
        <div className="svg1">
          <img className="vector-icon4" alt="" src={Arrow} />
        </div>
        <div className="recommendations">Recommendations</div>
      </div>
      <div className="welcome">Welcome to Ivy Exchange!</div>
      <div className="description">
        Online marketplace for Brown students and staff to buy and resell
        concert tickets, clothing, and more!
      </div>
    </div>
  );
};

export default WelcomeContainer;
