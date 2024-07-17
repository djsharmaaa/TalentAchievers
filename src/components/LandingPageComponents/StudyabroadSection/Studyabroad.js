import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./Studyabroad.css"

export const Studyabroad = () => {
  
    return (
        <section className="Abroad-section mt-5 mb-5">
            <Container>
               
                <Row> 
                    <Col md={6} className="LeftAbroad-section "> 
                        <h2 className='mb-4'>Start Your Journey Today</h2>
                        <p className='mb-5 w-75 '>
                        Ready to embark on the adventure of a lifetime? Explore our study abroad programs and take the first step towards an unforgettable experience. With [Your Platform's Name], the world is yours to discover.
                        </p>
                        <ul className="list-unstyled mb-5">
                            <li className='mb-3'><img  src="./images/tick.png" alt='tick'className='me-2' /><a href="/">Flexible Study Options</a></li>
                            <li className='mb-3'><img src="./images/tick.png" alt='tick' className='me-2'/><a href="/">Broaden Skills</a></li>
                            <li className='mb-3'><img src="./images/tick.png" alt='tick' className='me-2'/><a href="/">Enhanced Career Opportunities</a></li>
                            <li className='mb-3'><img src="./images/tick.png" alt='tick' className='me-2'/><a href="/">Global Experiences</a></li>

                        </ul>
                        <div>
                        <Button variant="primary btn-lg mt-4"  className='Abroad-join mt-2'>Join for free</Button>

                        </div>
                    </Col>
                    <Col md={6} className="RightAbroad-section ">
                    <img src="./images/Studyabroad.png" alt='Study Aborad' className="img-fluid w-100" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Studyabroad;