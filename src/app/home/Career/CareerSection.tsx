// @react
import { useMemo, useState } from "react";
import { useTheme } from "next-themes";

// @mui
import { Container, Grid, Link, Typography } from "@mui/material";

// @components
import WorkCard from "./components/WorkCard";
import EducationTime from "./components/EducationTime";

// @utils
import useResponsive from "@/utils/useResponsive";

// @constant
import { apiURI } from "@/constant/api";
import { manrope } from "@/constant/fonts";

// @types
import { Education } from "@/types/Education";
import { Work } from "@/types/Work";

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

  // APIs Data
  const [educations, setEducations] = useState<Education[]>([]);
  const [works, setWorks] = useState<Work[]>([]);
  useMemo(() => {
    fetch(`${apiURI}/educations`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const extractedEducations = data.educations;
        setEducations(extractedEducations);
      });
    fetch(`${apiURI}/works`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const extractedWorks = data.works;
        setWorks(extractedWorks);
      });
  }, []);

  return (
    <Container
      disableGutters
      id="career"
      data-aos="fade-up"
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
              paddingBottom: "18px",
            }}
          >
            Education History
          </Typography>
          {educations.map((item) => (
            <EducationTime
              key={item.id}
              id={item.id}
              instance={item.instance}
              date={item.date}
              address={item.address}
            />
          ))}
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
            {works.map((item) => (
              <Grid data-aos="fade-up" key={item.id} item xs={12} sm={6}>
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
