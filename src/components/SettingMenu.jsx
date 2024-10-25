import React, { useEffect, useState } from "react"; // Importer React og useState-hooket
import { NavLink } from "react-router-dom";
import AppOpen from "../assets/AppOpen.png";
import Person from "../assets/Profile.png";
import Notifications from "../assets/Notifications.png";
import Lock from "../assets/Lock.png";
import Arrow from "../assets/ArrowRight.png";

export default function SettingMenu() {
  const [username, setUsername] = useState(""); // State til at gemme brugernavnet

  // Hent brugernavnet fra localStorage, når komponenten mountes
  useEffect(() => {
    const storedUserData = localStorage.getItem("user"); // Hent brugerdata fra localStorage
    if (storedUserData) {
      const userData = JSON.parse(storedUserData); // Parse JSON-strengen til et objekt
      setUsername(userData.username); // Sæt brugernavnet i state
    }
  }, []);

  return (
    <div className="settings-front">
      <h1>Settings</h1>
      <div className="setting-img">
        <img src={AppOpen} alt="Mindly" />
      </div>
      <h2>{username || "User"}</h2>{" "}
      {/* Viser brugernavnet, eller "User" hvis det ikke er tilgængeligt */}
      <div className="menu-items">
        <NavLink to="/personal" className="menu-personal">
          <img src={Person} alt="Personal" className="icon" />
          <span className="text">Personal Information</span>
          <img src={Arrow} alt="Arrow" className="arrow" />
        </NavLink>

        <NavLink to="/notifications" className="menu-notifications">
          <img src={Notifications} alt="Notifications" className="icon" />
          <span className="text">Notifications</span>
          <img src={Arrow} alt="Arrow" className="arrow" />
        </NavLink>

        <NavLink to="/privacy" className="menu-privacy">
          <img src={Lock} alt="Privacy" className="icon" />
          <span className="text">Privacy & Safety</span>
          <img src={Arrow} alt="Arrow" className="arrow" />
        </NavLink>
      </div>
      <div>
        <NavLink className="cta_red cta_settings" to="/delete" type="button">
          Delete profile
        </NavLink>
      </div>
    </div>
  );
}
