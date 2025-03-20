import { Link } from "react-router-dom";
import LanguageSelect from "../components/LanguageSelect";

const Lernseite = () => {
  return (
    <div className=" relative min-h-screen flex flex-col justify-center items-center">
      <div
        className=" absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://64.media.tumblr.com/35b0676ce21fc9a9471ab45b1e241444/tumblr_ol6o615mfP1qa9gmgo5_1280.jpg')`,
          filter: "blur(3px)",
          zIndex: -1,
        }}
      ></div>

      <div className="flex justify-center w-full">
        <LanguageSelect />
      </div>

      <div className="flex flex-wrap  justify-center items-center  gap-4 mt-6 ">
        {/* Karten */}
        <div className="w-48 sm:w-56 md:w-64 lg:w-72 relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <Link to={"/cards-categories"}>
            <img
              src=""
              alt="Karten"
              className="w-full h-32 sm:h-40 md:h-48 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
              <p className="text-black text-lg font-semibold px-4 py-2 rounded-lg">
                Karten
              </p>
            </div>
          </Link>
        </div>

        {/* Bilder Quiz */}
        <div className="w-48 sm:w-56 md:w-64 lg:w-72 relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <Link to={"/picquiz"}>
            <img
              src=""
              alt="Bilder Quiz"
              className="w-full h-32 sm:h-40 md:h-48 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
              <p className="text-black text-lg font-semibold px-4 py-2 rounded-lg">
                Bilder Quiz
              </p>
            </div>
          </Link>
        </div>

        {/* Wort Quiz */}
        <div className="w-48 sm:w-56 md:w-64 lg:w-72 relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <Link to={"/quiz"}>
            <img
              src=""
              alt="Wort Quiz"
              className="w-full h-32 sm:h-40 md:h-48 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
              <p className="text-black text-lg font-semibold px-4 py-2 rounded-lg">
                Wort Quiz
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lernseite;
