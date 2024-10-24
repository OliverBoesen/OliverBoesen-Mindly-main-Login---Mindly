// src/components/Login.jsx
import React, { useState } from "react";
import "../index.css";
import LoginStreg from "../assets/thumbnail_LogIn.png";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState(""); // state til brugernavn
  const [password, setPassword] = useState(""); // state til adgangskode
  const [error, setError] = useState(""); // state til fejlmeddelelser
  const navigate = useNavigate();

  // Funktion til at håndtere login
  const handleLogin = () => {
    // Hent gemte brugerdata fra localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    // Tjek om brugernavn og adgangskode stemmer overens med gemte data
    if (username === storedUser.username && password === storedUser.password) {
      localStorage.setItem("username", username); // Gem brugernavn i localStorage
      setError(""); // Ryd fejlmeddelelse
      navigate("/Home"); // Naviger til Home-siden
    } else {
      setError("Incorrect username or password.");
    }
  };

  return (
    <div>
      {/* Overskrift og Under overskrift */}
      <div className="login-overskrift">
        <h1>Log In</h1>
        <p>
          Not a Mindly yet? Sign up <NavLink to="/Signup">here</NavLink>
        </p>
      </div>

      {/* Forms til at logge ind */}
      <div className="login-container">
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Vis fejlmeddelelse */}
        <div className="login-username">
          <h3>Username</h3>
          <input
            type="text"
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Opdaterer username state
          />
        </div>
        <div className="login-password">
          <h3>Password</h3>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Opdaterer password state
          />
        </div>
      </div>

      {/* Streg i bunden af skærmen */}
      <div className="login-streg">
        <img src={LoginStreg} alt="Log In Thumbnail" />
      </div>

      {/* Login knap */}
      <div className="login-button">
        <button onClick={handleLogin}> Log In here</button>
      </div>
    </div>
  );
};

export default Login;
