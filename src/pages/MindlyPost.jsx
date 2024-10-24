import "../index.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
// Streger
import VenstreStreg from "../assets/LeftIllustration.png";
import HoejreStreg from "../assets/RightIllustration.png";
// Smileys Uden farve
import HeltSurUdenFarve from "../assets/HeltSurUdenFarve.png";
import LidtSurUdenFarve from "../assets/LidtSurUdenFarve.png";
import MellemSurUdenFarve from "../assets/MellemSurUdenFarve.png";
import LidtGladUdenFarve from "../assets/LidtGladUdenFarve.png";
import HeltGladUdenFarve from "../assets/HeltGladUdenFarve.png";
// Smileys med farve
import HeltSurMedFarve from "../assets/HeltSurMedFarve.png";
import LidtSurMedFarve from "../assets/LidtSurMedFarve.png";
import MellemSurMedFarve from "../assets/MellemSurMedFarve.png";
import LidtGladMedFarve from "../assets/LidtGladMedFarve.png";
import HeltGladMedFarve from "../assets/HeltGladMedFarve.png";
// Tilføj billede IMG
import AddPhoto from "../assets/AddPhoto.png";

// Script til skift af billeder
const MindlyPost = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [photo, setPhoto] = useState(null); // State til gemt billede

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
  };

  // Håndter billede-upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        5;
        setPhoto(reader.result); // Sætter preview af billedet
      };
      reader.readAsDataURL(file); // Læs fil som data-URL
    }
  };

  return (
    <div>
      {/* Overskrift */}
      <div className="MindlyPost-Overskrift">
        <h1>Feeling Grateful?</h1>
      </div>

      {/* Steger i toppen af skærmen */}
      <div className="MindlyPost-streg-box">
        <div className="MindlyPost-Hoejre">
          <img src={HoejreStreg} alt="" />
        </div>

        <div className="MindlyPost-Venstre">
          <img src={VenstreStreg} alt="" />
        </div>
      </div>

      {/* Under Overskrift */}

      <div className="MindlyPost-UnderOverskrift">
        <p>
          Write down your grateful thoughts and save it to your Mindly’s to keep
        </p>
      </div>

      {/* Forms Emne og Tekst */}

      <div className="MindlyPost-Subject">
        <h3>Subject</h3>
        <input type="text" placeholder="Write a subject line" />
      </div>

      <div className="MindlyPost-Text">
        <h3>Text</h3>
        <textarea placeholder="Use this space to write your personal Mindly"></textarea>
      </div>

      {/* Vælge humør ved hjælp af smileys */}

      <div className="mindly-post-smiley-box">
        <h3>Select your emotion</h3>
        <div className="MindlyPost-Smiley-Container">
          <div className="MindlyPost-Smiley">
            <img
              src={
                selectedMood === "HeltSur" ? HeltSurMedFarve : HeltSurUdenFarve
              }
              alt="Helt Sur"
              onClick={() => handleMoodClick("HeltSur")}
            />
            <img
              src={
                selectedMood === "LidtSur" ? LidtSurMedFarve : LidtSurUdenFarve
              }
              alt="Lidt Sur"
              onClick={() => handleMoodClick("LidtSur")}
            />
            <img
              src={
                selectedMood === "MellemSur"
                  ? MellemSurMedFarve
                  : MellemSurUdenFarve
              }
              alt="Mellem Sur"
              onClick={() => handleMoodClick("MellemSur")}
            />
            <img
              src={
                selectedMood === "LidtGlad"
                  ? LidtGladMedFarve
                  : LidtGladUdenFarve
              }
              alt="Lidt Glad"
              onClick={() => handleMoodClick("LidtGlad")}
            />
            <img
              src={
                selectedMood === "HeltGlad"
                  ? HeltGladMedFarve
                  : HeltGladUdenFarve
              }
              alt="Helt Glad"
              onClick={() => handleMoodClick("HeltGlad")}
            />
          </div>
        </div>
      </div>

      {/* Tilføj photo fra Fotobibliotek eller computer */}

      <div className="MindlyPost-AddPhoto">
        <h4>Add photo</h4>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          style={{ display: "none" }}
          id="photo-upload"
        />
        <label htmlFor="photo-upload">
          <img
            src={photo || AddPhoto} // Hvis der er uploadet billede, vis det. Ellers vis placeholder
            alt="Upload"
            style={{
              width: "25%",
              maxWidth: "300px", // Tilpas billedet til en passende størrelse til iPhone 12+ skærm
              height: "auto",
              cursor: "pointer",
            }}
          />
        </label>
      </div>

      {/* Tilføj Mindly knap */}

      <div className="MindlyPost-PostKnap">
        <NavLink to="/profile">
          <button>Create Mindly</button>{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default MindlyPost;
