// PurchasePlayerCard.jsx
'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaFutbol,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import { PurchaseDelete } from "../PurchaseDelete/PurchaseDelete";

const PurchasePlayerCard = ({player}) => {
//   const player = {
//     _id: "6a0d4b459eb7a0d33be10bc2",
//     username: "Khuka Babu",
//     email: "khuka100@gmail.com",
//     userimage:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgx1kh0CTN4jVRmBRG5w1xUuaiQVzJcFAKA&s",
//     country: "England",
//     team: "The La Liga",
//     salary: "300000",
//     description:
//       "Theo lina the best player in England. He is one of the most popular players in England.",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Elvhsn8WTW_GconSz4JrZPRBM9TAZBFo_g&s",
//     sports: "Football",
//   };

  // Change Status Here
//   const status = "Approved";
//   const status = "Pending";

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        whileHover={{ y: -10 }}
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#111827] via-[#1e293b] to-[#0f172a] shadow-2xl border border-white/10"
      >
        {/* Glow Effects */}
        <div className="absolute -top-20 -right-20 h-60 w-60 bg-cyan-500/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 h-60 w-60 bg-purple-500/20 blur-3xl rounded-full"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10 relative z-10">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            {/* User */}
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={player.userimage}
                 width={200}
              height={200}
                alt="user"
                className="w-16 h-16 rounded-full border-2 border-cyan-400 object-cover"
              />

              <div>
                <h3 className="text-white text-xl font-bold">
                  {player.username}
                </h3>
                <p className="text-gray-400 text-sm">{player.email}</p>
              </div>
            </div>

            {/* Title */}
            <motion.h1
              animate={{
                textShadow: [
                  "0px 0px 10px rgba(34,211,238,0.2)",
                  "0px 0px 20px rgba(34,211,238,0.7)",
                  "0px 0px 10px rgba(34,211,238,0.2)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            >
              Elite Football Player
            </motion.h1>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-6">
              {player.description}
            </p>

            {/* Player Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-200">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span>{player.country}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-200">
                <FaFutbol className="text-cyan-400" />
                <span>{player.team}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-200">
                <FaMoneyBillWave className="text-cyan-400" />
                <span>${player.salary}</span>
              </div>
            </div>

            {/* STATUS CARD */}
            <motion.div
              animate={{
                boxShadow:
                  status === "Approved"
                    ? [
                        "0px 0px 10px rgba(34,197,94,0.2)",
                        "0px 0px 25px rgba(34,197,94,0.6)",
                        "0px 0px 10px rgba(34,197,94,0.2)",
                      ]
                    : [
                        "0px 0px 10px rgba(234,179,8,0.2)",
                        "0px 0px 25px rgba(234,179,8,0.6)",
                        "0px 0px 10px rgba(234,179,8,0.2)",
                      ],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
              }}
              className={`mb-8 p-5 rounded-2xl border backdrop-blur-xl ${
                player.status === "Approved"
                  ? "bg-green-500/10 border-green-400/30"
                  : "bg-yellow-500/10 border-yellow-400/30"
              }`}
            >
              <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-2">
                Purchase Status
              </p>

              <div className="flex items-center gap-3">
                {player.status === "Approved" ? (
                  <FaCheckCircle className="text-green-400 text-2xl" />
                ) : (
                  <FaClock className="text-yellow-400 text-2xl" />
                )}

                <h2
                  className={`text-xl font-bold ${
                    player.status === "Approved"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }`}
                >
                  {player.status}
                </h2>
              </div>
            </motion.div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Purchase */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(34,211,238,0.6)",
                }}
                className="px-8 py-3 rounded-xl bg-cyan-500 text-white font-semibold shadow-lg"
              >
                Purchase Now
              </motion.button>

              {/* Cancel Purchase */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ef4444",
                  boxShadow: "0px 0px 20px rgba(239,68,68,0.5)",
                }}
                className="px-8 py-3 rounded-xl border border-red-400 text-red-300 font-semibold backdrop-blur-md transition-all duration-300"
              >
                <PurchaseDelete player={player} purchaseId={player._id}></PurchaseDelete>
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <motion.img
              whileHover={{
                scale: 1.05,
                rotate: 1,
              }}
              transition={{ duration: 0.4 }}
              src={player.imageUrl}
              width={200}
              height={200}
              alt="player"
              className="w-full max-w-md rounded-3xl object-cover border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            />

            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute top-5 right-5 bg-white/10 backdrop-blur-lg border border-white/20 px-5 py-3 rounded-2xl"
            >
              <p className="text-cyan-300 text-sm font-medium">
                {player.sports}
              </p>

              <h2 className="text-white font-bold text-lg">
                {player.team}
              </h2>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PurchasePlayerCard;