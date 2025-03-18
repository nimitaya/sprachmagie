import { useState } from "react";

const BilderQuiz = ({ words, img, soursLsourceLanguage, targetLanguage }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className={`relative w-full h-full transform transition-transform duration-500 ${
        flipped ? "rotate-y-180" : ""
      }`}
    >
      {/* Vorderseite */}
      <div
        className="absolute w-full h-full flex flex-col items-center justify-center rounded-lg"
        style={{ backfaceVisibility: "hidden" }}
      >
        <img src={img} alt={wordDe} className="w-32 h-32" />
        <p className="text-xl">{words[soursLsourceLanguage]}</p>
      </div>

      {/* Rückseite */}
      <div
        className="absolute w-full h-full flex flex-col items-center justify-center rounded-lg"
        style={{ backfaceVisibility: "hidden" }}
      >
        <p className="text-xl">{words[targetLanguage]}</p>
      </div>
    </div>
  );
};

export default BilderQuiz;
