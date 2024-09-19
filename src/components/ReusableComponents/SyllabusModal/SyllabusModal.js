import React, { useState, useEffect } from 'react';
import { Modal, Button, Accordion, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SyllabusModal.css'

const SyllabusModal = ({ show, onHide, initialSubject }) => {
  const [selectedSubject, setSelectedSubject] = useState('');

  useEffect(() => {
    setSelectedSubject(initialSubject);
  }, [initialSubject]);

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  const renderAccordion = () => {
    switch (selectedSubject) {
      case 'Science':
        return (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header >
                Living and Non-Living
                
              </Accordion.Header>
              <Accordion.Body>
                Living things and Non-living things description here.
              </Accordion.Body>
            </Accordion.Item>
            <hr></hr>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Plants</Accordion.Header>
              <Accordion.Body>
                Description about plants, their types, and characteristics.
              </Accordion.Body>
            </Accordion.Item>
            <hr></hr>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Animal Anatomy</Accordion.Header>
              <Accordion.Body>
                Description about animal anatomy and its various aspects.
              </Accordion.Body>
            </Accordion.Item>
            <hr></hr>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Human Body</Accordion.Header>
              <Accordion.Body>
                Description about the human body and its functions.
              </Accordion.Body>
            </Accordion.Item>
            
          </Accordion>
        );
      case 'Math':
        return (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Introduction to Algebraic Numbers</Accordion.Header>
              <Accordion.Body>
                Algebra description here.
              </Accordion.Body>
            </Accordion.Item>
            <hr></hr>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Geometry</Accordion.Header>
              <Accordion.Body>
                Geometry description here.
              </Accordion.Body>
              
            </Accordion.Item>
            <hr></hr>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Calculus</Accordion.Header>
              <Accordion.Body>
                Calculus description here.
              </Accordion.Body>
            </Accordion.Item>
           
          </Accordion>
          
        );
       
      case 'English':
        return (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Grammar</Accordion.Header>
              <Accordion.Body>
                Grammar description here.
              </Accordion.Body>
            </Accordion.Item>
            <hr></hr>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Literature</Accordion.Header>
              <Accordion.Body>
                Literature description here.
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
        );
      case 'Social Science':
        return (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>History</Accordion.Header>
              <Accordion.Body>
                History description here.
              </Accordion.Body>
            </Accordion.Item>
            <hr></hr>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Geography</Accordion.Header>
              <Accordion.Body>
                Geography description here.
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
        );
      default:
        return null;
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>View Complete Syllabus</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="Courses-buttons mb-4 justify-content-left">
          {['Science', 'Math', 'English', 'Social Science'].map((subject) => (
            <Col key={subject} xs="auto">
              <Button
                variant="outline-dark"
                className={selectedSubject === subject ? 'button-active' : ''}
                onClick={() => handleSubjectClick(subject)}
              >
                {subject}
              </Button>
            </Col>
          ))}
        </Row>
        {renderAccordion()}
      </Modal.Body>
     
    </Modal>
  );
};

export default SyllabusModal;
