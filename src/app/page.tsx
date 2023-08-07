import { Container } from "@mui/material";
import Header from "./components/Header";
import HeroSection from "./sections/Hero/HeroSection";
import AboutSection from "./sections/About/AboutSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
    </>
  );
}
