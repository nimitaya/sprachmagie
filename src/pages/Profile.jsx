import { useContext } from "react";
import { Link } from "react-router-dom";
import ProgressPoints from "../components/ProgressPoints";
import ProgressQuiz from "../components/ProgressQuiz";
import LanguageSelect from "../components/LanguageSelect";
import { ProfilePicContext } from "../contexts/ProfilePicContext";
import { UserContext } from "../contexts/UserContext";

const Profile = () => {
  const { profilePic, changeProfilePic } = useContext(ProfilePicContext);
  const { appState } = useContext(UserContext);

  return (
    <div className="relative w-full flex-1 py-20 overflow-x-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://64.media.tumblr.com/35b0676ce21fc9a9471ab45b1e241444/tumblr_ol6o615mfP1qa9gmgo5_1280.jpg')`,
          filter: "blur(3px)",
        }}
      ></div>

      <main className="relative max-w-sm mx-auto flex flex-col items-center flex-1">
        <h2 className="text-4xl m-5 text-purple-700">
          {appState.currentUser
            ? appState.currentUser.username.toUpperCase()
            : "ANONYM"}
        </h2>
        <div className="w-40 aspect-square bg-indigo-100 rounded-full border-10 border-purple-700 flex justify-center items-center self-center shadow-lg cursor-pointer transition-transform transform hover:scale-105 ">
          {/* shows random profile picture when you click on it */}
          <img
            className="rounded-full h-full w-auto object-cover"
            src={profilePic}
            alt="Profile picture"
            onClick={changeProfilePic}
          />
        </div>
        <Link
          to="/learning"
          className="my-6 bg-purple-700 text-xl text-white px-9 py-3 rounded hover:bg-purple-600 transition cursor-pointer"
        >
          Jetzt Lernen
        </Link>
        <LanguageSelect  />
        <ProgressPoints />
        <ProgressQuiz />
  
      
      </main>
    </div>
  );
};

export default Profile;
