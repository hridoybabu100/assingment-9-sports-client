"use client";

import { motion } from "framer-motion";
import {
  Star,
  Trophy,
  Users,
  Medal,
  Sparkles,
} from "lucide-react";

const ratings = [
  {
    id: 1,
    title: "Player Performance",
    rating: "4.9",
    total: "12K+ Reviews",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Fan Satisfaction",
    rating: "4.8",
    total: "9K+ Reviews",
    icon: Users,
  },
  {
    id: 3,
    title: "League Quality",
    rating: "5.0",
    total: "15K+ Reviews",
    icon: Medal,
  },
];

export default function RatingSection() {
  return (
    <section className="relative overflow-hidden bg-[#050b18] px-4 py-24 text-white sm:px-6 lg:px-8">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Community Ratings
          </div>

          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Trusted By Thousands Of
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Sports Fans
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Our sports platform delivers premium performance,
            modern experience, and top-rated player management.
          </p>
        </motion.div>

        {/* Rating Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

          {ratings.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-2xl"
              >

                {/* Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                {/* Icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Rating */}
                <div className="relative z-10 mt-8">

                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.div
                        key={star}
                        whileHover={{ scale: 1.3 }}
                      >
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  <h3 className="mt-5 text-5xl font-black text-white">
                    {item.rating}
                  </h3>

                  <p className="mt-2 text-lg font-semibold text-cyan-400">
                    {item.title}
                  </p>

                  <p className="mt-2 text-gray-400">
                    {item.total}
                  </p>

                  {/* Progress */}
                  <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.3,
                      }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-linear-to-r from-cyan-500 to-blue-600"
                    />
                  </div>
                </div>

                {/* Floating Blur */}
                <div className="absolute -bottom-10 right-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"></div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Review Box */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative mt-20 overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl"
        >

          <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-blue-500/10"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-black">
              More Than
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                50K+
              </span>{" "}
              Happy Sports Users
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
              Join thousands of sports fans, leagues, and athletes
              using our modern sports management platform worldwide.
            </p>

            <button className="mt-8 rounded-2xl bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-600 px-8 py-4 font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/30">
              Explore Ratings
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}