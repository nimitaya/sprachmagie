import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3 flex justify-around items-center bg-amber-500 sm:p-5">
      <Link to="/" className="md:min-w-3xs">
        <img src="./logo.png" alt="Logo Placeholder" className="max-w-30" />
      </Link>
      <h3 className="text-center text-xl font-extrabold sm:text-3xl sm:min-w-3xs">Sprachmagie</h3>
      <nav className="flex flex-col sm:flex-row sm:min-w-3xs">
        {/* TODO nicht nur Schrift, sondern auch Bilder einfügen??*/}
        <NavLink
          to="/learning"
          className="m-2 p-2 text-center border-2 rounded-lg sm:min-w-24 sm:m-4 sm:p-4"
        >
          Lernen
        </NavLink>
        <NavLink
          to="/profile"
          className="m-2 p-2 text-center border-2 rounded-lg sm:min-w-24 sm:m-4 sm:p-4"
        >
          Profil
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
