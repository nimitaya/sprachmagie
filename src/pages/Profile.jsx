import ProgressPoints from "../components/ProgressPoints";
import ProgressQuiz from "../components/ProgressQuiz";

const Profile = () => {
  return (
    <div className="max-w-sm mx-auto flex flex-col items-center">
      <h2 className="text-4xl m-5">Name von Nutzer</h2>
      <img src="./vite.svg" alt="" />
      <ProgressPoints />
      <ProgressQuiz />
    </div>
  );
};
export default Profile;
