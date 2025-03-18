import { picQuizData } from "../data/picQuizData"

const PicQuizCategories = () => {  
  return (
    <main>
    <h1 className="text-center p-4 my-4 text-4xl sm:text-6xl">Kategorien</h1>

    <section className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* dynamically creates cards for available categories */}
        {picQuizData.map((data, index)=> (
            <div className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105" key={index + data.category}>
            <img
              src={`./images/categories/${data.category}.png`}
              alt={data.category}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className=" text-black text-lg font-semibold px-4 py-2 rounded-lg">
                {data.category.toUpperCase()}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
    </main>
  )
}
export default PicQuizCategories