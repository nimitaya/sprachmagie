import React from "react";
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const HomePage = () => {
  const { users, setUsers, setAppState } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [information, setInformation] = useState("");
  const navigate = useNavigate();

  useEffect(
    () =>
      setUsers((prevUsers) => [
        ...prevUsers,
        {
          username: "alice",
          age: "27",
          password: "123456",
        },
      ]),
    []
  );

  const handleLogin = (e) => {
    e.preventDefault();
    const isUserPresent = users.some((user) => user.username === username);
    const currentLoginUser = users.filter((user) => user.username === username);
    // currentLoginUser ist ein Array

    setInformation("");
    if (!isUserPresent) {
      setInformation("Das Konto existiert nicht. Bitte registriere dich erst.");
    } else {
      if (currentLoginUser[0].password !== password) {
        setInformation("Das Passwort ist falsch. Bitte versuche es erneut.");
      } else {
        setInformation("");
        setAppState((prevState) => ({
          ...prevState,
          currentUser: currentLoginUser[0],
          isLoggedIn: true,
        }));
        navigate("/profile");
      }
    }
  };

  return (
    <div
      className="flex flex-col items-center flex-1 bg-amber-100 px-4 py-8 md:p-8 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://64.media.tumblr.com/1ada14b60cf5b70a887b045d6e83fbd4/tumblr_ol6o615mfP1qa9gmgo2_1280.jpg')`,
      }}
    >
      {/* background */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-33 h-36 sm:w-36 sm:h-56 md:w-50 md:h-50 lg:w-47 lg:h-47">
          <img
            src="logo.png"
            alt="Logo"
            className="h-full w-full object-contain"
          />
        </div>

        <h1 className="font-barriecito text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-center text-pink-200">
          Sprachmagie
        </h1>
        <h2 className="text-center text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-3xl text-pink-400 mt-7 bg-pink-200">
          Jede Sprache ist ein Abenteuer
        </h2>

        <div className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-pink-200 p-6 rounded-lg shadow-2xl mt-11">
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-center text-purple-600 mb-5">
              Login:
            </h2>
            <form onSubmit={handleLogin} className="mt-2 flex flex-col">
              <label htmlFor="username" className="mb-1 font-medium"></label>
              <input
                type="text"
                name="username"
                id="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value.toLowerCase().trim())}
                className="p-2 border-3 rounded mb-2 focus:outline-none focus:ring-2 border-pink-400 focus:ring-pink-400 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via bg-purple-300 to-purple-400 text-2xl "
                placeholder="Gib deinen Namen an"
              />

              <label htmlFor="password" className="mb-5 font-medium"></label>
              <input
                type="password"
                name="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value.trim())}
                className="p-2  border-3 rounded mb-4 focus:outline-none focus:ring-2 border-pink-400 focus:ring-pink-400 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via bg-purple-300 to-purple-400 text-2xl  "
                placeholder="Gib dein Passwort ein"
              />

              <p className="mb-2 text-pink-400 font-bold">{information}</p>

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
