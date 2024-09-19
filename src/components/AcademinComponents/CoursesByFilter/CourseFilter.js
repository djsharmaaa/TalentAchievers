import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Pagination } from 'react-bootstrap';
import ReusableButtons from '../../ReusableComponents/ReusableButtons/ReusableButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import './CourseFilter.css';

const CoursesFilter = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    targetBoard: [],
    classes: [],
    subjects: [],
    mode: [],
    language: [],
  });

  const targetBoardOptions = ['CBSE (Science)', 'CBSE (Commerce)', 'ICSE (Science)', 'ICSE (Commerce)'];
  const classesOptions = ['Class 12', 'Class 11', 'Class 10', 'Class 9', 'Class 8', 'Class 7', 'Class 6'];
  const subjectOptions = ['Maths', 'Science', 'English', 'Social Studies', 'Computer Science'];
  const modeOptions = ['One-to-one', 'Live', 'Offline', 'Recorded'];
  const languageOptions = ['English', 'Hindi'];

  const courses = [
    {  image: '/images/CBSEbatch.png', name: 'CBSE Batch (2024-2025)', status:'Live Classes', syallabus: 'Full CBSE Class 6 Syllabus', notes:'Topic wise syllabus notes and revision',timing:'Evening Classes',teachers:'Anamika, Neha',    price: '₹1999', previousPrice:'₹1999' },
    {  image: '/images/CBSEbatch.png', name: 'CBSE Batch (2024-2025)', status:'Live Classes', syallabus: 'Full CBSE Class 6 Syllabus', notes:'Topic wise syllabus notes and revision',timing:'Evening Classes',teachers:'Anamika, Neha',price: '₹1999', previousPrice:'₹1999' },
    {  image: '/images/CBSEbatch.png', name: 'CBSE Batch (2024-2025)', status:'Live Classes', syallabus: 'Full CBSE Class 6 Syllabus', notes:'Topic wise syllabus notes and revision',timing:'Evening Classes',teachers:'Anamika, Neha',price: '₹1999', previousPrice:'₹1999'},
  ];

  const handleFilterChange = (category, option) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (newFilters[category].includes(option)) {
        newFilters[category] = newFilters[category].filter((item) => item !== option);
      } else {
        newFilters[category].push(option);
      }
      return newFilters;
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      targetBoard: [],
      classes: [],
      subjects: [],
      mode: [],
      language: [],
    });
  };

  return (
    <div>
      <Container>
        <Row>
        <h1 className='my-5'>Courses</h1>
        </Row>

        <Row>
          <Col md={3} className="filters-header">
            <h4>Filter By</h4>
          </Col>
          <Col md={7} className="filters-header ">
          <div className="selected-filters">
              {Object.keys(selectedFilters).map((category) =>
                selectedFilters[category].map((filter) => (
                  // <Button className='filter-opn-btn' key={filter} onClick={() => handleFilterChange(category, filter)}>
                  <Button
                  className={`filter-opn-btn ${selectedFilters[category].includes(filter) ? 'active' : ''}`}
                  key={filter}
                  variant='transparent'
                  onClick={() => handleFilterChange(category, filter)}
                >
                  {filter} <span>&times;</span>
                </Button>
                

                  
                ))
              )}
            </div>
        
                 
       
            <Button variant="outline-none btn-md" className="me-2 btn-login " onClick={clearFilters}> Clear Filters</Button>

          
          </Col>
          <Col md={2} className='text-end'>
          <span>1,250 results</span>
          </Col>

         
        </Row>

        <Row>
          <Col md={3} className="filters-section">
            <div>
              <h5>Target Board</h5>
              {targetBoardOptions.map((option) => (
              <div key={option}>
                  <input
                    type="checkbox"
                checked={selectedFilters.targetBoard.includes(option)}
                onChange={() => handleFilterChange('targetBoard', option)}
                  />
                  <label>{option}</label>
                  <span className='text-black-50 ms-2 '>(2,500)</span>
                </div>
              ))}
            </div>
            <div>
              <h5>Classes</h5>
              {classesOptions.map((option) => (
                <div key={option}>
               <input
                    type="checkbox"
                    checked={selectedFilters.classes.includes(option)}
                    onChange={() => handleFilterChange('classes', option)}
                  />
                  <label>{option}</label>
                  <span className='text-black-50 ms-2 '  >(2,500)</span>

                </div>
              ))}
            </div>
            <div>
              <h5>Subjects</h5>
              {subjectOptions.map((option) => (
                <div key={option}>
             <input
              type="checkbox"
                  checked={selectedFilters.subjects.includes(option)}
                    onChange={() => handleFilterChange('subjects', option)}
               />
                  <label>{option}</label>
                  <span className='text-black-50 ms-2 '  >(2,500)</span>

                </div>
              ))}
            </div>
            <div>
              <h5>Mode</h5>
              {modeOptions.map((option) => (
                <div key={option}>
                  <input
                    type="checkbox"
                    checked={selectedFilters.mode.includes(option)}
                    onChange={() => handleFilterChange('mode', option)}
                  />
                  <label>{option}</label>
                  <span className='text-black-50 ms-2 '  >(2,500)</span>

                </div>
              ))}
            </div>
            <div>
              <h5>Language</h5>
              {languageOptions.map((option) => (
                <div key={option}>
                  <input
                    type="checkbox"
                    checked={selectedFilters.language.includes(option)}
                    onChange={() => handleFilterChange('language', option)}
                  />
                <label>{option}</label>
                <span className='text-black-50 ms-2 '  >(2,500)</span>

                </div>
              ))}
            </div>
         
         
          </Col>

          <Col md={9} className="courses-card-section">
            <Row>
              {courses.map((course, index) => (
                <Col key={course.name} md={12}>
                  <Card className="course-batch-card">
                    <Row>
                      <Col md={4}>
                    
                        <Card.Img variant="top" src={course.image} />
                      </Col>
                      <Col md={5}>
                        <Card.Body className='p-0'>
                          <Card.Title>{course.name}</Card.Title>
                          <Card.Text className="course-status"><span className="status-dot"></span>{course.status}</Card.Text>
                          <Card.Text className='course-card-info'><img src='/images/syllabusL.png' alt='syllabus' className='me-2'/>{course.syallabus}</Card.Text>
                          <Card.Text className='course-card-info'><img src='/images/teachersL.png' alt='notes'className='me-2'/>{course.notes}</Card.Text>
                          <Card.Text className='course-card-info'><img src='/images/timingL.png' alt='timing'className='me-2'/>{course.timing}</Card.Text>
                          <Card.Text className='course-card-info'><img src='/images/notesL.png' alt='teachers'className='me-2'/>{course.teachers}</Card.Text>
                          

                        </Card.Body>
                      </Col>
                      <Col md={3} className='mt-5 '>
                      
                        <Card.Text><strong>{course.price}</strong> {course.previousPrice && (
                        <span className="previous-price">{' '}( {course.previousPrice})</span>
                      )}</Card.Text>
                        <ReusableButtons label="View Batch Details" linkTo="/Academics/BatchDetails" customClass="primary"  />
                       
                       
                        
                      </Col>
                    </Row>
                  </Card>
                  {index < courses.length - 1 && <hr className="my-5" />}
                </Col>
              ))}
            </Row>
   
          </Col>
        </Row>

        <Row>
        <Col className="d-flex justify-content-center align-items-center">
                        <Pagination className="custom-pagination mt-3">
                            <Pagination.Prev className="custom-pagination-prev">
                            <FontAwesomeIcon  className='ms-auto pagination-icon' icon={faCircleChevronLeft} />
                            </Pagination.Prev>
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Item>{"..."}</Pagination.Item>

                            <Pagination.Item>{5}</Pagination.Item>

                            <Pagination.Next className="custom-pagination-next">
                            <FontAwesomeIcon className='ms-auto pagination-icon' icon={faCircleChevronRight} />
                                
                            </Pagination.Next>
                        </Pagination>
                    </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CoursesFilter;
