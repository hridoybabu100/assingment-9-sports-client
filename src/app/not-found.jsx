"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, Trophy } from "lucide-react";

const NotFoundPage = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07111f] px-6 text-white">
      
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      {/* Floating Ball */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute top-24 right-20 hidden lg:block"
      >
        <div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-8 shadow-2xl shadow-cyan-500/30">
          <Trophy className="h-14 w-14 text-white" />
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        
        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-[120px] font-black leading-none text-transparent sm:text-[180px]"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 text-4xl font-black sm:text-5xl"
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-gray-400"
        >
          The page you are looking for might have been removed,
          renamed, or is temporarily unavailable.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          
          {/* Home Button */}
          <Link href="/">
            <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/30">
              <Home className="h-5 w-5" />
              Back To Home
            </button>
          </Link>

          {/* Browse Button */}
          <Link href="/players">
            <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl">
              <Search className="h-5 w-5" />
              Browse Players
            </button>
          </Link>
        </motion.div>

        {/* Bottom Card */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="mx-auto mt-20 max-w-2xl rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
        >
          <h3 className="mb-4 text-2xl font-bold text-cyan-400">
            Need Help?
          </h3>

          <p className="leading-8 text-gray-400">
            Try checking the URL again or return to the homepage
            to continue exploring the sports universe.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundPage;