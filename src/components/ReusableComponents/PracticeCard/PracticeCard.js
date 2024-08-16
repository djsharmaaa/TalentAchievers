// src/components/PracticeCard.js
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './PracticeCard.css';

const PracticeCard = ({ title, imageStyle, borderColor }) => {
  const cardStyle = {
    borderLeft: `5px solid ${borderColor}`, // Set the border color dynamically
    paddingLeft: '10px',
  };

  return (
    <Col md={4} className='mb-4'>
      <Card className='Practice-card' style={cardStyle}>
        <Card.Body>
          <div className='d-flex align-items-center justify-content-between'>
            <Card.Title className='mb-0'>{title}</Card.Title>
            <img src='/images/Lock.png' alt='Lock' className='me-0' style={imageStyle} />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PracticeCard;
