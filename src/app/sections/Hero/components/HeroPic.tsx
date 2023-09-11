import { Card, Stack } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import useResponsive from "@/app/hooks/useResponsive";

const HeroPic = ({}) => {
  const { theme } = useTheme();
  const isMobile = useResponsive("down", "lg");

  return (
    <div
      style={{
        position: "relative",
        paddingRight: "24px",
        paddingTop: isMobile ? "24px" : "40px",
      }}
    >
      <Card
        sx={{
          borderRadius: isMobile
            ? "0 999px 999px 0px"
            : "300px 999px 999px 300px",
          height: "260px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "none",
          backgroundColor: theme === "dark" ? "#CDCBCB" : "#F4F4F4",
          backgroundImage: `url("/assets/rect.svg")`,
          transition: "0.3s ease-in-out",
          "@media (min-width: 1024px)": {
            minWidth: "490px",
            maxWidth: "500px",
            minBlockSize: "360px",
            minHeight: "75%",
            maxHeight: "80%",
          },
        }}
      >
        <Stack position="relative">
          <Image
            width="50"
            height="50"
            alt="pill"
            src="/assets/pill.svg"
            style={{
              zIndex: 1,
              position: "absolute",
              userSelect: "none",
              scale: isMobile ? "100%" : "170%",
              right: 50,
              bottom: isMobile ? 1 : -50,
              animation: "rotate 2.9s ease-out infinite",
            }}
          />
          <Image
            height="150"
            width="150"
            alt="frontend"
            src="/assets/frontend.svg"
            style={{
              paddingTop: isMobile ? "24px" : "40px",
              paddingLeft: isMobile ? "24px" : "40px",
              scale: isMobile ? "100%" : "150%",
              zIndex: 2,
              userSelect: "none",
            }}
          />
          <Image
            width="1000"
            height="0"
            src="/assets/xyzuanhero.png"
            alt="xyzuan"
            style={{
              position: "absolute",
              top: 0,
              userSelect: "none",
              width: isMobile ? "80%" : "100%",
              right: isMobile ? 0 : -80,
              filter: "grayscale(100%)",
              zIndex: 3,
            }}
          />
          <Image
            width="50"
            height="50"
            alt="poly"
            src="/assets/polygon.svg"
            style={{
              width: "auto",
              zIndex: 1,
              position: "absolute",
              userSelect: "none",
              scale: isMobile ? "100%" : "130%",
              left: 30,
              bottom: isMobile ? -80 : -180,
              animation: "rotate 3.5s ease-out infinite",
            }}
          />
        </Stack>
      </Card>
      <div
        style={{
          position: "absolute",
          right: isMobile ? "32px" : "90px",
          top: isMobile ? "8px" : "18px",
          zIndex: 1,
          animation: "rotate 3.7s ease-out infinite",
          userSelect: "none",
          scale: isMobile ? "100%" : "120%",
        }}
      >
        <Image
          width="90"
          height="90"
          alt="star"
          src={theme === "dark" ? "/assets/star.svg" : "/assets/star-dark.svg"}
          style={{
            position: "relative",
            width: "auto",
            transition: "0.3s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default HeroPic;
