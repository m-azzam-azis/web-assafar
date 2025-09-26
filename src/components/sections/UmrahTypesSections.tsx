import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem } from "@/lib/animations";
// Umrah Types Section Component
const UmrahTypesSection = () => {
  const types = [
    {
      title: "Umroh Private",
      subtitle: "Untuk kenyamanan Anda",
      image: "/umroh-types/private.jpg",
    },
    {
      title: "Umroh Reguler",
      subtitle: "Cocok untuk semua golongan",
      image: "/umroh-types/reguler.jpg",
    },
    {
      title: "Umroh Tahapan",
      subtitle: "Lebih murah seiring waktu",
      image: "/umroh-types/tahapan.jpg",
    },
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
            Pilihan Paket Umroh
          </motion.h2>
          <motion.p className="text-xl text-gray-60" variants={staggerItem}>
            Temukan paket yang sesuai dengan kebutuhan dan budget Anda
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {types.map((type, index) => (
            <motion.div
              key={index}
              className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer transform transition-colors duration-300 shadow-lg"
              variants={staggerItem}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <Image
                width={400}
                height={400}
                src={type.image}
                alt={type.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
                  <motion.h3
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                    variants={staggerItem}
                  >
                    {type.title}
                  </motion.h3>
                  <motion.p className="text-white/90" variants={staggerItem}>
                    {type.subtitle}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default UmrahTypesSection;
