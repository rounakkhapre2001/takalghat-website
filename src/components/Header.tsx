"use client";

import { useState, useEffect, useContext, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { LanguageContext } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { toggleLanguage, t } = useContext(LanguageContext);

  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setIsClient(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/about", label: t.about },
    { href: "/grampanchayat", label: t.leaders },
    { href: "/Service_Schemes", label: t.events },
    { href: "/gallery", label: t.gallery },
    { href: "/contact", label: t.contact },
  ];

  if (!isClient) return null;

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-11/12 md:w-3/4 max-w-5xl rounded-full backdrop-blur-md bg-white/50 shadow-lg p-3"
    >
      <nav className="flex items-center justify-between">
        {/* Desktop Left Dropdown */}
        <div className="flex items-center space-x-6 w-1/3 hidden md:flex">
          <ul className="flex items-center">
            <li ref={dropdownRef} className="relative">
              <button
                className="text-gray-800 hover:text-green-700 transition-colors duration-300 font-semibold cursor-pointer flex items-center text-lg md:text-base px-4 py-2"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {t.allPages}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-full left-0 mt-7 bg-white rounded-lg shadow-xl py-4 px-4 w-[36rem] z-40"
                  >
                    <div className="flex">
                      <div className="w-1/2 p-2 max-width: 65%;">
                        <Image
                          src="/img90.png"
                          alt="Dropdown image"
                          width={180}
                          height={180}
                          className="rounded-lg object-cover"
                        />
                      </div>
                      <div className="w-1/2 p-4 grid grid-cols-2 gap-y-2 gap-x-3">
                        {navLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block text-gray-700 hover:text-green-700 font-medium text-base"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </div>

        {/* Center Logo (Desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex-1 text-center hidden md:block"
        >
          <Link href="/">
            <div className="flex items-center justify-center space-x-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={70}
                height={70}
                className="object-contain"
              />
              <span className="text-xl md:text-xl font-bold text-green-800 text-center whitespace-nowrap">
                {t.logo}
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Right Section */}
        <div className="flex items-center justify-end w-1/3 hidden md:flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium shadow-md text-base"
          >
            {t.marathiBtn}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-between items-center w-full md:hidden">
          {/* Mobile Logo with Home Link */}
          <Link href="/">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="text-lg font-semibold text-green-800">
                {t.logo}
              </span>
            </div>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu with motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full mt-4 bg-white/90 rounded-lg shadow-lg"
          >
            <ul className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleLanguage}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium"
                >
                  {t.marathiBtn}
                </motion.button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
