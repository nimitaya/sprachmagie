const ProgressQuiz = () => {
    const progressValue = {
        width: "70%",
      };
    // TODO needs to be changed to be dynamic

  return (
    <div className="p-4 flex flex-col">
        {/* Badge above Progress Bar */}
        <div className="flex mb-2 items-center">
          <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
            Abgeschlossene Quizzes
          </span>
        </div>
        {/* Prograss Bar */}
        <div className="flex mb-2 rounded-full h-6 bg-gray-200">
          <div style={progressValue} className="rounded-full bg-teal-500"></div>
          {/* TODO see above */}
        </div>
        {/* Percentage */}
        <div className="w-28 aspect-square bg-indigo-100 rounded-full flex justify-center items-center self-center">
          <span className="text-xl font-semibold inline-block text-teal-600">
            {/* TODO percentage needs to be dynamic */}
            70%
          </span>
        </div>
      </div>
  )
}
export default ProgressQuiz