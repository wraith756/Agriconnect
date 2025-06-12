
import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import FeaturesSection from "./FeaturesSection";
import KeyFeaturesSection from "./KeyFeaturesSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import AnimationBackgroundElement from "./AnimationBackgroundElement";

const Landing = () => {
  return (
    <>
      <Navigation />
      <AnimationBackgroundElement />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <KeyFeaturesSection />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default Landing;
