import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [userObj, setUserObj] = useState({
    username: "",
    age: "",
    password: "",
  });
  const [appState, setAppState] = useState({
    currentUser: null,
    warning: "",
    success: "",
    isLoggedIn: false,
  });

  const registerUser = () => {
    // Check if the username already exists
    const isUsernameTaken = users.some(
      (user) => user.username === userObj.username
    );

    if (isUsernameTaken) {
      setAppState((prevState) => ({
        ...prevState,
        warning: "Der Benutzername ist bereits vergeben. Bitte wähle einen anderen.",
        success: ""
      }));
      return;
    }

    setUsers((prevUsers) => [...prevUsers, userObj]);
    setAppState({
      currentUser: userObj,
      warning: "",
      success: "Erfolgreich registriert. Viel Spaß!",
      isLoggedIn: true,
    });
    setUserObj({ username: "", age: "", password: "" });
  };

  const valueObject = {
    userObj,
    setUserObj,
    users,
    setUsers,
    appState,
    setAppState,
    registerUser,
  };

  return (
    <UserContext.Provider value={valueObject}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;