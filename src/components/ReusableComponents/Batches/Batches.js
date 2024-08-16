// src/components/CourseCard.js
import React from 'react';
import { Card, Button,  Row } from 'react-bootstrap';
import './Batches.css'; 

const Batches = ({ image, name, date, timing, teachers, showTeachers,showButton, showTiming }) => {
  return (
    <Card className="course-batch-card mb-3">
      <Row>
        <Row md={4}>
          <img className='Batches-card-img' src={image} alt='batch' />
        </Row>
        <Row md={8}>
          <Card.Body >
            <Card.Title className='mb-2'>{name}</Card.Title>
            <Card.Text className="course-card-info">
              <img src="/images/syllabusL.png" alt="Date" className="me-2" />{date}
            </Card.Text>
            {showTiming && (
              <Card.Text className="course-card-info">
                <img src="/images/timingL.png" alt="timing" className="me-2" />{timing}
              </Card.Text>
                 )}
              {showTeachers && (
            <Card.Text className="course-card-info">
              <img src="/images/notesL.png" alt="notes" className="me-2" />{teachers}
            </Card.Text>
             )}
       

          {showButton && (
              <>
                     <hr />

<div className='fullschedule-button'>
<Button variant=" btn-sm transparent-button" className=" mt-2">
    <img src="/images/LiveSession.png" alt="Live Session" className="course-logo me-2" />
    View Full Schedule
  </Button>
</div>
              </>
            )}
          </Card.Body>
        </Row>
      </Row>
    </Card>
  );
};

export default Batches;
