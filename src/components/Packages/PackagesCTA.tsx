import Image from "next/image";

export default function PackagesCTA() {
  return (
    <section className="py-20 bg-[#FFF7ED]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="relative overflow-hidden rounded-3xl
          bg-linear-to-br from-orange-600 via-orange-500 to-orange-300">

          {/* LIMITED TIME BADGE */}
          <div className="absolute top-6 left-6 z-20">
            <span className="bg-white/95 text-orange-600
              px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
              ⏰ Limited-Time Group Offer
            </span>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center min-h-[420px]">

            {/* LEFT CONTENT */}
            <div className="relative z-10 p-10 md:p-14 text-white">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Planning a Group Yatra to <br /> Mathura & Vrindavan?
              </h2>

              <p className="mt-4 text-white/90 max-w-xl">
                Get special group discounts and customized itineraries for
                families, senior citizens, temple groups, and bhajan mandalis.
                We handle darshan planning, travel, and comfort.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-white text-orange-600 font-semibold cursor-pointer
                  px-8 py-3 rounded-xl hover:bg-orange-50 transition shadow-md">
                  Get a Callback
                </button>

                <button className="bg-green-500 hover:bg-green-600 cursor-pointer
                  text-white font-semibold px-8 py-3 rounded-xl transition shadow-md">
                  WhatsApp Yatra Expert
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE (DIAGONAL CUT) */}
            <div className="absolute lg:relative right-0 top-0 h-full w-full lg:w-full">
              <div
                className="relative h-full w-full"
                style={{
                  clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
                }}
              >
                <img
                  src="/images/Packages/group-vrindavan-yatra.webp"
                  alt="Group Yatra to Mathura Vrindavan"
                  className="object-cover h-full w-full"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-l
                  from-black/20 via-black/10 to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
