import React from "react";
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
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Pilihan Paket Umroh
          </h2>
          <p className="text-xl text-gray-600">
            Temukan paket yang sesuai dengan kebutuhan dan budget Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {types.map((type, index) => (
            <div
              key={index}
              className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <img
                src={type.image}
                alt={type.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {type.title}
                  </h3>
                  <p className="text-white/90">{type.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default UmrahTypesSection;