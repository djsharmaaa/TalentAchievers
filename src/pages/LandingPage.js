
import React from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar'; // Adjust the path as per your folder structure
import HeroSection from '../components/HeroSection/HeroSection';
import Footer from '../components/Footer/Footer'

const LandingPage = () => {
    return (
        <div>
            <NavigationBar />
            <HeroSection/>
            <Footer/>
          
        </div>
    );
};

export default LandingPage;
