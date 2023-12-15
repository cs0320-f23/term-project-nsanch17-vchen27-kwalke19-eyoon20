import React, { useState } from "react";
import "../../style/Signup.css";

const Signup: React.FC = () => {
  const [isSignup, setIsSignup] = useState(true); // State to toggle between signup and login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSignup) {
      // Handle the signup logic here
      console.log({ firstName, lastName, email, password, number, username });
    } else {
      // Handle the login logic here
      console.log({ email, password });
    }
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 className="form-title">{isSignup ? "Sign Up" : "Login"}</h2>

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
