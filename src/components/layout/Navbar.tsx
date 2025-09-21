"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent "
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div
              className="text-2xl font-bold"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <span className="text-yellow-500">As</span>
              <span className={isScrolled ? "text-black" : "text-white"}>
                safar
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#home"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-yellow-500 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Beranda
              </Link>
              <Link
                href="#about"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-yellow-500 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Tentang
              </Link>
              <Link
                href="#packages"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-yellow-500 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Paket
              </Link>
              <Link
                href="#contact"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-yellow-500 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Kontak
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2">
              <Link
                href="#home"
                className="block px-3 py-2 text-black hover:text-yellow-500"
              >
                Beranda
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-black hover:text-yellow-500"
              >
                Tentang
              </Link>
              <Link
                href="#packages"
                className="block px-3 py-2 text-black hover:text-yellow-500"
              >
                Paket
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-black hover:text-yellow-500"
              >
                Kontak
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
