import { useContext } from "react";
import { ProgressContext } from "../contexts/ProgressContext";

const ProgressPoints = () => {
const {earnedPoints} = useContext(ProgressContext)

  return (
    <div className="p-4 w-full flex justify-evenly"> {/* Ich habe hier geändern */}
      {/* Badge above Progress Bar */}
      <div className="flex m-2 items-center">
        <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-400 bg-amber-100">
          Punkte
        </span>
      </div>
      {/* Number */}
      <div className="w-28 aspect-square bg-amber-100 rounded-full flex justify-center items-center self-center">
        <span className="text-3xl font-semibold inline-block text-indigo-400">
          {/* shows earned points from context */}
          {earnedPoints}
        </span>
      </div>
    </div>
  );
};
export default ProgressPoints;
