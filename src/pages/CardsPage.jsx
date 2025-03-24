import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
import { cardsData } from "../data/data";
import Card from "../components/Card";
import BackButton from "../components/BackButton";


const CardsPage = () => {
  const { categoryId } = useParams();
  // console.log(categoryId);

  const { currentLanguage } = useContext(LanguageContext);
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
          language={currentLanguage.short}
        />
      </div>

      {/* Knöpfe */}
      <div className="flex justify-center gap-4 w-full mt-6">
        <button onClick={prevCard} className="mt-6 py-4 px-8 bg-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50">
          Zurück
        </button>
        <button onClick={nextCard} className="mt-6 py-4 px-8 bg-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50">
          Weiter
        </button>
      </div>
     
      <div>
      <BackButton path={"/learning"}/>
    </div>
    </div>
  );
};

export default CardsPage;
