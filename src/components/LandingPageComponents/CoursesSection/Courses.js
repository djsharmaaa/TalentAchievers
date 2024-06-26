import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Courses.css';

const CoursesSection = () => {
    return (
        <section className="courses-section">
            <Container>
            <Row className=" mb-5">
                    <Col md={12} className="d-flex ">
                        <h2 className="mb-0  ">Explore Our Courses</h2>
                        {/* <p className="mb-0 ms-3 align-self-end ">(Pre-12th)</p> */}
                        <h6  className="mb-1 ms-3 align-self-end"> (Pre-12th)</h6>
                        
                    </Col>
                </Row>
                <Row>
                <Col md={4}>
                        <Card  className="mb-4 h-100  p-2 Course-card">
                            <Card.Body className='cardbody d-flex flex-column mb-2'> 
                            <div className='d-flex align-items-start'>
                                <img src="/images/CourseCard1.png" alt="Course" className="course-image mb-2"/>
                                <Card.Title>
                                        <h3>  CLASS PRE - 2</h3>
                                        <p>
                                        Tailored Early Learning for Young Children
                                        </p>
                                    </Card.Title>
                                </div>
                                <div className="mt-3 mb-3 ">
                                    <Button variant="secondary" className='me-4 mb-2 course-card-btn ' href="#">Worksheet</Button>
                                    <Button variant="secondary" className='me-4 mb-2 course-card-btn' href="#">Storybook</Button>
                                    <Button variant="secondary" className='me-4 mb-2 course-card-btn' href="#">Spoken English</Button>
                                    <Button variant="secondary" className='me-4 mb-2 course-card-btn' href="#">General Knowledge</Button>
                                </div>
                                <Button variant="light" className='explore-btn align-self-start' href="#">Explore</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4 h-100 p-2  Course-card">
                            <Card.Body  className='cardbody d-flex flex-column'>
                            <div className='d-flex align-items-start'>
                                <img src="/images/CourseCard2.png" alt="Course" className="course-image mb-3"/>
                                <Card.Title>
                                        <h3>  CLASS 3 - 12</h3>
                                        <p> Nurturing High School Excellence State Boards</p>
                                    </Card.Title>
                                </div>
                                <div className="mt-3 mb-3">
                                    <Button variant="secondary" className='me-4 mb-2 course-card-btn' href="#">Study Material</Button>
                                    <Button variant="secondary" className='me-4 mb-2 course-card-btn' href="#">Practice</Button>
                                    <Button variant="secondary" className='me-4 mb-2 course-card-btn' href="#">Test Series</Button>
                                </div>
                                <Button variant="light"  className='explore-btn align-self-start' href="#">Explore</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4 h-100 p-2  Course-card">
                            <Card.Body  className='cardbody d-flex flex-column'>
                                <div className='d-flex align-items-start'>
                                <img src="/images/CourseCard3.png" alt="Course" className="course-image mb-3"/>
                                <Card.Title>
                                        <h3>BUILD FOUNDATION</h3>
                                        <p>Building Stronger Foundations for Future Success (8 - 12)</p>
                                    </Card.Title>
                                </div>
                                <div className="mt-3 mb-3">
                                    <Button variant="secondary" className='me-4 mb-2 course-card-btn' href="#">Study Material</Button>
                                    <Button variant="secondary" className='me-4 mb-2 course-card-btn' href="#">Practice</Button>
                                    <Button variant="secondary" className='me-4 mb-2 course-card-btn' href="#">Revision</Button>
                                    <Button variant="secondary" className='me-4 mb-2 course-card-btn' href="#">Test Series</Button>
                                </div>
                                <Button variant="light"  className='explore-btn align-self-start' href="#">Explore</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CoursesSection;

