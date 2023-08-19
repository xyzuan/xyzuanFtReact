import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PortofolioCard from "./components/PortofolioCard";
import { useTheme } from "next-themes";
import { darkTheme, lightTheme } from "@/app/style/themes";

interface PortfolioItem {
  _id: string;
  title: string;
  desc: string;
  img: string;
  href: string;
}

function PortofolioSection() {
  const { resolvedTheme } = useTheme();
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
        backgroundColor: resolvedTheme === "dark" ? "#2e2e2e" : "#ffffff",
        color: resolvedTheme === "dark" ? "#FFFFFF" : "#000000",
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
