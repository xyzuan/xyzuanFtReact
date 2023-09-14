import { useState } from "react";
import { Container, Grid, Link, Typography } from "@mui/material";
import { manrope } from "@/constant/fonts";
import useResponsive from "@/utils/useResponsive";
import WorkCard from "./components/WorkCard";
import EducationTime from "./components/EducationTime";
import { useTheme } from "next-themes";

function CareerSection() {
  const isMobile = useResponsive("down", "lg");
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
      _id: "01",
      logo: "/assets/infinite.svg",
      jobTitle: "Web Developer Mentee",
      instance: "Infinite Learning Indonesia",
      instanceLink: "https://www.infinitelearning.id/",
      address: "Batam, Riau Islands, Indonesia",
      date: "Aug 2023 - Present",
    },
    {
      _id: "02",
      logo: "/assets/labit.svg",
      jobTitle: "System Information",
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
      _id: "03",
      logo: "/assets/lingkup.svg",
      jobTitle: "AOSP Developer",
      instance: "PT Lingkup Total Technology",
      instanceLink: "https://lingkup.co.id",
      address: "Surabaya, East Java, Indonesia",
      date: "Feb 2022 - Dec 2022",
    },
    {
      _id: "04",
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
      id="career"
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
        Career
      </Typography>

      <Typography
        className={`${manrope.className}`}
        sx={{
          fontSize: "14",
          fontSmooth: "always",
          userSelect: "none",
          paddingBottom: "8px",
        }}
      >
        My professional career journey.
      </Typography>

      <Link
        href="/assets/Jody Yuantoro_ATS_CV.pdf"
        color="inherit"
        underline="none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <svg
            stroke={isHovered ? (theme === "dark" ? "white" : "black") : "gray"}
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              marginTop: "4px",
              transition: "0.2s ease",
            }}
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" x2="12" y1="15" y2="3"></line>
          </svg>
          <Typography
            className={`${manrope.className}`}
            sx={{
              color: isHovered ? "current" : "gray",
              fontWeight: isHovered ? "medium" : "",
              fontSize: "14",
              fontSmooth: "always",
              userSelect: "none",
              paddingBottom: "18px",
              paddingLeft: "12px",
              transition: "0.2s ease",
            }}
          >
            Download Resume
          </Typography>
        </Grid>
      </Link>

      <Grid
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Container
          disableGutters
          sx={{
            paddingBottom: "18px",
          }}
        >
          <Typography
            className={`${manrope.className}`}
            sx={{
              fontWeight: "600",
              fontSize: "14",
              fontSmooth: "always",
              userSelect: "none",
            }}
          >
            Education History
          </Typography>
          <EducationTime events={educationData} />
        </Container>
        <Grid>
          <Typography
            className={`${manrope.className}`}
            sx={{
              fontWeight: "600",
              fontSize: "14",
              fontSmooth: "always",
              userSelect: "none",
            }}
          >
            Work Experience
          </Typography>
          <Grid container spacing="24px" sx={{ paddingTop: "24px" }}>
            {workData.map((item) => (
              <Grid key={item._id} item xs={12} sm={6}>
                <WorkCard
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
        </Grid>
      </Grid>
    </Container>
  );
}

export default CareerSection;
