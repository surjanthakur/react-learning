import { useState, useEffect } from "react";
import { ThemeProvider } from "../context/themeContext";
import ThemeBtn from "./themeBtn";
import Card from "./card";

export default function ThemeUi() {
  const [theme, setTheme] = useState("light");

  const darkMode = () => {
    setTheme("dark");
  };
  const lightMode = () => {
    setTheme("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);
  return (
    <>
      <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
