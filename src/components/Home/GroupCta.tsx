"use client";

import Image from "next/image";

export default function GroupCta() {
  return (
    <section className="max-w-7xl mx-auto px-4 my-20">
      <div className="relative h-[240px] md:h-[280px] rounded-2xl overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <Image
          src="/images/Home/mathura-vrindavan-cta.webp" 
          alt="Mathura Vrindavan Temples"
          fill
          priority
          className="object-cover"
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r 
          from-orange-500 via-orange-500/90 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-xl px-8 md:px-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              Bigger Group? Get special offers <br /> up to{" "}
              <span className="text-yellow-200">50% Off!</span>
            </h2>

            <p className="mt-4 text-sm md:text-base text-orange-100">
              Experience Mathura & Vrindavan with your group.
            </p>

            <button className="mt-6 bg-white text-orange-600 font-semibold 
              px-6 py-3 rounded-lg hover:bg-orange-50 transition">
              Get A Callback
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
