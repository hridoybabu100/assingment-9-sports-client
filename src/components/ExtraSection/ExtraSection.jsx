"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Trophy,
  ShieldCheck,
  Activity,
  Users,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Live Match Analytics",
    description:
      "Track player performance, match stats, and team analytics in real time.",
    icon: Activity,
  },
  {
    id: 2,
    title: "Elite Player Profiles",
    description:
      "Modern player profiles with achievements, ratings, and career highlights.",
    icon: Trophy,
  },
  {
    id: 3,
    title: "Secure Sports Platform",
    description:
      "Advanced security system with reliable sports data management.",
    icon: ShieldCheck,
  },
];

export default function ExtraSportsSection() {
  return (
    <section className="relative overflow-hidden bg-[#050b18] px-4 py-24 text-white sm:px-6 lg:px-8">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Premium Sports Experience
          </div>

          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Build The Future Of
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Sports Technology
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Powerful sports management platform with modern UI,
            advanced analytics, and immersive athlete experiences.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.id}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
                >

                  {/* Glow */}
                  <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                  <div className="relative z-10 flex gap-5">

                    {/* Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-black transition-colors duration-300 group-hover:text-cyan-400">
                        {feature.title}
                      </h3>

                      <p className="mt-3 leading-7 text-gray-400">
                        {feature.description}
                      </p>

                      <button className="mt-5 flex items-center gap-2 font-medium text-cyan-400 transition-all duration-300 hover:gap-4">
                        Learn More
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl">

              {/* Image */}
              <div className="relative h-[550px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop"
                  alt="sports"
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-black/20 to-transparent"></div>
              </div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute left-6 top-6 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-cyan-400" />

                  <div>
                    <h4 className="text-2xl font-black">50K+</h4>
                    <p className="text-sm text-gray-300">
                      Active Players
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 w-full p-8">

                <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">

                  <h3 className="text-3xl font-black">
                    Next Generation Sports Platform
                  </h3>

                  <p className="mt-4 leading-7 text-gray-300">
                    Experience premium sports management with modern
                    animations, responsive UI, and immersive user interactions.
                  </p>

                  <button className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-8 py-4 font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/30">
                    Explore Platform
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}