
import React from 'react';
import NavigationBar from '../components/LandingPageComponents/NavigationBar/NavigationBar'; 
import HeroSection from '../components/LandingPageComponents/HeroSection/HeroSection';
import GoalSection from '../components/LandingPageComponents/MainGoalSection/GoalSection';
import Footer from '../components/LandingPageComponents/Footer/Footer'
import CoursesSection from '../components/LandingPageComponents/CoursesSection/Courses';
import  CollegeSection  from '../components/LandingPageComponents/CollegeSection/CollegeSection';
import Competitive from '../components/LandingPageComponents/CompetitiveSection/Competitive';
import  SkillDevelopment  from '../components/LandingPageComponents/SkillDevelopmentSection/SkillDevelopment';
import { Studyabroad } from '../components/LandingPageComponents/StudyabroadSection/Studyabroad';
import Getapp from '../components/LandingPageComponents/GetappSection/Getapp';
import Blogs from '../components/LandingPageComponents/Blogs&ArticleSection/Blogs';
import Testimonial from '../components/LandingPageComponents/Testimonial/Testimonial';
import Educators from '../components/LandingPageComponents/Educators/Educators';


const LandingPage = () => {
    return (
        <div>
            <NavigationBar />
            <HeroSection/>
            <GoalSection/>
            <CoursesSection/>
            <CollegeSection/>
            <Competitive/>
            <SkillDevelopment/>
            <Studyabroad/>
            <Testimonial/>
            <Getapp/>
            <Blogs/>
            <Educators/>
            <Footer/>
          
        </div>
    );
};

export default LandingPage;
