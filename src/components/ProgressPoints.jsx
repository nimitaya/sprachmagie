const ProgressPoints = () => {
  return (
    <div className="p-4 flex justify-between">
      {/* Badge above Progress Bar */}
      <div className="flex m-2 items-center">
        <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
          Punkte
        </span>
      </div>
      {/* Percentage */}
      <div className="w-28 aspect-square bg-indigo-100 rounded-full flex justify-center items-center self-center">
        <span className="text-xl font-semibold inline-block text-teal-600">
          {/* TODO percentage needs to be dynamic */}
          70%
        </span>
      </div>
    </div>
  );
};
export default ProgressPoints;
