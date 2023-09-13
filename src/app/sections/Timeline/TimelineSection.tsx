import React from "react";
import { Container, Typography } from "@mui/material";
import TimelineComponent from "./components/TimelineItem";
import { manrope } from "@/app/constant/fonts";

function TimelineSection() {
  const educationData = [
    {
      title: "University of Muhammadiyah Malang",
      summary: "2021 - Present | Malang, East Java, Indonesia",
    },
    {
      title: "SMAN 01 Ngunut",
      summary: "2019 - 2021 | Tulungagung, East Java, Indonesia",
    },
  ];

  const labit = [
    {
      title: "Member of System Information Infotech",
      summary: "2021- Present | Malang, East Java, Indonesia",
    },
    {
      title: "Laboratory Assistant",
      summary: "2019 - 2021 | Tulungagung, East Java, Indonesia",
    },
  ];

  return (
    <Container
      id="timeline"
      style={{
        padding: "34px",
      }}
    >
      <Typography
        style={{
          fontFamily: "Laviossa",
          fontSize: "48px",
          userSelect: "none",
        }}
      >
        Timeline
      </Typography>

      <Typography
        className={`${manrope.className}`}
        sx={{
          fontWeight: "500",
          fontSize: "14",
          fontSmooth: "always",
          userSelect: "none",
        }}
      >
        Education History
      </Typography>
      <TimelineComponent events={educationData} />
    </Container>
  );
}

export default TimelineSection;
