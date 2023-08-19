import { Container, Grid, IconButton, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <Container
      sx={{
        backgroundColor: "#212121",
        padding: "24px",
      }}
    >
      <Link href="#" color="inherit" underline="none">
        <Typography
          sx={{
            fontFamily: "Laviossa",
            fontSize: "32px",
            paddingY: "24px",
          }}
        >
          &lt;/xyzuan.
        </Typography>
      </Link>
      <Grid>
        <Link href="#about" color="inherit" underline="none">
          <Typography
            sx={{
              color: "#C1C1C1",
              fontWeight: 100,
              padding: "6px",
              fontFamily: "Roboto Flex, sans-serif",
            }}
          >
            ABOUT
          </Typography>
        </Link>
        <Link href="#timeline" color="inherit" underline="none">
          <Typography
            sx={{
              color: "#C1C1C1",
              fontWeight: 100,
              padding: "6px",
              fontFamily: "Roboto Flex, sans-serif",
            }}
          >
            TIMELINE
          </Typography>
        </Link>
        <Link href="#portofolio" color="inherit" underline="none">
          <Typography
            sx={{
              color: "#C1C1C1",
              fontWeight: 100,
              padding: "6px",
              fontFamily: "Roboto Flex, sans-serif",
            }}
          >
            PORTOFOLIO
          </Typography>
        </Link>
        <Link href="#contact" color="inherit" underline="none">
          <Typography
            sx={{
              color: "#C1C1C1",
              fontWeight: 100,
              padding: "6px",
              fontFamily: "Roboto Flex, sans-serif",
            }}
          >
            CONTACT
          </Typography>
        </Link>
        <div
          style={{
            paddingTop: "18px",
            paddingLeft: "8px",
            paddingRight: "8px",
          }}
        >
          <hr />
        </div>
      </Grid>
      <Grid
        sx={{
          paddingY: "24px",
        }}
      >
        <Link href="https://github.com/xyzuan">
          <IconButton>
            <Image
              width="42"
              height="42"
              src="/assets/github.png"
              alt="github"
            />
          </IconButton>
        </Link>
        <Link href="https://linkedin.com/in/xyzuan">
          <IconButton>
            <Image
              width="42"
              height="42"
              src="/assets/linkedin.png"
              alt="linkedin"
            />
          </IconButton>
        </Link>
        <Link href="https://twitter.com/xyzuannihboss">
          <IconButton>
            <Image
              width="42"
              height="42"
              src="/assets/twitter.png"
              alt="twitter"
            />
          </IconButton>
        </Link>
        <Link href="https://t.me/xyzuan">
          <IconButton>
            <Image
              width="42"
              height="42"
              src="/assets/telegram.png"
              alt="telegram"
            />
          </IconButton>
        </Link>
        <Link href="mailto:xyzuannihboss@gmail.com">
          <IconButton>
            <Image width="42" height="42" src="/assets/email.png" alt="email" />
          </IconButton>
        </Link>
      </Grid>
      <Typography
        sx={{
          color: "#C1C1C1",
          fontWeight: "100",
          paddingX: "8px",
          fontFamily: "Roboto Flex, sans-serif",
        }}
      >
        Designed with love by Jody Yuantoro
        <br />
        Copyright 2023 a xyzuan, xyzscape LLC
      </Typography>
    </Container>
  );
}

export default Footer;
