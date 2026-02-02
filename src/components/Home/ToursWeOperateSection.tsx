import { MapPin, Clock, Users, Footprints } from "lucide-react";

export default function ToursWeOperate() {
  return (
    <section className="py-24 bg-[#FFF7ED]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Tours We Operate
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            We specialize in peaceful, well-planned Vrindavan yatras and
            selected sacred destinations of Braj Bhoomi — focused on darshan,
            parikrama, and spiritual comfort.
          </p>
        </div>

        {/* TOUR CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* TOUR 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
              <MapPin className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Vrindavan Darshan Tour
            </h3>
            <p className="text-gray-600 mb-4">
              Complete darshan of major temples including Banke Bihari,
              ISKCON, Prem Mandir, Nidhivan, and Yamuna Ghats.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Ideal for first-time visitors</li>
              <li>• Elder-friendly pace</li>
              <li>• Half-day & full-day options</li>
            </ul>
          </div>

          {/* TOUR 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
              <Footprints className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Vrindavan Parikrama Yatra
            </h3>
            <p className="text-gray-600 mb-4">
              Guided Vrindavan Parikrama covering sacred kunds,
              groves (vanas), and leelasthal.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Walking or assisted parikrama</li>
              <li>• Spiritual guidance available</li>
              <li>• Morning / evening options</li>
            </ul>
          </div>

          {/* TOUR 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
              <Users className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Group & Family Vrindavan Tours
            </h3>
            <p className="text-gray-600 mb-4">
              Customized tours for families, bhajan mandalis,
              senior citizen groups, and temple yatras.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Custom itinerary</li>
              <li>• Comfortable vehicles</li>
              <li>• Group coordinator support</li>
            </ul>
          </div>

          {/* TOUR 4 */}
          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
              <Clock className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Govardhan Parikrama Tour
            </h3>
            <p className="text-gray-600 mb-4">
              Sacred Govardhan Hill Parikrama with proper halts,
              meals, and spiritual flow.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• 21 km traditional route</li>
              <li>• Walking / vehicle support</li>
              <li>• One-day or two-day plan</li>
            </ul>
          </div>

          {/* TOUR 5 */}
          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
              <MapPin className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Barsana & Nandgaon Tour
            </h3>
            <p className="text-gray-600 mb-4">
              Visit Radha Rani Temple (Barsana) and Nandgaon,
              deeply connected to Braj leelas.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Half-day / full-day</li>
              <li>• Festival special tours</li>
              <li>• Local guidance</li>
            </ul>
          </div>

          {/* TOUR 6 */}
          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
              <Users className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Custom Vrindavan Yatra
            </h3>
            <p className="text-gray-600 mb-4">
              Design your own Vrindavan itinerary based on
              darshan priority, time, and comfort.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Fully customizable</li>
              <li>• One-to-one planning</li>
              <li>• Ideal for repeat visitors</li>
            </ul>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block px-10 py-4 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
          >
            Enquire & Book Your Yatra
          </a>
        </div>

      </div>
    </section>
  );
}
