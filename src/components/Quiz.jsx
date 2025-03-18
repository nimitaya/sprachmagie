import React, { useState } from "react";
import quizData from "../data/quizData";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  /*   Wenn Kind  ein Antwort drückt , setSelected-Answer(option) speichert diese*/
  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div>
      {showResults ? (
        <div>
          <h2>Quiz beendet!</h2>
          <p>
            Dein Ergebnis: {score} von {quizData.length}
          </p>
        </div>
      ) : (
        <div>
          <h2>{quizData[currentQuestion].question}</h2>
          <ul>
            {quizData[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswerClick(option)}
                style={{
                  cursor: "pointer",
                  backgroundColor: selectedAnswer === option ? "lightgray" : "",
                }}
              >
                {option}
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion} disabled={!selectedAnswer}>
            {currentQuestion + 1 < quizData.length
              ? "Nächste Frage"
              : "Ergebnisse anzeigen"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
