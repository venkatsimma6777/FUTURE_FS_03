import { motion } from "framer-motion";

const items = [
  {
    name: "Ocean Latte",
    price: "$12",
    desc: "Smooth espresso with ocean vibes.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
  {
    name: "Seashell Cappuccino",
    price: "$15",
    desc: "Creamy and rich coffee blend.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348",
  },
  {
    name: "Mocha Breeze",
    price: "$14",
    desc: "Chocolate coffee perfection.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
];

function Menu() {
  return (
    <section id="menu" className="bg-slate-950 py-24 px-6">

      <div className="text-center mb-16">
        <p className="text-cyan-300 tracking-[5px] uppercase">
          Signature Menu
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Taste The Coast
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >

            <img src={item.image} className="h-72 w-full object-cover" />

            <div className="p-6">

              <h3 className="text-2xl font-bold">{item.name}</h3>
              <p className="text-cyan-300 mt-2">{item.price}</p>
              <p className="text-gray-400 mt-3">{item.desc}</p>

              <button
                onClick={() => alert("Order Placed ☕")}
                className="mt-6 w-full bg-cyan-400 text-slate-900 py-3 rounded-xl font-bold hover:bg-cyan-300 transition"
              >
                Order Now
              </button>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Menu;