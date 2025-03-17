import React from "react";
// import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-4 md:p-8">
      <h1 className="text-4xl font-bold text-center mt-4">Registrierung</h1>
      <p className="text-center text-2xl text-gray-700 mt-5">
        Erstelle dein Konto
      </p>

      <div className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-white p-6 rounded-lg shadow-md mt-6">
        <form className="mt-2 flex flex-col">
          <label className="mb-1 font-medium">Name:</label>
          <input
            type="text"
            className="p-2 border rounded mb-2 focus:outline-none focus:ring-2 border-sky-200 focus:ring-blue-200 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via bg-purple-500 to-blue-400"
            placeholder="Gib deinen Namen an"
          />

          <label className="mb-1 font-medium">Alter:</label>
          <input
            type="number"
            className="p-2 border rounded mb-2 focus:outline-none focus:ring-2 border-sky-200 focus:ring-blue-200 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via bg-purple-500 to-blue-400"
            placeholder="Gib dein Alter an"
          />

          <label className="mb-1 font-medium">Passwort:</label>
          <input
            type="password"
            className="p-2 border rounded mb-4 focus:outline-none focus:ring-2 border-sky-200 focus:ring-blue-200 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via bg-purple-500 to-blue-400"
            placeholder="Erstelle ein Passwort"
          />

          <button
            type="submit"
            className="bg-indigo-300 text-lg text-white py-2 rounded hover:bg-indigo-400 transition"
          >
            Registrieren
          </button>
        </form>

        {/* <Link
          to="/"
          className="mt-4 text-lg text-center block text-blue-500 hover:underline"
        >
          Zurück zur Startseite
        </Link> */}
      </div>
    </div>
  );
};

export default RegisterPage;
