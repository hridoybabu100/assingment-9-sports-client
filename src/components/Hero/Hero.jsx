"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlay, FaTrophy } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#07111f] text-white">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 lg:flex-row lg:px-12">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
            <FaTrophy />
            World Sports Community
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Feel The Power <br />
            Of <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sports
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-xl text-lg leading-8 text-gray-300">
            Discover legendary players, iconic teams, and unforgettable
            moments from the world of sports. Experience the energy,
            passion, and greatness like never before.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            
            <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/40">
              Explore Players
            </button>

            <button className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-xl transition-all duration-300 hover:bg-white/20">
              <FaPlay />
              Watch Highlights
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-cyan-400">500+</h2>
              <p className="text-gray-400">Players</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">120+</h2>
              <p className="text-gray-400">Teams</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">50+</h2>
              <p className="text-gray-400">Countries</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Main Image */}
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop"
              width={600}
              height={600}
              alt="sports"
              className="rounded-[40px] object-cover shadow-2xl"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-8 left-1/2 flex w-[260px] -translate-x-1/2 items-center gap-4 rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
              
              <div className="rounded-2xl bg-cyan-500 p-4">
                <FaTrophy className="text-2xl text-white" />
              </div>

              <div>
                <h3 className="text-lg font-bold">Championship</h3>
                <p className="text-sm text-gray-300">
                  Experience the ultimate sports thrill
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;