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
import { Navbar, Nav, Container, Button, Dropdown, ButtonGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './NavigationBar.css';

const NavigationBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTab, setSelectedTab] = useState('Course');

  const [hoveredMaterial, setHoveredMaterial] = useState(null); // Track the hovered material
  const [hoveredSubOption, sethoveredSubOption] = useState(null);
  // more submenu
  // const [dropdownExpanded, setDropdownExpanded] = useState(false); // Control menu width


  // Course and Study Material options
  const courseOptions = ['Class 12 PCM', 'Class 12 PCB', 'Class 12 Commerce', 'Class 11 PCM', 'Class 11 PCB', 'Class 11 Commerce', 'Class 10', 'Class 9', 'Class 8', 'Class 7', 'Class 6', 'Class 5', 'Class 4', 'Class 3'];
  const studyMaterialOptions = ['NCERT Solution', 'NCERT Books', 'CBSE'];

  const studyMaterialSubOptions = {
    'NCERT Solution': [ 'Class 12 Solution', 'Class 11 Solution','Class 10 Solution', 'Class 9 Solution', 'Class 8 Solution', 'Class 7 Solution', 'Class 6 Solution', 'Class 5 Solution', 'Class 4 Solution', 'Class 3 Solution'],
    
    'NCERT Books': [ 'Class 12 Books', 'Class 11 Books','Class 10 Books', 'Class 9 Books', 'Class 8 Books', 'Class 7 Books', 'Class 6 Books', 'Class 5 Books', 'Class 4 Books', 'Class 3 Books'],
    'CBSE': ['CBSE Important Questions','CBSE Notes', 'CBSE Sample Papers', 'Previous Year Question Paper Class 12','Previous Year Question Paper Class 10','CBSE Syllabus'],
    
  };

  const studyMaterialMoreOptions = {
    'Class 12 Solution' : ['Class 12 Math', 'Class 12 Physics', 'class 12 Chemistry','Class 12 Biology', 'Class 12 Accountancy', 'Class 12 Economics', 'Class 12 Buisness Studies'],
    'Class 11 Solution' : ['Class 11 Math', 'Class 11 Physics', 'class 11 Chemistry','Class 11 Biology', 'Class 11 Accountancy', 'Class 11 Economics', 'Class 11 Buisness Studies'],
    'Class 12 Books' : ['Class 12 Math', 'Class 12 Physics', 'class 12 Chemistry','Class 12 Biology', 'Class 12 Accountancy', 'Class 12 Economics', 'Class 12 Buisness Studies'],
    'Class 11 Books' : ['Class 11 Math', 'Class 11 Physics', 'class 11 Chemistry','Class 11 Biology', 'Class 11 Accountancy', 'Class 11 Economics', 'Class 11 Buisness Studies'],
   
    'Class 10' : [],
    'Class 9' : [],
    'Class 8' : [],
    'Class 7' : [],
    'Class 6' : [],
    'Class 5' : [],
    'Class 4' : [],
    'Class 3' : [],
'CBSE Important Questions' : ['Class 12 Questions', 'Class 11','Class 10', 'Class 9', 'Class 8', 'Class 7', 'Class 6', 'Class 5', 'Class 4', 'Class 3'],
'CBSE Notes': ['Class 12 Notes', 'Class 11','Class 10', 'Class 9', 'Class 8', 'Class 7', 'Class 6', 'Class 5', 'Class 4', 'Class 3'],
'CBSE Sample Papers':['Class 12 Sample Papers', 'Class 11','Class 10', 'Class 9', 'Class 8', 'Class 7', 'Class 6', 'Class 5', 'Class 4', 'Class 3'],
 'Previous Year Question Paper Class 12':['Physics', 'Chemistry', 'Math', 'English', 'Biology', 'Commerce'],
 'Previous Year Question Paper Class 10':['Science', 'English', 'Math', 'Social Science'],
 'CBSE Syllabus':['Class 12 Syllabus', 'Class 11','Class 10', 'Class 9', 'Class 8', 'Class 7', 'Class 6', 'Class 5', 'Class 4', 'Class 3']

  }


  // Handle selection of the tab between 'Course' and 'Study Material'
  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
    
  };

