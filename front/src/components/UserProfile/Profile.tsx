import React from "react";
import "../../style/UserProfile.css";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const navigate = useNavigate();

  function handlePublicProfile(): void {
    navigate("/public");
  }

  return (
    <div className="page-container">
      <div className="profile-settings">
        <h2 className="title">Profile Settings</h2>
        <form className="form">
          <div className="input-group">
            <i className="fas fa-upload input-icon"></i>
            <input type="file" className="input" />
          </div>
          <div className="input-group">
            <i className="fas fa-user input-icon"></i>
            <input placeholder="Username" className="input" />
          </div>
          <div className="input-group">
            <i className="fas fa-envelope input-icon"></i>
            <input type="email" placeholder="Email" className="input" />
          </div>
          <div className="input-group">
            <i className="fas fa-signature input-icon"></i>
            <input placeholder="Full Name" className="input" />
          </div>
          <div className="input-group">
            <i className="fas fa-phone input-icon"></i>
            <input type="tel" placeholder="Phone Number" className="input" />
          </div>
          <textarea placeholder="Biography" className="textarea"></textarea>
          <button type="submit" className="button update-button">
            Update Profile
          </button>
        </form>
        <button
          className="button view-public-button"
          onClick={handlePublicProfile}
        >
          View Public Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
