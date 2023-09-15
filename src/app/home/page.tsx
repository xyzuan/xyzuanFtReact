"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import Aos from "aos";
import "aos/dist/aos.css";

import AdminHeader from "@/components/AdminHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import HeroSection from "./Hero/HeroSection";
import AboutSection from "./About/AboutSection";
import CareerSection from "./Career/CareerSection";
import PortofolioSection from "./Portfolio/PortofolioSection";

export default function HomePage() {
  const [contentVisible, setContentVisible] = useState(false);
  const { status } = useSession();

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
      {status === "authenticated" && <AdminHeader />}
      <Header />
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <PortofolioSection />
      <Footer />
    </div>
  );
}
