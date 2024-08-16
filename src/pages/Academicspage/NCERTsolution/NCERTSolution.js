import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../../../components/LandingPageComponents/NavigationBar/NavigationBar';
import Footer from '../../../components/LandingPageComponents/Footer/Footer';
import Studymaterialbtn from '../../../components/AcademinComponents/Studymaterialbtn/Studymaterialbtn';
import Getapp from '../../../components/LandingPageComponents/GetappSection/Getapp';
import BackButton from '../../../components/ReusableComponents/BackButton/Backbutton';
import SubjectCard from '../../../components/ReusableComponents/SubjectCard/SubjectCard';



const NCERTSolution = () => {





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
                  <li className="breadcrumb-item active" aria-current="page">solutions</li>
                </ol>
              </nav>
            </Col>
          </Row>


          <Row className='my-4'>
           
              <h1>NCERT and Previous Year Paper Solution</h1>
              
       

          </Row>

          
          <Row className='my-4'> 
            <Row className='my-2'>
              <h4>NCERT Textbook Solution</h4>
            </Row>
            <SubjectCard  imgSrc='/images/p.png' imgAlt='physics' title='Physics' text='Class 12 NCERT Solution' />
            <SubjectCard  imgSrc='/images/C.png' imgAlt='Chem' title='Chemistry' text='Class 12 NCERT Solution' />
            <SubjectCard  imgSrc='/images/B.png' imgAlt='bio' title='Biology' text='Class 12 NCERT Solution' />
            <SubjectCard  imgSrc='/images/M.png' imgAlt='math' title='Math' text='Class 12 NCERT Solution' />

            </Row>

          <Row className='my-4'>
            <Row className='my-2'>
              <h4>Previous Year Paper solution</h4>
            </Row>
       
            <SubjectCard  imgSrc='/images/p.png' imgAlt='physics' title='Physics 2023 Board - Class 12' text='Class 12 NCERT Solution' />
            <SubjectCard  imgSrc='/images/C.png' imgAlt='Che' title='Chemistry 2023 Board - Class 12' text='Class 12 NCERT Solution' />
            <SubjectCard  imgSrc='/images/B.png' imgAlt='Bio' title='Biology 2023 Board - Class 12' text='Class 12 NCERT Solution' />
            <SubjectCard  imgSrc='/images/M.png' imgAlt='math' title='Math 2023 Board - Class 12' text='Class 12 NCERT Solution' />
            <SubjectCard  imgSrc='/images/p.png' imgAlt='physics' title='Physics 2022 Board - Class 12' text='Class 12 NCERT Solution' />
            <SubjectCard  imgSrc='/images/C.png' imgAlt='Che' title='Chemistry 2022 Board - Class 12' text='Class 12 NCERT Solution' />
            <SubjectCard  imgSrc='/images/B.png' imgAlt='Bio' title='Biology 2022 Board - Class 12' text='Class 12 NCERT Solution' />
            <SubjectCard  imgSrc='/images/M.png' imgAlt='math' title='Math 2021 Board - Class 12' text='Class 12 NCERT Solution' />
            
                    
                        
          </Row>
        </Container>

      </section>


      <Getapp />
      <Footer />
    </div>
  );
};

export default NCERTSolution;
