import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PortofolioCard from "./components/PortofolioCard";

interface PortfolioItem {
  _id: string;
  title: string;
  desc: string;
  img: string;
  href: string;
}

function PortofolioSection() {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = "https://api.xyzuan.my.id/portfolio";
    fetch(apiUrl)
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
        padding: "34px",
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
        sx={{
          fontWeight: "100",
          fontSize: "14",
          fontFamily: "Roboto Flex, sans-serif",
          paddingBottom: "24px",
          userSelect: "none",
        }}
      >
        A collection of my past recent works. Feel free to take a look to get a
        grasp of my style
      </Typography>
      <Grid container spacing="24px">
        {portfolio.map((item) => (
          <Grid key={item._id} item xs={12} sm={6} md={4}>
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
