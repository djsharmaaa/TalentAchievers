import React from 'react'
import NavigationBar from '../../components/LandingPageComponents/NavigationBar/NavigationBar'
import HeroSection from '../../components/LandingPageComponents/HeroSection/HeroSection'
import Testimonial from '../../components/LandingPageComponents/Testimonial/Testimonial';
import Footer from '../../components/LandingPageComponents/Footer/Footer';
import CoursesSection from '../../components/LandingPageComponents/CoursesSection/Courses';
import BookDemo from '../../components/AcademinComponents/BookDemo/BookDemo';
import BestEducators from '../../components/AcademinComponents/BestEducators/BestEducators';
import ExploreOfferings from '../../components/AcademinComponents/OurOfferings/ExploreOfferings';

const Academics = () => {
  return (
       <div>


        <NavigationBar/>
        <HeroSection/>
        <CoursesSection/>
        <ExploreOfferings/>
        <BestEducators/>
        <BookDemo/>
        <Testimonial/>
        <Footer/>
       
       </div>


  );
;}

export default Academics;