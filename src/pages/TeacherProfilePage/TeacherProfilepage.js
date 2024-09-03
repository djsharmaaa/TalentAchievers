import React from 'react';
 import { Container, Row, Col, Button } from 'react-bootstrap';
import NavigationBar from '../../components/LandingPageComponents/NavigationBar/NavigationBar';
import Getapp from '../../components/LandingPageComponents/GetappSection/Getapp';
import Footer from '../../components/LandingPageComponents/Footer/Footer';

import Batches from '../../components/ReusableComponents/Batches/Batches';



const TeacherProfile = () => {





  return (
    <div>
      <NavigationBar/>
       
      {/* <section>
        <Container>
          <Row className="align-items-center ">
            <Col md={1}>
              <BackButton />
            </Col>
            <Col md={11} className="text-end">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="/Academics/tweleth" style={{ textDecoration: 'none' }}>CBSE Class 12</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Test Series</li>
                </ol>
              </nav>
            </Col>
          </Row>


          <Row className='my-4'>
            <Row className='my-4'>
              <h1>Test series for CBSE Class 12</h1>
            </Row>
            <Row>
              <h6>CBSE Class 12 Test Series</h6>
            </Row>
            <Row className='my-3'>
              <img src='/images/TestSeries-hero.png' alt='Practice' />
            </Row>

          </Row>

        </Container>

      </section> */}
      
        <section  >
          <Container>
            <Row className='my-5'>
            <Col md={4}>
            <img src='/images/teacher_vinod.png' alt='vinod' />
            </Col>
            <Col md={8} className='d-flex align-items-left'>
            <div >
              <h1 className='mb-3'>Vinod Kumar</h1>
              <p className='mb-0'> Founder of Converting & Co-Founder of multi figures e-com DTC brand </p>
              <p><img src='/images/teachersL.png' alt='langugaes' /> Speaks : English, Hindi</p>
                <Row>
                <Col md={3}>
                <p>Watch Mins</p>
                <h4>20 M</h4></Col>
                <Col md={6 }>
                <p>Watch Mins(In last 30 days)</p>
                <h4>20 M</h4></Col>
                <Col md={2}>
                <p>Reviews</p>
                <h4>2K</h4></Col>
                <Col md={1}>
                <p>Followers</p>
                <h4>2M</h4></Col>
                </Row>
            <Col md={4}> <Button  variant='primary  btn-sm' className='buy-button'>Follow</Button>
            </Col>

             
            </div>
            </Col>
            </Row>
            <Row>

            </Row>

          <Row>
              <h4>
                Batches
              </h4>
            </Row>
          <Row>
            
            <Col md={4}>
         
              <Batches
                image="/images/CBSEbatch2.png"
                name="Courses of Maths"
                date="Started on 25 Apr 2024"
                timing="Evening Classes"
                teachers="Anamika, Neha"
                showTeachers={true}
              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/CBSEbatch2.png"
                name="Full Syllabus of Science"
                date="Started on 25 Apr 2024"
                timing="Evening Classes"
                teachers="Anamika, Neha"
                showTeachers={true}
              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/CBSEbatch2.png"
                name="Kids Basic Learning 2024 - 2025"
                date="Started on 25 Apr 2024"
                timing="Evening Classes"
                teachers="Anamika, Neha"
                showTeachers={true}
              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/CBSEbatch2.png"
                name="Kids Basic Learning 2024 - 2025"
                date="Started on 25 Apr 2024"
                timing="Evening Classes"
                teachers="Anamika, Neha"
                showTeachers={true}
              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/CBSEbatch2.png"
                name="Kids Basic Learning 2024 - 2025"
                date="Started on 25 Apr 2024"
                timing="Evening Classes"
                teachers="Anamika, Neha"
                showTeachers={true}
              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/CBSEbatch2.png"
                name="Kids Basic Learning 2024 - 2025"
                date="Started on 25 Apr 2024"
                timing="Evening Classes"
                teachers="Anamika, Neha"
                showTeachers={true}
              />
            </Col>
          </Row>
        
          </Container>
        </section>

      <Getapp/>
<Footer/>
    </div>
  );
};

export default TeacherProfile;
