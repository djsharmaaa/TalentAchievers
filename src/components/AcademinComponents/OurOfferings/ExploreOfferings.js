import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ExploreOfferings.css';

const ExploreOfferings = () => {
  const [selectedClass, setSelectedClass] = useState('Class 12');

  const classes = [
    'Class 12',
    'Class 11',
    'Class 10',
    'Class 9',
    'Class 8',
    'Class 7',
    'Class 6',
    'Class 1-5',
    'pre'
  ];

  const classResources = {
    'Class 12': [
      { name: 'NCERT', logo: './images/Explore.png', link: '#' },
      { name: 'Previous Year Question Paper', logo: './images/Explore.png', link: '#' },
      { name: 'Sample Question Papers', logo: '../images/Explore1.png', link: '#' },
      { name: 'Important Question papers', logo: './images/Explore1.png', link: '#' },
      { name: 'Revise', logo: './images/Explore.png', link: '#' },
      { name: 'General Knowledge', logo: './images/Explore1.png', link: '#' }
    ],
    'Class 11': [
      { name: 'NCERT', logo: './images/Explore.png', link: '#' },
      { name: 'Previous Year Question Paper', logo: './images/Explore.png', link: '#' },
      { name: 'Important Question papers', logo: './images/Explore1.png', link: '#' },
      { name: 'Revise', logo: './images/Explore1.png', link: '#' },
      { name: 'General Knowledge', logo: './images/Explore1.png', link: '#' }
    ],

    'Class 10': [
      { name: 'NCERT', logo: './images/Explore.png', link: '#' },
      { name: 'Previous Year Question Paper', logo: './images/Explore.png', link: '#' },
      { name: 'Sample Question Papers', logo: '../images/Explore1.png', link: '#' },
      { name: 'Important Question papers', logo: './images/Explore1.png', link: '#' },
      { name: 'Revision Notes', logo: './images/Explore1.png', link: '#' },
      { name: 'General Knowledge', logo: './images/Explore1.png', link: '#' }

    ],
    'Class 9': [
      { name: 'NCERT', logo: './images/Explore.png', link: '#' },
      { name: 'Sample Question Papers', logo: '../images/Explore1.png', link: '#' },
      { name: 'Important Question papers', logo: './images/Explore1.png', link: '#' },
      { name: 'Revision Notes', logo: './images/Explore1.png', link: '#' }

    ],
    'Class 8': [
      { name: 'NCERT', logo: './images/Explore.png', link: '#' },
      { name: 'Sample Question Papers', logo: '../images/Explore1.png', link: '#' },
      { name: 'Important Question papers', logo: './images/Explore1.png', link: '#' },
      { name: 'Revision Notes', logo: './images/Explore1.png', link: '#' },
      { name: 'General Knowledge', logo: './images/Explore1.png', link: '#' }
    ],
    'Class 7': [
      { name: 'NCERT', logo: './images/Explore.png', link: '#' },
      { name: 'Sample Question Papers', logo: '../images/Explore1.png', link: '#' },
      { name: 'Important Question papers', logo: './images/Explore1.png', link: '#' },
      { name: 'Revision Notes', logo: './images/Explore1.png', link: '#' },
      { name: 'General Knowledge', logo: './images/Explore1.png', link: '#' },
    ],
    'Class 6': [
      { name: 'NCERT', logo: './images/Explore.png', link: '#' },
      { name: 'Sample Question Papers', logo: '../images/Explore1.png', link: '#' },
      { name: 'Important Question papers', logo: './images/Explore1.png', link: '#' },
      { name: 'Revision Notes', logo: './images/Explore1.png', link: '#' },
      { name: 'General Knowledge', logo: './images/Explore1.png', link: '#' },
    ],
    'Class 1-5': [
      { name: 'NCERT', logo: './images/Explore.png', link: '#' },
      { name: 'Sample Question Papers', logo: '../images/Explore1.png', link: '#' },
      { name: 'General Knowledge', logo: './images/Explore1.png', link: '#' },
    ],
    'pre': [
      { name: 'NCERT', logo: './images/Explore.png', link: '#' },
      { name: 'Story', logo: '../images/Explore1.png', link: '#' },
      { name: 'Art Books', logo: './images/Explore1.png', link: '#' },
      { name: 'General Knowledge', logo: './images/Explore1.png', link: '#' },
    ]

  };

  const handleClassClick = (className) => {
    setSelectedClass(className);
  };

  return (
    <section className="offerings-section">
      <Container>
        <h2>Explore all our offerings</h2>
        <Row className="offerings-buttons">
          {classes.map((className) => (

            <Col key={className} xs={6} lg={1}>
              <Button

                variant="outline-dark"
                className={selectedClass === className ? 'button-active' : ''}
                onClick={() => handleClassClick(className)}
              >
                {className}

              </Button>
            </Col>
          ))}
        </Row>

        {selectedClass && (
          <Row className="study-material">
            <Col md={12}>
              <h3>Study Materials</h3>
              <div className="resource-links">
                {classResources[selectedClass].map((resource) => (
                  <a key={resource.name} href={resource.link} target="_blank" rel="">
                    <img src={resource.logo} alt={resource.name} title={resource.name} />
                    <p>{resource.name}</p>

                  </a>
                ))}
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default ExploreOfferings;
