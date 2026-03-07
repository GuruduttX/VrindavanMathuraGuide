"use client"
import Image from "next/image";
import { Check , CheckCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import EnquiryPopup from "@/utils/EnquiryForm";
import { useState } from "react";


interface TourCardProps {
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  image: string;
  slug : string;
}

export default function TourCard({
  title,
  subtitle,
  duration,
  price,
  image,
  slug,
}: TourCardProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
       <EnquiryPopup open={isOpen} onClose={()=>setIsOpen(false)}/>
       <div className="rounded-2xl overflow-hidden cursor-pointer bg-white shadow-sm hover:shadow-xl transition duration-300">
      
      {/* IMAGE */}
      <div className="relative h-60" onClick={()=>router.push(slug)}>
        <img
          src={image}
          alt={title}
          // fill
          className="object-cover w-full h-full"
        />

        {/* Duration Badge */}
        {/* <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {duration}
        </span> */}
      </div>

      {/* CONTENT */}
      <div className="p-5" >
        <h3 className="text-lg font-bold text-gray-900 leading-tight h-16" onClick={()=>router.push(slug)}>
          {title}
        </h3>

        <p className="text-sm text-gray-600 mt-1" onClick={()=>router.push(slug)}>
          {subtitle}
        </p>

        {/* FEATURES */}
        <ul className="mt-4 space-y-2 text-sm text-gray-700 flex flex-wrap gap-x-6 gap-y-1" onClick={()=>router.push(slug)}>
          <li className="flex gap-2 items-center"> <CheckCircleIcon className="size-5 text-green-400"/> AC Cab Included</li>
          <li className="flex gap-2 items-center"> <CheckCircleIcon className="size-5 text-green-400"/> Local Braj Guide</li>
          <li className="flex gap-2 items-center"> <CheckCircleIcon className="size-5 text-green-400"/> Temple Darshan</li>
        </ul>

        {/* PRICE + CTA */}
        <div className="mt-5 flex items-center justify-between" >

          <div onClick={()=>router.push(slug)}>
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-xl font-bold text-orange-600">
              ₹{price}
              <span className="text-sm text-gray-500 font-normal">
                /person
              </span>
            </p>
          </div>

          <button onClick={()=>setIsOpen(true)} className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl font-semibold text-sm transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
    </>
   
  );
}
