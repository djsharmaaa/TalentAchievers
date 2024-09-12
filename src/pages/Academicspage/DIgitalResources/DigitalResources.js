import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../../../components/LandingPageComponents/NavigationBar/NavigationBar';
import Footer from '../../../components/ReusableComponents/Footer/Footer';

import Getapp from '../../../components/LandingPageComponents/GetappSection/Getapp';
import Batches from '../../../components/ReusableComponents/Batches/Batches';
import BackButton from '../../../components/ReusableComponents/BackButton/Backbutton';
import { FaChevronRight } from 'react-icons/fa';

import "./DigitalResources.css";
import SubjectCard from '../../../components/ReusableComponents/SubjectCard/SubjectCard';
import ReusableButtons from '../../../components/ReusableComponents/ReusableButtons/ReusableButtons';

const DigitalResources = () => {





  return (
    <div>
      <NavigationBar />
      <Container>
       
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
        <li className="breadcrumb-item active" aria-current="page">Digital Resources</li>
      </ol>
    </nav>
  </Col>
</Row>
       
        <section>
        <Row className='my-4'>
         <Row className='my-4'>
         <h1>CBSE Class 12 Digital Resources</h1>
         </Row>
            <Row className='my-3'>
              <h5>Popular Subjects for CBSE Class 12</h5>
            </Row>
                       <Col className='my-3' >
                       <Row>
            <SubjectCard linkTo="/Academics/Tweleth/DigitalResources/DigitalResourcesSubjects" imgSrc='/images/p.png' imgAlt='physics' title='Physics' text='500 Courses' />
            <SubjectCard  imgSrc='/images/C.png' imgAlt='Chemistry' title='Chemistry' text='500 Courses'  />
            <SubjectCard  imgSrc='/images/B.png' imgAlt='Biology' title='Biology' text='500 Courses' />
            <SubjectCard  imgSrc='/images/M.png' imgAlt='Math' title='Math'  text='500 Courses' />
            <SubjectCard  imgSrc='/images/E.png' imgAlt='English' title='English' text='500 Courses' />
            <SubjectCard  imgSrc='/images/CS.png' imgAlt='physiComputercs' title='Computer Science' text='500 Courses' />
            <SubjectCard  imgSrc='/images/A.png' imgAlt='Accountancy' title='Accountancy' text='500 Courses' />
            <SubjectCard  imgSrc='/images/BC.png' imgAlt='phBuisness Studiesysics' title='Buisness Studies'  text='500 Courses'/>
            <SubjectCard  imgSrc='/images/G.png' imgAlt='Geography' title='Geography' text='500 Courses' />

                 
               
                        </Row>
                    
                        </Col>
                     
                        </Row>

          <Row className='my-4'>
          <Row className='mb-2 d-flex align-items-center'>
  <Col>
    <h3>Chemistry</h3>
  </Col>
  <Col className="text-end">
    <ReusableButtons  label="View All" linkTo="/Academics/Tweleth/DigitalResources/DigitalResourcesSubjectChapters" customClass="secondary"  style={{ padding: '8px 18px' }}  />
  </Col>
</Row>
            <Col md={4}>
              <Batches
                image="/images/Phy1.png"
                name="Detailed Courses on Ray Optics"
                date="Ended on 25 Apr 2023 - 17 lessons"
              
                teachers="Anamika, Neha"
                showTeachers={true}
             
              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/Phy2.png"
                name="Semiconductors Boards"
                date="Ended on 25 Apr 2023 - 17 lessons"
      
                teachers="Anamika, Neha"
                showTeachers={true}
              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/Phy3.png"
                name="Electrostatics"
                date="Ended on 25 Apr 2023 - 17 lessons"
                teachers="Anamika, Neha"
                showTeachers={true}
              />
            </Col>
          </Row>
          <Row className='my-5'>
          <Row className='mb-2 d-flex align-items-center'>
  <Col>
    <h3>Chemistry</h3>
  </Col>
  <Col className="text-end">
    <ReusableButtons  label="View All" linkTo="/Academics/Tweleth/DigitalResources/DigitalResourcesSubjectChapters" customClass="secondary"  style={{ padding: '8px 18px' }}  />
  </Col>
</Row>
            <Col md={4}>
              <Batches
                image="/images/Che1.png"
                name="Physical Chemistry"
                date="Ended on 25 Apr 2023 - 17 lessons"
              
                teachers="Anamika, Neha"
                showTeachers={true}
             
              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/Phy2.png"
                name="Detailed Course on Organics"
                date="Ended on 25 Apr 2023 - 17 lessons"
      
                teachers="Anamika, Neha"
                showTeachers={true}
              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/Che3.png"
                name="Detailed Course on Atoms"
                date="Ended on 25 Apr 2023 - 17 lessons"
                teachers="Anamika, Neha"
                showTeachers={true}
              />
            </Col>
          </Row>

        


    
        </section>
      
      </Container>
      <Getapp />
      <Footer />
    </div>
  );
};

export default DigitalResources;
