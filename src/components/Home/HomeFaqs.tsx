import Image from "next/image";

export default function HomeFAQSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14 items-center">

        {/* LEFT IMAGE */}
        <div
          className="
            relative
            rounded-3xl
            overflow-hidden
            shadow-lg
            h-[260px] sm:h-[320px] md:h-[380px] lg:h-[38vw]
            max-h-[520px]
          "
        >
          <Image
            src="/images/Home/mathura-vrindavan.webp"
            alt="Mathura Vrindavan Spiritual Journey"
            fill
            priority
            className="object-cover"
          />

          {/* soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent" />
        </div>

        {/* RIGHT FAQ */}
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
            FAQs
          </span>

          <h2
            className="
              text-3xl sm:text-4xl
              font-bold
              text-orange-600
              mb-4 sm:mb-6
            "
          >
            Frequently Asked Questions
          </h2>

          <p className="text-gray-700 mb-6 sm:mb-8 max-w-xl text-sm sm:text-base">
            Everything you need to know before planning your sacred journey
            to Mathura & Vrindavan.
          </p>

          <div className="space-y-3 sm:space-y-4">

            <details className="group rounded-2xl border border-orange-200 p-4 sm:p-5">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-800 text-sm sm:text-base">
                Is Mathura & Vrindavan suitable for senior citizens?
                <span className="transition-transform group-open:rotate-180 text-orange-500">
                  ▼
                </span>
              </summary>
              <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                Yes. We design slow-paced yatras with proper breaks,
                comfortable vehicles, and easy temple access for elders.
              </p>
            </details>

            <details className="group rounded-2xl border border-orange-200 p-4 sm:p-5">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-800 text-sm sm:text-base">
                What is the best time to visit Vrindavan?
                <span className="transition-transform group-open:rotate-180 text-orange-500">
                  ▼
                </span>
              </summary>
              <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                October to March is ideal. Festivals like Janmashtami and
                Holi offer divine energy but attract heavy crowds.
              </p>
            </details>

            <details className="group rounded-2xl border border-orange-200 p-4 sm:p-5">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-800 text-sm sm:text-base">
                Do you cover Govardhan & Barsana?
                <span className="transition-transform group-open:rotate-180 text-orange-500">
                  ▼
                </span>
              </summary>
              <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                Yes. Our packages include Govardhan Parikrama, Barsana,
                Nandgaon, and nearby sacred destinations.
              </p>
            </details>

            <details className="group rounded-2xl border border-orange-200 p-4 sm:p-5">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-800 text-sm sm:text-base">
                Are your packages customizable?
                <span className="transition-transform group-open:rotate-180 text-orange-500">
                  ▼
                </span>
              </summary>
              <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                Absolutely. We customize your yatra based on time, comfort,
                darshan preference, and group size.
              </p>
            </details>

          </div>
        </div>
      </div>
    </section>
  );
}
