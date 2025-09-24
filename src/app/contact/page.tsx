"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden py-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img45.jpg"
          alt="Contact Page Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl p-4 md:p-12 flex flex-col md:flex-row items-center justify-center md:space-x-12 pt-[20rem] md:pt-25">
        
        {/* Left Side: Contact Form */}
        <div className="w-full md:w-1/2 bg-[#11312f] rounded-xl shadow-2xl p-8 space-y-6">
          <h2 className="text-3xl font-bold mb-2">Let’s Connect with us!</h2>
          <p className="text-gray-300 text-sm md:text-base">
            We believe in collaboration and value your input throughout the
            design process. We encourage clients to actively participate in
            discussions, share their ideas, preferences, and feedback.
          </p>

          <form className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-base font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="mt-1 block w-full bg-[#0a1e1d] border border-[#1d4f4e] rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-base font-medium">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full bg-[#0a1e1d] border border-[#1d4f4e] rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-base font-medium">
                Inquire Subject*
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full bg-[#0a1e1d] border border-[#1d4f4e] rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-base font-medium">
                Message*
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full bg-[#0a1e1d] border border-[#1d4f4e] rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-[#11312f] text-white text-lg font-bold rounded-full shadow-md hover:bg-[#1d4f4e] transition flex items-center justify-center space-x-2 w-full"
            >
              <span>Send a Message</span>
              <span className="text-xl">→</span>
            </button>
          </form>
        </div>

        {/* Right Side: Contact Information */}
        <div className="w-full md:w-1/2 md:p-12 mt-12 md:mt-0">
          <h3 className="text-3xl font-bold mb-2 text-[#11312f]">
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
              <p className="text-black">
                123 Main Street, New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
