import React from "react";
import "../style/Footer.css";
import Logo from "../assets/image-logo.png";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="data">
        <div className="copyright-text">
          Copyright © 2023 Ivy Exchange LLC . All Rights Reserved.
        </div>
        <div className="logo-itema">
          <div className="nav-menu">
            <div className="pages">Home</div>
            <div className="support1">Support</div>
            <div className="faq">FAQ</div>
            <div className="pages-parent">
              <div className="pages">Pages</div>
              <img className="vector-icon3" alt="" src="/vector3.svg" />
            </div>
          </div>
          <div className="logo-and-home">
            <img className="ivy-exchange-logo-transparent1" alt="" src={Logo} />
            <div className="home2">Ivy Exchange</div>
          </div>
        </div>
      </div>
      <div className="separator" />
    </div>
  );
};

export default Footer;
