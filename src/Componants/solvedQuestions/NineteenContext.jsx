import { createContext, useContext, useState } from "react";


const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
    const [isToggled, setIsToggled] = useState(false)

    const toggleTheme = ()=>{
        setIsToggled((preMode)=> !preMode)
    }

    return(
        <ThemeContext.Provider value={{isToggled, toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme =()=>{
    return useContext(ThemeContext)
}

export {useTheme, ThemeProvider}