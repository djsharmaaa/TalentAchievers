import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './GoalSection.css'; 

const GoalSection = () => {
    return (
        <section className="main-goal-section mt-5 mb-5">
            <Container>
               
                <Row>
                    <Col md={6} className="LeftGoal-section "> <h3 className='mb-4 mt-5'>Our Main Goal</h3>
                        <p>At Talent Achievers, our main goal is to empower students like you to achieve academic excellence, personal growth, and career success. We're dedicated to providing you with the tools and resources you need to thrive in your learning journey.</p>
                        <Button variant="primary btn-sm" cl className='btn-join mt-2'>Join for free</Button>

                    </Col>
                    <Col md={5} className="RightGoal-section  ps-5">
                        <h5 className='mb-4'>Here's what you'll get</h5>
                        <ul className="list-unstyled ">
                            <li className='mb-2'><img src="/Goal1.png" alt='Goals1'/><a href="/">Engage with expert educators</a></li>
                            <li className='mb-2'><img src="/Goal2.png" alt='Goals2'/><a href="/">Get Career Guidence</a></li>
                            <li className='mb-2'><img src="/Goal3.png" alt='Goals3'/><a href="/">Learn at your own pace</a></li>
                            <li className='mb-2'><img src="/Goal4.png" alt='Goals4'/><a href="/">Enhance your skills and broaden your horizons</a></li>
                            <li className='mb-2'><img src="/Goal5.png" alt='Goals5'/><a href="/">Explore your higher education options</a></li>

                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default GoalSection;
