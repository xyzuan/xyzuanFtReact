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
        I am an Android Developer and Mobile UI/UX Designer currently pursuing a
        major in Informatics Engineering at the University of Muhammadiyah
        Malang. With a passion for creating innovative mobile applications, I
        possess strong skills in Java programming languages, along with
        proficiency in Android Development. My design background enables me to
        develop visually appealing and user-friendly interfaces. Committed to
        continuous learning and staying updated with industry trends, I bring a
        combination of technical expertise, design proficiency, and a strong
        educational foundation to my work.
      </Typography>
    </Grid>
  );
}

export default AboutDesc;
