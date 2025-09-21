import React from "react";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <span className="text-yellow-500">As</span>safar
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Mewujudkan impian spiritual Anda untuk beribadah di tanah suci
              dengan pelayanan terbaik dan terpercaya. Pengalaman lebih dari 10
              tahun melayani jamaah umroh dan haji.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-black" />
              </div>
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-black" />
              </div>
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
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Umroh VIP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Umroh Reguler
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Umroh Tahapan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Haji
                </a>
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
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <p className="text-gray-300">+62 21 1234 5678</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
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
            © 2024 Assafar Travel. All rights reserved. | Designed with ❤️ for
            your spiritual journey
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
