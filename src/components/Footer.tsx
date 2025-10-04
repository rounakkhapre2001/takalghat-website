"use client";

import Image from "next/image";
import { motion } from "framer-motion"; 
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa"; // 👈 Font Awesome icons

const Footer = () => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient || pathname?.startsWith("/gptakalghat/admin")) return null;

  return (
    <motion.footer
      className="bg-green-900 text-white font-poppins py-10 px-1"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-y-3 md:gap-x-12">
        {/* LEFT */}
        <motion.div
          className="flex flex-col w-full md:w-1/2 mb-4 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left">
            <div className="font-extrabold text-2xl mb-1">Grampanchayat Takalghat</div>
            <div className="font-semibold text-base mb-2">Panchayat Samiti Hingna, District Nagpur</div>
          </div>
          <div className="flex gap-4 mt-2 justify-center md:justify-start">
            <Image src="/logo1_footer-removebg.png" alt="Seal" width={48} height={48} className="h-12 w-auto" />
            <Image src="/mohatsav-removebg-preview.png" alt="Azadi" width={48} height={48} className="h-12 w-auto" />
            <Image src="/footer3-removebg-preview.png" alt="Swachh" width={48} height={48} className="h-12 w-auto" />
            <Image src="/footer4-removebg-preview.png" alt="Digital India" width={40} height={40} className="h-10 w-auto" />
          </div>
          <div className="mt-4 text-center md:text-left">
            <div className="font-bold text-xl md:text-2xl mb-2">Social Media</div>
            <div className="flex space-x-4 text-base justify-center md:justify-start">
              <a href="#" className="hover:text-gray-300" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-300" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" className="hover:text-gray-300" aria-label="Instagram"><FaInstagram /></a>
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
          <div className="text-xl md:text-2xl font-bold mb-3 text-center md:text-left">India</div>
          <div className="space-y-2 text-sm md:text-base text-center md:text-left">
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
        className="w-full flex justify-center mt-4 pt-2 border-t border-[#3a3e6e] text-gray-400 text-sm md:text-base select-none"
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
