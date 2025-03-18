import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProgressContext } from "../contexts/ProgressContext";
import { picQuizData } from "../data/picQuizData";

const PicQuizQuestions = () => {
  const { categoryPath } = useParams();
  const { setEarnedPoints, setEarnedProgress } = useContext(ProgressContext);
  const [currCategory, setCurrCategory] = useState(null);
  const [currQuestion, setCurrQuestion] = useState(null);
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

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
        // setEarnedProgress((prevPoints) => prevPoints + score * 10);
        //======================================== IMPORTANT try to calculate Percentage above ========================================
      } else {
        setCurrQuestion(categoryData.questions[currQuestionIndex]);
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
      setCurrQuestionIndex((prevIndex) => prevIndex + 1);
      // Reset selected answer for the next question
      setSelectedAnswer(null);
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
            <section className="container mx-auto p-6">
              <div className="flex justify-center">
                <img src={currQuestion.img} alt={currCategory} />
              </div>
              <form className="max-w-sm mx-auto flex justify-between">
                {/* dynamically creates options to answer */}
                {currQuestion.options.map((option, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      name={currCategory}
                      id={option.word.en}
                      value={option.word.en}
                      onChange={handleAnswerChange}
                      checked={selectedAnswer === option.word.en}
                    />
                    <label htmlFor={option.word.en} className="text-xl">
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
