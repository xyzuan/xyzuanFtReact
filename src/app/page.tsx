import { Container } from "@mui/material";
import Header from "./components/Header";
import HeroSection from "./sections/Hero/HeroSection";
import AboutSection from "./sections/About/AboutSection";
import Footer from "./components/Footer";
import PortofolioSection from "./sections/Portfolio/PortofolioSection";
import TimelineSection from "./sections/Timeline/TimelineSection";
import ContactSection from "./sections/Contact/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <PortofolioSection />
      {/* <TimelineSection /> */}
      <ContactSection />
      <Footer />
    </>
  );
}
