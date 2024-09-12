import React,{useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NavigationBar from '../../../components/LandingPageComponents/NavigationBar/NavigationBar';
import Footer from '../../../components/ReusableComponents/Footer/Footer';

import Testimonial from '../../../components/ReusableComponents/Testimonial/Testimonial';
import FaqAccordion from '../../../components/ReusableComponents/Accordian/Accordion';

import Getapp from '../../../components/LandingPageComponents/GetappSection/Getapp';
import OtherCourses from '../../../components/AcademinComponents/OtherCourses/OtherCourses';
import Batches from '../../../components/ReusableComponents/Batches/Batches';
import BackButton from '../../../components/ReusableComponents/BackButton/Backbutton';
import { FaChevronRight } from 'react-icons/fa';

import "./MultipleBatches.css";

const MultipleBatches = () => {




    const [selectedDuration, setSelectedDuration] = useState('6 Months : (Apr 24 - jun 24)');
 




    const duration=[
      '6 Months : (Apr 24 - jun 24)',
      '12 Months : (Apr 24 - jun 25)'

    ]
    const handleDurationClick = (timeDuration) => {
      setSelectedDuration(timeDuration);
    };



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
  ];

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
          <Row >
            <Col md={12} className="d-flex align-items-center my-3">
              <h1>Batches</h1>
              <h5 className="ms-2 pt-3" style={{color:"#470083"}}>CBSE(2024-2025)</h5>
            </Col>
          </Row>
        
        
          <Row className="duration-buttons my-4">
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

          <Row className="mb-4">
            <Col>
              <div className="d-flex align-items-center">
                <img src="/images/green-tick.png" alt="Green Check" className="me-2" />
                <span className="me-4">Live and recorded online class</span>
                <img src="/images/green-tick.png" alt="Green Check" className="me-2" />
                <span  className="me-4">Digital study material</span>
                <img src="/images/green-tick.png" alt="Green Check" className="me-2" />
                <span>Curated by best educators</span>
              </div>
            </Col>
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
                link="/Academics/Tweleth/BatchDetails"
                showTiming={true}

                viewButton="View Batch Details"
                showButton={true}
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
                link="/Academics/Tweleth/BatchDetails"
                showTiming={true}

                viewButton="View Batch Details"
                showButton={true}
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
                showTiming={true}
                link="/Academics/Tweleth/BatchDetails"

                viewButton="View Batch Details"
                showButton={true}
              />
            </Col>
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
                showTiming={true}
                viewButton="View Batch Details"
                link="/Academics/Tweleth/BatchDetails"

                showButton={true}
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
                showTiming={true}
                link="/Academics/Tweleth/BatchDetails"

                viewButton="View Batch Details"
                showButton={true}
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
                showTiming={true}
                link="/Academics/Tweleth/BatchDetails"

                viewButton="View Batch Details"
                showButton={true}
              />
            </Col>
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
                showTiming={true}
                link="/Academics/Tweleth/BatchDetails"
                viewButton="View Batch Details"
                showButton={true}
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
                showTiming={true}
                link="/Academics/Tweleth/BatchDetails"

                viewButton="View Batch Details"
                showButton={true}
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
                link="/Academics/Tweleth/BatchDetails"
                showTiming={true}

                viewButton="View Batch Details"
                showButton={true}
              />
            </Col>
          </Row>
        </section>
      </Container>
      <FaqAccordion title="Frequently Ask Questions" faqData={faqData} />
          
      <Testimonial title="Inspiring Tales" testimonials={BatchDetailsTestimonials} />
      <OtherCourses />
      <Getapp />
      <Footer />
    </div>
  );
};

export default MultipleBatches;
