import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-amber-100 p-4 md:p-8">
      <div className="w-56 h-56 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
        <img
          src="logo.png"
          alt="Logo"
          className="h-full w-full object-contain"
        />
      </div>

      <h1 className=" font-barriecito text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center  text-indigo-400">
        Sprachmagie
      </h1>
      <h2 className="text-center text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl text-emerald-600 mt-7">
        Jede Sprache ist ein Abenteuer
      </h2>

      <div className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-indigo-400 p-6 rounded-lg shadow-xl mt-11">
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-center mb-5">Login:</h2>
          <form className="mt-2 flex flex-col">
            <label className="mb-1 font-medium"></label>
            <input
              type="text"
              className="p-2 border rounded mb-2 focus:outline-none focus:ring-2  border-amber-300 focus:ring-amber-300 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via bg-amber-400 to-yellow-200 text-xl"
              placeholder="Gib deinen Namen an"
            />

            <label className="mb-5 font-medium"></label>
            <input
              type="password"
              className="p-2 border rounded mb-4 focus:outline-none focus:ring-2 border-amber-300 focus:ring-amber-300 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via bg-amber-400 to-yellow-200 text-xl "
              placeholder="Gib dein Passwort ein"
            />

            <button
              type="submit"
              className="bg-emerald-300 text-xl text-white py-3 rounded hover:bg-emerald-400 transition"
            >
              Los geht’s
            </button>
          </form>

          <Link to="/register">
            <button className="mt-4 text-lg bg-amber-400 text-white py-2 rounded hover:bg-amber-300 transition w-full">
              Neu registrieren
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
