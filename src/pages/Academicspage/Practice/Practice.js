import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../../../components/LandingPageComponents/NavigationBar/NavigationBar';
import Footer from '../../../components/ReusableComponents/Footer/Footer';

import Getapp from '../../../components/LandingPageComponents/GetappSection/Getapp';
import BackButton from '../../../components/ReusableComponents/BackButton/Backbutton';
import { FaChevronRight } from 'react-icons/fa';

import "./Practice.css";
import PracticeCard from '../../../components/ReusableComponents/PracticeCard/PracticeCard';

const Practice = () => {





  return (
    <div>
      <NavigationBar />
      <section >
        <Container >
        <Row className="align-items-center mt-5">
  <Col md={1}>
    <BackButton />
  </Col>
  <Col md={11} className="text-end">
    <nav aria-label="breadcrumb" className="custom-breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <a href="/Academics/tweleth" className="breadcrumb-link">CBSE Class 12</a>
        </li>
        <li className="breadcrumb-separator"><FaChevronRight /></li> 
        <li className="breadcrumb-item active" aria-current="page">Practice</li>
      </ol>
    </nav>
  </Col>
</Row>


          <Row className='my-4'>
            <Row className='my-4'>
              <h1>Practice CBSE Class 12</h1>
            </Row>
            <Row className='my-3'>
              <img src='/images/Practice-hero.png' alt='Practice' />
            </Row>

          </Row>

          
          <Row className='my-4'> 
            <Row className='my-2'>
              <h4>Physics</h4>
            </Row>
            <PracticeCard title="Electrostatic" 
                   imageStyle={{ visibility: 'hidden'}}
                  borderColor="#DB82F3"  
                  linkTo="./PracticeTopics"
                   
              />
            <PracticeCard title="Current Electricity"   borderColor="#DB82F3"/>
            <PracticeCard title="Magnetic"  borderColor="#DB82F3"/>
            <PracticeCard title="Electrimagnetic Induction"  borderColor="#DB82F3"/>
            <PracticeCard title="Optics"  borderColor="#DB82F3"/>
            <PracticeCard title="Dual Nation of Radiation"  borderColor="#DB82F3"/>              
          </Row >



          <Row className='my-4'>
            <Row className='my-2'>
              <h4>Chemistry</h4>
            </Row>
            <PracticeCard title="Physical Chemistry"   borderColor="#43AEFF"/>
            <PracticeCard title="Inorganic"  borderColor="#43AEFF"/>
            <PracticeCard title="Organic"  borderColor="#43AEFF"/>         
          </Row>


          <Row className='my-4'>
            <Row className='my-2'>
              <h4>Biology</h4>
            </Row>
            <PracticeCard title="Reproduction"   borderColor="#76FF7E"/>
            <PracticeCard title="Genetic & Evolution"  borderColor="#76FF7E"/>
            <PracticeCard title="Human Welfare"  borderColor="#76FF7E"/>
            <PracticeCard title="Biotechnology"  borderColor="#76FF7E"/>
            <PracticeCard title="Ecology & Environment"  borderColor="#76FF7E"/>
              

                    
                        
          </Row>
        </Container>

      </section>


      <Getapp />
      <Footer />
    </div>
  );
};

export default Practice;
