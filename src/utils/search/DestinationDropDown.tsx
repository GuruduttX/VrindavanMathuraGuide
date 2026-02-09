"use client";

import { useState, useRef, useEffect } from "react";


export const destinations = [
  {
    group: "Mathura",
    items: [
      "Shri Krishna Janmabhoomi",
      "Dwarkadhish Temple",
      "Vishram Ghat",
      "Gita Mandir",
      "Govardhan Mandir",
      "Government Museum",
      "Kans Qila",
      "Jama Masjid",
    ],
  },
  {
    group: "Vrindavan",
    items: [
      "Banke Bihari Temple",
      "ISKCON Temple",
      "Prem Mandir",
      "Radha Raman Temple",
      "Radha Vallabh Temple",
      "Shahji Temple",
      "Madan Mohan Temple",
      "Seva Kunj",
      "Nidhivan",
      "Keshi Ghat",
      "Imli Tala",
    ],
  },
  {
    group: "Govardhan",
    items: [
      "Govardhan Hill",
      "Govardhan Parikrama",
      "Mansi Ganga",
      "Punchari Ka Lotha",
      "Radha Kund",
      "Shyam Kund",
      "Kusum Sarovar",
      "Suraj Kund",
    ],
  },
  {
    group: "Barsana",
    items: [
      "Radha Rani Temple",
      "Rangeeli Mahal",
      "Mor Kutir",
      "Lathmar Holi Site",
    ],
  },
  {
    group: "Nandgaon",
    items: ["Nand Bhavan", "Pan Sarovar", "Charan Pahadi"],
  },
  {
    group: "Gokul",
    items: [
      "Nand Bhavan",
      "Chaurasi Khamba",
      "Raman Reti",
      "Brahmand Ghat",
    ],
  },
  {
    group: "Baldev",
    items: ["Dauji Temple", "Huranga Holi Site"],
  },
];



export default function DestinationDropdown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
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
        value={value}
        onClick={() => setOpen((prev) => !prev)}
        onChange={(e) => setValue(e.target.value)}
        className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-orange-50"
      />

      {open && (
        <div className="absolute z-[9999] mt-2 w-full max-h-72 overflow-y-auto rounded-xl border border-orange-200 bg-white shadow-xl no-scrollbar">
          {destinations.map((section) => (
            <div key={section.group}>
              <div className="sticky top-0 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
                📍 {section.group}
              </div>

              {section.items.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setValue(item);
                    setOpen(false);
                  }}
                  className="cursor-pointer px-4 py-2 text-sm hover:bg-orange-100"
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
