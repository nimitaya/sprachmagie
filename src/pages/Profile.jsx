import { useContext } from "react";
import ProgressPoints from "../components/ProgressPoints";
import ProgressQuiz from "../components/ProgressQuiz";
import LanguageSelect from "../components/LanguageSelect";
import { ProfilePicContext } from "../contexts/ProfilePicContext";
import { UserContext } from "../contexts/UserContext";

const Profile = () => {
  const { profilePic, changeProfilePic } = useContext(ProfilePicContext);
  const { appState } = useContext(UserContext);

  return (
    <main className="max-w-sm mx-auto flex flex-col items-center flex-1">
      <h2 className="text-4xl m-5 text-indigo-400">
        {appState.currentUser
          ? appState.currentUser.username.toUpperCase()
          : "ANONYM"}
      </h2>
      <div className=" w-40 aspect-square bg-indigo-100 rounded-full border-10 border-purple-700 flex justify-center items-center self-center shadow-lg cursor-pointer transition-transform transform hover:scale-105">
        {/* shows random profile picture when you click on it */}
        <img
          className="rounded-full h-full w-auto object-cover"
          src={profilePic}
          alt="Profile picture"
          onClick={changeProfilePic}
        />
      </div>
      <ProgressPoints />
      <ProgressQuiz />
      <LanguageSelect />
    </main>
  );
};
export default Profile;
