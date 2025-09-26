"use client";
import React from "react";
import { Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem } from "@/lib/animations";
// Mitra Section Component
const MitraSection = () => {
  const offices = [
    {
      city: "Medan",
      address: "Jl. Gatot Subroto No. 123",
      phone: "+62 21 1234 5678",
    },
    {
      city: "Bogor",
      address: "Jl. Raya Pajajaran No. 456",
      phone: "+62 251 234 5678",
    },
    {
      city: "Bali",
      address: "Jl. Sunset Road No. 789",
      phone: "+62 361 234 5678",
    },
  ];

  return (
    <>
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Partnership"
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
              variants={staggerItem}
            >
              Kesempatan Menjadi Mitra Assafar
            </motion.h2>
            <motion.div className="max-w-4xl mx-auto" variants={staggerItem}>
              <p className="text-xl text-white leading-relaxed">
                Kami membuka kesempatan untuk keagenan secara individu atau bagi
                Anda yang ingin menjadi mitra di daerah. Dengan dukungan penuh
                dari tim kami, Anda dapat menawarkan layanan Umrah dan
                pariwisata internasional berkualitas tinggi kepada jamaah di
                komunitas Anda.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="mb-20"
            variants={staggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold mx-auto block"
              whileHover={{ backgroundColor: "#ca8a04", scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Bergabung Sebagai Mitra
            </motion.button>
          </motion.div>
        </div>
      </section>
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-3xl font-bold text-gray-900 mb-8"
              style={{ fontFamily: "Playfair Display, serif" }}
              variants={staggerItem}
            >
              Kantor Cabang
            </motion.h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-8"
                variants={staggerItem}
              >
                <h4
                  className="text-2xl font-bold mb-4 text-yellow-600"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {office.city}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <p className="text-gray-600">{office.phone}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MitraSection;
