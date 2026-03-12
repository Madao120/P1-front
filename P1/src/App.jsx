import { useEffect, useState } from "react";
import "./App.css";
import Metabase from "./pages/Metabase";
import Cabecera from "./components/Cabecera";
import Pie from "./components/Pie";

const THEME_STORAGE_KEY = "metabase-theme";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [darkMode]);

  return (
    <>
      <Cabecera darkMode={darkMode} setDarkMode={setDarkMode} />
      <Metabase darkMode={darkMode} />
      <Pie />
    </>
  );
}

export default App;
