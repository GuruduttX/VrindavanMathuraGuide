"use client"
import Image from "next/image";
import { useMemo, useState } from "react";
import { MapPin, Clock, Users, CheckCircle } from "lucide-react";
import Link from "next/link";



const CATEGORIES = [
  "Explore All",
  "1 Day Tour Package",,
  "2 Day Tour Package",
  "3 Day Tour Package",
  "4 Day Tour Package",
  "5 Day Tour Package",
  "6 Day Tour Package",
  "7 Day Tour Package",
  "8 Day Tour Package",
  "9 Day Tour Package",
  "10 Day Tour Package",
 
];



const pack = [ { title: "Mathura & Vrindavan Tour", duration: "2D / 1N", location: "Krishna Janmabhoomi · Vrindavan", price: "4,999", image: "/images/Packages/mathura-vrindavan.webp", }, 
  { title: "Vrindavan Darshan Tour", duration: "1 Day", location: "Banke Bihari · ISKCON · Prem Mandir", price: "2,999", image: "/images/Packages/vrindavan-darshan.webp", },
   { title: "Govardhan Parikrama Tour", duration: "1 Day", location: "Govardhan Hill · Radha Kund", price: "6,999", image: "/images/Packages/govardhan.webp", }, 
   { title: "Barsana & Nandgaon Tour", duration: "1 Day", location: "Radha Rani Temple · Nandgaon", price: "3,999", image: "/images/Packages/barsana.webp", }, ]

export default function PackagesGrid({packages} : {packages : any}) {
    const [activeCategory , setActiveCategory] = useState("Explore All");



  const filteredPackages = useMemo(()=>{
     if(activeCategory === 'Explore All') return packages;
     return  packages.filter((pkg : any)=> pkg.category===activeCategory);
  },[activeCategory]);
   
  
  return (
    <>
    <section className="bg-[#FFF7ED] py-16 sm:py-20 rounded-2xl mx-4 sm:mx-6 my-6">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* SECTION HEADING */}
        <div className="mb-8 ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Our Tour Packages
          </h2>

          <div className="mt-3 h-[3px] w-32 sm:w-40
            bg-gradient-to-r from-orange-600 via-orange-400 to-transparent rounded-full" />

          <p className="mt-3 sm:mt-4 text-gray-700 max-w-2xl text-sm sm:text-base">
            Explore our carefully curated Mathura & Vrindavan tour packages,
            designed for comfort, devotion, and peaceful darshan.
          </p>
        </div>

         {/* ---------- CATEGORY CAROUSEL ---------- */}
        <div className="flex gap-8 overflow-x-auto scrollbar-hide p-6 rounded-3xl mb-10">
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

        {/* SCROLLABLE GRID */}
        <div
          className="
            max-h-[65vh] sm:max-h-[75vh]
            overflow-y-auto pr-2 orange-scrollbar
          "
          style={{ scrollbarGutter: "stable" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPackages.map((pkg : any, index:any) => (
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
                  {pkg.location}
                </p>

                {/* INFO ROW */}
                <div className="flex flex-wrap gap-3 text-xs text-gray-700">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-orange-500" />
                    {pkg.duration} {pkg.duration>1 ? "days" : "day"} 
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
                    href={`/packages/${pkg.id}`}
                    className="
                      flex-1 text-center cursor-pointer
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
                  >
                    Enquire Now
                  </button>
                </div>

          </div>
               </div>
            ))}
                </div>
               </div>

      </div>
    </section>
    </>
  );
}
