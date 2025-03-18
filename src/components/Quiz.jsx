import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import quizData from "../data/quizData";

const Quiz = () => {
  const { topic } = useParams();
  const questions = quizData[topic] || [];
  const navigate = useNavigate();

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
          "url('https://pbs.twimg.com/media/FOtUhw6XEAYt1sP.jpg:large')",
        backgroundBlendMode: "overlay",
        fontFamily: '"Indie Flower", cursive',
        fontSize: "24px",
      }}
    >
      {showResults ? (
        <div className="text-center text-4xl">
          <h2 className="text-3xl">Quiz beendet!</h2>
          <p className="mt-4 mb-9 text-xl sm:text-3xl">
            Dein Ergebnis: {score} von {questions.length}
          </p>
          <div className="mt-4 animate-bounce text-4xl text-yellow-400">🌞</div>
          <button
            onClick={() => navigate("/quiz")}
            className="mt-8 py-4 px-8 bg-lime-500 text-white font-bold text-3xl rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Zurück zum Thema Auswahl
          </button>
        </div>
      ) : (
        <div className="text-center max-w-xl w-full p-6 bg-opacity-30 rounded-lg shadow-2xl relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-6 relative z-10">
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
            className="mt-8 py-3 px-9 bg-purple-500 text-white font-bold text-lg sm:text-2xl md:text-3xl rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-60"
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
