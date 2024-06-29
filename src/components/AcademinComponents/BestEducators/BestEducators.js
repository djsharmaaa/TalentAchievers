import React from 'react'
import { Container, Row, Col, Card, CardText } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCaretRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import "./BestEducators.css"




const BestEducatorssData = [
    {
      id: 1,
      name: 'Joe',
      imageSrc: './images/testimonial1.png',
      rating: 2,
      experience: '10+ years',
      status: 'Online',
      profileLink: '/profile/john-doe'
    },
    {
      id: 2,
      name: 'Mike Conny',
      imageSrc: './images/testimonial1.png',
      rating: 4.8,
      status: 'Offline',
      experience: '8+ years',
      profileLink: '/profile/jane-smith'
    },
    {
      id: 3,
      name: 'Nidhi',
      imageSrc: './images/testimonial1.png',
      rating: 4.6,
      status: 'Online',
      experience: '7+ years',
      profileLink: '/profile/michael-brown'
    },
   
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

const BestEducators = () => {
  return (
    <section className="BestEducators-section ">
    <Container>
      <Row md={12} className="my-4">
        <Col md={12}>
          <h2 className="mb-0">Meet Our Inspiring Educators: Learn from the Best</h2>
        </Col>
      </Row>

      <Row >
        {BestEducatorssData.map((Bestteacher) => (
          <Col md={4} key={Bestteacher.id}>
            <Card className="Bestteacher-card text-center">
        
                  <img src={Bestteacher.imageSrc} alt={Bestteacher.name} className='my-4'/>
        
                <div className="Bestteacher-info mb-4">
                <h3 className='mb-2'>{Bestteacher.name}</h3>
                <h6 className='mb-1'>Experience: {Bestteacher.experience}</h6>
                  <p className='mb-1'>Rating: {Bestteacher.rating} {getRatingStars(Bestteacher.rating)}</p>
                  <CardText className= {`status ${Bestteacher.status.toLowerCase()}`}>
                    <FontAwesomeIcon icon={faCircle} /> {Bestteacher.status}
                  </CardText>
                  <a href={"./"} className="view-link">View Profile <FontAwesomeIcon className='ms-2' icon={faCaretRight} /> </a>
               </div>
           
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
  )
}

export default BestEducators;