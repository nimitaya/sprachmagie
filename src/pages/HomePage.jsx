import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="w-55 h-55">
        <img src="logo.png" alt="Logo" className="h-auto mt-3" />
      </div>

      <h1 className="text-xl font-bold text-center">Sprachmagie</h1>
      <p className="text-center text-gray-600 mt-2">
        Sprache ist Magie - lass uns zaubern{" "}
      </p>
      <div className="w-full max-w-xs bg-white p-6 rounded-lg shadow-md mt-6">
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-center">Login:</h2>
          <form className="mt-2 flex flex-col">
            <label className="mb-1 font-medium">Name:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Gib deinen Namen an"
            />

            <label className="mb-1 font-medium">Passwort:</label>
            <input
              type="password"
              className="p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Gib dein Passwort ein"
            />

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Los geht’s
            </button>
          </form>

          <button className="mt-4 bg-red-400 text-white py-2 rounded hover:bg-red-500 transition w-full">
            Neu registrieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
