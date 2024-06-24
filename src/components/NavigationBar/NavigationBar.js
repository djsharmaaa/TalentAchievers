import React from 'react';
import { Navbar, Nav, NavDropdown, Container , Button} from 'react-bootstrap';
import './NavigationBar.css'; 

const NavigationBar = () => {
    return (
        <Navbar  expand="lg" className="navbar-custom sticky-top">
            <Container>
                <Navbar.Brand href="/">
                <img
                      src="/Logo.png" 
                        alt="logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Academic</Nav.Link>
                        <Nav.Link href="/">College Search</Nav.Link>
                        <Nav.Link href="/">Study Abroad</Nav.Link>
                        <NavDropdown title="Skill Development" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/services">Services</NavDropdown.Item>
                            <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>

                            <NavDropdown.Item href="/careers">Careers</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/">Competetive Exam</Nav.Link>
                 
                    </Nav>
                    <Nav>
                        <Button variant="outline-none btn" className="me-2">Login</Button>
                        <Button variant="primary btn-sm" className='btn-join'>Join for free</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
