"use client"

import { useState, useMemo, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Clock, MapPin, Users } from "lucide-react"
import EnquiryPopup from "@/utils/EnquiryForm"
import { supabase } from "@/lib/supabase/SupabaseConfig"

/* -------------------- DATA -------------------- */

type PackageType = {
  id: number
  title: string
  category: string
  duration: string
  rating: number
  reviews: number
  price: number
  heroimage: {
    id: string,
    image: string,
    alt: string
  }
}

const CATEGORIES = [
  "Explore All",
  "1 Day Tour Package", ,
  "2 Day Tour Package",
  "3 Day Tour Package",
  "4 Day Tour Package",
  "5 Day Tour Package",
  "6 Day Tour Package",
  "7 Day Tour Package",
  "8 Day Tour Package",
  "9 Day Tour Package",
  "10 Day Tour Package",

]





/* -------------------- COMPONENT -------------------- */

export default function DestinationFilter() {
  const [activeCategory, setActiveCategory] = useState("Explore All")
  const [packages, setPackages] = useState<PackageType[]>([])
  const [isOpen, setIsOpen] = useState(false);

  const getPackageData = async () => {

    const { data, error } = await supabase.from("Package").select("*");

    if (error) {
      console.log("This is the error I have get in the Home Page Packages Filter : ");
      console.log(error);
    }

    setPackages(data ?? []);
  }

  useEffect(() => {
    getPackageData();
  }, [])

  const filteredPackages = activeCategory === "Explore All" ? packages : packages.filter(
    (pkg: any) => pkg.category === activeCategory
  )


  return (
    <>
      <EnquiryPopup onClose={() => setIsOpen(false)} open={isOpen} />
      <section className="mt-5 bg-gradient-to-b from-orange-50 to-white w-full mx-auto px-4 py-10 space-y-8">

        <div className="w-full text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-orange-500">
            Our Tour Packages
          </h2>

          {/* Gradient Underline */}
          <div className="flex justify-center">
            <div className="h-1 w-70  sm:w-80 md:w-90 lg:w-100 rounded-full 
                            bg-gradient-to-r 
                            from-transparent 
                            via-orange-500 
                            to-transparent" />
          </div>
        </div>


        {/* ---------- CATEGORY CAROUSEL ---------- */}
        <div className="flex gap-8 overflow-x-auto scrollbar-hide p-6 bg-[#ffeeda] rounded-3xl shadow-xl max-w-7xl mx-auto">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat ?? "")}
              className={`flex flex-col items-center gap-1 min-w-fit transition-all cursor-pointer rounded-3xl px-7 py-3
              ${activeCategory === cat
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
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-5 py-4">
            <h2 className="text-3xl font-semibold text-orange-400">
              {activeCategory}
            </h2>
            <Link href={'/tour-packages'}  className="text-orange-500 font-medium hover:underline">
              View All →
            </Link>
        </div>

        {/* ---------- CARDS GRID ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all p-5">
          {filteredPackages.map((pkg: any) => (
            <div
              key={pkg.id}
              className="
            group bg-white rounded-3xl overflow-hidden
            shadow-md hover:shadow-xl transition-all
            hover:-translate-y-1
          "
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={pkg.heroimage.image}
                  alt={pkg.heroimage.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* DURATION BADGE */}
                <span
                  className="absolute top-4 left-4
              bg-orange-500 text-white text-xs font-semibold
              px-3 py-1 rounded-full shadow"
                >
                  {pkg.duration} day
                </span>

                {/* PRICE BADGE */}
                <span
                  className="absolute bottom-4 right-4
              bg-white text-orange-600 text-sm font-bold
              px-4 py-1.5 rounded-full shadow"
                >
                  ₹{pkg.price}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">

                {/* TITLE */}
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {pkg.title}
                </h3>

                {/* LOCATION */}
                <p className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  {pkg.destination}
                </p>

                {/* INFO ROW */}
                <div className="flex flex-wrap gap-3 text-xs text-gray-700">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-orange-500" />
                    {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-orange-500" />
                    Ideal for Families & Elders
                  </span>
                </div>

                {/* HIGHLIGHTS */}
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    AC Cab
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Local Guide
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Temple Darshan
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Pickup & Drop
                  </span>
                </div>

                {/* CTA */}
                <div className="flex gap-3 pt-2">
                  <Link
                    href={`/tour-packages/${pkg.slug}`}
                    className="flex-1 text-center cursor-pointer
                  bg-orange-500 hover:bg-orange-600
                  text-white font-semibold py-2.5
                  rounded-xl transition
                "
                  >
                    View Details
                  </Link>

                  <button
                    className="
                  flex-1 cursor-pointer
                  border border-orange-500 text-orange-600
                  hover:bg-orange-50
                  font-semibold py-2.5
                  rounded-xl transition
                "

                    onClick={() => setIsOpen(true)}
                  >
                    Enquire Now
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        </div>
      


        {/* ---------- EMPTY STATE ---------- */}
        {filteredPackages.length === 0 && (
          <p className="text-center text-gray-500">
            No packages available for this category.
          </p>
        )}
      </section>
    </>
  )
}
