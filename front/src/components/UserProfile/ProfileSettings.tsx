import { useState } from "react";
import "../../style/UserProfile.css";

interface ProfileSettingsProps {
  onProfilePicChange: (newPic: string) => void;
  onUsernameChange: (newUsername: string) => void;
  onBioChange: (newBio: string) => void;
  onUpdateProfile: (profileData: {
    username: string;
    bio: string;
    email: string;
    phoneNumber: string;
    fullName: string;
    profilePicUrl: string;
  }) => void;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({
  onProfilePicChange,
  onUsernameChange,
  onBioChange,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [tempUsername, setTempUsername] = useState<string>("");
  const [tempBio, setTempBio] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempUsername(event.target.value);
  };

  const handleBioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempBio(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handleUpdateProfile = (profileData: {
    username: string;
    bio: string;
    email: string;
    phoneNumber: string;
    fullName: string;
    profilePicUrl: string;
  }) => {
    // Handle the profile data, such as sending it to the backend
    console.log(profileData); // For now, just log it to the console
  };

  const handleUpdate = async () => {
    let profilePicUrl = "";
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = async (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result ?? "";
        if (typeof result === "string") {
          profilePicUrl = result;
          onProfilePicChange(result);
        }
      };
      reader.readAsDataURL(selectedFile);
    }

    if (tempUsername) {
      onUsernameChange(tempUsername);
    }

    onBioChange(tempBio);

    const profileData = {
      username: tempUsername,
      bio: tempBio,
      email,
      phoneNumber,
      fullName,
      profilePicUrl,
    };

    handleUpdateProfile(profileData);
  };

  return (
    <div>
      <div className="profile-settings-container">
        <div className="account-view" />

        <div className="profile-setting">Profile Settings</div>

        <div className="file-input-wrapper">
          <div className="file-input">
            <input type="file" onChange={handleFileChange} />
          </div>
        </div>

        <div className="upload-text">Upload a Profile Picture: </div>

        <div className="bio">
          <input
            className="bio-input"
            value={tempBio}
            onChange={handleBioChange}
            placeholder="  Write your Bio here e.g your hobbies, interests ETC "
          />
          <div className="bio-text">Biography:</div>
        </div>

        <div className="email-input">
          <label className="email-text">Email:</label>
          <input
            className="input-box"
            value={email}
            onChange={handleEmailChange}
            placeholder="Please enter your email"
            type="email"
          />
        </div>

        <div className="phone-number-input">
          <label className="phone-text">Phone Number:</label>
          <input
            className="input-box"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Please enter your phone number"
            type="number"
          />
        </div>

        <div className="name-input">
          <label className="name-text">Full Name:</label>
          <input
            className="input-box"
            value={fullName}
            onChange={handleFullNameChange}
            placeholder="Please enter your full name"
            type="text"
          />
        </div>

        <div className="username-input">
          <label className="username-text">Username:</label>
          <input
            className="input-box"
            value={tempUsername}
            onChange={handleUsernameChange}
            placeholder="Please enter a username"
            type="text"
          />
        </div>

        <button className="update-profile-button" onClick={handleUpdate}>
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
