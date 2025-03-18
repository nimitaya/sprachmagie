import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PicQuizQuestions from "./PicQuizQuestions";

const Layout = () => {
  return (
    <>
      <Header />
      <PicQuizQuestions/>
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
