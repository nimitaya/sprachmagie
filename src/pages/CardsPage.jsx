import { useState } from "react";
import { useParams } from "react-router-dom";
import { cardsData } from "../data/data";
import Card from "../components/Card";

const CardsPage = () => {
  const { categoryId } = useParams();
console.log("categoryId:", categoryId );



  const category = cardsData[categoryId];

  if (!category) {
    return <div>Kategorie nicht gefunden</div>;
  }

  const [language, setLanguage] = useState("de");

  return (
    <div>
      {/* Knopf zum Ändern der Sprache */}
      <div>
        {["de", "en"].map((lang) => (
          <button key={lang} onClick={() => setLanguage(lang)}>
            {lang.toUpperCase()}
          </button>
        ))}
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
