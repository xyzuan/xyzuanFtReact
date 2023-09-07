import React, { useState, useEffect } from "react";
import HeroPic from "./components/HeroPic";
import HeroTitle from "./components/HeroTitle";
import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import { isMobile } from "@/app/utils/themes";
import { useTheme } from "next-themes";

function HeroSection() {
  const [mobile, setMobile] = useState(false);
  const { theme } = useTheme();

  const updateIsMobile = () => {
    setMobile(isMobile());
  };

  useEffect(() => {
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
  }, []);

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
            top: mobile ? "380px" : 0,
            right: mobile ? "-180px" : "-600px",
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
            bottom: mobile ? "160px" : 100,
            left: mobile ? "-180px" : "-600px",
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
