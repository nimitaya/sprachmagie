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

        {/* click div to show random profile picture 
        <div
          className="absolute top-0 -right-20 text-xs cursor-pointer py-1 px-2 rounded-xl bg-teal-200 flex flex-col items-center"
          onClick={changeProfilePic}
        >
            ----- icon for change - TODO color change in fill attribute -----
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={20}><path fill="#74C0FC" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>

          <span className="font-semibold  text-teal-600 bg-teal-200">
            ändern
          </span>
        </div> */}

      </div>
      <ProgressPoints />
      <ProgressQuiz />
    </div>
  );
};
export default Profile;
