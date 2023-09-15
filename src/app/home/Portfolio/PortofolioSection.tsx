"use client";

import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { manrope } from "@/constant/fonts";

import PortofolioCard from "./components/PortofolioCard";

interface PortfolioItem {
  _id: string;
  title: string;
  desc: string;
  img: string;
  href: string;
}

function PortofolioSection() {
  const { theme } = useTheme();
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = "https://api.xyzuan.my.id/portfolio";
    const headers = new Headers();
    headers.set(
      "Authorization",
      "Basic " + btoa(process.env.API_USERNAME + ":" + process.env.API_PASSWORD)
    );
    fetch(apiUrl, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        setPortfolio(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
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
          <Grid data-aos="fade-up" key={item._id} item xs={12} sm={6} md={4}>
            <PortofolioCard
              title={item.title}
              desc={item.desc}
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
