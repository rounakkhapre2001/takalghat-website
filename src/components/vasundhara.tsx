"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Tree Plantation",
    desc: "Conducting large-scale tree plantation campaigns for Green Maharashtra.",
    icon: "🌳",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    title: "Waste Management",
    desc: "Focus on reducing plastic, reuse, and recycling.",
    icon: "♻",
    gradient: "from-yellow-400 to-orange-400",
  },
  {
    title: "Energy Conservation",
    desc: "Promoting the use of solar and other alternative energy sources.",
    icon: "☀",
    gradient: "from-orange-400 to-red-400",
  },
  {
    title: "Water Conservation",
    desc: "Water harvesting, rainwater storage, and efficient usage.",
    icon: "💧",
    gradient: "from-blue-400 to-cyan-400",
  },
];

export default function MajhiVasundharaPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-100 via-white to-green-200 min-h-screen">
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Hero section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-extrabold text-green-900 drop-shadow-md"
        >
          माझी वसुंधरा अभियान 🌍
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
        >
          Movement towards sustainable development through environmental conservation, pollution control, energy saving, water management, and tree plantation initiatives.
        </motion.p>
      </div>

      {/* Feature cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4 px-6">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="group relative p-[2px] rounded-3xl bg-gradient-to-br from-green-200 to-emerald-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition"
          >
            <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl p-8 h-full flex flex-col items-center text-center">
              {/* Icon circle */}
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-lg bg-gradient-to-tr ${item.gradient}`}
              >
                {item.icon}
              </div>
              <h3 className="mt-6 text-2xl font-bold text-green-900">{item.title}</h3>
              <p className="mt-3 text-gray-700">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA / optional section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="relative z-10 mt-24 text-center"
      >
        {/* Add CTA button or content here if needed */}
      </motion.div>
    </section>
  );
}
