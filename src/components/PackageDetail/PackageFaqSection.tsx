interface PackageFAQ {
  question: string;
  answer: string;
}

const packageFaqs: PackageFAQ[] = [
  {
    question: "What is included in this tour package?",
    answer:
      "This package includes temple darshan, AC cab for sightseeing, pickup & drop, and assistance from a local Braj guide. Exact inclusions may vary based on the itinerary.",
  },
  {
    question: "Is this package suitable for senior citizens?",
    answer:
      "Yes. The itinerary follows a slow pace with rest breaks, minimal walking, and comfortable vehicles. Special care is taken for elders during darshan.",
  },
  {
    question: "Can this package be customized?",
    answer:
      "Absolutely. You can add Govardhan Parikrama, Barsana, Nandgaon, or adjust pickup points, dates, and duration as per your needs.",
  },
  {
    question: "Are hotels included in this package?",
    answer:
      "Hotel stays are included only in multi-day packages. One-day tours do not include accommodation unless mentioned explicitly.",
  },
  {
    question: "What is the best time to visit Vrindavan?",
    answer:
      "October to March offers pleasant weather. Festivals like Janmashtami and Holi are spiritually vibrant but very crowded.",
  },
];

export default function PackageFaqSection({PackageData} : any) {
  return (
    <section className="py-24 bg-[#FFF7ED]">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full 
            bg-orange-100 text-orange-600 text-sm font-semibold mb-4">
            Need Help?
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-3 h-[3px] w-44 
            bg-gradient-to-r from-orange-600 via-orange-400 to-transparent rounded-full" />

          <p className="mt-4 text-gray-700 max-w-2xl">
            Clear answers to common questions about this tour package,
            so you can plan your Mathura–Vrindavan yatra with confidence.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-5">
          {PackageData.faqs.map((faq : any , index : any) => (
            <details
              key={index}
              className="group relative bg-white rounded-2xl 
              shadow-sm hover:shadow-md transition overflow-hidden"
            >
              {/* LEFT ACCENT */}
              <div className="absolute left-0 top-0 h-full w-1 
                bg-gradient-to-b from-orange-500 to-orange-300" />

              <summary className="list-none cursor-pointer px-6 py-5 
                flex items-start justify-between gap-6">
                <h3 className="font-semibold text-gray-900 text-base md:text-lg leading-snug">
                  {faq.question}
                </h3>

                {/* ICON */}
                <span className="mt-1 text-orange-500 transition-transform 
                  group-open:rotate-180">
                  ⌄
                </span>
              </summary>

              {/* ANSWER */}
              <div className="px-6 pb-6 pt-1">
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
