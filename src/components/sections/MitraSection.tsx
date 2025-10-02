"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem } from "@/lib/animations";
import BranchAccordion from "../BranchAccordion";

// Mitra Section Component
const MitraSection = () => {
  return (
    <>
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
            src="/assets/partnership-bg.avif"
            alt="Partnership"
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={staggerItem}
            >
              Kesempatan Menjadi Mitra Assafar
            </motion.h2>
            <motion.div className="max-w-4xl mx-auto" variants={staggerItem}>
              <p className="lg:text-lg text-white leading-relaxed">
                Kami membuka kesempatan untuk keagenan secara individu atau bagi
                Anda yang ingin menjadi mitra di daerah. Dengan dukungan penuh
                dari tim kami, Anda dapat menawarkan layanan Umrah dan
                pariwisata internasional berkualitas tinggi kepada jamaah di
                komunitas Anda.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className=""
            variants={staggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.button
              className="text-black px-8 py-4 rounded-full text-lg font-semibold mx-auto block cursor-pointer"
              style={{ backgroundColor: "rgb(234 179 8)" }} // yellow-500 equivalent
              whileHover={{
                backgroundColor: "rgb(250 204 21)", // yellow-400
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              whileTap={{ scale: 0.95 }}
            >
              Bergabung Sebagai Mitra
            </motion.button>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-3xl font-bold text-gray-900 mb-8"
              variants={staggerItem}
            >
              Kantor Cabang
            </motion.h3>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <BranchAccordion />
          </div>
        </div>
      </section>
    </>
  );
};

export default MitraSection;
