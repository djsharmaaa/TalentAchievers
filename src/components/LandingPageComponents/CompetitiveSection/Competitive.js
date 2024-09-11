// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import './Competitive.css';
// import ReusableButtons from '../../ReusableComponents/ReusableButtons/ReusableButtons';

// const Competitive = () => {
//     return (
//         <section className="Competitive-section">
//             <Container>
//             <Row className=" mb-5">
//                     <Col md={12} className="d-flex ">
//                         <h2 className="mb-0  ">Competitive Exams</h2>
                        
//                     </Col>
//                 </Row>
//                 <Row>
//                 <Col md={4}>
//                         <Card  className="mb-4 h-100 Competitive-card">
//                             <Card.Body className='cardbody d-flex flex-column '> 
//                             <div className='d-flex align-items-start'>
//                                 <img src="/images/ExamCard1.png" alt="Competitive" className="course-image mb-2"/>
//                                 <Card.Title>
//                                         <h3> NEET </h3>
//                                         <p>
//                                             NEET Preparation
//                                         </p>
//                                     </Card.Title>
//                                 </div>
//                                 <div className="mt-3 mb-3 ">
//                                     <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn ' href="#">Class 111</Button>
//                                     <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn' href="#">Class 12</Button>
//                                     <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn' href="#">Dropper</Button>
//                                 </div>
//                                 <Button variant="light" className='Competitive-btn align-self-start' href="#">Explore</Button>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col md={4}>
//                         <Card className="mb-4 h-100 Competitive-card">
//                             <Card.Body  className='cardbody d-flex flex-column'>
//                             <div className='d-flex align-items-start'>
//                                 <img src="/images/ExamCard2.png" alt="Competitive" className="course-image mb-3"/>
//                                 <Card.Title>
//                                         <h3>  IIT Jee</h3>
//                                         <p>IIT Exam Preparation</p>
//                                     </Card.Title>
//                                 </div>
//                                 <div className="mt-3 mb-3">
//                                     <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn ' href="#">Class 111</Button>
//                                     <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn' href="#">Class 12</Button>
//                                     <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn' href="#">Dropper</Button>
//                                 </div>
//                                 <Button variant="light"  className='Competitive-btn align-self-start' href="#">Explore</Button>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col md={4}>
//                         <Card className="mb-4 h-100 Competitive-card">
//                             <Card.Body  className='cardbody d-flex flex-column'>
//                                 <div className='d-flex align-items-start'>
//                                 <img src="/images/ExamCard3.png" alt="Competitive" className="course-image mb-3"/>
//                                 <Card.Title>
//                                         <h3>Govt. Job Exam</h3>
//                                         <p>Job Exam Preparation</p>
//                                     </Card.Title>
//                                 </div>
//                                 <div className="mt-3 mb-3">
//                                     <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn' href="#">SSC</Button>
//                                     <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn' href="#">Teaching</Button>
//                                     <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn' href="#">Judiciary</Button>
//                                     <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn' href="#">UPSE</Button>
//                                 </div>
//                                 <Button variant="light"  className='Competitive-btn align-self-start' href="#">Explore</Button>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//                 <Row>
//             <Col md={12} className="d-flex justify-content-left mt-5 ">
//                 <ReusableButtons label="Explore All Categories" linkTo="" customClass="secondary" />
                
//             </Col>
//         </Row>
//             </Container>
//         </section>
//     );
// };

// export default Competitive;

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Competitive.css';
import ReusableButtons from '../../ReusableComponents/ReusableButtons/ReusableButtons';

const Competitive = () => {
    const examData = [
        {
            title: 'NEET',
            description: 'NEET Preparation',
            imgSrc: '/images/ExamCard1.png',
            classes: ['Class 11', 'Class 12', 'Dropper'],
        },
        {
            title: 'IIT Jee',
            description: 'IIT Exam Preparation',
            imgSrc: '/images/ExamCard2.png',
            classes: ['Class 11', 'Class 12', 'Dropper'],
        },
        {
            title: 'Govt. Job Exam',
            description: 'Job Exam Preparation',
            imgSrc: '/images/ExamCard3.png',
            classes: ['SSC', 'Teaching', 'Judiciary', 'UPSC'],
        },
    ];

    return (
        <section className="Competitive-section">
            <Container>
                <Row className="mb-5">
                    <Col md={12} className="d-flex">
                        <h2 className="mb-0">Competitive Exams</h2>
                    </Col>
                </Row>
                <Row>
                    {examData.map((exam, index) => (
                        <Col md={4} key={index}>
                            <Card className="mb-4 h-100 Competitive-card">
                                <Card.Body className="cardbody d-flex flex-column">
                                    <div className="d-flex align-items-start">
                                        <img
                                            src={exam.imgSrc}
                                            alt={exam.title}
                                            className="course-image mb-2"
                                        />
                                        <Card.Title>
                                            <h3>{exam.title}</h3>
                                            <p>{exam.description}</p>
                                        </Card.Title>
                                    </div>
                                    <div className="mt-3 mb-3">
                                        {exam.classes.map((cls, idx) => (
                                            <Button
                                                key={idx}
                                                variant="secondary"
                                                className="me-4 mb-2 Competitive-card-btn"
                                                href="#"
                                            >
                                                {cls}
                                            </Button>
                                        ))}
                                    </div>
                                    <Button variant="light" className="Competitive-btn align-self-start" href="#">
                                        Explore
                                    </Button>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col md={12} className="d-flex justify-content-left mt-5">
                        <ReusableButtons label="Explore All Categories" linkTo="" customClass="secondary" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Competitive;

