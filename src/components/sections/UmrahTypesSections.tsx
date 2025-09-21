import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// Umrah Types Section Component
const UmrahTypesSection = () => {
  const types = [
    {
      title: "Umroh VIP",
      subtitle: "Untuk kenyamanan Anda",
      image:
        "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Umroh Reguler",
      subtitle: "Cocok untuk semua golongan",
      image:
        "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Umroh Tahapan",
      subtitle: "Lebih murah seiring waktu",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            Pilihan Paket Umroh
          </motion.h2>
          <motion.p
            className="text-xl text-gray-60"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Temukan paket yang sesuai dengan kebutuhan dan budget Anda
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {types.map((type, index) => (
            <motion.div
              key={index}
              className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer transform transition-colors duration-300 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" }, // No delay for hover
              }}
              // Add transition for when unhovered (exit)
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                transition: {
                  scale: { duration: 0.2, ease: "easeOut" }, // Fast scale return
                  opacity: { duration: 0.1, delay: index * 0.9 }, // Keep delay for initial load
                  y: { duration: 0.1, delay: index * 0.9 }, // Keep delay for initial load
                },
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    {type.title}
                  </motion.h3>
                  <motion.p
                    className="text-white/90"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
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
