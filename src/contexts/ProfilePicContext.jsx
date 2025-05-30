import { createContext, useState } from "react";
import { profilbilder } from "../data/profilePics";

export const ProfilePicContext = createContext();

const ProfilePicContextProvider = ({ children }) => {
  const [profilePic, setProfilePic] = useState(profilbilder[0]);
  const [prevIndex, setPrevIndex] = useState(0);

  const changeProfilePic = () => {
    let randomIndex = Math.floor(Math.random() * profilbilder.length);
    // to change Pic everytime you click
    while (randomIndex === prevIndex) {
      randomIndex = Math.floor(Math.random() * profilbilder.length);
    }
    setProfilePic(profilbilder[randomIndex]);
    setPrevIndex(randomIndex);
  };

  const valueObject = { profilePic, changeProfilePic };

  return (
    <ProfilePicContext.Provider value={valueObject}>
      {children}
    </ProfilePicContext.Provider>
  );
};
export default ProfilePicContextProvider;
