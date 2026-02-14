"use client";

import { useRef } from "react";
import { Star, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";

export default function PackageTestimonials({ PackageData }: any) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.offsetWidth * 0.8;

    sliderRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

        {/* LEFT – TRUST PANEL */}
        <div className="rounded-3xl 
                bg-gradient-to-br from-white to-orange-50
                p-7 
                shadow-xl 
                border border-orange-100
                transition duration-300 
                hover:-translate-y-1 hover:shadow-2xl
                cursor-pointer">

  {/* Top Label */}
  <p className="text-sm font-semibold text-orange-600 tracking-wide">
    Guest Reviews
  </p>

  {/* Big Rating */}
  <div className="flex items-center gap-4 mt-3">
    <h3 className="text-5xl font-bold text-gray-900">4.8</h3>

    <div className="flex flex-col">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-5 w-5 text-orange-500 fill-orange-500"
          />
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-1">
        Based on 180+ trips
      </p>
    </div>
  </div>

  {/* Rating Bars */}
  <div className="mt-6 space-y-3">
    {[84, 12, 3, 1, 0].map((v, i) => (
      <div key={i} className="flex items-center gap-3 text-xs">
        <span className="w-5 font-medium text-gray-700">
          {5 - i}
        </span>

        <div className="h-2 flex-1 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500"
            style={{ width: `${v}%` }}
          />
        </div>

                    <span className="w-8 text-right text-gray-600">
                    {v}%
                    </span>
                </div>
                ))}
            </div>

            {/* Feature Badges */}
            <div className="mt-6 flex flex-wrap gap-3">
                {["Verified Trips", "Private Tours", "Local Drivers"].map((item, i) => (
                <span
                    key={i}
                    className="rounded-full 
                            bg-white 
                            border border-orange-200 
                            px-4 py-2 
                            text-xs font-medium 
                            text-orange-700
                            shadow-sm
                            hover:bg-orange-50
                            transition">
                    ✔ {item}
                </span>
                ))}
            </div>

            {/* CTA Button */}
            <button className="mt-7 w-full 
                                bg-orange-500 
                                hover:bg-orange-600 
                                text-white 
                                font-semibold 
                                py-3 
                                rounded-xl 
                                shadow-md 
                                transition 
                                cursor-pointer">
                View All Reviews →
            </button>

        </div>


        {/* RIGHT – CAROUSEL */}
        <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-orange-600 tracking-wider">
                CLIENT REVIEWS
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-6">
                Real feedback from guests
            </h2>

            <div className="relative px-2 sm:px-6 md:px-10">

                {/* Slider Wrapper */}
                <div
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory 
                            scrollbar-hide cursor-pointer px-2 sm:px-6 md:px-0"
                >
                {PackageData?.testimonials?.map((t: any, index: number) => (
                    <div
                    key={t.id || index}
                    className="snap-start shrink-0 
                                w-[92%] sm:w-[75%] md:w-[60%] lg:w-[420px]
                                rounded-3xl 
                                bg-gradient-to-br from-white to-orange-50
                                border border-orange-100 
                                shadow-xl 
                                p-7 
                                transition duration-300 
                                hover:-translate-y-2 hover:shadow-2xl"
                    >
                    {/* HEADER */}
                    <div className="flex items-start justify-between gap-4">

                        <div className="flex gap-4">
                        <div className="h-12 w-12 sm:h-14 sm:w-14 
                                        rounded-full 
                                        bg-gradient-to-br from-orange-500 to-orange-600 
                                        text-white flex items-center justify-center 
                                        text-base sm:text-lg font-semibold shadow-md">
                            {t.name?.charAt(0) || "G"}
                        </div>

                        <div>
                            <div className="flex flex-wrap items-center gap-2">
                            <p className="font-semibold text-gray-900 text-sm sm:text-base">
                                {t.name || "Guest"}
                            </p>

                            <span className="flex items-center gap-1 text-[10px] sm:text-xs
                                            bg-orange-100 text-orange-700 
                                            px-2 py-1 rounded-full">
                                <BadgeCheck className="h-3 w-3 sm:h-4 sm:w-4" />
                                Verified
                            </span>
                            </div>

                            <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
                            {t.location || "India"} • {t.date || "Recent Trip"}
                            </p>
                        </div>
                        </div>

                        <span className="hidden sm:inline-block text-xs font-medium 
                                        bg-white border border-orange-200 
                                        text-orange-600 px-3 py-1 rounded-full shadow-sm">
                        {t.source || "Google"}
                        </span>
                    </div>

                    {/* RATING */}
                    <div className="mt-5 flex items-center gap-3">
                        <span className="text-xl sm:text-2xl font-bold text-gray-900">
                        {t.rating || 5}.0
                        </span>

                        <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                            key={i}
                            className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 fill-orange-500"
                            />
                        ))}
                        </div>
                    </div>

                    {/* REVIEW */}
                    <p className="mt-4 text-sm leading-relaxed text-gray-700">
                        “{t.description ||
                        "Amazing experience. Very smooth darshan planning and professional service."}”
                    </p>
                    </div>
                ))}
                </div>

                {/* ARROWS — Visible from md and up */}
                <button
                onClick={() => scroll("left")}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 
                            h-10 w-10 rounded-full bg-white shadow-lg border 
                            items-center justify-center hover:bg-orange-50 
                            transition cursor-pointer"
                >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>

                <button
                onClick={() => scroll("right")}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 
                            h-10 w-10 rounded-full bg-white shadow-lg border 
                            items-center justify-center hover:bg-orange-50 
                            transition cursor-pointer"
                >
                <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
            </div>
        </div>

      </div>
    </section>
  );
}
