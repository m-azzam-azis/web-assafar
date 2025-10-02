import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const PaketWisataPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="flex items-center text-yellow-600 hover:text-yellow-70 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Paket Wisata Halal
            </h1>
            <p className="text-xl text-gray-600">
              Jelajahi dunia dengan tenang
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-90 mb-4">
              Deskripsi Paket
            </h2>
            <p className="text-gray-700 mb-6">
              Paket Wisata Halal menawarkan pengalaman perjalanan yang sesuai
              dengan prinsip-prinsip Islam. Kami menyediakan destinasi wisata
              yang halal, aman, dan menyenangkan untuk seluruh keluarga dengan
              tetap menjaga nilai-nilai keislaman.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Destinasi Populer
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-50 mr-2">✓</span>
                    <span>Turki - Istanbul & Cappadocia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-50 mr-2">✓</span>
                    <span>Maroko - Casablanca & Marrakech</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-50 mr-2">✓</span>
                    <span>Malaysia - Kuala Lumpur & Penang</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Indonesia - Lombok & Bali Halal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Fasilitas
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Akomodasi halal bersertifikat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-50 mr-2">✓</span>
                    <span>Makanan halal 100%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-50 mr-2">✓</span>
                    <span>Pemandu wisata berpengalaman</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-50 mr-2">✓</span>
                    <span>Transportasi selama perjalanan</span>
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

export default PaketWisataPage;
