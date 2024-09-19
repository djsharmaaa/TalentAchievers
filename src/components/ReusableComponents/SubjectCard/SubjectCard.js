import React, {useState} from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';  
import './SubjectCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import SyllabusModal from '../SyllabusModal/SyllabusModal';



const SubjectCard = ({ endIcon,textIcon, imgSrc, imgAlt, title, text, colSize = 4, linkTo,showButton }) => {
  const [showModal, setShowModal] = useState(false);
  
  return (

    <Col md={colSize} className='mb-4'>
      <Card as={Link} to={linkTo} style={{ textDecoration: 'none', color: 'inherit' }} className='subject-card h-100'>
        <Card.Body>
          <div className='d-flex align-items-center'>
            <img src={imgSrc} alt={imgAlt} className='me-3 ' />
            <div>
              <Card.Title className='mb-0'>{title}</Card.Title>
            <div className='d-flex mt-2'>
                {textIcon && <img src={textIcon} alt="start icon" className='me-2' />}
                
                {text && <Card.Text className='mb-0'>{text}</Card.Text>}
               <div>
               {showButton && (
          <a href='/'
          onClick={() => {
            // e.preventDefault();
            setShowModal(true);
          }}
          className='batchdetails-syllabus-link'>
            View Syllabus <FontAwesomeIcon className='ms-3' icon={faAngleRight} />
          </a>
          )}
               </div>
              </div>

            </div>
          
            {endIcon && <img src={endIcon} alt="end icon" className='ms-auto' />}

            
          </div>
        </Card.Body>
      </Card>
      <SyllabusModal show={showModal} onHide={() => setShowModal(false)} initialSubject={title} />
    
    </Col>
  );
};

export default SubjectCard;
