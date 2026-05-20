import SportsCard from "../SportCard/SportCard";

const ExtraData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/data`, {
    cache: "no-store",
  });

  const extraFeatures = await res.json();

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12  bg-linear-to-br from-[#050b18] via-[#07111f] to-[#0b1a33] min-h-screen">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          All <span className="text-cyan-400">Players</span>
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Explore world-class athletes with modern UI, smooth animation,
          responsive layout and premium experience.
        </p>

        {/* Animated line */}
        <div className="w-32 h-1 bg-cyan-400 mx-auto mt-5 rounded-full animate-pulse"></div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
        
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:scale-105 duration-300">
          <h2 className="text-3xl font-bold text-cyan-400">
            {extraFeatures.length}+
          </h2>
          <p className="text-gray-300 mt-2">Players</p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:scale-105 duration-300">
          <h2 className="text-3xl font-bold text-pink-400">50+</h2>
          <p className="text-gray-300 mt-2">Teams</p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:scale-105 duration-300">
          <h2 className="text-3xl font-bold text-yellow-400">20+</h2>
          <p className="text-gray-300 mt-2">Countries</p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:scale-105 duration-300">
          <h2 className="text-3xl font-bold text-green-400">100%</h2>
          <p className="text-gray-300 mt-2">Responsive</p>
        </div>
      </div>

      {/* Search + Filter UI */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        
        <input
          type="text"
          placeholder="Search player..."
          className="w-full md:w-96 px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-white outline-none focus:border-cyan-400 transition"
        />

        <div className="flex gap-3">
          <button className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-medium duration-300">
            All
          </button>

          <button className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white duration-300">
            Football
          </button>

          <button className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white duration-300">
            Cricket
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {extraFeatures.map((extra, index) => (
          <div
            key={extra._id}
            className="transform hover:-translate-y-3 hover:scale-[1.02] duration-500"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <SportsCard spot={extra} />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Join The Sports Community
        </h2>

        <p className="text-gray-400 mt-4 mb-8">
          Discover premium athletes and modern sports experiences.
        </p>

        <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105 duration-300">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default ExtraData;