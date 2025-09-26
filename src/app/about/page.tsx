"use client";

import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="w-full bg-gradient-to-br from-orange-200 via-white to-green-200">
      {/* ================= Hero Section ================= */}
      <section className="relative w-full h-[500px] md:h-[800px] overflow-hidden">
        <Image
          src="/img3.jpg"
          alt={t.aboutTitle}
          fill
          priority
          className="object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          >
            {t.aboutTitle}
          </motion.h1>
        </motion.div>
      </section>

      {/* ================= About Text Section ================= */}
      <section className="py-12 md:py-16 text-center px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-base md:text-xl font-bold text-green-900 leading-relaxed">
            {t.aboutText}
          </p>
        </motion.div>
      </section>

      {/* ================= Team / Gallery Section ================= */}
      <section className="py-6 flex justify-center px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[270px_1fr] gap-4 items-center">
            {/* Left Column */}
            <motion.div
              className="flex justify-center"
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 30 },
                show: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/img8.jpg"
                alt=""
                width={270}
                height={367}
                className="rounded object-cover w-[200px] h-[270px] md:w-[270px] md:h-[367px]"
              />
            </motion.div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Top Row */}
              <div className="flex flex-col sm:flex-row gap-2">
                {[
                  { src: "/img4.jpg", w: 284, h: 254 },
                  { src: "/img2.jpg", w: 284, h: 387 },
                  { src: "/IMG-20250917-WA0022.jpg", w: 284, h: 330 },
                ].map((img, i) => (
                  <motion.div
                    key={i}
                    className="overflow-hidden rounded"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={img.src}
                      alt=""
                      width={img.w}
                      height={img.h}
                      className="rounded object-cover w-full sm:w-[200px] md:w-[284px] h-[220px] md:h-[330px]"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Bottom Row */}
              <div className="flex flex-col sm:flex-row gap-2">
                {[
                  { src: "/IMG-20250917-WA0008.jpg", w: 438, h: 288 },
                  { src: "/IMG-20250917-WA0018.jpg", w: 290, h: 210 },
                ].map((img, i) => (
                  <motion.div
                    key={i}
                    className="overflow-hidden rounded"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={img.src}
                      alt=""
                      width={img.w}
                      height={img.h}
                      className="rounded object-cover w-full sm:w-[200px] md:w-[290px] h-[160px] md:h-[210px]"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= What We Offer Section ================= */}
      <section className="py-16 px-4 md:px-6">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtitle */}
          <p className="uppercase text-xs md:text-sm text-green-900 font-semibold mb-2">
            {t.challenge}
          </p>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
            {t.offerTitle}
          </h2>

          {/* Description */}
          <p className="max-w-xl mx-auto text-gray-800 mb-12 text-base md:text-xl">
            {t.offerDesc}
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((card, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg shadow-md p-6 text-left"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg md:text-xl font-bold text-green-900 mb-2">
                  {(t as any)[`offer${card}Title`]}
                </h3>
                <p className="text-green-800 text-sm md:text-base">
                  {(t as any)[`offer${card}Desc`]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
