import React, { useState, useEffect } from "react";
import HeroPic from "./components/HeroPic";
import HeroTitle from "./components/HeroTitle";
import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import { useTheme } from "next-themes";
import useResponsive from "@/app/utils/useResponsive";

function HeroSection() {
  const { theme } = useTheme();
  const isMobile = useResponsive("down", "lg");

  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        overflow: "hidden",
        transition: "0.3s ease-in-out",
        "@media (min-width: 1024px)": {
          flexDirection: "row",
          paddingY: "15vh",
        },
      }}
    >
      <Stack
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          "@media (min-width: 1024px)": {
            flexDirection: "row",
          },
        }}
      >
        <Image
          height="1442"
          width="1442"
          alt="bghero"
          src={
            theme === "dark" ? "/assets/herobg.svg" : "/assets/herobg-dark.svg"
          }
          style={{
            zIndex: -1,
            position: "absolute",
            animation: "rotate 6s linear infinite",
            top: isMobile ? "380px" : 0,
            right: isMobile ? "-180px" : "-600px",
          }}
        />
        <Image
          height="1442"
          width="1442"
          alt="bgherotop"
          src={
            theme === "dark"
              ? "/assets/herobgtop.svg"
              : "/assets/herobgtop-dark.svg"
          }
          style={{
            position: "absolute",
            animation: "rotate 6s linear infinite",
            zIndex: -1,
            bottom: isMobile ? "160px" : 100,
            left: isMobile ? "-180px" : "-600px",
          }}
        />
        <HeroPic />
        <Box sx={{ flexGrow: 1 }} />
        <HeroTitle />
      </Stack>
    </Container>
  );
}

export default HeroSection;
