import Image from "next/image";
import { FaTrophy, FaMapMarkerAlt, FaUsers, FaMoneyBill } from "react-icons/fa";

export default function ProfilePage({data}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050b18] via-[#07111f] to-[#0b1a33] px-4 py-10 text-white">

      <div className="mx-auto max-w-5xl">

        {/* Profile Card */}
        <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">

          {/* Glow */}
          <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-cyan-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">

            {/* Left Side */}
            <div className="flex flex-col items-center justify-center p-10 text-center">

              {/* Avatar */}
              <div className="relative">
                <Image
                  src={data?.image}
                  width={200}
                  height={200}
                  alt="profile"
                  className="h-40 w-40 rounded-full border-4 border-cyan-400/30 object-cover shadow-xl"
                />

                {/* Glow ring */}
                <div className="absolute -bottom-4 left-1/2 h-6 w-32 -translate-x-1/2 rounded-full bg-cyan-400/30 blur-2xl"></div>
              </div>

              {/* Name */}
              <h2 className="mt-6 text-3xl font-black tracking-wide">
                {data?.name}
              </h2>

              {/* Role */}
              <p className="mt-1 text-cyan-400 font-medium">
                Professional {data?.sports} Player
              </p>

              {/* Badge */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 border border-cyan-400/20">
                <FaTrophy />
                Elite Athlete
              </div>
            </div>

            {/* Right Side */}
            <div className="p-8 sm:p-10 space-y-6">

              <h3 className="text-2xl font-bold text-cyan-400">
                Player Information
              </h3>

              {/* Info Cards */}
              <div className="space-y-4 text-sm">

                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-5 py-4">
                  <span className="flex items-center gap-2 text-gray-400">
                    <FaMapMarkerAlt /> Country
                  </span>
                  <span className="font-semibold">{data?.country}</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-5 py-4">
                  <span className="flex items-center gap-2 text-gray-400">
                    <FaUsers /> Team
                  </span>
                  <span className="font-semibold">{data?.team}</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-5 py-4">
                  <span className="flex items-center gap-2 text-gray-400">
                    <FaMoneyBill /> Salary
                  </span>
                  <span className="font-bold text-green-400">
                    {data?.salary || "N/A"}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="rounded-2xl bg-white/5 p-5 text-gray-300 leading-7">
                {data?.description ||
                  "This player is one of the top performers in the sports world with outstanding skills and achievements."}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">

                <button className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/30">
                  Edit Profile
                </button>

                <button className="w-full rounded-2xl border border-red-500/30 bg-red-500/10 py-3 font-semibold text-red-400 transition hover:bg-red-500/20">
                  Delete Player
                </button>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="rounded-2xl bg-white/5 p-6 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">120+</h3>
            <p className="text-gray-400 text-sm">Matches</p>
          </div>

          <div className="rounded-2xl bg-white/5 p-6 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">45</h3>
            <p className="text-gray-400 text-sm">Goals</p>
          </div>

          <div className="rounded-2xl bg-white/5 p-6 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">18</h3>
            <p className="text-gray-400 text-sm">Trophies</p>
          </div>

          <div className="rounded-2xl bg-white/5 p-6 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">9.5</h3>
            <p className="text-gray-400 text-sm">Rating</p>
          </div>

        </div>

      </div>
    </div>
  );
}