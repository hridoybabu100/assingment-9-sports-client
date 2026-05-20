"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Bell,
  ChevronDown,
  Crown,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
  Wallet,
  ShieldCheck,
} from "lucide-react";


const NavbarProfile = () => {
  const { data: session, isPending } = authClient.useSession();
  const users = session;
  const user = users?.user;
//    console.log('session', user);

  const handleOut = async () => {
    await authClient.signOut();
  };
  return (
    <div className="hidden items-center gap-4 lg:flex">
      {/* Notification */}
      <motion.button
        whileHover={{ y: -3 }}
        className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-blue-500/10 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>

        <Bell className="relative z-10 h-5 w-5" />

        {/* Notification Dot */}
        <span className="absolute right-3 top-3 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400"></span>
        </span>
      </motion.button>

      {/* Profile Dropdown */}
      <div className="group relative">
        {/* Profile Button */}
        <motion.button
          whileHover={{ y: -3 }}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/10"
        >
          {/* Avatar */}
          <div className="relative">
            {/* Gradient Ring */}
            <div className="absolute -inset-0.5 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 blur-[1px]"></div>

            <Image
              src={user?.image}
              alt={user?.name}
              width={48}
              height={48}
              className="relative h-12 w-12 rounded-full object-cover border-2 border-[#050b18]"
            />

            {/* Online Status */}
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#050b18] bg-green-400 shadow-lg shadow-green-400/50"></span>
          </div>

          {/* User Info */}
          <div className="hidden text-left xl:block">
            <h4 className="text-sm font-bold text-white">{user?.name}</h4>

            <div className="flex items-center gap-1 text-xs text-cyan-400">
              <Crown className="h-3.5 w-3.5" />
              Premium Member
            </div>
          </div>

          {/* Arrow */}
          <ChevronDown className="h-4 w-4 text-gray-400 transition-transform duration-300 group-hover:rotate-180" />
        </motion.button>

        {/* Dropdown Menu */}
        <div className="invisible absolute right-0 top-20 z-50 w-80 translate-y-5 rounded-[30px] border border-white/10 bg-[#081120]/95 p-5 opacity-0 shadow-2xl backdrop-blur-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          {/* Top User Info */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-cyan-500/10 to-blue-500/10 p-5">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl"></div>

            <div className="relative flex items-center gap-4">
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-full bg-linear-to-r from-cyan-400 to-blue-600 blur-[1px]"></div>

                <Image
                  src={user?.image}
                  alt={user.name}
                  width={60}
                  height={60}
                  className="relative h-14 w-14 rounded-full border-2 border-[#081120] object-cover"
                />

                <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#081120] bg-green-400"></span>
              </div>

              <div>
                <h3 className="text-lg font-black text-white">{user?.name}</h3>

                <p className="text-sm text-gray-400">{user?.email}</p>

                <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Verified Account
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="mt-5 space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-white/5 hover:text-cyan-400"
            >
              <LayoutDashboard className="h-5 w-5" />
              Dashboard
            </Link>

            <Link
              href="/profile"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-white/5 hover:text-cyan-400"
            >
              <User className="h-5 w-5" />
              My Profile
            </Link>

            <Link
              href="/subscription"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-white/5 hover:text-cyan-400"
            >
              <Wallet className="h-5 w-5" />
              Subscription
            </Link>

            <Link
              href="/settings"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-white/5 hover:text-cyan-400"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </div>

          {/* Bottom */}
          <div className="mt-5 border-t border-white/10 pt-5">
            <button
              onClick={handleOut}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-red-500 to-rose-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/30"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarProfile;
