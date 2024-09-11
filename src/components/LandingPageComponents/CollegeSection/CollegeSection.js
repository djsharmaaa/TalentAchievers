import React, { useState } from 'react';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './CollegeSection.css';
import ReusableButtons from '../../ReusableComponents/ReusableButtons/ReusableButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
export const CollegeSection = () => {

    const [selectedCourse, setSelectedCourse] = useState('Popular');
    const [selectedDegree, setSelectedDegree] = useState("Master's Degrees");


    const Degrees = [
        "Master's Degrees",
        "Bachelor's Degrees",
        'Certificates'
    ]


    const Courses = [
        'Popular',
        'M.Tech',
        'M.sc',
        'M.Com',
        'AI',
        'Buisness Management',
        'Data Science',
        'Finance',
    ];
    const handleClassClick = (className) => {
        setSelectedCourse(className);
    };

    const handleClick = (className) => {
        setSelectedDegree(className);
    };


    return (
        <section className="college-section">
            <Container>
                <Row className="mb-5">
                    <Col md={12} >
                        <h2 className="mb-0">Explore Colleges</h2>
                    </Col>
                </Row>
           

                <Row className="Degree-buttons my-5 justify-content-left">
                    {Degrees.map((className) => (
                        <Col key={className} xs="auto">
                            <Button
                                variant="transparent"
                                className={selectedDegree === className ? 'button-active' : ''}
                                onClick={() => handleClick(className)}
                            >
                                {className}
                            </Button>
                        
                        </Col>
                    ))}
                </Row>

                <Row className="Courses-buttons my-5 justify-content-left">
                    {Courses.map((className) => (
                        <Col key={className} xs="auto">
                            <Button
                                variant="outline-dark"
                                className={selectedCourse === className ? 'button-active' : ''}
                                onClick={() => handleClassClick(className)}
                            >
                                {className}
                            </Button>
                        </Col>
                    ))}
                </Row>


                <Row >
                    <Col md={3}>
                        <Card className="  college-card">
                            <Card.Img variant="top" src="/images/Collegeimage.png" alt="College image" />
                            <Card.ImgOverlay className='college-overlay '>
                                <div className='d-flex align-items-center mt-4'>
                                    <img src="/images/Collegelogo.png" alt="Course" className="Colloge-logo mb-3 me-2" />

                                    <div>
                                        <h3> Delhi University</h3>
                                        <p>Delhi</p>
                                    </div>

                                </div>
                            </Card.ImgOverlay>
                            <Card.Body className="d-flex flex-column college-card-body ">
                                <a href="/" className="d-flex justify-content-between college-btn-link">View All Courses and fees <FontAwesomeIcon className='ms-auto' icon={faAngleRight} /></a>

                                <hr></hr>
                                <a href="/" className="d-flex justify-content-between college-btn-link">Download Brochure<FontAwesomeIcon className='ms-auto' icon={faAngleRight} /></a>

                                <hr></hr>
                                <a href="/" className="d-flex justify-content-between  college-btn-link">Compare<FontAwesomeIcon className='ms-auto' icon={faAngleRight} /></a>


                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-4  college-card">
                            <Card.Img variant="top" src="/images/collegeimage.png" alt="College image" />
                            <Card.ImgOverlay className='college-overlay '>
                                <div className='d-flex align-items-center mt-4'>
                                    <img src="/images/Collegelogo.png" alt="Course" className="Colloge-logo mb-3 me-2" />

                                    <div>
                                        <h3> Delhi University</h3>
                                        <p>Delhi</p>
                                    </div>

                                </div>
                            </Card.ImgOverlay>
                            <Card.Body className="d-flex flex-column college-card-body ">
                                <a href="/" className="d-flex justify-content-between college-btn-link">View All Courses and fees <FontAwesomeIcon className='ms-auto' icon={faAngleRight} /></a>

                                <hr></hr>
                                <a href="/" className="d-flex justify-content-between college-btn-link">Download Brochure<FontAwesomeIcon className='ms-auto' icon={faAngleRight} /></a>

                                <hr></hr>
                                <a href="/" className="d-flex justify-content-between  college-btn-link">Compare<FontAwesomeIcon className='ms-auto' icon={faAngleRight} /></a>


                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-4  college-card">
                            <Card.Img variant="top" src="/images/collegeimage.png" alt="College image" />
                            <Card.ImgOverlay className='college-overlay '>
                                <div className='d-flex align-items-center mt-4'>
                                    <img src="/images/Collegelogo.png" alt="Course" className="Colloge-logo mb-3 me-2" />

                                    <div>
                                        <h3> Delhi University</h3>
                                        <p>Delhi</p>
                                    </div>

                                </div>
                            </Card.ImgOverlay>
                            <Card.Body className="d-flex flex-column college-card-body ">
                                <a href="/" className="d-flex justify-content-between college-btn-link">View All Courses and fees <FontAwesomeIcon className='ms-auto' icon={faAngleRight} /></a>

                                <hr></hr>
                                <a href="/" className="d-flex justify-content-between college-btn-link">Download Brochure<FontAwesomeIcon className='ms-auto' icon={faAngleRight} /></a>

                                <hr></hr>
                                <a href="/" className="d-flex justify-content-between  college-btn-link">Compare<FontAwesomeIcon className='ms-auto' icon={faAngleRight} /></a>


                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-4 college-card">
                            <Card.Img variant="top" src="/images/collegeimage.png" alt="College image" />
                            <Card.ImgOverlay className='college-overlay '>
                                <div className='d-flex align-items-center mt-4'>
                                    <img src="/images/Collegelogo.png" alt="Course" className="Colloge-logo mb-3 me-2" />

                                    <div>
                                        <h3> Delhi University</h3>
                                        <p>Delhi</p>
                                    </div>

                                </div>
                            </Card.ImgOverlay>
                            <Card.Body className="d-flex flex-column college-card-body ">
                                <a href="/" className="d-flex justify-content-between college-btn-link">View All Courses and fees <FontAwesomeIcon className='ms-auto' icon={faAngleRight} /></a>

                                <hr></hr>
                                <a href="/" className="d-flex justify-content-between college-btn-link">Download Brochure<FontAwesomeIcon className='ms-auto' icon={faAngleRight} /></a>

                                <hr></hr>
                                <a href="/" className="d-flex justify-content-between  college-btn-link">Compare<FontAwesomeIcon className='ms-auto' icon={faAngleRight} /></a>


                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                <Row>
                    <Col md={12} className="d-flex justify-content-left mt-5 ">
                        <ReusableButtons label="Explore more Master's Degree" linkTo="/" customClass="secondary" />
                    </Col>
                </Row>
            </Container>
        </section>

    )
}


export default CollegeSection;