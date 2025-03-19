// import { createContext, useState } from "react";

// export const UserContext = createContext();

// const UserContextProvider = ({ children }) => {
//   const [users, setUsers] = useState([]);
//   const [userObj, setUserObj] = useState({
//     username: "",
//     age: "",
//     password: "",
//   });
//   const [currentUser, setCurrentUser] = useState(null)
//   const [warning, setWarning] = useState("");
//   const [success, setSuccess] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const registerUser = () => {
//     // Check if the username already exists
//     const isUsernameTaken = users.some(
//       (user) => user.username === userObj.username
//     );

//     if (isUsernameTaken) {
//       setWarning(
//         "Der Benutzername ist bereits vergeben. Bitte wähle einen anderen."
//       );
//       // Set warning message
//       return;
//     }

//     setUsers((prevUsers) => [...prevUsers, userObj]);
//     // Add new user to the array
//     setCurrentUser(userObj)
//     setUserObj({ username: "", age: "", password: "" });
//     // Reset the form
//     setWarning("");
//     // Clear warning message
//     setSuccess("Erfolgreich registriert. Viel Spaß!");
//     setIsLoggedIn(true);
//   };

//   const valueObject = {
//     userObj,
//     setUserObj,
//     users,
//     currentUser,
//     registerUser,
//     warning,
//     success,
//     setSuccess,
//     isLoggedIn,
//   };

//   return (
//     <UserContext.Provider value={valueObject}>{children}</UserContext.Provider>
//   );
// };
// export default UserContextProvider;


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
    appState,
    setAppState,
    registerUser,
  };

  return (
    <UserContext.Provider value={valueObject}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;