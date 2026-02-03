import Image from "next/image";
import { Car, Users, MapPin, User , Calendar ,Search } from 'lucide-react'


interface PackageHeroProps {
  badge: string;
  title: string;
  description: string;
  image: string;
  price?: string;
}



export default function PackageHero({
  badge,
  title,
  description,
  image,
  price,
}: PackageHeroProps) {
  return (
    <section className="bg-[#fff7ed] py-20 bg-linear-to-br from-orange-800 via-orange-600 to-orange-500">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block bg-orange-100 text-orange-600
            px-4 py-1 rounded-full text-sm font-semibold mb-4">
            {badge} 
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-100 leading-tight">
            {title} 
          </h1>

          <p className="mt-4 text-lg text-gray-200 max-w-xl">
            {description}
          </p>

         {/* HIGHLIGHTS MARQUEE */}
        <div className="mt-6 overflow-hidden">
        <div className="flex gap-3 w-max animate-marquee-slow">           
            <button className="px-4 py-2 bg-white/90 text-orange-700 
                border border-orange-200 rounded-full text-sm font-semibold">
                <span className="flex items-center gap-2">
                    <Car size={16} />
                    AC Cab Included
                </span>
            </button>

            {/* Guide */}
            <button className="px-4 py-2 bg-white/90 text-orange-700 
            border border-orange-200 rounded-full text-sm font-semibold">
            <span className="flex items-center gap-2">
                <User size={16} />
                Local Braj Guide
            </span>
            </button>

            {/* Temple Darshan */}
            <button className="px-4 py-2 bg-white/90 text-orange-700 
            border border-orange-200 rounded-full text-sm font-semibold">
            <span className="flex items-center gap-2">
                <MapPin size={16} />
                Temple Darshan
            </span>
            </button>

            {/* Pickup Drop */}
            <button className="px-4 py-2 bg-white/90 text-orange-700 
            border border-orange-200 rounded-full text-sm font-semibold">
            <span className="flex items-center gap-2">
                <Car size={16} />
                Pickup & Drop
            </span>
            </button>

            {/* duplicate for smooth loop */}
            <button className="px-4 py-2 bg-white/90 text-orange-700 
            border border-orange-200 rounded-full text-sm font-semibold">
            <span className="flex items-center gap-2">
                <Car size={16} />
                AC Cab Included
            </span>
            </button>

            <button className="px-4 py-2 bg-white/90 text-orange-700 
            border border-orange-200 rounded-full text-sm font-semibold">
            <span className="flex items-center gap-2">
                <User size={16} />
                Local Braj Guide
            </span>
            </button>

            <button className="px-4 py-2 bg-white/90 text-orange-700 
            border border-orange-200 rounded-full text-sm font-semibold">
            <span className="flex items-center gap-2">
                <MapPin size={16} />
                Temple Darshan
            </span>
            </button>

            <button className="px-4 py-2 bg-white/90 text-orange-700 
            border border-orange-200 rounded-full text-sm font-semibold">
            <span className="flex items-center gap-2">
                <Car size={16} />
                Pickup & Drop
            </span>
            </button>

        </div>
        </div>

          {/* PRICE + CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {price && (
              <p className="text-2xl font-bold text-white">
                ₹{price}
                <span className="text-sm text-gray-100 font-normal">
                  /person
                </span>
              </p>
            )}

            <button className="bg-orange-500 hover:bg-orange-400
              text-white px-8 py-3 rounded-xl font-semibold cursor-pointer">
              Book Now
            </button>

            <button className="bg-green-500 hover:bg-green-600 cursor-pointer
              text-white px-8 py-3 rounded-xl font-semibold">
              WhatsApp Expert
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[420px] rounded-3xl overflow-hidden">
          <Image
            src={image  || "/images/Packages/Package-Hero.webp"}
            alt={title}
            fill
            priority
            className="object-cover"
          />

          {/* Orange Mandir Glow */}
          {/* <div className="absolute inset-0 bg-gradient-to-tr
            from-orange-600/40 via-yellow-300/20 to-transparent" /> */}
        </div>

      </div>
      
      {/* Serach Bar,  */}
      <div className="mt-10 max-w-5xl mx-auto rounded-4xl bg-white/90 p-4 shadow-lg shadow-orange-400 backdrop-blur-md hover:shadow-xl hover:shadow-yellow-500 cursor-pointer transition border-2 border-orange-400">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* Destination */}
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 px-4 py-3">
              <MapPin className="text-orange-500" />
              <input
                type="text"
                placeholder="Destination"
                className="w-full bg-transparent text-sm outline-none rounded-3xl"
              />
            </div>

            {/* Date */}
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 px-4 py-3">
              <Calendar className="text-orange-500" />
              <input
                type="date"
                className="w-full bg-transparent text-sm outline-none rounded-4xl"
              />
            </div>

            {/* Travelers */}
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 px-4 py-3">
              <Users className="text-orange-500" />
              <input
                type="number"
                placeholder="Travelers"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>

            {/* Button */}
            <button className="flex items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg cursor-pointer">
              <Search size={18} />
              Search
            </button>
          </div>
     </div>
    </section>
  );
}
