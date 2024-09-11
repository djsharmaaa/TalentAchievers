import React,{useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../../../../components/LandingPageComponents/NavigationBar/NavigationBar';
import Footer from '../../../../components/ReusableComponents/Footer/Footer';

import Getapp from '../../../../components/LandingPageComponents/GetappSection/Getapp';
import BackButton from '../../../../components/ReusableComponents/BackButton/Backbutton';
import { FaChevronRight } from 'react-icons/fa';

import "./PracticeTopics.css";
import PracticeCard from '../../../../components/ReusableComponents/PracticeCard/PracticeCard';
import QuizCard from '../../../../components/ReusableComponents/QuizCard/QuizCard';

const PracticeTopics = () => {
  const questions = [
    {
      questionNumber: 1,
      question: "A student calculates the coulomb’s force and writes the force as +24 N. What can be inferred from this??",
      options: ["A. London", "B. Paris", "C. Rome", "D. Madrid"],
      correctAnswer: "B. Paris",
    },
    // More questions
  ];


  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };


  return (
    <div>
      <NavigationBar />
      <section >
        <Container >
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
        <li className="breadcrumb-item active" aria-current="page">Practice</li>
        <li className="breadcrumb-separator"><FaChevronRight /></li> 
        <li className="breadcrumb-item active" aria-current="page">Physcis</li>
      </ol>
    </nav>
  </Col>
</Row>


          <Row className='my-4'>
            <Row className='my-4'>
              <h1>Electrostatics</h1>
            </Row>
         <h5>Quick Practice</h5>



          </Row>
          <Row>
            <QuizCard
             questionData={questions[currentQuestionIndex]}
             onNext={handleNextQuestion}
             />
          </Row>

          
         




          <Row className='my-4'>
            <Row className='my-2'>
              <h4>Biology</h4>
            </Row>
            <PracticeCard title="Reproduction"   borderColor="#76FF7E"/>
            <PracticeCard title="Genetic & Evolution"  borderColor="#76FF7E"/>
            <PracticeCard title="Human Welfare"  borderColor="#76FF7E"/>
            <PracticeCard title="Biotechnology"  borderColor="#76FF7E"/>
            <PracticeCard title="Ecology & Environment"  borderColor="#76FF7E"/>
              

                    
                        
          </Row>
          
          <Row className='my-4'>
            <Row className='my-2'>
              <h4>Chemistry</h4>
            </Row>
            <PracticeCard title="Physical Chemistry"   borderColor="#43AEFF"/>
            <PracticeCard title="Inorganic"  borderColor="#43AEFF"/>
            <PracticeCard title="Organic"  borderColor="#43AEFF"/>         
          </Row>

        </Container>

      </section>


      <Getapp />
      <Footer />
    </div>
  );
};

export default PracticeTopics;
