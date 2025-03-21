import { useNavigate } from "react-router-dom";
import LanguageSelect from "../components/LanguageSelect";
import BackButton from "../components/BackButton";
import { picQuizData } from "../data/picQuizData";

const PicQuizCategories = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/picquiz/${category}`);
  };

  return (
    <main
      className="flex-1 flex flex-col items-center pb-6"
      style={{
        backgroundImage:
          "url('https://pbs.twimg.com/media/FOtUhw6XEAYt1sP.jpg:large')",
        backgroundBlendMode: "overlay",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        fontFamily: '"Indie Flower", cursive',
      }}
    >
      <section className="container mx-auto p-6 flex flex-col items-center">
        <div className="flex justify-center">
          <LanguageSelect />
        </div>
        <h1 className="text-purple-700 text-6xl sm:text-8xl my-6 p-2 bg-white/30 rounded-lg shadow-2xl w-fit">
          Kategorien
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* dynamically creates cards for available categories */}
          {picQuizData.map((data, index) => (
            <div
              className="relative cursor-pointer rounded-lg overflow-hidden shadow-2xl transition-transform transform hover:scale-105 border-2 border-amber-300 "
              key={index + data.category}
              onClick={() => handleClick(data.category)}
            >
              <img
                src={`./images/categories/${data.category}.png`}
                alt={data.category}
                className="w-full h-48 sm:h-40 md:h-40 lg:h-45 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className=" text-purple-700 text-4xl font-semibold px-4 py-2 rounded-lg bg-amber-300 shadow-2xl w-fit">
                  {data.category.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <BackButton path={"/learning"} />
    </main>
  );
};
export default PicQuizCategories;
