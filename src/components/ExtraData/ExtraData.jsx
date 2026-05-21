import SportsCard from "../SportCard/SportCard";

const ExtraData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/data`, {
    cache: "no-store",
  });

  const extraFeatures = await res.json();

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#050b18] via-[#07111f] to-[#0b1a33] py-16">
      
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            All <span className="text-cyan-400">Players</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Explore world-class athletes with modern UI, smooth animation,
            responsive layout and premium sports experience.
          </p>

          {/* Animated Line */}
          <div className="w-28 sm:w-36 h-1 bg-cyan-400 mx-auto mt-5 rounded-full animate-pulse"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 sm:p-6 text-center hover:scale-105 duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400">
              {extraFeatures.length}+
            </h2>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">
              Players
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 sm:p-6 text-center hover:scale-105 duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-400">
              50+
            </h2>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">
              Teams
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 sm:p-6 text-center hover:scale-105 duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400">
              20+
            </h2>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">
              Countries
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 sm:p-6 text-center hover:scale-105 duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-400">
              100%
            </h2>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">
              Responsive
            </p>
          </div>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-5 mb-12">
          
          {/* Search */}
          <div className="w-full xl:w-100">
            <input
              type="text"
              placeholder="Search player..."
              className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-gray-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-medium duration-300">
              All
            </button>

            <button className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white duration-300">
              Football
            </button>

            <button className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white duration-300">
              Cricket
            </button>

            <button className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white duration-300">
              Basketball
            </button>
          </div>
        </div>

        {/* Player Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 lg:gap-8">
          {extraFeatures.map((extra, index) => (
            <div
              key={extra._id}
              className="group transform hover:-translate-y-2 hover:scale-[1.02] duration-500"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative">
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 duration-500"></div>

                {/* Card */}
                <div className="relative z-10">
                  <SportsCard spot={extra} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Join The Sports Community
          </h2>

          <p className="text-gray-400 mt-4 mb-8 text-sm sm:text-base max-w-2xl mx-auto">
            Discover premium athletes and modern sports experiences with fully
            responsive design and smooth UI interaction.
          </p>

          <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105 duration-300">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExtraData;