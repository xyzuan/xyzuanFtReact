import React, { useState } from "react";
import { Typography, Box, Stack, Card, Grid, Link } from "@mui/material";
import { manrope } from "@/constant/fonts";
import { useTheme } from "next-themes";
import Image from "next/image";
import useResponsive from "@/utils/useResponsive";

interface WorkCardProps {
  logo: any;
  jobTitle: string;
  instance: string;
  instanceLink: string;
  address: string;
  date: string;
}

function WorkCard({
  logo,
  jobTitle,
  instance,
  instanceLink,
  address,
  date,
}: WorkCardProps) {
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
        boxShadow: isHovered ? "0 0 30px rgba(128, 128, 128, 0.4)" : "none",
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
          <img
            width="52"
            height="52"
            src={logo}
            alt={logo}
            style={{
              marginRight: "18px",
              transition: "0.3s ease",
              WebkitFilter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
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

export default WorkCard;
