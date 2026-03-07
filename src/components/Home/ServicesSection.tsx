"use client";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: 1,
    title: "VIP Darshan & Puja",
    points: ["Priority Temple Access", "Guided Worship", "Personalized Rituals"],
  },
  {
    id: 2,
    title: "Luxury Transport",
    points: ["Chauffeur-driven Comfort", "Local Tours", "Airport Transfers", "Sedan / SUV / MUV / Urbania"],
  },
  {
    id: 3,
    title: "Certified Spiritual Guides",
    points: ["Expert Knowledge of Local History", "Mythology & Sacred Sites", "Personalised Narration"],
  },
  {
    id: 4,
    title: "Traditional Artists & Bhajans",
    points: ["Live Music", "Local Art", "Devotional Experience"],
  },
  {
    id: 5,
    title: "Yamuna Boating",
    points: ["Serene Boat Rides", "Sunset Views", "Yamuna Aarti Experience"],
  },
  {
    id: 6,
    title: "Seva Arrangements",
    points: ["Organise Offerings", "Gau Daan", "Personalised Temple Contribution"],
  },
  {
    id: 7,
    title: "Photo & Videography Services",
    points: ["Hire Professional Photographer", "Videographer for Content Creation / Events"],
  },
];

function ServiceCard({ s, index }: { s: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
      bg-white border border-orange-200 rounded-xl p-5 shadow-sm
      flex items-center gap-5
      transition-all duration-500
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}
      `}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      {/* TEXT */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[0.82rem] font-semibold text-orange-900 uppercase tracking-wider mb-2">
          {s.title}
        </h3>

        <ul className="flex flex-col gap-[5px]">
          {s.points.map((pt, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-[5px] h-[5px] rounded-full bg-orange-500 mt-[5px]" />
              <span className="text-[0.9rem] text-neutral-700 leading-relaxed">
                {pt}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* IMAGE PLACEHOLDER */}
      <div className="w-[90px] h-[90px] rounded-full flex-shrink-0 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-dashed border-orange-300 flex flex-col items-center justify-center gap-1 overflow-hidden relative">

        {/* Replace with Image */}
        {/* <img src="/image.jpg" className="w-full h-full object-cover rounded-full"/> */}

        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(249,115,22,0.4)"
          strokeWidth="1.5"
        >
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>

        <span className="text-[10px] text-orange-400 tracking-wider">
          Add Image
        </span>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative bg-orange-50 py-20 overflow-hidden ">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse,rgba(249,115,22,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* OM Watermark */}
      <div className="absolute bottom-[2%] right-[2%] text-[clamp(100px,16vw,200px)] text-orange-500/5 font-bold select-none pointer-events-none">
        ॐ
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div ref={headerRef} className="text-center mb-12">

          <div
            className={`
            flex items-center justify-center gap-3 mb-4
            transition-all duration-700
            ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
          >
            <div className="w-[30px] h-[1px] bg-orange-400" />
            <span className="text-[0.82rem] tracking-[0.2em] text-orange-500 uppercase">
              What We Offer
            </span>
            <div className="w-[30px] h-[1px] bg-orange-400" />
          </div>

          <h2
            className={`
            text-[clamp(1.6rem,4vw,2.4rem)] font-semibold text-orange-700 tracking-wider
            transition-all duration-700
            ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
          >
            Vrindavan Guest Services
          </h2>

          {/* UNDERLINE */}
          <div className="flex justify-center items-center gap-2 mt-4">
            <div
              className={`h-[2px] bg-gradient-to-r from-transparent to-orange-500 rounded
              transition-all duration-1000
              ${headerVisible ? "w-[52px]" : "w-0"}
              `}
            />
            <div className="w-[7px] h-[7px] bg-orange-500 rotate-45 opacity-80" />
            <div
              className={`h-[2px] bg-gradient-to-r from-orange-500 to-transparent rounded
              transition-all duration-1000
              ${headerVisible ? "w-[52px]" : "w-0"}
              `}
            />
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-2 gap-4 ">
          {services.map((s, i) => (
            <ServiceCard key={s.id} s={s} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}