export default function SettingMenu() {
  return (
    <div className="settings-front">
      <h1>Name</h1>
      <h3>What should we call you?</h3>
      <div className="name-input">
        <div className="first-name">
          <span>Nicolaj</span>
        </div>
        <div className="line"></div>
        <div className="last-name">
          <span>Last name</span>
        </div>
      </div>
      <div>
        <button type="button" className="save-name">
          Save
        </button>
      </div>
    </div>
  );
}
