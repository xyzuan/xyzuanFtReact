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
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const { resolvedTheme } = useTheme();
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
    <AppBar
      position="sticky"
      sx={{
        position: "sticky",
        background:
          resolvedTheme === "dark"
            ? "rgba(46, 46, 46, 0.9)"
            : "rgba(255, 255, 255, 0.7)",
        color: resolvedTheme === "dark" ? "#ffffff" : "#000000",
        boxShadow: "none",
        minHeight: "80px",
      }}
    >
      <Toolbar
        sx={{
          height: "100px",
          scale: isSticky ? "98%" : "100%",
          transition: "0.3s ease-in-out",
          backdropFilter: "blur(24px)",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Image
            width={mobile ? "58" : "142"}
            height="58"
            src={
              mobile
                ? resolvedTheme === "dark"
                  ? "/assets/xyzuan.svg"
                  : "/assets/xyzuan-dark.svg"
                : resolvedTheme === "dark"
                ? "/assets/xyzuanland.svg"
                : "/assets/xyzuanland-dark.svg"
            }
            alt="xyzuan"
            style={{
              width: "auto",
            }}
          />
          <Box flexGrow={1} />
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexGrow: 1,
              width: mobile ? 0 : "auto",
              height: mobile ? 0 : "auto",
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
          <ThemeToggle />
          <IconButton
            onClick={toggleNavbar}
            sx={{
              width: mobile ? "42" : "0",
              height: mobile ? "52" : "0",
              visibility: mobile ? "visible" : "hidden",
            }}
          >
            <Image
              width={mobile ? "42" : "0"}
              height={mobile ? "52" : "0"}
              src={
                resolvedTheme === "dark"
                  ? "/assets/NavBurger.svg"
                  : "/assets/NavBurger-dark.svg"
              }
              alt="burger"
              style={{
                width: "auto",
              }}
            />
          </IconButton>
        </Container>
      </Toolbar>
      {showNavbar && (
        <Container
          sx={{
            marginTop: "-1px",
            paddingLeft: "32px",
            paddingBottom: "24px",
            backdropFilter: "blur(24px)",
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
  );
}

export default Header;
