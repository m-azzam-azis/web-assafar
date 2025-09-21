import React from "react";
import { Phone, MapPin } from "lucide-react";
import Image from "next/image";
// Mitra Section Component
const MitraSection = () => {
  const offices = [
    {
      city: "Medan",
      address: "Jl. Gatot Subroto No. 123",
      phone: "+62 21 1234 5678",
    },
    {
      city: "Bogor",
      address: "Jl. Raya Pajajaran No. 456",
      phone: "+62 251 234 5678",
    },
    {
      city: "Bali",
      address: "Jl. Sunset Road No. 789",
      phone: "+62 361 234 5678",
    },
  ];

  return (
    <>
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Partnership"
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Kesempatan Menjadi Mitra Assafar
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-white leading-relaxed">
                Kami membuka kesempatan untuk keagenan secara individu atau bagi
                Anda yang ingin menjadi mitra di daerah. Dengan dukungan penuh
                dari tim kami, Anda dapat menawarkan layanan Umrah dan
                pariwisata internasional berkualitas tinggi kepada jamaah di
                komunitas Anda.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 mx-auto block">
              Bergabung Sebagai Mitra
            </button>
          </div>
        </div>
      </section>
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3
              className="text-3xl font-bold text-gray-900 mb-8"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Kantor Cabang
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h4
                  className="text-2xl font-bold mb-4 text-yellow-600"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {office.city}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <p className="text-gray-600">{office.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MitraSection;
