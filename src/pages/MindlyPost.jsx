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

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
  };

  // Return af indhold
  return (
    <div>
      <div className="MindlyPost-Overskrift">
        <h1>Feeling Grateful?</h1>
      </div>

      <div className="MindlyPost-streg-box">
        <div className="MindlyPost-Hoejre">
          <img src={HoejreStreg} alt="" />
        </div>

        <div className="MindlyPost-Venstre">
          <img src={VenstreStreg} alt="" />
        </div>
      </div>

      <div className="MindlyPost-UnderOverskrift">
        <p>
          Write down your grateful thoughts and save it to your Mindly’s to keep
        </p>
      </div>

      <div className="MindlyPost-Subject">
        <h3>Subject</h3>
        <input type="text" placeholder="Write a subject line" />
      </div>

      <div className="MindlyPost-Text">
        <h3>Text</h3>
        <textarea placeholder="Use this space to write your personal Mindly"></textarea>
      </div>

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

      <div className="MindlyPost-AddPhoto">
        <h4>Add photo</h4>
        <img src={AddPhoto} />
      </div>

      <div className="MindlyPost-PostKnap">
        <button>
          <p>Create Mindly</p>
        </button>
      </div>
    </div>
  );
};

export default MindlyPost;
