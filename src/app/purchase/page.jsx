// app/purchase/page.jsx

import PurchasePlayerCard from "@/components/PurchasePlayerCard/PurchasePlayerCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { FaShoppingCart } from "react-icons/fa";

const PurchaseCard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(
    `http://localhost:5000/purchase/${user?.id}`,
    {
      cache: "no-store",
    }
  );

  const players = await res.json();

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-14">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-14">
          
          <div>
            <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-3">
              Purchase Collection
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              My Purchased
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Players
              </span>
            </h1>

            <p className="text-gray-400 mt-4 max-w-2xl">
              Manage your purchased football players with modern animated UI,
              smart status tracking, and responsive experience across all
              devices.
            </p>
          </div>

          {/* Stats Card */}
          <div className="w-full lg:w-[320px]">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl">
              
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                  <FaShoppingCart className="text-cyan-400 text-2xl" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Total Purchases
                  </p>

                  <h2 className="text-4xl font-black text-white">
                    {players.length}
                  </h2>
                </div>
              </div>

              <div className="mt-6 h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full w-[80%] bg-linear-to-r from-cyan-400 to-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Player Grid */}
        {players.length > 0 ? (
          <div className="grid grid-cols-1 gap-8">
            {players.map((player) => (
              <PurchasePlayerCard
                key={player._id}
                player={player}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-32">
            <div className="max-w-lg w-full text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10">
              
              <div className="h-24 w-24 mx-auto rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
                <FaShoppingCart className="text-5xl text-cyan-400" />
              </div>

              <h2 className="text-3xl font-black mb-4">
                No Purchases Found
              </h2>

              <p className="text-gray-400 leading-relaxed">
                You have not purchased any players yet. Explore premium football
                players and build your dream squad.
              </p>

              <button className="mt-8 px-8 py-3 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-500 font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20">
                Explore Players
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PurchaseCard;