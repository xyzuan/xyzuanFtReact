import { Container, Grid, IconButton, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import { manrope } from "../constant/fonts";

function Footer() {
  const { theme } = useTheme();
  return (
    <Container
      sx={{
        color: theme === "dark" ? "#FFFFFF" : "#000000",
        padding: "24px",
        transition: "0.3s ease-in-out",
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
            className={`${manrope.className}`}
            sx={{
              fontWeight: "medium",
              padding: "6px",
            }}
          >
            ABOUT
          </Typography>
        </Link>
        <Link href="#timeline" color="inherit" underline="none">
          <Typography
            className={`${manrope.className}`}
            sx={{
              fontWeight: "medium",
              padding: "6px",
            }}
          >
            CAREER
          </Typography>
        </Link>
        <Link href="#portofolio" color="inherit" underline="none">
          <Typography
            className={`${manrope.className}`}
            sx={{
              fontWeight: "medium",
              padding: "6px",
            }}
          >
            PORTOFOLIO
          </Typography>
        </Link>
        <Link href="#contact" color="inherit" underline="none">
          <Typography
            className={`${manrope.className}`}
            sx={{
              fontWeight: "medium",
              padding: "6px",
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
              src={
                theme === "dark"
                  ? "/assets/github.png"
                  : "/assets/github-dark.png"
              }
              alt="github"
            />
          </IconButton>
        </Link>
        <Link href="https://linkedin.com/in/xyzuan">
          <IconButton>
            <Image
              width="42"
              height="42"
              src={
                theme === "dark"
                  ? "/assets/linkedin.png"
                  : "/assets/linkedin-dark.png"
              }
              alt="linkedin"
            />
          </IconButton>
        </Link>
        <Link href="https://twitter.com/xyzuannihboss">
          <IconButton>
            <Image
              width="42"
              height="42"
              src={
                theme === "dark"
                  ? "/assets/twitter.png"
                  : "/assets/twitter-dark.png"
              }
              alt="twitter"
            />
          </IconButton>
        </Link>
        <Link href="https://t.me/xyzuan">
          <IconButton>
            <Image
              width="42"
              height="42"
              src={
                theme === "dark"
                  ? "/assets/telegram.png"
                  : "/assets/telegram-dark.png"
              }
              alt="telegram"
            />
          </IconButton>
        </Link>
        <Link href="mailto:xyzuannihboss@gmail.com">
          <IconButton>
            <Image
              width="42"
              height="42"
              src={
                theme === "dark"
                  ? "/assets/email.png"
                  : "/assets/email-dark.png"
              }
              alt="email"
            />
          </IconButton>
        </Link>
      </Grid>
      <Typography
        className={`${manrope.className}`}
        sx={{
          fontWeight: "medium",
          paddingX: "8px",
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
