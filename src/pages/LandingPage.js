
import React from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar'; // Adjust the path as per your folder structure
import HeroSection from '../components/HeroSection/HeroSection';
import GoalSection from '../components/MainGoalSection/GoalSection';
import Footer from '../components/Footer/Footer'
import CoursesSection from '../components/CoursesSection/Courses';
import  CollegeSection  from '../components/CollegeSection/CollegeSection';
import Competitive from '../components/CompetitiveSection/Competitive';
import  SkillDevelopment  from '../components/SkillDevelopmentSection/SkillDevelopment';
import { Studyabroad } from '../components/StudyabroadSection/Studyabroad';
import Getapp from '../components/GetappSection/Getapp';
import Blogs from '../components/Blogs&ArticleSection/Blogs';
import Testimonial from '../components/Testimonial/Testimonial';
import Educators from '../components/Educators/Educators';


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
