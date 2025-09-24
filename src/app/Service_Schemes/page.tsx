"use client";

import React, { useState, useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

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
    <div className="font-serif">
      {/* Hero Section */}
      <section className="relative w-full h-[800px]">
        <img
          src="/img3.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
            {t.services.hero}
          </h1>
        </div>
      </section>

      {/* Services + Updates */}
      <div className="flex flex-col md:flex-row md:gap-6 gap-4 justify-center my-16 px-4">
        {/* Services */}
        <div className="w-full md:w-2/5 bg-white p-6 rounded-2xl shadow-lg border-2 border-green-500">
          <h2 className="text-3xl font-bold mb-5 border-b-2 border-green-600 pb-2">
            {t.services.title}
          </h2>
          <div className="flex flex-col gap-4">
            {services.map((item, index) => (
              <div
                key={index}
                onClick={() => setOpenModal(item)}
                className="cursor-pointer border border-green-500 rounded-lg py-4 px-4 text-lg font-bold bg-white hover:bg-green-100 transition"
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* Updates */}
        <div className="w-full md:w-2/5 bg-white p-6 rounded-2xl shadow-lg border-2 border-orange-500">
          <h2 className="text-3xl font-bold mb-5 border-b-2 border-orange-500 pb-2">
            {t.updates.title}
          </h2>
          <div className="flex flex-col gap-4">
            {updates.map((update, i) => (
              <div
                key={i}
                className="flex justify-between items-center border border-orange-400 rounded-lg py-4 px-4 bg-white text-lg font-bold"
              >
                <span>{update}</span>
                <span className="text-gray-500 text-base">03/09/2025</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Schemes Section */}
      <div className="relative p-12 pt-16 pb-16 bg-gradient-to-br from-orange-100 via-white to-green-100 overflow-hidden">
        <h2 className="text-black text-center text-5xl md:text-6xl font-extrabold mb-12 drop-shadow-md">
          {t.schemes.title}
        </h2>

        {/* Tabs */}
        <div
          role="tablist"
          className="flex justify-center gap-6 mb-12 relative z-10 flex-wrap"
        >
          {tabs.map((tab: string, idx: number) => (
            <button
              key={idx}
              role="tab"
              aria-selected={activeTab === idx}
              onClick={() => setActiveTab(idx)}
              className={`px-10 py-5 rounded-full font-semibold text-lg border transition duration-300 transform ${
                activeTab === idx
                  ? "bg-green-600 text-white shadow-md scale-105 border-green-700"
                  : "border-gray-300 bg-white text-gray-700 hover:shadow-sm hover:scale-105"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div
          role="tabpanel"
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 relative z-10"
        >
          {tabSchemes[activeTab].map(
            (scheme: { title: string; description: string }, i: number) => (
              <div
                key={i}
                className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{scheme.title}</h3>
                <p className="text-lg">{scheme.description}</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-lg w-11/12 md:w-1/3 p-8 relative">
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-6">{openModal.name}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
              {openModal.docs.map((doc, i) => (
                <li key={i}>{doc}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
