import React from 'react';
import { Container, Row, Col, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import './Studymaterialbtn.css';

const Studymaterialbtn = () => {
  return (
    <section className="study-material-btn-section my-4">
      <Container>
        <Row>
          <Col md={1}>
            <ButtonGroup >
            <div className='dropdown-hover'>
            
              <DropdownButton
                as={ButtonGroup}
                key="light"
                id="dropdown-variants-light"
                variant="light"
                title="Courses"
              >
               <Dropdown.ItemText >Find Courses by Class</Dropdown.ItemText>
                <Dropdown.Item eventKey="1">Class 12 PCM</Dropdown.Item>
                <Dropdown.Item eventKey="2">Class 12 PCB</Dropdown.Item>
                <Dropdown.Item eventKey="3">Class 12 Commerce</Dropdown.Item>
                <Dropdown.Item eventKey="4">Class 11 PCM</Dropdown.Item>
                <Dropdown.Item eventKey="5">Class 11 PCB</Dropdown.Item>
                <Dropdown.Item eventKey="6">Class 11 Commerce</Dropdown.Item>
                <Dropdown.Item eventKey="7">Class 10</Dropdown.Item>
                <Dropdown.Item eventKey="8">Class 9</Dropdown.Item>
                <Dropdown.Item eventKey="9">Class 8</Dropdown.Item>
                <Dropdown.Item eventKey="10">Class 7</Dropdown.Item>
                <Dropdown.Item eventKey="11">Class 6</Dropdown.Item>
                <Dropdown.Item eventKey="12">Class 5</Dropdown.Item>
                <Dropdown.Item eventKey="13">Class4</Dropdown.Item>
                <Dropdown.Item eventKey="14">Class3</Dropdown.Item>
            
              </DropdownButton>
              </div>
            </ButtonGroup>
          </Col>
          <Col  md={1}>
            <ButtonGroup>
            <div className='dropdown-hover'>

              <DropdownButton  as={ButtonGroup} key="light" id="dropdown-variants-light" variant="light" title="Free Study Material"  >
                 
                 <DropdownButton  as={ButtonGroup} key="light" id="dropdown-variants-light" variant="light" title="NCERT Solution" drop="end">
                        <Dropdown.Item eventKey="1">Class 12 </Dropdown.Item>
                        <Dropdown.Item eventKey="2">Class 11</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Class 10</Dropdown.Item>
                        <Dropdown.Item eventKey="4">Class 9</Dropdown.Item>
                        <Dropdown.Item eventKey="5">Class 8</Dropdown.Item>
                        <Dropdown.Item eventKey="6">Class 7</Dropdown.Item>
                        <Dropdown.Item eventKey="7">Class 6</Dropdown.Item>
                        <Dropdown.Item eventKey="8">Class 5</Dropdown.Item>
                        <Dropdown.Item eventKey="9">Class 4</Dropdown.Item>
                        <Dropdown.Item eventKey="10">Class 3</Dropdown.Item>

                 </DropdownButton>
                

                 <DropdownButton  as={ButtonGroup} key="light" id="dropdown-variants-light" variant="light" title="NCERT Books" drop="end">
                 <Dropdown.Item eventKey="2">Class 12 </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Class 11</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Class 10</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Class 9</Dropdown.Item>
                        <Dropdown.Item eventKey="4">Class 8</Dropdown.Item>
                        <Dropdown.Item eventKey="5">Class 7</Dropdown.Item>
                        <Dropdown.Item eventKey="6">Class 6</Dropdown.Item>
                        <Dropdown.Item eventKey="7">Class 5</Dropdown.Item>
                        <Dropdown.Item eventKey="8">Class 4</Dropdown.Item>
                        <Dropdown.Item eventKey="9">Class 3</Dropdown.Item>
                 </DropdownButton>
                 

                 <DropdownButton  as={ButtonGroup} key="light" id="dropdown-variants-light" variant="light" title="CBSE" drop="end">
                      
                       <Dropdown.Item eventKey="1">CBSE Important Questions </Dropdown.Item>
                        <Dropdown.Item eventKey="2">CBSE Notes</Dropdown.Item>
                        <Dropdown.Item eventKey="3">CBSE Sample paper</Dropdown.Item>
                        <Dropdown.Item eventKey="4">Previous Year Questions Paper Class 12</Dropdown.Item>
                        <Dropdown.Item eventKey="5">Previous Year Questions Paper Class 10</Dropdown.Item>
                        <Dropdown.Item eventKey="6">CBSE Syllabus</Dropdown.Item>
                      

                 </DropdownButton>
          
              </DropdownButton>
              </div>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Studymaterialbtn;
