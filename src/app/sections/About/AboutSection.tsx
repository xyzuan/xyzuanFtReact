import React from "react";
import AboutHeader from "./components/AboutHeader";
import { Container } from "@mui/material";
import AboutDesc from "./components/AboutDesc";
import { useTheme } from "next-themes";

function AboutSection() {
  const { resolvedTheme } = useTheme();
  return (
    <Container
      disableGutters
      id="about"
      sx={{
        backgroundColor: resolvedTheme === "dark" ? "#212121" : "#F4F4F4",
        color: resolvedTheme === "dark" ? "#ffffff" : "#000000",
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
