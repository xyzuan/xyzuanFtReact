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
      <Typography
        sx={{
          fontFamily: "Laviossa",
          fontSize: "32px",
          paddingY: "24px",
        }}
      >
        &lt;/xyzuan.
      </Typography>
      <Grid>
        <Link href="#" color="inherit" underline="none">
          <Typography
            sx={{ color: "#C1C1C1", fontWeight: 100, padding: "6px" }}
          >
            HOME
          </Typography>
        </Link>
        <Link href="#about" color="inherit" underline="none">
          <Typography
            sx={{ color: "#C1C1C1", fontWeight: 100, padding: "6px" }}
          >
            ABOUT
          </Typography>
        </Link>
        <Link href="#timeline" color="inherit" underline="none">
          <Typography
            sx={{ color: "#C1C1C1", fontWeight: 100, padding: "6px" }}
          >
            TIMELINE
          </Typography>
        </Link>
        <Link href="#portofolio" color="inherit" underline="none">
          <Typography
            sx={{ color: "#C1C1C1", fontWeight: 100, padding: "6px" }}
          >
            PORTOFOLIO
          </Typography>
        </Link>
        <Link href="#contact" color="inherit" underline="none">
          <Typography
            sx={{ color: "#C1C1C1", fontWeight: 100, padding: "6px" }}
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
        <IconButton>
          <Image width="42" height="42" src="/assets/github.png" alt="github" />
        </IconButton>
        <IconButton>
          <Image
            width="42"
            height="42"
            src="/assets/linkedin.png"
            alt="linkedin"
          />
        </IconButton>
        <IconButton>
          <Image
            width="42"
            height="42"
            src="/assets/twitter.png"
            alt="twitter"
          />
        </IconButton>
        <IconButton>
          <Image
            width="42"
            height="42"
            src="/assets/telegram.png"
            alt="telegram"
          />
        </IconButton>
        <IconButton>
          <Image width="42" height="42" src="/assets/email.png" alt="email" />
        </IconButton>
      </Grid>
      <Typography
        sx={{
          color: "#C1C1C1",
          fontWeight: "100",
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