import React from "react";
import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import Image from "next/image";

function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#2e2e2e",
        color: "#fff",
        boxShadow: "none",
        height: "80px",
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
            height: 1,
            flexDirection: "row",
          }}
        >
          <Image width="58" height="58" src="/assets/xyzuan.svg" alt="" />
          <Box sx={{ flexGrow: 1 }} />
          <IconButton>
            <Image width="42" height="52" src="/assets/NavBurger.svg" alt="" />
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
