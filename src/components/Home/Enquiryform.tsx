import Image from "next/image";

export default function EnquirySection() {
  return (
    <section className="w-full bg-[#fff7ed] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 px-5 sm:px-6 items-stretch">

        {/* LEFT SIDE – TEXT + FORM */}
        <div className="flex flex-col justify-center">

          <span className="text-orange-500 font-semibold tracking-wide mb-2 text-sm sm:text-base">
            PLAN YOUR YATRA
          </span>

          <h2
            className="
              text-2xl sm:text-3xl md:text-4xl
              font-bold
              text-gray-900
              leading-snug sm:leading-tight
            "
          >
            Begin Your Sacred Journey to{" "}
            <span className="text-orange-600">Mathura & Vrindavan</span>
          </h2>

          <p
            className="
              mt-3 sm:mt-4
              text-gray-700
              text-base sm:text-lg
              leading-relaxed
              max-w-xl
            "
          >
            Discover the divine land of Shri Krishna with peaceful darshan,
            local expertise, and comfortable travel. Share your details and
            our yatra expert will guide you personally.
          </p>

          {/* ENQUIRY FORM */}
          <form className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="
                w-full rounded-lg
                border border-orange-200
                px-4 py-3
                text-sm sm:text-base
                focus:outline-none focus:ring-2 focus:ring-orange-400
              "
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="
                w-full rounded-lg
                border border-orange-200
                px-4 py-3
                text-sm sm:text-base
                focus:outline-none focus:ring-2 focus:ring-orange-400
              "
            />

            <select
              className="
                w-full rounded-lg
                border border-orange-200
                px-4 py-3
                text-sm sm:text-base
                text-gray-700
                focus:outline-none focus:ring-2 focus:ring-orange-400
                cursor-pointer
              "
            >
              <option>Select Tour Type</option>
              <option>1 Day Vrindavan Darshan</option>
              <option>Mathura Vrindavan Package</option>
              <option>Govardhan Parikrama</option>
              <option>Custom Yatra Plan</option>
            </select>

            <button
              type="submit"
              className="
                w-full
                bg-orange-500 hover:bg-orange-600
                text-white font-bold
                py-3.5 sm:py-4
                rounded-xl
                transition-all duration-200
                text-sm sm:text-base
                cursor-pointer
              "
            >
              Get Free Consultation
            </button>
          </form>

          <p className="mt-3 text-xs sm:text-sm text-gray-500">
            🔒 Your details are safe. We respect your privacy.
          </p>
        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div
          className="
            relative
            rounded-3xl
            overflow-hidden
            min-h-[300px] sm:min-h-[360px] lg:min-h-[420px]
          "
        >
          <Image
            src="/images/Home/mathura-vrindavan.webp"
            alt="Mathura Vrindavan Temple View"
            fill
            priority
            className="object-cover"
          />

          {/* Mandir Aura Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-tr
            from-orange-600/40 via-yellow-300/20 to-transparent"
          />

          {/* Soft Divine Glow */}
          <div className="absolute inset-0 backdrop-brightness-110" />
        </div>

      </div>
    </section>
  );
}
