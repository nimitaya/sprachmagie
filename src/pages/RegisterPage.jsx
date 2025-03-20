import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const RegisterPage = () => {
  const { userObj, setUserObj, registerUser, appState, setAppState } =
    useContext(UserContext);
  const navigate = useNavigate();

  const handleNavigation = () => {
    setAppState((prevState) => ({
      ...prevState,
      success: "",
    }));
    if (appState.isLoggedIn) {
      navigate("/profile");
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen bg-amber-100 p-4 md:p-8 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://64.media.tumblr.com/1ada14b60cf5b70a887b045d6e83fbd4/tumblr_ol6o615mfP1qa9gmgo2_1280.jpg')`,
      }}
    >
      
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="font-barriecito text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-pink-200">
          Registrierung
        </h1>
        <p className="text-center text-2xl text-emerald-200 mt-4">
          Erstelle dein Konto
        </p>

        <div className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-pink-200 p-6 rounded-lg shadow-xl mt-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              registerUser();
            }}
            className="mt-2 flex flex-col"
          >
            <label
              htmlFor="username"
              className="mb-1 font-medium text-purple-700"
            >
              
            </label>
            <input
              type="text"
              name="username"
              id="username"
              required
              value={userObj.username}
              onChange={(e) =>
                setUserObj({ ...userObj, username: e.target.value })
              }
              className="p-2 border-3 rounded mb-2 focus:outline-none focus:ring-2 border-amber-300 focus:ring-amber-300 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via bg-purple-300 to-purple-400 text-2xl"
              placeholder="Gib deinen Namen an"
            />
            {/* Warnung, falls der Name schon existiert! */}

            {appState.warning && (
              <p className="text-red-500 text-sm mt-2">{appState.warning}</p>
            )}

            <label htmlFor="age" className="mb-1 font-medium text-purple-700">
              
            </label>
            <input
              type="number"
              name="age"
              id="age"
              value={userObj.age}
              onChange={(e) => setUserObj({ ...userObj, age: e.target.value })}
              className="p-2 border-3 rounded mb-2 focus:outline-none focus:ring-2 border-amber-300 focus:ring-amber-300 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via bg-purple-300 to-purple-400 text-2xl"
              placeholder="Gib dein Alter an"
            />

            <label
              htmlFor="password"
              className="mb-1 font-medium text-purple-700"
            >
              
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={userObj.password}
              onChange={(e) =>
                setUserObj({ ...userObj, password: e.target.value })
              }
              className="p-2 border-3 rounded mb-4 focus:outline-none focus:ring-2 border-amber-300 focus:ring-amber-300 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via bg-purple-300 to-purple-400 text-2xl"
              placeholder="Erstelle ein Passwort"
            />

            <button
              type="submit"
              className="bg-purple-700 text-xl text-white py-3 rounded hover:bg-purple-600 transition"
            >
              Registrieren
            </button>
            {/* Info, wenn erfolgreich registriert */}
            {appState.success && (
              <p className="text-green-500 text-sm mt-2">{appState.success}</p>
            )}
          </form>

          <button
            onClick={handleNavigation}
            className="mt-4 text-xl bg-amber-400 text-white py-3 rounded hover:bg-amber-300 transition w-full"
          >
            Zurück zur Startseite
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
