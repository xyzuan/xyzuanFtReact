import React from "react";
import { Container, Typography } from "@mui/material";
import TimelineComponent from "./components/TimelineItem";

function TimelineSection() {
  const educationData = [
    {
      title: "University of Muhammadiyah Malang",
      summary: "2021- Present | Malang, East Java, Indonesia",
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
        sx={{
          fontWeight: "100",
          fontSize: "14",
          fontFamily: "Roboto Flex, sans-serif",
          paddingBottom: "24px",
          userSelect: "none",
        }}
      >
        Education
      </Typography>
      <TimelineComponent events={educationData} />
      <Typography
        sx={{
          fontWeight: "100",
          fontSize: "14",
          fontFamily: "Roboto Flex, sans-serif",
          paddingBottom: "24px",
          userSelect: "none",
        }}
      >
        Work Experience
      </Typography>
      <Typography
        sx={{
          fontWeight: "medium",
          fontSize: "16",
          fontFamily: "Roboto Flex, sans-serif",
          userSelect: "none",
        }}
      >
        Laboratorium Informatika UMM
      </Typography>
      <Typography
        sx={{
          color: "#DCDCDC",
          fontWeight: "100",
          fontSize: "12",
          fontFamily: "Roboto Flex, sans-serif",
          userSelect: "none",
        }}
      >
        Malang, East Java, Indoneisa
      </Typography>
      <TimelineComponent events={labit} />
    </Container>
  );
}

export default TimelineSection;
