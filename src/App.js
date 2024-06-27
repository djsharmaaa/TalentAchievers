import React from "react";

import { Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import LoginPage  from "./pages/LoginPage";
import "./global.css";
const App = () => {
  return (


    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/LoginPage" element={<LoginPage />} />
  </Routes>
      

    
  );
}

export default App;
