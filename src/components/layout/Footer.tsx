import React from "react";
import { MapPin, Instagram, Clock } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa6";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-black text-white py-16 md:rounded-t-3xl xl:rounded-t-[4rem]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Image
              src="/logo.png"
              alt="Logo"
              className="mb-4"
              height={100}
              width={100}
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Mewujudkan impian spiritual Anda untuk beribadah di tanah suci
              dengan pelayanan terbaik dan terpercaya. Pengalaman lebih dari 10
              tahun melayani jamaah umroh dan haji.
            </p>
            <div className="flex space-x-4">
              <Link
                href={"https://wa.me/62123456789"}
                target="_blank"
                className="w-10 h-10 bg-yellow-500 hover:bg-yellow-400 rounded-full flex items-center justify-center"
              >
                <FaWhatsapp className="w-5 h-5 text-black" />
              </Link>
              <Link
                href={"https://www.instagram.com/assafarimanamanah/"}
                target="_blank"
                className="w-10 h-10 bg-yellow-500 hover:bg-yellow-400 rounded-full flex items-center justify-center"
              >
                <Instagram className="w-5 h-5 text-black" />
              </Link>
              <Link
                href={"https://www.tiktok.com/assafarimanamanah/"}
                target="_blank"
                className="w-10 h-10 bg-yellow-500 hover:bg-yellow-400 rounded-full flex items-center justify-center"
              >
                <FaTiktok className="size-4 text-black" />
              </Link>
            </div>
          </div>

          <div>
            <h3
              className="text-xl font-semibold mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Layanan Kami
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Umroh VIP
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Umroh Reguler
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Umroh Tahapan
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Haji
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="text-xl font-semibold mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Kontak Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Jl. Kemang Raya No. 123
                  <br />
                  Jakarta Selatan, 12560
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <p className="text-gray-300">+62 21 1234 5678</p>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <p className="text-gray-300">info@assafar.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <p className="text-gray-300">Senin - Jumat: 08:00 - 17:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Assafar Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
