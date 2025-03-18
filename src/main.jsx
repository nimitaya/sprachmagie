import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProfilePicContextProvider from "./contexts/ProfilePicContext.jsx";
import ProgressContextProvider from "./contexts/ProgressContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProgressContextProvider>
      <ProfilePicContextProvider>
        <App />
      </ProfilePicContextProvider>
    </ProgressContextProvider>
  </StrictMode>
);
