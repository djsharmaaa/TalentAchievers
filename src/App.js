import React from "react";

import { Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import LoginPage  from "./pages/Loginpage/LoginPage";
import "./global.css";
import Academics from "./pages/Academicspage/Academics";
import Courses from "./pages/Academicspage/Courses";
const App = () => {
  return (


    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/LoginPage" element={<LoginPage />} />
    <Route path="/Academics" element={<Academics/>}/>
    <Route path="/Courses" element={<Courses/>}/>
  </Routes>
      

    
  );
}

export default App;
