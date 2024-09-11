import React from 'react'
import NavigationBar from '../../components/LandingPageComponents/NavigationBar/NavigationBar'
import CourseFilter from '../../components/AcademinComponents/CoursesByFilter/CourseFilter';
import Footer from '../../components/ReusableComponents/Footer/Footer';

import Studymaterialbtn from '../../components/AcademinComponents/Studymaterialbtn/Studymaterialbtn';
import Testimonial from '../../components/ReusableComponents/Testimonial/Testimonial';
import Educators from '../../components/LandingPageComponents/Educators/Educators';



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
const CoursesListing = () => {
  return (
       <div>


        <NavigationBar/>
        <Studymaterialbtn/>
        <CourseFilter/>
        <Educators/>
        <Testimonial title="Testimonials" testimonials={AcademicsTestimonials} />

        <Footer/>
       
       </div>


  );
;}

export default CoursesListing;