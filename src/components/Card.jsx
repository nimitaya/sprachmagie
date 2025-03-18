const Card = ({ words, img, language }) => {

  return (
    <div className="p-4 shadow-lg rounded-lg w-full sm:w-80 md:w-96 lg:w-1/3">
      <img src={img} alt={words.de} style={{ width: "50px", height: "50px" }} />
      <p className="text-lg font-bold">{words.de}</p>
      <p className="text-lg font-bold">{words[language]}</p>
    </div>
  );
};

export default Card;
