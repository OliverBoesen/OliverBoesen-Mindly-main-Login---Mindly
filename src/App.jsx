// src/App.jsx
import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MindlyPost from "./pages/MindlyPost";
import HomeScreen from "./pages/Home";
// Nikolines sider
import OnboardingPageOne from "./pages/Onboarding/OnboardingFirst";
import SettingsFrontScreen from "./pages/Settings/SettingsFrontScreen";
import SettingsPersonal from "./pages/Settings/SettingsPersonal";
import SettingsName from "./pages/Settings/SettingsName";
import SettingsLanguage from "./pages/Settings/SettingsLanguage";
import SettingsNotifications from "./pages/Settings/SettingsNotifications";
import SettingsPrivacy from "./pages/Settings/SettingsPrivacy";
import SettingsDelete from "./pages/Settings/SettingsDelete";
import SettingsConfirm from "./pages/Settings/SettingsConfirm";
import Error from "./pages/Error";
import SettingUsername from "./pages/Settings/SettingsUsername";
import SettingPassword from "./pages/Settings/SettingsPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<HomeScreen />} />
        <Route path="*" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/MindlyPost" element={<MindlyPost />} />

        {/* Nikoline sider */}

        <Route path="/" element={<OnboardingPageOne />} />
        <Route path="/settings" element={<SettingsFrontScreen />} />
        <Route path="/personal" element={<SettingsPersonal />} />
        <Route path="/name" element={<SettingsName />} />
        <Route path="/language" element={<SettingsLanguage />} />
        <Route path="/notifications" element={<SettingsNotifications />} />
        <Route path="/privacy" element={<SettingsPrivacy />} />
        <Route path="/delete" element={<SettingsDelete />} />
        <Route path="/confirm-delete" element={<SettingsConfirm />} />
        <Route path="/Username" element={<SettingUsername />} />
        <Route path="/error" element={<Error />} />
        <Route path="/Password" element={<SettingPassword />} />
      </Routes>
    </>
  );
}

export default App;
