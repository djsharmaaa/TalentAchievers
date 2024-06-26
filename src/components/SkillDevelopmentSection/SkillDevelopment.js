
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock , faChartBar} from '@fortawesome/free-regular-svg-icons';
import './SkillDevelopment.css';

const skillCoursesData = [
  {
    id: 1,
    title: 'Management Skills',
    teacher: 'Dr Agenra',
    duration: '60 hours',
    rating: 4.5,
    price: '$200',
    previousPrice:'$300',
    imgSrc: 'collegeimage.png',
    level:'Advance'
  },
  {
    id: 2,
    title: 'Full Stack Development',
    teacher: 'Dr Agenra',
    duration: '75 hours',
    rating: 4.7,
    price: '$250',
    previousPrice:'$300',
    imgSrc: 'course.png',
    level:'Intermediate'

  },
  {
    id: 3,
    title: 'Machine Learning',
    teacher: 'Dr Agenra',
    duration: '80 hours',
    rating: 4.8,
    price: '$300',
    previousPrice:'$300',
    imgSrc: 'course.png',
    level:'advance'

  },
  {
    id: 4,
    title: 'AI and Deep Learning',
    teacher: 'Dr Agenra',
    duration: '90 hours',
    rating: 4.9,
    price: '$350',
    previousPrice:'$300',
    imgSrc: 'course.png',
    level:'Intermediate'

  },
  {
    id: 5,
    title: 'Cyber Security',
    duration: '70 hours',
    teacher: 'Dr Agenra',
    rating: 4.6,
    price: '$220',
    previousPrice:'$300',
    imgSrc: 'course.png',
    level:'Advance'

  },
  {
    id: 6,
    title: 'Cloud Computing',
    teacher: 'Dr Agenra',
    duration: '85 hours',
    rating: 4.7,
    price: '$280',
    previousPrice:'$300',
    imgSrc: 'course.png',
    level:'Intermediate'

  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const SkillDevelopment = () => {
  return (
    <section className="skill-development-section">
      <Container>
        <Row className="mb-5">
          <Col md={12}>
            <h2 className="mb-0">Skill Development Courses</h2>
          </Col>
        </Row>
        <Row className="mb-4 justify-content-left">
            <Col xs="auto" className= "wd-1" >
                <Button variant="outline-light" className="Skill-btn-outline mb-2">Web Development</Button>
            </Col>
            <Col xs="auto">
                <Button variant="outline-light" className="Skill-btn-outline mb-2">JavaScript</Button>
            </Col>
            <Col xs="auto" >
                <Button variant="outline-light" className="Skill-btn-outline mb-2">UX Design</Button>
            </Col>
            <Col xs="auto" >
                <Button variant="outline-light" className="Skill-btn-outline mb-2">Android Development</Button>
            </Col>
            <Col  xs="auto">
                <Button variant="outline-light" className="Skill-btn-outline mb-2">CSS</Button>
            </Col>
            <Col xs="auto">
                <Button variant="outline-light" className="Skill-btn-outline mb-2"> Angular</Button>
            </Col>
            <Col xs="auto" >
                <Button variant="outline-light" className="Skill-btn-outline mb-2">React JS</Button>
            </Col>
            <Col xs="auto">
                <Button variant="outline-light" className="Skill-btn-outline mb-2">AWS</Button>
            </Col>
            <Col xs="auto">
                <Button variant="outline-light" className="Skill-btn-outline mb-2">Communication</Button>
            </Col>
        </Row>
        <Row className='position-relative'>
          <Button variant="link" className="carousel-control-prev" aria-label="Previous">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </Button>
          <Col md={12}>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              showDots={false}
              containerClass="carousel-container"
              itemClass="carousel-item-padding-40-px"
            >
              {skillCoursesData.map((course) => (
                <Card className="Skills-course-card" key={course.id}>
                  <Card.Img variant="top" src={course.imgSrc} alt={`${course.title} image`} />
                  <Card.Body className='text-start d-flex  flex-column card-body'>
                    <Card.Title className='mb-3'>{course.title}</Card.Title>                    
                    <Card.Text>Teacher: {course.teacher}</Card.Text>
                    <Card.Text>Rating: {course.rating} ⭐⭐⭐⭐</Card.Text>
                    <Card.Text> 
                        <FontAwesomeIcon  icon={faClock} /> {course.duration}  
                        <FontAwesomeIcon className='ms-4' icon={faChartBar} /> {course.level} </Card.Text>
                    <Card.Text>{course.price}  {course.previousPrice && (
                        <span className="previous-price">{' '}( {course.previousPrice})</span>
                      )}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Carousel>
          </Col>
          <Button variant="link" className="carousel-control-next" aria-label="Next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </Button>
        </Row>

        <Row>
          <Col md={12} className="d-flex justify-content-left mt-5 mb-5">
            <Button variant="primary" className="Skill-explore-btn">Explore All Courses</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SkillDevelopment;

