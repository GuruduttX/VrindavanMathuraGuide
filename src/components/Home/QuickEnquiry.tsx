"use client";

import { X, Phone } from "lucide-react";
import Image from "next/image";

interface QuickEnquiryProps {
  open: boolean;
  onClose: () => void;
}

export default function QuickEnquiry({ open, onClose }: QuickEnquiryProps) {
  if (!open) return null;

  return (
    <div className="fixed top-23 left-5 inset-0 z-50 flex items-center cursor-pointer">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0"
      />

      {/* Card */}
      <div
        className="
        relative w-[90%] max-w-sm
        rounded-3xl p-6
        bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100
        shadow-[0_20px_60px_rgba(255,140,0,0.35)]
        animate-popup
      "
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white p-2 shadow hover:scale-110 transition cursor-pointer"
        >
          <X className="h-4 w-4 text-orange-700" />
        </button>

        {/* Avatar */}
        <div className="absolute -top-10 left-6">
          <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 p-1 shadow-lg">
            <div className="h-full w-full overflow-hidden rounded-full bg-white">
              <Image
                src="/images/Home/mathura-vrindavan.webp" // replace with your image
                alt="Tour Assistant"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-10">
          <h2 className="text-xl font-extrabold text-orange-900">
            Quick Enquiry
          </h2>
          <p className="mt-1 text-sm text-orange-700">
            We’ll contact you shortly 🌼
          </p>

          {/* Inputs */}
          <div className="mt-5 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-full border border-orange-200 bg-white/80 px-5 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full rounded-full border border-orange-200 bg-white/80 px-5 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* CTA */}
          <button
            className="
            mt-6 flex w-full items-center justify-center gap-2
            rounded-full py-3
            bg-gradient-to-r from-orange-600 to-amber-500
            text-white font-semibold
            shadow-lg
            hover:scale-[1.03] hover:shadow-xl
            transition-all cursor-pointer
          "
          >
            <Phone className="h-4 w-4" />
            Call Now
          </button>
        </div>
      </div>

      
    </div>
  );
}
