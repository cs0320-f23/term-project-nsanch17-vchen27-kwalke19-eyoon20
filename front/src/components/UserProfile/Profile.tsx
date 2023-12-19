import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserProfile/UserContext"; // Adjust the import path as needed
import "../../style/UserProfile.css";
import {
  FaUpload,
  FaUser,
  FaEnvelope,
  FaSignature,
  FaPhone,
} from "react-icons/fa";

const Profile: React.FC = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  // State for form fields, directly using attributes from user context
  const [firstName, setFirstName] = useState(user?.first_name || "");
  const [lastName, setLastName] = useState(user?.last_name || "");
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.number || "");
  const [bio, setBio] = useState(user?.bio || "");
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handlePublicProfile = () => {
    navigate("/public");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();

    // Add form fields to formData
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("number", phoneNumber);
    formData.append("bio", bio);

    if (profileImage) {
      formData.append("profile_image", profileImage);
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/user/update_user/${user?.username}`,
        {
          method: "PATCH",
          body: formData,
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error_message || "An error occurred during the update."
        );
      }

      setUser({
        first_name: firstName,
        last_name: lastName,
        username: username,
        email,
        number: phoneNumber,
        bio,
        profile: profileImage
          ? URL.createObjectURL(profileImage)
          : user?.profile || "",
      });

      alert("Profile updated successfully!");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Update failed:", error.message);
        alert(error.message);
      } else {
        console.error("Update failed:", error);
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="page-container">
      <div className="profile-settings">
        <h2 className="title">Profile Settings</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUpload className="input-icon" />
            <input type="file" className="input" onChange={handleImageChange} />
          </div>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="input"
            />
          </div>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="input"
            />
          </div>
          <div className="input-group">
            <FaSignature className="input-icon" />
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="input"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="input"
            />
          </div>
          <div className="input-group">
            <FaPhone className="input-icon" />
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              className="input"
            />
          </div>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Biography"
            className="textarea"
          ></textarea>
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
