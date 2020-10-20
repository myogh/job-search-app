import React from "react";
export const themes = {
  light: {
    bgColor: "bg-white",
    textColor: "text-gray-900",
  },
  dark: {
    bgColor: "bg-indigo-800",
    textColor: "text-white",
  },
};

export const ThemeContext = React.createContext(themes.light);
