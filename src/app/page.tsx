"use client";

import Header from "./components/Header";
import HeroSection from "./sections/Hero/HeroSection";
import AboutSection from "./sections/About/AboutSection";
import Footer from "./components/Footer";
import PortofolioSection from "./sections/Portfolio/PortofolioSection";
import ContactSection from "./sections/Contact/ContactSection";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";

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
    if (showPreloader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showPreloader]);

  return (
    <>
      <div className={`fade-animation ${contentVisible ? "hide-content" : ""}`}>
        {showPreloader && <Preloader />}
        <div
          style={{
            opacity: contentVisible ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <Header />
          <HeroSection />
          <AboutSection />
          <PortofolioSection />
          {/* <TimelineSection /> */}
          <ContactSection />
          <Footer />
        </div>
      </div>
    </>
  );
}
