import React from 'react';
import { Container, Row, Col,Card, Button } from 'react-bootstrap';
import './CollegeSection.css';

export const CollegeSection = () => {
  return (
    <section className="college-section">
    <Container>
        <Row className="mb-5">
            <Col md={12} >
                <h2 className="mb-0">Explore Colleges</h2>
            </Col>
        </Row>
        <Row className="mb-4">
            
            <Col md={2}>
                <Button variant="light" className="college-btn-light mb-2">Master's Degrees</Button>
            </Col>
            <Col md={2}>
                <Button variant="light" className="college-btn-light mb-2">Bachelor's Degrees</Button>
            </Col>
            <Col md={2}>
                <Button variant="light" className="college-btn-light mb-2">Certificates</Button>
            </Col>
            
            <hr/>
        </Row>
        <Row className="mb-4 justify-content-left">
            <Col xs="auto" className= "wd-1" >
                <Button variant="outline-light" className="college-btn-outline mb-2">Popular</Button>
            </Col>
            <Col xs="auto">
                <Button variant="outline-light" className="college-btn-outline mb-2">M.Tech</Button>
            </Col>
            <Col xs="auto" >
                <Button variant="outline-light" className="college-btn-outline mb-2">M.sc</Button>
            </Col>
            <Col xs="auto" >
                <Button variant="outline-light" className="college-btn-outline mb-2">M.Com</Button>
            </Col>
            <Col  xs="auto">
                <Button variant="outline-light" className="college-btn-outline mb-2">AI</Button>
            </Col>
            <Col xs="auto">
                <Button variant="outline-light" className="college-btn-outline mb-2">Buisness Management</Button>
            </Col>
            <Col xs="auto" >
                <Button variant="outline-light" className="college-btn-outline mb-2">Data Science</Button>
            </Col>
            <Col xs="auto">
                <Button variant="outline-light" className="college-btn-outline mb-2">Finance</Button>
            </Col>
        </Row>
        <Row >
            <Col md={3}>
                <Card className=" h-100 college-card">
                    <Card.Img variant="top" src="/images/collegeimage.png" alt="College image" />
                    <Card.ImgOverlay className='college-overlay '>
                    <div className='d-flex align-items-center mt-4'>
                                <img src="/images/Collegelogo.png" alt="Course" className="Colloge-logo mb-3 me-2"/>
                            
                                       <div>
                                       <h3> Delhi University</h3>
                                       <p>Delhi</p>
                                       </div>
                                    
                                </div> 
                                </Card.ImgOverlay>
                    <Card.Body className="d-flex flex-column college-card-body ">
                    <a href="/" className="text-start college-btn-link">View All Courses</a>
                    <a href="/" className="text-start college-btn-link">Brochure</a>
                    <a href="/" className="text-start college-btn-link">Compare</a>

                   </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="mb-4 h-100 college-card">
                    <Card.Img variant="top" src="/images/collegeimage.png" alt="College image" />
                    <Card.ImgOverlay className='college-overlay '>
                    <div className='d-flex align-items-center mt-4'>
                                <img src="/images/Collegelogo.png" alt="Course" className="Colloge-logo mb-3 me-2"/>
                            
                                       <div>
                                       <h3> Delhi University</h3>
                                       <p>Delhi</p>
                                       </div>
                                    
                                </div> 
                                </Card.ImgOverlay>
                    <Card.Body className="d-flex flex-column  ">
                    <a href="/" className="text-start college-btn-link">View All Courses</a>
                    <a href="/" className="text-start college-btn-link">Brochure</a>
                    <a href="/" className="text-start college-btn-link">Compare</a>

                   </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="mb-4 h-100 college-card">
                    <Card.Img variant="top" src="/images/collegeimage.png" alt="College image" />
                    <Card.ImgOverlay className='college-overlay '>
                    <div className='d-flex align-items-center mt-4'>
                                <img src="/images/Collegelogo.png" alt="Course" className="Colloge-logo mb-3 me-2"/>
                            
                                       <div>
                                       <h3> Delhi University</h3>
                                       <p>Delhi</p>
                                       </div>
                                    
                                </div> 
                                </Card.ImgOverlay>
                    <Card.Body className="d-flex flex-column  ">
                    <a href="/" className="text-start college-btn-link">View All Courses</a>
                    <a href="/" className="text-start college-btn-link">Brochure</a>
                    <a href="/" className="text-start college-btn-link">Compare</a>

                   </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="mb-4 h-100 college-card">
                    <Card.Img variant="top" src="/images/collegeimage.png" alt="College image" />
                    <Card.ImgOverlay className='college-overlay '>
                    <div className='d-flex align-items-center mt-4'>
                                <img src="/images/Collegelogo.png" alt="Course" className="Colloge-logo mb-3 me-2"/>
                            
                                       <div>
                                       <h3> Delhi University</h3>
                                       <p>Delhi</p>
                                       </div>
                                    
                                </div> 
                                </Card.ImgOverlay>
                    <Card.Body className="d-flex flex-column  ">
                    <a href="/" className="text-start college-btn-link">View All Courses</a>
                    <a href="/" className="text-start college-btn-link">Brochure</a>
                    <a href="/" className="text-start college-btn-link">Compare</a>

                   </Card.Body>
                </Card>
            </Col>
      
                </Row>
        <Row>
            <Col md={12} className="d-flex justify-content-left mt-5 ">
                <Button variant="primary" className="College-btn mb-5 px-4 py-2">Explore more Master's Degree</Button>
                
            </Col>
        </Row>
    </Container>
</section>

  )
}


export default CollegeSection;