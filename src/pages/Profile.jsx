import { useContext } from "react";
import ProgressPoints from "../components/ProgressPoints";
import ProgressQuiz from "../components/ProgressQuiz";
import { ProfilePicContext } from "../contexts/ProfilePicContext";
import { UserContext } from "../contexts/UserContext";

const Profile = () => {
  const { profilePic, changeProfilePic } = useContext(ProfilePicContext);
  const { appState } = useContext(UserContext);

  return (
    <main className="w-full min-h-screen flex flex-col items-center flex-1
    "
    style={{
      backgroundImage: `url('https://64.media.tumblr.com/1ada14b60cf5b70a887b045d6e83fbd4/tumblr_ol6o615mfP1qa9gmgo2_1280.jpg')`,
      backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
      
    }}
    >
      

      <h2 className="text-4xl m-5 text-indigo-400">
        {appState.currentUser ? appState.currentUser.username.toUpperCase() : "ANONYM"}
      </h2>
      <div className=" w-40 aspect-square bg-indigo-100 rounded-full border-10 border-purple-500 flex justify-center items-center self-center shadow-lg cursor-pointer transition-transform transform hover:scale-105">
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
    </main>
  );
};
export default Profile;
