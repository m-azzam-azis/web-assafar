import React from "react";
import { ArrowRight } from "lucide-react";

const TahapanUmrohSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-12 shadow-xl">
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Tahapan Umroh
          </h2>
          <p className="text-xl text-yellow-600 mb-8 font-medium">
            Langkah kecil menuju Baitullah
          </p>

          <div className="text-lg text-gray-700 leading-relaxed mb-8">
            <p>
              Yuk, gabung dengan program tahapan umroh! Bisa umroh loh hanya
              dengan <strong>16 JT*</strong>. Tahapan umroh adalah program
              tabungan yang dibuat dengan pola sistem referensi. Dan ada reward
              atau ujroh untuk calon jamaah yang mengikuti program tahapan umroh
              sebesar
              <strong> Rp.500.000</strong> (lima ratus ribu rupiah). Para calon
              jamaah menabung di rekening sendiri di bank BSI.
            </p>
          </div>

          <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 mb-6">
            Daftar Sekarang <ArrowRight className="inline ml-2 w-5 h-5" />
          </button>

          <p className="text-sm text-gray-500 italic">
            *syarat dan ketentuan berlaku
          </p>
        </div>
      </div>
    </section>
  );
};
export default TahapanUmrohSection;