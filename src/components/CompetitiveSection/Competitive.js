import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Competitive.css';

const Competitive = () => {
    return (
        <section className="Competitive-section">
            <Container>
            <Row className=" mb-5">
                    <Col md={12} className="d-flex ">
                        <h2 className="mb-0  ">Competitive Exams</h2>
                        
                    </Col>
                </Row>
                <Row>
                <Col md={4}>
                        <Card  className="mb-4 h-100 Competitive-card">
                            <Card.Body className='cardbody d-flex flex-column '> 
                            <div className='d-flex align-items-start'>
                                <img src="/images/ExamCard1.png" alt="Competitive" className="course-image mb-2"/>
                                <Card.Title>
                                        <h3> NEET </h3>
                                        <p>
                                            NEET Preparation
                                        </p>
                                    </Card.Title>
                                </div>
                                <div className="mt-3 mb-3 ">
                                    <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn ' href="#">Class 111</Button>
                                    <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn' href="#">Class 12</Button>
                                    <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn' href="#">Dropper</Button>
                                </div>
                                <Button variant="light" className='Competitive-btn align-self-start' href="#">Explore</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4 h-100 Competitive-card">
                            <Card.Body  className='cardbody d-flex flex-column'>
                            <div className='d-flex align-items-start'>
                                <img src="/images/ExamCard2.png" alt="Competitive" className="course-image mb-3"/>
                                <Card.Title>
                                        <h3>  CLASS 3 - 12</h3>
                                        <p> Nurturing High School Excellence State Boards</p>
                                    </Card.Title>
                                </div>
                                <div className="mt-3 mb-3">
                                    <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn' href="#">Study Material</Button>
                                    <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn' href="#">Practice</Button>
                                    <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn' href="#">Test Series</Button>
                                </div>
                                <Button variant="light"  className='Competitive-btn align-self-start' href="#">Explore</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4 h-100 Competitive-card">
                            <Card.Body  className='cardbody d-flex flex-column'>
                                <div className='d-flex align-items-start'>
                                <img src="/images/ExamCard3.png" alt="Competitive" className="course-image mb-3"/>
                                <Card.Title>
                                        <h3>BUILD FOUNDATION</h3>
                                        <p>Building Stronger Foundations for Future Success (8 - 12)</p>
                                    </Card.Title>
                                </div>
                                <div className="mt-3 mb-3">
                                    <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn' href="#">Study Material</Button>
                                    <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn' href="#">Practice</Button>
                                    <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn' href="#">Revision</Button>
                                    <Button variant="secondary" className='me-4 mb-2 Competitive-card-btn' href="#">Test Series</Button>
                                </div>
                                <Button variant="light"  className='Competitive-btn align-self-start' href="#">Explore</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
            <Col md={12} className="d-flex justify-content-left mt-5 ">
                <Button variant="primary" className="Competitive-Explore-btn mb-5 px-4 py-2">Explore All Categories</Button>
                
            </Col>
        </Row>
            </Container>
        </section>
    );
};

export default Competitive;

