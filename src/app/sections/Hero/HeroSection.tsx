import React from "react";
import HeroPic from "./components/HeroPic";
import HeroTitle from "./components/HeroTitle";
import { Box, Container } from "@mui/material";

function HeroSection() {
  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        "@media (min-width: 1024px)": {
          flexDirection: "row",
        },
      }}
    >
      <HeroPic />
      <Box sx={{ flexGrow: 1 }} />
      <HeroTitle />
    </Container>
  );
}

export default HeroSection;
