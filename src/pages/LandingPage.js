
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
import Testimonial from '../components/ReusableComponents/Testimonial/Testimonial';
import Educators from '../components/LandingPageComponents/Educators/Educators';



const LandingPageTestimonials = [
    {
            id: 1,
            name: 'Kavya',
            Location: 'India',
            imageSrc: './images/testimonial1.png',
            testimonial: '"With their comprehensive materials and supportive teachers, I felt confident and prepared. Thanks to them, I achieved excellent results and got into my dream college"',
          },
          {
            id: 2,
            name: "Rayan's Mother",
            Location: 'Delhi, India',
            imageSrc: './images/testimonial2.png',
            testimonial: '"With their comprehensive materials and supportive teachers, I felt confident and prepared. Thanks to them, I achieved excellent results and got into my dream college"',
        },
          {
            id: 3,
            name: 'Komal',
            Location: 'Mumbai, India',
            imageSrc: './images/testimonial1.png',
            testimonial: '"With their comprehensive materials and supportive teachers, I felt confident and prepared. Thanks to them, I achieved excellent results and got into my dream college"',
        },
          {
            id: 4,
            name: 'Shreya',
            Location: 'UP, India',
            imageSrc: './images/testimonial2.png',
            testimonial: '"With their comprehensive materials and supportive teachers, I felt confident and prepared. Thanks to them, I achieved excellent results and got into my dream college"',
        },
]

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
            <Testimonial title="Testimonials" testimonials={LandingPageTestimonials} />
            <Getapp/>
            <Blogs/>
            <Educators/>
            <Footer/>
          
        </div>
    );
};

export default LandingPage;
