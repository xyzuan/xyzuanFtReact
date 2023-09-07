import React from "react";
import AboutHeader from "./components/AboutHeader";
import { Container } from "@mui/material";
import AboutDesc from "./components/AboutDesc";
import { useTheme } from "next-themes";

function AboutSection() {
  const { theme } = useTheme();
  return (
    <Container
      disableGutters
      id="about"
      sx={{
        borderRadius: "32px",
        backgroundColor: theme === "dark" ? "#212121" : "#F4F4F4",
        color: theme === "dark" ? "#ffffff" : "#000000",
        display: "flex",
        flexDirection: "column",
        transition: "0.3s ease-in-out",
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
