// import React from 'react';
// import { Navbar, Nav, Container , Button} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './NavigationBar.css'; 

// const NavigationBar = () => {
//     return (
//         <Navbar  expand="lg" className="navbar-container sticky-top">
//             <Container>
//                 <Navbar.Brand as={Link}  to="/">
//                 <img
//                       src="/images/CompanyLogo.png" 
//                         alt="logo"
//                 />
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link as={Link}  to="/Academics">Academic</Nav.Link>
//                         <Nav.Link as={Link}  to="/">College Search</Nav.Link>
//                         <Nav.Link  as={Link}  to="/">Study Abroad</Nav.Link>
//                         <Nav.Link  as={Link}  to="/">Skill Development</Nav.Link>

//                         <Nav.Link as={Link}  to="/">Competetive Exam</Nav.Link>

//                     </Nav>
//                     <Nav>

//                     <Link  to='/LoginPage'>
//                     <Button variant="outline-none btn-md" className="me-2 btn-login ">Login</Button></Link>
//                     <Link  to="/Loginpage">
//                     <Button variant="primary btn-sm" className="btn-join">Join for free</Button>
//                     </Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// };

// export default NavigationBar;



import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './NavigationBar.css';

const NavigationBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTab, setSelectedTab] = useState('Course');

  const [hoveredMaterial, setHoveredMaterial] = useState(null); // Track the hovered material

  // more submenu
  const [dropdownExpanded, setDropdownExpanded] = useState(false); // Control menu width


  // Course and Study Material options
  const courseOptions = ['Class 12 PCM', 'Class 12 PCB', 'Class 12 Commerce', 'Class 11 PCM', 'Class 11 PCB', 'Class 11 Commerce', 'Class 10', 'Class 9', 'Class 8', 'Class 7', 'Class 6', 'Class 5', 'Class 4', 'Class 3'];
  const studyMaterialOptions = ['NCERT Solution', 'NCERT Books', 'CBSE'];

  const studyMaterialSubOptions = {
    'NCERT Solution': [ 'Class 12', 'Class 11','Class 10', 'Class 9', 'Class 8', 'Class 7', 'Class 6', 'Class 5', 'Class 4', 'Class 3'],
    'NCERT Books': [ 'Class 12', 'Class 11','Class 10', 'Class 9', 'Class 8', 'Class 7', 'Class 6', 'Class 5', 'Class 4', 'Class 3'],
    'CBSE': ['CBSE Important Questions','CBSE Notes', 'CBSE Sample Papers', 'Previous Year Question Paper Class 12','Previous Year Question Paper Class 10','CBSE Syllabus']
  };


  // Handle selection of the tab between 'Course' and 'Study Material'
  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

//handel hover effect for dropdown
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(true);
    
    setHoveredMaterial(null); // Close submenu when the dropdown is hidden
  };

//  handel hover for submenu
  const handleMaterialMouseEnter = (material) => {
    setHoveredMaterial(material); // Set the hovered material
  };

  const handleMaterialMouseLeave = () => {
    // setHoveredMaterial(null); // Hide submenu when mouse leaves
    setShowDropdown(true);

  };


  return (
    <Navbar expand="lg" className="navbar-container sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/images/CompanyLogo.png"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Dropdown for Academics */}
            <Dropdown as={ButtonGroup}
              show={showDropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="me-3">

              <Nav.Link as={Link} variant="outline-none" id="dropdown-academic" className="nav-link" to="/Academics">Academic</Nav.Link>

              <Dropdown.Menu className="dropdown-academic-menu">
                {/* Course and Study Material buttons */}
                <div className="d-flex justify-content-around p-2">
                  <Button  className={`Dropdown-button ${selectedTab === 'Course' ? 'active' : ''}`}onClick={() => handleTabSelect('Course')} >
                    Course
                  </Button>
                  <Button className={`Dropdown-button ${selectedTab === 'Study Material' ? 'active' : ''}`} onClick={() => handleTabSelect('Study Material')}>
                    Study Material
                  </Button>
                </div>

                  {/* Course tab menu */}
          
                {selectedTab === 'Course' && (
                  <>
                    <Dropdown.Header style={{ fontWeight: "bold", color: "black" }}><img src='/images/FindCourse.png' alt='Find Course' /> Find Courses by Class</Dropdown.Header>
                    {courseOptions.map((course) => (
                      <Dropdown.Item key={course}>{course}</Dropdown.Item>
                    ))}
                  </>
                )}



                {/* Study Material menue with submenu */}

                {/* {selectedTab === 'Study Material' && (
                  studyMaterialOptions.map((course) => (
                    <Dropdown.Item  className='d-flex' key={course}>{course}
                  <FontAwesomeIcon className='ms-auto' icon={faAngleRight} />
                    
                    </Dropdown.Item>
                    
                  ))
                )} */}
                {selectedTab === 'Study Material' && (
                  <div className="study-material-options">
                    {studyMaterialOptions.map((material) => (
                      <Dropdown.Item
                        key={material}
                        className='d-flex'
                        onMouseEnter={() => handleMaterialMouseEnter(material)}
                        onMouseLeave={() => handleMaterialMouseEnter(material)}
                      >
                        {material}
                        <FontAwesomeIcon className='ms-auto' icon={faAngleRight} />
                        {hoveredMaterial === material && (
                          <div className="submenu">
                            {studyMaterialSubOptions[material].map((subOption) => (
                              <Dropdown.Item key={subOption}>{subOption}</Dropdown.Item>
                            ))}
                          </div>
                        )}
                 </Dropdown.Item>
                    ))}
                  </div>
                )}
              </Dropdown.Menu>
              
            </Dropdown>


            <Nav.Link as={Link} to="/">College Search</Nav.Link>
            <Nav.Link as={Link} to="/">Study Abroad</Nav.Link>
            <Nav.Link as={Link} to="/">Skill Development</Nav.Link>
            <Nav.Link as={Link} to="/">Competitive Exam</Nav.Link>
          </Nav>

          {/* Login and Join buttons */}
          <Nav>
            <Link to='/LoginPage'>
              <Button variant="outline-none btn-md" className="me-2 btn-login">Login</Button>
            </Link>
            <Link to="/LoginPage">
              <Button variant="primary btn-sm" className="btn-join">Join for free</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default NavigationBar;










