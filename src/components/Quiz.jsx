import React, { useState } from "react";
import { useParams } from "react-router-dom";
import quizData from "../data/quizData";

console.log("quiiiizzzzzzz");

const Quiz = () => {
  const { topic } = useParams(); /* Erhalten Thema Namen aus URL */
  const questions = quizData[topic] || []; /* Nemmen die Frage aus quizData */

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  if (questions.length === 0) {
    return <h2>Keine Fragen für dieses Thema.</h2>;
  }

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
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
            Dein Ergebnis: {score} von {questions.length}
          </p>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
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
            {currentQuestion + 1 < questions.length
              ? "Nächste Frage"
              : "Ergebnisse anzeigen"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
