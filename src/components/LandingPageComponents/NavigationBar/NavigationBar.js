import React from 'react';
import { Navbar, Nav, Container , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; 

const NavigationBar = () => {
    return (
        <Navbar  expand="lg" className="navbar-container sticky-top">
            <Container>
                <Navbar.Brand as={Link}  to="/">
                <img
                      src="/images/CompanyLogo.png" 
                        alt="logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link}  to="/Academics">Academic</Nav.Link>
                        <Nav.Link as={Link}  to="/">College Search</Nav.Link>
                        <Nav.Link  as={Link}  to="/">Study Abroad</Nav.Link>
                        <Nav.Link  as={Link}  to="/">Skill Development</Nav.Link>

                        <Nav.Link as={Link}  to="/">Competetive Exam</Nav.Link>
                 
                    </Nav>
                    <Nav>

                    <Link  to='/LoginPage'>
                    <Button variant="outline-none btn-md" className="me-2 btn-login ">Login</Button></Link>
                    <Link  to="/Loginpage">
                    <Button variant="primary btn-sm" className="btn-join">Join for free</Button>
                    </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;