import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProgressContext } from "../contexts/ProgressContext";
import { LanguageContext } from "../contexts/LanguageContext";
import { picQuizData } from "../data/picQuizData";

const PicQuizQuestions = () => {
  const { categoryPath } = useParams();
  const { setEarnedPoints, setEarnedProgress } = useContext(ProgressContext);
  const { currentLanguage } = useContext(LanguageContext);
  const [currCategory, setCurrCategory] = useState(null);
  const [currQuestion, setCurrQuestion] = useState(null);
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const language = currentLanguage.short

  // make language dynamic TODO

  useEffect(() => {
    const categoryData = picQuizData.find(
      (data) => data.category === categoryPath
    );
    setCurrCategory(categoryData);

    if (categoryData) {
      if (currQuestionIndex >= categoryData.questions.length) {
        setShowResult(true);
        // set Points and Progress in profile
        setEarnedPoints((prevPoints) => prevPoints + score);
        // Only when score is 100% add progress
        if (score === currQuestionIndex) {
          setEarnedProgress((prevProgress) => prevProgress + 4.16);
        }
      } else {
        setCurrQuestion(categoryData.questions[currQuestionIndex]);
        // Reset correct answer for the new question
        setCorrectAnswer(null);
      }
    }
  }, [categoryPath, currQuestionIndex]);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleClick = () => {
    // only do that, if there is an selected answer
    if (selectedAnswer) {
      const isCorrect = currQuestion.options.find(
        (option) => option.word.en === selectedAnswer && option.correct
      );
      // check, if selected answer is correct
      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }

      // Highlight the correct answer
      const correctOption = currQuestion.options.find(
        (option) => option.correct
      );
      setCorrectAnswer(correctOption.word.en);

      // Delay moving to the next question to allow the user to see the correct answer
      setTimeout(() => {
        setCurrQuestionIndex((prevIndex) => prevIndex + 1);
        // Reset selected answer for the next question
        setSelectedAnswer(null);
      }, 2000); // 2-second delay
    }
  };

  if (!currCategory) {
    return <div>Loading...</div>;
  } else {
    return (
      <main>
        {showResult ? (
          <div className="text-center text-3xl">
            <h2>Quiz beendet!</h2>
            <p className="mt-4 text-xl">
              Dein Ergebnis: {score} von {currQuestionIndex}
            </p>
            <div className="mt-4 animate-bounce text-4xl text-yellow-400">
              🌞
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-center p-4 my-4 text-4xl sm:text-6xl">
              Wähle die korrekte Übersetzung
            </h2>
            <section className="container mx-auto p-6 flex flex-col justify-center items-center gap-5">
              <div className="flex justify-center max-w-80">
                <img src={currQuestion.img} alt={currCategory} />
              </div>
              <form className="mx-auto flex justify-between flex-col gap-2 sm:flex-row">
                {/* dynamically creates options to answer */}
                {currQuestion.options.map((option, index) => (
                  <div key={index} className="flex flex-col sm:flex-row">
                    <input
                      type="radio"
                      name={currCategory}
                      id={option.word.en}
                      value={option.word.en}
                      onChange={handleAnswerChange}
                      checked={selectedAnswer === option.word.en}
                      className="appearance-none"
                    />
                    <label
                      htmlFor={option.word.en}
                      className={`cursor-pointer min-w-36 py-4 px-6 rounded-xl text-xl text-center transition-all duration-300 relative z-10 ${
                        correctAnswer === option.word.en
                          ? "bg-green-300"
                          : selectedAnswer === option.word.en
                          ? "bg-purple-300"
                          : "bg-orange-300 hover:bg-orange-400"
                      } transform hover:scale-105`}
                    >
                      {option.word.en}
                    </label>
                  </div>
                ))}
              </form>
              <button
                onClick={handleClick}
                disabled={!selectedAnswer}
                className="mt-6 py-2 px-8 bg-purple-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50"
              >
                {currQuestionIndex + 1 < currCategory.questions.length
                  ? "Nächste Frage"
                  : "Ergebnisse anzeigen"}
              </button>
            </section>
          </div>
        )}
      </main>
    );
  }
};
export default PicQuizQuestions;
