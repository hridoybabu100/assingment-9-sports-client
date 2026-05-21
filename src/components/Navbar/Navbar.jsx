"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Trophy } from "lucide-react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

import NavbarProfile from "../NavbarProfile/NavbarProfile";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const users = session;
  const user = users?.user;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Players", path: "/sports" },
    { name: "Add-Players", path: "/add-player" },
    { name: "Player-Purchase", path: "/purchase" },
    { name: "Profile", path: "/profile" },
    // { name: "Join Now", path: "/register" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#07111f]/70 backdrop-blur-2xl">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 p-3 shadow-lg shadow-cyan-500/30">
              <Trophy className="h-6 w-6 text-white" />
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-wide text-white">
                Sportify
              </h1>

              <p className="text-xs tracking-[0.3em] text-cyan-400">
                SPORTS HUB
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.nav
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden items-center gap-8 lg:flex"
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              className="relative group"
            >
              <Link
                href={link.path}
                className="text-sm font-medium tracking-wide text-gray-300 transition duration-300 hover:text-cyan-400"
              >
                {link.name}
              </Link>

              {/* Animated Underline */}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-linear-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.div>
          ))}
        </motion.nav>

        {/* Right Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden items-center gap-4 lg:flex"
        >
          {user ? (
            <NavbarProfile></NavbarProfile>
          ) : (
            <>
              <Link href={"/login"}>
                <button className="rounded-2xl border border-cyan-500/30 bg-white/5 px-5 py-3 font-medium text-cyan-400 backdrop-blur-xl transition-all duration-300 hover:bg-cyan-500/10">
                  Login
                </button>
              </Link>

              <Link href={"/register"}>
                <button className="rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30">
                  Join Now
                </button>
              </Link>
            </>
          )}
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-white backdrop-blur-xl lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: open ? 1 : 0,
          height: open ? "auto" : 0,
        }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden border-t border-white/10 bg-[#07111f]/95 backdrop-blur-2xl lg:hidden"
      >
        <div className="flex flex-col gap-6 px-6 py-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{
                opacity: open ? 1 : 0,
                x: open ? 0 : -30,
              }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.path}
                className="block text-lg font-medium text-gray-300 transition hover:text-cyan-400"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          {/* Mobile Buttons */}
          {/* Mobile Buttons */}
          {/* Mobile Buttons */}
          <div className="flex flex-col gap-4 pt-4">
            {/* Extra Smart Feature Card */}
            {user && (
              <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 p-5 backdrop-blur-2xl">
                {/* Glow */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/20 blur-3xl"></div>

                <div className="relative z-10">
                  <h2 className="text-lg font-bold text-white">
                    Welcome Back 👋
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    Explore premium players, manage purchases, and enjoy the
                    modern sports experience directly from your mobile device.
                  </p>

                  {/* Mini Stats */}
                  <div className="mt-4 flex items-center gap-3">
                    <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
                      <p className="text-xs text-cyan-300">Players</p>
                      <h3 className="text-sm font-bold text-white">500+</h3>
                    </div>

                    <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 px-4 py-2">
                      <p className="text-xs text-blue-300">Teams</p>
                      <h3 className="text-sm font-bold text-white">120+</h3>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {user ? (
              <button
                onClick={async () => {
                  await authClient.signOut();
                  setOpen(false);
                }}
                className="group relative overflow-hidden rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-3 font-medium text-red-400 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-red-500/20"
              >
                {/* Glow Effect */}
                <span className="absolute inset-0 bg-linear-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                <span className="relative z-10 flex gap-2flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-red-500 to-rose-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/30">
                  Logout
                </span>
              </button>
            ) : (
              <>
                <Link href={"/login"}>
                  <button className="w-full rounded-2xl border border-cyan-500/30 bg-white/5 px-5 py-3 font-medium text-cyan-400 backdrop-blur-xl transition-all duration-300 hover:bg-cyan-500/10">
                    Login
                  </button>
                </Link>

                <Link href={"/register"}>
                  <button className="w-full rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30">
                    Join Now
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
