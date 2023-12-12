import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import "../style/Profile.css";
import Stars from "../components/Stars.tsx";

const Profile: React.FC = () => {
  const navigate = useNavigate(); // Create navigate function
  const handlePublicProfile = () => {
    navigate("/public"); // Navigate to the messaging route
  };

  return (
    <div>
      <NavBar />

      <div className="box">
        <div className="group">
          <div className="overlap">
            <input
              className="text-field"
              placeholder="Placeholder"
              type="text"
            />
            <div className="overlap-wrapper">
              <div className="overlap-group">
                <div className="view-backgrounds">
                  <div className="account-view" />
                  <div className="profile-view" />
                </div>
                <button className="from-buyers-button" />
                <div className="text-wrapper">From Buyers</div>
                <div className="titles">
                  <div className="title">
                    <div className="frame">
                      <div className="profile-setting-wrapper">
                        <div className="profile-setting">Profile Settings</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-wrapper">
                  <div className="div">Reviews (1)</div>
                </div>
                <div className="group-wrapper">
                  <div className="group-2">
                    <div className="group-3">
                      <div className="text-wrapper-2">Upload your photo</div>
                      <img
                        className="gallery-add"
                        alt="Gallery add"
                        src="gallery-add.png"
                      />
                    </div>
                    <div className="horizontal-line"></div>
                  </div>
                </div>
                <div className="your-profile-picture">Your Profile Picture</div>
                <div className="text-wrapper-3">+1</div>
                <div className="group-4">
                  <input
                    className="overlap-group-2"
                    placeholder="  Write your Bio here e.g your hobbies, interests ETC
                  "
                  />

                  <div className="text-wrapper-4">Bio</div>
                </div>
                <img
                  className="profile-picture"
                  alt="Profile picture"
                  src="https://image.pngaaa.com/117/4811117-small.png"
                />
                <button className="button">
                  <div className="overlap-2">
                    <div className="text-wrapper-5">Update Profile</div>
                  </div>
                </button>
                <button className="public-profile">
                  <div className="overlap-3">
                    <div
                      className="text-wrapper-6"
                      onClick={handlePublicProfile}
                    >
                      View Public Profile
                    </div>
                  </div>
                </button>
                <div className="text-wrapper-7">I love to shop!</div>
                <div className="from-sellers-button" />
                <div className="group-5">
                  <div className="overlap-4">
                    <div className="text-wrapper-8">Active Listings</div>
                    <div className="text-wrapper-9">0</div>
                    <div className="div-2" />
                  </div>
                  <div className="overlap-5">
                    <div className="text-wrapper-10">Sales</div>
                    <div className="text-wrapper-9">1</div>
                    <div className="div-2" />
                  </div>
                  <div className="frame-2">
                    <div className="div">Selling</div>
                  </div>
                </div>
                <div className="group-6">
                  <div className="overlap-6">
                    <div className="text-wrapper-11">Followers</div>
                    <div className="text-wrapper-12">0</div>
                    <div className="outline-for" />
                  </div>
                  <div className="overlap-7">
                    <div className="text-wrapper-11">Following</div>
                    <div className="text-wrapper-13">0</div>
                    <div className="outline-for" />
                  </div>
                </div>
                <p className="thank-you-for-the">
                  Thank you for the article that was made, it really provides
                  insight and knowledge that I didn&#39;t know before.
                </p>
                <div className="rectangle" />
                <div className="rectangle-2" />
                <div className="rectangle-3" />
                <div className="rectangle-4" />
                <p className="text-wrapper-14">2 March 2021 at 06.30 pm</p>

                <div className="text-wrapper-15">Alex Iwobi</div>
                <img
                  className="ellipse"
                  src="https://image.pngaaa.com/117/4811117-small.png"
                />
                <div className="text-wrapper-16">From Sellers</div>
                <div className="text-wrapper-17">User ID: XXXXXXXXX</div>
                <div className="text-wrapper-18">1 Review</div>
                <div className="text-wrapper-19">Member since 2023</div>
                <div className="username">Username</div>
                <Stars
                  className="stars-instance"
                  mode="light"
                  rating="five"
                  starDivClassName="stars-3"
                  starDivClassNameOverride="stars-4"
                  starHalfNoNoneNoClassName="design-component-instance-node"
                  starHalfNoNoneNoClassName1="stars-5"
                  starHalfNoNoneNoClassNameOverride="stars-2"
                />

                <Stars
                  className="stars-instance-2"
                  mode="light"
                  rating="five"
                  starDivClassName="stars-3"
                  starDivClassNameOverride="stars-4"
                  starHalfNoNoneNoClassName="design-component-instance-node"
                  starHalfNoNoneNoClassName1="stars-5"
                  starHalfNoNoneNoClassNameOverride="stars-2"
                />
                <button>
                  <img
                    className="icon-email-outline"
                    alt="Icon email outline"
                    src="https://cdn-icons-png.flaticon.com/512/542/542689.png"
                  />
                </button>
                <button>
                  <img
                    className="icon-phone"
                    alt="Icon phone"
                    src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
                  />
                </button>
              </div>
            </div>

            <div className="input-2">
              <label className="email">Email</label>

              <input
                className="text-field-3"
                placeholder="Please enter your email"
                type="email"
              />
            </div>
            <div className="input-3">
              <label className="phone">Phone Number</label>

              <input
                className="text-field-3"
                placeholder="Please enter your phone number"
                type="number"
              />
            </div>
            <div className="input">
              <label className="usernameinput">Username</label>
              <input
                className="text-field-3"
                placeholder="Please enter a username"
                type="name"
              />
            </div>
            <div className="input-4">
              <label className="fullname">Full Name</label>
              <input
                className="text-field-3"
                placeholder="Please enter your full name"
                type="name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
