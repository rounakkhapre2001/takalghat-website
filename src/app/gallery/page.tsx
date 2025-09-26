"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const images = [
  "/img4.jpg",
  "/IMG-20250917-WA0010.jpg",
  "/IMG-20250917-WA0015.jpg",
  "/IMG-20250917-WA0011.jpg",
  "/IMG-20250917-WA0017.jpg",
  "/IMG-20250917-WA0027.jpg",
  "/IMG-20250917-WA0018.jpg",
  "/IMG-20250917-WA0007.jpg",
  "/IMG-20250917-WA0008.jpg",
  "/img2.jpg",
  "/IMG-20250917-WA0012.jpg",
  "/IMG-20250917-WA0023.jpg",
  "/IMG-20250917-WA0016.jpg",
  "/IMG-20250917-WA0017.jpg",
  "/img6.jpg",
];

const spanClasses = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-2 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-2",
  "col-span-1 row-span-2",
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
];

export default function ProGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (img: string, idx: number) => {
    setSelectedImage(img);
    setCurrentIndex(idx);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, currentTarget } = e;
    const middle = currentTarget.clientWidth / 2;
    if (clientX < middle) {
      prevImage();
    } else {
      nextImage();
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[800px] overflow-hidden">
        <Image
          src="/img3.jpg"
          alt="Gallery Banner"
          fill
          priority
          className="object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold tracking-wide"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          >
            OUR GALLERY
          </motion.h1>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-br from-orange-300 via-white to-green-300">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 md:px-12 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[220px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group 
                ${idx < spanClasses.length ? `md:${spanClasses[idx]}` : ""}`}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 30, rotate: -2 },
                show: { opacity: 1, scale: 1, y: 0, rotate: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              onClick={() => openLightbox(img, idx)}
            >
              <Image
                src={img}
                alt={`gallery-${idx}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay Caption */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-lg font-semibold tracking-wide">
                  View Image
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 backdrop-blur-sm bg-black/90 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative max-w-5xl w-full">
                {/* Close */}
                <motion.button
                  className="absolute top-4 right-4 text-white hover:text-red-400 transition z-50"
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={32} />
                </motion.button>

                {/* Prev */}
                <motion.button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-indigo-400 z-50"
                  whileHover={{ scale: 1.2 }}
                  onClick={prevImage}
                >
                  <ChevronLeft size={40} />
                </motion.button>

                {/* Next */}
                <motion.button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-indigo-400 z-50"
                  whileHover={{ scale: 1.2 }}
                  onClick={nextImage}
                >
                  <ChevronRight size={40} />
                </motion.button>

                {/* Image */}
                <motion.div
                  key={currentIndex}
                  className="relative w-full max-h-[80vh] flex items-center justify-center cursor-pointer"
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.85, opacity: 0 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  onClick={handleImageClick}
                >
                  <Image
                    src={selectedImage}
                    alt="Selected"
                    width={1200}
                    height={800}
                    className="w-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
