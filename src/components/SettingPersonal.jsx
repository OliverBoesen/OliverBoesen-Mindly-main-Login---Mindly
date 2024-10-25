import React, { useEffect, useState } from "react"; // Importer React, useEffect og useState
import { NavLink } from "react-router-dom";
import ArrowSettings from "../assets/ArrowSettings.png";

export default function SettingMenu() {
  const [email, setEmail] = useState(""); // State til at gemme email

  return (
    <div className="settings-front">
      <h1>Personal information</h1>

      <NavLink to="/Name" className="name-card">
        <div className="left-section">
          <span className="label">Email</span>
          <span className="name">{"Change your Email"}</span>{" "}
          {/* Vis den hentede email eller "Not set" hvis den ikke findes */}
        </div>
        <div className="right-section">
          <img src={ArrowSettings} alt="Arrow" className="arrow-personal" />
        </div>
      </NavLink>

      <NavLink to="/Username" className="name-card">
        <div className="left-section">
          <span className="label">Username</span>
          <span className="name">Change your username</span>
        </div>
        <div className="right-section">
          <img src={ArrowSettings} alt="Arrow" className="arrow-personal" />
        </div>
      </NavLink>

      <NavLink to="/Password" className="name-card">
        <div className="left-section">
          <span className="label">Password</span>
          <span className="name">Change your password</span>
        </div>
        <div className="right-section">
          <img src={ArrowSettings} alt="Arrow" className="arrow-personal" />
        </div>
      </NavLink>

      <NavLink to="/Language" className="name-card">
        <div className="left-section">
          <span className="label">Language</span>
          <span className="name">Change language</span>
        </div>
        <div className="right-section">
          <img src={ArrowSettings} alt="Arrow" className="arrow-personal" />
        </div>
      </NavLink>
    </div>
  );
}
