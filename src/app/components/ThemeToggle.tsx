import { IconButton } from "@mui/material";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { resolvedTheme } = useTheme();

  return (
    <IconButton onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <Image
        width="42"
        height="52"
        src={
          resolvedTheme === "dark"
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
