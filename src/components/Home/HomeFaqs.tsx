import Image from "next/image";



export default function HomeFAQSection() {
  return (
    <section className="bg-[#fff7ed] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <div className="relative rounded-3xl h-[38vw] overflow-hidden shadow-lg">
            

            <Image
                src={'/images/Home/mathura-vrindavan.webp'}
                alt="Mathura Vrindavan Spiritual Journey"
                className="object-cover w-full h-full"
                fill
                priority
            />

            
          

          {/* soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent" />
          </div>

        {/* RIGHT FAQ */}
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
            FAQs
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-700 mb-8 max-w-xl">
            Everything you need to know before planning your sacred journey
            to Mathura & Vrindavan.
          </p>

          <div className="space-y-4">
            
            <details className="group rounded-2xl border border-orange-200 p-5">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-800">
                Is Mathura & Vrindavan suitable for senior citizens?
                <span className="transition-transform group-open:rotate-180 text-orange-500">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed cursor-pointer">
                Yes. We design slow-paced yatras with proper breaks, 
                comfortable vehicles, and easy temple access for elders.
              </p>
            </details>

            <details className="group rounded-2xl border border-orange-200 p-5">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-800 cursor-pointer">
                What is the best time to visit Vrindavan?
                <span className="transition-transform group-open:rotate-180 text-orange-500">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                October to March is ideal. Festivals like Janmashtami and
                Holi offer divine energy but attract heavy crowds.
              </p>
            </details>

            <details className="group rounded-2xl border border-orange-200 p-5">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-800">
                Do you cover Govardhan & Barsana?
                <span className="transition-transform group-open:rotate-180 text-orange-500">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes. Our packages include Govardhan Parikrama, Barsana,
                Nandgaon, and nearby sacred destinations.
              </p>
            </details>

            <details className="group rounded-2xl border border-orange-200 p-5">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-800">
                Are your packages customizable?
                <span className="transition-transform group-open:rotate-180 text-orange-500">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
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
