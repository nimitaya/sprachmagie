import { useNavigate } from "react-router-dom";

const BackButton = ({ path }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(path)}
      className="bg-purple-700 text-xl text-white px-9 py-3 rounded hover:bg-purple-600 transition cursor-pointer"
    >
      Zurück
    </button>
  );
};
export default BackButton;
