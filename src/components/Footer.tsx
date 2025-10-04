"use client";

import Image from "next/image";
import { motion } from "framer-motion"; 
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // 👈 add

// Icons
const IconFacebook = () => (<svg>{/* Facebook SVG path here */}</svg>);
const IconYouTube = () => (<svg>{/* YouTube SVG path here */}</svg>);
const IconInstagram = () => (<svg>{/* Instagram SVG path here */}</svg>);

const Footer = () => {
  const pathname = usePathname();   // 👈 add
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // 👇 Yeh line footer ko /gptakalghat/footer page pe hide kar degi
  if (!isClient || pathname?.startsWith("/gptakalghat/admin")) return null;

  return (
    <motion.footer
      className="bg-green-900 text-white font-poppins py-8 px-3"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
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
