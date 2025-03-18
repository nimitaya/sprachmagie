import { createContext, useState } from "react"
import { profilbilder } from "../data/profilePics";

export const ProfilePicContext = createContext()

const ProfilePicContextProvider = ({children}) => {
  const [profilePic, setProfilePic] = useState(profilbilder[0]);

  const changeProfilePic = () => {
    const randomIndex = Math.floor(Math.random() * profilbilder.length);
    setProfilePic(profilbilder[randomIndex]);
  };

    const valueObject = {profilePic, changeProfilePic}

  return (
    <ProfilePicContext.Provider value={valueObject}>{children}</ProfilePicContext.Provider>
  )
}
export default ProfilePicContextProvider

// IMPORTANT add Context to main.jsx