"use client";

import { useState } from "react";
import QuickEnquiry from "./QuickEnquiry";
import { Phone } from "lucide-react";

export default function GlobalQuickEnquiry() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed bottom-14 left-6 z-40
          h-18 w-18 rounded-full
          bg-gradient-to-br from-orange-500 to-amber-500
          text-white
          flex items-center justify-center
          shadow-xl
          hover:scale-110 transition cursor-pointer
        "
      >
        <Phone />
      </button>

      {/* Popup */}
      <QuickEnquiry open={open} onClose={() => setOpen(false)} />
    </>
  );
}
