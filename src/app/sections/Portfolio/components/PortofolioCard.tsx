"use client";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";

interface PortofolioCardProps {
  title: string;
  desc: string;
  img: string;
  href: string;
}

function PortofolioCard({ title, desc, img, href }: PortofolioCardProps) {
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
        backgroundColor: "#212121",
        color: "#ffffff",
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
