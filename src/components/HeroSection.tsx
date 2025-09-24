"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

const HeroSection = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/vid1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* ----------------- Desktop View ----------------- */}
      <div className="hidden md:flex md:flex-col md:items-center md:justify-center w-full h-full">
        {/* Rotating Circle Logo */}
        <motion.div
          className="absolute top-50 right-80 w-40 h-40"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>
            <circle cx="100" cy="100" r="100" stroke="white" strokeWidth="1" fill="none" />
            <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="1" fill="none" />
            <text fill="white" fontSize="20" letterSpacing="3">
              <textPath href="#circlePath">{t.hero.logo} •</textPath>
            </text>
          </svg>
        </motion.div>

        {/* Content */}
        <div className="relative text-center px-6 mt-20">
          <h1 className="text-7xl font-bold text-white leading-tight">
            {t.heroTitle1}
            <br />
            {t.heroTitle2}
          </h1>
          <p className="mt-6 text-gray-200 max-w-2xl mx-auto text-lg">
            {t.heroDesc}
          </p>
          <Link
            href="/contact"
            className="mt-8 px-8 py-4 bg-green-900 text-white font-bold text-lg rounded-full shadow-lg hover:bg-green-800 transition block w-fit mx-auto"
          >
            {t.bookAppointment} →
          </Link>
        </div>
      </div>

      {/* ----------------- Mobile View ----------------- */}
      <div className="block md:hidden w-full h-full flex flex-col items-center justify-start pt-16">
        <motion.div
          className="relative top-26 left-35 w-25 h-28 mx-auto"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <path
                id="circlePathMobile"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>
            <circle cx="100" cy="100" r="100" stroke="white" strokeWidth="1" fill="none" />
            <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="1" fill="none" />
            <text fill="white" fontSize="16" letterSpacing="2">
              <textPath href="#circlePathMobile">{t.hero.logo} •</textPath>
            </text>
          </svg>
        </motion.div>

        {/* Content */}
        {/* Content */}
<div className="relative text-center px-6 mt-8">
  <h1 className="text-3xl font-bold text-white leading-tight">
    {t.heroTitle1}
    <br />
    {t.heroTitle2}
  </h1>
  <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-sm">
    {t.heroDesc}
  </p>
  <Link
    href="/contact"
    className="mt-6 px-6 py-3 bg-green-900 text-white font-bold text-base rounded-full shadow-md hover:bg-green-800 transition block w-fit mx-auto"
  >
    {t.bookAppointment} →
  </Link>
</div>
      </div>
    </section>
  );
};

export default HeroSection;
