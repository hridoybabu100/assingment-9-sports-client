"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Flame,
  ShieldCheck,
  Star,
  Users,
  PlayCircle,
} from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Elite Champions",
    desc: "Explore world-class athletes and legendary champions from every major sport.",
  },
  {
    icon: Flame,
    title: "Live Excitement",
    desc: "Feel the energy of thrilling matches, live scores, and unforgettable moments.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Platform",
    desc: "Secure and reliable sports platform with premium experience and modern design.",
  },
];

const stats = [
  { number: "500+", label: "Professional Players" },
  { number: "120+", label: "Global Teams" },
  { number: "80+", label: "International Tournaments" },
  { number: "1M+", label: "Sports Fans" },
];

const SportsFeatureSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#081120] py-28 text-white">
      
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
            <Star className="h-4 w-4" />
            Why Choose Us
          </div>

          <h2 className="mb-6 text-4xl font-black leading-tight sm:text-5xl">
            The Ultimate Modern
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Sports Experience
            </span>
          </h2>

          <p className="text-lg leading-8 text-gray-400">
            Discover a next-level sports platform with immersive visuals,
            live action, player profiles, and premium experiences built for
            true sports lovers.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100"></div>

                <div className="relative z-10">
                  
                  {/* Icon */}
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-xl shadow-cyan-500/20">
                    <Icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl font-bold">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="leading-8 text-gray-400">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-28 grid grid-cols-2 gap-6 lg:grid-cols-4">
          
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-[30px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <h2 className="mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl font-black text-transparent">
                {item.number}
              </h2>

              <p className="text-gray-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative mt-28 overflow-hidden rounded-[40px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-10 backdrop-blur-3xl lg:p-16"
        >
          
          <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
            
            {/* Left */}
            <div className="max-w-2xl">
              <h2 className="mb-5 text-4xl font-black leading-tight">
                Ready To Explore The
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {" "}
                  Future Of Sports?
                </span>
              </h2>

              <p className="text-lg leading-8 text-gray-300">
                Join thousands of sports lovers and experience a modern
                sports universe with premium design and powerful features.
              </p>
            </div>

            {/* Button */}
            <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-5 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/30">
              <PlayCircle className="h-6 w-6" />
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SportsFeatureSection;