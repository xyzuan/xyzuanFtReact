import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import PortofolioCard from "./components/PortofolioCard";

function PortofolioSection() {
  const portofolioData = [
    {
      title:
        "2nd Winner of UI/UX Design: Lomba Nasional Kreativitas Mahasiswa LO Kreatif 2022",
      desc: "foodCare, Inovasi Aplikasi Berbagi Makanan Berlebih pada Masyarakat Sekitar",
      img: "/assets/lokreatif.png",
      href: "",
    },
    {
      title: "xdroidOSS Open Source Software",
      desc: "An Android OS with Minimal Design Oriented which offers a streamlined and simplistic user interface that prioritizes minimalism and ease of use.",
      img: "/assets/xd.png",
      href: "https://github.com/xdroid-oss",
    },
    {
      title: "pintarin.",
      desc: "An online learning platform specifically designed for beginners in programming. It offers a comprehensive range of courses and resources to help individuals kickstart their journey in programming and develop essential coding skills.",
      img: "/assets/pintarin.png",
      href: "https://github.com/xyz-prjkt/pintarin",
    },
    {
      title: "jacketLab",
      desc: "Jacket Lab is a comprehensive and user-friendly application specifically designed to streamline the tasks of assistants when it comes to managing jacket-related information. With Jacket Lab, assistants can effortlessly access a wealth of information regarding jackets, including details about different styles, sizes, materials, and colors.",
      img: "/assets/jaketlab.png",
      href: "",
    },
  ];

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
        {portofolioData.map((item, index) => (
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
}

export default PortofolioSection;
