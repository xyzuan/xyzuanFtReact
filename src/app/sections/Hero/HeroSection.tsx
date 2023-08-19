import React, { useState, useEffect } from "react";
import HeroPic from "./components/HeroPic";
import HeroTitle from "./components/HeroTitle";
import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import { isMobile } from "@/app/utils/themes";
import { useTheme } from "next-themes";
import { darkTheme, lightTheme } from "@/app/style/themes";

function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mobile, setMobile] = useState(false);

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
      style={resolvedTheme === "dark" ? darkTheme : lightTheme}
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        overflow: "hidden",
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
          src="/assets/herobg.svg"
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
          src="/assets/herobgtop.svg"
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
