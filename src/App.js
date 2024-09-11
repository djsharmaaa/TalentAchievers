import React from "react";

import { Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import LoginPage  from "./pages/Loginpage/LoginPage";
import "./global.css";
import Academics from "./pages/Academicspage/Academics";
import CoursesListing from "./pages/Academicspage/CoursesListing";
 import BatchDetails from "./pages/Academicspage/BatchDetails/BatchDetails";
import ScrollToTop from "./components/ScrollToTop";
import MultipleBatches from "./pages/Academicspage/MultipleBatches/MultipleBatches";
import LiveSession from "./pages/Academicspage/LiveSession/LiveSession";
import DigitalResources from "./pages/Academicspage/DIgitalResources/DigitalResources";
import Practice from "./pages/Academicspage/Practice/Practice";
import TestSeries from "./pages/Academicspage/TestSeries/TestSeries";
import NCERTSolution from "./pages/Academicspage/NCERTsolution/NCERTSolution";
import BestEducators from "./components/AcademinComponents/BestEducators/BestEducators";
import TeacherProfile from "./pages/TeacherProfilePage/TeacherProfilepage";
import Tweleth from "./pages/Academicspage/tweleth/Tweleth";
import DigitalResources2 from "./pages/Academicspage/DIgitalResources/DigitalResources2/DigitalResources2";
import TextbookSubject from "./pages/Academicspage/NCERTsolution/TexrbookSubject/TextbookSubject";
import SubjectChapters from "./pages/Academicspage/NCERTsolution/TexrbookSubject/SubjectChapters/SubjectChapters";
import PracticeTopics from "./pages/Academicspage/Practice/PracticeTopics/PracticeTopics";


const App = () => {
  return (


   <>
   <ScrollToTop/>
     <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/LoginPage" element={<LoginPage />} />
    <Route path="/Academics" element={<Academics/>}/>
    <Route path="/Academics/CoursesListing" element={<CoursesListing/>}/>
    <Route path="/Academics/Tweleth" element={<Tweleth/>}/>
    <Route path="/Academics/Tweleth/BatchDetails" element={<BatchDetails/>} />
    <Route path="/Academics/Tweleth/MultipleBatches" element={<MultipleBatches/>} />
    <Route path="/Academics/Tweleth/LiveSession" element={<LiveSession/>}/>
    <Route path="/Academics/Tweleth/DigitalResources" element={<DigitalResources/>} />
    <Route path="/Academics/Tweleth/DigitalResources/DigitalResources2" element={<DigitalResources2/>}/>
    <Route path="/Academics/Tweleth/Practice" element={<Practice/>}  />
    <Route path="/Academics/Tweleth/Practice/PracticeTopics" element={<PracticeTopics/>}  />
    
    <Route path="/Academics/Tweleth/TestSeries" element={<TestSeries/>} />
    <Route path="/Academics/Tweleth/NCERTSolution" element={<NCERTSolution/>} />
    <Route path="/Academics/Tweleth/NCERTSolution/TextbookSubject" element={<TextbookSubject/>} />
    <Route path="/Academics/Tweleth/NCERTSolution/TextbookSubject/SubjectChapters" element={<SubjectChapters/>} />
    
    <Route path="/Academics/BatchDetails" element={<BatchDetails/>}/>
    <Route path="/" element={<BestEducators/>} />
    <Route path="/profile/:id" element={<TeacherProfile/>} />
  </Routes>
   </>
   
      

    
  );
}

export default App;
