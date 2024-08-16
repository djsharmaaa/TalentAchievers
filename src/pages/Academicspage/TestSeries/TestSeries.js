import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../../../components/LandingPageComponents/NavigationBar/NavigationBar';
import Footer from '../../../components/LandingPageComponents/Footer/Footer';
import Studymaterialbtn from '../../../components/AcademinComponents/Studymaterialbtn/Studymaterialbtn';
import Getapp from '../../../components/LandingPageComponents/GetappSection/Getapp';
import BackButton from '../../../components/ReusableComponents/BackButton/Backbutton';



const TestSeries = () => {





  return (
    <div>
      <NavigationBar />
      <Studymaterialbtn />
      <section>
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

      </section>


      <Getapp />
      <Footer />
    </div>
  );
};

export default TestSeries;
