import { motion } from "framer-motion";
import { HiMenuAlt3 } from "react-icons/hi";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl px-8 py-4 flex items-center justify-between shadow-2xl">

          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Seashell Stories
          </h1>

          {/* Links */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-200">

            <li>
              <a href="#home" className="hover:text-cyan-300 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-cyan-300 transition">
                About
              </a>
            </li>

            <li>
              <a href="#menu" className="hover:text-cyan-300 transition">
                Menu
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-cyan-300 transition">
                Contact
              </a>
            </li>

          </ul>

          {/* Button */}
          <a href="#contact" className="hidden md:block">
            <button className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold px-5 py-2 rounded-full shadow-lg shadow-cyan-500/30 transition hover:scale-105">
              Reserve Table
            </button>
          </a>

          {/* Mobile */}
          <div className="md:hidden text-3xl text-cyan-300">
            <HiMenuAlt3 />
          </div>

        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;