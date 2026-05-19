import Image from "next/image";
import Link from "next/link";

export default function SportsCard({ spot }) {
  const {
    name,
    _id,
    description,
    country,
    sports,
    category,
    image,
    salary,
    team,
  } = spot;
  return (
    <div className="">
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/30">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

        {/* Image */}
        <div className="mx-auto">
          <Image
            src={image}
            width={100}
            height={100}
            alt={image}
            className="transition-transform w-20 h-20 mx-auto mt-4 rounded-full duration-700 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 text-white">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-2xl text-black font-bold tracking-wide">
              {name}
            </h2>

            <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-cyan-500">
              {sports}
            </span>
          </div>

          {/* <p className="mb-5 text-sm leading-relaxed text-gray-700">
           {description}
           </p>  */}

          {/* Info */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-gray-700">Country</span>
              <span className="font-medium text-black">{country}</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-gray-700">Team</span>
              <span className="font-medium text-black">{team}</span>
            </div>

            {/* <div className="flex items-center justify-between">
              <span className="text-gray-700">Salary</span>
              <span className="font-semibold text-green-400">{salary}</span>
            </div> */}
          </div>

          {/* Button */}
          <Link href={`/sports/${_id}`}>
              <button className="mt-6 w-full rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 py-3 font-semibold tracking-wide text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/40">
            View Details
          </button>
          </Link>
      
        </div>
      </div>
    </div>
  );
}
