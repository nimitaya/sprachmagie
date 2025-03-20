import React from "react";
import { useNavigate } from "react-router-dom";
import LanguageSelect from "../components/LanguageSelect";
import "../index.css";

const topics = [
  "fruits",
  "vegetables",
  "animals",
  "colors",
  "numbers",
  "body",
  "clothes",
  "weekdays",
  "months",
  "seasons",
  "transport",
  "furniture",
];

const QuizTopicsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container flex-1">
      <div className="flex justify-center ">
        <LanguageSelect />
      </div>
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
    </div>
  );
};

export default QuizTopicsPage;
