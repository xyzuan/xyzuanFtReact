import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { manrope } from "@/app/constant/fonts";
import TimelineEducation from "./components/TimelineEducation";
import TimelineWork from "./components/TimelineWork";
import useResponsive from "@/app/hooks/useResponsive";

function TimelineSection() {
  const isMobile = useResponsive("down", "lg");

  const educationData = [
    {
      title: "University of Muhammadiyah Malang",
      summary: "2021 - Present • Malang, East Java, Indonesia",
    },
    {
      title: "SMAN 01 Ngunut",
      summary: "2019 - 2021 • Tulungagung, East Java, Indonesia",
    },
  ];

  const workData = [
    {
      logo: "/assets/infinite.svg",
      jobTitle: "Web Developer Mentee",
      instance: "Infinite Learning Indonesia",
      instanceLink: "https://infotech.umm.ac.id",
      address: "Batam, Riau Islands, Indonesia",
      date: "Aug 2023 - Present",
    },
    {
      logo: "/assets/labit.svg",
      jobTitle: "Member of System Information",
      instance: "Informatics Laboratory UMM",
      instanceLink: "https://infotech.umm.ac.id",
      address: "Malang, East Java, Indonesia",
      date: "Jan 2023 - Present",
    },
    {
      logo: "/assets/labit.svg",
      jobTitle: "Laboratory Assistant",
      instance: "Informatics Laboratory UMM",
      instanceLink: "https://infotech.umm.ac.id",
      address: "Malang, East Java, Indonesia",
      date: "Jul 2022 - Present",
    },
    {
      logo: "/assets/lingkup.svg",
      jobTitle: "AOSP Developer",
      instance: "PT Lingkup Total Technology",
      instanceLink: "https://lingkup.co.id",
      address: "Jakarta Timur, DKI Jakarta, Indonesia",
      date: "Feb 2022 - Dec 2022",
    },
    {
      logo: "/assets/xd.svg",
      jobTitle: "AOSP Developer",
      instance: "xdroidOSS",
      instanceLink: "https://github.com/xdroidoss",
      address: "Malang, East Java, Indonesia",
      date: "Jan 2021 - Present",
    },
  ];

  return (
    <Container
      disableGutters
      id="timeline"
      sx={{
        paddingTop: "32px",
        paddingX: "34px",
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

      <Grid
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Container disableGutters>
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
          <TimelineEducation events={educationData} />
        </Container>
        <Grid>
          <Typography
            className={`${manrope.className}`}
            sx={{
              fontWeight: "500",
              fontSize: "14",
              fontSmooth: "always",
              userSelect: "none",
              paddingTop: "18px",
            }}
          >
            Work Experience
          </Typography>
          <Grid container spacing="24px" sx={{ paddingTop: "24px" }}>
            {workData.map((item) => (
              <Grid item xs={12} sm={6} md={4}>
                <TimelineWork
                  logo={item.logo}
                  jobTitle={item.jobTitle}
                  instance={item.instance}
                  instanceLink={item.instanceLink}
                  address={item.address}
                  date={item.date}
                />
              </Grid>
            ))}
          </Grid>

          {/* <TimelineWork events={workData} /> */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default TimelineSection;
