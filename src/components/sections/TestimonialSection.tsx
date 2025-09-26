import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Autoplay from "embla-carousel-autoplay";

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
      name: "Ahmad Fauzi",
      title: "Januari 2024",
      quote:
        "Pelayanan yang sangat memuaskan. Tim Assafar benar-benar profesional dan membantu perjalanan umroh saya menjadi pengalaman yang tak terlupakan.",
    },
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

  const [, setCurrentIndex] = useState(0);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Testimoni Jamaah
          </motion.h2>
          <motion.p className="text-xl text-gray-300" variants={staggerItem}>
            Kepuasan jamaah adalah kebanggaan kami
          </motion.p>
        </motion.div>

        <div className="flex justify-center">
          <Carousel
            className="w-full max-w-6xl"
            plugins={[
              Autoplay({
                delay: 3000, // 2 seconds delay
                stopOnMouseEnter: true,
                stopOnInteraction: false,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
              duration: 20, // Animation duration
            }}
            setApi={(api) => {
              if (api) {
                api.on("select", () => {
                  setCurrentIndex(api.selectedScrollSnap());
                });
              }
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="p-1">
                    <Card className="bg-gray-800 border-gray-700 h-full">
                      <CardContent className="flex items-center justify-center p-6 text-center">
                        <div>
                          <p className="text-lg text-gray-200 mb-4 italic">
                            &ldquo;{testimonial.quote}&rdquo;
                          </p>
                          <div className="text-white">
                            <h4 className="font-semibold">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Removing navigation arrows as requested */}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
