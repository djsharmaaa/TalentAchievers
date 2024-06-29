import React from 'react';
import { Navbar, Nav, NavDropdown, Container , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; 

const NavigationBar = () => {
    return (
        <Navbar  expand="lg" className="navbar-container sticky-top">
            <Container>
                <Navbar.Brand as={Link} exact to="/">
                <img
                      src="/images/CompanyLogo.png" 
                        alt="logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} exact to="/Academics">Academic</Nav.Link>
                        <Nav.Link as={Link} exact to="/">College Search</Nav.Link>
                        <Nav.Link  as={Link} exact to="/">Study Abroad</Nav.Link>
                        <NavDropdown title="Skill Development" id="basic-nav-dropdown">
                            <NavDropdown.Item  as={Link} exact to="/">Services</NavDropdown.Item>
                            <NavDropdown.Item  as={Link} exact to="/">Blog</NavDropdown.Item>

                            <NavDropdown.Item  as={Link} exact to="/">Careers</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} exact to="/">Competetive Exam</Nav.Link>
                 
                    </Nav>
                    <Nav>

                    <Link exact to='/LoginPage'>
                    <Button variant="outline-none btn-md" className="me-2 btn-login ">Login</Button></Link>
                    <Link exact to="/Loginpage">
                    <Button variant="primary btn-sm" className="btn-join">Join for free</Button>
                    </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;