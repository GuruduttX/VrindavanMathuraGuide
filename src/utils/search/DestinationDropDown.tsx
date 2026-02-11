"use client";

import { useState, useRef, useEffect } from "react";


export const destinations = [
  "Gokul",
  "Mathura",
  "Vrindavan",
  "Govardhan",
  "Barsana",
  "Agra",
  "Fatehpur Sikri",
  "Delhi",
  "Bhandirvan"
];




export default function DestinationDropdown({ destination, onChange }: any) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full z-50" ref={containerRef}>
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onClick={() => setOpen((prev) => !prev)}
        onChange={(e) => onChange("destination", e.target.value)}
        className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-orange-50"
      />

      {open && (
        <div className="absolute z-[9999] mt-2 w-full max-h-72 overflow-y-auto rounded-xl border border-orange-200 bg-white shadow-xl no-scrollbar">
          {destinations.map((place) => (
            <div key={place}>
              <div className="sticky top-0 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
                📍 {place}
              </div>

             
                <div
                  key={place}
                  onClick={() => {
                    onChange("destination",place);
                    setOpen(false);
                  }}
                  className="cursor-pointer px-4 py-2 text-sm hover:bg-orange-100"
                >
                  {place}
                </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
