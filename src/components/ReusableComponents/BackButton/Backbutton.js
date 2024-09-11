import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import './BackButton.css'; 

const BackButton = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <section>
      <Container>
        <Button variant="light" onClick={handleGoBack} className="back-button ">
          <ArrowLeft className="" />
        
        </Button>
      </Container>
    </section>
  );
};

export default BackButton;
