import TourCard from "./TourCard";

const tours = [
  {
    title: "1 Day Vrindavan Darshan",
    subtitle: "Banke Bihari • Prem Mandir • ISKCON",
    duration: "1 Day",
    price: "1,999",
    image: "/images/Home/oneday-vrindavan.webp",
  },
  {
    title: "Mathura & Vrindavan Tour",
    subtitle: "Krishna Janmabhoomi • Vrindavan",
    duration: "2D / 1N",
    price: "4,999",
    image: "/images/Home/mathura-vrindavan-second.webp",
  },
  {
    title: "Govardhan Parikrama",
    subtitle: "Govardhan Hill • Radha Kund",
    duration: "1 Day",
    price: "2,499",
    image: "/images/Home/govardhan.webp",
  },
  {
    title: "Vrindavan Weekend Yatra",
    subtitle: "Darshan • Aarti • Stay",
    duration: "3D / 2N",
    price: "7,999",
    image: "/images/tours/vrindavan-weekend.jpg",
  },
  {
    title: "Same Day Agra–Mathura",
    subtitle: "Taj Mahal • Mathura",
    duration: "1 Day",
    price: "3,999",
    image: "/images/tours/agra-mathura.jpg",
  },
  {
    title: "Braj 84 Kos Yatra",
    subtitle: "Complete Braj Mandal",
    duration: "7 Days",
    price: "24,999",
    image: "/images/tours/braj-84kos.jpg",
  },
  {
    title: "Senior Citizen Special",
    subtitle: "Comfortable & Slow Pace",
    duration: "2D / 1N",
    price: "5,499",
    image: "/images/tours/senior.jpg",
  },
];

export default function PopularTours() {
  return (
    <section className="py-20 bg-[#fff7ed] mt-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Popular Mathura–Vrindavan Packages
            </h2>
            <p className="mt-2 text-gray-600">
              Most loved spiritual tours by pilgrims
            </p>
          </div>

          <button className="hidden  cursor-pointer md:block text-orange-600 font-semibold">
            View All →
          </button>
        </div>

        <div className="relative">
          <div
            className="
              flex gap-6 overflow-x-auto pb-4
              scroll-smooth
              snap-x snap-mandatory
              orange-scrollbar
            
            "
          >
            {tours.map((tour, index) => (
              <div
                key={index}
                className="
                  min-w-[85%]
                  sm:min-w-[48%]
                  lg:min-w-[32%]
                  snap-start
                "
              >
                <TourCard {...tour} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
