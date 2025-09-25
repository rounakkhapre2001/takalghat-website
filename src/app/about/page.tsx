"use client";

import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="w-full bg-gradient-to-br from-orange-200 via-white to-green-200">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[800px]">
        <Image
          src="/img3.jpg"
          alt={t.aboutTitle}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold">{t.aboutTitle}</h1>
        </div>
      </section>

      {/* About Text Section */}
      <section className="py-12 md:py-16 text-center px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-base md:text-xl font-bold text-green-900 leading-relaxed">
            {t.aboutText}
          </p>
        </div>
      </section>

      {/* Team / Gallery Section */}
      <section className="py-6 flex justify-center px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[270px_1fr] gap-4 items-center">
            {/* First Column */}
            <div className="flex justify-center">
              <Image
                src="/img8.jpg"
                alt=""
                width={270}
                height={367}
                className="rounded object-cover w-[200px] h-[270px] md:w-[270px] md:h-[367px]"
              />
            </div>

            {/* Right Side Columns */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Top Row */}
              <div className="flex flex-col sm:flex-row gap-2">
                <Image
                  src="/img4.jpg"
                  alt=""
                  width={284}
                  height={254}
                  className="rounded object-cover w-full sm:w-[200px] md:w-[284px] h-[200px] md:h-[254px] sm:mt-8 md:mt-[133px]"
                />
                <Image
                  src="/img2.jpg"
                  alt=""
                  width={284}
                  height={387}
                  className="rounded object-cover w-full sm:w-[200px] md:w-[284px] h-[250px] md:h-[387px]"
                />
                <Image
                  src="/IMG-20250917-WA0022.jpg"
                  alt=""
                  width={284}
                  height={330}
                  className="rounded object-cover w-full sm:w-[200px] md:w-[284px] h-[220px] md:h-[330px] sm:mt-6 md:mt-[59px]"
                />
              </div>

              {/* Bottom Row */}
              <div className="flex flex-col sm:flex-row gap-2">
                <Image
                  src="/IMG-20250917-WA0008.jpg"
                  alt=""
                  width={438}
                  height={288}
                  className="rounded object-cover w-full sm:w-[300px] md:w-[438px] h-[200px] md:h-[288px]"
                />
                <Image
                  src="/IMG-20250917-WA0018.jpg"
                  alt=""
                  width={290}
                  height={210}
                  className="rounded object-cover w-full sm:w-[200px] md:w-[290px] h-[160px] md:h-[210px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase text-xs md:text-sm text-green-900 font-semibold mb-2">
            {t.challenge}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
            {t.offerTitle}
          </h2>
          <p className="max-w-xl mx-auto text-gray-800 mb-12 text-base md:text-xl">
            {t.offerDesc}
          </p>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-left">
              <h3 className="text-lg md:text-xl font-bold text-green-900 mb-2">
                {t.offer1Title}
              </h3>
              <p className="text-green-800 text-sm md:text-base">
                {t.offer1Desc}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-left">
              <h3 className="text-lg md:text-xl font-bold text-green-900 mb-2">
                {t.offer2Title}
              </h3>
              <p className="text-green-800 text-sm md:text-base">
                {t.offer2Desc}
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-left">
              <h3 className="text-lg md:text-xl font-bold text-green-900 mb-2">
                {t.offer3Title}
              </h3>
              <p className="text-green-800 text-sm md:text-base">
                {t.offer3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
