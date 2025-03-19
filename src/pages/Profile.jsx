import { useContext } from "react";
import ProgressPoints from "../components/ProgressPoints";
import ProgressQuiz from "../components/ProgressQuiz";
import { ProfilePicContext } from "../contexts/ProfilePicContext";

const Profile = () => {
  const {profilePic, changeProfilePic} = useContext(ProfilePicContext)

  return (
    <div className="max-w-sm mx-auto flex flex-col items-center">
      <h2 className="text-4xl m-5 text-teal-600">Name von Nutzer</h2>
      <div className="relative w-40 aspect-square bg-indigo-100 rounded-full border-8 border-b-amber-600 flex justify-center items-center self-center shadow-lg cursor-pointer transition-transform transform hover:scale-105">
        {/* shows random profile picture when you click on it */}
        <img className="rounded-full h-full w-auto object-cover" src={profilePic} alt="Profile picture" onClick={changeProfilePic}/>
      </div>
      <ProgressPoints />
      <ProgressQuiz />
    </div>
  );
};
export default Profile;
