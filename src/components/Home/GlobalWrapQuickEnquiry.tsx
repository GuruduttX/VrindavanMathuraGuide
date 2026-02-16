"use client";

import { useState } from "react";
import QuickEnquiry from "./QuickEnquiry";
import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export default function GlobalQuickEnquiry() {
  const [open, setOpen] = useState(true);
  const pathname  = usePathname();

  if(pathname.startsWith('/admin')){
    return  null;
  }

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-14 left-6 z-40">

  {/* Wave Ring */}
  <span className="absolute inset-0 rounded-full bg-orange-400 opacity-40 animate-ping"></span>

  {/* Soft Outer Glow */}
  <span className="absolute inset-0 rounded-full bg-orange-500 blur-xl opacity-40"></span>

  {/* Main Button */}
  <button
    onClick={() => setOpen(true)}
    className="
      relative
      h-16 w-16
      rounded-full
      bg-gradient-to-br from-orange-500 to-amber-500
      text-white
      flex items-center justify-center
      shadow-[0_0_25px_rgba(255,140,0,0.6)]
      hover:scale-110
      transition
      duration-800
      cursor-pointer
    "
  >
    <Phone className="w-6 h-6" />
  </button>

</div>


      {/* Popup */}
      <QuickEnquiry open={open} onClose={() => setOpen(false)} />
    </>
  );
}
