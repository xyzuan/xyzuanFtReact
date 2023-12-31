import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { manrope } from "@/constant/fonts";

function AboutHeader() {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  const handleContextMenu = (e: any) => {
    e.preventDefault();
  };

  return (
    <Container
      disableGutters
      sx={{
        "@media (min-width: 1024px)": {
          maxWidth: "450px",
        },
      }}
    >
      <Grid
        container
        direction="row"
        data-aos="fade-up"
        sx={{
          padding: "18px",
          paddingX: "32px",
          paddingTop: "53px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Laviossa",
            fontSize: "19px",
            lineHeight: "21px",
            userSelect: "none",
          }}
        >
          jody
          <br />
          yuantoro.
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography
          className={`${manrope.className}`}
          sx={{
            fontWeight: "300",
            lineHeight: "21px",
            textAlign: "right",
            userSelect: "none",
          }}
        >
          xdroidOSS
          <br />
          UI UX, Developer
        </Typography>
      </Grid>
      <Box
        position="relative"
        sx={{ overflow: "hidden", borderRadius: "32px" }}
      >
        <Stack>
          <Box
            data-aos="fade-up"
            sx={{
              position: "absolute",
              width: "160%",
              height: "160%",
              backgroundColor: theme === "dark" ? "#444444" : "#B8B8B8",
              borderRadius: "50%",
              left: "-15%",
              bottom: "-80%",
              zIndex: 1,
              transition: "0.3s ease-in-out",
            }}
          />
          <Image
            src="/assets/AboutPic.png"
            alt="Me"
            width="1000"
            height="0"
            onContextMenu={handleContextMenu}
            style={{
              width: "auto",
              height: "auto",
              objectFit: "cover",
              transition: "0.3s ease",
              scale: isHovered ? "102%" : "100%",
              filter: isHovered
                ? "grayscale(0%)"
                : "grayscale(100%) brightness(65%)",
              zIndex: 2,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          />
          <Box
            data-aos="fade-up"
            sx={{
              position: "absolute",
              width: "100%",
              bottom: 0,
              padding: "24px",
              paddingX: "32px",
              zIndex: 3,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Laviossa",
                fontSize: "48px",
                userSelect: "none",
                color: "white",
              }}
            >
              About me
            </Typography>
            <Grid container direction="row">
              <Typography
                className={`${manrope.className}`}
                sx={{
                  fontWeight: "400",
                  fontSize: "14px",
                  userSelect: "none",

                  color: "white",
                }}
              >
                INDONESIA
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  border: "1px solid white",
                  borderRadius: "99px",
                  marginX: "18px",
                  marginY: "6px",
                }}
              />
              <Typography
                className={`${manrope.className}`}
                sx={{
                  fontWeight: "400",
                  fontSize: "14px",
                  userSelect: "none",

                  color: "white",
                }}
              >
                21 Y/O CANCER
              </Typography>
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default AboutHeader;
