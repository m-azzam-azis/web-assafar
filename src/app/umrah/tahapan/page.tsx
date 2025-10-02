import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const UmrahTahapanPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="flex items-center text-yellow-600 hover:text-yellow-700 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Umroh Tahapan
            </h1>
            <p className="text-xl text-gray-600">
              Lebih murah seiring waktu dengan program tabungan
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-90 mb-4">
              Deskripsi Program
            </h2>
            <p className="text-gray-700 mb-6">
              Umroh Tahapan adalah program tabungan yang dibuat dengan pola
              sistem referensi. Dan ada reward atau ujroh untuk calon jamaah
              yang mengikuti program tahapan umroh sebesar{" "}
              <strong>Rp.500.000</strong> (lima ratus ribu rupiah). Para calon
              jamaah menabung di rekening sendiri di bank BSI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-90 mb-3">
                  Keuntungan Program
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Dimulai dari 14 JT*</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-50 mr-2">✓</span>
                    <span>Tabungan di rekening pribadi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-50 mr-2">✓</span>
                    <span>Ujroh sebesar Rp.500.000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Sistem referensi yang menguntungkan</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-90 mb-3">
                  Cara Bergabung
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Daftar melalui formulir online</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Buka rekening di Bank BSI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-50 mr-2">✓</span>
                    <span>Mulai menabung secara berkala</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Ikuti program referensi</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-300">
                Isi formulir pendaftaran
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmrahTahapanPage;
