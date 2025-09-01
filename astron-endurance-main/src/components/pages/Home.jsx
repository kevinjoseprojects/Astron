"use client";
import React, { useEffect, useState } from "react";
import Navigation from "../common/Navigation";
import Loading from "../common/Loading";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import CompetitionsSection from "../sections/CompetitionsSection";
import SponsorSection from "../sections/SponsorSection";
import ContactSection from "../sections/ContactSection";
import { ScrollProgress } from "../ui/scroll-progress";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <CompetitionsSection />
        <SponsorSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
