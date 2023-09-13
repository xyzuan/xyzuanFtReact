import React, { useState } from "react";
import { Typography, Box, Stack, Card, Grid, Link } from "@mui/material";
import { manrope } from "@/app/constant/fonts";
import { useTheme } from "next-themes";
import Image from "next/image";
import useResponsive from "@/app/hooks/useResponsive";

interface TimelineWorkProps {
  logo: string;
  jobTitle: string;
  instance: string;
  instanceLink: string;
  address: string;
  date: string;
}

function TimelineWork({
  logo,
  jobTitle,
  instance,
  instanceLink,
  address,
  date,
}: TimelineWorkProps) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isMobile = useResponsive("down", "lg");

  return (
    <Card
      sx={{
        boxShadow: isHovered ? "0 0 50px rgba(128, 128, 128, 0.5)" : "none",
        borderRadius: "24px",
        backgroundColor: theme === "dark" ? "#212121" : "#F4F4F4",
        color: theme === "dark" ? "#ffffff" : "#000000",
        transition: "0.1s ease-in-out",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        p={2}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            width="52"
            height="52"
            src={logo}
            alt={logo}
            style={{
              marginRight: "18px",
            }}
          />
          <div>
            <Typography
              className={`${manrope.className}`}
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                userSelect: "none",
              }}
            >
              {jobTitle}
            </Typography>
            <Link href={instanceLink} color="inherit">
              <Typography
                className={`${manrope.className}`}
                sx={{
                  fontWeight: "400",
                  fontSize: "14px",
                  userSelect: "none",
                }}
              >
                {instance}
              </Typography>
            </Link>
            <Typography
              className={`${manrope.className}`}
              sx={{
                fontWeight: "400",
                fontSize: "14px",
                userSelect: "none",
              }}
            >
              {address}
            </Typography>
            <Typography
              className={`${manrope.className}`}
              sx={{
                fontWeight: "400",
                fontSize: "14px",
                userSelect: "none",
              }}
            >
              {date}
            </Typography>
          </div>
        </Grid>
      </Box>
    </Card>
  );
}

export default TimelineWork;
