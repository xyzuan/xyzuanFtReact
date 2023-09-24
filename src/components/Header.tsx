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
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";
import useResponsive from "@/utils/useResponsive";
import { manrope } from "@/constant/fonts";

function Header() {
  const { theme } = useTheme();
  const isMobile = useResponsive("down", "lg");
  const [isSticky, setIsSticky] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

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
        background: theme === "dark" ? "#121212" : "rgba(255, 255, 255, 0.7)",
        color: theme === "dark" ? "#ffffff" : "#000000",
        boxShadow: "none",
        minHeight: "80px",
      }}
    >
      <Toolbar
        sx={{
          height: "100px",
          backdropFilter: "blur(24px)",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            overflow: "hidden",
            scale: isSticky ? "98%" : "100%",
            transition: "0.3s ease-in-out",
          }}
        >
          <Link href="/admin" color="inherit" underline="none">
            <Image
              width={isMobile ? "58" : "142"}
              height="58"
              src={
                isMobile
                  ? theme === "dark"
                    ? "/assets/xyzuan.svg"
                    : "/assets/xyzuan-dark.svg"
                  : theme === "dark"
                  ? "/assets/xyzuanland.svg"
                  : "/assets/xyzuanland-dark.svg"
              }
              alt="xyzuan"
              style={{
                width: "auto",
              }}
            />
          </Link>
          <Box flexGrow={1} />
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexGrow: 1,
              width: isMobile ? 0 : "auto",
              height: isMobile ? 0 : "auto",
              visibility: isMobile ? "hidden" : "visible",
            }}
          >
            <Link href="#about" color="inherit" underline="none">
              <Typography
                className={`${manrope.className}`}
                sx={{
                  fontWeight: "medium",
                  padding: "12px",
                }}
              >
                ABOUT
              </Typography>
            </Link>
            <Link href="#career" color="inherit" underline="none">
              <Typography
                className={`${manrope.className}`}
                sx={{
                  fontWeight: "medium",
                  padding: "12px",
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
                  padding: "12px",
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
                  padding: "12px",
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
              width: isMobile ? "42" : "0",
              height: isMobile ? "52" : "0",
              visibility: isMobile ? "visible" : "hidden",
            }}
          >
            <Image
              width={isMobile ? "42" : "0"}
              height={isMobile ? "52" : "0"}
              src={
                theme === "dark"
                  ? "/assets/NavBurger.svg"
                  : "/assets/NavBurger-dark.svg"
              }
              alt="burger"
              style={{
                width: "52",
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
                className={`${manrope.className}`}
                sx={{
                  fontWeight: "medium",
                  padding: "12px",
                }}
              >
                ABOUT
              </Typography>
            </Link>
            <Link href="#career" color="inherit" underline="none">
              <Typography
                className={`${manrope.className}`}
                sx={{
                  fontWeight: "medium",
                  padding: "12px",
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
                  padding: "12px",
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
                  padding: "12px",
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
