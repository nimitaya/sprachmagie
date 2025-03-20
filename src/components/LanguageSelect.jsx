import { useState, useContext, useEffect, useRef } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const LanguageSelect = () => {
  const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); 

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
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); 
        // Close the dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <p className="uppercase text-2xl text-center font-semibold text-purple-700 bg-pink-200 py-1 px-2 rounded-full">
        Sprache
      </p>
      <div ref={dropdownRef} className="dropdown inline-block relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-purple-700 text-pink-200 text-2xl font-semibold min-w-44 py-2 px-4 rounded inline-flex justify-between items-center cursor-pointer hover:bg-purple-600 transition"
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
          className={`dropdown-menu absolute min-w-50 ${
            isOpen ? "" : "hidden"
          } text-purple-700 text-2xl font-semibold pt-1 z-50`}
        >
          <li onClick={() => handleLanguageSelect("en")} className="">
            <a
              className="rounded-t bg-pink-200 hover:bg-purple-200 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Englisch 🇬🇧
            </a>
          </li>
          <li onClick={() => handleLanguageSelect("fr")} className="">
            <a
              className="bg-pink-200 hover:bg-purple-200 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Französisch 🇫🇷
            </a>
          </li>
          <li onClick={() => handleLanguageSelect("es")} className="">
            <a
              className="rounded-b bg-pink-200 hover:bg-purple-200 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Spanisch 🇪🇸
            </a>
          </li>
          <li onClick={() => handleLanguageSelect("uk")} className="">
            <a
              className="rounded-b bg-pink-200 hover:bg-purple-200 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Ukrainisch 🇺🇦
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default LanguageSelect;
