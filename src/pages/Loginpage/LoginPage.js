import React from 'react';
import { Container, Row, Col, Carousel, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './LoginPage.css'; 


const LoginPage = () => {
    return (
        <Container>
            <Row className="justify-content-center align-items-center ">
                <Col lg={6} className="login-carousel">
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
                <Col lg={6} className="login-form">
                    <div className="company-logo">
                        <Link to="/"><img src="/images/CompanyLogo.png" alt="Company Logo" /></Link>
                    </div>
                    <h2>Login</h2>
                    <div className="create-account">
                        <p>Don't have an account? <a href="/register">Create new account</a></p>
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formMobileNumber">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter mobile number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="btn-request-otp">
                            Request OTP
                        </Button>
                    </Form>
                    <div className="or-login-with">
                        <p>Or login with</p>
                    </div>
                    <div className="social-login-buttons">
                        <Button variant="outline-primary" className="btn-social">
                            <i className="fab fa-facebook-f me-2"></i> Facebook
                        </Button>
                        <Button variant="outline-danger" className="btn-social">
                            <i className="fab fa-google me-2"></i> Google
                        </Button>
                        <Button variant="outline-info" className="btn-social">
                            <i className="fab fa-linkedin-in me-2"></i> LinkedIn
                        </Button>
                        <Button variant="outline-dark" className="btn-social">
                            <i className="fab fa-apple me-2"></i> Apple
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;
