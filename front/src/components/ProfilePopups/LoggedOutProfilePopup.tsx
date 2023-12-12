import React from 'react';
import '../../style/ProfilePopups/LoggedOutProfilePopup.css';

const LoggedOutProfilePopup: React.FC = () => {
  return (
    <div className="logged-out-popup">
      <div className="popup-item">Sign Up/Login</div>
    </div>
  );
};

export default LoggedOutProfilePopup;