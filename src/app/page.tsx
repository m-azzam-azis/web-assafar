"use client";
import React from "react";
import HeroSection from "@/components/sections/HeroSection";
// import AboutSection from "@/components/sections/AboutSection";
import UmrahTypesSection from "@/components/sections/UmrahTypesSections";
import TahapanUmrohSection from "@/components/sections/TahapanSection";
import KeunggulanSection from "@/components/sections/KeunggulanSection";
import PaketGallerySection from "@/components/sections/PaketGallerySection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import MitraSection from "@/components/sections/MitraSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      {/* <AboutSection /> */}
      <UmrahTypesSection />
      <TahapanUmrohSection />
      <KeunggulanSection />
      <PaketGallerySection />
      <TestimonialSection />
      <MitraSection />

      <FloatingWhatsApp />
    </div>
  );
}
