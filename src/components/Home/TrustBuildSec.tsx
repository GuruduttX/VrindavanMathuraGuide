"use client";

import {
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Car,
  Users,
  PhoneCall,
  Flower2,
} from "lucide-react";

const trustCards = [
  {
    title: "Born in Braj Bhoomi",
    desc: "We are locals of Mathura–Vrindavan. Every route and temple is known to us.",
    icon: MapPin,
  },
  {
    title: "Yatra, Not Just a Tour",
    desc: "Planned around darshan, aartis and parikrama — never rushed.",
    icon: Flower2,
  },
  {
    title: "100% Transparent Pricing",
    desc: "No hidden charges. No last-minute surprises.",
    icon: ShieldCheck,
  },
  {
    title: "Verified Vehicles & Drivers",
    desc: "Clean vehicles with pilgrim-experienced drivers.",
    icon: Car,
  },
  {
    title: "Elder & Family Friendly",
    desc: "Slow pace journeys with proper breaks.",
    icon: Users,
  },
  {
    title: "Real Human Support",
    desc: "Real people before, during and after your yatra.",
    icon: PhoneCall,
  },
  {
    title: "Seva Bhav",
    desc: "This is not business — it is service to devotees.",
    icon: HeartHandshake,
  },
];

export default function TrustBuildingSection() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 leading-tight">
            Trust is built by <br /> devotion & honesty
          </h2>

          <p className="mt-6 text-gray-700 text-lg max-w-xl">
            Every journey to Mathura & Vrindavan is sacred.
            We treat your yatra with the same respect
            as our own family’s pilgrimage.
          </p>

          <p className="mt-4 italic text-orange-500">
            “Yatra is not travel — it is faith.”
          </p>
        </div>

        {/* CSS AUTO SCROLL */}
        <div className="relative">
          <div className="overflow-hidden ">
            <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
              {[...trustCards, ...trustCards].map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={index}
                    className="min-w-[280px] bg-gradient-to-br from-orange-500 to-orange-400 cursor-pointer text-white rounded-3xl p-6 shadow-lg"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold mb-2">
                      {card.title}
                    </h3>

                    <p className="text-sm text-white/90 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* fade edge */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
