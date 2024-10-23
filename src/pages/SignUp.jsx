import React, { useState } from "react"; // Importer React og useState-hooket
import "../index.css"; // Importer CSS-stile
import SignUpStreg from "../assets/SignUp.png"; // Importer sign-up billedet
import { NavLink, useNavigate } from "react-router-dom"; // Importer NavLink til navigation og useNavigate til programmatisk navigation

const SignUp = () => {
  // State-variabler til at håndtere brugerinput og fejl
  const [email, setEmail] = useState(""); // Email state
  const [password, setPassword] = useState(""); // Password state
  const [confirmPassword, setConfirmPassword] = useState(""); // Bekræft password state
  const [username, setUsername] = useState(""); // Brugernavn state
  const [error, setError] = useState(""); // Fejlmeddelelse state
  const navigate = useNavigate(); // Initialiser useNavigate til navigation

  // Funktion til at håndtere indsendelse af tilmeldingsformularen
  const handleSubmit = () => {
    // Valider input
    if (!email || !password || !confirmPassword || !username) {
      setError("Please fill in all fields."); // Vis fejl, hvis et felt er tomt
      return; // Afslut funktionen, hvis der er en fejl
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match."); // Vis fejl, hvis password ikke matcher
      return; // Afslut funktionen, hvis der er en fejl
    }

    // Gem brugerdata i local storage som en JSON-streng
    const userData = { email, password, username }; // Opret et objekt med brugerdata
    localStorage.setItem("user", JSON.stringify(userData)); // Gem brugerdata i local storage
    setError(""); // Ryd eksisterende fejlmeddelelser

    // Naviger til login-siden efter succesfuld tilmelding
    navigate("/Login");
  };

  return (
    <div>
      <div className="signup-overskrift">
        <h1>Sign Up</h1>
        <p>
          You’re now one step closer <br /> to becoming a Mindly
        </p>
      </div>

      <div className="signup-container">
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Vis fejlmeddelelse, hvis der er en */}
        <div className="signup-email">
          <h3>Email</h3>
          <input
            type="text"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Opdater email state ved inputændring
          />
        </div>
        <div className="signup-password">
          <h3>Password</h3>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Opdater password state ved inputændring
          />
        </div>
        <div className="signup-confirm-password">
          <h3>Confirm Password</h3>
          <input
            type="password"
            placeholder="Confirm your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} // Opdater bekræft password state ved inputændring
          />
        </div>
        <div className="signup-call-you">
          <h3>What should we call you?</h3>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Opdater brugernavn state ved inputændring
          />
        </div>
      </div>

      <div className="signup-streg">
        <img src={SignUpStreg} alt="Sign Up Thumbnail" />
      </div>

      <div className="signup-button">
        <button onClick={handleSubmit}>
          {" "}
          {/* Kald handleSubmit ved klik på knappen */}
          <p>Sign Up</p>
        </button>
      </div>

      <div className="signup-already-acc">
        <p>
          Already have an account? Log in <NavLink to="/Login">here</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
