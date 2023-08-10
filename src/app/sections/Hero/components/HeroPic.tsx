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
        paddingTop: mobile ? "24px" : "40px",
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
          backgroundImage: `url("/assets/rect.svg")`,
          "@media (min-width: 1024px)": {
            minWidth: "490px",
            maxWidth: "500px",
            minBlockSize: "360px",
            minHeight: "45vh",
            maxHeight: "50vh",
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
              paddingTop: mobile ? "24px" : "40px",
              paddingLeft: mobile ? "24px" : "40px",
              scale: mobile ? "100%" : "150%",
              zIndex: 2,
              userSelect: "none",
            }}
          />
          <Image
            width="1000"
            height="0"
            src="/assets/xyzuanhero.png"
            alt=""
            style={{
              position: "absolute",
              top: 0,
              userSelect: "none",
              width: mobile ? "80%" : "100%",
              right: mobile ? 0 : -80,
              filter: "grayscale(100%)",
              zIndex: 3,
            }}
          />
          <Image
            width="50"
            height="50"
            alt=""
            src="/assets/polygon.svg"
            style={{
              zIndex: 1,
              position: "absolute",
              userSelect: "none",
              scale: mobile ? "100%" : "130%",
              left: 30,
              bottom: mobile ? -80 : -180,
              animation: "rotate 3.5s ease-out infinite",
            }}
          />
        </Stack>
      </Card>
      <div
        style={{
          position: "absolute",
          right: mobile ? "32px" : "90px",
          top: mobile ? "8px" : "18px",
          zIndex: 1,
          animation: "rotate 3.7s ease-out infinite",
          userSelect: "none",
          scale: mobile ? "100%" : "120%",
        }}
      >
        <Image
          width="90"
          height="90"
          alt=""
          src="/assets/star.svg"
          style={{
            position: "relative",
          }}
        />
      </div>
    </div>
  );
};

export default HeroPic;
