"use client";
import React from "react";
import HeroSection from "@/components/sections/HeroSection";
// import AboutSection from "@/components/sections/AboutSection";
import UmrahTypesSection from "@/components/sections/UmrahTypesSections";
import KeunggulanSection from "@/components/sections/KeunggulanSection";
import ArticlesInsightsSection from "@/components/sections/ArticlesInsightsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import MitraSection from "@/components/sections/MitraSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      {/* <AboutSection /> */}
      <UmrahTypesSection />
      <KeunggulanSection />
      <ArticlesInsightsSection />
      <TestimonialSection />
      <MitraSection />

      <FloatingWhatsApp />
    </div>
  );
}
