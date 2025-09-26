"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "@/context/LanguageContext";
import { motion } from "framer-motion";

// ✅ Proper type banaya
type Person = {
  name: string;
  designation: string;
  photo: string;
  term: string;
  description: string;
};

export default function TeamPage() {
  const { t } = useContext(LanguageContext); // current language

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-200 via-white to-green-200">
      {/* 🔹 Hero Section */}
      <section className="relative w-full h-[500px] md:h-[800px]">
        <Image
          src="/img3.jpg"
          alt={t.teamTitle}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            {t.teamTitle}
          </motion.h1>
        </div>
      </section>

      {/* 🔹 Members Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-extrabold tracking-tight border-l-8 border-orange-500 pl-4 py-2 bg-gradient-to-r from-orange-50 via-white to-white shadow-sm mb-12 text-orange-600"
        >
          {t.electedMembersTitle}
        </motion.h2>

        {t.electedMembers?.map((person: Person, idx: number) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-8 mb-14 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <Image
              src={person.photo}
              alt={person.name}
              width={224}
              height={224}
              className="w-44 h-44 md:w-48 md:h-48 object-cover rounded-xl border-4 border-[#f7931e] shadow-md"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-[#057c26] mb-1">
                {person.name}
              </h3>
              <div className="text-[#f7931e] font-semibold mb-2 text-sm">
                {person.designation}
              </div>
              <span className="inline-block bg-[#ffe100] text-[#232323] text-xs font-semibold px-4 py-1 rounded-full mb-3">
                {person.term}
              </span>
              <p className="text-[#363636] text-sm">{person.description}</p>
            </div>
          </motion.div>
        ))}

        {/* 🔹 Administrative Staff Section */}
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-extrabold text-green-700 tracking-tight border-l-8 border-green-400 pl-4 py-2 bg-gradient-to-r from-green-50 via-white to-white shadow-sm mb-6"
        >
          {t.staffTitle}
        </motion.h2>

        {t.staff?.map((person: Person, idx: number) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, x: idx % 2 === 0 ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-8 mb-14 ${
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <Image
              src={person.photo}
              alt={person.name}
              width={208}
              height={208}
              className="w-40 h-40 md:w-44 md:h-44 object-cover rounded-xl border-4 border-[#ffe100] shadow-md"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-bold text-[#f7931e] mb-1">
                {person.name}
              </h3>
              <div className="text-[#057c26] font-semibold mb-2 text-sm">
                {person.designation}
              </div>
              <span className="inline-block bg-[#ffe100] text-[#232323] text-xs font-semibold px-3 py-1 rounded-full mb-2">
                {person.term}
              </span>
              <p className="text-[#363636] text-sm">{person.description}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
