import { Link } from "react-router-dom";

const Lernseite = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Karten */}
        <div className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <Link to={"/cards-categories"}>
            <img
              src=""
              alt="Karten"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className=" text-black text-lg font-semibold px-4 py-2 rounded-lg">
                Karten
              </p>
            </div>
          </Link>
        </div>

        {/*Bilder Quiz */}
        <div className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <img
            src=""
            alt="Bilder Quiz"
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className=" text-black text-lg font-semibold px-4 py-2 rounded-lg">
              Bilder Quiz
            </p>
          </div>
        </div>

        {/*Wort Quiz */}
        <div className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <img
            src=""
            alt="Wort Quiz"
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-black text-lg font-semibold px-4 py-2 rounded-lg">
              Wort Quiz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lernseite;
