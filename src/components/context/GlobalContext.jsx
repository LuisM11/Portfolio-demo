/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();


export const useGlobalContext = () => useContext(GlobalContext);

export const ContextProvider = ({ children }) => {
    const [currentLanguage, setcurrentLanguage] = useState(null)
    
    useEffect(() => {
        const language = localStorage.getItem('language');
        if (language) {
            setcurrentLanguage(language);
        } else {
            setcurrentLanguage('es');
        }
    }, [])

    return (
        <GlobalContext.Provider
            value={{
                currentLanguage, setcurrentLanguage,
            }}
        >
            {children}
        </GlobalContext.Provider>

    )

}