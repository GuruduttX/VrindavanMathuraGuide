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




export default function DestinationDropdown({ selectedDest = [], onChange }: any) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleDestination = (place : string)=>{
    let updated;

    if(selectedDest.includes(place)){
       updated = selectedDest.filter((d : string)=> d !== place);
    }
    else{
       updated = [...selectedDest, place];
    }

    onChange('selectedDest', updated);
  }

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
        value={selectedDest}
        onClick={() => setOpen((prev) => !prev)}
        onChange={(e) => onChange("selectedDest", e.target.value)}
        className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-orange-50"
      />

      {open && (
        <div className="absolute z-[9999] mt-2 w-full max-h-72 overflow-y-auto rounded-xl border border-orange-200 bg-white shadow-xl">
          {destinations.map((place , idx) => (
            <label
              key={idx}
              className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-orange-100 text-sm"
            >
              <input
                type="checkbox"
                checked={selectedDest.includes(place)}
                onChange={() => toggleDestination(place)}
                className="accent-orange-500 w-4 h-4"
              />
              {place}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
