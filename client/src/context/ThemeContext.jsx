import React, { createContext, useState, useEffect } from "react";
const ThemeContext = createContext();
import axios from "axios";
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "Chennai"
  );
  useEffect(() => {
    // const root = window.document.documentElement;
    // root.classList.remove('light', 'dark');
    // root.classList.add(theme);
    const getUser = async () => {
      const res = JSON.parse(localStorage.getItem("user"));
      const color = res["favCity"];

      setTheme(color.toLowerCase());
    };
    getUser();
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
