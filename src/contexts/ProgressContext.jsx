import { createContext, useState } from "react";

export const ProgressContext = createContext();

const ProgressContextProvider = ({ children }) => {
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [earnedProgress, setEarnedProgress] = useState(0);

  const valueObject = {earnedPoints, setEarnedPoints, earnedProgress, setEarnedProgress};

  return (
    <ProgressContext.Provider value={valueObject}>
      {children}
    </ProgressContext.Provider>
  );
};
export default ProgressContextProvider;

// IMPORTANT add Context to main.jsx
