import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";
import Lernseite from "./Lernseite";
import Profile from "./Profile";
import Error from "./Error";

const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/learning" element={<Lernseite />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routes;
