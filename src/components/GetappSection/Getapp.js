import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Getapp.css"

export const Getapp = () => {
  
    return (
        <section className="Getapp-section mt-5 mb-5">
            <Container>
               
                <Row> 
                    <Col md={6} className="Leftapp-section "> 
                        <h2 className='my-5'>Get the App</h2>
                        <p className='mb-5 w-75 '>
                        Access our app to download lessons and learn at your convenience, anytime and anywhere, from our wide selection of free courses.
                        </p>
                        <div className='footer-btn'>
                            <button><img src="/playstore-btn.png" alt='playstore' /></button>
                            <button><img src='appstore-btn.png' alt='appstore' /></button>
                        </div>
                   
                    </Col>
                    <Col md={6} className="Rightapp-section ">
                    <img src="./images/getapp.png" alt='get app' className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Getapp;