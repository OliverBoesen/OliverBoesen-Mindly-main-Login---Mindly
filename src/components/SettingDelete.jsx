import { NavLink } from "react-router-dom";

export default function SettingMenu() {
  return (
    <div className="settings-front settings-delete">
      <h1>Delete profile</h1>
      <div className="delete-text">
        <p className="delete-sad">We are sad to see you leave. </p>
        <p>
          Your Mindly's will be deleted and you will NOT be able to recover your
          Mindly's again.
        </p>

        <p className="delete-sure"> Are you sure you want to delete Mindly?</p>
      </div>
      <div className="delete-navigate">
        <div>
          <NavLink className="cta_red cta_cancel" to="/settings" type="button">
            Cancel
          </NavLink>
        </div>
        <div>
          <NavLink
            className="cta_red cta_delete"
            to="/confirm-delete"
            type="button"
          >
            Delete
          </NavLink>
        </div>
      </div>
    </div>
  );
}
