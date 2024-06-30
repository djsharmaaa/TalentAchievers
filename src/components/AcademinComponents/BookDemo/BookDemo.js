import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./BookDemo.css"

export const BookDemo = () => {
  
    return (
        <section className="Demo-section mt-5 mb-5">
            <Container>
               
                <Row> 
                    <Col md={8} className="LeftDemo-section mt-5 px-5"> 
                        <h1 className='my-5'>Unlock your potential with Talent Achievers. Experience the benefits of free online counseling today.
                        </h1>
                        <div>
                        <Button variant="primary btn-lg mt-4"  className='Demo-btn mt-2'>Join for free</Button>

                        </div>
                   
                    </Col>
                    <Col md={4} className="RightDemo-section ">
                    <img src="./images/Demo.png" alt='get app' className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BookDemo;