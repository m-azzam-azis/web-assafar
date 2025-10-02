"use client";
import React from "react";
import { Users, CheckCircle, Shield, Award, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem } from "@/lib/animations";
// Keunggulan Section Component
const KeunggulanSection = () => {
  const keunggulan = [
    {
      title: "Sesuai Sunnah Nabi",
      description:
        "Kami memastikan bahwa seluruh perjalanan sesuai dengan Sunnah Rasulullah Shalallahu 'Alaihi Wassalam, sehingga ibadah Anda mengikuti contoh terbaik.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Amanat dan Tanggung Jawab",
      description:
        "Kami mengelola setiap aspek perjalanan sebagai amanat, memungkinkan Anda fokus sepenuhnya pada ibadah.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Kenyamanan dan Keamanan",
      description:
        "Kesehatan dan keamanan jamaah adalah prioritas utama, dengan standar keselamatan tinggi di seluruh layanan kami.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Muthowif Berpengalaman",
      description:
        "Setiap kelompok jamaah didampingi oleh Muthowif berpengalaman yang memberikan bimbingan dan pengetahuan tentang tempat-tempat suci.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Dukungan Spiritual",
      description:
        "Kami menyediakan sesi bimbingan dan tanya jawab selama perjalanan untuk memberikan ilmu syari dari Muthowif yang berpengalaman.",
      icon: <Star className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50" id="keunggulan">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 container">
        <motion.div
          className="text-center mb-10 sm:mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4"
            variants={staggerItem}
          >
            Keunggulan Kami
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <motion.div
            className="space-y-4 sm:space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {keunggulan.map((item, index) => (
              <motion.div
                key={index}
                className="p-3 sm:p-4 bg-white rounded-xl shadow-md"
                variants={staggerItem}
                whileHover={{
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center mt-6 md:mt-0"
          >
            <Image
              src="/assets/keunggulan.avif"
              alt="Keunggulan"
              className="rounded-2xl shadow-2xl w-full h-full object-cover max-lg:hidden"
              width={800}
              height={400}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default KeunggulanSection;
