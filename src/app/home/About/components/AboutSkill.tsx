import React from "react";

import { skills } from "@/constant/skills";
import StackItem from "./StackItem";
import { Container, Typography } from "@mui/material";

function AboutSkill() {
  return (
    <Container
      disableGutters
      sx={{
        paddingX: "32px",
        paddingBottom: "32px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Laviossa",
          fontSize: "42px",
          userSelect: "none",
          paddingBottom: "18px",
        }}
      >
        My skills,
      </Typography>
      <div
        className="flex flex-wrap gap-6"
        style={{
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {skills?.map((skill, index) => (
          <StackItem key={index} skill={skill} />
        ))}
      </div>
    </Container>
  );
}

export default AboutSkill;
