import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to provide theme context to the application
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Initialize the theme state

  // Effect to apply the theme to the document's root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
