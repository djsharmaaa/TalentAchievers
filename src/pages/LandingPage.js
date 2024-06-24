
import React from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar'; // Adjust the path as per your folder structure
import HeroSection from '../components/HeroSection/HeroSection';
import GoalSection from '../components/MainGoalSection/GoalSection';
import Footer from '../components/Footer/Footer'
import CoursesSection from '../components/CoursesSection/Courses';

const LandingPage = () => {
    return (
        <div>
            <NavigationBar />
            <HeroSection/>
            <GoalSection/>
            <CoursesSection/>
            <Footer/>
          
        </div>
    );
};

export default LandingPage;
