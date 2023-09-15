"use client";

import Header from "@/components/Header";
import Aos from "aos";
import { useEffect, useState } from "react";
import HeroSection from "./Hero/HeroSection";
import AboutSection from "./About/AboutSection";
import CareerSection from "./Career/CareerSection";
import PortofolioSection from "./Portfolio/PortofolioSection";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
import { Typography } from "@mui/material";

export default function HomePage() {
  const { data: session } = useSession();
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContentVisible(true);
    }, 1);
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      style={{
        opacity: contentVisible ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <Header />
      <Typography>{JSON.stringify(session)}</Typography>
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <PortofolioSection />
      <Footer />
    </div>
  );
}
