import React, { forwardRef } from 'react';
import '../../style/ProfilePopups/LoggedInProfilePopup.css';
import { useNavigate } from "react-router-dom";

const LoggedInProfilePopup = forwardRef((_, ref) => {
  const navigate = useNavigate();

  const handleListingsClick = () => navigate("/listings");
  const handleProfileClick = () => navigate("/profile");
  const handlePurchaseHistoryClick = () => navigate("/purchase-history");

  return (
    <div className="logged-in-popup" ref={ref}>
      <div onClick={handleProfileClick} className="popup-item">My Profile</div>
      <div onClick={handleListingsClick} className="popup-item">My Listings</div>
      <div onClick={handlePurchaseHistoryClick} className="popup-item">Purchase History</div>
    </div>
  );
});

export default LoggedInProfilePopup;
