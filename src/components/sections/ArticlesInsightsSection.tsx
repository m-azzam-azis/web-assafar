import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const ArticlesInsightsSection = () => {
  // Sample articles data - in a real implementation, this would come from a CMS or database
  const articles = [
    {
      id: 1,
      title: "Persiapan Mental Sebelum Berangkat Umroh",
      excerpt:
        "Tips penting untuk mempersiapkan mental sebelum menunaikan ibadah umroh agar perjalanan menjadi lebih bermakna dan khusyuk.",
      date: "15 Juni 2024",
    },
    {
      id: 2,
      title: "Destinasi Wisata Halal Terbaik di Turki",
      excerpt:
        "Mengunjungi tempat-tempat wisata yang sesuai dengan prinsip-prinsip Islam di negara yang indah ini.",
      date: "20 Juni 2024",
    },
    {
      id: 3,
      title: "Panduan Praktis Menunaikan Ibadah Umroh",
      excerpt:
        "Langkah-langkah praktis dalam menunaikan ibadah umroh untuk pemula yang ingin mengetahui tata cara yang benar.",
      date: "25 Juni 2024",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
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
            Artikel & Wawasan
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-600"
            variants={staggerItem}
          >
            Temukan informasi, tips, dan wawasan seputar perjalanan umroh, haji,
            dan wisata halal
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={staggerItem}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{article.date}</span>
                  <Link
                    href={`/blog/${article.id}`}
                    className="text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div variants={staggerItem}>
            <Link
              href="/blog"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition-colors duration-300"
            >
              Lihat Semua Artikel
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesInsightsSection;
