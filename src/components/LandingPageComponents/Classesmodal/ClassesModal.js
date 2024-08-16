import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ClassesModal.css';
import { Link } from 'react-router-dom';


const ClassesModal = ({ show, handleClose, handleViewCoursePlan }) => {
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedBoard, setSelectedBoard] = useState('');
    const [selectedYear,  setSelectedYear] = useState('');

    const handleClassSelect = (selectedClass) => setSelectedClass(selectedClass);
    const handleBoardSelect = (selectedBoard) => setSelectedBoard(selectedBoard);
    const handelYearselect = (selectedYear) => setSelectedYear(selectedYear);

    const onModalClose = () => {
        setSelectedClass('');
        setSelectedBoard('');
        setSelectedYear('');
        handleClose();
    };

    const onModalViewCoursePlan = () => {
        // handleViewCoursePlan(selectedClass, selectedBoard);
        // onModalClose();
    
      
    };
    const classOptions = [
      { name: 'Class 3', image: '/images/ClassesModal.png' },
      { name: 'Class 4', image: '/images/ClassesModal.png' },
      { name: 'Class 5', image: '/images/ClassesModal.png' },
      { name: 'Class 6', image: '/images/ClassesModal.png' },
      { name: 'Class 7', image: '/images/ClassesModal.png' },
      { name: 'Class 8', image: '/images/ClassesModal.png' },
      { name: 'Class 9', image: '/images/ClassesModal.png' },
      { name: 'Class 10', image: '/images/ClassesModal.png' },
      { name: 'Class 11', image: '/images/ClassesModal.png' },
      { name: 'Class 12', image: '/images/ClassesModal.png' },
  ];

  const boardOptions = [
      { name: 'CBSE'},
      { name: 'ICSE' },
  ];

  const examyearOptions = [
    {name: '2023-2024'},
  ]

    return (
      <Modal show={show} onHide={onModalClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header >
          <Modal.Title>Select Class and Board</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className="mb-3">
              <h5>Select Class</h5>
              <div className="d-flex flex-wrap">
                  {classOptions.map((classOption) => (
                      <Button
                          key={classOption.name}
                          variant={selectedClass === classOption.name ? 'dark' : 'light'}
                          className="m-1"
                          onClick={() => handleClassSelect(classOption.name)}
                      >
                          <img src={classOption.image} alt='ClassImage' className="me-2 " />
                           {classOption.name}
                      </Button>
                  ))}
              </div>
          </div>

        
          {selectedClass && (
              <div>
                  <h5>Select Board</h5>
                  <div className="d-flex flex-wrap">
                      {boardOptions.map((boardOption) => (
                          <Button
                              key={boardOption.name}
                              variant={selectedClass === boardOption.name ? 'dark' : 'light'}

                              className="m-1"
                              onClick={() => handleBoardSelect(boardOption.name)}
                          >
                            
                              {boardOption.name}
                          </Button>
                      ))}
                  </div>
              </div>
          )}
              {selectedBoard && (
              <div>
                  <h5>Select Exam</h5>
                  <div className="d-flex flex-wrap">
                      {examyearOptions.map((examyearOption) => (
                          <Button
                              key={examyearOption.name}
                              variant={selectedClass === examyearOption.name ? 'dark' : 'light'}

                              className="m-1"
                              onClick={() => handelYearselect(examyearOption.name)}
                          >
                            
                              {examyearOption.name}
                          </Button> 
                      ))}
                  </div>
              </div> 
          )}
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={onModalClose}>
              Close
          </Button>
          <Button      as={Link}
                to="/Academics/Tweleth" variant="primary" onClick={onModalViewCoursePlan} disabled={!selectedClass || !selectedBoard || !selectedYear}>
              View Course Plan
          </Button>
      </Modal.Footer>
  </Modal>
    ); 
};

export default ClassesModal;
