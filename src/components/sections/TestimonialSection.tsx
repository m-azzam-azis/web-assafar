import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// Testimonial Section Component
const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Ahmad Fauzi",
      title: "Januari 2024",
      quote:
        "Pelayanan yang sangat memuaskan. Tim Assafar benar-benar profesional dan membantu perjalanan umroh saya menjadi pengalaman yang tak terlupakan.",
    },
    {
      name: "Siti Nurhaliza",
      title: "Februari 2024",
      quote:
        "Alhamdulillah, paket umroh reguler sangat sesuai dengan budget dan fasilitas yang diberikan melebihi ekspektasi saya.",
    },
    {
      name: "Budi Santoso",
      title: "Maret 2024",
      quote:
        "Program tahapan umroh memudahkan saya untuk bisa berangkat umroh. Sistem pembayarannya sangat fleksibel dan terpercaya.",
    },
    {
      name: "Fatimah Zahra",
      title: "April 2024",
      quote:
        "Muthowif yang berpengalaman dan hotel yang nyaman. Terima kasih Assafar telah mewujudkan impian spiritual saya.",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Testimoni Jamaah
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Kepuasan jamaah adalah kebanggaan kami
          </motion.p>
        </motion.div>

        <div className="flex justify-center">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
