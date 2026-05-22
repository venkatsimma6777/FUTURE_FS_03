import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-cyan-950 to-slate-950"></div>

      {/* Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[6px] text-cyan-300 mb-4"
          >
            Luxury Coastal Café
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight"
          >
            Ocean Breeze <br />
            & Perfect Coffee
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-gray-300 text-lg leading-8 max-w-xl"
          >
            Where ocean whispers meet handcrafted coffee, golden sunsets, and unforgettable conversations.
          </motion.p>

          <div className="mt-10 flex gap-5 flex-wrap">

            <a href="#menu">
              <button className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
                Explore Menu
              </button>
            </a>

            <a href="#contact">
              <button className="border border-cyan-300 text-cyan-300 px-8 py-4 rounded-full font-bold hover:bg-cyan-300 hover:text-slate-900 transition">
                Reserve Table
              </button>
            </a>

          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            className="rounded-[40px] shadow-2xl hover:scale-105 transition"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;