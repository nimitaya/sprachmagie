import { useContext } from "react";
import { ProgressContext } from "../contexts/ProgressContext";

const ProgressQuiz = () => {
  const {earnedProgress} = useContext(ProgressContext)

    const progressValue = {
        width: `${earnedProgress}%`,
      };

  return (
    <div className="p-4 flex flex-col">
        {/* Badge above Progress Bar */}
        <div className="flex mb-2 items-center">
          <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-700 bg-pink-200">
            Abgeschlossene Quizzes
          </span>
        </div>
        {/* Prograss Bar */}
        <div className="flex mb-2 rounded-full h-6 bg-gray-200">
          <div style={progressValue} className="rounded-full bg-amber-400"></div>
        </div>
        {/* Percentage */}
        <div className="w-28 aspect-square bg-pink-200 rounded-full flex justify-center items-center self-center">
          <span className="text-3xl font-semibold inline-block text-purple-700">
            {/* percentage taken from context */}
            {earnedProgress<100 ? earnedProgress : "100"}%
          </span>
        </div>
      </div>
  )
}
export default ProgressQuiz