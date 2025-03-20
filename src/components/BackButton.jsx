import { useNavigate } from "react-router-dom";

const BackButton = ({path}) => {
  const navigate = useNavigate();
  return (
    <button onClick={navigate(path)}
      className="bg-purple-700 text-xl text-white py-3 rounded hover:bg-purple-600 transition"
    >
      Los geht’s
    </button>
  );
};
export default BackButton;
