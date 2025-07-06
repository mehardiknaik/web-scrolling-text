"use client";
import { useCallback, useEffect, useState } from "react";

export default function useTheme() {
  const [isDark, setIsDark] = useState<boolean | null>(null); // `null` means "not yet determined"

  // On mount, determine and apply the theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    let dark = false;

    if (savedTheme) {
      dark = savedTheme === "dark";
    } else {
      dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    setIsDark(dark);
  }, []);

  // Toggle theme and update localStorage
  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const newIsDark = !prev;
      localStorage.setItem("theme", newIsDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newIsDark);
      return newIsDark;
    });
  }, []);

  return {
    isDark: isDark ?? false, // fallback to false if not initialized yet
    toggleTheme,
  };
}
