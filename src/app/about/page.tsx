"use client";

import Image from "next/image";

export default function AboutPage() {
  const teamImages = [
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img9.jpg",
    "/team7.jpg",
  ];

  const offers = [
    {
      img: "/offer1.jpg",
      date: "04 May, 2025",
      title: "Exploring the World of Interior Inspiration",
      desc: "From minimalist chic to bohemian flair, we'll delve into a myriad of design styles",
    },
    {
      img: "/offer2.jpg",
      date: "04 May, 2025",
      title: "The Journey to Beautiful Interiors",
      desc: "From minimalist chic to bohemian flair, we'll delve into a myriad of design styles",
    },
    {
      img: "/offer3.jpg",
      date: "04 May, 2025",
      title: "Unveiling Interior Design Secrets",
      desc: "From minimalist chic to bohemian flair, we'll delve into a myriad of design styles",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-orange-200 via-white to-green-200">
      {/* Hero Section */}
      <section className="relative w-full h-[800px]">
        <Image
          src="/img3.jpg"
          alt="About Us"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">ABOUT US</h1>
        </div>
      </section>

      {/* About Text Section */}
      <section className="py-16 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-green-900 leading-relaxed">
            At <span className="font-semibold">NextSpace</span>, we are passionate
            about creating exceptional interior and designs that elevate
            lifestyles and enrich experiences.
          </p>
        </div>
      </section>

      {/* Team / Gallery Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-12">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-4 grid-rows-2 gap-6">
            <div className="col-span-1 row-span-2">
              <Image
                src={teamImages[0]}
                alt="Team 1"
                width={600}
                height={500}
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
            </div>

            <div className="col-span-1 row-span-1">
              <Image
                src={teamImages[1]}
                alt="Team 2"
                width={600}
                height={400}
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
            </div>

            <div className="col-span-1 row-span-2">
              <Image
                src={teamImages[2]}
                alt="Team 3"
                width={600}
                height={800}
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
            </div>

            <div className="col-span-1 row-span-1">
              <Image
                src={teamImages[3]}
                alt="Team 4"
                width={600}
                height={400}
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
            </div>

            <div className="col-span-1 row-span-1">
              <Image
                src={teamImages[4]}
                alt="Team 5"
                width={600}
                height={400}
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
            </div>

            <div className="col-span-1 row-span-1">
              <Image
                src={teamImages[5]}
                alt="Team 6"
                width={600}
                height={400}
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase text-sm text-green-900 font-semibold mb-2">
            The Challenge
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            What We Offer
          </h2>
          <p className="max-w-2xl mx-auto text-gray-800 mb-12">
            We specialize in transforming visions into reality. Explore our
            portfolio of innovative architectural and interior design projects
            crafted with precision.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              >
                <Image
                  src={offer.img}
                  alt={offer.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-left">
                  <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    {offer.date}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-green-900">
                    {offer.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">{offer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
