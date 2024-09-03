import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ReusableButtons.css';

const ReusableButtons = ({ label, linkTo, customClass }) => {
  return (
    <Link to={linkTo}>
      <Button className={`custom-btn ${customClass}`}>
        {label}
      </Button>
    </Link>
  );
};

export default ReusableButtons;
