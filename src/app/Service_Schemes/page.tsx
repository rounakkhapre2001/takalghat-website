"use client";

import React, { useState, useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Service = {
  name: string;
  docs: string[];
};

export default function ServiceSchemesPage() {
  const { t } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState(0);
  const [openModal, setOpenModal] = useState<Service | null>(null);

  const tabs = t.schemes.tabs;
  const tabSchemes = t.schemes.tabSchemes;
  const services: Service[] = t.services.list;

  const updates = [
    "विज्ञप्ति : परामर्श हेतु आवेदन आमंत्रण...... विज्ञप्ति",
    "विज्ञप्ति : परामर्श हेतु आवेदन आमंत्रण...... विज्ञप्ति",
    "विज्ञप्ति : परामर्श हेतु आवेदन आमंत्रण...... विज्ञप्ति",
    "विज्ञप्ति : परामर्श हेतु आवेदन आमंत्रण...... विज्ञप्ति",
    "विज्ञप्ति : परामर्श हेतु आवेदन आमंत्रण...... विज्ञप्ति",
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[800px]">
        <Image
          src="/img3.jpg"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center drop-shadow-lg"
          >
            {t.services.hero}
          </motion.h1>
        </div>
      </section>

      {/* Services + Updates */}
      <div className="flex flex-col md:flex-row md:gap-6 gap-4 justify-center my-12 px-4">
        {/* Services */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-2/5 bg-white p-6 rounded-2xl shadow-lg border-2 border-green-500"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b-2 border-green-600 pb-2">
            {t.services.title}
          </h2>
          <div className="flex flex-col gap-3">
            {services.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setOpenModal(item)}
                className="cursor-pointer border border-green-500 rounded-lg py-3 px-4 text-base md:text-lg font-semibold bg-white hover:bg-green-100 transition"
              >
                {item.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Updates */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-2/5 bg-white p-6 rounded-2xl shadow-lg border-2 border-orange-500"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b-2 border-orange-500 pb-2">
            {t.updates.title}
          </h2>
          <div className="flex flex-col gap-3">
            {updates.map((update, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-between items-center border border-orange-400 rounded-lg py-3 px-4 bg-white text-base md:text-lg font-medium"
              >
                <span>{update}</span>
                <span className="text-gray-500 font-bold text-sm md:text-base">
                  03/09/2025
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Schemes Section */}
      <div className="relative p-10 pt-14 pb-14 bg-gradient-to-br from-orange-100 via-white to-green-100 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-black text-center text-2xl md:text-3xl font-extrabold mb-10 drop-shadow-md"
        >
          {t.schemes.title}
        </motion.h2>

        {/* Tabs */}
        <motion.div
          role="tablist"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-10 relative z-10 flex-wrap"
        >
          {tabs.map((tab: string, idx: number) => (
            <button
              key={idx}
              role="tab"
              aria-selected={activeTab === idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base border transition duration-300 transform ${
                activeTab === idx
                  ? "bg-green-600 text-white shadow-md scale-105 border-green-700"
                  : "border-gray-300 bg-white text-gray-700 hover:shadow-sm hover:scale-105"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <div
          role="tabpanel"
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 relative z-10"
        >
          {tabSchemes[activeTab].map(
            (scheme: { title: string; description: string }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  {scheme.title}
                </h3>
                <p className="text-base md:text-lg">{scheme.description}</p>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg w-11/12 md:w-1/3 p-6 relative"
            >
              <button
                onClick={() => setOpenModal(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
              >
                ✖
              </button>
              <h2 className="text-lg md:text-xl font-bold mb-4">
                {openModal.name}
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                {openModal.docs.map((doc, i) => (
                  <li key={i}>{doc}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
