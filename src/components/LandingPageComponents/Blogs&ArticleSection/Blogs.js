
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar , faFileText, faHandPointRight, } from '@fortawesome/free-regular-svg-icons';
import './Blogs.css';

const blogsData = [
  {
    id: 1,
    skill: 'Tech',
    title: 'How much does it cost to create an app in 2023? A detailed guide',
    Date: 'Nov,12,2013',
    Message: '1',
    imgSrc: './images/blog1.png',

 
  },
  {
    id: 2,
    skill: 'Tech',
    title: 'How much does it cost to create an app in 2023? A detailed guide',
    Date: 'Nov,12,2013',
    Message: '1',
    imgSrc: './images/blog2.png',



  },
  {
    id: 3,
    skill: 'Tech',
    title: 'How much does it cost to create an app in 2023? A detailed guide',
    Date: 'Nov,12,2013',
    Message: '1',
    imgSrc: './images/blog3.png',
  },
  {
    id:4 ,
    skill: 'Tech',
    title: 'How much does it cost to create an app in 2023? A detailed guide',
    Date: 'Nov,12,2013',
    Message: '1',
    imgSrc: './images/blog1.png',
  },
  {
    id: 5,
    skill: 'Tech',
    title: 'How much does it cost to create an app in 2023? A detailed guide',
    Date: 'Nov,12,2013',
    Message: '1',
    imgSrc: './images/blog2.png',
  },
  {
    id:6,
    skill: 'Tech',
    title: 'How much does it cost to create an app in 2023? A detailed guide',
    Date: 'Nov,12,2013',
    Message: '1',
    imgSrc: './images/blog3.png',
  },

];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
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

const Blogs = () => {
  return (
    <section className="Blogs-section">
      <Container>
        <Row className="mb-5">
          <Col md={12}>
            <h2 className="mb-0">Blogs And Article</h2>
          </Col>
        </Row>
    
        <Row className='position-relative'>
      
          <Col md={12}>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              showDots={false}
             
              containerClass="carousel-container"
              itemClass="carousel-item-padding-40-px"
              removeArrowOnDeviceType={['superLargeDesktop', 'desktop', 'tablet', 'mobile']}
            >
              {blogsData.map((blog) => (
                <Card className="Blogs-card" key={blog.id}>
                  <Card.Img variant="top" src={blog.imgSrc} alt={`${blog.title} image`} />
                  <Card.Body className='text-start d-flex  flex-column card-body'>
                  <Card.Text>{blog.skill}</Card.Text>
                  <Card.Title className='mb-3'>{blog.title}</Card.Title>                    
                  <Card.Text> 
                        <FontAwesomeIcon  icon={faCalendar} /> {blog.Date}  
                        <FontAwesomeIcon className='ms-4' icon={faFileText} /> {blog.Message} </Card.Text>
                    <Card.Text>
                    <a href="/" className="text-start blog-link">Read more 
                    <FontAwesomeIcon className='ms-2' icon={faHandPointRight} /> 
                    </a>
                    </Card.Text>
              

                  </Card.Body>
                </Card>
              ))}
            </Carousel>
          </Col>
  
        </Row>

        <Row>
          <Col md={12} className="d-flex justify-content-left  mb-5">
            <Button variant="primary btn-lg" className="Skill-explore-btn">View All</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Blogs;

