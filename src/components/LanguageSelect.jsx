import { useState, useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const LanguageSelect = () => {
  const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageSelect = (language) => {
    switch (language) {
      case "en":
        setCurrentLanguage({
          short: "en",
          full: "Englisch",
        });
        break;
      case "uk":
        setCurrentLanguage({
          short: "uk",
          full: "Ukrainisch",
        });
        break;
      case "fr":
        setCurrentLanguage({
          short: "fr",
          full: "Französisch",
        });
        break;
      case "es":
        setCurrentLanguage({
          short: "es",
          full: "Spanisch",
        });
        break;

      default:
        break;
    }
  };

  return (
    <div className="w-full p-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <p className="uppercase text-xl font-semibold text-indigo-400 bg-amber-100 py-1 px-2 rounded-full">
        Sprache
      </p>
      <div className="dropdown inline-block relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-purple-700 text-gray-100 font-semibold min-w-36 py-2 px-4 rounded inline-flex items-center cursor-pointer hover:bg-purple-600 transition"
        >
          <span className="mr-1">{currentLanguage.full}</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul
          className={`dropdown-menu absolute min-w-36 ${
            isOpen ? "" : "hidden"
          } text-indigo-400 font-semibold pt-1`}
        >
          <li onClick={() => handleLanguageSelect("en")} className="">
            <a
              className="rounded-t bg-amber-100 hover:bg-purple-200 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Englisch
            </a>
          </li>
          <li onClick={() => handleLanguageSelect("fr")} className="">
            <a
              className="bg-amber-100 hover:bg-purple-200 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Französisch
            </a>
          </li>
          <li onClick={() => handleLanguageSelect("es")} className="">
            <a
              className="rounded-b bg-amber-100 hover:bg-purple-200 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Spanisch
            </a>
          </li>
          <li onClick={() => handleLanguageSelect("uk")} className="">
            <a
              className="rounded-b bg-amber-100 hover:bg-purple-200 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Ukrainisch
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default LanguageSelect;
