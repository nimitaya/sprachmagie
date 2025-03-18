import React from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="page-container">
      <div className="topics-container">
        {topics.map((topic) => (
          <div
            key={topic}
            onClick={() => navigate(`/quiz/${topic}`)}
            className="topic-card"
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizTopicsPage;
