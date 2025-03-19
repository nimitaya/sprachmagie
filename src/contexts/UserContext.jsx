import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [userObj, setUserObj] = useState({
        username: "",
        age: "",
        password: "",
    });
    const [warning, setWarning] = useState("");

    const registerUser = () => {
        // Check if the username already exists
    const isUsernameTaken = users.some((user) => user.username === userObj.username);

    if (isUsernameTaken) {
        setWarning("Der Benutzername ist bereits vergeben. Bitte wähle einen anderen."); 
        // Set warning message
        return;
    }

        setUsers((prevUsers) => [...prevUsers, userObj]); 
        // Add new user to the array
        setUserObj({ username: "", age: "", password: "" }); 
        // Reset the form
        setWarning(""); 
        // Clear warning message
        // TODO Timeout for Navigation to Home oder Speichern in Local Storage
    };

    const valueObject = { userObj, setUserObj, users, registerUser, warning };

  return (
    <UserContext.Provider value={valueObject}>{children}</UserContext.Provider>
  )
}
export default UserContextProvider