"use client";

import { Typography } from "@mui/material";
import React, { useState } from "react";

interface HeadingItemProps {
  heading: string;
}

const HeadingItem: React.FC<HeadingItemProps> = ({ heading }) => {
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
        fontSize: isHeld ? "68px" : "64px",
        fontFamily: "Laviossa",
        whiteSpace: "nowrap",
        userSelect: "none",
        paddingLeft: "20px",
        paddingRight: "20px",
        transition: "0.3s ease",
        color: isHeld ? "white" : "#A9A9A9",
        "&:hover": {
          color: "white",
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
