"use client";

import React from "react";
import Image from "next/image";

const electedMembers = [
  {
    name: "Mrs. Shardatai Gyaneshwarji Bhingare",
    designation: "Sarpanch",
    term: "2024-2029",
    photo: "/user-profile-icon.jpg",
    description:
      "As Sarpanch of Gram Panchayat Takalghat, [Sarpanch Name] leads village governance, ensures transparent administration, focuses on ward-level development (roads, water supply, sanitation), and works to implement state and central rural schemes for the welfare and progress of the community.",
  },
  {
    name: "Shri. Umeshrav Natthuji Kavale",
    designation: "Upa-Sarpanch",
    term: "2024-2029",
    photo: "/user-profile-icon.jpg",
    description:
      "As Upa-Sarpanch of Gram Panchayat Takalghat, [Upa-Sarpanch Name] supports the Sarpanch in village governance, coordinates development activities across wards, assists in resolving local issues, and helps ensure the effective implementation of government schemes for the benefit of all residents.",
  },
  {
    name: "Shri. Vedant Prabhakar Wasad",
    designation: "Panchayat Member",
    term: "2024-2029",
    photo: "/user-profile-icon.jpg",
    description:
      "As elected Panchayat Members of Gram Panchayat Takalghat, they represent their respective wards, raise local concerns, participate in decision-making, and contribute to development initiatives such as infrastructure, sanitation, water supply, and welfare programs for the community.",
  },
  {
    name: "Mrs. Meenatai Umeshrav Dayre",
    designation: "Panchayat Member",
    term: "2024-2029",
    photo: "/user-profile-icon.jpg",
    description:
      "As elected Panchayat Members of Gram Panchayat Takalghat, they represent their respective wards, raise local concerns, participate in decision-making, and contribute to development initiatives such as infrastructure, sanitation, water supply, and welfare programs for the community.",
  },
  {
    name: "Mrs. Babitatai Tarachandji Bahadure",
    designation: "Panchayat Member",
    term: "2024-2029",
    photo: "/user-profile-icon.jpg",
    description:
      "As elected Panchayat Members of Gram Panchayat Takalghat, they represent their respective wards, raise local concerns, participate in decision-making, and contribute to development initiatives such as infrastructure, sanitation, water supply, and welfare programs for the community.",
  },
  {
    name: "Mrs. RajashreeTai Tarachandji Pund",
    designation: "Panchayat Member",
    term: "2024-2029",
    photo: "/user-profile-icon.jpg",
    description:
      "As elected Panchayat Members of Gram Panchayat Takalghat, they represent their respective wards, raise local concerns, participate in decision-making, and contribute to development initiatives such as infrastructure, sanitation, water supply, and welfare programs for the community.",
  },
  {
    name: "Mrs. Anjanatai Mahadevrao Erpate",
    designation: "Panchayat Member",
    term: "2024-2029",
    photo: "/user-profile-icon.jpg",
    description:
      "As elected Panchayat Members of Gram Panchayat Takalghat, they represent their respective wards, raise local concerns, participate in decision-making, and contribute to development initiatives such as infrastructure, sanitation, water supply, and welfare programs for the community.",
  },
  {
    name: "Mrs. Tarabai Gyaneshwarji Bhagat",
    designation: "Panchayat Member",
    term: "2024-2029",
    photo: "/user-profile-icon.jpg",
    description:
      "As elected Panchayat Members of Gram Panchayat Takalghat, they represent their respective wards, raise local concerns, participate in decision-making, and contribute to development initiatives such as infrastructure, sanitation, water supply, and welfare programs for the community.",
  },
  {
    name: "Mrs. Anuradhatai vijayrao khangar",
    designation: "Panchayat Member",
    term: "2024-2029",
    photo: "/user-profile-icon.jpg",
    description:
      "As elected Panchayat Members of Gram Panchayat Takalghat, they represent their respective wards, raise local concerns, participate in decision-making, and contribute to development initiatives such as infrastructure, sanitation, water supply, and welfare programs for the community.",
  },
  {
    name: "Shree. Chandrashekharrao Haribhauji Kavale",
    designation: "Panchayat Member",
    term: "2024-2029",
    photo: "/user-profile-icon.jpg",
    description:
      "As elected Panchayat Members of Gram Panchayat Takalghat, they represent their respective wards, raise local concerns, participate in decision-making, and contribute to development initiatives such as infrastructure, sanitation, water supply, and welfare programs for the community.",
  },
  {
    name: "Mrs. Sadhanatai Sanjayji Meshram",
    designation: "Panchayat Member",
    term: "2024-2029",
    photo: "/user-profile-icon.jpg",
    description:
      "As elected Panchayat Members of Gram Panchayat Takalghat, they represent their respective wards, raise local concerns, participate in decision-making, and contribute to development initiatives such as infrastructure, sanitation, water supply, and welfare programs for the community.",
  },
  {
    name: "Ms. Komaltai Digambarji Katare",
    designation: "Panchayat Member",
    term: "2024-2029",
    photo: "/user-profile-icon.jpg",
    description:
      "As elected Panchayat Members of Gram Panchayat Takalghat, they represent their respective wards, raise local concerns, participate in decision-making, and contribute to development initiatives such as infrastructure, sanitation, water supply, and welfare programs for the community.",
  },
  {
    name: "Mrs. Alkatai Gopalrao Wankhede",
    designation: "Panchayat Member",
    term: "2024-2029",
    photo: "/user-profile-icon.jpg",
    description:
      "As elected Panchayat Members of Gram Panchayat Takalghat, they represent their respective wards, raise local concerns, participate in decision-making, and contribute to development initiatives such as infrastructure, sanitation, water supply, and welfare programs for the community.",
  },
  {
    name: "Shree. Madhukarrao kisanji Khode",
    designation: "Panchayat Member",
    term: "2024-2029",
    photo: "/user-profile-icon.jpg",
    description:
      "As elected Panchayat Members of Gram Panchayat Takalghat, they represent their respective wards, raise local concerns, participate in decision-making, and contribute to development initiatives such as infrastructure, sanitation, water supply, and welfare programs for the community.",
  },
  {
    name: "Mrs. REkhatai Rohitrao Tiwari",
    designation: "Panchayat Member",
    term: "2024-2029",
    photo: "/user-profile-icon.jpg",
    description:
      "As elected Panchayat Members of Gram Panchayat Takalghat, they represent their respective wards, raise local concerns, participate in decision-making, and contribute to development initiatives such as infrastructure, sanitation, water supply, and welfare programs for the community.",
  },
  {
    name: "Shree. Narendraji Ganpatrao Yesansure",
    designation: "Panchayat Member",
    term: "2024-2029",
    photo: "/user-profile-icon.jpg",
    description:
      "As elected Panchayat Members of Gram Panchayat Takalghat, they represent their respective wards, raise local concerns, participate in decision-making, and contribute to development initiatives such as infrastructure, sanitation, water supply, and welfare programs for the community.",
  },
  {
    name: "Shree. Chandrashekharrao Khushalrao Ingole",
    designation: "Panchayat Member",
    term: "2024-2029",
    photo: "/user-profile-icon.jpg",
    description:
      "As elected Panchayat Members of Gram Panchayat Takalghat, they represent their respective wards, raise local concerns, participate in decision-making, and contribute to development initiatives such as infrastructure, sanitation, water supply, and welfare programs for the community.",
  },
  {
    name: "Mrs. Bebitai Dineshrav Raut",
    designation: "Panchayat Member",
    term: "2024-2029",
    photo: "/user-profile-icon.jpg",
    description:
      "As elected Panchayat Members of Gram Panchayat Takalghat, they represent their respective wards, raise local concerns, participate in decision-making, and contribute to development initiatives such as infrastructure, sanitation, water supply, and welfare programs for the community.",
  },
  {
    name: "Smt. Suhasini M. Kolhe",
    designation: "Panchayat Adhikari",
    term: "2024-2029",
    photo: "/user-profile-icon.jpg",
    description:
      "As Panchayat Adhikari of Gram Panchayat Takalghat, [Officer Name] provides administrative guidance, ensures proper execution of government policies, supervises Gram Panchayat functions, and supports the Sarpanch, Upa-Sarpanch, and Members in delivering effective governance and development to the village.",
  },
];


