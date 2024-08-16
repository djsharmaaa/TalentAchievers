
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Testimonial.css';

const Testimonial = ({ title, testimonials }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="testimonial-section ">
      <Container>
        <Row className="my-5 text-center">
          <Col md={12}>
            <h2 className="pt-5 ">{title}</h2>
          </Col>
        </Row>

        <Row className='pb-5'>
          <Col md={12} className='my-2 '>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={4000}
              keyBoardControl={true}
              showDots={false}
              containerClass="carousel-container"
              itemClass="testimonial-card"
              slidesToSlide={2}
            >
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="testimonial-card p-3">
                  <Card.Body className="d-flex align-items-center">
                    <div className="testimonial-image">
                      <img src={testimonial.imageSrc} alt={testimonial.name} />
                    </div>
                    <div className="testimonial-content">
                      <p>{testimonial.testimonial}</p>
                      <h5>{testimonial.name}</h5>
                      <p>{testimonial.Location}</p>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
