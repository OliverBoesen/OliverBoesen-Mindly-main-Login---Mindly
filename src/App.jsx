// src/App.jsx
import React from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MindlyPost from "./pages/MindlyPost";
import HomeScreen from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<HomeScreen />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/MindlyPost" element={<MindlyPost />} />
      </Routes>
    </>
  );
}

export default App;
