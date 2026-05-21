"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Trophy,
  Star,
  Users,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Cricket League Hub",
    category: "Sports Management",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop",
    description:
      "Modern cricket tournament platform with player stats and live scoring.",
  },
  {
    id: 2,
    title: "Football Analytics",
    category: "Performance Tracking",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
    description:
      "AI-powered football analytics dashboard for teams and coaches.",
  },
  {
    id: 3,
    title: "Basketball Arena",
    category: "Event Platform",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
    description:
      "Premium basketball event management and ticket booking system.",
  },
];

export default function SportsProjectsSection() {
  return (
    <section className="relative overflow-hidden bg-[#050b18] px-4 py-24 text-white sm:px-6 lg:px-8">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Featured Sports Projects
          </div>

          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Explore Our Modern
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Sports Platforms
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Innovative sports management platforms with premium UI,
            advanced analytics, and immersive user experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#050b18] via-black/20 to-transparent"></div>

                {/* Category */}
                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300 backdrop-blur-xl">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">

                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Trophy className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      Sports Project
                    </span>
                  </div>

                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-cyan-400" />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-black transition-colors duration-300 group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="mt-6 flex items-center gap-4">

                  <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2">
                    <Users className="h-4 w-4 text-cyan-400" />
                    <span className="text-sm text-gray-300">
                      12K Users
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">
                      4.9 Rating
                    </span>
                  </div>
                </div>

                {/* Button */}
                <button className="mt-8 w-full rounded-2xl bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-600 py-4 font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/30">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}