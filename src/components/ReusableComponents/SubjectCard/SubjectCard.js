// src/components/SubjectCard.js
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SubjectCard.css';

const SubjectCard = ({ imgSrc, imgAlt, title, text, colSize = 4 }) => {
  return (
    <Col md={colSize} className='mb-4'>
      <Card>
        <Card.Body>
          <div className='d-flex align-items-center'>
            <img src={imgSrc} alt={imgAlt} className='me-3 ' />
            <div>
              <Card.Title className='mb-0'>{title}</Card.Title>
              {text && <Card.Text>{text}</Card.Text>}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SubjectCard;
