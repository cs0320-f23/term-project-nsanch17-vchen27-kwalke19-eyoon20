import "../../style/UserProfile.css";
import Stars from "../Stars";
import Model from "../../assets/model-placeholder.png";
import Model2 from "../../assets/model2-placeholder.png";
import UserProfile from "../../assets/default_profile.jpeg";
import PhoneIcon from "../../assets/phone.png";
import EmailIcon from "../../assets/email.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

interface ProfileStatisticsProps {
  profilePic: string;
  username: string;
  bio: string;
}

const ProfileStatistics: React.FC<ProfileStatisticsProps> = ({
  profilePic,
  bio,
}) => {
  const { user } = useUser();
  const [showBuyerReview, setShowBuyerReview] = useState(false); //
  const navigate = useNavigate();
  const handlePublicProfile = () => {
    navigate("/public"); // Navigate to the messaging route
  };

  const toggleBuyerReview = () => {
    setShowBuyerReview(!showBuyerReview); // Toggle visibility
  };

  const handleSellerClick = () => {
    setShowBuyerReview(false); // Set to false to ensure nothing shows for sellers
  };

  return (
    <div>
      <div className="profile-statistics-container">
        <div className="profile-view" />
        <button className="public-profile" onClick={handlePublicProfile}>
          View Public Profile
        </button>
        <div className="follower-statistics">
          <div className="followers">
            <div className="followers-text">Followers</div>
            <div className="num-followers">0</div>
            <div className="outline-for-followers" />
          </div>
          <div className="following">
            <div className="followers-text">Following</div>
            <div className="num-following">0</div>
            <div className="outline-for-followers" />
          </div>
        </div>
        <img className="profile-picture" src={user?.profile} />
        <div className="username">{user?.username}</div>
        <Stars className="user-stars" rating="five" />
        <div className="num-reviews">1 Review</div>
        <div className="member-date">Member since </div>
        <button>
          <img
            className="icon-email-outline"
            alt="Icon email outline"
            src={EmailIcon}
          />
        </button>
        <button>
          <img className="icon-phone" alt="Icon phone" src={PhoneIcon} />
        </button>
        <div className="profile-bio">{bio}</div>
        <div className="selling-group">
          <div className="selling">
            <div className="active-listing-text">Active Listings</div>
            <div className="active-listings">0</div>
            <div className="outline-selling-group" />
          </div>
          <div className="sales">
            <div className="sales-text">Sales</div>
            <div className="current-sales">1</div>
            <div className="outline-selling-group" />
          </div>
          <div className="selling-text-wrapper">
            <div className="selling-text">Selling Statistics</div>
          </div>
        </div>
        <div className="reviews-text-wrapper">
          <div className="reviews-text">Reviews (1)</div>
        </div>
        <button className="from-sellers-button" onClick={handleSellerClick}>
          From Sellers
        </button>
        <button className="from-buyers-button" onClick={toggleBuyerReview}>
          From Buyers
        </button>

        {showBuyerReview && (
          <div>
            <img className="review-profile" src={UserProfile} />
            <div className="reviewer">Alex Iwobi</div>
            <Stars className="review-rating" rating="five" />
            <p className="review-date">2 March 2021 at 06.30 pm</p>
            <img className="rectangle" src={Model} alt="" />
            <img className="rectangle-2" src={Model2} alt="" />
            <img className="rectangle-3" src={Model} alt="" />
            <img className="rectangle-4" src={Model2} alt="" />
            <p className="review-text">
              Thank you for the article that was made, it really provides
              insight and knowledge that I didn't know before.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileStatistics;
