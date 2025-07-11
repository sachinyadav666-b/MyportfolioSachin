import React, { useState } from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  // 1️⃣  form data + status -----------------------------
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  // 2️⃣  keep inputs controlled -------------------------
  const handleChange = (e) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  // 3️⃣  post to your Express API -----------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Bad response");

      setForm({ name: "", email: "", message: "" }); // clear inputs
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 sm:px-10 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#9333ea] text-white overflow-hidden"
    >
      {/* Overlay for blur effect */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Animated heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Contact Me
          </span>
        </motion.h2>
        <p className="text-gray-200 mb-10">
          Have a project idea or just want to connect? I&rsquo;d love to hear
          from you!
        </p>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-left bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-lg"
        >
          <div>
            <label htmlFor="name" className="block text-sm mb-1 text-gray-200">
              Name
            </label>
            <input
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/30 focus:border-cyan-400 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-1 text-gray-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/30 focus:border-cyan-400 transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm mb-1 text-gray-200"
            >
              Message
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your message"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/30 focus:border-cyan-400 transition resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-green-400 text-center pt-2">
              Thanks! I&rsquo;ll reply shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center pt-2">
              Something went wrong—please try again.
            </p>
          )}
        </motion.form>

        {/* Email Info */}
        <div className="mt-10 flex flex-col items-center justify-center text-gray-200">
          <Mail className="w-6 h-6 mb-1 text-cyan-400" />
          <p className="text-sm">You can also email me at:</p>
          <a
            href="mailto:ysachin3021792@gmail.com"
            className="underline text-cyan-300"
          >
            ysachin3021792@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
