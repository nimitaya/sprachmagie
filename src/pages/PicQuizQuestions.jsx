import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProgressContext } from "../contexts/ProgressContext";
import { LanguageContext } from "../contexts/LanguageContext";
import { picQuizData } from "../data/picQuizData";
import BackButton from "../components/BackButton";

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
  const language = currentLanguage.short;

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
        (option) => option.word[language] === selectedAnswer && option.correct
      );
      // check, if selected answer is correct
      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }

      // Highlight the correct answer
      const correctOption = currQuestion.options.find(
        (option) => option.correct
      );
      setCorrectAnswer(correctOption.word[language]);

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
      <main
        className="flex-1 flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://pbs.twimg.com/media/FOtUhw6XEAYt1sP.jpg:large')",
          backgroundBlendMode: "overlay",
          fontFamily: '"Indie Flower", cursive',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {showResult ? (
          <div className="text-center text-3xl p-10 bg-white/40 rounded-lg shadow-2xl w-fit">
            <h2>Quiz beendet!</h2>
            <p className="mt-4 text-xl">
              Dein Ergebnis: {score} von {currQuestionIndex}
            </p>
            <div className="mt-4 animate-bounce text-4xl text-yellow-400">
              🌞
            </div>
            <BackButton path="/picquiz" />
          </div>
        ) : (
          <div className="bg-white/40 sm:rounded-lg shadow-2xl w-fit">
            <h2 className="text-center p-4 text-4xl text-purple-800 sm:text-6xl">
              Wähle die korrekte Übersetzung
            </h2>
            <section className="container mx-auto p-6 sm:py-10 flex flex-col justify-center items-center w-fit gap-5">
              <div className="flex justify-center max-w-80 rounded-2xl overflow-hidden mb-6 sm:max-w-xl">
                <img
                  src={currQuestion.img}
                  alt={currCategory}
                  style={{ width: "350px", height: "250px" }}
                />
              </div>
              <form className="mx-auto flex justify-between flex-col gap-2 sm:flex-row">
                {/* dynamically creates options to answer */}
                {currQuestion.options.map((option, index) => (
                  <div key={index} className="flex flex-col sm:flex-row">
                    <input
                      type="radio"
                      name={currCategory}
                      id={option.word[language]}
                      value={option.word[language]}
                      onChange={handleAnswerChange}
                      checked={selectedAnswer === option.word[language]}
                      className="appearance-none"
                    />
                    <label
                      htmlFor={option.word[language]}
                      className={`cursor-pointer min-w-36 py-4 px-6 rounded-xl text-xl text-center transition-all duration-300 relative z-10 ${
                        correctAnswer === option.word[language]
                          ? "bg-green-300"
                          : selectedAnswer === option.word[language]
                          ? "bg-purple-400"
                          : "bg-orange-400 hover:bg-orange-300"
                      } transform hover:scale-105`}
                    >
                      {option.word[language]}
                    </label>
                  </div>
                ))}
              </form>
              <button
                onClick={handleClick}
                disabled={!selectedAnswer}
                className="mt-6 py-4 px-8 bg-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50"
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
