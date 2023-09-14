import { IconButton } from "@mui/material";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme !== null) {
      setTheme(savedTheme);
    }
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <IconButton onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <Image
        width="42"
        height="52"
        src={
          theme === "dark"
            ? "/assets/theme-light.png"
            : "/assets/theme-dark.png"
        }
        alt="theme"
        style={{
          width: "52",
        }}
      />
    </IconButton>
  );
};

export default ThemeToggle;
