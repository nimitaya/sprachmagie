import React from "react";
// import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-4 md:p-8">
      <div className="w-55 h-55">
        <img src="logo.png" alt="Logo" className="h-auto mt-4 mb-4" />
      </div>

      <h1 className="text-4xl font-bold text-center mt-4">Sprachmagie</h1>
      <p className="text-center text-2xl text-gray-700 mt-5">
        Jede Sprache ist ein Abenteuer
      </p>

      <div className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-white p-6 rounded-lg shadow-md mt-6">
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-center">Login:</h2>
          <form className="mt-2 flex flex-col">
            <label className="mb-1 font-medium">Name:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 focus:outline-none focus:ring-2 border-sky-200 focus:ring-blue-200 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via bg-purple-500 to-blue-400"
              placeholder="Gib deinen Namen an"
            />

            <label className="mb-1 font-medium">Passwort:</label>
            <input
              type="password"
              className="p-2 border rounded mb-4 focus:outline-none focus:ring-2 border-sky-200 focus:ring-blue-200 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via bg-purple-500 to-blue-400"
              placeholder="Gib dein Passwort ein"
            />

            <button
              type="submit"
              className="bg-indigo-300 text-lg text-white py-2 rounded hover:bg-indigo-400 transition"
            >
              Los geht’s
            </button>
          </form>

        
          {/* <Link to="/register">
            <button className="mt-4 text-lg bg-amber-400 text-white py-2 rounded hover:bg-amber-300 transition w-full">
              Neu registrieren
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
