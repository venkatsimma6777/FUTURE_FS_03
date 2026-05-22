import { useState } from "react";

function Testimonials() {
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    setTimeout(() => setShow(false), 3000);
    e.target.reset();
  };

  return (
    <section id="contact" className="bg-sky-950 py-24 px-6 relative">

      {show && (
        <div className="fixed top-10 right-10 bg-cyan-400 text-slate-900 px-6 py-3 rounded-xl font-bold shadow-2xl">
          ✅ Table Reserved Successfully
        </div>
      )}

      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          Reserve Your Experience
        </h2>

        <p className="text-gray-300 mt-6">
          Book your table and enjoy luxury café vibes.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl p-10 rounded-3xl space-y-6"
      >

        <input className="w-full p-4 bg-white/5 rounded-xl" placeholder="Name" required />
        <input className="w-full p-4 bg-white/5 rounded-xl" placeholder="Email" required />
        <input type="date" className="w-full p-4 bg-white/5 rounded-xl" required />
        <textarea className="w-full p-4 bg-white/5 rounded-xl" placeholder="Message"></textarea>

        <button className="w-full bg-cyan-400 text-slate-900 py-4 rounded-xl font-bold hover:bg-cyan-300 transition">
          Reserve Table
        </button>

      </form>

    </section>
  );
}

export default Testimonials;