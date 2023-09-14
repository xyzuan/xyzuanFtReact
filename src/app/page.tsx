"use client";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";

import HeroSection from "./home/Hero/HeroSection";
import AboutSection from "./home/About/AboutSection";
import PortofolioSection from "./home/Portfolio/PortofolioSection";
import CareerSection from "./home/Career/CareerSection";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
      setTimeout(() => {
        setContentVisible(true);
      }, 100);
    }, 2000);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      style={{
        opacity: contentVisible ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <Header />
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <PortofolioSection />
      <Footer />
    </div>
  );
}
