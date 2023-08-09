"use client";

import { isMobile } from "@/app/utils/themes";
import { Card, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const HeroPic = ({}) => {
  const [mobile, setMobile] = useState(false);

  const updateIsMobile = () => {
    setMobile(isMobile());
  };

  useEffect(() => {
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        paddingRight: "24px",
      }}
    >
      <Card
        sx={{
          borderRadius: "0 999px 999px 0px",
          height: "260px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "none",
          backgroundColor: "#CDCBCB",
          backgroundImage: `url("/assets/HeroCardBG.png")`,
          "@media (min-width: 1024px)": {
            minWidth: "410px",
            maxWidth: "420px",
            minBlockSize: "360px",
            maxHeight: "45vh",
          },
        }}
      >
        <Stack position="relative">
          <Image
            width="50"
            height="50"
            alt=""
            src="/assets/pill.svg"
            style={{
              zIndex: 1,
              position: "absolute",
              userSelect: "none",
              scale: mobile ? "100%" : "170%",
              right: 50,
              bottom: mobile ? 1 : -50,
              animation: "rotate 2.9s ease-out infinite",
            }}
          />
          <Image
            height="150"
            width="150"
            alt=""
            src="/assets/frontend.svg"
            style={{
              paddingTop: "24px",
              paddingLeft: "24px",
              zIndex: 2,
              userSelect: "none",
            }}
          />
          <Image
            width="1000"
            height="0"
            src="/assets/HeroMe.png"
            alt=""
            style={{
              position: "absolute",
              top: 0,
              userSelect: "none",
              width: mobile ? "35vh" : "50vh",
              right: mobile ? 0 : -30,
              zIndex: 3,
            }}
          />
          <Image
            width="50"
            height="50"
            alt=""
            src="/assets/ellipse.svg"
            style={{
              zIndex: 1,
              position: "absolute",
              userSelect: "none",
              scale: mobile ? "100%" : "130%",
              left: mobile ? 100 : 30,
              bottom: mobile ? -80 : -180,
            }}
          />
        </Stack>
      </Card>
      <Image
        width="50"
        height="50"
        alt=""
        src="/assets/ellipse.svg"
        style={{
          zIndex: 1,
          position: "absolute",
          userSelect: "none",
          scale: mobile ? "100%" : "150%",
          right: mobile ? 50 : 90,
          top: 0,
        }}
      />
    </div>
  );
};

export default HeroPic;
