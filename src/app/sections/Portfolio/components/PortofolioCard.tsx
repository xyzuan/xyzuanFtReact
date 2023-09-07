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
  const { theme } = useTheme();
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
        boxShadow: isHovered ? "0 0 50px rgba(128, 128, 128, 0.5)" : "none",
        borderRadius: "32px",
        backgroundColor: theme === "dark" ? "#212121" : "#F4F4F4",
        color: theme === "dark" ? "#ffffff" : "#000000",
        transition: "0.1s ease-in-out",
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
            paddingLeft: "8px",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Roboto Flex, sans-serif",
            userSelect: "none",
            paddingLeft: "8px",
          }}
        >
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PortofolioCard;
