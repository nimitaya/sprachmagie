import { useState } from "react";
import { useParams } from "react-router-dom";
import { cardsData } from "../data/data";
import BilderQuiz from "../components/BilderQuiz";

const BilderQuizPage = () => {
  const { categoryId } = useParams();
  // console.log(categoryId);

  const category = cardsData[categoryId];

  const [sourceLanguage, setSourceLanguage] = useState("de");
  const [targetLanguage, setTargetLanguage] = useState("en");

  if (!category) {
    return <div>Kategorie nicht gefunden</div>;
  }

  return (
    <div>
      {/* Quellsprache auswählen */}
      <div>
        <label>Quellsprache:</label>
        <select
          onChange={(event) => setSourceLanguage(event.target.value)}
          value={sourceLanguage}
        >
          <option value="de">Deutsch</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* Zielsprache auswählen */}
      <div>
        <label>Zielsprache:</label>
        <select
          onChange={(event) => setTargetLanguage(event.target.value)}
          value={targetLanguage}
        >
          <option value="de">Deutsch</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* Karten */}

      {category.map((card) => (
        <BilderQuiz
          key={card.id}
          words={card.words}
          img={card.img}
          sourceLanguage={sourceLanguage}
          targetLanguage={targetLanguage}
        />
      ))}
    </div>
  );
};

export default BilderQuizPage;
