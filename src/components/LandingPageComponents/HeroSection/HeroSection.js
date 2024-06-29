import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './HeroSection.css'; 

const HeroSection = () => {
    return (
        <section className="hero-section text-center py-5">
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/Heroframe.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/Heroframe.png"

                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/Heroframe.png"

                            alt="Third slide"
                        />
                
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
};

export default HeroSection;