import React, { forwardRef } from "react";
import "../../style/ProfilePopups/LoggedOutProfilePopup.css";
import { useNavigate } from "react-router-dom";

const LoggedOutProfilePopup = forwardRef((_, ref) => {
  const navigate = useNavigate();

  const handleSignUpLoginClick = () => navigate("/signup-login");
  return (
    <div className="logged-out-popup" ref={ref}>
      <div onClick={handleSignUpLoginClick} className="popup-item">
        Sign Up/Login
      </div>
    </div>
  );
});

export default LoggedOutProfilePopup;
