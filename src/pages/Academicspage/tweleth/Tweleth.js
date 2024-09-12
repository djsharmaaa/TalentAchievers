import React, { useState } from 'react';

import NavigationBar from '../../../components/LandingPageComponents/NavigationBar/NavigationBar'
import Footer from '../../../components/ReusableComponents/Footer/Footer';

import Testimonial from '../../../components/ReusableComponents/Testimonial/Testimonial';
import Getapp from '../../../components/LandingPageComponents/GetappSection/Getapp';
import BookDemo from '../../../components/AcademinComponents/BookDemo/BookDemo';



import { Container, Row, Col, Card,  Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAngleRight , faClock} from '@fortawesome/free-solid-svg-icons';

import './Tweleth.css'
import OtherCourses from '../../../components/AcademinComponents/OtherCourses/OtherCourses';

import TeachersCard from '../../../components/ReusableComponents/TeachersCard/TeachersCard';
import SubjectCard from '../../../components/ReusableComponents/SubjectCard/SubjectCard';
import { Link } from 'react-router-dom';
import ReusableButtons from '../../../components/ReusableComponents/ReusableButtons/ReusableButtons';
import FaqAccordion from '../../../components/ReusableComponents/Accordian/Accordion';



const TwelethTestimonials = [
    {
            id: 1,
            name: "Harsh's Mother",
            Location: 'India',
            imageSrc: '/images/testimonial1.png',
            testimonial: " The classes are so much fun, and the teachers always make learning exciting. I've learned so many new things and made lots of friends along the way. ",
          },
          {
            id: 2,
            name: "Rayan's Mother",
            Location: 'Delhi, India',
            imageSrc: '/images/12testimonial.png',
            testimonial: "As a parent, I've always been concerned about finding the right balance between screen time and education for my kids. Talent achiever help her to interact and learn new things.",
        },
          {
            id: 3,
            name: "Rayan's Mother",
            Location: 'Delhi, India',
            imageSrc: '/images/testimonial2.png',
            testimonial: "As a parent, I've always been concerned about finding the right balance between screen time and education for my kids. Talent achiever help her to interact and learn new things.",
        },
          {
            id: 4,
            name: "Harsh's Mother",
            Location: 'India',
            imageSrc: '/images/12testimonial.png',
            testimonial: " The classes are so much fun, and the teachers always make learning exciting. I've learned so many new things and made lots of friends along the way. ",
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
        imageSrc: '/images/t2.png ',
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
    {
        id: 4,
        name: 'Kartox',
        imageSrc: '/images/t4.png',
        rating: 4.6,
        status: 'Online',
        experience: '+4 Years of experience',
        subject: 'Hindi Teacher | M.Sc',

        profileLink: '/profile/kartox'
    },

];




const Tweleth = () => {


    const [selectedClass, setSelectedClass] = useState('Class 12');
    const [selectedDuration, setSelectedDuration] = useState('6 Months : (Apr 24 - jun 24)');

 


    const classes = [
        'Class 12',
        'Class 11',
        'Class 10',
        'Class 9',
        'Class 8',
        'Class 7',
        'Class 6',
        'Class 5',
        'Class 4',
        'Class 3',       
      ];

      const duration=[
        '6 Months : (Apr 24 - jun 24)',
        '12 Months : (Apr 24 - jun 25)'

      ]
      const handleClassClick = (className) => {
        setSelectedClass(className);
      };

      const handleDurationClick = (timeDuration) => {
        setSelectedDuration(timeDuration);
      };

      const faqData = [
        {
            eventKey: '0',
            header: 'Can I choose between Hindi and English language while selecting batches?',
            body: 'Our IT consulting services stand out due to our extensive experience, client-centric approach, and a proven track record of delivering tailored solutions that align with business goals.'
        },
        {
            eventKey: '1',
            header: 'Can I choose between Hindi and English language while selecting batches?',
            body: 'Our IT consulting services stand out due to our extensive experience, client-centric approach, and a proven track record of delivering tailored solutions that align with business goals.'
        },
        {
          eventKey: '2',
          header: 'Can I choose between Hindi and English language while selecting batches?',
          body: 'Our IT consulting services stand out due to our extensive experience, client-centric approach, and a proven track record of delivering tailored solutions that align with business goals.'
      },
      {
        eventKey: '3',
        header: 'Can I choose between Hindi and English language while selecting batches?',
        body: 'Our IT consulting services stand out due to our extensive experience, client-centric approach, and a proven track record of delivering tailored solutions that align with business goals.'
    },
    ];


 
    return (
        <div>
            <NavigationBar />
            <section >
                <Container>
                <Row className="offerings-buttons my-5">
          {classes.map((className) => (

            <Col key={className} xs={6} lg={1}>
              <Button

                variant="outline-dark"
                className={selectedClass === className ? 'button-active' : ''}
                onClick={() => handleClassClick(className)}
              >
                {className}

              </Button>
            </Col>
          ))}
        </Row>

                    <span className='d-flex flex-row'>
                        <img src="/images/Group6.png" alt='get app' className='me-2 ' />
                        <h4 style={{ color: 'var(--primary-color)' }}>
                            Class 12 CBSE
                        </h4>
                    </span>

                </Container>
            </section>


            <section className='FullYearCourse-section'>
                <Container>
                    <Row className='mb-2'>
                        <Col>
                            <h2>Full Year Course 2024-2025</h2>
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Col md={2}>
                            <h5>Subjects Covered:</h5>
                        </Col>
                        <Col md={10}>
                            <Button variant='outline-dark' className='subject-button'>Math</Button>
                            <Button variant='outline-dark' className='subject-button'>Physics</Button>
                            <Button variant='outline-dark' className='subject-button'>Chemistry</Button>
                            <Button variant='outline-dark' className='subject-button'>Biology</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className='mb-4'>
                            <Card  as={Link} to="/Academics/Tweleth/LiveSession" className='Course-offering-card'>
                                <Card.Body>
                                    <div className='d-flex align-items-center mb-2'>
                                        <img src='/images/LiveSession.png' alt='Math Live Session' className='course-logo me-2' />
                                        <Card.Title className='d-flex justify-content-between w-100'>
                                            Live Session <FontAwesomeIcon className='ms-auto' icon={faAngleRight} />
                                        </Card.Title>
                                    </div>
                                    <Card.Text>Join our interactive live sessions led by expert educators, where learning comes to life in real-time</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='mb-4'>
                            <Card as={Link} to="/Academics/Tweleth/DigitalResources" className='Course-offering-card'>
                                <Card.Body>
                                    <div className='d-flex align-items-center mb-2'>
                                        <img src='/images/DigitalResourses.png' alt='Math Live Session' className='course-logo me-2' />
                                        <Card.Title className='d-flex justify-content-between w-100'>
                                            Digital Resources<FontAwesomeIcon className='ms-auto' icon={faAngleRight} />
                                        </Card.Title>
                                    </div>
                                    <Card.Text>Access a wealth of digital resources designed to enhance learning and reinforce concepts covered in class.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='mb-4'>
                     
                        <Card as={Link} to="/Academics/Tweleth/MultipleBatches" className='Course-offering-card '>
                                <Card.Body>
                                    <div className='d-flex align-items-center mb-2'>
                                        <img src='/images/MultipleBatches.png' alt='Math Live Session' className='course-logo me-2' />
                                        <Card.Title className='d-flex justify-content-between w-100'>
                                            Courses <FontAwesomeIcon className='ms-auto' icon={faAngleRight} />
                                        </Card.Title>
                                    </div>
                                    <Card.Text>Choose from multiple batches to find a schedule that fits your needs and
                                        preferences.</Card.Text>
                                </Card.Body>
                            </Card>
                  
                          
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className='mb-4'>
                            <Card as={Link} to="/Academics/Tweleth/Practice" className='Course-offering-card'>
                                <Card.Body>
                                    <div className='d-flex align-items-center mb-2'>
                                        <img src='/images/practice.png' alt='Live Session' className=' me-2' />
                                        <Card.Title className='d-flex justify-content-between w-100'>
                                            Practice <FontAwesomeIcon className='ms-auto' icon={faAngleRight} />
                                        </Card.Title>
                                    </div>
                                    <Card.Text>Sharpen your skills and gauge your understanding with our extensive collection of practice questions.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='mb-4'>
                            <Card as={Link} to="/Academics/Tweleth/TestSeries" className='Course-offering-card'>
                                <Card.Body>
                                    <div className='d-flex align-items-center mb-2'>
                                        <img src='/images/testseries.png' alt='Math Live Session' className='course-logo me-2' />
                                        <Card.Title className='d-flex justify-content-between w-100'>
                                            Test Series<FontAwesomeIcon className='ms-auto' icon={faAngleRight} />
                                        </Card.Title>
                                    </div>
                                    <Card.Text>Prepare for exams with our comprehensive test series designed to simulate real exam conditions.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='mb-4'>
                            <Card as={Link} to="/Academics/Tweleth/NCERTSolution" className='Course-offering-card'>
                                <Card.Body>
                                    <div className='d-flex align-items-center mb-2'>
                                        <img src='/images/papersolution.png' alt='Math Live Session' className='course-logo me-2' />
                                        <Card.Title className='d-flex justify-content-between w-100'>
                                            NCERT & Paper Solution <FontAwesomeIcon className='ms-auto' icon={faAngleRight} />
                                        </Card.Title>
                                    </div>
                                    <Card.Text>COur team of experienced instructors is dedicated to providing timely and accurate solutions to your academic queries.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
{/* 
            <section className='ChooseplanSection'>
                <Container>
                    <Row className='mb-4'>
                        <Col >
                            <h2>Choose Plan</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Card className='ChoosePlan-card'>
                                <Card.Body>
                                    <Row>
                                        <Col md={6} className='d-flex flex-column'>
                                            <Card.Title className='d-flex  mb-4'>
                                                <h3 className='mb-0 me-3'>For Class 12th</h3>
                                                <button className='batch-start-date'>
                                                    Next Batch Start Date: <span className='date-highlight'>20-Apr 2024</span>
                                                </button>
                                            </Card.Title>
                                            <h6>FEATURE</h6>
                                            <ul className='features-list'>
                                                <li className='my-2'><img src='/images/featuretick.png' alt='tick' className='me-2' />Live Class</li>
                                                <li className='my-2'><img src='/images/featuretick.png' alt='tick' className='me-2' />Live discussion for doubt resolution</li>
                                                <li className='my-2'><img src='/images/featuretick.png' alt='tick' className='me-2' />Digital study material</li>
                                                <li className='my-2'><img src='/images/featuretick.png' alt='tick' className='me-2' />Assigment and class notes</li>
                                                <li className='my-2'><img src='/images/featuretick.png' alt='tick' className='me-2' />Digital study material</li>
                                            </ul>
                                        </Col>
                                        <Col md={6} className='d-flex flex-column '>
                                            <h3 className='premium'>PREMIUM</h3>
                                            <div className='pricing d-flex flex-row'>
                                                <h6 className='original-price'>₹36,000 </h6>
                                                <span className='discount'>(18% off)</span>

                                            </div>
                                            <h4 className='rate'>₹25,199</h4>
                                            <div className='course-duration d-flex flex-row my-4'>
                                                <Button variant='outline-dark' className='mb-2 me-4'>6 Months : (Apr 24 - Jun 24)</Button>
                                                <Button variant='outline-dark' className='mb-2'>12 Months : (Apr 24 - Jun 24)</Button>
                                            </div>
                             
                                     <div className='planbuy-btn'>
                                     <ReusableButtons label="Buy Full Course" linkTo="/" customClass="primary" />

                                     </div>

                             
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section> */}




        


            <section className="TeachersT-section">
            <Container>
                <Row className="my-4">
                    <Col md={12}>
                        <h2 className="mb-0">Teachers</h2>
                    </Col>
                </Row>
                <Row>
                    {BestEducatorssData.map((teacher) => (
                        <Col md={3} key={teacher.id}>
                            <TeachersCard teacher={teacher} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>

            <section className='BatchSection'>
                <Container>
                    <Row className='mb-2'>

                        <h6>CBSE (2024-2025)</h6>
                    </Row>
                    <Row className='mb-3'>
                       <Col> <h2>Batch and Subjects</h2></Col>
                       <Col md={2}>
                       <ReusableButtons label="View more Batches" linkTo="/Academics/Tweleth/MultipleBatches" customClass="primary"/>

                       
                       </Col>
                    </Row>
         

                    <Row className="duration-buttons my-5">
          {duration.map((timeDuration) => (

            <Col key={timeDuration} xs={6} lg={1}>
              <Button

                variant="outline-dark"
                className={selectedDuration === timeDuration ? 'button-active' : ''}
                onClick={() => handleDurationClick(timeDuration)}
              >
                {timeDuration}

              </Button>
            </Col>
          ))}
        </Row>


                    <Row className="my-4">
            <Col>
              <div className="d-flex align-items-center">
                <img src="/images/green-tick.png" alt="Green Check" className="me-2" />
                <span className="me-4">Live and recorded online class</span>
                <img src="/images/green-tick.png" alt="Green Check" className="me-2" />
                <span className="me-4">Digital study material</span>
                <img src="/images/green-tick.png" alt="Green Check" className="me-2" />
                <span>Curated by best educators</span>
              </div>
            </Col>
          </Row>
                    <Row>
                        <Col md={12}>
                            <Card className='ChooseBatch-card'>
                                <Card.Body>
                                    <Row> 
                                        <Col md={6} >
                                            {/* <Card.Img variant="top" src='/images/CBSEbatch.png' /> */}
                                            <img  className='Choosebatchimg' src='/images/CBSEbatch.png' alt='CBSEbatch'/>

                                        </Col>
                                        <Col md={6} className='d-flex flex-column '>
                                            <button variant='outline-dark' className='recommended-btn d-flex justify-content-left mb-3'><img src='/images/Group7.png' alt='premium'  className='mx-2'/>Recommended</button>
                                            <h6 className='premium'>Top Rated</h6>


                                            <Card.Title className='mb-3'>CBSE Batch(2024 - 2025)</Card.Title>
                                            <Card.Text className='course-card-info'><img src='/images/syllabusL.png' alt='syllabus' className='me-2' />Full CBSE Class 6 Syllabus</Card.Text>
                                            <Card.Text className='course-card-info'><img src='/images/teachersL.png' alt='notes' className='me-2' />Topic wise syllabus notes and revision</Card.Text>
                                            <Card.Text className='course-card-info'><img src='/images/timingL.png' alt='timing' className='me-2' />Evening Classes</Card.Text>
                                            <Card.Text className='course-card-info'><img src='/images/notesL.png' alt='teachers' className='me-2' />'Anamika, Neha'</Card.Text>
                                          
                                            <Row className='my-4 '>
                       <Col md={4}>
                       <ReusableButtons label="View batch details" linkTo="/Academics/Tweleth/BatchDetails" customClass="primary"/>

                       
                       </Col>
                       <Col className='mt-2'><FontAwesomeIcon icon={faClock} />
                       <span className='ms-3'>Starts in 7 days</span></Col>

                    </Row>

                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
            <SubjectCard  imgSrc='/images/maths.png' imgAlt='Math' title='Math' text='Start date : 29 Apr 2024' colSize={3}  />
            <SubjectCard  imgSrc='/images/english.png' imgAlt='Math' title='English' text='Start date : 29 Apr 2024' colSize={3}  />
            <SubjectCard  imgSrc='/images/science.png' imgAlt='Science' title='Science' text='Start date : 29 Apr 2024' colSize={3}  />
            <SubjectCard  imgSrc='/images/socialscience.png' imgAlt=' Social Science' title=' Social Science' text='Start date : 29 Apr 2024' colSize={3}/>


                      
                       
                        </Row>
                </Container>
            </section>
            



            <BookDemo />
            <Testimonial  title="What makes Us so beloved by both parents and students?" testimonials={TwelethTestimonials}  />

            
            <FaqAccordion title="Frequently Ask Questions" faqData={faqData} />
            
        
            <OtherCourses />
            <Getapp />
            <Footer />

        </div>


    );
};

export default Tweleth;