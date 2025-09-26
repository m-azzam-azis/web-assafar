"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const TahapanUmrohSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-12 shadow-xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-black mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
            variants={staggerItem}
          >
            Tahapan Umroh
          </motion.h2>
          <motion.p
            className="text-xl text-yellow-600 mb-8 font-medium"
            variants={staggerItem}
          >
            Langkah kecil menuju Baitullah
          </motion.p>

          <motion.div
            className="text-lg text-gray-700 leading-relaxed mb-8"
            variants={staggerItem}
          >
            <p>
              Yuk, gabung dengan program tahapan umroh! Bisa umroh loh hanya
              dengan <strong>16 JT*</strong>. Tahapan umroh adalah program
              tabungan yang dibuat dengan pola sistem referensi. Dan ada reward
              atau ujroh untuk calon jamaah yang mengikuti program tahapan umroh
              sebesar
              <strong> Rp.500.000</strong> (lima ratus ribu rupiah). Para calon
              jamaah menabung di rekening sendiri di bank BSI.
            </p>
          </motion.div>

          <motion.button
            className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold mb-6"
            variants={staggerItem}
            whileHover={{ backgroundColor: "#1f2937", scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Daftar Sekarang <ArrowRight className="inline ml-2 w-5 h-5" />
          </motion.button>

          <motion.p
            className="text-sm text-gray-500 italic"
            variants={staggerItem}
          >
            *syarat dan ketentuan berlaku
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
export default TahapanUmrohSection;
