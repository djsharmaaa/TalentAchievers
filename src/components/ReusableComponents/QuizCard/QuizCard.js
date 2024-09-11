import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const QuizCard = ({ questionData, onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionClick = (option) => {
    if (!isSubmitted) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setIsSubmitted(true);
      setIsCorrect(selectedOption === questionData.correctAnswer);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setIsCorrect(null);
    onNext();
  };

  const getOptionClass = (option) => {
    if (!isSubmitted) return '';
    if (option === questionData.correctAnswer) return 'correct-option'; // Green for correct
    if (option === selectedOption) return 'wrong-option'; // Red for wrong
    return '';
  };

  return (
    <Card className='quiz-card'>
      <Card.Body>
        <Card.Title>Question {questionData.questionNumber} of 5</Card.Title>
        <Card.Text>{questionData.question}</Card.Text>
        <div className='options'>
          {questionData.options.map((option, index) => (
            <Button
              key={index}
              className={`option-btn ${getOptionClass(option)}`}
              onClick={() => handleOptionClick(option)}
              disabled={isSubmitted}
            >
              {option}
            </Button>
          ))}
        </div>
        {isSubmitted ? (
          <Button onClick={handleNext}>Next</Button>
        ) : (
          <Button onClick={handleSubmit} disabled={selectedOption === null}>
            Submit
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default QuizCard;
