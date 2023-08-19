"use client";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HeroSection from "./sections/Hero/HeroSection";
import AboutSection from "./sections/About/AboutSection";
import PortofolioSection from "./sections/Portfolio/PortofolioSection";

import { useEffect, useState } from "react";
import { useTheme, ThemeProvider } from "next-themes";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const { resolvedTheme } = useTheme();

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
          <ThemeProvider attribute="class">
            <div
              style={{
                transition: "0.3s ease-in-out",
                backgroundColor:
                  resolvedTheme === "dark" ? "#2e2e2e" : "#FFFFFF",
              }}
            >
              <Header />
              <HeroSection />
              <AboutSection />
              <PortofolioSection />
              <Footer />
            </div>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}
