import React, { useState } from "react";
import ProfileStatistics from "./ProfileStatistics";
import ProfileSettings from "./ProfileSettings";
import UserProfile from "../../assets/default_profile.jpeg";
import NavBar from "../NavBar/NavBar";

const Profile: React.FC = () => {
  const [profilePic, setProfilePic] = useState<string>(UserProfile);
  const [username, setUsername] = useState<string>("Username");
  const [bio, setBio] = useState<string>(
    "I love to shop, especially at Brown! Message me for negotiations."
  );
  const [email, setEmail] = useState<string>(""); // New state for email
  const [phoneNumber, setPhoneNumber] = useState<string>(""); // New state for phone number
  const [fullName, setFullName] = useState<string>(""); // New state for full name

  const handleProfilePicChange = (newPic: string) => {
    setProfilePic(newPic);
  };

  const handleUsernameChange = (newUsername: string) => {
    setUsername(newUsername);
  };

  const handleBioChange = (newBio: string) => {
    setBio(newBio);
  };

  const handleUpdateProfile = (profileData: {
    email: string;
    phoneNumber: string;
    fullName: string;
  }) => {
    // Handle the email, phone number, and full name updates here
    setEmail(profileData.email);
    setPhoneNumber(profileData.phoneNumber);
    setFullName(profileData.fullName);

    // Send data to backend or process further as needed
    console.log("Profile Updated with:", profileData);
  };

  return (
    <div>
      <div className="box">
        <div className="nav">
          <NavBar isLoggedIn={false} />
        </div>
        <div className="page-background" />

        <div>
          <ProfileStatistics
            profilePic={profilePic}
            username={username}
            bio={bio}
          />
          <div className="profile-statistics">
            <ProfileSettings
              onProfilePicChange={handleProfilePicChange}
              onUsernameChange={handleUsernameChange}
              onBioChange={handleBioChange}
              onUpdateProfile={handleUpdateProfile} // Pass the new handler
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
