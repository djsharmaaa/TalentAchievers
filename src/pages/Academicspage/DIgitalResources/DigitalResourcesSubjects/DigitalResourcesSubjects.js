import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../../../../components/LandingPageComponents/NavigationBar/NavigationBar';
import Footer from '../../../../components/ReusableComponents/Footer/Footer';

import Batches from '../../../../components/ReusableComponents/Batches/Batches';
import { FaChevronRight } from 'react-icons/fa';
import Getapp from '../../../../components/LandingPageComponents/GetappSection/Getapp';
import BackButton from '../../../../components/ReusableComponents/BackButton/Backbutton';
import PracticeCard from '../../../../components/ReusableComponents/PracticeCard/PracticeCard';
import ReusableButtons from '../../../../components/ReusableComponents/ReusableButtons/ReusableButtons';
// import SubjectCard from '../../../components/ReusableComponents/SubjectCard/SubjectCard';

const DigitalResourcesSubjects = () => {





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
        <li className="breadcrumb-separator"><FaChevronRight /></li> 

        <li className="breadcrumb-item active" aria-current="page">Physics</li>

      </ol>
    </nav>
  </Col>
</Row>
       
        <section>
        <Row className='my-4'>
         <Row className='my-4'>
         <h1 >CBSE Class 12 Digital Resources</h1>
         </Row>
        
            <Row className='my-3'>
              <img src='/images/Practice-hero.png' alt='Practice' />
            </Row>
                     
                        </Row>
                        <Row className='my-4'> 
            <Row className='my-2'>
              <h4>Chapter</h4>
            </Row> 
            <PracticeCard title="Electrostatic"  borderColor="#DB82F3"  />
            <PracticeCard title="Current Electricity"   borderColor="#DB82F3"/>
            <PracticeCard title="Magnetic"  borderColor="#DB82F3"/>
            <PracticeCard title="Electrimagnetic Induction"  borderColor="#DB82F3"/>
            <PracticeCard title="Optics"  borderColor="#DB82F3"/>
            <PracticeCard title="Dual Nation of Radiation"  borderColor="#DB82F3"/>    
            <PracticeCard title="Atoms"  borderColor="#DB82F3"/>
            <PracticeCard title="Nuclei"  borderColor="#DB82F3"/>
            <PracticeCard title="Semiconductors Electronics"  borderColor="#DB82F3"/>
            <PracticeCard title="Communication Systems"  borderColor="#DB82F3"/>
            <PracticeCard title="Crash Course"  borderColor="#DB82F3"/>

          </Row >

          <Row className='my-4'>
          <Row className='mb-2 d-flex align-items-center'>
  <Col>
    <h3>Physics</h3>
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
                showLockIcon={true}
                teachers="Anamika, Neha"
                showTeachers={true}
             
              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/Phy2.png"
                name="Semiconductors Boards"
                date="Ended on 25 Apr 2023 - 17 lessons"
                showLockIcon={true}
      
                teachers="Anamika, Neha"
                showTeachers={true}
              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/Phy3.png"
                name="Electrostatics"
                date="Ended on 25 Apr 2023 - 17 lessons"
                showLockIcon={true} 
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

export default DigitalResourcesSubjects;
