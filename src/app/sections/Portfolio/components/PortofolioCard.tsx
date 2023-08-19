"use client";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "next-themes";

interface PortofolioCardProps {
  title: string;
  desc: string;
  img: string;
  href: string;
}

function PortofolioCard({ title, desc, img, href }: PortofolioCardProps) {
  const { resolvedTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <Card
      sx={{
        boxShadow: "none",
        backgroundColor: resolvedTheme === "dark" ? "#212121" : "#F4F4F4",
        color: resolvedTheme === "dark" ? "#ffffff" : "#000000",
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardMedia
        sx={{
          height: 200,
          objectFit: "cover",
          filter: "grayscale(100%)",
          transition: "0.3s ease",
          scale: isHovered ? "105%" : "100%",
          WebkitFilter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
        }}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            fontFamily: "Roboto Flex, sans-serif",
            userSelect: "none",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Roboto Flex, sans-serif",
            userSelect: "none",
          }}
        >
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PortofolioCard;
