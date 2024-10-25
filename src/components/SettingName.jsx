import React, { useState, useEffect } from "react";

export default function SettingMenu() {
  const [email, setEmail] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState(""); // State for bekræftelsesbesked

  // Hent email fra "user"-objektet i localStorage ved første indlæsning
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setEmail(parsedUser.email); // Sæt email fra "user"-objektet som den aktuelle email
    }
  }, []);

  // Funktion til at håndtere ændringer i input-feltet
  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Opdater email state ved input ændringer
  };

  // Funktion til at gemme den ændrede email i "user"-objektet
  const handleSave = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      parsedUser.email = email; // Opdater email-feltet i objektet
      localStorage.setItem("user", JSON.stringify(parsedUser)); // Gem opdateret objekt tilbage i localStorage
      setConfirmationMessage("Your email has been changed!"); // Sæt bekræftelsesbesked
      setTimeout(() => setConfirmationMessage(""), 3000); // Fjern beskeden efter 3 sekunder
    }
  };

  return (
    <div className="settings-email">
      <h1>Email</h1>
      <p>Change email here</p>
      <div>
        <div className="settings-change-mail">
          <input
            type="text"
            placeholder="Change your Email"
            value={email} // Viser den aktuelle email i input-feltet
            onChange={handleEmailChange} // Håndter input ændringer
          />
        </div>
        <button
          type="button"
          className="save-email-button"
          onClick={handleSave} // Kald handleSave ved klik
        >
          Save
        </button>
        {confirmationMessage && (
          <p className="confirmation-message">{confirmationMessage}</p> // Viser bekræftelsesbeskeden
        )}
      </div>
    </div>
  );
}
