import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import Lernseite from "./pages/Lernseite";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import Quiz from "./components/Quiz";
import QuizTopicsPage from "./pages/QuizTopicsPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/quiz/:topic" element={<Quiz />} />
          <Route index path="/quiz" element={<QuizTopicsPage/>}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/learning" element={<Lernseite />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
