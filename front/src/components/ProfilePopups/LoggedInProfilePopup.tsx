import React from "react";
import '../../style/ProfilePopups/LoggedInProfilePopup.css'

const LoggedInProfilePopup: React.FC = () => {
    return (
        <div className="logged-in-popup">
            <div className="popup-item">My Profile</div>
            <div className="popup-item">My Listings</div>
            <div className="popup-item">Purchase History</div>
        </div>
    );
}

export default LoggedInProfilePopup;