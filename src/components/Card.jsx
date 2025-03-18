const Card = ({ words, img, language }) => {
  return (
    <div>
      <img
        src={img}
        alt={words[language]}
        style={{ width: "50px", height: "50px" }}
      />
      <p>{words[language]}</p>
    </div>
  );
};

export default Card;