//handel hover effect for dropdown
  const handleMouseEnter = () => {
    setShowDropdown(true);
    sethoveredSubOption(null);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
    
    setHoveredMaterial(null); // Close submenu when the dropdown is hidden
  };

//  handel hover for submenu
  const handleMaterialMouseEnter  = (material) => {
    setHoveredMaterial(material); // Set the hovered material
  };

  const handleMaterialMouseLeave = () => {
    // setHoveredMaterial(null); // Hide submenu when mouse leaves
    setShowDropdown(true);

  };
const handleSubOptionMouseEnter = (subOption) => {
  sethoveredSubOption(subOption);
}

const  handleSubOptionMouseLeave =()=>{
  setShowDropdown(true);
}
  

  return (
    <>
      
      <div className={`overlay ${showDropdown ? 'active' : ''}`} onClick={() => setShowDropdown(false)}></div>
      
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
                <div className="dropdown-academic-menu-btn">
                  <Button  className={`Dropdown-button ${selectedTab === 'Course' ? 'active' : ''}`}onClick={() => handleTabSelect('Course')} AC>
                    Course
                  </Button>
                  <Button className={`Dropdown-button ${selectedTab === 'Study Material' ? 'active' : ''}`} onClick={() => handleTabSelect('Study Material')}>
                    Study Material
                  </Button>
                </div>

                  {/* Course tab menu */}
          
                {selectedTab === 'Course' && (
                  <>
                    <Dropdown.Header style={{ fontWeight: "bold", color: "black" }} className='px-4'><img src='/images/FindCourse.png' alt='Find Course' /> Find Courses by Class</Dropdown.Header>
                    {courseOptions.map((course) => (
                      <Dropdown.Item className='px-4' key={course}>{course}</Dropdown.Item>
                    ))}
                  </>
                )}



                {/* {selectedTab === 'Study Material' && (
                  <div >
                    {studyMaterialOptions.map((material) => (
                      <Dropdown.Item
                        key={material}
                        className='d-flex'
                        onMouseEnter={() => handleMaterialMouseEnter(material)}
                        onMouseLeave={() => handleMaterialMouseEnter(material)}
                      >
                        {material}
                        {studyMaterialSubOptions[material].length > 0 && (
          <FontAwesomeIcon className='ms-auto' icon={faAngleRight} />
        )}
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
                 */}
{selectedTab === 'Study Material' && (
  <div>
    {studyMaterialOptions.map((material) => (
      <Dropdown.Item
        key={material}
        className="d-flex px-4"
        onMouseEnter={() => handleMaterialMouseEnter(material)}
        onMouseLeave={() => handleMaterialMouseLeave(material)}
      >
        {material}
        
        {/* Conditionally show the right arrow if there are sub-options */}
        {studyMaterialSubOptions[material]?.length > 0 && (
          <FontAwesomeIcon className="ms-auto" icon={faAngleRight} />
        )}

        {hoveredMaterial === material && studyMaterialSubOptions[material]?.length > 0 && (
          <div className="submenu">
            {studyMaterialSubOptions[material]?.map((subOption) => (
              <Dropdown.Item
                key={subOption}
                className="d-flex px-4"
                onMouseEnter={() => handleSubOptionMouseEnter(subOption)}
                onMouseLeave={() => handleSubOptionMouseLeave(subOption)}
              >
                {subOption}
                
                {/* Conditionally show the right arrow if there are more sub-options */}
                {studyMaterialMoreOptions[subOption] && studyMaterialMoreOptions[subOption].length > 0 && (
                  <FontAwesomeIcon className="ms-auto" icon={faAngleRight} />
                )}

                {/* Render nested submenu for more options */}
                {hoveredSubOption === subOption && studyMaterialMoreOptions[subOption]?.length > 0 && (
                  <div className={`submenu ${subOption === 'Class 12' ? 'last-submenu' : ''}`}>
                    {studyMaterialMoreOptions[subOption].map((moreOption) => (
                      <Dropdown.Item key={moreOption}>{moreOption}</Dropdown.Item>
                    ))}
                  </div>
                )}
              </Dropdown.Item>
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
    </>
  );
};

export default NavigationBar;










