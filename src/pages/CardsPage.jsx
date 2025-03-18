import { useState } from "react";
import { useParams } from "react-router-dom";
import { cardsData } from "../data/data";
import Card from "../components/Card";

const CardsPage = () => {
  const { categoryId } = useParams();
  const category = cardsData[categoryId];
  const [language, setLanguage] = useState("de");

  if (!category) {
    return <div>Kategorie nicht gefunden</div>;
  }

  return (
    <div>
      {/* Knopf zum Ändern der Sprache */}
      <div>
        <button onClick={() => setLanguage("de")}></button>
        <button onClick={() => setLanguage("en")}></button>
      </div>

      {/* Karten */}
      <div>
        {category.map((card) => (
          <Card
            key={card.id}
            words={card.words}
            img={card.img}
            language={language}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
