import { useContext } from "react";
import { ProgressContext } from "../contexts/ProgressContext";

const ProgressPoints = () => {
const {earnedPoints} = useContext(ProgressContext)

  return (
    <div className="p-4 flex justify-between">
      {/* Badge above Progress Bar */}
      <div className="flex m-2 items-center">
        <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
          Punkte
        </span>
      </div>
      {/* Number */}
      <div className="w-28 aspect-square bg-indigo-100 rounded-full flex justify-center items-center self-center">
        <span className="text-xl font-semibold inline-block text-teal-600">
          {/* shows earned points from context */}
          {earnedPoints}
        </span>
      </div>
    </div>
  );
};
export default ProgressPoints;
