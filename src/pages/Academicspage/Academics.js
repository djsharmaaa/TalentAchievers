import React from 'react'
import NavigationBar from '../../components/LandingPageComponents/NavigationBar/NavigationBar'
import HeroSection from '../../components/LandingPageComponents/HeroSection/HeroSection'
import Testimonial from '../../components/ReusableComponents/Testimonial/Testimonial';
import Footer from '../../components/LandingPageComponents/Footer/Footer';
import CoursesSection from '../../components/LandingPageComponents/CoursesSection/Courses';
import BookDemo from '../../components/AcademinComponents/BookDemo/BookDemo';
import BestEducators from '../../components/AcademinComponents/BestEducators/BestEducators';
import ExploreOfferings from '../../components/AcademinComponents/OurOfferings/ExploreOfferings';
import Studymaterialbtn from '../../components/AcademinComponents/Studymaterialbtn/Studymaterialbtn';
import Getapp from '../../components/LandingPageComponents/GetappSection/Getapp';




const AcademicsTestimonials = [
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
const Academics = () => {
  return (
       <div>


        <NavigationBar/>
        <Studymaterialbtn/>
        <HeroSection/>
        <CoursesSection/>
        <ExploreOfferings/>
        <BestEducators/>
        <BookDemo/>
        <Testimonial title="Testimonials" testimonials={AcademicsTestimonials} />

        <Getapp/>
        <Footer/>
       
       </div>


  );
;}

export default Academics;