import React, { useState } from "react";
import { useParams } from "react-router-dom";
import quizData from "../data/quizData";

const Quiz = () => {
  const { topic } = useParams();
  const questions = quizData[topic] || [];

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
    <div
      className="min-h-screen bg-cover bg-center py-10 flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://imgcdn.stablediffusionweb.com/2024/5/21/533bf4b9-4725-4b7d-b735-3856ab18236e.jpg')",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      }}
    >
      {showResults ? (
        <div className="text-center text-3xl">
          <h2>Quiz beendet!</h2>
          <p className="mt-4 text-xl">
            Dein Ergebnis: {score} von {questions.length}
          </p>
          <div className="mt-4 animate-bounce text-4xl text-yellow-400">🌞</div>
        </div>
      ) : (
        <div className="text-center max-w-xl w-full p-6 bg-opacity-30 rounded-lg shadow-2xl relative z-10">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 relative z-10">
            {questions[currentQuestion].question}
          </h2>
          <ul className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`cursor-pointer py-4 px-6 rounded-xl text-center transition-all duration-300 relative z-10 ${
                  selectedAnswer === option
                    ? "bg-purple-300"
                    : "bg-orange-300 hover:bg-orange-400"
                } transform hover:scale-105`}
                style={{
                  backgroundColor: selectedAnswer === option ? "#E9D5FF" : "",
                }}
              >
                {option}
              </li>
            ))}
          </ul>
          <button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            className="mt-6 py-2 px-8 bg-purple-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50"
          >
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
