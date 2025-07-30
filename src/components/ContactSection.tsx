"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Linkedin, ChevronDown, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    budget: "",
    currency: "AUD",
    referral: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const isValidBudget = (val: string) => !val || /^\d+(\.\d{1,2})?$/.test(val);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(form.email))
      return alert("Please enter a valid email.");
    if (!isValidBudget(form.budget))
      return alert("Please enter a valid number for the budget.");

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("sent");
      else throw new Error("Send failed");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-black text-white">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
        Get in touch
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-zinc-900 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-10"
      >
        {/* Left side: image and intro */}
        <div className="w-full md:w-2/5 flex flex-col items-center text-center md:text-left gap-6">
          <Image
            src="/media/profile.jpeg"
            alt="Aurick Chatterjee"
            width={180}
            height={180}
            className="rounded-full border-4 border-red-600 object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-red-600 mb-2">
              Let&rsquo;s Build Something Great
            </h2>
            <p className="text-zinc-300 mb-4">
              Whether you&rsquo;re ready to bring an idea to life or just exploring
              options, I&rsquo;d love to hear about your project. I work with
              businesses of all sizes to design and develop custom web
              solutions — from internal tools to polished digital experiences.
            </p>
            <p className="text-zinc-300">
              Tell me what you need, and I&rsquo;ll tailor the right solution for you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
            >
              <FolderOpen className="w-5 h-5" /> See My Work
            </a>
            <a
              href="https://www.linkedin.com/in/aurick-chatterjee/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" /> View my LinkedIn
            </a>
          </div>
        </div>

        {/* Right side: Form */}
        <div className="w-full md:w-3/5">
          <h3 className="text-xl font-semibold text-red-500 mb-2">
            Start Your Project
          </h3>
          <p className="text-zinc-400 mb-6">
            Fill out the form below with some project details, and I&rsquo;ll be in
            touch within 24 hours to discuss the next steps.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500"
              value={form.name}
              onChange={handleChange}
              aria-label="Your Name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500"
              value={form.email}
              onChange={handleChange}
              aria-label="Your Email"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number (Optional)"
              className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500"
              value={form.phone}
              onChange={handleChange}
              aria-label="Phone Number"
            />
            <textarea
              name="project"
              placeholder="What are you looking to build?"
              required
              className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-md px-4 py-2 h-24 resize-none focus:ring-2 focus:ring-red-500"
              value={form.project}
              onChange={handleChange}
              aria-label="Project Details"
            />
            <div className="flex gap-4">
              <input
                type="text"
                name="budget"
                placeholder="Budget (Optional)"
                className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500"
                value={form.budget}
                onChange={handleChange}
                aria-label="Budget"
              />
              <div className="relative w-32">
                <select
                  name="currency"
                  value={form.currency}
                  onChange={handleChange}
                  className="appearance-none w-full bg-zinc-800 text-white border border-zinc-700 rounded-md px-4 py-2 pr-10 focus:ring-2 focus:ring-red-500"
                >
                  <option value="AUD">AUD</option>
                  <option value="USD">USD</option>
                </select>
                <ChevronDown className="w-4 h-4 text-white absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
            <div className="relative">
              <select
                name="referral"
                value={form.referral}
                onChange={handleChange}
                className="w-full appearance-none bg-zinc-800 text-white border border-zinc-700 rounded-md px-4 py-2 pr-10 focus:ring-2 focus:ring-red-500"
                aria-label="Referral Source"
              >
                <option value="">How did you hear about me?</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Referral">Referral</option>
                <option value="Google">Google</option>
                <option value="Other">Other</option>
              </select>
              <ChevronDown className="w-4 h-4 text-white absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className={`w-full font-semibold py-3 rounded-md transition text-white
                ${status === "sent"
                  ? "bg-green-600 cursor-not-allowed"
                  : status === "sending"
                  ? "bg-red-400"
                  : "bg-red-600 hover:bg-red-700"}`}
              aria-label="Submit"
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message Sent"
                : "Submit"}
            </button>

            {status === "error" && (
              <p className="text-red-500 text-sm">
                Something went wrong. Try again later.
              </p>
            )}
          </form>
          <p className="text-sm text-zinc-500 mt-4">
            By submitting this form, you acknowledge that you have read and agree to the{" "}
            <a
              href="/privacy-policy"
              className="text-red-500 underline hover:text-red-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </motion.div>
    </section>
  );
}
