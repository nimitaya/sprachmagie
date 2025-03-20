import { Link } from "react-router-dom";
import LanguageSelect from "../components/LanguageSelect";

const Lernseite = () => {
  return (
    <div className=" relative  flex-1 flex-col justify-center items-center">
      <div
        className=" absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://64.media.tumblr.com/35b0676ce21fc9a9471ab45b1e241444/tumblr_ol6o615mfP1qa9gmgo5_1280.jpg')`,
          filter: "blur(3px)",
          zIndex: -1,
        }}
      ></div>

      <div className="flex justify-center w-full mt-40">
        <LanguageSelect />
      </div>

      <div className="flex flex-wrap  justify-center items-center  gap-4 lg:mt-4 sm:mt-10 ">
        {/* Karten */}
        <div className="w-48 sm:w-56 md:w-64 lg:w-96 relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-106">
          <Link to={"/cards-categories"}>
            <img
              src="https://www.themarysue.com/wp-content/uploads/2011/04/myneighbourtotoro12.jpeg?w=448"
              alt="Karten"
              className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50">
              <p className="text-purple-700 bg-amber-300 text-xl font-semibold px-4 py-2 rounded-lg">
                Karten
              </p>
            </div>
          </Link>
        </div>

        {/* Bilder Quiz */}
        <div className="w-49 sm:w-56 md:w-64 lg:w-96 relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 ">
          <Link to={"/picquiz"}>
            <img
              src="https://i.pinimg.com/736x/46/33/c1/4633c1b365b4421a14d7f57fc3ca9b7f.jpg"
              alt="Bilder Quiz"
              className="w-full h-36 sm:h-40 md:h-48 lg:h-56  object-cover object-top"
            />
            <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50 ">
              <p className="text-purple-700 bg-amber-300 text-xl  font-semibold px-4 py-2 rounded-lg">
                Bilder Quiz
              </p>
            </div>
          </Link>
        </div>

        {/* Wort Quiz */}
        <div className="w-48 sm:w-56 md:w-64 lg:w-96 relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <Link to={"/quiz"}>
            <img
              src="https://www.tasteofcinema.com/wp-content/uploads/2014/06/Howls-Moving-Castle-2004.jpg"
              alt="Wort Quiz"
              className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
              <p className="text-purple-700 bg-amber-300 text-xl  font-semibold px-4 py-2 rounded-lg">
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
