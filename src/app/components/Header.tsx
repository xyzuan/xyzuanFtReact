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
          background: isSticky ? "rgba(46, 46, 46, 0.9)" : "#2e2e2e",
          color: "#fff",
          boxShadow: "none",
          minHeight: "80px",
          transition: "0.3s ease-in-out",
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
              src={mobile ? "/assets/xyzuan.svg" : "/assets/xyzuanland.svg"}
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
            <Typography
              sx={{
                width: mobile ? "0" : "auto",
                height: mobile ? "0" : "auto",
                visibility: mobile ? "hidden" : "visible",
                fontFamily: "Roboto Flex, sans-serif",
                fontWeight: 100,
                color: "#A5A5A5",
                textAlign: "right",
              }}
            >
              welcome
              <br />~ UwU ~
            </Typography>
            <Typography
              sx={{
                fontWeight: 100,
                color: "#A5A5A5",
              }}
            ></Typography>
            <IconButton onClick={toggleNavbar}>
              <Image
                width={mobile ? "42" : "0"}
                height="52"
                src="/assets/NavBurger.svg"
                alt="burger"
                style={{
                  width: "auto",
                  visibility: mobile ? "visible" : "hidden",
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
    </>
  );
}

export default Header;