const staff = [
  {
    name: "Shri. ABC",
    designation: "Gram Sevak",
    term: "-",
    photo: "/user-profile-icon.jpg",
    description:
      "Handles Panchayat office records, facilitates government communication, and supports all administrative work.",
  },
  {
    name: "Ms. ABC",
    designation: "Computer Operator",
    term: "-",
    photo: "/user-profile-icon.jpg",
    description:
      "Supports digital documentation and assists in administrative workflows.",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-200 via-white to-green-200">
      {/* 🔹 Hero Section (About Page style) */}
      <section className="relative w-full h-[800px]">
        <Image
          src="/img3.jpg" // apni background image ka path
          alt="Our Team"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">OUR TEAM</h1>
        </div>
      </section>

      {/* 🔹 Members Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight border-l-8 border-orange-500 pl-4 py-2 bg-gradient-to-r from-orange-50 via-white to-white shadow-sm mb-12 text-orange-600">
          Elected Members
        </h2>

        {electedMembers.map((person, idx) => (
          <div
            key={person.name}
            className={`flex flex-col md:flex-row items-center gap-8 mb-14 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <Image
              src={person.photo}
              alt={person.name}
              width={224}
              height={224}
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-xl border-4 border-[#f7931e] shadow-md"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#057c26] mb-1">
                {person.name}
              </h3>
              <div className="text-[#f7931e] font-semibold mb-2">
                {person.designation}
              </div>
              <span className="inline-block bg-[#ffe100] text-[#232323] text-sm font-semibold px-6 py-2 rounded-full mb-3">
                {person.term}
              </span>
              <p className="text-[#363636]">{person.description}</p>
            </div>
          </div>
        ))}

        {/* 🔹 Administrative Staff Section */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 tracking-tight border-l-8 border-green-400 pl-4 py-2 bg-gradient-to-r from-green-50 via-white to-white shadow-sm mb-6">
          Administrative Staff
        </h2>
        <p className="mb-8 text-[#4a4a4a]">
          A section dedicated to the key officials. Include the name, photo, and
          role of the Gram Sevak (Village Development Officer) and any other
          important staff like the computer operator or clerk.
        </p>
        {staff.map((person, idx) => (
          <div
            key={person.name}
            className={`flex flex-col md:flex-row items-center gap-8 mb-14 ${
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <Image
              src={person.photo}
              alt={person.name}
              width={208}
              height={208}
              className="w-44 h-44 md:w-52 md:h-52 object-cover rounded-xl border-4 border-[#ffe100] shadow-md"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-[#f7931e] mb-1">
                {person.name}
              </h3>
              <div className="text-[#057c26] font-semibold mb-2">
                {person.designation}
              </div>
              <span className="inline-block bg-[#ffe100] text-[#232323] text-sm font-semibold px-5 py-2 rounded-full mb-2">
                {person.term}
              </span>
              <p className="text-[#363636]">{person.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
