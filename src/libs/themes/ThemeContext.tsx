"use client";
import { createContext, useEffect, useState } from "react";

interface ThemeContextType {
  theme?: string;
  changeTheme?: (nextTheme?: string) => void;
}
export const ThemeContext = createContext<ThemeContextType>({});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<string>("winter");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = (event?: any) => {
    // console.log(event.target.value)
    const nextTheme: string | null = event.target.value || null;
    // console.log(nextTheme)
    setTheme((prev) => (prev === "winter" ? "night" : "winter"))
    // if (nextTheme) {
    //   setTheme(nextTheme);
    // } else {
    //   setTheme((prev) => (prev === "winter" ? "night" : "winter"));
    // }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};