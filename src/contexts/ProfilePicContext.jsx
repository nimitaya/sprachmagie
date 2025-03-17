import { createContext } from "react"

export const ProfilePicContext = createContext()

const ProfilePicContextProvider = ({children}) => {
    const valueObject = {}

  return (
    <ProfilePicContext.Provider value={valueObject}>{children}</ProfilePicContext.Provider>
  )
}
export default ProfilePicContextProvider