import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './OtherCourses.css';

const OtherCourses = () => {
    return (
        <section className="OtherCourses-section">
            <Container>
                <Row className="mb-5 text-center">
             
                        <h1 className="mb-0">Explore Our Other Courses</h1>
                
                </Row>
                <Row className="justify-content-center">
                    <Col md={4}>
                        {/* <Card className="mb-4 h-100 p-2 Course-card">
                            <Card.Body className="cardbody d-flex flex-column">
                                <div className="d-flex align-items-start">
                                    <img src="/images/CourseCard1.png" alt="Course" className="course-image mb-2" />
                                    <Card.Title>
                                        <h3>CLASS PRE - 2</h3>
                                        <p>Tailored Early Learning for Young Children</p>
                                    </Card.Title>
                                </div>
                                <div className="mt-3 mb-3">
                                    <Button variant="secondary" className="me-4 mb-2 course-card-btn" href="#">Worksheet</Button>
                                    <Button variant="secondary" className="me-4 mb-2 course-card-btn" href="#">Storybook</Button>
                                    <Button variant="secondary" className="me-4 mb-2 course-card-btn" href="#">Spoken English</Button>
                                    <Button variant="secondary" className="me-4 mb-2 course-card-btn" href="#">General Knowledge</Button>
                                </div>
                                <Button variant="light" className="explore-btn align-self-start" href="#">Explore</Button>
                            </Card.Body>
                        </Card> */}
                           <Card  className="mb-4 " style={{border:'none'}}>

<img src='/images/class.png' alt='class pre card' />
</Card>
                    </Col>
                    <Col md={4}>
                        {/* <Card className="mb-4 h-100 p-2 Course-card">
                            <Card.Body className="cardbody d-flex flex-column">
                                <div className="d-flex align-items-start">
                                    <img src="/images/CourseCard3.png" alt="Course" className="course-image mb-3" />
                                    <Card.Title>
                                        <h3>BUILD FOUNDATION</h3>
                                        <p>Building Stronger Foundations for Future Success (8 - 12)</p>
                                    </Card.Title>
                                </div>
                                <div className="mt-3 mb-3">
                                    <Button variant="secondary" className="me-4 mb-2 course-card-btn" href="#">Study Material</Button>
                                    <Button variant="secondary" className="me-4 mb-2 course-card-btn" href="#">Practice</Button>
                                    <Button variant="secondary" className="me-4 mb-2 course-card-btn" href="#">Revision</Button>
                                    <Button variant="secondary" className="me-4 mb-2 course-card-btn" href="#">Test Series</Button>
                                </div>
                                <Button variant="light" className="explore-btn align-self-start" href="#">Explore</Button>
                            </Card.Body>
                        </Card> */}
                        <Card  className="mb-4 " style={{border:'none'}} >
                          <img src='/images/classiit.png' alt='class pre card' />

                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default OtherCourses;
