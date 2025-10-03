"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [stats, setStats] = useState({
    contacts: 0,
    gallery: 0,
    team: 0,
    news: 0,
    events: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) {
        router.push("/login");
        return;
      }

      try {
        const c = await supabase.from("contacts").select("*", { count: "exact", head: true });
        const g = await supabase.from("gallery").select("*", { count: "exact", head: true });
        const t = await supabase.from("team").select("*", { count: "exact", head: true });
        const n = await supabase.from("items").select("*", { count: "exact", head: true });
        const e = await supabase.from("events").select("*", { count: "exact", head: true });

        setStats({
          contacts: c.count || 0,
          gallery: g.count || 0,
          team: t.count || 0,
          news: n.count || 0,
          events: e.count || 0,
        });
      } catch (err) {
        console.error("Error fetching stats:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) router.push("/login");
    });

    return () => listener.subscription.unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) return <div className="p-4 text-center">Loading...</div>;

  return (
    <div className="p-4 sm:p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-2xl font-bold text-[#0B6477]">Welcome to Admin Dashboard 🎉</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">Logout</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {Object.entries(stats).map(([label, count], i) => (
          <motion.div key={i} className="p-6 sm:p-8 lg:p-10 bg-white rounded-2xl shadow border-t-4 border-[#0AD1C8] flex flex-col items-center sm:items-start text-center sm:text-left" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}>
            <p className="text-base sm:text-lg text-gray-500">{label.charAt(0).toUpperCase() + label.slice(1)}</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B6477]">{count}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
