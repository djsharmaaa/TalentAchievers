import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './QuizCard.css'; // Make sure to import your CSS file

const QuizCard = ({ questionData, onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionClick = (option) => {
    if (!isSubmitted) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setIsSubmitted(true);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    onNext();
  };

  const getOptionClass = (option) => {
    if (!isSubmitted) return ''; // No class before submission
    if (option === questionData.correctAnswer) return 'correct-option'; // Green for correct answer
    if (option === selectedOption) return 'wrong-option'; // Red for wrong selected option
    return '';
  };

  return (
    <Card className="quiz-card">
      <Card.Body>
        <Card.Title>Question {questionData.questionNumber} of 5</Card.Title>
        <Card.Text>{questionData.question}</Card.Text>
        <div className="options">
          {questionData.options.map((option, index) => (
            <Button
              key={index}
              className={`option-btn ${getOptionClass(option)}`}
              onClick={() => handleOptionClick(option)}
              disabled={isSubmitted} // Disable buttons after submitting
            >
              {option}
            </Button>
          ))}
        </div>
        {isSubmitted ? (
          <Button onClick={handleNext} className="mt-3">Next</Button>
        ) : (
          <Button onClick={handleSubmit} className="mt-3" disabled={selectedOption === null}>
            Submit
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default QuizCard;
