import { Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import PortofolioCard from "./components/PortofolioCard";

interface PortfolioItem {
  title: string;
  desc: string;
  img: string;
  href: string;
}

const PortofolioSection: React.FC = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[] | undefined>(
    undefined
  );

  useEffect(() => {
    async function fetchPortfolio() {
      try {
        const response = await fetch("/api/getPortfolio");
        const data = await response.json();
        setPortfolio(data.portfolioData);
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      }
    }
    fetchPortfolio();
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
        {portfolio?.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
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
};

export default PortofolioSection;
