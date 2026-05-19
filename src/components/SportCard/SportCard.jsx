import Image from "next/image";
import Link from "next/link";

export default function SportsCard({ spot }) {
  const { name, _id, country, sports, image, team } = spot;

  return (
    <div className="w-full font-sans bg-linear-to-br from-[#050b18] via-[#07111f] to-[#0b1a33]">
      
      <div className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0b1220] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/30">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-indigo-500/5 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

        {/* Badge */}
        <div className="absolute right-4 top-4 z-20">
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur-xl border border-cyan-400/20">
            {sports}
          </span>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center bg-linear-to-br from-cyan-500/10 to-indigo-500/10 py-8">
          <div className="relative">
            <Image
              src={image}
              width={120}
              height={120}
              alt={name}
              className="h-28 w-28 rounded-full border-4 border-white/10 object-cover shadow-xl transition-transform duration-500 group-hover:scale-110"
            />

            {/* Glow ring */}
            <div className="absolute -bottom-3 left-1/2 h-6 w-28 -translate-x-1/2 rounded-full bg-cyan-400/30 blur-2xl"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 text-white">

          {/* Name */}
          <h2 className="text-center text-2xl font-bold tracking-wide text-white">
            {name}
          </h2>

          {/* Subtitle */}
          <p className="mt-1 text-center text-sm text-cyan-400">
            Professional {sports} Player
          </p>

          {/* Info */}
          <div className="mt-6 space-y-3 text-sm">

            <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <span className="text-gray-400">Country</span>
              <span className="font-semibold text-white">{country}</span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <span className="text-gray-400">Team</span>
              <span className="font-semibold text-white">{team}</span>
            </div>

          </div>

          {/* Button */}
          <Link href={`/sports/${_id}`}>
            <button className="mt-6 w-full rounded-2xl bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-600 py-3 font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/40 active:scale-95">
              View Details
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}