"use client";

import { MapPin, Calendar, Users, Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      

      {/* Orange Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#b3500a] via-[#fe9001] to-[#f66f00]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-12">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-5 py-2 text-sm font-medium text-orange-200 backdrop-blur">
          🔱 Experience Divine Spirituality
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
          Discover the Sacred Essence of{" "}
          <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Mathura & Vrindavan
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg text-orange-100/90">
          Walk through ancient temples, sacred ghats, and timeless traditions.Curated spiritual journeys designed for peace, devotion, and comfort.
        </p>

        {/* Search Box */}
        <div className="mt-10 rounded-4xl bg-white/90 p-4 shadow-lg shadow-orange-400 backdrop-blur-md hover:shadow-xl hover:shadow-yellow-500 cursor-pointer transition border-2 border-orange-400">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* Destination */}
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 px-4 py-3">
              <MapPin className="text-orange-500" />
              <input
                type="text"
                placeholder="Destination"
                className="w-full bg-transparent text-sm outline-none rounded-3xl"
              />
            </div>

            {/* Date */}
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 px-4 py-3">
              <Calendar className="text-orange-500" />
              <input
                type="date"
                className="w-full bg-transparent text-sm outline-none rounded-4xl"
              />
            </div>

            {/* Travelers */}
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 px-4 py-3">
              <Users className="text-orange-500" />
              <input
                type="number"
                placeholder="Travelers"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>

            {/* Button */}
            <button className="flex items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg cursor-pointer">
              <Search size={18} />
              Search
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {[
            { value: "500+", label: "Sacred Temples" },
            { value: "50K+", label: "Happy Pilgrims" },
            { value: "100+", label: "Curated Tours" },
            { value: "4.9★", label: "Average Rating" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 p-5 backdrop-blur transition hover:scale-105 cursor-pointer"
            >
              <h3 className="text-3xl font-bold text-white">{item.value}</h3>
              <p className="mt-1 text-sm text-orange-200">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 h-25 w-full rounded-t-[100%] bg-white" />
    </section>
  );
}
