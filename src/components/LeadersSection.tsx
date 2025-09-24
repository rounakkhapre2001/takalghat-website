"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import React, { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export default function LeadersSection() {
  const { t } = useContext(LanguageContext);

  const leaders = [
    { name: "Shri. Devendra Fadnavis", title: "Hon'ble Chief Minister", img: "/Devendra Fadnavis.jpg" },
    { name: "Shri. Eknath Shinde", title: "Hon'ble Deputy Chief Minister", img: "/Eknath Shinde.jpg" },
    { name: "Shri. Ajit Pawar", title: "Hon'ble Deputy Chief Minister", img: "/Ajit Pawar.jpg" },
    { name: "Shri. Chandrashekhar Bawankule", title: "President BJP Maharashtra", img: "/Chandrashekhar Bawankule.jpg" },
    { name: "Shri. Sameer Meghe", title: "MLA - Hingna Constituency", img: "/meghe.jpg" },
    { name: "Shri. Atish Umare", title: "Leader of Opposition Zilla Parishad", img: "/Atish Umare.jpg" },
    { name: "Mrs. Shardatai Gyaneshwarji Bhingaree", title: "Sarpanch GP Takalghat", img: "/roshani.jpg" },
    { name: "Shri. Umeshrav Natthuji Kavale", title: "Deputy Sarpanch", img: "/gawande.jpg" },
    { name: "Smt. Poonam Kalsapre", title: "Secretary GP Takalghat", img: "/kalsapre.jpg" },
  ];

  return (
    <>
      {/* About & Heading Section */}
<section className="w-full py-12 px-6 bg-white">
  <div className="max-w-5xl mx-auto">
    <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
      <div>
        <p className="text-sm uppercase tracking-widest text-gray-600 mb-2">
          {t.leaders1.about}
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 leading-snug mb-6">
          {t.leaders1.title}
        </h2>
      </div>
      <div>
        <p className="text-lg font-bold text-green-700 leading-relaxed">
          {t.leaders1.description}
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Leaders Slider */}
      <section className="w-full bg-gradient-to-b from-orange-300 via-white to-green-200 py-10">
        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            slidesPerView={4}   // ✅ Default 4 images
            speed={4000}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 4 }, // ✅ lock at 4 even on big screen
            }}
          >
            {leaders.map((leader, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                  <Image
                    src={leader.img}
                    alt={leader.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-800 text-sm">
                      {leader.title}
                    </h3>
                    <p className="text-xs text-gray-600">{leader.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
