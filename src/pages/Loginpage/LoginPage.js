import React from 'react';
import {  Row, Col, Carousel, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,  faLinkedin, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

import './LoginPage.css'; 
import { faClose} from '@fortawesome/free-solid-svg-icons';


const LoginPage = () => {
    return (

            <Row className="justify-content-center align-items-center ">
                <Col lg={6} className="login-carousel">
                <div className="carousel-overlay-text">
                        Believe you can and you're halfway there
                    </div>
                    <div className="carousel-overlay-subtext">
                    — Theodore Roosevelt
                    </div>
                    <Carousel>
                        <Carousel.Item >
                            <img
                                className="d-block "
                                src="/images/login1.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block "
                                src="/images/login1.png"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block "
                                src="/images/login1.png"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
       
                <Col  className="login-page">
    {/* Close icon */}
    <div className="close-icon  ">
    <Link to="/">
    <FontAwesomeIcon className='ms-auto' icon={faClose} />
    </Link>
    </div>
    
    {/* Company logo */}
    <div className="company-logo">
      <Link to="/">
        <img src="/images/CompanyLogo.png" alt="Company Logo" />
      </Link>
    </div>

    <h2 className="text-center mt-4">Login</h2>

    <p className=" mt-3">
      Don't have an account? <Link to="/register">Create new account</Link>
    </p>

    <Form className="mt-4">
      <Form.Group controlId="formMobileNumber" className="mb-4">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="text" placeholder="Enter mobile number" />
      </Form.Group>

      <p className="text-center mb-4">Continue with email</p>

      <Button variant="primary" type="submit" className="w-100 mb-4">
        Request OTP
      </Button>
    </Form>

    <p className="text-center mb-3">Or login with</p>

    <Row >
      <Col md={4}  className="mb-3">
        <Button variant="outline-primary" className="w-100">
          <FontAwesomeIcon icon={faFacebook} className="pe-2" />
          Facebook
        </Button>
      </Col>
      <Col md={4}  className="mb-3">
        <Button variant="outline-danger" className="w-100">
          <FontAwesomeIcon icon={faGoogle} className="pe-2" />
          Google
        </Button>
      </Col>
      </Row>
      <Row >
      <Col md={4} className="mb-3">
        <Button variant="outline-info" className="w-100">
          <FontAwesomeIcon icon={faLinkedin} className="pe-2" />
          LinkedIn
        </Button>
      </Col>
      <Col md={4}  className="mb-3">
        <Button variant="outline-dark" className="w-100">
          <FontAwesomeIcon icon={faApple} className="pe-2" />
          Apple
        </Button>
      </Col>
    </Row>
  </Col>
            </Row>
      
    );
};

export default LoginPage;
