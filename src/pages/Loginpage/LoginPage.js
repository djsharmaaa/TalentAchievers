import React from 'react';
import {  Row, Col, Carousel, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';

import { faFacebook,  faLinkedin, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

import './LoginPage.css'; 
import { faClose} from '@fortawesome/free-solid-svg-icons';

const countryOptions = [
  { value: '+91', label: '🇮🇳 +91' },
  { value: '+1', label: '🇺🇸 +1' },
  // Add more countries here
];


const LoginPage = () => {
  const [selectedCountry, setSelectedCountry] = React.useState(countryOptions[0]);



    return (

           <section className='login-page-section'>
           
            <Row className="">
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
       
                <Col lg={6} className="login-page">

                <Row>
                <Col className='company-logo'>
                  <Link to="/">
        <img src="/images/CompanyLogo.png" alt="Company Logo" />
      </Link>
                  </Col>
                  <Col className='close-icon'>
                  <Link to="/">
    <FontAwesomeIcon className='ms-auto' icon={faClose} style={{color:'black'}} />
    </Link>
                  </Col>
                
                </Row>
   

    <Row>
    <h1 className=" mt-4">Log in</h1>
    <p style={{fontSize:'18px' }}>
      Don't have an account? <Link to="/register" style={{ color: 'var(--primary-color)', textDecoration:'none' }}>Create new account</Link>
    </p>
    <Row>
            <Form >
              <Form.Group controlId="formMobileNumber" className="mb-1">
                {/* Input group for country code and mobile number */}
                <InputGroup>
                  <InputGroup.Text style={{ padding: 0, border: 'none' }}>
                    <Select
                      options={countryOptions}
                      value={selectedCountry}
                      onChange={(option) => setSelectedCountry(option)}
                      defaultValue={countryOptions[0]}
                      className="country-select"
                    />
                  </InputGroup.Text>
                  <Form.Control type="text" placeholder="Enter mobile number*" />
                </InputGroup>
              </Form.Group>

           
            </Form>
            <p style={{fontSize:'15px', color:'#B0B0B0'}} >We'll send an OTP for verification</p>
              <a href='/f' className="text-center  mb-3" style={{ marginTop: '6rem',color:'var(--accent-color' }}>Continue with email</a>

              <Button style={{backgroundColor:'var(--primary-color)',border:'none'}} type="submit">
                Request OTP
              </Button>
          </Row>
     
    </Row>


    <p className="text-center my-3 ">Or login with</p>
    <Row>
    <Col lg={6}  className="mb-3">
        <Button style={{backgroundColor:'#3B5999',border:'none'}}  className="Social-btn">
          <FontAwesomeIcon icon={faFacebook} className="pe-2" />
          Facebook
        </Button>
      </Col>
      <Col lg={6}  className="mb-3">
        <Button style={{backgroundColor:'#DD4B39',border:'none'}}  className="Social-btn">
          <FontAwesomeIcon icon={faGoogle} className="pe-2" />
          Google
        </Button>
      </Col>
    </Row>

     <Row>
     <Col md={6} className="mb-3">
        <Button style={{backgroundColor:'#0077B5',border:'none'}} className="Social-btn">
          <FontAwesomeIcon icon={faLinkedin} className="pe-2" />
          LinkedIn
        </Button>
      </Col>
      <Col md={6}  className="mb-3">
        <Button style={{backgroundColor:'#000000',border:'none'}}  className="Social-btn">
          <FontAwesomeIcon icon={faApple} className="pe-2" />
          Apple
        </Button>
      </Col>
     </Row>
    
                       
                        <p className="mt-2" style={{fontSize:'15px', color:'#B0B0B0'}}> Talent Achievers, Inc. All Right Reserved &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Copyright &copy; 2019-2024</p>
                      


  </Col>
            </Row>
      
           </section>
      
    );
};

export default LoginPage;
