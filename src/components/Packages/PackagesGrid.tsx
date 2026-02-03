import Image from "next/image";
import { CheckCircle } from "lucide-react";

const packages = [
  {
    title: "Mathura & Vrindavan Tour",
    duration: "2D / 1N",
    location: "Krishna Janmabhoomi · Vrindavan",
    price: "4,999",
    image: "/images/Packages/mathura-vrindavan.webp",
  },
  {
    title: "Vrindavan Darshan Tour",
    duration: "1 Day",
    location: "Banke Bihari · ISKCON · Prem Mandir",
    price: "2,999",
    image: "/images/Packages/vrindavan-darshan.webp",
  },
  {
    title: "Govardhan Parikrama Tour",
    duration: "1 Day",
    location: "Govardhan Hill · Radha Kund",
    price: "6,999",
    image: "/images/Packages/govardhan.webp",
  },
  {
    title: "Barsana & Nandgaon Tour",
    duration: "1 Day",
    location: "Radha Rani Temple · Nandgaon",
    price: "3,999",
    image: "/images/Packages/barsana.webp",
  },
  // add more safely
];

export default function PackagesGrid() {
  return (
    <section className="bg-[#FFF7ED] py-20 rounded-2xl mx-6 my-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Tour Packages
          </h2>
          <div className="mt-3 h-[3px] w-40 bg-gradient-to-r from-orange-600 via-orange-400 to-transparent rounded-full" />
          <p className="mt-4 text-gray-700 max-w-2xl">
            Explore our carefully curated Mathura & Vrindavan tour packages,
            designed for comfort, devotion, and peaceful darshan.
          </p>
        </div>

        {/* SCROLLABLE GRID */}
        <div
          className="h-[75vh] overflow-y-auto pr-2 orange-scrollbar"
          style={{ scrollbarGutter: "stable" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <article
                key={index}
                className="bg-white rounded-3xl shadow-md hover:shadow-lg transition overflow-hidden"
              >
                {/* IMAGE */}
                <div className="relative h-56">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />

                  {/* DURATION BADGE */}
                  <span className="absolute top-4 right-4 bg-orange-500 text-white
                    text-sm font-semibold px-3 py-1 rounded-full">
                    {pkg.duration}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {pkg.title}
                  </h3>

                  <p className="mt-1 text-gray-600 text-sm">
                    {pkg.location}
                  </p>

                  {/* HIGHLIGHTS */}
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-700">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      AC Cab Included
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Local Braj Guide
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Temple Darshan
                    </span>
                  </div>

                  {/* PRICE + CTA */}
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-lg font-bold text-orange-600">
                      ₹{pkg.price}
                      <span className="text-sm text-gray-500 font-normal">
                        /person
                      </span>
                    </p>

                    <button className="bg-orange-500 hover:bg-orange-600
                      text-white px-5 py-2 rounded-full text-sm font-semibold">
                      Book Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
