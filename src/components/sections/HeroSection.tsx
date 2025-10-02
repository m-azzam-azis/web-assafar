"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Helper function to detect mobile devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    // Only run once on mount, no resize listener needed
  }, []);

  return isMobile;
};

// Hero Section Component
const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/assets/hero-1.avif",
    "/assets/hero-2.avif",
    "/assets/hero-3.avif",
    "/assets/hero-4.avif",
  ];

  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return; // Don't run the interval on mobile
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {isMobile ? (
        // Single static image for mobile
        <Image
          // src={"/assets/keunggulan.avif"}
          src={images[1]}
          alt="Hero background"
          fill
          className="object-cover"
          quality={75}
          priority
        />
      ) : (
        // Animated slideshow for desktop
        images.map((img, index) => (
          <div key={index} className="absolute inset-0 overflow-hidden">
            <motion.div
              className="relative w-full h-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImage ? 1 : 0,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="w-full h-full"
                initial={{ scale: 1 }}
                animate={{
                  scale: index === currentImage ? 1.1 : 1,
                }}
                transition={{ duration: 5, ease: "easeOut" }}
              >
                <Image
                  src={img}
                  alt={`Hero background ${index + 1}`}
                  fill
                  className="object-cover"
                  quality={100}
                />
              </motion.div>
            </motion.div>
          </div>
        ))
      )}

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-3/4 flex justify-center items">
          <motion.div
            className="lg:max-w-2/3 space-y-8 flex flex-col h-full justify-center"
            // Remove container variants - let content render immediately
          >
            {/* Remove motion.div wrapper, make it static */}
            <div className="bg-white/10 backdrop-blur-md shadow-white/20 px-3 py-2 text-white w-fit rounded-full text-xs shadow ring ring-white/20">
              Feel the experinence
            </div>

            {/* Remove motion.h1 wrapper, make it static */}
            <h1 className="text-[2.5rem] md:text-7xl font-extrabold text-white mb-6 leading-tight px-2">
              Perjalanan Umroh dan Haji yang Tak Terlupakan!
            </h1>

            {/* Keep animation on button - it's below fold */}
            <motion.a
              className="bg-gray-50 text-black px-6 md:px-8 py-3 rounded-full text shadow-lg cursor-pointer flex items-center gap-2 w-fit text-sm md:text-base relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              href="#packages"
            >
              <span>Lihat Paket</span>
              <ArrowRight className="size-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
