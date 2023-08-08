import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function AboutHeader() {
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
          }}
        >
          jody
          <br />
          yuantoro.
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography
          sx={{
            fontWeight: "100",
            lineHeight: "21px",
            textAlign: "right",
          }}
        >
          xdroidOSS
          <br />
          UI UX, Developer
        </Typography>
      </Grid>
      <Box position="relative" sx={{ overflow: "hidden" }}>
        <Stack>
          <Box
            sx={{
              position: "absolute",
              width: "160%",
              height: "160%",
              backgroundColor: "#444444",
              borderRadius: "50%",
              left: "-15%",
              bottom: "-80%",
              zIndex: 1,
            }}
          />
          <Image
            src="/assets/HeroMe.png"
            alt="Me"
            width="100"
            height="100"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 2,
            }}
          />
          <Box
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
              }}
            >
              About me
            </Typography>
            <Grid container direction="row">
              <Typography
                sx={{
                  fontWeight: "100",
                  fontSize: "14px",
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
                sx={{
                  fontWeight: "100",
                  fontSize: "14px",
                }}
              >
                20 Y/O CANCER
              </Typography>
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default AboutHeader;
