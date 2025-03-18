import { useState } from "react";
import { useParams } from "react-router-dom";
import { cardsData } from "../data/data";
import Card from "../components/Card";

const CardsPage = () => {
  const { categoryId } = useParams();
  // console.log(categoryId);

  const category = cardsData[categoryId];

  if (!category) {
    return <div>Kategorie nicht gefunden</div>;
  }

  const [language, setLanguage] = useState("de");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % category.length);
  };

  const prevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + category.length) % category.length
    );
  };

  const currentCard = category[currentIndex];

  return (
    <div className="container mx-auto p-10">
      {/* Sprachauswahl */}
      <div>
        <label htmlFor="language" className="mr-2 text-lg font-bold">
          Sprache wählen
        </label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-3 bg-green-500 rounded"
        >
          <option value="de">Deutsch</option>
          <option value="en">Englisch</option>
          <option value="es">Spanisch</option>
          <option value="fr">Französisch</option>
          <option value="it">Ukrainisch</option>
        </select>
      </div>

      {/* Karte */}
      <div className="flex flex-col items-center p-10 shadow-lg rounded-lg  bg-purple-500 mt-6">
        <img
          src={currentCard.img}
          alt={currentCard.words.de}
          style={{ width: "100px", height: "100px" }}
        />
        <p className="text-2xl font-bold mt-5">{currentCard.words.de}</p>
        <p className="text-2xl font-bold mt-5">{currentCard.words[language]}</p>
        </div>

        {/* Knöpfe */}
        <div className="flex justify-center gap-4 w-full mt-6">
          <button onClick={prevCard} className="p-4 bg-green-500 rounded">
            Zurück
          </button>
          <button onClick={nextCard} className="p-4 bg-green-500 rounded">
            Weiter
          </button>
        </div>
      
    </div>
  );
};

export default CardsPage;
