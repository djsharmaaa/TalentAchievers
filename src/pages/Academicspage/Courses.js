import React from 'react'
import NavigationBar from '../../components/LandingPageComponents/NavigationBar/NavigationBar'
import CourseFilter from '../../components/AcademinComponents/CoursesByFilter/CourseFilter';
import Footer from '../../components/LandingPageComponents/Footer/Footer';
import Studymaterialbtn from '../../components/AcademinComponents/Studymaterialbtn/Studymaterialbtn';
import Testimonial from '../../components/LandingPageComponents/Testimonial/Testimonial';
import Educators from '../../components/LandingPageComponents/Educators/Educators';

const Courses = () => {
  return (
       <div>


        <NavigationBar/>
        <Studymaterialbtn/>
        <CourseFilter/>
        <Educators/>
        <Testimonial/>
        <Footer/>
       
       </div>


  );
;}

export default Courses;