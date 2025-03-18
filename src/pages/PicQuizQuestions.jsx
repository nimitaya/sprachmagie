import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { picQuizData } from "../data/picQuizData";

const PicQuizQuestions = () => {
  const { categoryPath } = useParams();
  const [currCategory, setCurrCategory] = useState(null);
  const [currQuestion, setCurrQuestion] = useState(null);
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);

  useEffect(() => {
    const categoryData = picQuizData.find(
      (data) => data.category === categoryPath
    );
    setCurrCategory(categoryData);
    // console.log("Curr Category", categoryData);
    
    // console.log("curr Question", categoryData.questions[0]);
    
    // console.log("Curr Ques Index", categoryData.questions[0].id);

    // if (currQuestionIndex > 101) {
    //     setCurrQuestion(categoryData.questions[currQuestionIndex -100]);
    //     console.log("curr Question neu", categoryData.questions[currQuestionIndex -100]);

    // } else {
    //     setCurrQuestion(categoryData.questions[0]);
    //     setCurrQuestionIndex(categoryData.questions[0].id);
    //     console.log("curr Question", categoryData.questions[0]);
    // }

    if (categoryData) {
        if (currQuestionIndex >= categoryData.questions.length) {
          setCurrQuestion(categoryData.questions[0]);
          setCurrQuestionIndex(0);
        } else {
          setCurrQuestion(categoryData.questions[currQuestionIndex]);
        }
      }

  }, [categoryPath, currQuestionIndex]);

  const handleClick = ()=> {
    setCurrQuestionIndex((prevIndex) => prevIndex + 1);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  if (!currCategory) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h2 className="text-center p-4 my-4 text-4xl sm:text-6xl">
        Wähle die korrekte Übersetzung
      </h2>
      <section className="container mx-auto p-6">
        <div className="flex justify-center">
          <img src={currQuestion.img} alt={currCategory} />
        </div>
        <form className="max-w-sm mx-auto flex justify-between" onSubmit={handleSubmit}>
            {/* dynamically creates options to answer */}
          {currQuestion.options.map((option, index) => (
            <div key={index} onClick={handleClick}>
              <input type="radio" name={currCategory} id={option.word.en} />
              <label htmlFor={option.word.en} className="text-xl">
                {option.word.en}
              </label>
            </div>
          ))}
        </form>
      </section>
    </main>
  );
};
export default PicQuizQuestions;
