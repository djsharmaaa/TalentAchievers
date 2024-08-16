import React from 'react';
import { Accordion, Container, Row } from 'react-bootstrap';
import './Accordion.css';

const FrequentlyAskQuestions = () => {
    const accordionData = [
        {
            eventKey: '0',
            header: 'Can I choose between Hindi and English language while selecting batches?',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            eventKey: '1',
            header: 'Can I choose between Hindi and English language while selecting batches?',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          eventKey: '2',
          header: 'Can I choose between Hindi and English language while selecting batches?',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        eventKey: '3',
        header: 'Can I choose between Hindi and English language while selecting batches?',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },

       
    ];

    return (
        <section className='Accordion-section'>
            <Container>
                <Row>
                    <h1>Frequently Ask Questions</h1>
                </Row>
                <Row>
                    <Accordion>
                        {accordionData.map((item) => (
                            <Accordion.Item key={item.eventKey} eventKey={item.eventKey} className='accordion-item-custom'>
                                <Accordion.Header>{item.header}</Accordion.Header>
                                <Accordion.Body>{item.body}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Row>
            </Container>
        </section>
    );
};

export default FrequentlyAskQuestions;
