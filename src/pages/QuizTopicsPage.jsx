import React from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>Wähle eine Kategorie</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {topics.map((topic) => (
          <div
            key={topic}
            onClick={() => navigate(`/quiz/${topic}`)}
            style={{
              padding: "30px",
              border: "1px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              background: "lightyellow",
            }}
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizTopicsPage;
