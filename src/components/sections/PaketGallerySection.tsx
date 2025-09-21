"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const PaketGallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const packages = [
    "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Paket Umroh Kami
          </h2>
          <p className="text-xl text-gray-600">
            Lihat berbagai pilihan paket umroh yang tersedia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((img, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
            </div>
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
