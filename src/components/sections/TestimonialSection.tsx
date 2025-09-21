import React from "react";
import { Users, Star } from "lucide-react";
// Testimonial Section Component
const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Ahmad Fauzi",
      date: "Januari 2024",
      text: "Pelayanan yang sangat memuaskan. Tim Assafar benar-benar profesional dan membantu perjalanan umroh saya menjadi pengalaman yang tak terlupakan.",
      rating: 5,
    },
    {
      name: "Siti Nurhaliza",
      date: "Februari 2024",
      text: "Alhamdulillah, paket umroh reguler sangat sesuai dengan budget dan fasilitas yang diberikan melebihi ekspektasi saya.",
      rating: 5,
    },
    {
      name: "Budi Santoso",
      date: "Maret 2024",
      text: "Program tahapan umroh memudahkan saya untuk bisa berangkat umroh. Sistem pembayarannya sangat fleksibel dan terpercaya.",
      rating: 5,
    },
    {
      name: "Fatimah Zahra",
      date: "April 2024",
      text: "Muthowif yang berpengalaman dan hotel yang nyaman. Terima kasih Assafar telah mewujudkan impian spiritual saya.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Testimoni Jamaah
          </h2>
          <p className="text-xl text-gray-300">
            Kepuasan jamaah adalah kebanggaan kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-300">{testimonial.date}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-200 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;
