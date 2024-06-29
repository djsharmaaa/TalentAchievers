import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import icons 
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col sx={12} md={4} className="footer-section">
                        <h5>Kids Learning</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Class Pre - 5th</a></li>
                            <li><a href="/">Class 6th - 8th</a></li>
                            <li><a href="/">Class 9th - 12th</a></li>
                        </ul>
                    </Col>
                    <Col sx={12} md={4} className="footer-section">

                        <h5>Top Colleges</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">M.B.A</a></li>
                            <li><a href="/">B.Tech</a></li>
                            <li><a href="/">B.Sc</a></li>
                            <li><a href="/">BCA</a></li>
                            <li><a href="/">MCA</a></li>
                            <li><a href="/">M.Tech</a></li>
                            <li><a href="/">M.Sc</a></li>
                            <li><a href="/">BA</a></li>
                            <li><a href="/">MA</a></li>
                        </ul>
                    </Col>
                    <Col sx={12} md={4} className="footer-section">
                        <h5>Top Exams</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">CAT</a></li>
                            <li><a href="/">GATE</a></li>
                            <li><a href="/">NEET-UG</a></li>
                            <li><a href="/">IIT-JEE</a></li>                            
                            <li><a href="/">Bank</a></li>
                            <li><a href="/">UPSE</a></li>
                        </ul>
                    </Col>
                    <Col sx={12} md={4} className="footer-section">
                        <h5>Skills</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Project Management</a></li>
                            <li><a href="/">AWS Certified</a></li>
                            <li><a href="/">PHP</a></li>
                            <li><a href="/">Angular</a></li>
                            <li><a href="/">Digital Marketing</a></li>
                            <li><a href="/">Python</a></li>
                            <li><a href="/">Data Analytics</a></li>
                            <li><a href="/">UI/UX Design</a></li>
                            <li><a href="/">SQL</a></li>
                        </ul>
                    </Col>
                    <Col sx={12} md={4} className="footer-section">
                        <h5>Study Abroad</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Canada</a></li>
                            <li><a href="/">USA</a></li>
                            <li><a href="/">UK</a></li>
                            <li><a href="/">Norway</a></li>
                            <li><a href="/">Germany</a></li>
                            <li><a href="/">Sweden</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="footer-section1">

                    <Col sx={12} md={4} >
                        <img src="/images/CompanyLogo.png" alt='Talent Achievers' />
                        <p>Don't miss out on the opportunity to elevate your education and achieve your goals. Click below to enroll now and take the first step towards a brighter future with Talent Achievers</p>
                        <div className='footer-btn'>
                            <button><img src="/playstore-btn.png" alt='playstore' /></button>
                            <button><img src='appstore-btn.png' alt='appstore' /></button>
                        </div>
                        <h5>Reach out to Us</h5>
                        <a href="/">
                            <p> <FontAwesomeIcon icon={faPhone} className="icon" /> call +91077546235126
                            </p>
                        </a>
                    </Col>
                    <Col sx={12} md={4} className="footer-section2">
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/services">Blogs</a></li>
                            <li><a href="/contact">Help & support</a></li>
                            <li><a href="/about">Privacy Policy</a></li>
                            <li><a href="/about">Terms & Conditions</a></li>
                        </ul>
                    </Col>
                    <Col sx={12} md={4} className="footer-section3">
                        <h5 className='mb-3'>Company apps</h5>
                        <ul className="list-unstyled">
                            <li className=' mb-3'><img src="./images/footerapp1.png" alt='footer app' className='pe-3' /><a href="/">Learner app</a></li>
                            <li className=' mb-3'><img src="./images/footerapp2.png" alt='footer app'className='pe-3' /><a href="/about">Educator app</a></li>
                            <li className=' mb-3'><img src="./images/footerapp3.png" alt='footer app' className='pe-3'/><a href="/services">Parent app</a></li>
                        </ul>
                    </Col>
                </Row>
                <hr />
            </Container>
            <Container>
                <Row>
                    <Col xs={12} md={12} className="text-center">
                        <p className="small">&copy; 2024 Your Company. All rights reserved.</p>
                        <Col md={4} className="text-center">

                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebook} className="icon pe-2" />
                                    </a>
                                   
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faTwitter} className="icon pe-2" />
                                    </a>
                                  
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} className="icon pe-2" />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} className="icon pe-2" />
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} className="icon" />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
