"use client";

import { Container, Grid, Typography } from "@mui/material";
import HeadingItem from "./HeadingItem";
import { useState } from "react";

const HeroTitle = () => {
  const [isHeld, setIsHeld] = useState(false);

  const handleTouchStart = () => {
    setIsHeld(true);
  };

  const handleTouchEnd = () => {
    setIsHeld(false);
  };

  const headings: string[] = [
    "c/c++",
    "flutter",
    "java",
    "ui/ux",
    "js",
    "next.js",
    "design",
    "android",
  ];

  return (
    <Container disableGutters>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        sx={{
          color: "#A9A9A9",
          paddingRight: "18px",
          overflow: "hidden",
        }}
      >
        {headings.map((heading, index) => (
          <Grid item key={heading}>
            <HeadingItem heading={heading} />
          </Grid>
        ))}
      </Grid>
      <Typography
        sx={{
          padding: "36px",
          paddingRight: "50px",
          fontSize: "12px",
          fontWeight: "100",
          textAlign: "left",
          userSelect: "none",
          transition: "0.3s ease",
          "@media (min-width: 1024px)": {
            textAlign: "right",
            paddingRight: "24px",
          },
        }}
      >
        Words aren’t gonna cut it. Let’s scroll and have a peep into my world,
        shall we?
      </Typography>
    </Container>
  );
};

export default HeroTitle;
