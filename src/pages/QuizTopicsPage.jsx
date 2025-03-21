import React from "react";
import { useNavigate } from "react-router-dom";
import LanguageSelect from "../components/LanguageSelect";
import BackButton from "../components/BackButton";
import "../index.css";

const topics = [
  "Früchte",
  "Gemüse",
  "Tiere",
  "Farben",
  "Zahlen",
  "Körper",
  "Kleidung",
  "Wochentage",
  "Monate",
  "Jahreszeiten",
  "Transport",
  "Möbel",
];

const QuizTopicsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container pb-6 flex-1">
      <LanguageSelect />
      <h1 className="text-purple-700 text-6xl sm:text-8xl my-6 py-2 px-4 bg-purple-100/30  rounded-lg shadow-2xl w-fit">Kategorien</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl mx-auto p-4">
        {topics.map((topic) => (
          <div
            key={topic}
            onClick={() => navigate(`/quiz/${topic}`)}
            className="topic-card text-lg sm:text-xl md:text-2xl lg:text-3xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[80%] mx-auto "
          >
            {topic}
          </div>
        ))}
      </div>
      <BackButton path={"/learning"}/>
    </div>
  );
};

export default QuizTopicsPage;
