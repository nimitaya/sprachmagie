const Card = ({ words, img, language }) => {

  const word = words[language];

  const allWords = Object.entries(words)
    .map(([lang, translation]) => `${lang.toUpperCase()}: ${translation}`)
    .join(" / ");

  return (
    <div>
      <img src={img} alt={word} style={{width: "50px", height: "50px"}}/>
      <div>{allWords}</div>
    </div>
  );
};

export default Card;
