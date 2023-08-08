import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

interface PortofolioCardProps {
  title: string;
  desc: string;
  img: string;
}

function PortofolioCard({ title, desc, img }: PortofolioCardProps) {
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
            filter: "brightness(100%)",
          },
        }}
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
