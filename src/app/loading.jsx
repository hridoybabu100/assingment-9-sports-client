"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const Loading = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#07111f] text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-6">

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-5 shadow-xl shadow-cyan-500/30"
        >
          <Trophy className="h-10 w-10 text-white" />
        </motion.div>

        {/* Spinner */}
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>

          <div className="absolute inset-0 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin"></div>
        </div>

        {/* Loading Text */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold tracking-wide"
        >
          Loading Sports Data...
        </motion.h2>

        <p className="text-gray-400 text-sm">
          Please wait, we are fetching the best players & stats
        </p>

        {/* Animated Dots */}
        <div className="flex gap-2 mt-2">
          <span className="h-2 w-2 bg-cyan-400 rounded-full animate-bounce"></span>
          <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce delay-150"></span>
          <span className="h-2 w-2 bg-purple-400 rounded-full animate-bounce delay-300"></span>
        </div>
      </div>
    </section>
  );
};

export default Loading;