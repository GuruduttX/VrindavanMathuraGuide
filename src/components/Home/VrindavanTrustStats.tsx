import { Users, CalendarCheck, Star, MapPin } from "lucide-react";
import CountUp from "@/utils/CountUp";

const stats = [
  {
    icon: Users,
    value: 25,
    suffix: "K+",
    label: "Happy Pilgrims",
  },
  {
    icon: CalendarCheck,
    value: 8,
    suffix: "+",
    label: "Years of Seva",
  },
  {
    icon: Star,
    value: 4.5,
    suffix: "/5",
    label: "Devotee Satisfaction",
  },
  {
    icon: MapPin,
    value: 100,
    suffix: "%",
    label: "Vrindavan-Focused Tours",
  },
];

export default function VrindavanTrustStats() {
  return (
    <section className="py-20 bg-[#FFF7ED]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-lg p-10 md:p-14">

          {/* HEADER */}
          <div className="mb-12">
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-10 bg-orange-500 rounded-full mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Trusted Vrindavan Yatra Experience
                </h2>
                <p className="mt-3 text-gray-600 max-w-3xl">
                  Thousands of devotees trust us every year for peaceful,
                  well-planned Vrindavan tour packages focused on darshan,
                  parikrama, and spiritual comfort.
                </p>
              </div>
            </div>
          </div>

             {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div key={index} className="flex items-start gap-4">
                  {/* ICON */}
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className="text-4xl font-bold text-orange-500">
                      <CountUp prefix="" end={stat.value} suffix={stat.suffix} />
                    </h3>
                    <p className="mt-1 text-gray-700 font-medium">
                      {stat.label}
                    </p>
                  </div>

                  {/* DIVIDER (except last item) */}
                  {index !== stats.length - 1 && (
                    <div className="ml-6 hidden md:block bg-linear-to-br from-orange-100 via-orange-400 to-amber-100 h-16 w-0.5" />
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
