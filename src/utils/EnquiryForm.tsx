"use client";

import { X, Phone, ShieldCheck, Zap, MapPin } from "lucide-react";

interface EnquiryPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function EnquiryPopup({ open, onClose }: EnquiryPopupProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative bg-white w-full max-w-5xl mx-4 rounded-3xl shadow-xl max-h-[90vh] overflow-y-auto overflow-hidden z-10">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:bg-gray-100 cursor-pointer"
        >
          <X />
        </button>

        {/* HEADER */}
        <div className="p-8 border-b bg-[#FFF7ED]">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            QUICK ENQUIRY
          </span>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Plan Your Braj Tour
              </h2>
              <p className="mt-2 text-gray-600">
                Share your details. Our team will contact you shortly with the
                best route & package plan.
              </p>

              {/* TRUST BADGES */}
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border cursor-pointer">
                  <ShieldCheck className="w-4 h-4 text-orange-500" /> Trusted
                </span>
                <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border cursor-pointer">
                  <Zap className="w-4 h-4 text-orange-500" /> Fast Response
                </span>
                <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border cursor-pointer">
                  <MapPin className="w-4 h-4 text-orange-500" /> Local Experts
                </span>
              </div>
            </div>

            {/* CALL BOX */}
            <div className="bg-white rounded-2xl p-4 shadow border">
              <p className="text-sm text-gray-500">Call Now</p>
              <p className="font-semibold text-gray-900 mb-4">+91 111613003</p>
              <a  href="https://wa.me/9400599250" className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl py-2 px-4 font-semibold cursor-pointer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <input className="input cursor-pointer" placeholder="Full Name*" />
          <input className="input cursor-pointer" placeholder="Phone Number*" />
          <input className="input cursor-pointer" placeholder="Email*" />

          <input className="input" placeholder="Pickup & Drop*" />
          <select className="input cursor-pointer">
            <option>Hotel Category*</option>
            <option>Budget</option>
            <option>3 Star</option>
            <option>4 Star</option>
            <option>5 Star</option>
          </select>
          <input className="input" placeholder="Adults*" />

          <input className="input cursor-pointer" placeholder="Children" />
          <input className="input cursor-pointer" type="date" />
          <input className="input cursor-pointer" type="date" />

          <textarea
            className="md:col-span-3 input h-28 resize-none"
            placeholder="Message / Requirements"
          />

          {/* SECURITY CHECK */}
          {/* <div className="md:col-span-3 bg-orange-50 border border-dashed border-orange-300 rounded-xl p-4">
            <label className="text-sm font-semibold text-gray-700">
              Security Check: <span className="text-orange-600">4 + 7</span>
            </label>
            <input className="input mt-2" placeholder="Enter answer cursor-pointer" />
          </div> */}

          {/* ACTIONS */}
          <div className="md:col-span-3 flex flex-wrap gap-4">
            <button className="cursor-pointer bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold">
              Send Enquiry
            </button>

            <button type="button" className="cursor-pointer bg-white border px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call
            </button>

            <button type="button" className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold">
              WhatsApp
            </button>
          </div>

          <p className="md:col-span-3 text-xs text-gray-500">
            By submitting, you agree to be contacted via call or WhatsApp.
          </p>
        </form>
      </div>
    </div>
  );
}
