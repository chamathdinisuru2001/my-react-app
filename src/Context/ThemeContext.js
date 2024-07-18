import React, { createContext, useContext, useEffect, useState } from 'react'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline  from '@mui/material/CssBaseline';
import useLocalStorage from 'use-local-storage';

const ThemeContext = createContext();

export const useTheme = () =>  useContext(ThemeContext);

const ThemeProvider = ({children}) => {
    const[themeMode,setThemeMode] = useState(useLocalStorage('theme'? 'dark' : 'light'));
    

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', themeMode);
        localStorage.setItem('theme', themeMode);
    }, [themeMode])

    const toggleTheme = () => {
        const newTheme = themeMode === 'light' ? 'dark' : 'light';
        setThemeMode(newTheme);
    };

    return (
        <ThemeContext.Provider value={{themeMode, toggleTheme}}>
            <CssBaseline />
                {children}
        </ThemeContext.Provider>
    );
};

export {ThemeContext};
export default ThemeProvider;