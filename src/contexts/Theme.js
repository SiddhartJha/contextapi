import { createContext, useContext } from "react";

export const ThemeContext = createContext({     // here we are assigning a default object to createContext.
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider  

export default function useTheme(){
    return useContext(ThemeContext)  // 
}