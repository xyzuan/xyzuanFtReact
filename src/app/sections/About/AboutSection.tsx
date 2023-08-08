import React from "react";
import AboutHeader from "./components/AboutHeader";
import { Container } from "@mui/material";
import AboutDesc from "./components/AboutDesc";

function AboutSection() {
  return (
    <Container
      id="about"
      sx={{
        backgroundColor: "#212121",
        display: "flex",
        flexDirection: "column",
        "@media (min-width: 1024px)": {
          flexDirection: "row",
        },
      }}
    >
      <AboutHeader />
      <AboutDesc />
    </Container>
  );
}

export default AboutSection;
