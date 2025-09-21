"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "+6281234567890";
    const message = "Halo, saya ingin berkonsultasi tentang umroh/haji";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isOpen && (
        <motion.div
          className="absolute bottom-full right-0 mb-4 bg-white rounded-lg shadow-lg p-4 w-64"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <FaWhatsapp className="text-white" size={20} />
            </div>
            <div className="ml-3">
              <h3 className="font-semibold text-gray-800">Assafar Travel</h3>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Halo! Ada yang bisa kami bantu untuk perjalanan umroh/haji Anda?
          </p>
          <button
            onClick={sendMessage}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
          >
            Kirim Pesan
          </button>
        </motion.div>
      )}

      <motion.button
        onClick={toggleChat}
        className="w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-lg text-white transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0px 0px 0px 0px rgba(72, 187, 120, 0.7)",
            "0px 0px 0px 10px rgba(72, 187, 120, 0.2)",
            "0px 0px 0px 0px rgba(72, 187, 120, 0.7)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <FaWhatsapp size={24} />
        {isOpen && (
          <motion.div
            className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-xs text-white">1</span>
          </motion.div>
        )}
      </motion.button>
    </motion.div>
  );
};

export default FloatingWhatsApp;
