import React from "react";
export const themes = {
  light: {
    bgColor: "bg-white",
    textColor: "text-gray-900",
    borderColor: "border-gray-400",
    shadow: "hover:shadow-lg",
  },
  dark: {
    bgColor: "bg-indigo-900",
    textColor: "text-white",
    borderColor: "border-gray-800",
    shadow: "hover:shadow-white",
  },
};

export const ThemeContext = React.createContext(themes.light);
