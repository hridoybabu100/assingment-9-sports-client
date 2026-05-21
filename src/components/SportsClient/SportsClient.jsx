"use client";

import SportsCard from "@/components/SportCard/SportCard";
import { motion } from "framer-motion";

const SportsClient = ({ sports }) => {
  return (
    <div className="min-h-screen py-16 px-4 md:px-8 lg:px-12 bg-linear-to-br from-[#050b18] via-[#07111f] to-[#0b1a33] text-white">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            All <span className="text-cyan-400">Players</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore modern sports players with smooth UI and responsive design
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {[
            { label: "Players", value: sports.length },
            { label: "Teams", value: "20+" },
            { label: "Countries", value: "15+" },
            { label: "Level", value: "Pro" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-md"
            >
              <h2 className="text-3xl font-bold text-cyan-400">
                {item.value}
              </h2>
              <p className="text-gray-300 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          <input
            type="text"
            placeholder="Search players..."
            className="w-full md:w-100 px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-white outline-none focus:border-cyan-400"
          />

          <div className="flex gap-3 flex-wrap">
            <button className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition">
              All
            </button>
            <button className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
              Football
            </button>
            <button className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
              Cricket
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sports.map((spot, index) => (
            <motion.div
              key={spot._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="transition"
            >
              <SportsCard spot={spot} />
            </motion.div>
          ))}
        </div>

        {/* Extra Feature Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Build Your <span className="text-cyan-400">Dream Team</span>
              </h2>

              <p className="text-gray-400 mt-5 leading-7">
                Manage players, explore stats and create your own sports collection
                with a modern dashboard experience.
              </p>

              <button className="mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl">
                Get Started
              </button>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: "Speed", value: "Fast", color: "text-cyan-400" },
                { label: "UI", value: "Modern", color: "text-pink-400" },
                { label: "Performance", value: "99%", color: "text-yellow-400" },
                { label: "Support", value: "24/7", color: "text-green-400" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#0c1a30] p-6 rounded-2xl text-center hover:scale-105 transition"
                >
                  <h3 className={`text-2xl font-bold ${item.color}`}>
                    {item.value}
                  </h3>
                  <p className="text-gray-300 mt-2">{item.label}</p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default SportsClient;