import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProgressContext } from "../contexts/ProgressContext";
import quizData from "../data/quizData";

const Quiz = () => {
  const { topic } = useParams();
  const questions = quizData[topic] || [];
  const navigate = useNavigate();
  const { setEarnedPoints, setEarnedProgress, earnedProgress } =
    useContext(ProgressContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  if (questions.length === 0) {
    return <h2>Keine Fragen für dieses Thema.</h2>;
  }

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    // Highlight the correct answer
    const currentCorrectAnswer = questions[currentQuestion].answer;
    setCorrectAnswer(currentCorrectAnswer);

    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }

    // Delay moving to the next question to allow the user to see the correct answer
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setSelectedAnswer(null);
        setCorrectAnswer(null);
        // Reset correct answer for the next question
      } else {
        setShowResults(true);
        setEarnedPoints((prevPoints) => prevPoints + score );
        console.log(score, "---", earnedProgress);
        // Only when score is 100% add progress
        if (score +1 === questions.length) {
          setEarnedProgress((prevProgress) => prevProgress + 4.16);
        }
      }
    }, 2000);
    // 2-second delay
  };

  return (
    <div
      className="flex-1 bg-cover bg-center py-10 flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://pbs.twimg.com/media/FOtUhw6XEAYt1sP.jpg:large')",
        backgroundBlendMode: "overlay",
        fontFamily: '"Indie Flower", cursive',
        fontSize: "26px",
      }}
    >
      {showResults ? (
        <div className="rounded-lg sm:rounded-xl bg-violet-300 text-center text-3xl sm:text-4xl mt-4 sm:mt-2">
          <h2 className="text-2xl sm:text-3xl mt-5 ">Quiz beendet!</h2>
          <p className="mt-2 sm:mt-4 mb-4 sm:mb-9 text-lg sm:text-3xl">
            Dein Ergebnis: {score} von {questions.length}
          </p>
          <div className="mt-2 sm:mt-4 animate-bounce text-3xl sm:text-4xl text-yellow-400">
            🌞
          </div>
          <button
            onClick={() => navigate("/quiz")}
            className="mt- sm:mt-8 py-2 px-4 text-lg sm:py-3 sm:px-3 sm:text-2xl lg:py-4 lg:px-8 lg:text-2xl mb-7 mx-6 bg-purple-600 text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Zurück zum Thema Auswahl
          </button>
        </div>
      ) : (
        <div className="text-center max-w-xl w-full p-9 bg-white/40 rounded-lg shadow-2xl relative z-10  mx-6 sm:mx-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-6 relative z-10">
            {questions[currentQuestion].question}
          </h2>
          <ul className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`cursor-pointer py-4 px-6 rounded-xl text-center transition-all duration-300 relative z-10 ${
                  correctAnswer === option
                    ? "bg-green-300"
                    : selectedAnswer === option
                    ? "bg-purple-400"
                    : "bg-orange-400"
                } transform hover:scale-105`}
              >
                {option}
              </li>
            ))}
          </ul>
          <button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            className="mt-8 py-3 px-9 bg-purple-700 text-white font-bold text-lg sm:text-2xl md:text-3xl rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-70"
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
