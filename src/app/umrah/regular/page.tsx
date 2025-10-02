import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const UmrahRegularPage = () => {
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
              Umroh Reguler
            </h1>
            <p className="text-xl text-gray-600">
              Paket umroh yang cocok untuk semua golongan
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Deskripsi Paket
            </h2>
            <p className="text-gray-700 mb-6">
              Umroh Reguler adalah paket umroh yang dirancang untuk memberikan
              pengalaman spiritual yang mendalam dengan harga terjangkau. Cocok
              untuk semua golongan yang ingin menunaikan ibadah umroh dengan
              kenyamanan dan pelayanan yang baik.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Fasilitas
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      Akomodasi hotel bintang 3-4 dekat Masjidil Haram
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-50 mr-2">✓</span>
                    <span>Pembimbing berpengalaman</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-50 mr-2">✓</span>
                    <span>Makanan halal dan bergizi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-50 mr-2">✓</span>
                    <span>Transportasi AC selama perjalanan</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-90 mb-3">
                  Durasi & Jadwal
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Durasi: 9-10 hari</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-50 mr-2">✓</span>
                    <span>Keberangkatan: Setiap bulan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-50 mr-2">✓</span>
                    <span>Pembekalan sebelum keberangkatan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Bimbingan selama perjalanan</span>
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

export default UmrahRegularPage;
