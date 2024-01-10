'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
// TYPES
export type Theme = 'dracula' | 'winter'
type ThemeContextProviderProps = {
    children : React.ReactNode
}
type ThemeContext = {
    theme : 'dracula' | 'winter',
    setTheme: React.Dispatch<React.SetStateAction<Theme>>
}
// Create a context 
const ThemeContext = createContext<ThemeContext | null>(null)

// provider
export const ThemeContextProvider = ({ children }:ThemeContextProviderProps) => {
    const [ theme, setTheme ] = useState<Theme>('winter')
    useEffect(() => {
        localStorage.setItem("theme", theme);
      }, [theme]);
    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme
        } }>
            {children}
        </ThemeContext.Provider>
    )
}

// consumer
export const useThemeContext = () =>{
    const context = useContext(ThemeContext)
    if(!context) {
        throw new Error('context must be within provider')
    }
    return context
}

