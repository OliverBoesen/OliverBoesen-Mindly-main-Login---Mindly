// src/components/Login.jsx
import React from "react";
import "../index.css";
import LoginStreg from "../assets/thumbnail_LogIn.png";
import { NavLink } from "react-router-dom";

const Login = () => {
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
        <div className="login-username">
          <h3>Username</h3>
          <input type="text" placeholder="Enter your Username" />
        </div>

        <div className="login-password">
          <h3>Password</h3>
          <input type="password" placeholder="Enter your Password" />
        </div>
      </div>

      {/* Streg i bunden af skærmen */}

      <div className="login-streg">
        <img src={LoginStreg} alt="Log In Thumbnail" />
      </div>

      {/* Login knap */}

      <div className="login-button">
        <NavLink to="/Home">
          <button> Log In here</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
