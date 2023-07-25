import {
  AppBar,
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import HeroTitle from "./sections/Hero/HeroTitle";
import HeroPic from "./sections/Hero/HeroPic";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "transparent",
          color: "#fff",
          boxShadow: "none",
          height: "120px",
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
              <Image
                width="52"
                height="52"
                src="/assets/NavBurger.svg"
                alt=""
              />
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>
      <Container
        sx={{
          height: 1,
          display: "flex",
          flexDirection: "column",
          "@media (min-width: 1024px)": {
            flexDirection: "row",
          },
        }}
      >
        <HeroPic />
        <Box sx={{ flexGrow: 1 }} />
        <HeroTitle />
      </Container>
    </>
  );
}
