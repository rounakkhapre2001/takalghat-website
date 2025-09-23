"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function LeadersSection() {
  const leaders = [
    { name: "Shri. Devendra Fadnavis", title: "Hon'ble Chief Minister", img: "/fadnavis.jpg" },
    { name: "Shri. Eknath Shinde", title: "Hon'ble Deputy Chief Minister", img: "/shinde.jpg" },
    { name: "Shri. Ajit Pawar", title: "Hon'ble Deputy Chief Minister", img: "/pawar.jpg" },
    { name: "Shri. Chandrashekhar Bawankule", title: "President BJP Maharashtra", img: "/bawankule.jpg" },
    { name: "Shri. Sameer Meghe", title: "MLA - Hingna Constituency", img: "/meghe.jpg" },
    { name: "Shri. Atish Umare", title: "Leader of Opposition Zilla Parishad", img: "/umare.jpg" },
    { name: "Smt. Roshani Umare", title: "Sarpanch GP Kirmiti Bharkas", img: "/roshani.jpg" },
    { name: "Shri. Atul Gawande", title: "Deputy Sarpanch", img: "/gawande.jpg" },
    { name: "Smt. Poonam Kalsapre", title: "Secretary GP Kirmiti Bharkas", img: "/kalsapre.jpg" },
  ];

  return (
    <>
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Heading */}
          <div>
            <p className="uppercase tracking-widest text-gray-600 mb-2">About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-green-900">
              Our Leaders <br /> & Visionaries.
            </h2>
          </div>

          {/* Right Side - Description */}
          <div>
            <p className="text-lg text-gray-700">
              Meet the dedicated leaders who are driving progress in Maharashtra.
              Their collective vision, commitment, and hard work continue to
              transform communities and uplift lives across the state.
            </p>
          </div>
        </div>
      </section>

      {/* Full Width Slider */}
      <section className="w-full bg-gradient-to-b from-orange-300 via-white to-green-200 py-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true, // right-to-left
          }}
          speed={4000}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 }, // mobile
            640: { slidesPerView: 2 }, // small tablets
            768: { slidesPerView: 3 }, // tablets
            1024: { slidesPerView: 4 }, // small desktop
            1280: { slidesPerView: 5 }, // large desktop
          }}
        >
          {leaders.map((leader, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <Image
                  src={leader.img}
                  alt={leader.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {leader.title}
                  </h3>
                  <p className="text-xs text-gray-600">{leader.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
