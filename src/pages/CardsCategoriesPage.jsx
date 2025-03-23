import { Link } from "react-router-dom";
import LanguageSelect from "../components/LanguageSelect";
import BackButton from "../components/BackButton";

const categories = [
  { id: "fruits", name: "Obst", img: "/images/categories/obst.png" },
  { id: "vegetables", name: "Gemüse", img: "/images/categories/gemüse.png" },
  { id: "animals", name: "Tiere", img: "/images/categories/tiere.png" },
  { id: "colors", name: "Farben", img: "/images/categories/farben.png" },
  { id: "numbers", name: "Zahlen", img: "/images/categories/zahlen.png" },
  { id: "body", name: "Körper", img: "/images/categories/körper.png" },
  { id: "clothes", name: "Kleidung", img: "/images/categories/kleidung.png" },

  {
    id: "weekdays",
    name: "Wochentage",
    img: "/images/categories/wochentage.png",
  },
  { id: "months", name: "Monate", img: "/images/categories/monate.png" },
  {
    id: "seasons",
    name: "Jahreszeiten",
    img: "/images/categories/jahreszeiten.png",
  },

  {
    id: "transport",
    name: "Verkehr",
    img: "/images/categories/verkehr.png",
  },
  { id: "furniture", name: "Möbel", img: "/images/categories/möbel.png" },
];

const CardsCategoriesPage = () => {
  return (
    // <div className="container mx-auto p-6">
    <div
      className="flex-1 flex flex-col justify-center items-center bg-cover bg-center py-4"
      style={{
        backgroundImage:
          "url('https://pbs.twimg.com/media/FOtUhw6XEAYt1sP.jpg:large')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        fontFamily: '"Indie Flower", cursive',
        fontSize: "25px",
      }}
    >
      <div className="flex justify-center">
        <LanguageSelect />
      </div>
      <h1 className="text-purple-700 text-6xl sm:text-8xl my-6 p-2 bg-white/30 rounded-lg shadow-2xl w-fit">
        Kategorien
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative cursor-pointer rounded-lg overflow-hidden shadow-2xl transition-transform transform hover:scale-105 border-2 border-amber-300"
          >
            <Link to={`/cards/${category.id}`}>
              <img
                src={category.img}
                alt="category.name"
                className="w-full h-48 sm:h-40 md:h-40 lg:h-45 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className=" text-purple-700 text-4xl  px-4 py-2 rounded-lg bg-amber-300 shadow-2xl w-fit">
                  {category.name.toUpperCase()}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <BackButton path={"/learning"} />
    </div>
  );
};

export default CardsCategoriesPage;
