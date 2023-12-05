import React from "react";
import "../style/FeaturesContainer.css";
import Hand from "../assets/hand-icon.png";
import Secure from "../assets/secure-icon.png";
import Box from "../assets/box-icon.png";
import Phone from "../assets/phone-icon.png";

const FeaturesContainer: React.FC = () => {
  return (
    <div className="features">
      <div className="bg" />
      <div className="features1">
        <div className="feature">
          <div className="text">
            <div className="local-to-brown">Local To Brown Students</div>
            <div className="trust-your-buyers">
              Trust your buyers and sellers
            </div>
          </div>
          <img className="icon" alt="" src={Hand} />
        </div>
        <div className="feature1">
          <div className="text1">
            <div className="local-to-brown">Secure Payments</div>
            <div className="trust-your-buyers">Payments made in person</div>
          </div>
          <img className="icon1" alt="" src={Secure} />
        </div>
        <div className="feature2">
          <div className="text2">
            <div className="local-to-brown">Save money</div>
            <div className="trust-your-buyers">Buy second hand clothing</div>
          </div>
          <img className="vector-icon2" alt="" src={Box} />
        </div>
        <div className="feature3">
          <div className="text3">
            <div className="local-to-brown">24 / 7 Support</div>
            <div className="trust-your-buyers">Dedicated support</div>
          </div>
          <img className="icon2" alt="" src={Phone} />
        </div>
      </div>
    </div>
  );
};

export default FeaturesContainer;
