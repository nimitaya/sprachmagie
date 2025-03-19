import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-1 flex justify-between items-center bg-yellow-400 sm:p-5">
      {/* Logo + Sprachmagie */}
      <div className="flex items-center gap-x-2">
        <Link to="/" className="flex items-center">
          <img
            src="./logo.png"
            alt="Logo Placeholder"
            className="w-16 sm:w-20 md:w-24 lg:w-22"
          />
        </Link>
        <h3 className="text-xl font-extrabold sm:text-xl">Sprachmagie</h3>
      </div>

      {/* (Lernen + Profil) */}
      <nav className="flex flex-col sm:flex-row sm:min-w-3xs">
        {/* TODO nicht nur Schrift, sondern auch Bilder einfügen??*/}
        <NavLink
          to="/learning"
          className=" bg-purple-700 m-2 p-2 text-center border-1 border-purple-500  hover:bg-purple-600 transition rounded-lg lg:min-w-35 lg:w-40 lg:p-5 sm:min-w-24 sm:m-4 sm:p-4"
        >
          Lernen
        </NavLink>
        <NavLink
          to="/profile"
          className="bg-purple-700 m-2 p-2 text-center border-1 border-purple-500   hover:bg-purple-600 transition rounded-lg  lg:min-w-35 lg:w-40 lg:p-5  sm:min-w-24 sm:m-4 sm:p-4"
        >
          Profil
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
