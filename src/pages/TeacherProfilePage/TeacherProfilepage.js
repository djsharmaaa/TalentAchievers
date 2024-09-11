import React from 'react';
 import { Container, Row, Col, Card, CardTitle, CardText } from 'react-bootstrap';
import NavigationBar from '../../components/LandingPageComponents/NavigationBar/NavigationBar';
import Getapp from '../../components/LandingPageComponents/GetappSection/Getapp';
import Footer from '../../components/ReusableComponents/Footer/Footer';

import Batches from '../../components/ReusableComponents/Batches/Batches';
import ReusableButtons from '../../components/ReusableComponents/ReusableButtons/ReusableButtons';


import "./TeacherProfilepage.css";


const TeacherProfile = () => {





  return (
    <div>
      <NavigationBar/>
       
        <section  >
          <Container>
            <Row className='my-5'>
            <Col md={3}>
            <img src='/images/teacher_vinod.png' alt='vinod' />
            </Col>
            <Col md={9} className='d-flex align-items-left'>
            <div >
              <h2 className='my-3'>Vinod Kumar</h2>
              <p className='mb-1' style={{color: 'var(--text-color)'}}> Founder of Converting & Co-Founder of multi figures e-com DTC brand </p>
              <p><img src='/images/teachersL.png' alt='langugaes' /> Speaks : English, Hindi</p>
                <Row className='mb-3'>
                <Col md={3} className="border-end">
                <p className='mb-0'>Watch Mins</p>
                <h4>20 M</h4>
                </Col>
               
                <Col md={6 } className="border-end">
                <p className='mb-0'>Watch Mins(In last 30 days)</p>
                <h4>20 M</h4>
                </Col>

                <Col md={2}  className="border-end">
                <p className='mb-0'>Reviews</p>
                <h4>2K</h4>
                </Col>

                <Col md={1}>
                <p className='mb-0'>Followers</p>
                <h4>2M</h4></Col>
                </Row>
            <Col md={4}> 
            <div className='teacherfollow-btn'>
            <ReusableButtons label="Follow" linkTo="" customClass="primary"  />
            </div>
                    </Col>

             
            </div>
            </Col>
            </Row>
            <Row className='mb-3'>
              <Col md={1}><h5>About</h5></Col>
              <Col md={2}><h5>Batches and Courses</h5></Col>
              <Col md={1}><h5>Practices</h5></Col>

            </Row>
        

            <Row className='mb-4'>
              <Col className='d-flex flex-row align-items-center'>
              <img src='/images/star.png' alt='star' />              
             
              <h5 className='mx-2' style={{color:"orange"}}>
                LEGEND
                </h5>
              <p className='mb-0 ' style={{color:'var(--ac2-color)'}}>in CBSE Class 12</p>
              </Col>
              <Row className='mt-2'>
             
                <h5 style={{color:'var(--text-color)'}}>
                Founder of Converting & Co-Founder of multi figures e-com DTC brand 
                </h5>
              </Row>
            </Row>

            <Row className='mb-4'>
              <h3 className='mb-3'>Highlights</h3>
              <ul style={{listStyle:'none'}}>
                <li className='mb-2'><img src='/images/tstar.png' alt='languge' className='me-2'/>Worked at AVJMS EDUCARE PVT LTD</li>
                <li className='mb-2'><img src='/images/teachersL.png' alt='languge'className='me-2'/>Speaks : English, Hindi</li>
                <li className='mb-2'><img src='/images/tthunder.png' alt='languge'className='me-2'/>Among one of the Top Educator at Talent Achivers</li>
                <li className='mb-2'><img src='/images/tcap.png' alt='languge'className='me-2'/>Studied at DELHI</li>
                <li className='mb-2'><img src='/images/tweb.png' alt='languge'className='me-2'/>Talent Acievers Educator since 16th September, 2020</li>
              </ul>
            </Row>
            <Row className='mb-4'>
              <h3 className='mb-3'>Experience</h3>
              <ul className='ms-3'>
                <li className='mb-2'>2019 - AVJMS EDUCARE PVT LTD</li>
                <li className='mb-2'>2017 - DWARKA INTERNATIONAL SCHOOL</li>
                <li className='mb-2'>2014 - Ishaan INTERNATIONAL SCHOOL</li>
              </ul>
            </Row>

          <Row>
              <h4>
                Courses
              </h4>
            </Row>
          <Row>
            
            <Col md={4} >
         
              <Batches
                image="/images/CBSEbatch2.png"
                name="CBSE Batch (2024 - 2025)"
                date="Started on 25 Apr 2024"
                timing="Evening Classes"
                teachers="Anamika, Neha"
                viewButton="View batch detail"
                showButton={true}
                showTeachers={true}
                showTiming={true}

              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/CBSEbatch2.png"
                name="NEET Foundation"
                date="Started on 25 Apr 2024"
                timing="Evening Classes"
                teachers="Anamika, Neha"
                viewButton="View batch detail"
                showButton={true}
                showTeachers={true}
                showTiming={true}

              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/CBSEbatch2.png"
                name="CBSE Batch (2024 - 2025)"
                date="Started on 25 Apr 2024"
                timing="Evening Classes"
                teachers="Anamika, Neha"
                viewButton="View batch detail"
                showButton={true}
                showTeachers={true}
                showTiming={true}

              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/CBSEbatch2.png"
                name="CBSE Batch (2024 - 2025)"
                date="Started on 25 Apr 2024"
                timing="Evening Classes"
                teachers="Anamika, Neha"
                viewButton="View batch detail"
                showButton={true}
                showTeachers={true}
                showTiming={true}

              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/CBSEbatch2.png"
                name="CBSE Batch (2024 - 2025)"
                date="Started on 25 Apr 2024"
                timing="Evening Classes"
                teachers="Anamika, Neha"
                viewButton="View batch detail"
                showButton={true}
                showTeachers={true}
                showTiming={true}

              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/CBSEbatch2.png"
                name="CBSE Batch (2024 - 2025)"
                date="Started on 25 Apr 2024"
                timing="Evening Classes"
                teachers="Anamika, Neha"
                viewButton="View batch detail"
                showButton={true}
                showTeachers={true}
                showTiming={true}
              />
            </Col>
          </Row>


          <Row className='my-4'>
              <h4>
                Practice
              </h4>
            </Row>
            <Row>
            <Col md={4}>
     <Card className='teacherprofile-practicecard'> 
     <CardTitle style={{color:"#ED9811"}}>
       Biology
      </CardTitle>
      <CardTitle>
        The Living Word
      </CardTitle>
      <CardText className='my-1'><img src='/images/question.png' alt="attempt" className="me-2"/>0 of 15 attempted</CardText>
      <CardText className='my-1'><img src="/images/notesL.png" alt="notes" className="me-2" />Anamika Shukla </CardText>
       <hr className='my-3'></hr>
      <div className='p-auto d-flex justify-content-between '>
        <p style={{color:"#745F86"}}>15 question</p>
        <ReusableButtons label="Sign Up" linkTo="" customClass="primary"  />

      </div>
     </Card>
     </Col>
     <Col md={4}>
     <Card className='teacherprofile-practicecard'> 
     <CardTitle style={{color:"#ED9811"}}>
       Biology
      </CardTitle>
      <CardTitle>
        The Living Word
      </CardTitle>
      <CardText className='my-1'><img src='/images/question.png' alt="attempt" className="me-2"/>0 of 15 attempted</CardText>
      <CardText className='my-1'><img src="/images/notesL.png" alt="teacher" className="me-2" />Anamika Shukla </CardText>
      <hr className='my-3'></hr>
      <div className='p-auto d-flex justify-content-between '>
        <p style={{color:"#745F86"}}>15 question</p>
        <ReusableButtons label="Sign Up" linkTo="" customClass="primary"  />

      </div>
     </Card>
     </Col>
     <Col md={4}>
     <Card className='teacherprofile-practicecard'> 
     <CardTitle style={{color:"#ED9811"}}>
       Biology
      </CardTitle>
      <CardTitle>
        The Living Word
      </CardTitle>
      <CardText className='my-1'><img src='/images/question.png' alt="attempt" className="me-2"/>0 of 15 attempted</CardText>
      <CardText className='my-1'><img src="/images/notesL.png" alt="notes" className="me-2" />Anamika Shukla </CardText>
       <hr className='my-3'></hr>
      <div className='p-auto d-flex justify-content-between '>
        <p style={{color:"#745F86"}}>15 question</p>
        <ReusableButtons label="Sign Up" linkTo="" customClass="primary"  />

      </div>
     </Card>
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
