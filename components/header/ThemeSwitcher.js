"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

// icons/images.
import SunIcon from "/public/icons/sun.svg";
import MoonIcon from "/public/icons/moon.svg";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  useEffect(() => {
    document.getElementById("theme").className = theme;
  }, [theme]);
  return (
    <Image
      width={24}
      height={24}
      onClick={switchTheme}
      alt={theme === "dark" ? "sun" : "moon"}
      src={theme === "dark" ? SunIcon : MoonIcon}
    />
  );
};

export default ThemeSwitcher;
