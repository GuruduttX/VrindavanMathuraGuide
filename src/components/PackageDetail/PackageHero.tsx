"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import EnquiryPopup from "@/utils/EnquiryForm";
import { useState } from "react";
import { IndianRupee } from "lucide-react";

export default function PackageHero({ PackageData }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {" "}
      <EnquiryPopup open={isOpen} onClose={() => setIsOpen(false)} />
      <section className="relative w-full px-6 py-12 lg:px-16">

        {/* BreadCrumbs */}

        <nav className="text-sm text-orange-400 mb-4 px-3 sm:px-16 -mt-6">
        
          <ol className="flex flex-wrap items-center gap-y-1">

            <li className="flex items-center shrink-0">
              <Link href="/" className="hover:text-orange-500 transition-colors whitespace-nowrap">
                Home
              </Link>
              <span className="mx-2 text-orange-300">/</span>
            </li>

            <li className="flex items-center shrink-0">
              <Link
                href="/tour-packages"
                className="font-medium hover:text-orange-500 transition-colors whitespace-nowrap"
              >
                Packages
              </Link>
              <span className="mx-2 text-orange-300">/</span>
            </li>

            {/* Last crumb: truncates cleanly if very long */}
            <li className="flex items-center min-w-0">
              <span
                className="font-medium text-orange-500 truncate"
                title={PackageData.slug}   /* full text on hover as tooltip */
              >
                {PackageData.slug}
              </span>
            </li>

          </ol>
        </nav>
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
            {PackageData.childImage?.map((item: any, i: any) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden group"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/25" />
                <span className="absolute bottom-4 left-4 text-white font-semibold tracking-wide"></span>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CONTENT */}
          <div className="mx-auto max-w-7xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Title Section */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight break-words">
              {PackageData.title}
            </h1>

            <div className="flex items-center gap-2 mt-3 text-sm">
              <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span className="font-semibold">
                {PackageData.rating || "4.8"}
              </span>
              <span className="text-gray-600">
                ({PackageData.reviews || "120"}) reviews
              </span>
            </div>
          </div>

        {/* Price + CTA - Responsive */}
        <div className="shrink-0 w-full sm:w-auto bg-white/70 backdrop-blur-md border border-orange-100 shadow-xl rounded-2xl px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
            {/* Price Section */}
            <div className="text-center sm:text-left md:text-right w-full sm:w-auto">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Starting from
              </p>
              <div className="flex items-end justify-center sm:justify-start md:justify-end gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-orange-600 flex items-center">
                  <IndianRupee size={28} className="sm:hidden" />
                  <IndianRupee size={34} className="hidden sm:block" />
                  {PackageData.price}
                </span>
                <span className="text-sm text-gray-500 mb-1">/person</span>
              </div>
              <div className="flex justify-center sm:justify-start md:justify-end">
                <span className="inline-block mt-2 text-xs bg-orange-50 text-orange-600 px-3 py-1 rounded-full font-medium">
                  Best Price Guarantee
                </span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => setIsOpen(true)}
              className="w-full sm:w-auto whitespace-nowrap cursor-pointer px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book Now →
            </button>
          </div>
        </div>
         </div>

      </section>
    </>
  );
}
