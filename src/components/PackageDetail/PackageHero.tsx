"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function PackageHero({PackageData} : any) {
  return (
    <section className="relative w-full px-6 py-12 lg:px-16">
      {/* Orange Glow Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-100 via-orange-50 to-white" />

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT BIG IMAGE */}
        <div className="relative col-span-2 h-[420px] rounded-3xl overflow-hidden group cursor-pointer">
          <Image
            src={PackageData.heroimage.image}
            alt={PackageData.heroimage.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Orange Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/70 via-orange-500/30 to-transparent" />

          {/* Floating Badge */}
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-orange-600 shadow">
            🔥 Premium Experience
          </div>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
          {[
            { title: "Destinations", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
            { title: "Stays", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" },
            { title: "Activities", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
            { title: "Culture", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
          ].map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden group"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25" />
              <span className="absolute bottom-4 left-4 text-white font-semibold tracking-wide">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="mx-auto max-w-7xl mt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        
        {/* Title */}
        <div>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            {PackageData.title}
            <span className="text-orange-600"> Diamond Circle</span>
          </h1>

          <div className="flex items-center gap-2 mt-3 text-sm">
            <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span className="font-semibold">4.8</span>
            <span className="text-gray-500">(120 Reviews)</span>
          </div>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-3xl font-bold text-orange-600">₹18,999</p>
            <p className="text-xs text-gray-500">per person</p>
          </div>

          <button className="relative px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-lg hover:shadow-orange-300 transition-all duration-300 hover:scale-105 cursor-pointer">
            Book Now
            <span className="absolute inset-0 rounded-full blur-xl bg-orange-400/40 -z-10" />
          </button>
        </div>
      </div>
    </section>
  );
}
