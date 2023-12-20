import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import defaultProfile from "../assets/default_profile.jpeg";
import emailIcon from "../assets/email.png";
import { useUser } from "../components/UserProfile/UserContext";
import "../style/SellerPublicProfile.css";

const SellerPublicProfile: React.FC = () => {
  const { sellerUsername } = useParams();
  console.log(sellerUsername);
  const navigate = useNavigate();
  const [sellerProfile, setSellerProfile] = useState<any>(null);

  useEffect(() => {
    // Fetch seller profile data when the component mounts
    const fetchSellerProfile = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/user/profile/${sellerUsername}`
        );
        if (response.ok) {
          const data = await response.json();
          setSellerProfile(data);
        } else {
          throw new Error("Failed to fetch seller profile");
        }
      } catch (error) {
        console.error("Error fetching seller profile:", error);
      }
    };

    fetchSellerProfile();
  }, [sellerUsername]);

  const handleEmailIconClick = () => {
    window.location.href = `mailto:${sellerProfile?.email}`;
  };

  const handleShareClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("URL copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy:", error);
      alert("Failed to copy URL to clipboard.");
    }
  };

  return (
    <div className="seller-profile-container">
      <div className="seller-profile-header">
        <div className="avatar-container">
          <img
            src={
              sellerProfile?.profile
                ? `http://127.0.0.1:8000/user/user_profiles/${sellerProfile?.profile}`
                : defaultProfile
            }
            alt={defaultProfile}
            className="profile-avatar"
          />
          <div className="user-info">
            <h1 className="name">
              {sellerProfile?.first_name} {sellerProfile?.last_name}
            </h1>
            <h2 className="username">@{sellerProfile?.username}</h2>
            <p className="user-bio">{sellerProfile?.bio}</p>
            <div className="user-stats">
              <div className="user-stat">
                <span className="stat-value">{sellerProfile?.followers}</span>
                <span className="stat-name">Followers</span>
              </div>
              <div className="user-stat">
                <span className="stat-value">{sellerProfile?.following}</span>
                <span className="stat-name">Following</span>
              </div>
            </div>
            <div className="email-container" onClick={handleEmailIconClick}>
              <img src={emailIcon} alt="Email" className="email-icon" />
            </div>
            <button className="share-button" onClick={handleShareClick}>
              Share
            </button>
          </div>
        </div>
      </div>
      {/* Additional content as needed */}
    </div>
  );
};

export default SellerPublicProfile;
