import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "next-themes";

interface HeadingItemProps {
  heading: string;
}

const HeadingItem: React.FC<HeadingItemProps> = ({ heading }) => {
  const { theme } = useTheme();
  const [isHeld, setIsHeld] = useState(false);

  const handleTouchStart = () => {
    setIsHeld(true);
  };

  const handleTouchEnd = () => {
    setIsHeld(false);
  };

  return (
    <Typography
      key={heading}
      sx={{
        fontSize: isHeld ? "42px" : "38px",
        fontFamily: "Laviossa",
        whiteSpace: "nowrap",
        userSelect: "none",
        paddingLeft: "8px",
        paddingRight: "20px",
        transition: "0.3s ease",
        color: isHeld
          ? theme === "dark"
            ? "white"
            : "black"
          : theme === "dark"
          ? "#A9A9A9"
          : "#A9A9A9",
        "&:hover": {
          fontSize: "42px",
          color: theme === "dark" ? "#FFFFFF" : "#000000",
        },
        "@media (min-width: 1024px)": {
          fontSize: isHeld ? "68px" : "64px",
          "&:hover": {
            fontSize: "68px",
            color: theme === "dark" ? "#FFFFFF" : "#000000",
          },
        },
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {heading}
    </Typography>
  );
};

export default HeadingItem;
