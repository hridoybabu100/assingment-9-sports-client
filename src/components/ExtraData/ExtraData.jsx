"use client";

import { useEffect, useMemo, useState } from "react";
import SportsCard from "../SportCard/SportCard";

const ExtraData = () => {
  const [extraFeatures, setExtraFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search State
  const [search, setSearch] = useState("");

  // Filter State
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/data`, {
        cache: "no-store",
      });

      const data = await res.json();
      setExtraFeatures(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  // Smart Search + Filter
  const filteredPlayers = useMemo(() => {
    return extraFeatures.filter((player) => {
      const matchesSearch =
        player.name?.toLowerCase().includes(search.toLowerCase()) ||
        player.team?.toLowerCase().includes(search.toLowerCase()) ||
        player.country?.toLowerCase().includes(search.toLowerCase()) ||
        player.sports?.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = category === "All" || player.sports === category;

      return matchesSearch && matchesCategory;
    });
  }, [extraFeatures, search, category]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050b18]">
        <div className="w-14 h-14 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#050b18] via-[#07111f] to-[#0b1a33] py-16">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            All <span className="text-cyan-400">Players</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Explore world-class athletes with modern UI, smooth animation,
            responsive layout and premium sports experience.
          </p>

          <div className="w-28 sm:w-36 h-1 bg-cyan-400 mx-auto mt-5 rounded-full animate-pulse"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 sm:p-6 text-center hover:scale-105 duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400">
              {filteredPlayers.length}+
            </h2>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">Players</p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 sm:p-6 text-center hover:scale-105 duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-400">
              50+
            </h2>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">Teams</p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 sm:p-6 text-center hover:scale-105 duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400">
              20+
            </h2>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">Countries</p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 sm:p-6 text-center hover:scale-105 duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-400">
              100%
            </h2>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">
              Responsive
            </p>
          </div>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-5 mb-12">
          {/* Smart Search Box */}
          <div className="relative w-full xl:w-105 group">
            <input
              type="text"
              placeholder="Search player, country, team..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-5 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-gray-400 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-xl"
            />

            {/* Search Icon */}
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400 group-focus-within:scale-110 duration-300">
              🔍
            </div>

            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-xl opacity-0 group-focus-within:opacity-100 duration-500 -z-10"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {["All", "Football", "Cricket", "Basketball"].map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`px-5 py-2.5 rounded-xl font-medium duration-300 ${
                  category === item
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* No Data Found */}
        {filteredPlayers.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-white">
              No Player Found 😢
            </h2>

            <p className="text-gray-400 mt-4">
              Try searching with another keyword.
            </p>
          </div>
        )}

        {/* Player Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 lg:gap-8">
          {filteredPlayers.map((extra, index) => (
            <div
              key={extra._id}
              className="group transform hover:-translate-y-2 hover:scale-[1.02] duration-500"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 duration-500"></div>

                {/* Card */}
                <div className="relative z-10">
                  <SportsCard spot={extra} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Join The Sports Community
          </h2>

          <p className="text-gray-400 mt-4 mb-8 text-sm sm:text-base max-w-2xl mx-auto">
            Discover premium athletes and modern sports experiences with fully
            responsive design and smooth UI interaction.
          </p>

          <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105 duration-300">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExtraData;
