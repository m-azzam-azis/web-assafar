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

// Hero Section Component
const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/assets/hero-1.jpg",
    "/assets/hero-2.jpg",
    "/assets/hero-3.jpg",
    "/assets/hero-4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {images.map((img, index) => (
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
      ))}

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="lg:max-w-1/2"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-[2.5rem] md:text-7xl font-extrabold text-white mb-6 leading-tight px-2"
              variants={item}
            >
              Perjalanan Umroh dan Haji yang Tak Terlupakan!
            </motion.h1>

            <motion.a
              className="bg-gray-50 text-black px-6 py-3 rounded-full text font-semibold shadow-lg cursor-pointer flex items-center gap-2 w-fit text-sm md:text-base"
              variants={item}
              whileHover={{ scale: 1.05 }}
              href="#packages"
            >
              Lihat Paket <ArrowRight className="size-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
