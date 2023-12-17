import React, { useState } from "react";
import "../../style/Signup.css";
import defaultProfileUrl from "../../assets/default_profile.jpeg";
import { useNavigate } from "react-router-dom";

interface SignupProps {
  onLogin: (status: boolean) => void;
}

const Signup: React.FC<SignupProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [username, setUsername] = useState("");
  const [profileUrl, setProfileUrl] = useState(defaultProfileUrl);
  const [error, setError] = useState(""); // State to store the error message

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const emailDomain = email.split("@")[1];
    if (emailDomain !== "brown.edu") {
      setError("You must use a brown.edu email address to sign up.");
      return;
    }

    const userData = {
      first_name: firstName,
      last_name: lastName,
      username,
      email,
      number,
      profile: profileUrl,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    };

    const endpoint = isSignup
      ? "http://127.0.0.1:8000/user/new_user"
      : "http://127.0.0.1:8000/user/login";

    try {
      const response = await fetch(endpoint, requestOptions);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error_message || "An error occurred during the request."
        );
      }

      console.log(`${isSignup ? "Signup" : "Login"} successful:`, data);
      onLogin(true);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        console.error(
          `${isSignup ? "Signup" : "Login"} failed:`,
          error.message
        );
        setError(error.message);
      } else {
        console.error(`${isSignup ? "Signup" : "Login"} failed:`, error);
        setError("An unexpected error occurred.");
      }
    }
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setError(""); // Clear errors when toggling between forms
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 className="form-title">{isSignup ? "Sign Up" : "Login"}</h2>
        {error && <div className="form-error">{error}</div>}
        {isSignup && (
          <>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="form-input"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="form-input"
            />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="form-input"
            />
            <input
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Phone Number"
              className="form-input"
            />
          </>
        )}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="form-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="form-input"
        />
        <button type="submit" className="signup-button">
          {isSignup ? "Sign Up" : "Login"}
        </button>
        <button
          type="button"
          onClick={toggleForm}
          className="toggle-form-button"
        >
          {isSignup ? "Or Login" : "Or Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;