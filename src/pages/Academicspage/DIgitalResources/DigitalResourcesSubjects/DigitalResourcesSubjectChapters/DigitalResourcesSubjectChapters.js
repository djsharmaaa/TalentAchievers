import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import NavigationBar from '../../../../../components/LandingPageComponents/NavigationBar/NavigationBar';
import Footer from '../../../../../components/ReusableComponents/Footer/Footer';

import Batches from '../../../../../components/ReusableComponents/Batches/Batches';
import { FaChevronRight } from 'react-icons/fa';
import Getapp from '../../../../../components/LandingPageComponents/GetappSection/Getapp';
import BackButton from '../../../../../components/ReusableComponents/BackButton/Backbutton';
import ReusableButtons from '../../../../../components/ReusableComponents/ReusableButtons/ReusableButtons';
// import SubjectCard from '../../../components/ReusableComponents/SubjectCard/SubjectCard';

const DigitalResourcesSubjectCHapters = () => {





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
            <Col md={2}>
            <Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic" className="ongoing-dropdown custom-dropdown">
    <span className="dropdown-text">All</span>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Completed</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Ongoing</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Upcoming</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

    </Col>
    <Col md={2}>
    <Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic" className="ongoing-dropdown custom-dropdown">
    <span className="dropdown-text">Courses</span>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Crash Course</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Theory Courses</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Practice</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

</Col>
            </Row>

          <Row className='my-4'>
          
          <Row className='mb-2 d-flex align-items-center'>
  <Col>
    <h3>Physics</h3>
  </Col>
  <Col className="text-end">
    <ReusableButtons label="View All" linkTo="" customClass="secondary"  style={{ padding: '8px 18px' }}  />
  </Col>
</Row>

<Row>
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
            <Row>
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
                    </Row>
      
        


    
        </section>
      
      </Container>
      <Getapp />
      <Footer />
    </div>
  );
};

export default DigitalResourcesSubjectCHapters;
