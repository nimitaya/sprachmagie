import { FaVolumeUp } from "react-icons/fa";

const Card = ({ words, img, language }) => {
  // Funktion, die den Text vorliest
  const speakWord = (word, language) => {
    const msg = new SpeechSynthesisUtterance(word);
    msg.lang = language; // Sprache einstellen
    msg.onend = () => {
      window.speechSynthesis.cancel(); // Sprachausgabe beenden
    };
    window.speechSynthesis.speak(msg); // Text vorlesen
  };

  return (
    
    <div className="p-10 w-full sm:w-80 md:w-96 lg:w-1/3 flex flex-col items-center  bg-white/40 rounded-lg shadow-2xl relative z-10  mx-6">
      <img src={img} alt={words.de} style={{ width: "150px", height: "150px" }} />
      <p className="text-4xl font-bold mt-5">{words.de}</p>
      <p className="text-4xl font-bold mt-3">{words[language]}</p>

      {/* Button, der den Text vorliest */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => speakWord(words[language], language)}
          className="bg-orange-400 hover:bg-orange-300 p-3  text-purple-800 rounded"
        >
         <FaVolumeUp className="h-6 w-6" />
        </button>
      </div>
    </div>
   
  );
};

export default Card;
