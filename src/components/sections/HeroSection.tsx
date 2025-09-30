"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Define animation variants for staggered animation
const container = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const item = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, y: 20 },
};

// Helper function to detect mobile devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return isMobile;
};

// Hero Section Component
const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/assets/hero-1.jpg",
    "/assets/hero-2.jpg",
    "/assets/hero-3.jpg",
    "/assets/hero-4.jpg",
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
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${images[0]})`, // Use first image as static image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ) : (
        // Animated slideshow for desktop
        images.map((img, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ scale: 1 }}
            animate={{
              scale: index === currentImage ? 1.1 : 1,
            }}
            transition={{ duration: 5, ease: "easeOut" }}
          />
        ))
      )}

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-3/4 flex justify-center items">
          <motion.div
            className="lg:max-w-2/3 space-y-8  flex flex-col h-full justify-center"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-white/10 backdrop-blur-md shadow-white/20 px-3 py-2 text-white w-fit rounded-full text-xs shadow ring ring-white/20"
              variants={item}
            >
              Feel the experinence
            </motion.div>
            <motion.h1
              className="text-[2.5rem] md:text-7xl font-extrabold text-white mb-6 leading-tight px-2"
              variants={item}
            >
              Perjalanan Umroh dan Haji yang Tak Terlupakan!
            </motion.h1>

            <motion.a
              className="bg-gray-50 text-black px-6 md:px-8 py-3 rounded-full text shadow-lg cursor-pointer flex items-center gap-2 w-fit text-sm md:text-base relative "
              variants={item}
              whileHover={{ scale: 1.05 }}
              href="#packages"
            >
              <motion.span>
                Lihat Paket
                <motion.span
                  className="absolute left-0 -bottom-1 h-[2px] bg-black"
                  variants={{
                    rest: { width: "0%" },
                    hover: { width: "100%" },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
              <ArrowRight className="size-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
