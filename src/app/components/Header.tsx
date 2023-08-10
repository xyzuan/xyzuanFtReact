"use client";

import React from "react";
import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { isMobile } from "../utils/themes";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [mobile, setMobile] = useState(false);

  const updateIsMobile = () => {
    setMobile(isMobile());
  };

  useEffect(() => {
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setShowNavbar((prevShowNavbar) => !prevShowNavbar);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          position: "sticky",
          background: "#2e2e2e",
          color: "#fff",
          boxShadow: "none",
          minHeight: "80px",
          borderBottom: isSticky ? "1px solid #666666" : "none",
          transition: "border-color 0.3s ease-in-out, height 0.1s ease-in-out",
        }}
      >
        <Toolbar
          sx={{
            padding: "24px",
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image width="58" height="58" src="/assets/xyzuan.svg" alt="" />
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: mobile ? 0 : "auto",
                visibility: mobile ? "hidden" : "visible",
              }}
            >
              <Link href="#about" color="inherit" underline="none">
                <Typography
                  sx={{
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
                    fontWeight: 100,
                    padding: "6px",
                    fontFamily: "Roboto Flex, sans-serif",
                  }}
                >
                  CONTACT
                </Typography>
              </Link>
            </Grid>
            <IconButton onClick={toggleNavbar}>
              <Image
                width="42"
                height="52"
                src="/assets/NavBurger.svg"
                alt=""
                style={{
                  visibility: mobile ? "visible" : "hidden",
                }}
              />
            </IconButton>
          </Container>
        </Toolbar>
        {showNavbar && (
          <Container
            sx={{
              backgroundColor: "#2e2e2e",
              paddingLeft: "32px",
              paddingBottom: "24px",
            }}
          >
            <Grid>
              <Link href="#about" color="inherit" underline="none">
                <Typography
                  sx={{
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
                    fontWeight: 100,
                    padding: "6px",
                    fontFamily: "Roboto Flex, sans-serif",
                  }}
                >
                  CONTACT
                </Typography>
              </Link>
            </Grid>
          </Container>
        )}
      </AppBar>
    </>
  );
}

export default Header;
