import { HeartHandshake, Star, Flower2, PhoneCall } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Our Mathura–Vrindavan Tours
          </h2>
          <div className="mt-4 mx-auto h-[3px] w-40 bg-linear-to-r from-orange-600 via-orange-400 to-transparent rounded-full" />
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ITEM 1 */}
          <div className="text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-6">
              <HeartHandshake className="w-9 h-9 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              20,000+ Happy Pilgrims
            </h3>
            <p className="text-gray-600">
              Trusted by devotees from all across India for peaceful and
              well-organized Mathura–Vrindavan yatras.
            </p>
          </div>

          {/* ITEM 2 */}
          <div className="text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-6">
              <Star className="w-9 h-9 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              4.9/5 Devotee Rating
            </h3>
            <p className="text-gray-600">
              Highly rated by travelers for comfort, transparency,
              and authentic spiritual experiences.
            </p>
          </div>

          {/* ITEM 3 */}
          <div className="text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-6">
              <Flower2 className="w-9 h-9 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Curated with Seva Bhav
            </h3>
            <p className="text-gray-600">
              Every itinerary is thoughtfully designed around darshan,
              parikrama, and sacred Braj traditions.
            </p>
          </div>

          {/* ITEM 4 */}
          <div className="text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-6">
              <PhoneCall className="w-9 h-9 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              24/7 Yatra Support
            </h3>
            <p className="text-gray-600">
              Our team is always available before, during,
              and after your Vrindavan journey.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
