"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";

export default function ContactPage() {
  // form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  // status message
  const [status, setStatus] = useState("");

  // submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    const { error } = await supabase.from("contacts").insert([
      {
        name: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
    ]);

    if (error) {
      setStatus("❌ Error saving message");
    } else {
      setStatus("✅ Message sent successfully!");
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden py-10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img45.jpg"
          alt=""
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 md:px-12 flex flex-col md:flex-row items-center justify-center md:space-x-12 pt-30 md:pt-40">
        {/* Left Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 bg-[#11312f] rounded-xl shadow-2xl p-6 md:p-8 space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold">Let’s Connect with us!</h2>
          <p className="text-gray-300 text-sm md:text-base">
            We believe in collaboration and value your input throughout the design process. We encourage clients to actively participate in discussions, share their ideas, preferences, and feedback.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block text-sm md:text-base font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="mt-1 block w-full bg-[#0a1e1d] border border-[#1d4f4e] rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm md:text-base font-medium">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full bg-[#0a1e1d] border border-[#1d4f4e] rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm"
                placeholder="Email Address*"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm md:text-base font-medium">
                Inquire Subject*
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="mt-1 block w-full bg-[#0a1e1d] border border-[#1d4f4e] rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm"
                placeholder="Inquire Subject*"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm md:text-base font-medium">
                Message*
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1 block w-full bg-[#0a1e1d] border border-[#1d4f4e] rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm"
                placeholder="Message*"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full px-6 py-3 bg-[#1d4f4e] hover:bg-[#246664] text-white text-base md:text-lg font-bold rounded-full shadow-md transition flex items-center justify-center space-x-2"
            >
              <span>Send a Message</span>
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="text-xl"
              >
                →
              </motion.span>
            </motion.button>
          </form>

          {/* Status Message */}
          {status && <p className="text-sm mt-2">{status}</p>}
        </motion.div>

        {/* Right Side: Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="w-full md:w-1/2 md:p-12 mt-10 md:mt-0 text-center md:text-left"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#11312f]">
            Interested in working with us!
          </h3>
          <p className="text-black text-sm md:text-base">
            We encourage our team to fearlessly challenge conventions and pioneer new paths.
          </p>

          <div className="mt-8 space-y-6 text-sm md:text-base">
            <div>
              <p className="font-bold text-black">Working Mail</p>
              <p className="text-black">info@novitaspace.com</p>
            </div>
            <div>
              <p className="font-bold text-black">Office Phone</p>
              <p className="text-black">123-456-7890</p>
            </div>
            <div>
              <p className="font-bold text-black">Office Address</p>
              <p className="text-black">Main Bus-stop, Road, Takalghat, Maharashtra 441108</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}