import { Container, Grid, LinearProgress } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import BorderLinearProgress from "./BorderLinearProgress";
import { useTheme } from "next-themes";

function Preloader() {
  const [progress, setProgress] = useState(10);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Grid>
        <Image
          height="200"
          width="200"
          alt="xyzuan"
          src={
            theme === "dark"
              ? "/assets/preloader.svg"
              : "/assets/preloader-dark.svg"
          }
          style={{
            width: "auto",
          }}
        />
        <BorderLinearProgress
          variant="determinate"
          value={progress}
          sx={{
            marginTop: "58px",
          }}
        />
      </Grid>
    </Container>
  );
}

export default Preloader;
