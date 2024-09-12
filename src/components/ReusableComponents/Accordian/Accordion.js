
import React from 'react';
import { Accordion, Container, Row } from 'react-bootstrap';
import './Accordion.css';

const FaqAccordion = ({ title, faqData }) => {
    return (
        <section className='Accordion-section'>
            <Container >
                <Row className='mb-4'>
                    <h1>{title}</h1>
                </Row>
                <Row>
                    <Accordion>
                        {faqData.map((item) => (
                            <Accordion.Item key={item.eventKey} eventKey={item.eventKey} className='accordion-item-custom'>
                                <Accordion.Header>{item.header} <span className="custom-icon"></span></Accordion.Header>
                                <Accordion.Body>{item.body}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Row>
            </Container>
        </section>
    );
};

export default FaqAccordion;
