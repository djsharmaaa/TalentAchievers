import React from 'react';
import { Card, CardText } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircle, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import './TeachersCard.css';

const getRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <FontAwesomeIcon
                key={i}
                icon={faStar}
                className="rating-stars"
                style={{ opacity: i <= rating ? 1 : 0.3 }}
            />
        );
    }
    return stars;
};

const TeachersCard = ({ teacher }) => {
    return (
        <Card className="T-card text-center">
            <img src={teacher.imageSrc} alt={teacher.name} className='my-4' />
            <div className="T-info mb-4">
                <h4 className='mb-2'>{teacher.name}</h4>
                <h6 className='mb-1'>{teacher.experience}</h6>
                <p>{teacher.subject}</p>
                <h6 className='mb-1'>{teacher.rating} {getRatingStars(teacher.rating)}</h6>
                <CardText className={`status ${teacher.status.toLowerCase()}`}>
                    <FontAwesomeIcon icon={faCircle} /> {teacher.status}
                </CardText>
                <a href={teacher.profileLink} className="view-link">View Profile <FontAwesomeIcon className='ms-2' icon={faCaretRight} /> </a>
            </div>
        </Card>
    );
};

export default TeachersCard;
