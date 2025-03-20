import { useState } from "react";
import { useParams } from "react-router-dom";
import { cardsData } from "../data/data";
import Card from "../components/Card";

const CardsPage = () => {
  const { categoryId } = useParams();
  const category = cardsData[categoryId];

  if (!category) {
    return <div>Kategorie nicht gefunden</div>;
  }

  const [language, setLanguage] = useState(
    localStorage.getItem("selectLanguage") || "en"
  );

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
    // <div className="container mx-auto p-10">
    <div
      className="flex-1 flex flex-col justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://pbs.twimg.com/media/FOtUhw6XEAYt1sP.jpg:large')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",

        fontFamily: '"Indie Flower", cursive',
        fontSize: "24px",
      }}
    > 
      {/* Karte */}

      {/* <img
          src={currentCard.img}
          alt={currentCard.words.de}
          style={{ width: "100px", height: "100px" }}
        />
        <p className="text-2xl font-bold mt-5">{currentCard.words.de}</p>
        <p className="text-2xl font-bold mt-5">{currentCard.words[language]}</p> */}
      <div className="flex justify-center w-full">
        <Card
          words={currentCard.words}
          img={currentCard.img}
          language={language}
        />
      </div>

      {/* Knöpfe */}
      <div className="flex justify-center gap-4 w-full mt-6">
        <button onClick={prevCard} className="p-4 bg-purple-700 rounded">
          Zurück
        </button>
        <button onClick={nextCard} className="p-4 bg-purple-700 rounded">
          Weiter
        </button>
      </div>
    </div>
  );
};

export default CardsPage;
