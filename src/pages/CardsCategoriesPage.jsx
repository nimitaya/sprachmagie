import { Link } from "react-router-dom";
import LanguageSelect from "../components/LanguageSelect";

const categories = [
  { id: "fruits", name: "Obst", img:"./public/images/categories/obst.png"},
  { id: "vegetables", name: "Gemüse", img:"./public/images/categories/gemüse.png" },
  { id: "animals", name: "Tiere", img:"./public/images/categories/tiere.png" },
  { id: "clothes", name: "Kleidung", img:"./public/images/categories/kleidung.png" },
  { id: "body", name: "Körperteile", img:"./public/images/categories/körper.png" },
  { id: "colors", name: "Farben", img:"./public/images/categories/farben.png" },
  { id: "weekdays", name: "Wochentage", img:"./public/images/categories/wochentage.png" },
  { id: "months", name: "Monate", img:"./public/images/categories/monate.png"  },
  { id: "seasons", name: "Jahreszeiten", img:"./public/images/categories/jahreszeiten.png" },
  { id: "numbers", name: "Zahlen", img:"./public/images/categories/zahlen.png" },
  { id: "transport", name: "Transportmittel", img:"./public/images/categories/verkehr.png" },
  { id: "furniture", name: "Möbel", img:"./public/images/categories/möbel.png" },
];

const CardsCategoriesPage = () => {
  return (
    // <div className="container mx-auto p-6">
    <div
    className="flex-1 flex flex-col justify-center items-center bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://pbs.twimg.com/media/FOtUhw6XEAYt1sP.jpg:large')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",

      fontFamily: '"Indie Flower", cursive',
      fontSize: "24px",
    }}
  >
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
                src={category.img}
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
