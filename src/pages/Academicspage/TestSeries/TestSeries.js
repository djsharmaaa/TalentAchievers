import React, { useState } from 'react';

import { Container, Row, Col,Button,Card, CardTitle, CardText,CardImg, CardBody,Dropdown } from 'react-bootstrap';
import NavigationBar from '../../../components/LandingPageComponents/NavigationBar/NavigationBar';
import Footer from '../../../components/ReusableComponents/Footer/Footer';
import Getapp from '../../../components/LandingPageComponents/GetappSection/Getapp';
import BackButton from '../../../components/ReusableComponents/BackButton/Backbutton';
import { FaChevronRight } from 'react-icons/fa';
import ReusableButtons from '../../../components/ReusableComponents/ReusableButtons/ReusableButtons';
import "./TestSeries.css"


const TestSeries = () => {

  const [selectedClass, setSelectedClass] = useState('Class 12');


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
    const handleClassClick = (className) => {
      setSelectedClass(className);
    };



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
        <li className="breadcrumb-item active" aria-current="page">Test Series</li>
      </ol>
    </nav>
  </Col>
</Row>


          <Row className='my-4'>
            <Row className='my-4'>
              <h1>Test series for CBSE Class 12</h1>
            </Row>
          
            <Row className='my-3'>
              <img src='/images/TestSeries-hero.png' alt='Practice' />
            </Row>

          </Row>
            <Row className='my-5'>
              <h5>CBSE Class 12 Test Series</h5>
              {/* <DropdownButton
                // id="dropdown-variants-light"
                variant="light"
                title="Ongoing"
              >
             
                <Dropdown.Item eventKey="1">Class 12 PCM</Dropdown.Item>
                <Dropdown.Item eventKey="2">Class 12 PCB</Dropdown.Item>
                <Dropdown.Item eventKey="3">Class 12 Commerce</Dropdown.Item>
                <Dropdown.Item eventKey="4">Class 11 PCM</Dropdown.Item>
                <Dropdown.Item eventKey="5">Class 11 PCB</Dropdown.Item>
                <Dropdown.Item eventKey="6">Class 11 Commerce</Dropdown.Item>
              
              </DropdownButton> */}
               <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic" className="ongoing-dropdown" style={{border:"1px solid"}}>
        Ongoing {/* Add space with class 'ms-2' */}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Expired</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Ongoing</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Upcoming</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </Row>
          <Row>
            <Row>
            <h4>
            Trending class

            </h4>
              </Row>
          <Col md={4}>
     <Card className='trendingclass-card'> 
     <CardImg src='/images/trendingclass-card.png'  />
     <CardBody>
      <CardTitle >
        Talent NEET Test Series 2.0
      </CardTitle>
      <CardText className='my-1'><img src='/images/syllabusL.png' alt="attempt" className="me-2"/>Starts on 30 Jul 2025</CardText>
      <CardText className='my-1'><img src='/images/teachersL.png' alt="notes" className="me-2" />Detailed analysis for every paper </CardText>
       <hr className='my-3'></hr>
      <div className='p-auto d-flex justify-content-between '>
        <p style={{color:"#745F86"}}>15 question</p>
        <ReusableButtons label="View details" linkTo="" customClass="primary"  />

      </div>
      </CardBody>
     </Card>
     </Col>
     <Col md={4}>
     <Card className='trendingclass-card'> 
     <CardImg src='/images/trendingclass-card.png'  />
     <CardBody>
      <CardTitle >
        Talent NEET Test Series 2.0
      </CardTitle>
      <CardText className='my-1'><img src='/images/syllabusL.png' alt="attempt" className="me-2"/>Starts on 30 Jul 2025</CardText>
      <CardText className='my-1'><img src='/images/teachersL.png' alt="notes" className="me-2" />Detailed analysis for every paper </CardText>
       <hr className='my-3'></hr>
      <div className='p-auto d-flex justify-content-between '>
        <p style={{color:"#745F86"}}>15 question</p>
        <ReusableButtons label="View details" linkTo="" customClass="primary"  />

      </div>
      </CardBody>
     </Card>
     </Col>
     <Col md={4}>
     <Card className='trendingclass-card'> 
     <CardImg src='/images/trendingclass-card.png'  />
     <CardBody>
      <CardTitle >
        Talent NEET Test Series 2.0
      </CardTitle>
      <CardText className='my-1'><img src='/images/syllabusL.png' alt="attempt" className="me-2"/>Starts on 30 Jul 2025</CardText>
      <CardText className='my-1'><img src='/images/teachersL.png' alt="notes" className="me-2" />Detailed analysis for every paper </CardText>
       <hr className='my-3'></hr>
      <div className='p-auto d-flex justify-content-between '>
        <p style={{color:"#745F86"}}>15 question</p>
        <ReusableButtons label="View details" linkTo="" customClass="primary"  />

      </div>
      </CardBody>
     </Card>
     </Col>
          </Row>

        </Container>

      </section>


      <Getapp />
      <Footer />
    </div>
  );
};

export default TestSeries;
