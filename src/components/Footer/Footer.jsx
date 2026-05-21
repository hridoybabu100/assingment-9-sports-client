import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBasketballBall,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#07111f] text-white">
      
      {/* Glow Effect */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 p-3">
                <FaBasketballBall className="text-2xl text-white" />
              </div>

              <h2 className="text-3xl font-black tracking-wide">
                Sportify
              </h2>
            </div>

            <p className="leading-7 text-gray-400">
              Discover world-class athletes, legendary teams, and exciting
              sports moments in one modern platform.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              
              <a
                href="#"
                className="rounded-full border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-500"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-red-500"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-cyan-400">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 hover:pl-2 hover:text-cyan-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/players"
                  className="transition-all duration-300 hover:pl-2 hover:text-cyan-400"
                >
                  Players
                </Link>
              </li>

              <li>
                <Link
                  href="/teams"
                  className="transition-all duration-300 hover:pl-2 hover:text-cyan-400"
                >
                  Teams
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition-all duration-300 hover:pl-2 hover:text-cyan-400"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-cyan-400">
              Sports
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="transition hover:text-cyan-400">Football</li>
              <li className="transition hover:text-cyan-400">Cricket</li>
              <li className="transition hover:text-cyan-400">Basketball</li>
              <li className="transition hover:text-cyan-400">Tennis</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-cyan-400">
              Newsletter
            </h3>

            <p className="mb-5 text-gray-400">
              Subscribe to get latest sports news and updates.
            </p>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl placeholder:text-gray-500 focus:border-cyan-500"
              />

              <button className="w-full rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 px-5 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/30">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-gray-500 md:flex-row">
          
          <p>
            © 2026 Sportify. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-cyan-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-cyan-400"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;