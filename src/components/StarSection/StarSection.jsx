"use client"

import { motion } from "framer-motion"
import {
  Trophy,
  ShieldCheck,
  Users,
  Star,
} from "lucide-react"

const features = [
  {
    id: 1,
    title: "Top Rated Players",
    description:
      "Explore world-class athletes with detailed profiles, ratings, and performance history.",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Secure Purchase",
    description:
      "Buy players safely with trusted payment systems and secure authentication.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Team Management",
    description:
      "Create your dream squad and manage players with powerful tools.",
    icon: Users,
  },
  {
    id: 4,
    title: "Premium Experience",
    description:
      "Enjoy smooth animations, modern UI, and fast performance across all devices.",
    icon: Star,
  },
]

const StarSection = () => {
  return (
    <section className="bg-[#050816] text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-semibold tracking-widest uppercase">
            Features
          </p>

          <h2 className="text-4xl lg:text-6xl font-black mt-4 leading-tight">
            Powerful Features <br />
            For Sports Lovers
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Everything you need to explore, manage, and purchase your favorite
            sports players in one smart platform.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl overflow-hidden"
              >

                {/* Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6"
                >
                  <Icon className="w-8 h-8 text-blue-400" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Border */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-500"></div>

              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StarSection;