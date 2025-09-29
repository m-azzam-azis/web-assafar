"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem } from "@/lib/animations";

const PaketGallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const packages = [
    "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  ];

  return (
    <section id="packages" className="py-20 bg-white">
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
            variants={staggerItem}
          >
            Paket Umroh Kami
          </motion.h2>
          <motion.p className="text-xl text-gray-600" variants={staggerItem}>
            Lihat berbagai pilihan paket umroh yang tersedia
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((img, index) => (
            <motion.div
              key={index}
              className="cursor-pointer rounded-2xl overflow-hidden shadow-lg"
              onClick={() => setSelectedImage(img)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedImage(img);
                }
              }}
              aria-label={`Lihat detail paket ${index + 1}`}
              variants={staggerItem}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={img}
                alt={`Paket ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://placehold.co/600x400?text=Image+Not+Available";
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <Image
                src={selectedImage}
                alt="Paket Detail"
                className="max-w-full max-h-full object-contain rounded-lg"
                width={800}
                height={400}
              />
            </div>
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default PaketGallerySection;
