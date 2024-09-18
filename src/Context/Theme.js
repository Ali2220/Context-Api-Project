import { createContext } from "react";
import { useContext } from "react";
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    LightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}