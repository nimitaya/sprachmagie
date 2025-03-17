// import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3 flex justify-between items-center sm:p-5">
      <img src="./vite.svg" alt="Logo Placeholder" />
      <h1 className="text-xl">Sprachmagie</h1>
      <nav className="flex flex-col sm:flex-row">
        <ul className="flex flex-col sm:flex-row">
            <li className="m-2 p-2 border-2 rounded-lg sm:m-4 sm:p-4">Punktestand</li>
            <li className="m-2 p-2 border-2 rounded-lg sm:m-4 sm:p-4">Lernseite</li>
        </ul>
        {/* <NavLink to="/lernseite">Lernseite</NavLink>
        <NavLink to="/punkte">Punktestand</NavLink> */}
      </nav>
    </header>
  );
};
export default Header;
