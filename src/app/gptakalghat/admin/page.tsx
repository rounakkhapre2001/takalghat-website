"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [contactsCount, setContactsCount] = useState(0);
  const [galleryCount, setGalleryCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);
  const [newsCount, setNewsCount] = useState(0);
  const [eventsCount, setEventsCount] = useState(0);

  useEffect(() => {
    async function checkUserAndFetch() {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/login");
        return;
      }

      try {
        const { count: cCount } = await supabase.from("contacts").select("*", { count: "exact", head: true });
        const { count: gCount } = await supabase.from("gallery").select("*", { count: "exact", head: true });
        const { count: tCount } = await supabase.from("team").select("*", { count: "exact", head: true });
        const { count: nCount } = await supabase.from("items").select("*", { count: "exact", head: true });
        const { count: eCount } = await supabase.from("events").select("*", { count: "exact", head: true });

        setContactsCount(cCount || 0);
        setGalleryCount(gCount || 0);
        setTeamCount(tCount || 0);
        setNewsCount(nCount || 0);
        setEventsCount(eCount || 0);
      } catch (err) {
        console.error("Error fetching counts:", err);
      }
    }

    checkUserAndFetch();
  }, [router]);

  const stats = [
    { label: "Contacts", count: contactsCount },
    { label: "Gallery Images", count: galleryCount },
    { label: "Team Members", count: teamCount },
    { label: "News Items", count: newsCount },
    { label: "Events Items", count: eventsCount },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0B6477]">Admin Dashboard</h1>
        <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white rounded-2xl shadow flex flex-col items-center sm:items-start text-center sm:text-left border-t-4 border-[#0AD1C8]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="text-base text-gray-500">{stat.label}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B6477]">{stat.count}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
