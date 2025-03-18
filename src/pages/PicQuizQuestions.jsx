import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { picQuizData } from "../data/picQuizData";

const PicQuizQuestions = () => {
    const { categoryPath } = useParams();
    const [currCategory, setCurrCategory] = useState({})

    useEffect(()=> {
        setCurrCategory(
            picQuizData.filter((data)=>{ data.category === categoryPath})
        ) 

        console.log(currCategory);

    },[])


   

  return (
    <main>
         <h2 className="text-center p-4 my-4 text-4xl sm:text-6xl">Wähle die korrekte Übersetzung</h2>
        <section className="container mx-auto p-6">

            {/* {} */}

            <div className="flex justify-center">
                <img src="/images/fruits/apple.svg" alt="" />
            </div>
            <form className="max-w-sm mx-auto flex justify-between">
                <div>
                    <input type="radio" name="fruits" id="eins" />
                    <label htmlFor="eins" className="text-xl">Eins</label>
                </div>
                <div>
                    <input type="radio" name="fruits" id="zwei" />
                    <label htmlFor="zwei">Zwei</label>
                </div>
                <div>
                    <input type="radio" name="fruits" id="drei" />
                    <label htmlFor="drei">Drei</label>
                </div>
                <div>
                    <input type="radio" name="fruits" id="vier" />
                    <label htmlFor="vier">Vier</label>
                </div>
            </form>


        </section>
    </main>
  )
}
export default PicQuizQuestions