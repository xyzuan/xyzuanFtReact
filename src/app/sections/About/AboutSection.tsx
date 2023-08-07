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
      }}
    >
      <AboutHeader />
      <AboutDesc />
    </Container>
  );
}

export default AboutSection;
