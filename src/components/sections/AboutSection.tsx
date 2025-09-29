// "use client";
// import React from "react";
// import { Star, Award, Heart } from "lucide-react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { staggerContainer, staggerItem } from "@/lib/animations";
// const AboutSection = () => {
//   const cards = [
//     {
//       title: "Pelayanan Perkulaitas",

//       icon: <Star className="w-8 h-8 text-yellow-500" />,
//     },
//     {
//       title: "Pengalaman Bertahun-Tahun",

//       icon: <Award className="w-8 h-8 text-yellow-500" />,
//     },
//     {
//       title: "Paket yang Fleksibel",

//       icon: <Heart className="w-8 h-8 text-yellow-500" />,
//     },
//   ];

//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex lg:flex-col flex-col items-center">
//           <motion.div
//             className="space-y-8 flex flex-col lg:flex-row  lg:space-x-6 w-full"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {cards.map((card, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-colors duration-300 transform flex-1"
//                 variants={staggerItem}
//                 whileHover={{
//                   y: -5,
//                   boxShadow:
//                     "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                 }}
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">{card.icon}</div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-black mb-3">
//                       {card.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       {card.content}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
