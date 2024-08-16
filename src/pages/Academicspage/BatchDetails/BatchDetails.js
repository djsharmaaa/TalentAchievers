import React from 'react'

import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import NavigationBar from '../../../components/LandingPageComponents/NavigationBar/NavigationBar'
import Footer from '../../../components/LandingPageComponents/Footer/Footer';
import Studymaterialbtn from '../../../components/AcademinComponents/Studymaterialbtn/Studymaterialbtn';
import Testimonial from '../../../components/ReusableComponents/Testimonial/Testimonial';
import FrequentlyAskQuestions from '../../../components/AcademinComponents/Accordian/Accordion';
import Getapp from '../../../components/LandingPageComponents/GetappSection/Getapp';
import OtherCourses from '../../../components/AcademinComponents/OtherCourses/OtherCourses';
import Batches from '../../../components/ReusableComponents/Batches/Batches';
import BackButton from '../../../components/ReusableComponents/BackButton/Backbutton';

 import "./BatchDetails.css";
import SessionStatusbtn from '../../../components/ReusableComponents/SessionStatusbtn/SessionStatusbtn';
import TeachersCard from '../../../components/ReusableComponents/TeachersCard/TeachersCard';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCircle } from '@fortawesome/free-solid-svg-icons';

const BatchDetails = () => {


  const BatchDetailsTestimonials = [
    {
      id: 1,
      name: 'Kavya',
      Location: '98.2% CBSE XII',
      imageSrc: '/images/batchtestimonial1.png',
      testimonial: '"With their comprehensive materials and supportive teachers, I felt confident and prepared. Thanks to them, I achieved excellent results and got into my dream college"',
    },
    {
      id: 2,
      name: "Rayan's Mother",
      Location: '98.2% CBSE XII',
      imageSrc: '/images/batchtestimonial2.png',
      testimonial: '"With their comprehensive materials and supportive teachers, I felt confident and prepared. Thanks to them, I achieved excellent results and got into my dream college"',
    },
    {
      id: 3,
      name: 'Komal',
      Location: '98.2% CBSE XII',
      imageSrc: '/images/batchtestimonial1.png',
      testimonial: '"With their comprehensive materials and supportive teachers, I felt confident and prepared. Thanks to them, I achieved excellent results and got into my dream college"',
    },
    {
      id: 4,
      name: 'Shreya',
      Location: '98.2% CBSE XII',
      imageSrc: '/images/batchtestimonial2.png',
      testimonial: '"With their comprehensive materials and supportive teachers, I felt confident and prepared. Thanks to them, I achieved excellent results and got into my dream college"',
    },
  ]

  const BestEducatorssData = [
    {
      id: 1,
      name: 'Nidhi',
      imageSrc: '/images/t1.png',
      rating: 2,
      experience: '+4 Years of experience',
      subject: 'Hindi Teacher | M.Sc',

      status: 'Online',
      profileLink: '/profile/nidhi'
    },
    {
      id: 2,
      name: 'Vinod',
      imageSrc: '/images/t2.png',
      rating: 4.8,
      status: 'Offline',
      subject: 'Hindi Teacher | M.Sc',

      experience: '+4 Years of experience',
      profileLink: '/profile/Vinod'
    },
    {
      id: 3,
      name: 'Sid',
      imageSrc: '/images/t3.png',
      rating: 4.6,
      status: 'Online',
      experience: '+4 Years of experience',
      subject: 'Hindi Teacher | M.Sc',
      profileLink: '/profile/sid'
    },


  ];







  return (
    <div>
      <NavigationBar />
      <Studymaterialbtn />
      <BackButton />
      <Container>
        <Row className="my-4 justify-content-left">
          <Col xs="auto" className="wd-1" >
            <Button variant="outline-light" className="college-btn-outline mb-2">Recorded</Button>
          </Col>
          <Col xs="auto">
            <Button variant="outline-light" className="college-btn-outline mb-2">Live Classes</Button>
          </Col>
          <Col xs="auto" >
            <Button variant="outline-light" className="college-btn-outline mb-2">Offline</Button>
          </Col>
          <Col xs="auto" >
            <Button variant="outline-light" className="college-btn-outline mb-2">One-on-one</Button>
          </Col>

        </Row>
      </Container>

      <section className="batchdetails-hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="batchdetails-hero-content">


              <SessionStatusbtn type="live"  />
              <h1 >CBSE Btach (2024 - 2025)</h1>
              <p>Join this batch to excel in Class 6 concepts alongside your preferred educators, comprehensively covering the CBSE Syllabus. Leave no stone unturned and achieve top marks in your exams. Our educators will guide you through Mathematics, Science, Social Studies, Hindi & English. Classes will be conducted in a blend of Hindi and English, with notes provided in English after each session.</p>
            <div >
            <img src='/images/teacher2.png' alt='teacher' />
              <img src='/images/teacher2.png' alt='teacher' />

              <img src='/images/teacher2.png' alt='teacher' />
            </div>

              <p>Language : English</p>
              <div className='d-flex align-items-start'>
                <div>
                  <img src="/images/Batchschedule.png" alt="Course" className="course-image mb-2" />

                </div>
                <div>
                  <p className='mb-1'> Btach Schedule </p>
                  <h4>
                    Stars on 24 May 2024
                  </h4>
                </div>
              </div>
            </Col>
            <Col md={5}>
              <Card className='batchdetails-hero-card' >
                <div className='batchdetails-hero-cardimg'>
                  <Card.Img variant="top" src="/images/batchdetail-herocard.png" className="zoom-image" />
                  <img src="/images/play-icon.png" alt="Play" className='play-icon' />


                </div>
                <Card.Body className='pt-0'>
                  <Card.Text className="price-section ">
                    <span className="current-price">₹31,999</span>
                    <span className="original-price">₹51,999</span>
                    <span className="discount">80% off</span>
                  </Card.Text>
                  <Card.Text className='d-flex align-item-center mb-4'> <img src='/images/syllabusL.png' alt='none' className='me-1' />Full CBSE Class 12 Syllabus</Card.Text>
                  <Button variant='primary' className='buy-button'>Buy Full Course</Button>

                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>




      <section className='Batchdetails-about-section my-4'>
                <Container>
                    <Row className='mb-2'>
                        <Col md={3}>
                            <h3>About</h3>
                        </Col>
                  
                
                  
                        <Col md={2} >
                            <Card className='Batchdetails-aboutcard'>
                                <Card.Body>
                                    <div className='d-flex align-items-center mb-2'>
                                        <img src='/images/LiveSession.png' alt='Math Live Session' className='course-logo me-2' />
                                        <Card.Title className='d-flex justify-content-between '>
                                            Live Session 
                                        </Card.Title>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} >
                        <Card className='Batchdetails-aboutcard'>
                      
                                <Card.Body>
                                    <div className='d-flex align-items-center mb-2'>
                                        <img src='/images/DigitalResourses.png' alt='Math Live Session' className='course-logo me-2' />
                                        <Card.Title className='d-flex justify-content-between '>
                                            Digital Resources
                                        </Card.Title>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                 
                        <Col md={2} >
                        <Card className='Batchdetails-aboutcard'>
                         
                                <Card.Body>
                                    <div className='d-flex align-items-center mb-2'>
                                        <img src='/images/practice.png' alt='Live Session' className=' me-2' />
                                        <Card.Title className='d-flex justify-content-between w-100'>
                                            Practice 
                                        </Card.Title>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={2} >
                        <Card className='Batchdetails-aboutcard'>

                                <Card.Body>
                                    <div className='d-flex align-items-center mb-2'>
                                        <img src='/images/testseries.png' alt='Math Live Session' className='course-logo me-2' />
                                        <Card.Title className='d-flex justify-content-between w-100'>
                                            Test Series
                                        </Card.Title>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                      
                    </Row>
                </Container>
            </section>


            <section className='batchdetails-Schedule'>
        <Container>
          <Row>
            <Col md={3} className='mb-4'>
              <h3 className='mb-3'>Schedule</h3>
              <p className='d-flex align-item-center'><img src='/images/timingL.png' alt='timing' className='me-2'/>Evening classes</p>
             
              <ul className='ps-3'>
                <li>
              <p >4 Times a week</p>

                </li>
                <li>
              <p>(22 Apr 2024 - 30 Apr 2024)</p>

                </li>
              </ul>
            </Col>
            <Col md={9}>
            <Row>
        <Col md={12} className='mb-4'>
          <Card>
            <Card.Body>
              <div className='d-flex align-items-center '>
                <div className=' me-5'>
                  <h5 className='mb-1'>Mon</h5>
                  <p className='mb-2'>29 Apr 2024</p>
                </div>
                <div >
                  <Card.Title className='mb-2'>Introduction Session</Card.Title>
                  <Card.Text className='mb-1' style={{color:'#745F86'}}>
                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: '0.5em', marginRight: '0.3rem', marginBottom:'2px' }}  />
                    7am - 8am
                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: '0.5em', margin: '2px 4px 2px 10px',  }} />
                    Anamika
                  </Card.Text>
                  
                  <Card.Title className='mb-0' style={{ color: '01A91B', backgroundColor: '#E6FFEA', padding: '0.2em 0.5em', borderRadius: '0.25em' }}>
                    | Math
                  </Card.Title>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
           </Row>
           <Row>
        <Col md={12} className='mb-4'>
          <Card>
            <Card.Body>
              <div className='d-flex align-items-center '>
                <div className=' me-5'>
                  <h5 className='mb-1'>TUE</h5>
                  <p className='mb-2'>29 Apr 2024</p>
                </div>
                <div >
                  <Card.Title className='mb-2'>Introduction Session</Card.Title>
                  <Card.Text className='mb-1' style={{color:'#745F86'}}>
                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: '0.5em', marginRight: '0.3rem', marginBottom:'2px' }}  />
                    7am - 8am
                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: '0.5em', margin: '2px 4px 2px 10px', color:'' }} />
                    Anamika
                  </Card.Text>
  <Card.Title className='mb-0' style={{ color: '#004AA8', backgroundColor: '#E6F1FF', padding: '0.2em 0.5em', borderRadius: '0.25em' }}>
                    | Social Science
                  </Card.Title>                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
           </Row> <Row>
        <Col md={12} className='mb-4'>
          <Card>
            <Card.Body>
              <div className='d-flex align-items-center '>
                <div className=' me-5'>
                  <h5 className='mb-1'>WED</h5>
                  <p className='mb-2'>29 Apr 2024</p>
                </div>
                <div >
                  <Card.Title className='mb-2'>Introduction Session</Card.Title>
                  <Card.Text className='mb-1' style={{color:'#745F86'}}>
                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: '0.5em', marginRight: '0.3rem', marginBottom:'2px' }}  />
                    7am - 8am
                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: '0.5em', margin: '2px 4px 2px 10px', color:'' }} />
                    Anamika
                  </Card.Text>
  <Card.Title className='mb-0' style={{ color: '#7200A8', backgroundColor: '#F7E6FF', padding: '0.2em 0.5em', borderRadius: '0.25em' }}>
                    | English
                  </Card.Title>                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
           </Row> <Row>
        <Col md={12} className='mb-4'>
          <Card>
            <Card.Body>
              <div className='d-flex align-items-center '>
                <div className=' me-5'>
                  <h5 className='mb-1'>THU</h5>
                  <p className='mb-2'>29 Apr 2024</p>
                </div>
                <div >
                  <Card.Title className='mb-2'>Introduction Session</Card.Title>
                  <Card.Text className='mb-1' style={{color:'#745F86'}}>
                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: '0.5em', marginRight: '0.3rem', marginBottom:'2px' }}  />
                    7am - 8am
                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: '0.5em', margin: '2px 4px 2px 10px', color:'' }} />
                    Anamika
                  </Card.Text>
  <Card.Title className='mb-0' style={{ color: '01A91B', backgroundColor: '#E6FFEA', padding: '0.2em 0.5em', borderRadius: '0.25em' }}>
                    | Math
                  </Card.Title>                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
           </Row> <Row>
        <Col md={12} className='mb-4'>
          <Card>
            <Card.Body>
              <div className='d-flex align-items-center '>
                <div className=' me-5'>
                  <h5 className='mb-1'>FRI</h5>
                  <p className='mb-2'>29 Apr 2024</p>
                </div>
                <div >
                  <Card.Title className='mb-2'>Introduction Session</Card.Title>
                  <Card.Text className='mb-1' style={{color:'#745F86'}}>
                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: '0.5em', marginRight: '0.3rem', marginBottom:'2px' }}  />
                    7am - 8am
                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: '0.5em', margin: '2px 4px 2px 10px', color:'' }} />
                    Anamika
                  </Card.Text>
  <Card.Title className='mb-0' style={{ color: '01A91B', backgroundColor: '#E6FFEA', padding: '0.2em 0.5em', borderRadius: '0.25em' }}>
                    | Math
                  </Card.Title>                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
           </Row>
           
              <Row>
                <Col md={12} className='mb-4'>
                  
                <Button  className='Btachdetail-Schedulebtn mb-4'>View Complete Schedule</Button>

                  
                </Col>
               
              </Row>
              
            </Col>
          </Row>
        </Container>
      </section>


      
      <section className='batchdetails-syllabus'>
        <Container>
          <Row>
            <Col md={3} className='mb-4'>
              <h3>Syllabus</h3>
            </Col>

            <Col md={9}>
              <Row>
                <Col md={6} className='mb-4'>
                  <Card>
                    <Card.Body>
                      <div className='d-flex align-items-center'>
                        <img src='/images/maths.png' alt='Math' className='me-2' />
                        <div>
                          <Card.Title className='mb-2'>Math</Card.Title>
                          <Card.Text>
                            <button href='#' className='batchdetails-syllabus-link '>
                              View Syllabus <FontAwesomeIcon className='ms-3' icon={faAngleRight} />
                            </button>
                          </Card.Text>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className='mb-4'>
                  <Card>
                    <Card.Body>
                      <div className='d-flex align-items-center'>
                        <img src='/images/english.png' alt='English' className='me-2' />
                        <div>
                          <Card.Title className='mb-2'>English</Card.Title>
                          <Card.Text>
                            <button href='#' className='batchdetails-syllabus-link'>
                              View Syllabus <FontAwesomeIcon className='ms-3' icon={faAngleRight} />
                            </button>
                          </Card.Text>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md={6} className='mb-4'>
                  <Card>
                    <Card.Body>
                      <div className='d-flex align-items-center'>
                        <img src='/images/science.png' alt='Science' className='me-2' />
                        <div>
                          <Card.Title className='mb-2'>Science</Card.Title>
                          <Card.Text>
                            <button href='#' className='batchdetails-syllabus-link'>
                              View Syllabus <FontAwesomeIcon className='ms-3' icon={faAngleRight} />
                            </button>
                          </Card.Text>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className='mb-4'>
                  <Card>
                    <Card.Body>
                      <div className='d-flex align-items-center'>
                        <img src='/images/socialscience.png' alt='Social Science' className='me-2' />
                        <div>
                          <Card.Title className='mb-2'>Social Science</Card.Title>
                          <Card.Text>
                            <button href='#' className='batchdetails-syllabus-link'>
                              View Syllabus <FontAwesomeIcon className='ms-3' icon={faAngleRight} />
                            </button>
                          </Card.Text>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>



      <section className="TeachersT-section">
        <Container>
          <Row className="my-4">
            <Col md={3}>
              <h3 className="mb-0">Teachers</h3>
            </Col>

            {BestEducatorssData.map((teacher) => (
              <Col md={3} key={teacher.id}>
                <TeachersCard teacher={teacher} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>






      <FrequentlyAskQuestions />

      <Testimonial title="Inspiring Tales" testimonials={BatchDetailsTestimonials} />

      <section>
        <Container>
          <Row className="mb-4">
            <Col md={12}>
              <h1>Similar Batches</h1>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Batches
                image="/images/CBSEbatch.png"
                name="Courses of Maths"
                date="Started on 25 Apr 2024"
                timing="Evening Classes"
                teachers='Anamika, Neha'
                showTeachers={false}
              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/CBSEbatch.png"
                name="Full Syllabus of Science"
                date="Started on 25 Apr 2024"
                timing="Evening Classes"

                teachers='Anamika, Neha'
                showTeachers={false}
              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/CBSEbatch.png"
                name="Kids Basic Learning 2024 - 2025"
                date="Started on 25 Apr 2024"
                timing="Evening Classes"
                teachers='Anamika, Neha'
                showTeachers={false}
              />
            </Col>
          </Row>
        </Container>

      </section>

      <OtherCourses />
      <Getapp />
      <Footer />


    </div>


  );
};

export default BatchDetails;