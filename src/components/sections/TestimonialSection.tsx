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
import Image from "next/image";

// Testimonial Section Component
const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Bapak Saleh",
      title: "Maret 2015",
      quote:
        "Alhamdulillah, program Umroh bersama keluarga Asaafar Iman telah selesai, ilmu yg di sampaikan sangat mendalam dan sesuai sunnah. Terimakasih Assafar Iman atas perjalanan spiritual yang tak terlupakan. Umroh bersama Assafar adalah pilihan yg terbaik",
      image: "/testimonial/saleh.png",
    },
    {
      id: 2,
      name: "Ahlam",
      title: "Februari 2023",
      quote:
        "Selama umroh bersama PT Assafar Iman Bersama dibimbing Ustadz dan tim Assafar. kesan yang Indah karna bisa menjalankan ibadah dengan kebersamaan dan suasana kekeluargaan. Hotel di Mekkah dan Madinah sangat dekat dengan masjid. Semoga bisa kembali umroh bersama keluarga",
      image: "/testimonial/cirebon.png",
    },
    {
      id: 3,
      name: "Keluarga Bapak M.Lutfi Ali",
      title: "Februari 2018",
      quote:
        "Alhamdulillah keinginan kami untuk Umroh bersama keluarga besar dapat terlaksana dengan bantuan PT. Assafar Iman Amanah, letak hotel baik Madinah maupun Mekkah dekat dari masjid dan dengan pelayanan muthowif yang sangat membantu kami terimakasih travel Assafar Iman Amanah",
      image: "/testimonial/lutfi.png",
    },
    {
      id: 4,
      name: "Ibu Dwiyani dan Mertua",
      title: "Februari 2017",
      quote:
        "Pelayanannya dari awal sampai akhir bener2 luar biasa... sangat amat terbantu.. Selama di Madinah dan Mekkah hotelnya bagus dan dekat, sehingga aksesnya mudah ke masjid.. Saat mama sakit dan kecapean tim disana sigap selalu dan update selalu",
      image: "/testimonial/dwi.png",
    },
    {
      id: 5,
      name: "Bapak Saleh Baisa dan Ibu Nazira badeges",
      title: "Februari 2023",
      quote:
        "Saya sangat puas dengan pelayanan Assafar Iman tour travel dari mulai manasik, keberangkatan dan hotel bintang 5 yang tidak jauh baik dari Masjid Nabawi dan Masjidil Haram dan kami mendapat juga bimbingan selama disana. Insya Allah ketika kami akan berangkat lagi Assafar Iman menjadi pilihan kami. Terimakasih Assafar Iman tour travel",
      image: "/testimonial/saleh-1.png",
    },
    {
      id: 6,
      name: "Revalina dan Suami",
      title: "Februari 2017",
      quote:
        "Alhamdulillah udh selsai umroh tadi mlm sama suami n temen2 dr travel @assafariman . Mudah2an diterima oleh Allah SWT dan berkah. Bersyukur bgt bisa diundang jd tamu Allah ke mekah dan madinah. Semoga bisa kembali lagi kesini sama keluarga tercinta",
      image: "/testimonial/revalina-1.png",
    },
    {
      id: 7,
      name: "Faransyah Jaya",
      title: "Umroh + Dubai Februari 2016",
      quote:
        "Alhamdulillah saya Faransyah dan keluarga merasakan suasana pada saat itu bagus sekali begitupun untuk pelayannya. Mulai dari hotel, juga bisa sholat beribadah berjamaah tidak ada halangan apapun. Kami juga bisa melakukan ibadah towaf berkali kali dan bisa ke roudhoh, Alhamdulillah. Kami sangat mengucapkan terimakasih banyak untuk Assafar Iman Amanah, Semoga semakin baik dan Jaya.",
      image: "/testimonial/faran-1.png",
    },
    {
      id: 8,
      name: "Rombongan Umroh Al Azhar Bekasi",
      title: "Februari 2024",
      quote:
        "Alhamdulillah terima kasih untuk travel Assafar Iman senang bisa umroh bersama assafar dan menjadi pengalaman luar biasa sejak di madinah hingga ke Makkah terimakasih juga atas bimbingannya kepada kami hingga pulang ke tanah air.",
      image: "/testimonial/azhar-1.png",
    },
    {
      id: 9,
      name: "Rombongan Bpk Okto Setiawan",
      title: "Desember 2023",
      quote:
        "kami mengucapkan jazakumullahu khairan kepada travel Assafar iman atas kebersamaan dan bimbingannya mulai dari sebelum keberangkatan dan ketika pelaksanaan ibadah umroh, semoga ibadah umroh kami menjadi umroh yang mabrur.",
      image: "/testimonial/okto.png",
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
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="bg-gray-900 h-full flex flex-col ">
                    <CardContent className="flex flex-col items-center p-6 text-start flex-grow">
                      <div className="text-gray-200 mb-4 italic line-clamp-6">
                        &ldquo;{testimonial.quote}&rdquo;
                      </div>
                      <div className="text-white mt-auto flex gap-4 items-start justify-start w-full">
                        <div>
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={60}
                            height={60}
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
