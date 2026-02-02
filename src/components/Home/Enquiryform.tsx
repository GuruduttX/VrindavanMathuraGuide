import Image from "next/image";

export default function EnquirySection() {
  return (
    <section className="w-full bg-[#fff7ed] py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 items-stretch">

        {/* LEFT SIDE – TEXT + FORM */}
        <div className="flex flex-col justify-center">
          <span className="text-orange-500 font-semibold tracking-wide mb-2">
            PLAN YOUR YATRA
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Begin Your Sacred Journey to{" "}
            <span className="text-orange-600">Mathura & Vrindavan</span>
          </h2>

          <p className="mt-4 text-gray-700 text-lg">
            Discover the divine land of Shri Krishna with peaceful darshan,
            local expertise, and comfortable travel. Share your details and
            our yatra expert will guide you personally.
          </p>

          {/* ENQUIRY FORM */}
          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg border border-orange-200 px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full rounded-lg border border-orange-200 px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <select
              className="w-full rounded-lg border border-orange-200 px-4 py-3
              text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer"
            >
              <option>Select Tour Type</option>
              <option>1 Day Vrindavan Darshan</option>
              <option>Mathura Vrindavan Package</option>
              <option>Govardhan Parikrama</option>
              <option>Custom Yatra Plan</option>
            </select>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600
              text-white font-bold py-4 rounded-xl transition-all cursor-pointer duration-200"
            >
              Get Free Consultation
            </button>
          </form>

          <p className="mt-3 text-sm text-gray-500">
            🔒 Your details are safe. We respect your privacy.
          </p>
        </div>

        {/* RIGHT SIDE – IMAGE WITH MANDIR GLOW */}
        <div className="relative rounded-3xl overflow-hidden min-h-[420px]">
          <Image
            src="/images/mathura-vrindavan.webp"
            alt="Mathura Vrindavan Temple View"
            fill
            priority
            className="object-cover"
          />

          {/* Mandir Aura Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr
            from-orange-600/40 via-yellow-300/20 to-transparent">
          </div>

          {/* Soft Divine Glow */}
          <div className="absolute inset-0 backdrop-brightness-110"></div>
        </div>

      </div>
    </section>
  );
}
