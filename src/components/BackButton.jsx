import { useNavigate } from "react-router-dom";

const BackButton = ({ path }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(path)}
      className="bg-purple-700 text-2xl text-white px-10 py-3 mt-4 rounded hover:bg-purple-600 transition cursor-pointer"
    >
      Zurück
    </button>
  );
};
export default BackButton;
