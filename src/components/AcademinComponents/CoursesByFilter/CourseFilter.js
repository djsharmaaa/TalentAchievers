import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Pagination } from 'react-bootstrap';
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
    {  image: '/images/CBSEbatch.png', name: 'CBSE Batch (2024-2025)', status:'Live Classes', syallabus: 'Full CBSE Class 6 Syllabus', notes:'Topic wise syllabus notes and revision',timing:'Evening Classes',teachers:'Anamika, Neha',    price: '$280', previousPrice:'$300' },
    {  image: '/images/CBSEbatch.png', name: 'CBSE Batch (2024-2025)', status:'Live Classes', syallabus: 'Full CBSE Class 6 Syllabus', notes:'Topic wise syllabus notes and revision',timing:'Evening Classes',teachers:'Anamika, Neha',price: '$280', previousPrice:'$300' },
    {  image: '/images/CBSEbatch.png', name: 'CBSE Batch (2024-2025)', status:'Live Classes', syallabus: 'Full CBSE Class 6 Syllabus', notes:'Topic wise syllabus notes and revision',timing:'Evening Classes',teachers:'Anamika, Neha',price: '$280', previousPrice:'$300'},
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
          <Col md={7} className="filters-header text-left">
          <div className="selected-filters">
              {Object.keys(selectedFilters).map((category) =>
                selectedFilters[category].map((filter) => (
                  <Button variant="secondary" key={filter} onClick={() => handleFilterChange(category, filter)}>
                    {filter} <span>&times;</span>
                  </Button>
                ))
              )}
            </div>
            <Button variant="danger" onClick={clearFilters}>
              Clear Filters
            </Button>
          
          </Col>
          <Col md={2} className='text-center'>
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
                </div>
              ))}
            </div>
         
         
          </Col>

          <Col md={9} className="courses-card-section">
            <Row>
              {courses.map((course) => (
                <Col key={course.name} md={12}>
                  <Card className="course-card">
                    <Row>
                      <Col md={5}>
                    
                        <Card.Img variant="top" src={course.image} />
                      </Col>
                      <Col md={4}>
                        <Card.Body>
                          <Card.Title>{course.name}</Card.Title>
                          <Card.Text className="course-status"><span className="status-dot"></span>{course.status}</Card.Text>
                          <Card.Text><img src='/images/syllabusL.png' alt='syllabus'/>{course.syallabus}</Card.Text>
                          <Card.Text><img src='/images/notesL.png' alt='notes'/>{course.notes}</Card.Text>
                          <Card.Text><img src='/images/timingL.png' alt='timing'/>{course.timing}</Card.Text>
                          <Card.Text><img src='/images/teachersL.png' alt='teachers'/>{course.teachers}</Card.Text>
                          

                        </Card.Body>
                      </Col>
                      <Col md={3} className='mt-5'>
                      
                        <Card.Text><strong>{course.price}</strong> {course.previousPrice && (
                        <span className="previous-price">{' '}( {course.previousPrice})</span>
                      )}</Card.Text>
                        <Button variant="primary btn-sm"  className='Batch-details mt-2'>View Btach Details</Button>
                       
                       
                        
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
   
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center">
            <Pagination className="mt-3">
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CoursesFilter;
