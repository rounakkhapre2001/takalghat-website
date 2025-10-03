"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // motion import

// Icons
const IconFacebook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M22 12c0-5.515-4.485-10-10-10S2 6.485 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const IconYouTube = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M19.615 3.184A3.001 3.001 0 0017.606 2H6.393a3.001 3.001 0 00-2.01 1.184c-.638.916-.983 1.96-.983 3.983s.345 3.067.983 3.983a3.001 3.001 0 002.01 1.184h11.213a3.001 3.001 0 002.01-1.184c.638-.916.983-1.96.983-3.983s-.345-3.067-.983-3.983zM10 15V9l5 3-5 3z" />
  </svg>
);

const IconInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M7.5 2C4.462 2 2 4.462 2 7.5v9A5.5 5.5 0 007.5 22h9a5.5 5.5 0 005.5-5.5v-9C22 4.462 19.538 2 16.5 2h-9zm0 2h9A3.5 3.5 0 0120 7.5v9a3.5 3.5 0 01-3.5 3.5h-9A3.5 3.5 0 014 16.5v-9A3.5 3.5 0 017.5 4zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.8-2.3a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
  </svg>
);

const Footer = () => {
  return (
    <motion.footer
      className="bg-green-900 text-white font-poppins py-8 px-3"
      initial={{ opacity: 0, y: 50 }} // Start hidden
      whileInView={{ opacity: 1, y: 0 }} // Animate on scroll
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-y-8 md:gap-x-12">
        {/* LEFT */}
        <motion.div
          className="flex flex-col w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left">
            <div className="font-extrabold text-xl mb-1">Grampanchayat Takalghat</div>
            <div className="font-semibold text-base mb-2">Panchayat Samiti Hingna, District Nagpur</div>
          </div>
          <div className="flex gap-6 mt-3 justify-center md:justify-start">
            <Image src="/logo1_footer-removebg.png" alt="Seal" width={56} height={56} className="h-14 w-auto" />
            <Image src="/mohatsav-removebg-preview.png" alt="Azadi" width={56} height={56} className="h-14 w-auto" />
            <Image src="/footer3-removebg-preview.png" alt="Swachh" width={56} height={56} className="h-14 w-auto" />
            <Image src="/footer4-removebg-preview.png" alt="Digital India" width={48} height={48} className="h-12 w-auto" />
          </div>
          <div className="mt-8 text-center md:text-left">
            <div className="font-bold text-2xl md:text-3xl mb-3">Social Media</div>
            <div className="flex space-x-6 text-lg justify-center md:justify-start">
              <a href="#" className="hover:text-gray-300" aria-label="Facebook"><IconFacebook /></a>
              <a href="#" className="hover:text-gray-300" aria-label="YouTube"><IconYouTube /></a>
              <a href="#" className="hover:text-gray-300" aria-label="Instagram"><IconInstagram /></a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="flex flex-col w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-2xl md:text-3xl font-bold mb-5 text-center md:text-left">India</div>
          <div className="space-y-3 text-base text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <span className="mr-2">📍</span>
              <span>Grampanchayat Takalghat, Tahsil Hingna, Dist Nagpur, 441122</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <span className="mr-2">✉</span>
              <a href="mailto:grampanchayattakalghat@gmail.com" className="hover:underline">
                grampanchayattakalghat@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <span className="mr-2">📱</span>
              <a href="tel:+917507827578" className="hover:underline">
                +91 7507827578
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="w-full flex justify-center mt-8 pt-4 border-t border-[#3a3e6e] text-gray-400 text-sm md:text-base select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <span>Copyright</span>
        <span className="mx-1 text-purple-700 font-bold text-sm">©</span>
        <span className="mx-1">
          2025 gptakalghat.com - All Rights Reserved. | Designed and Developed by
          <span className="text-gray-300 font-semibold ml-1">IITIAN INFOTECH</span>
        </span>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;