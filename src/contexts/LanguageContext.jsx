import { createContext, useState } from "react"

export const LanguageContext = createContext();

const LanguageContextProvider = ({children}) => {
const [currentLanguage, setCurrentLanguage] = useState({
    short: "en",
    full: "Englisch"
})

const valueObject = {currentLanguage, setCurrentLanguage};

  return (
    <LanguageContext.Provider value={valueObject}>{children}</LanguageContext.Provider>
  )
}
export default LanguageContextProvider