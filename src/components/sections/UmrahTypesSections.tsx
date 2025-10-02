import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";

// Umrah Types Section Component
const UmrahTypesSection = () => {
  const types = [
    {
      title: "Umroh Reguler",
      subtitle: "Cocok untuk semua golongan",
      image: "/umroh-types/umroh-reguler.avif",
      link: "/umrah/regular",
    },
    {
      title: "Umroh Private",
      subtitle: "Untuk kenyamanan Anda",
      image: "/umroh-types/umroh-private.avif",
      link: "/umrah/private",
    },

    {
      title: "Umroh Tahapan",
      subtitle: "Lebih murah seiring waktu",
      image: "/umroh-types/umroh-tahapan.avif",
      link: "/umrah/tahapan",
    },
    {
      title: "Paket Wisata Halal",
      subtitle: "Jelajahi dunia dengan tenang",
      image: "/umroh-types/paket-wisata.avif",
      link: "/umrah/wisata",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50" id="packages">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            Pilihan Paket Travel
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-60"
            variants={staggerItem}
          >
            Temukan paket yang sesuai dengan kebutuhan dan budget Anda
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {types.map((type, index) => (
            <motion.a
              href={type.link}
              key={index}
              className="relative h-64 sm:h-80 rounded-2xl overflow-hidden group cursor-pointer transform transition-colors duration-300 shadow-lg"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80  to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <div className="flex items-center justify-between rounded-xl p-4 sm:p-6 text-white">
                  <div>
                    <motion.h3
                      className="text-xl sm:text-2xl font-bold mb-1"
                      variants={staggerItem}
                    >
                      {type.title}
                    </motion.h3>
                    <motion.p
                      className="text-white/90 text-sm sm:text-base"
                      variants={staggerItem}
                    >
                      {type.subtitle}
                    </motion.p>
                  </div>
                  <ArrowUpRight className="size-6 sm:size-10 text-white flex-shrink-0" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default UmrahTypesSection;
