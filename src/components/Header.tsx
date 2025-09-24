'use client';

import { useState, useEffect, useContext, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageContext } from '../context/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { toggleLanguage, t } = useContext(LanguageContext);

  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setIsClient(true);

    // close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navLinks = [
    { href: '/about', label: t.about },
    { href: '/grampanchayat', label: t.leaders },
    { href: '/Service_Schemes', label: t.events },
    { href: '/gallery', label: t.gallery },
    { href: '/contact', label: t.contact },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(prev => !prev);
  };

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  const handleLinkClick = () => setIsDropdownOpen(false);

  if (!isClient) return null;

  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-11/12 md:w-3/4 max-w-5xl rounded-full backdrop-blur-md bg-white/50 shadow-lg p-3">
      <nav className="flex items-center justify-between">

        {/* Desktop Left Dropdown */}
        <div className="flex items-center space-x-6 w-1/3 hidden md:flex">
          <ul className="flex items-center">
            <li ref={dropdownRef} className="relative">
              <button
                className="text-gray-800 hover:text-green-700 transition-colors duration-300 font-semibold cursor-pointer flex items-center text-xl px-5 py-3"
                onClick={toggleDropdown}
                onMouseEnter={handleMouseEnter}
              >
                {t.allPages}
                <svg
                  className="w-6 h-6 ml-2"
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

              {isDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-7 bg-white rounded-lg shadow-xl py-4 px-4 w-[40rem] z-40"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex">
                    <div className="w-1/2 p-2 max-width: 65%;">
                      <Image
                        src="/img9.png"
                        alt="Dropdown image"
                        width={200}
                        height={200}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="w-1/2 p-4 grid grid-cols-2 gap-y-2 gap-x-4">
                      {navLinks.map(link => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block text-gray-700 hover:text-green-700 font-semibold text-lg"
                          onClick={handleLinkClick}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Center Logo (Desktop) */}
        <div className="flex-1 text-center hidden md:block">
          <Link href="/">
            <div className="flex items-center justify-center space-x-3">
              <Image
                src="/logo.png"
                alt="Logo"
                width={80}
                height={80}
                className="object-contain"
              />
              <span className="text-3xl font-bold text-green-800 text-center whitespace-nowrap">
                {t.logo}
              </span>
            </div>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-end w-1/3 hidden md:flex space-x-3">
          <button
            onClick={toggleLanguage}
            className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium shadow-md"
          >
            {t.marathiBtn}
          </button>
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
            onClick={toggleMenu}
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
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16m-7 6h7'
                }
              ></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden w-full mt-9 bg-white/80 rounded-lg shadow-lg`}
        >
          <ul className="flex flex-col p-4 space-y-2">
            {navLinks.map(link => (
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
              <button
                onClick={toggleLanguage}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                {t.marathiBtn}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
