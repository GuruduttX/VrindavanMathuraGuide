"use client"

import Image from "next/image";
import { Car, Users, MapPin, User, Calendar, Search } from 'lucide-react'
import Link from "next/link";
import EnquiryPopup from "@/utils/EnquiryForm";
import { useState } from "react";

interface PackageHeroProps {
  badge: string;
  title: string;
  description: string;
  image: string;
  price?: string;
}



function Breadcrumbs() {
  return (
    <nav className="text-sm text-orange-100 mb-4 -mt-14 px-8 sm:px-16 md:px-36">
      <Link href="/" className="hover:text-white">
        Home
      </Link>
      <span className="mx-2">/</span>
      <span className="text-white font-medium">Packages</span>
    </nav>
  );
}


export default function PackageHero({ badge, title, description, image,}: PackageHeroProps) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <EnquiryPopup onClose={() => setIsOpen(false)} open={isOpen} />

      <section className="bg-[#fff7ed] py-20 bg-linear-to-br from-orange-800 via-orange-600 to-orange-500">
        <Breadcrumbs />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block bg-orange-100 text-orange-600
            px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {badge}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-100 leading-tight">
              {title}
            </h1>

            <p className="mt-4 text-lg text-gray-200 max-w-xl">
              {description}
            </p>

            {/* HIGHLIGHTS MARQUEE */}
            <div className="mt-6 overflow-hidden">
              <div className="flex gap-3 w-max animate-marquee-slow">
                <button className="px-4 py-2 bg-white/90 text-orange-700 
                border border-orange-200 rounded-full text-sm font-semibold">
                  <span className="flex items-center gap-2">
                    <Car size={16} />
                    AC Cab Included
                  </span>
                </button>

                {/* Guide */}
                <button className="px-4 py-2 bg-white/90 text-orange-700 
            border border-orange-200 rounded-full text-sm font-semibold">
                  <span className="flex items-center gap-2">
                    <User size={16} />
                    Local Braj Guide
                  </span>
                </button>

                {/* Temple Darshan */}
                <button className="px-4 py-2 bg-white/90 text-orange-700 
            border border-orange-200 rounded-full text-sm font-semibold">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    Temple Darshan
                  </span>
                </button>

                {/* Pickup Drop */}
                <button className="px-4 py-2 bg-white/90 text-orange-700 
            border border-orange-200 rounded-full text-sm font-semibold">
                  <span className="flex items-center gap-2">
                    <Car size={16} />
                    Pickup & Drop
                  </span>
                </button>

                {/* duplicate for smooth loop */}
                <button className="px-4 py-2 bg-white/90 text-orange-700 
            border border-orange-200 rounded-full text-sm font-semibold">
                  <span className="flex items-center gap-2">
                    <Car size={16} />
                    AC Cab Included
                  </span>
                </button>

                <button className="px-4 py-2 bg-white/90 text-orange-700 
            border border-orange-200 rounded-full text-sm font-semibold">
                  <span className="flex items-center gap-2">
                    <User size={16} />
                    Local Braj Guide
                  </span>
                </button>

                <button className="px-4 py-2 bg-white/90 text-orange-700 
            border border-orange-200 rounded-full text-sm font-semibold">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    Temple Darshan
                  </span>
                </button>

                <button className="px-4 py-2 bg-white/90 text-orange-700 
            border border-orange-200 rounded-full text-sm font-semibold">
                  <span className="flex items-center gap-2">
                    <Car size={16} />
                    Pickup & Drop
                  </span>
                </button>

              </div>
            </div>

            {/* PRICE + CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">


              <button className="bg-orange-500 hover:bg-orange-400
              text-white px-8 py-3 rounded-3xl font-semibold cursor-pointer" onClick={() => setIsOpen(true)}>
                Book Now
              </button>

              <button className="bg-green-500 hover:bg-green-600 cursor-pointer
              text-white px-8 py-3 rounded-3xl font-semibold">
                <a
                  href="https://wa.me/7302265809"
                  className="block text-center bg-green-500 hover:bg-green-600 text-white rounded-2xl font-semibold cursor-pointer"
                >
                  WhatsApp
                </a>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[420px] rounded-3xl overflow-hidden hidden md:block">
            <Image
              src={image || "/images/Packages/Package-Hero.webp"}
              alt={title}
              fill
              priority
              className="object-cover"
            />

            {/* Orange Mandir Glow */}
            {/* <div className="absolute inset-0 bg-gradient-to-tr
            from-orange-600/40 via-yellow-300/20 to-transparent" /> */}
          </div>

        </div>

        {/* Serach Bar,  */}
        <div className="max-w-5xl mx-auto">
          <div
            className="
          mt-10
          rounded-4xl
          bg-white/90
          p-4 sm:p-5
          shadow-lg shadow-orange-400
          backdrop-blur-md
          hover:shadow-xl hover:shadow-yellow-500
          transition
          border-2 border-orange-400
        "
          >
            <div
              className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-3 sm:gap-4
          "
            >
              {/* Destination */}
              <div
                className="
              flex items-center gap-3
              rounded-xl
              bg-orange-50
              px-4
              py-3 sm:py-3.5
            "
              >
                <MapPin className="text-orange-500 shrink-0" />
                <input
                  type="text"
                  placeholder="Destination"
                  className="
                w-full
                bg-transparent
                text-sm sm:text-base
                outline-none
              "
                />
              </div>

              {/* Date */}
              <div
                className="
              flex items-center gap-3
              rounded-xl
              bg-orange-50
              px-4
              py-3 sm:py-3.5
            "
              >
                <Calendar className="text-orange-500 shrink-0" />
                <input
                  type="date"
                  className="
                w-full
                bg-transparent
                text-sm sm:text-base
                outline-none
              "
                />
              </div>

              {/* Travelers */}
              <div
                className="
              flex items-center gap-3
              rounded-xl
              bg-orange-50
              px-4
              py-3 sm:py-3.5
            "
              >
                <Users className="text-orange-500 shrink-0" />
                <input
                  type="number"
                  placeholder="Travelers"
                  className="
                w-full
                bg-transparent
                text-sm sm:text-base
                outline-none
              "
                />
              </div>

              {/* Button */}
              <button
                className="
              flex items-center justify-center gap-2
              rounded-3xl
              bg-gradient-to-r from-orange-500 to-orange-600
              px-6
              py-3 sm:py-3.5
              font-semibold
              text-white
              transition-all
              hover:scale-[1.02]
              hover:shadow-lg
              w-full
            "
              >
                <Search size={18} />
                Search
              </button>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
