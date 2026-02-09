import { MapPin, Calendar, Users, Search } from "lucide-react";
import DestinationDropdown from "../../utils/search/DestinationDropDown";
import SearchBar from "@/utils/search/SearchBar";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full">


      {/* Orange Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#b3500a] via-[#cf7602] to-[#c45800]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-12">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-5 py-2 text-sm font-medium text-orange-200 backdrop-blur">
          🔱 Experience Divine Spirituality
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
          Discover the Sacred Essence of{" "}
          <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Mathura & Vrindavan
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg text-orange-100/90">
          Walk through ancient temples, sacred ghats, and timeless traditions.Curated spiritual journeys designed for peace, devotion, and comfort.
        </p>

        {/* Search Box */}
        <SearchBar/>


        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {[
            { value: "500+", label: "Sacred Temples" },
            { value: "50K+", label: "Happy Pilgrims" },
            { value: "100+", label: "Curated Tours" },
            { value: "4.9★", label: "Average Rating" },
          ].map((item, i) => (
            <div
              key={i}
              className="
                  rounded-xl
                  bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300
                  p-4 sm:p-5
                  backdrop-blur
                  -z-10
                  transition hover:scale-105
                  cursor-pointer
                "
            >

              <h3
                className="
                    font-bold text-white
                    text-2xl sm:text-3xl
                    leading-tight
                    whitespace-nowrap
                  "
              >
                {item.value}
              </h3>


              <p
                className="
                    mt-1
                    text-xs sm:text-sm
                    text-orange-200
                    leading-snug
                  "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 h-25 w-full rounded-t-[100%] bg-white" />
    </section>
  );
}
