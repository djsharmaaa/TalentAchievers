import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../../../../../components/LandingPageComponents/NavigationBar/NavigationBar';
import Footer from '../../../../../components/ReusableComponents/Footer/Footer';

import Getapp from '../../../../../components/LandingPageComponents/GetappSection/Getapp';
import BackButton from '../../../../../components/ReusableComponents/BackButton/Backbutton';
import SubjectCard from '../../../../../components/ReusableComponents/SubjectCard/SubjectCard';
import { FaChevronRight } from 'react-icons/fa';



const SubjectChapters = () => {





  return (
    <div>
      <NavigationBar />
      <section>
        <Container>
        <Row className="align-items-center mt-5">
  <Col md={1}>
    <BackButton />
  </Col>
  <Col md={11} className="text-end">
    <nav aria-label="breadcrumb" className="custom-breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <a href="/Academics/tweleth" className="breadcrumb-link">CBSE Class 6</a>
        </li>
        <li className="breadcrumb-separator"><FaChevronRight /></li> 
        <li className="breadcrumb-item">
        <a href="/Academics/tweleth/NCERTSolution" className="breadcrumb-link">NCERT Solution</a>
        </li>
        <li className="breadcrumb-separator"><FaChevronRight /></li> 
        <li className="breadcrumb-item active" aria-current="page">Physics</li>
      </ol>
    </nav>
  </Col>
</Row>


<Row className='my-5'>
              <h1>Electric Charges and fields</h1>
          

          </Row>



         
            <Row className='my-5'>
              <h4 className='mb-3'>Chapter 1 in NCERT Physics - Class 12</h4>
              <p><img  src='/images/ques.png'alt='ques'/> 10 min</p>
             
            </Row>
            <Row className='my-5'>
            
            <SubjectCard colSize={6}  imgSrc='/images/play-icon3.png' imgAlt='play' title='Question 1.1'text='10 min' />
            <SubjectCard colSize={6}  imgSrc='/images/play-icon3.png' imgAlt='play' title='Question 1.2'text='10 min' />
            <SubjectCard colSize={6}  imgSrc='/images/play-icon3.png' imgAlt='play' title='Question 1.3'text='10 min' />
            <SubjectCard colSize={6}  imgSrc='/images/play-icon3.png' imgAlt='play' title='Question 1.4'text='10 min' />
            <SubjectCard colSize={6}  imgSrc='/images/play-icon3.png' imgAlt='play' title='Question 1.5'text='10 min' />
            <SubjectCard colSize={6}  imgSrc='/images/play-icon3.png' imgAlt='play' title='Question 1.6'text='10 min' />
            <SubjectCard colSize={6}  imgSrc='/images/play-icon3.png' imgAlt='play' title='Question 1.7'text='10 min' />
            <SubjectCard colSize={6}  imgSrc='/images/play-icon3.png' imgAlt='play' title='Question 1.8'text='10 min' />
           

           
          </Row>
      
  

          
       
        </Container>

      </section>


      <Getapp />
      <Footer />
    </div>
  );
};

export default SubjectChapters;
