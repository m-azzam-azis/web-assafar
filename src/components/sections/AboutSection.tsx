"use client";
import React from "react";
import { Star, Award, Heart } from "lucide-react";
import { motion } from "framer-motion";
const AboutSection = () => {
  const cards = [
    {
      title: "Kualitas Pelayanan",
      content:
        "Tim profesional kami siap membantu Anda 24/7, memastikan kenyamanan dan kepuasan Anda selama perjalanan.",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Pengalaman Bertahun-Tahun",
      content:
        "Dengan pengalaman lebih dari 10 tahun dalam industri ini, kami memahami kebutuhan jamaah dan memberikan layanan yang memuaskan.",
      icon: <Award className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Paket yang Fleksibel",
      content:
        "Kami menawarkan paket yang dapat disesuaikan dengan kebutuhan Anda, baik untuk umroh maupun haji.",
      icon: <Heart className="w-8 h-8 text-yellow-500" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-black mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mengapa Memilih Kami?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-60 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Kepercayaan Anda adalah prioritas utama kami. Dengan dedikasi tinggi
            dan pelayanan prima, kami siap mengantarkan Anda menuju tanah suci
            dengan aman dan nyaman.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Umroh Journey"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <div className="space-y-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{card.icon}</div>
                  <div>
                    <motion.h3
                      className="text-2xl font-bold text-black mb-3"
                      style={{ fontFamily: "Playfair Display, serif" }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-600 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      {card.content}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
