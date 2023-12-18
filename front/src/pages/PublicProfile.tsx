import React from "react";
import "../style/PublicProfile.css";
import emailIcon from "../assets/email.png";
import { useUser } from "../components/UserProfile/UserContext";

const PublicProfile: React.FC = () => {
  const { user } = useUser();
  const email = user?.email; // User's email address
  const username = user?.username;

  const handleEmailIconClick = () => {
    window.location.href = `mailto:${email}`;
  };

  // Mock data for the items
  const items = [
    { id: 1, name: "Vintage Jacket", price: "$39.99" },
    { id: 2, name: "Leather Boots", price: "$89.99" },
    // ... other items
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="avatar-container">
          <img
            src="/default-avatar.png"
            alt="Profile"
            className="profile-avatar"
          />
          <div className="user-info">
            <h1 className="name">
              {user?.first_name} {user?.last_name}
            </h1>

            <h2 className="username">@{username}</h2>
            <p className="user-bio">{user?.bio}</p>
            <div className="user-stats">
              <div className="user-stat">
                <span className="stat-value">0</span>
                <span className="stat-name">Followers</span>
              </div>
              <div className="user-stat">
                <span className="stat-value">0</span>
                <span className="stat-name">Following</span>
              </div>
            </div>
            <div className="email-container" onClick={handleEmailIconClick}>
              <img src={emailIcon} alt="Email" className="email-icon" />
            </div>
            <button className="share-button">Share</button>
          </div>
        </div>
      </div>

      <div className="items-container">
        <input
          type="search"
          placeholder="Search items..."
          className="search-bar"
        />
        <div className="items-list">
          {items.map((item) => (
            <div className="item-card" key={item.id}>
              <div className="item-image"></div>
              <h3 className="item-name">{item.name}</h3>
              <p className="item-price">{item.price}</p>
            </div>
          ))}
          {items.length === 0 && <p>No items were found</p>}
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;
