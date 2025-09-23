"use client";

import React, { useState } from "react";

type Service = {
  name: string;
  docs: string[];
};

const tabs = [
  { label: "State Government Schemes" },
  { label: "Central Government Scheme" },
  { label: "Joint Venture (S+C)" },
];

const tabSchemes = [
  [
    {
      title: "LIDCOM Gattai Stall Scheme",
      description:
        "Provides a 100% subsidy for roadside cobblers from the Charmakar community. Includes a tin stall costing ₹16367/- plus ₹500 incidental charges.",
    },
    {
      title: "The Scheme Of State Award For Disabled",
      description:
        "Awards given yearly to the Best Disabled Employees, Employers & Agencies by Govt. of Maharashtra.",
    },
    {
      title: "Merit Awards",
      description:
        "Awards given to disabled students securing top 3 ranks in SSC & HSC exams within their board.",
    },
    {
      title: "State Post-metric Scholarship For Disabled",
      description:
        "Encourages students with disability (SwDs) to pursue higher education with financial support.",
    },
  ],
  [
    {
      title: "Student Internship Programme",
      description:
        "Interns get exposure to the CAG of India and Indian Audit & Accounts Department functioning.",
    },
    {
      title: "Financial Assistance For Veteran Artists",
      description:
        "A pension scheme by MoC to support old artists/scholars facing financial hardship.",
    },
    {
      title: "Award Of Scholarships To Young Artists",
      description:
        "Launched by the Ministry of Culture for young artists in various cultural fields.",
    },
    {
      title: "Pradhan Mantri Mudra Yojana",
      description:
        "Micro loans up to ₹20 lakhs for non-farm sector micro enterprises.",
    },
  ],
  [
    {
      title: "Revamped Rashtriy Gram Swaraj Abhiyan",
      description:
        "Strengthens Panchayati Raj Institutions with 60:40 (Centre:State) funding ratio.",
    },
    {
      title: "Pandit Dindayal Upadhyay Panchayat Empowerment Award",
      description:
        "Award recognizing Panchayats for excellence in empowerment and governance.",
    },
  ],
];

const services: Service[] = [
  { name: "Birth Certificate", docs: ["लाभार्थी आधार कार्ड झेरॉक्स", "आई वडील आधार कार्ड झेरॉक्स"] },
  { name: "Death Certificate", docs: ["मृत व्यक्तीचे आधार कार्ड झेरॉक्स", "वारसाचे आधार कार्ड झेरॉक्स"] },
  { name: "Resident Certificate", docs: ["निवासाचा पुरावा", "आधार कार्ड झेरॉक्स"] },
  { name: "Marriage Certificate", docs: ["वराचे आधार कार्ड झेरॉक्स", "वधूचे आधार कार्ड झेरॉक्स"] },
  { name: "No Due Certificate", docs: ["कर भरल्याची पावती", "आधार कार्ड झेरॉक्स"] },
  { name: "Other", docs: ["संबंधित कागदपत्रे"] },
];

const updates = [
  "विज्ञप्ति : परामर्श हेतु आवेदन आमंत्रण...... विज्ञप्ति",
  "विज्ञप्ति : परामर्श हेतु आवेदन आमंत्रण...... विज्ञप्ति",
  "विज्ञप्ति : परामर्श हेतु आवेदन आमंत्रण...... विज्ञप्ति",
  "विज्ञप्ति : परामर्श हेतु आवेदन आमंत्रण...... विज्ञप्ति",
  "विज्ञप्ति : परामर्श हेतु आवेदन आमंत्रण...... विज्ञप्ति",
];

export default function ServiceSchemesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openModal, setOpenModal] = useState<Service | null>(null);

  return (
    <div className="font-serif">
      {/* Hero Section */}
      <section className="relative w-full h-[800px]">
        <img
          src="/img3.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
            Service & Schemes
          </h1>
        </div>
      </section>

      {/* Services + Updates */}
      <div className="flex flex-col md:flex-row md:gap-6 gap-4 justify-center my-16 px-4">
        {/* Services */}
        <div className="w-full md:w-2/5 bg-white p-5 rounded-2xl shadow-lg border-2 border-green-500">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-green-600 pb-2">
            Services
          </h2>
          <div className="flex flex-col gap-4">
            {services.map((item, index) => (
              <div
                key={index}
                onClick={() => setOpenModal(item)}
                className="cursor-pointer border border-green-500 rounded-lg py-3 px-3 text-center text-base bg-white hover:bg-green-100 transition"
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* Updates */}
        <div className="w-full md:w-2/5 bg-white p-5 rounded-2xl shadow-lg border-2 border-orange-500">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-orange-500 pb-2">
            New Updates
          </h2>
          <div className="flex flex-col gap-4">
            {updates.map((update, i) => (
              <div
                key={i}
                className="flex justify-between items-center border border-orange-400 rounded-lg py-3 px-3 bg-white text-base"
              >
                <span>{update}</span>
                <span className="text-gray-500 text-sm">03/09/2025</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Schemes Section */}
      <div className="relative p-12 pt-16 pb-16 bg-gradient-to-br from-orange-100 via-white to-green-100 overflow-hidden">
        <h2 className="text-black text-center text-4xl md:text-5xl font-extrabold mb-10 drop-shadow-md">
          Schemes
        </h2>

        {/* Tabs */}
        <div
          role="tablist"
          className="flex justify-center gap-6 mb-12 relative z-10 flex-wrap"
        >
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={activeTab === idx}
              onClick={() => setActiveTab(idx)}
              className={`px-8 py-4 rounded-full font-semibold text-base border transition duration-300 transform ${
                activeTab === idx
                  ? "bg-green-600 text-white shadow-md scale-105 border-green-700"
                  : "border-gray-300 bg-white text-gray-700 hover:shadow-sm hover:scale-105"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div
          role="tabpanel"
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 relative z-10"
        >
          {tabSchemes[activeTab].map((scheme, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-4">{scheme.title}</h3>
              <p className="text-base">{scheme.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-lg w-11/12 md:w-1/3 p-6 relative">
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4">{openModal.name}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {openModal.docs.map((doc, i) => (
                <li key={i}>{doc}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
