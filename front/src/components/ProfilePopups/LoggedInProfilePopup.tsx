import React from "react";
import '../../style/ProfilePopups/LoggedInProfilePopup.css'
import { useNavigate } from "react-router-dom";

const LoggedInProfilePopup: React.FC = () => {

    const navigate = useNavigate();

    const handleListingsClick = () => navigate("/listings");

    return (
        <div className="logged-in-popup">
            <div className="popup-item">My Profile</div>
            <div onClick={handleListingsClick} className="popup-item">My Listings</div>
            <div className="popup-item">Purchase History</div>
        </div>
    );
}

export default LoggedInProfilePopup;