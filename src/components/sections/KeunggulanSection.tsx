"use client";
import React from "react";
import { Users, CheckCircle, Heart, Shield, Award, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem } from "@/lib/animations";
// Keunggulan Section Component
const KeunggulanSection = () => {
  const keunggulan = [
    { title: "Muthowif Berpengalaman", icon: <Users className="w-6 h-6" /> },
    { title: "Sesuai Sunnah Nabi", icon: <CheckCircle className="w-6 h-6" /> },
    { title: "Harga yang Bersahabat", icon: <Heart className="w-6 h-6" /> },
    {
      title: "Amanat dan Tanggung Jawab",
      icon: <Shield className="w-6 h-6" />,
    },
    { title: "Kenyamanan dan Keamanan", icon: <Award className="w-6 h-6" /> },
    { title: "Dukungan Spiritual", icon: <Star className="w-6 h-6" /> },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-black mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
            variants={staggerItem}
          >
            Keunggulan Kami
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {keunggulan.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md"
                variants={staggerItem}
                whileHover={{
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                  {item.icon}
                </div>
                <span className="text-lg font-semibold text-gray-80">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Keunggulan"
              className="rounded-2xl shadow-2xl"
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
