"use client"

import { useState, useMemo } from "react"
import Image from "next/image"

/* -------------------- DATA -------------------- */

type PackageType = {
  id: number
  title: string
  category: string
  duration: string
  rating: number
  reviews: number
  price: number
  image: string
}

const CATEGORIES = [
  "Explore",
  "Europe",
  "Japan",
  "Singapore",
  "Maldives",
  "North East India",
  "Dubai",
  "Thailand",
  "Vietnam",
  "Norway",
  "Explore",
  "Europe",
  "Japan",
  "Singapore",
  "Maldives",
  "North East India",
  "Dubai",
  "Thailand",
  "Vietnam",
  "Norway",
]

const PACKAGES: PackageType[] = [
  {
    id: 1,
    title: "Scenic Iceland With Diamond Circle",
    category: "Europe",
    duration: "7 Days & 6 Nights",
    rating: 4.5,
    reviews: 40,
    price: 230397,
    image: "/images/Home/mathura-vrindavan.webp",
  },
  {
    id: 2,
    title: "Journey Through Iceland Hidden Treasures",
    category: "Europe",
    duration: "10 Days & 9 Nights",
    rating: 4.5,
    reviews: 23,
    price: 338473,
    image: "/images/Home/mathura-vrindavan.webp",
  },
  {
    id: 3,
    title: "Highlights Of Iceland With Southern Shores",
    category: "Europe",
    duration: "5 Days & 4 Nights",
    rating: 5.0,
    reviews: 614,
    price: 255839,
    image: "/images/Home/mathura-vrindavan.webp",
  },
  {
    id: 4,
    title: "Tokyo Cherry Blossom Tour",
    category: "Japan",
    duration: "6 Days & 5 Nights",
    rating: 4.7,
    reviews: 120,
    price: 198000,
    image: "/images/Home/mathura-vrindavan.webp",
  },
  {
    id: 5,
    title: "Thailand Beach Escape",
    category: "Thailand",
    duration: "5 Days & 4 Nights",
    rating: 4.6,
    reviews: 88,
    price: 98000,
    image: "/images/Home/mathura-vrindavan.webp",
  },
   {
    id: 6,
    title: "Thailand Beach Escape",
    category: "Thailand",
    duration: "5 Days & 4 Nights",
    rating: 4.6,
    reviews: 88,
    price: 98000,
    image: "/images/Home/mathura-vrindavan.webp",
  },
   {
    id: 7,
    title: "Thailand Beach Escape",
    category: "Thailand",
    duration: "5 Days & 4 Nights",
    rating: 4.6,
    reviews: 88,
    price: 98000,
    image: "/images/Home/mathura-vrindavan.webp",
  },
   {
    id: 8,
    title: "Thailand Beach Escape",
    category: "Thailand",
    duration: "5 Days & 4 Nights",
    rating: 4.6,
    reviews: 88,
    price: 98000,
    image: "/images/Home/mathura-vrindavan.webp",
  },
]

/* -------------------- COMPONENT -------------------- */

export default function DestinationFilter() {
  const [activeCategory, setActiveCategory] = useState("Explore")

  const filteredPackages = useMemo(() => {
    if (activeCategory === "Explore") return PACKAGES
    return PACKAGES.filter(
      (pkg) => pkg.category === activeCategory
    )
  }, [activeCategory])

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 space-y-8">

      {/* ---------- CATEGORY CAROUSEL ---------- */}
      <div className="flex gap-8 overflow-x-auto scrollbar-hide p-4 bg-[#ffeeda] rounded-3xl shadow-xl">
        {CATEGORIES.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat)}
            className={`flex flex-col items-center gap-1 min-w-fit transition-all cursor-pointer rounded-3xl px-7 py-2
              ${
                activeCategory === cat
                  ? "text-black font-semibold bg-orange-400"
                  : "text-black hover:text-black bg-orange-200"
              }
            `}
          >
            <span className="text-sm">{cat}</span>
            
          </button>
        ))}
      </div>

      {/* ---------- TITLE ---------- */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">
          {activeCategory}
        </h2>
        <button className="text-orange-500 font-medium hover:underline">
          View All →
        </button>
      </div>

      {/* ---------- CARDS GRID ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="rounded-2xl overflow-hidden bordern transition shadow-lg hover:shadow-2xl hover:shadow-orange-400 cursor-pointer hover:scale-105"
          >
            <div className="relative h-56">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 space-y-2">
              <p className="text-sm text-gray-500">
                {pkg.duration}
              </p>

              <h3 className="font-semibold text-lg leading-snug">
                {pkg.title}
              </h3>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-600 font-medium">
                  ⭐ {pkg.rating}
                </span>
                <span className="text-gray-400">
                  ({pkg.reviews})
                </span>
              </div>

              <div className="text-xl font-bold text-gray-900">
                INR {pkg.price.toLocaleString()}
                <span className="text-sm font-normal text-gray-500">
                  {" "} / Adult
                </span>
              </div>

              <button className="w-full mt-3 bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600 transition">
                Request Callback
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ---------- EMPTY STATE ---------- */}
      {filteredPackages.length === 0 && (
        <p className="text-center text-gray-500">
          No packages available for this category.
        </p>
      )}
    </section>
  )
}
