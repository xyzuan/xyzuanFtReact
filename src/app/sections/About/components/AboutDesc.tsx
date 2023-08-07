import { Grid, Typography } from "@mui/material";
import React from "react";

function AboutDesc() {
  return (
    <Grid
      sx={{
        padding: "24px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Laviossa",
          fontSize: "42px",
          paddingTop: "24px",
        }}
      >
        Hi,
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "100",
        }}
      >
        Hi, I&apos;m Jody Yuantoro, a third-year undergraduate student majoring
        in Informatics at the University of Muhammadiyah Malang. I&apos;m an
        enthusiastic Software Engineer who enjoys both design and coding.
        I&apos;m constantly eager to learn and improve my skills in order to
        provide the most value to the company for which I will work.
      </Typography>
    </Grid>
  );
}

export default AboutDesc;
