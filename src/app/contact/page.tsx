"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden py-10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img45.jpg"
          alt=""
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 md:px-12 flex flex-col md:flex-row items-center justify-center md:space-x-12 pt-30 md:pt-40">
        
        {/* Left Side: Contact Form */}
        <div className="w-full md:w-1/2 bg-[#11312f] rounded-xl shadow-2xl p-6 md:p-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">{t.formTitle}</h2>
          <p className="text-gray-300 text-sm md:text-base">{t.formDesc}</p>

          <form className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm md:text-base font-medium">
                {t.fullName}
              </label>
              <input
                type="text"
                id="fullName"
                className="mt-1 block w-full bg-[#0a1e1d] border border-[#1d4f4e] rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm"
                placeholder={t.fullName}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm md:text-base font-medium">
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full bg-[#0a1e1d] border border-[#1d4f4e] rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm"
                placeholder={t.email}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm md:text-base font-medium">
                {t.subject}
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full bg-[#0a1e1d] border border-[#1d4f4e] rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm"
                placeholder={t.subject}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm md:text-base font-medium">
                {t.message}
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full bg-[#0a1e1d] border border-[#1d4f4e] rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm"
                placeholder={t.message}
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 w-full px-6 py-3 bg-[#1d4f4e] hover:bg-[#246664] text-white text-base md:text-lg font-bold rounded-full shadow-md transition flex items-center justify-center space-x-2"
            >
              <span>{t.sendBtn}</span>
              <span className="text-xl">→</span>
            </button>
          </form>
        </div>

        {/* Right Side: Contact Information */}
        <div className="w-full md:w-1/2 md:p-12 mt-10 md:mt-0 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#11312f]">
            {t.rightTitle}
          </h3>
          <p className="text-black text-sm md:text-base">{t.rightDesc}</p>

          <div className="mt-8 space-y-6 text-sm md:text-base">
            <div>
              <p className="font-bold text-black">{t.workingMail}</p>
              <p className="text-black">info@novitaspace.com</p>
            </div>
            <div>
              <p className="font-bold text-black">{t.officePhone}</p>
              <p className="text-black">123-456-7890</p>
            </div>
            <div>
              <p className="font-bold text-black">{t.officeAddress}</p>
              <p className="text-black">123 Main Street, New York, NY 10001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
