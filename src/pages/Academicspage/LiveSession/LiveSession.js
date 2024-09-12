import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import NavigationBar from '../../../components/LandingPageComponents/NavigationBar/NavigationBar';
import Footer from '../../../components/ReusableComponents/Footer/Footer';

import Getapp from '../../../components/LandingPageComponents/GetappSection/Getapp';
import OtherCourses from '../../../components/AcademinComponents/OtherCourses/OtherCourses';
import Batches from '../../../components/ReusableComponents/Batches/Batches';
import BackButton from '../../../components/ReusableComponents/BackButton/Backbutton';
import TeachersCard from '../../../components/ReusableComponents/TeachersCard/TeachersCard';
import { FaChevronRight } from 'react-icons/fa';
import "./LiveSession.css";
import SubjectCard from '../../../components/ReusableComponents/SubjectCard/SubjectCard';
import ReusableButtons from '../../../components/ReusableComponents/ReusableButtons/ReusableButtons';

const LiveSession = () => {


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
        <li className="breadcrumb-item active" aria-current="page">Free Live Session</li>
      </ol>
    </nav>
  </Col>
</Row>

        <section className=" py-5">
            <Container>
              <h1 className='mb-4'>Free Class for CBSE Class 12</h1>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className=" w-100"
                            src="/images/LiveSession-hero.png"
                            alt="First slide"
                        />
                 
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" w-100"
                            src="/images/LiveSession-hero.png"

                            alt="Second slide"
                        />
                   
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" w-100"
                            src="/images/LiveSession-hero.png"

                            alt="Third slide"
                        />
                
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>


      <section >
      <Row className='my-4'>
      <Row className='mb-2 d-flex align-items-center'>
  <Col>
    <h3>Free Classes</h3>
  </Col>
  <Col className="text-end">
    <ReusableButtons label="View All" linkTo="" customClass="secondary"style={{ padding: '8px 18px' }} />
  </Col>
</Row>
            <Col md={4}>
              <Batches
                image="/images/Phy1.png"
                name="Detailed Courses on Ray Optics"
                date="Ended on 25 Apr 2023 - 2 lessons"
              clock="01:47:39"
              showClock={true}
              showPlayIcon={true}
             
              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/Phy2.png"
                name="Semiconductors Boards"
                date="Ended on 25 Apr 2023 - 2 lessons"
                clock="01:47:39"
                showClock={true}
              showPlayIcon={true}

              />
            </Col>
            <Col md={4}>
              <Batches
                image="/images/Phy3.png"
                name="Electrostatics"
                date="Ended on 25 Apr 2023 - 2 lessons"
                clock="01:47:39"
                showClock={true}
              showPlayIcon={true}

              />

            </Col>
          </Row>
      </section>


        <section>
          


        <Row className='my-4'>
            <Row className='my-3'>
              <h3>Popular Subjects for CBSE Class 12</h3>
            </Row>

            <SubjectCard  imgSrc='/images/p.png' imgAlt='physics' title='Physics'  />
            <SubjectCard  imgSrc='/images/C.png' imgAlt='Chemistry' title='Chemistry'  />
            <SubjectCard  imgSrc='/images/B.png' imgAlt='Bio' title='Biology'  />
                
                     
                        </Row>

          <Row>
            <Row>
              <h3>Trending Class</h3>
            </Row>
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
          </Row>

      


    
        </section>
        <section className="TeachersT-section">
            <Container>
                <Row className="my-4">
                    <Col md={12}>
                        <h2 className="mb-0">Popular Teachers</h2>
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
      </Container>
      <OtherCourses />
      <Getapp />
      <Footer />
    </div>
  );
};

export default LiveSession;
