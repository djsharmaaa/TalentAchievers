import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import "./Educators.css"


const EducatorssData = [
    {
      id: 1,
      name: 'Joe',
      specialization: 'Angular | React JS',
      imageSrc: './images/teacher1.png',
      content: "Dr. John Doe's parents often say that he was destined to be a programmer. Starting in the mid-eighties at age 11, Mark was already busy on his Commodore 64, writing games in BASIC. With...",
      rating: 2,
      experience: '10+ years',
      profileLink: '/profile/john-doe'
    },
    {
      id: 2,
      name: 'Mike Conny',
      specialization: 'Angular | React JS',
      imageSrc: './images/teacher2.png',
      content: 'JMike is an industry leading certified programmer. Starting in the mid-eighties at age 11, Mark was already busy on his Commodore 64, writing games in BASIC. With...',
      rating: 4.8,
      experience: '8+ years',
      profileLink: '/profile/jane-smith'
    },
    {
      id: 3,
      name: 'Nidhi',
      specialization: 'Angular | React JS',
      imageSrc: './images/teacher3.png',
      content: "Dr. Nidhi Doe's parents often say that he was destined to be a programmer. Starting in the mid-eighties at age 11, Mark was already busy on his Commodore 64, writing games in BASIC. With...",
      rating: 4.6,
      experience: '7+ years',
      profileLink: '/profile/michael-brown'
    },
    {
      id: 4,
      name: 'Katrox',
      specialization: 'Angular | React JS',
      imageSrc: './images/teacher4.png',
      content: 'Katrox is an IT programmer with an experience of 10+ year. Starting in the mid-eighties at age 11, Mark was already busy on his Commodore 64, writing games in BASIC. With...',
      rating: 4.9,
      experience: '5+ years',
      profileLink: '/profile/emily-davis'
    }
  ];

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
  
  const Educators = () => {
    return (
      <section className="Educators-section">
        <Container>
          <Row className="mb-5">
            <Col md={12}>
              <h2 className="mb-0">Our Top Educators</h2>
            </Col>
          </Row>
  
          <Row>
            {EducatorssData.map((teacher) => (
              <Col md={3} key={teacher.id}>
                <Card className="teacher-card">
                  <Card.Body className="d-flex flex-row">
                    <div className="teacher-image">
                      <img src={teacher.imageSrc} alt={teacher.name} />
                    </div>
                    <div>
                    <h5>{teacher.name}</h5>
                    <p>{teacher.specialization}</p>
                    </div>
                    </Card.Body>
                    <div className="teacher-info">
                      <p>{teacher.content}</p>
                      <p>Rating: {teacher.rating} {getRatingStars(teacher.rating)}</p>
                      <p>Experience: {teacher.experience}</p>
                      <hr/>
                      <a href={"./"} className="view-profile-link">View Profile <FontAwesomeIcon className='ms-2' icon={faCaretRight} /> </a>
                   </div>
               
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    );
  }
  
  export default Educators;
  