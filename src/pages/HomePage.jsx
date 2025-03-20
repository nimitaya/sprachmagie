import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      className="flex flex-col items-center min-h-screen bg-amber-100 px-4 py-8 md:p-8 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://64.media.tumblr.com/1ada14b60cf5b70a887b045d6e83fbd4/tumblr_ol6o615mfP1qa9gmgo2_1280.jpg')`,
      }}
    >
      {/* background */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-56 h-56 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
          <img
            src="logo.png"
            alt="Logo"
            className="h-full w-full object-contain"
          />
        </div>

        <h1 className="font-barriecito text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-pink-200">
          Sprachmagie
        </h1>
    {/*     <h2 className="text-center text-xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-2xl text-emerald-200 mt-7">
          Jede Sprache ist ein Abenteuer
        </h2> */}

        <div className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-pink-200 p-6 rounded-lg shadow-xl mt-11">
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-center text-purple-600 mb-5">Login:</h2>
            <form className="mt-2 flex flex-col">
              <label className="mb-1 font-medium"></label>
              <input
                type="text"
                className="p-2 border-3 rounded mb-2 focus:outline-none focus:ring-2 border-pink-400 focus:ring-amber-300 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via bg-purple-300 to-purple-400 text-2xl "
                placeholder="Gib deinen Namen an"
              />

              <label className="mb-5 font-medium"></label>
              <input
                type="password"
                className="p-2  border-3 rounded mb-4 focus:outline-none focus:ring-2 border-pink-400 focus:ring-amber-300 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via bg-purple-300 to-purple-400 text-2xl  "
                placeholder="Gib dein Passwort ein"
              />

              <button
                type="submit"
                className="bg-purple-700 text-xl text-white py-3 rounded hover:bg-purple-600 transition"
              >
                Los geht’s
              </button>
            </form>

            <Link to="/register">
              <button className="mt-4 text-xl bg-amber-400 text-white py-3 rounded hover:bg-amber-300 transition w-full">
                Neu registrieren
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
