"use client";

import Header from "./components/Header";
import HeroSection from "./sections/Hero/HeroSection";
import AboutSection from "./sections/About/AboutSection";
import Footer from "./components/Footer";
import PortofolioSection from "./sections/Portfolio/PortofolioSection";
import ContactSection from "./sections/Contact/ContactSection";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Head from "next/head";

export default function Home() {
  const siteTitle =
    "Jody Yuantoro | Frontend Developer &amp; Mobile UI/UX Designer";
  const siteDesc =
    "Welcome to Jody Yuantoro's Portfolio Website. Explore a collection of my creative projects, designs, and accomplishments. Discover how I bring ideas to life through innovative design and development.";
  const siteKey =
    "Jody Yuantoro, Frontend Developer, Mobile UI/UX Designer, Android Developer, Malang, Responsive Web Design, User Experience, Web Development, optimized user experiences, Malang-based";

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
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{siteTitle}</title>
        <meta property="title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta name="description" content={siteDesc} />
        <meta property="og:description" content={siteDesc} />
        <meta name="keywords" content={siteKey} />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/xyzuan/xyzuanFtReact/main/public/assets/xyzuanbanner.png"
        />
        <meta property="og:image:alt" content="xyzuan" />
        <meta property="og:url" content="https://xyzuan.my.id/" />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:type" content="website" />
      </Head>
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
