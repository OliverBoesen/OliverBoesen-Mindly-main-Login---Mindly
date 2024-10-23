// src/components/Login.jsx
import React from "react";
import "../index.css";
import LoginStreg from "../assets/thumbnail_LogIn.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="login-overskrift">
        <h1>Log In</h1>
        <p>
          Not a Mindly yet? Sign up <NavLink to="/Signup">here</NavLink>
        </p>
      </div>

      <div className="login-container">
        <div className="login-username">
          <h3>Username</h3>
          <input type="text" placeholder="Enter your Username" />
        </div>

        <div className="login-password">
          <h3>Password</h3>
          <input type="password" placeholder="Enter your Password" />
        </div>
      </div>

      <div className="login-streg">
        <img src={LoginStreg} alt="Log In Thumbnail" />
      </div>

      <div className="login-button">
        <button>
          <p>
            Log In <NavLink to="/Home">here</NavLink>
          </p>
        </button>
      </div>
    </div>
  );
};

export default Login;
