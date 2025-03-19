import { Link } from "react-router-dom";
import LanguageSelect from "../components/LanguageSelect";

const categories = [
  { id: "fruits", name: "Obst" },
  { id: "vegetables", name: "Gemüse" },
  { id: "animals", name: "Tiere" },
  { id: "clothes", name: "Kleidung" },
  { id: "body", name: "Körperteile" },
  { id: "colors", name: "Farben" },
  { id: "weekdays", name: "Wochentage" },
  { id: "months", name: "Monate" },
  { id: "seasons", name: "Jahreszeiten" },
  { id: "numbers", name: "Zahlen" },
  { id: "transport", name: "Transportmittel" },
  { id: "furniture", name: "Möbel" },
];

const CardsCategoriesPage = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-center">
        <LanguageSelect />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <Link to={`/cards/${category.id}`}>
              <img
                src=""
                alt="category.name"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className=" text-black text-lg font-semibold px-4 py-2 rounded-lg">
                  {category.name}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsCategoriesPage;
