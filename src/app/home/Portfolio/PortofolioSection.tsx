"use client";

import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { manrope } from "@/constant/fonts";

import PortofolioCard from "./components/PortofolioCard";
import { PortfolioItem } from "@/types/Portofolio";
import { apiURI } from "@/constant/api";

function PortofolioSection() {
  const { theme } = useTheme();
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);

  useMemo(() => {
    fetch(`${apiURI}/portfolios`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const extractedPortfolios = data.portfolios;
        setPortfolio(extractedPortfolios);
      });
  }, []);

  return (
    <Container
      id="portofolio"
      style={{
        color: theme === "dark" ? "#FFFFFF" : "#000000",
        padding: "34px",
        transition: "0.3s ease-in-out",
      }}
    >
      <Typography
        style={{
          fontFamily: "Laviossa",
          fontSize: "48px",
          userSelect: "none",
        }}
      >
        Portfolio
      </Typography>
      <Typography
        className={`${manrope.className}`}
        sx={{
          fontSize: "14",
          fontSmooth: "always",
          paddingBottom: "24px",
          userSelect: "none",
        }}
      >
        A collection of my past recent works. Feel free to take a look to get a
        grasp of my style
      </Typography>
      <Grid container spacing="24px">
        {portfolio.map((item) => (
          <Grid data-aos="fade-up" key={item.id} item xs={12} sm={6} md={4}>
            <PortofolioCard
              title={item.title}
              desc={item.content}
              img={item.img}
              href={item.href}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PortofolioSection;
