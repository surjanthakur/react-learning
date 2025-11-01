import { createContext, use, useContext } from "react";

const ThemeContext = createContext({
  theme: "light",
});

export const ThemeContextProvider = ThemeContext.Provider;

export const useTheme = () => {
  useContext(ThemeContext);
};
