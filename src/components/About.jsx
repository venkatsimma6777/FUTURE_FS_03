import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="bg-sky-950 py-24 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          className="rounded-3xl shadow-2xl hover:scale-105 transition"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-300 uppercase tracking-[5px] mb-4">
            Our Story
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Crafted By The Sea, Inspired By Stories
          </h2>

          <p className="text-gray-300 text-lg leading-8">
            Seashell Stories is a luxury café where coffee meets calm ocean vibes.
          </p>
        </motion.div>

      </div>

    </section>
  );
}

export default About;