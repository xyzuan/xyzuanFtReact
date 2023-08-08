"use client";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";

interface PortofolioCardProps {
  title: string;
  desc: string;
  img: string;
}

function PortofolioCard({ title, desc, img }: PortofolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      sx={{
        backgroundColor: "#212121",
        color: "#ffffff",
      }}
    >
      <CardMedia
        sx={{
          height: 200,
          objectFit: "cover",
          filter: "grayscale(100%)",
          transition: "filter 0.3s ease",
          "&:hover": {
            filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
          },
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            userSelect: "none",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
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
