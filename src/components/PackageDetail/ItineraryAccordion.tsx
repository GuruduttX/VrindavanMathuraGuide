"use client"

import { useState } from "react";
import { ChevronDown, MapPin, Clock } from "lucide-react";



export default function ItineraryAccordion({PackageData} : any) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="w-full max-w-4xl p-5 space-y-4">
      <div className="text-2xl font-bold">Itinerary</div>
      {PackageData.itinerary.map((item : any , index : any) => {
        const isOpen = active === index;

        return (
          <div
            key={index}
            className={`group rounded-2xl border transition-all duration-300
            ${
              isOpen
                ? "border-orange-500 bg-orange-50 shadow-lg shadow-orange-200"
                : "border-gray-200 bg-white hover:border-orange-300"
            }`}
          >
            {/* Header */}
            <button
              onClick={() => setActive(isOpen ? null : index)}
              className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {/* Day Badge */}
                <span className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-1 text-sm font-bold text-white shadow">
                  Day {item.day}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>

              {/* Arrow */}
              <ChevronDown
                className={`h-6 w-6 text-orange-500 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6 pt-2 text-gray-700 space-y-4">
                {/* Meta Info */}
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>Full Day</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Guided Experience</span>
                  </div>
                </div>

                {/* Description */}
                <p className="leading-relaxed">
                  {item.description}
                </p>

                {/* Accent Line */}
                <div className="h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
