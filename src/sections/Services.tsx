"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/servicesData";

const tabs = ["Websites", "Automation"] as const;
const tabWidth = 160;

export default function Services() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Websites");
  const data = activeTab === "Websites" ? services.websites : services.automation;

  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-red-500 text-center">
          Services
        </h2>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div
            className="relative flex rounded-full bg-neutral-800"
            style={{ width: `${tabWidth * tabs.length}px`, height: "44px" }}
          >
            {/* Sliding red glow pill */}
            <motion.div
              className="absolute top-0 left-0 h-full rounded-full bg-red-600 shadow-[0_0_15px_5px_rgba(255,0,0,0.4)]"
              animate={{ x: activeTab === "Websites" ? 0 : tabWidth }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              style={{ width: `${tabWidth}px` }}
            />

            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 text-sm sm:text-base font-semibold transition-colors duration-200 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
                style={{ width: `${tabWidth}px` }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div
          className={`grid gap-6 ${
            data.length === 1 ? "place-items-center" : "md:grid-cols-2"
          }`}
        >
          {data.length > 0 ? (
            data.map((service, index) => (
              <div
                key={index}
                className={`${data.length === 1 ? "w-full max-w-xl" : "h-full"}`}
              >
                <ServiceCard {...service} />
              </div>
            ))
          ) : (
            <p className="text-center col-span-2 text-neutral-500">
              Content coming soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
